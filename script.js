/* ==========================================================================
   davidmelara.com — comportamiento
   La estela ya no es un objeto: es un fenómeno. El SVG conserva dos funciones
   humildes —la trayectoria como esqueleto y la memoria de lo recorrido— y la
   energía vive en un lienzo físico: organismos con ciclo de vida, movimiento
   sinusoidal, doble cuerpo (núcleo + halo) e inercia en cada cambio.
   Física heredada de V4; arquitectura de recorrido intocada.
   ========================================================================== */

(function () {
  'use strict';

  var reducida = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var svg = document.getElementById('estela');
  var NS = 'http://www.w3.org/2000/svg';

  var capasResiduo = Array.prototype.slice.call(document.querySelectorAll('#estela-residuo path'));
  var guia = capasResiduo[capasResiduo.length - 1]; /* núcleo: referencia geométrica */
  var nodosG = document.getElementById('estela-nodos');
  var origenHalo = document.getElementById('estela-origen-halo');
  var finHalo = document.getElementById('estela-fin-halo');
  var gradiente = document.getElementById('estela-grad');

  var lienzo = document.getElementById('energia');
  var tinta = lienzo ? lienzo.getContext('2d') : null;
  var dpr = Math.min(2, window.devicePixelRatio || 1);

  var largoTotal = 0;
  var polilinea = [];     /* puntos densos de la trayectoria, cada PASO px */
  var PASO = 6;
  var nodos = [];         /* {el, len} acuses de recibo */
  var tramos = [];        /* {top, bottom, factor} temperatura por sección */
  var puntoFinal = null;

  /* temperatura del residuo y factor de la energía, por registro */
  var TEMPERATURAS = {
    'hero':         { color: '#DFC08F', op: 0.95, factor: 1.00 },  /* el fenómeno: máxima */
    'introduccion': { color: '#B9AE95', op: 0.72, factor: 0.70 },  /* se delimita: enfría */
    'idea':         { color: '#D8BC8C', op: 0.88, factor: 0.90 },  /* la proposición: cálida */
    'mecanismo':    { color: '#8A98A0', op: 0.62, factor: 0.60 },  /* analítica: la más fría */
    'framework':    { color: '#C4A87A', op: 0.82, factor: 0.80 },  /* operativa: templada */
    'tecnologia':   { color: '#CBB489', op: 0.86, factor: 0.85 },  /* el instrumento */
    'conversemos':  { color: '#E8CD9C', op: 1.00, factor: 1.00 }   /* máxima otra vez */
  };
  var VENTANA = 420;      /* longitud del frente vivo */
  var MAX_ORGANISMOS = 48;

  /* ---------- retratos: autoría con caída elegante ---------- */
  document.querySelectorAll('.retrato img').forEach(function (img) {
    img.addEventListener('error', function () {
      img.closest('.retrato').classList.add('sin-imagen');
    });
  });

  /* ---------- coordenada x de cada anclaje ---------- */
  function carril() {
    var v = getComputedStyle(document.documentElement).getPropertyValue('--carril');
    var probe = document.createElement('div');
    probe.style.cssText = 'position:absolute;width:' + v + ';visibility:hidden';
    document.body.appendChild(probe);
    var px = probe.offsetWidth;
    document.body.removeChild(probe);
    return px;
  }

  function puntoDe(anclaje, laneX, movil) {
    var r = anclaje.getBoundingClientRect();
    var y = r.top + window.scrollY + r.height / 2;
    var x;
    if (anclaje.dataset.estela === 'origen' || anclaje.dataset.estela === 'fin') {
      x = r.left + window.scrollX; /* el trazo nace y muere en la persona */
    } else if (movil) {
      x = laneX;
    } else {
      x = r.left + window.scrollX;
    }
    return { x: x, y: y, tipo: anclaje.dataset.estela };
  }

  /* ---------- construcción de la trayectoria y la memoria ---------- */
  function construir() {
    var docH = document.documentElement.scrollHeight;
    var docW = document.documentElement.clientWidth;
    svg.setAttribute('width', docW);
    svg.setAttribute('height', docH);
    svg.setAttribute('viewBox', '0 0 ' + docW + ' ' + docH);

    if (lienzo) {
      lienzo.width = window.innerWidth * dpr;
      lienzo.height = window.innerHeight * dpr;
      lienzo.style.width = window.innerWidth + 'px';
      lienzo.style.height = window.innerHeight + 'px';
      tinta.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    var laneX = carril();
    var movil = docW < 640;
    var anclajes = Array.prototype.slice.call(document.querySelectorAll('[data-estela]'));
    var puntos = anclajes.map(function (a) { return puntoDe(a, laneX, movil); });
    puntos.sort(function (a, b) { return a.y - b.y; });
    if (puntos.length < 2) return;

    var d = 'M ' + puntos[0].x + ' ' + puntos[0].y;
    for (var i = 1; i < puntos.length; i++) {
      var p0 = puntos[i - 1], p1 = puntos[i];
      var ym = (p0.y + p1.y) / 2;
      d += ' C ' + p0.x + ' ' + ym + ', ' + p1.x + ' ' + ym + ', ' + p1.x + ' ' + p1.y;
    }
    capasResiduo.forEach(function (p) {
      p.setAttribute('d', d);
    });

    largoTotal = guia.getTotalLength();
    capasResiduo.forEach(function (p) { p.style.strokeDasharray = largoTotal; });

    /* polilínea densa: todas las consultas geométricas se vuelven O(1) */
    polilinea = [];
    for (var L = 0; L <= largoTotal; L += PASO) {
      var pt = guia.getPointAtLength(L);
      polilinea.push({ x: pt.x, y: pt.y });
    }
    puntoFinal = polilinea[polilinea.length - 1];

    /* degradación longitudinal: la temperatura de cada tramo, en la memoria */
    gradiente.setAttribute('x1', 0); gradiente.setAttribute('y1', 0);
    gradiente.setAttribute('x2', 0); gradiente.setAttribute('y2', docH);
    gradiente.innerHTML = '';
    tramos = [];
    Array.prototype.slice.call(document.querySelectorAll('.sec')).forEach(function (sec) {
      var t = TEMPERATURAS[sec.id];
      if (!t) return;
      var r = sec.getBoundingClientRect();
      var top = r.top + window.scrollY, bottom = top + r.height;
      tramos.push({ top: top, bottom: bottom, factor: t.factor });
      var stop = document.createElementNS(NS, 'stop');
      stop.setAttribute('offset', ((top + r.height / 2) / docH).toFixed(4));
      stop.setAttribute('stop-color', t.color);
      stop.setAttribute('stop-opacity', t.op);
      gradiente.appendChild(stop);
    });

    /* nodos: acuses de recibo en costuras, estaciones y extremos */
    nodosG.innerHTML = '';
    nodos = puntos.map(function (p) {
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', p.x);
      c.setAttribute('cy', p.y);
      var terminal = p.tipo === 'origen' || p.tipo === 'fin';
      c.setAttribute('r', terminal ? 5 : 3.5);
      if (terminal) c.classList.add('terminal');
      nodosG.appendChild(c);
      return { el: c, len: largoEnY(p.y) };
    });

    var primero = puntos[0], ultimo = puntos[puntos.length - 1];
    origenHalo.setAttribute('cx', primero.x); origenHalo.setAttribute('cy', primero.y);
    finHalo.setAttribute('cx', ultimo.x); finHalo.setAttribute('cy', ultimo.y);

    pintarMemoria();
  }

  function puntoEn(L) {
    if (!polilinea.length) return { x: 0, y: 0 };
    var f = Math.max(0, Math.min(polilinea.length - 1.001, L / PASO));
    var i = Math.floor(f), t = f - i;
    var a = polilinea[i], b = polilinea[Math.min(i + 1, polilinea.length - 1)];
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
  }

  function largoEnY(y) {
    for (var i = 1; i < polilinea.length; i++) {
      if (polilinea[i].y >= y) {
        var a = polilinea[i - 1], b = polilinea[i];
        var t = b.y === a.y ? 0 : (y - a.y) / (b.y - a.y);
        return (i - 1 + t) * PASO;
      }
    }
    return largoTotal;
  }

  function factorEn(y) {
    for (var i = 0; i < tramos.length; i++) {
      if (y >= tramos[i].top && y <= tramos[i].bottom) return tramos[i].factor;
    }
    return 0.7; /* costuras: la energía viaja serena entre tramos */
  }

  function avance() {
    if (reducida) return largoTotal;
    var lineaY = window.scrollY + window.innerHeight * 0.72;
    return Math.max(0, Math.min(largoTotal, largoEnY(lineaY)));
  }

  /* ---------- memoria: lo recorrido queda (SVG, solo con el scroll) ---------- */
  function pintarMemoria() {
    if (!largoTotal) return;
    var dibujado = avance();
    capasResiduo.forEach(function (p) { p.style.strokeDashoffset = largoTotal - dibujado; });
    finHalo.classList.toggle('entregado', dibujado >= largoTotal - 4);
    nodos.forEach(function (n) {
      n.el.classList.toggle('encendido', n.len <= dibujado + 2);
    });
  }

  var pedido = false;
  function alDesplazar() {
    if (pedido) return;
    pedido = true;
    requestAnimationFrame(function () { pintarMemoria(); pedido = false; });
  }

  /* ==========================================================================
     ENERGÍA — sistema físico sobre la trayectoria (lienzo)
     Cuatro herencias de V4: ciclo de vida, oscilación sinusoidal,
     doble cuerpo (núcleo + halo x2.8), envolvente de opacidad con inercia.
     ========================================================================== */

  var organismos = [];
  var acumulador = 0;
  var factorSuave = 1;      /* inercia térmica */
  var tPrevio = 0;

  function dorado(gold, alfa) {
    var r = Math.round(180 + gold * 62);
    var g = Math.round(150 + gold * 60);
    var b = Math.round(100 + gold * 50);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alfa + ')';
  }

  function nacer(dibujado, entregado) {
    var o;
    if (entregado && puntoFinal) {
      /* la energía se entrega: nace en órbita del retrato final */
      var ang = Math.random() * Math.PI * 2;
      var rad = 5 + Math.random() * 20;
      o = {
        x: puntoFinal.x + Math.cos(ang) * rad,
        y: puntoFinal.y + Math.sin(ang) * rad,
        vx: Math.cos(ang) * 0.05,
        vy: Math.sin(ang) * 0.05 - 0.03
      };
    } else {
      var L = Math.max(0, dibujado - Math.random() * VENTANA * 0.55);
      var base = puntoEn(L);
      o = {
        x: base.x + (Math.random() - 0.5) * 14,
        y: base.y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -(0.05 + Math.random() * 0.12)
      };
    }
    o.r = 0.8 + Math.random() * 1.0;
    o.vida = 0;
    o.vidaMax = 3.1 + Math.random() * 3.9;
    o.fase = Math.random() * Math.PI * 2;
    o.gold = Math.random();
    organismos.push(o);
  }

  function envolvente(prog) {
    /* herencia de V4: entrada lenta, meseta, salida lenta — sin encendidos bruscos */
    if (prog < 0.2) return prog / 0.2;
    if (prog > 0.75) return (1 - prog) / 0.25;
    return 1;
  }

  function cuadro(ts) {
    if (!largoTotal || !tinta) { requestAnimationFrame(cuadro); return; }
    var dt = Math.min(0.05, (ts - tPrevio) / 1000 || 0.016);
    tPrevio = ts;
    var t = ts / 1000;

    var vw = window.innerWidth, vh = window.innerHeight;
    var sx = window.scrollX, sy = window.scrollY;
    tinta.clearRect(0, 0, vw, vh);

    var dibujado = avance();
    var entregado = dibujado >= largoTotal - 4;
    var lineaY = sy + vh * 0.72;
    var objetivo = entregado ? 1 : factorEn(lineaY);
    factorSuave += (objetivo - factorSuave) * Math.min(1, dt * 2.2); /* inercia */
    var F = factorSuave;

    var frente = entregado ? puntoFinal : puntoEn(dibujado);
    var fx = frente.x - sx, fy = frente.y - sy;

    /* ---- atmósfera: halo exterior, enorme y casi imperceptible ---- */
    var respiro = 1 + Math.sin(t * 0.7) * 0.12;
    var R2 = 133 * respiro;
    var atm = tinta.createRadialGradient(fx, fy, 0, fx, fy, R2);
    atm.addColorStop(0, dorado(0.6, 0.05 * F));
    atm.addColorStop(0.5, dorado(0.5, 0.02 * F));
    atm.addColorStop(1, dorado(0.5, 0));
    tinta.fillStyle = atm;
    tinta.beginPath(); tinta.arc(fx, fy, R2, 0, Math.PI * 2); tinta.fill();

    if (!entregado) {
      /* ---- frente vivo: corriente que se desvanece hacia atrás ---- */
      var L1 = Math.max(0, dibujado - VENTANA);
      var segs = 22;
      tinta.lineCap = 'round';
      for (var s = 0; s < segs; s++) {
        var a = L1 + ((dibujado - L1) * s) / segs;
        var b = L1 + ((dibujado - L1) * (s + 1)) / segs;
        var pa = puntoEn(a), pb = puntoEn(b);
        var k = (s + 1) / segs; /* 0 cola → 1 frente */
        var ond = 1 + Math.sin(t * 1.6 + s * 0.9) * 0.18;
        tinta.beginPath();
        tinta.moveTo(pa.x - sx, pa.y - sy);
        tinta.lineTo(pb.x - sx, pb.y - sy);
        tinta.strokeStyle = dorado(0.55, 0.06 * k * F);
        tinta.lineWidth = 6.5 * ond;
        tinta.stroke();
        tinta.beginPath();
        tinta.moveTo(pa.x - sx, pa.y - sy);
        tinta.lineTo(pb.x - sx, pb.y - sy);
        tinta.strokeStyle = dorado(0.85, (0.12 + 0.74 * k * k) * F);
        tinta.lineWidth = 1.4 * ond;
        tinta.stroke();
      }
    }

    /* ---- corazón: núcleo mínimo, muy brillante, respirando ---- */
    var latido = 1 + Math.sin(t * 1.9) * 0.25;
    var halo = tinta.createRadialGradient(fx, fy, 0, fx, fy, 17 * latido);
    halo.addColorStop(0, dorado(1, 0.36 * F));
    halo.addColorStop(1, dorado(1, 0));
    tinta.fillStyle = halo;
    tinta.beginPath(); tinta.arc(fx, fy, 17 * latido, 0, Math.PI * 2); tinta.fill();
    tinta.fillStyle = dorado(1, 0.98 * F);
    tinta.beginPath(); tinta.arc(fx, fy, 1.7 * latido, 0, Math.PI * 2); tinta.fill();

    /* ---- organismos: nacen, oscilan, envejecen, mueren ---- */
    var ritmo = entregado ? 8 : 5.5 + 11 * F;
    acumulador += ritmo * dt;
    while (acumulador >= 1 && organismos.length < MAX_ORGANISMOS) {
      acumulador -= 1;
      nacer(dibujado, entregado);
    }
    acumulador = Math.min(acumulador, 2);

    for (var i = organismos.length - 1; i >= 0; i--) {
      var o = organismos[i];
      o.vida += dt;
      if (o.vida >= o.vidaMax) { organismos.splice(i, 1); continue; }
      /* movimiento orgánico: deriva + microoscilación sinusoidal (V4) */
      o.x += o.vx * dt * 60 + Math.sin(t * 0.9 + o.fase) * 0.11;
      o.y += o.vy * dt * 60 + Math.cos(t * 0.7 + o.fase) * 0.07;

      var prog = o.vida / o.vidaMax;
      var alfa = envolvente(prog) * (0.3 + o.gold * 0.42) * (entregado ? 1 : F);
      var ox = o.x - sx, oy = o.y - sy;
      if (oy < -30 || oy > vh + 30 || alfa <= 0.004) continue;

      /* doble cuerpo: núcleo + halo a 2.8 radios (V4) */
      tinta.beginPath();
      tinta.arc(ox, oy, o.r, 0, Math.PI * 2);
      tinta.fillStyle = dorado(o.gold, alfa);
      tinta.fill();
      tinta.beginPath();
      tinta.arc(ox, oy, o.r * 2.8, 0, Math.PI * 2);
      tinta.fillStyle = dorado(o.gold, alfa * 0.1);
      tinta.fill();
    }

    requestAnimationFrame(cuadro);
  }

  /* ---------- momentos y lámparas ----------
     El índice lateral indexa el marco, no las secciones del sitio: lo mueven
     las cuatro unidades de #framework. Las secciones sin data-moment encienden
     su lámpara pero no tocan el índice, que conserva el último momento leído. */
  var secciones = Array.prototype.slice.call(document.querySelectorAll('.sec'));
  var unidades  = Array.prototype.slice.call(document.querySelectorAll('.momento-unidad'));
  var etiquetas = {};
  document.querySelectorAll('.momento').forEach(function (m) { etiquetas[m.dataset.m] = m; });
  var mapaMomentos = { nace: 'nace', acuerda: 'acuerda', cumple: 'cumple', recuerda: 'recuerda' };

  /* La banda del observador (32%–60% del viewport) es más alta que una unidad,
     así que puede haber dos dentro a la vez. Elegir "la última que disparó" no es
     determinista y parpadea; se elige la más cercana al centro de la banda. */
  var vivos = [];
  var CENTRO_BANDA = 0.46;

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.target.classList.contains('sec')) {
        e.target.classList.toggle('activa', e.isIntersecting);
        /* el índice acompaña al marco: se reutiliza este observador en lugar de añadir otro,
           así que entra y sale con la misma banda que enciende la lámpara de la sección */
        if (e.target.id === 'framework') {
          document.documentElement.classList.toggle('marco-a-la-vista', e.isIntersecting);
        }
      }
      if (!mapaMomentos[e.target.dataset.moment]) return;
      var i = vivos.indexOf(e.target);
      if (e.isIntersecting && i === -1) vivos.push(e.target);
      else if (!e.isIntersecting && i !== -1) vivos.splice(i, 1);
    });

    if (!vivos.length) return;   /* fuera del marco el índice conserva lo leído */

    var centro = window.innerHeight * CENTRO_BANDA, mejor = null, dmin = Infinity;
    vivos.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var d = Math.abs((r.top + r.bottom) / 2 - centro);
      if (d < dmin) { dmin = d; mejor = el; }
    });
    var m = mapaMomentos[mejor.dataset.moment];
    Object.keys(etiquetas).forEach(function (k) {
      etiquetas[k].classList.toggle('activo', k === m);
    });
  }, { rootMargin: '-32% 0px -40% 0px' });
  secciones.concat(unidades).forEach(function (s) { obs.observe(s); });

  /* ---------- revelado direccional ---------- */
  document.querySelectorAll('.sec .marco > *, .momento-unidad').forEach(function (el) {
    el.classList.add('revela');
  });
  if (reducida) {
    document.documentElement.setAttribute('data-motion', 'off');
  } else {
    var obsRevela = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obsRevela.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll('.revela').forEach(function (el) { obsRevela.observe(el); });

    /* El hero se revela entero, no por scroll: es la pantalla de llegada.
       Con el umbral en juego lo hace releva() al aterrizar el corte; sin umbral
       —segunda visita en adelante— nadie lo haría, y la nota de apertura cae en
       la banda de -12% que el observador excluye, es decir, aparecería recién al
       primer scroll. Se revela aquí, que es donde se sabe que el umbral no va. */
    if (document.documentElement.classList.contains('intro-off')) {
      document.querySelectorAll('#hero .revela').forEach(function (el) {
        el.classList.add('visible');
        obsRevela.unobserve(el);
      });
    }
  }

  /* ---------- reconstrucción y arranque ---------- */
  var espera;
  window.addEventListener('resize', function () {
    clearTimeout(espera);
    espera = setTimeout(construir, 180);
  });
  window.addEventListener('scroll', alDesplazar, { passive: true });
  window.addEventListener('load', construir);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(construir);
  construir();

  if (!reducida && tinta) requestAnimationFrame(cuadro);
})();
