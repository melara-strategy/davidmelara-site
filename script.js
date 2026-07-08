/* ==========================================================
   script.js — Estela cinematográfica (Territorio Profesional)
   ADN: ESTELA_DNA.md. Este archivo está FUERA del alcance del
   Aplicador del pipeline (que solo modifica index.html y
   styles.css). Toda modificación de la estela es manual y
   debe validarse contra ESTELA_DNA.md.
   Código intacto de la versión V14 aprobada (estela: 85,
   trayectoria: 95).
   ========================================================== */

(function(){

const canvas = document.getElementById('trail');
if(!canvas) return;
const ctx    = canvas.getContext('2d');
let W, H, particles = [];

function resize(){
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  W = canvas.width;
  H = canvas.height;
  initParticles();
}

/*
  GEOMETRÍA DE LA ESTELA
  ─────────────────────
  Curva paramétrica t ∈ [0,1]:
    x: 4% → 96% del ancho (cubre toda la banda)
    y: parte en H*0.98 (base absoluta de 01)
       sube con aceleración cubic ease-in hasta H*0.02
*/
function curveXY(t){
  const x    = W * (0.04 + t * 0.92);
  const ease = t * t * t;                   // cubic ease-in
  const y    = H * (0.98 - ease * 0.96);   // 0.98 → 0.02
  return {x, y};
}

/*
  DISPERSIÓN — flare final tras el pilar 04
*/
function getSpread(t){
  if(t < 0.75){
    return {
      sx: W * (0.09 + t * 0.14),
      sy: H * (0.10 + t * 0.22)
    };
  }
  const f = (t - 0.75) / 0.25;
  return {
    sx: W * (0.19 + f * 0.52),
    sy: H * (0.28 + f * 0.68)
  };
}

function initParticles(){
  particles = [];
  const base = Math.floor(W * 1.6);
  for(let i = 0; i < base; i++) spawnParticle(true);
}

function spawnParticle(randomAge){
  const t = Math.max(Math.random(), Math.random() * 0.62);

  const pt    = curveXY(t);
  const {sx, sy} = getSpread(t);

  const jx = (Math.random() - 0.5) * sx;
  const jy = (Math.random() - 0.5) * sy;

  const flare   = Math.max(0, t - 0.74);
  const upBoost = flare * H * 0.38 * Math.random();

  particles.push({
    x:       pt.x + jx,
    y:       pt.y + jy - upBoost,
    vx:      (0.08 + Math.random() * 0.10) * (W / 1400),
    vy:     -(0.04 + Math.random() * 0.06) * (H / 800),
    r:       t < 0.5
               ? 0.28 + Math.random() * 1.0
               : 0.40 + Math.random() * 2.6,
    gold:    Math.random(),
    life:    randomAge ? Math.random() : 0,
    maxLife: 0.65 + Math.random() * 0.38,
    t
  });
}

function goldColor(g, a){
  const r  = Math.round(139 + g * 89);
  const gg = Math.round(106 + g * 58);
  const b  = Math.round(47  + g * 46);
  return `rgba(${r},${gg},${b},${a})`;
}

function draw(){
  ctx.clearRect(0, 0, W, H);

  for(let i = particles.length - 1; i >= 0; i--){
    const p = particles[i];

    p.life += 0.0024 + Math.random() * 0.0014;

    p.x += p.vx + Math.sin(Date.now() * 0.00018 + p.life * 9) * 0.06;
    p.y += p.vy + Math.cos(Date.now() * 0.00013 + p.life * 7) * 0.025;

    if(p.life >= p.maxLife){
      particles.splice(i, 1);
      spawnParticle(false);
      continue;
    }

    const prog = p.life / p.maxLife;
    const env  = prog < 0.14 ? prog / 0.14
               : prog > 0.80 ? (1 - prog) / 0.20
               : 1;

    const baseA = 0.34 + p.t * 0.46;
    const alpha = env * baseA * (0.32 + p.gold * 0.52);

    if(alpha < 0.004) continue;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = goldColor(p.gold, alpha);
    ctx.fill();

    if(p.r > 0.9){
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3.0, 0, Math.PI * 2);
      ctx.fillStyle = goldColor(p.gold, alpha * 0.07);
      ctx.fill();
    }

    if(p.r > 1.8 && p.t > 0.65 && p.gold > 0.68 && env > 0.42){
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,238,168,${alpha * 0.88})`;
      ctx.fill();
    }
  }

  requestAnimationFrame(draw);
}

resize();
window.addEventListener('resize', resize);
draw();

})();
