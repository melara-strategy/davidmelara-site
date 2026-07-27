---
name: David Melara — Presencia Ejecutiva
description: Marca personal ejecutiva para mercados especializados en Centroamérica
colors:
  tinta: "#101312"
  hueso: "#EAE7DF"
  cuerpo: "#CFCCC3"
  niebla: "#9CA29B"
  hilo: "#B99B6B"
  hilo-tenue: "rgba(185,155,107,0.55)"
  linea: "rgba(234,231,223,0.14)"
  lamp-hero: "#5E6D78"
  lamp-mecanismo: "#46545F"
  lamp-marco: "#7A6B4F"
  lamp-territorio: "#5C6F66"
  lamp-contacto: "#996F3D"
  nodo-encendido: "#D8B98A"
  estela-hero: "#DFC08F"
  estela-mecanismo: "#8A98A0"
  estela-marco: "#C4A87A"
  estela-territorio: "#A99B79"
  estela-contacto: "#E8CD9C"
typography:
  display:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(42px, 5.2vw, 58px)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 72"
  headline:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(20px, 2vw, 24px)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.01em"
  title:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(21px, 2.3vw, 29px)"
    fontWeight: 300
    lineHeight: 1.4
    fontVariation: "'opsz' 40"
  lead:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(18px, 1.75vw, 22px)"
    fontWeight: 300
    lineHeight: 1.5
  body:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(17px, 1.35vw, 19px)"
    fontWeight: 300
    lineHeight: 1.72
  note:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(15px, 1.2vw, 16px)"
    fontWeight: 300
    lineHeight: 1.6
  display-acotado:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(38px, 3.4vw, 56px)"
    fontWeight: 300
    lineHeight: 1.04
  glifo-reserva:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(40px, 5vw, 72px)"
    fontWeight: 300
  label:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "11px"
    letterSpacing: "0.22em"
  label-xs:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "10px"
    letterSpacing: "0.18em"
  label-md:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "12px"
    letterSpacing: "0.16em"
  label-lg:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "13px"
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  section: "clamp(72px, 12vh, 140px)"
  container-side: "clamp(20px, 6vw, 96px)"
  carril: "clamp(16px, 6vw, 88px)"
  medida: "66ch"
components:
  cta-primary:
    backgroundColor: "transparent"
    textColor: "{colors.hueso}"
    rounded: "{rounded.none}"
    padding: "14px 26px"
  cta-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.hilo}"
    rounded: "{rounded.none}"
    padding: "14px 26px"
  cta-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.niebla}"
    rounded: "{rounded.none}"
    padding: "14px 26px"
---

# Design System: David Melara — Presencia Ejecutiva

## Overview

**Creative North Star: "La Forma del Argumento"**

El objeto del sitio es un fenómeno organizacional, no una persona. El diseño no existe para acreditar a su autor: existe para que un modelo se lea con la claridad de un libro. Cada decisión visual es una decisión editorial —qué va antes, qué se subordina, qué se calla—.

*(Sustituye a «La Evidencia del Criterio», formulada alrededor de demostrar la solvencia del autor. El criterio se demuestra por la precisión del análisis, no por el acabado del soporte.)*

El diseño nunca busca impresionar. El negro elimina el ruido. El oro señala lo esencial. El espacio en blanco deja respirar las ideas. La animación introduce la identidad sin reclamar protagonismo. Todo debe sentirse inevitable.

El sistema trabaja con dos materiales: **tinta** (el lienzo oscuro, la ausencia de ruido, el peso del argumento) y **hilo** (el oro que aparece donde hay algo que recordar). No hay un tercer color. No hay degradados decorativos. No hay iconos que señalen lo que el texto ya dice. La economía visual es el argumento.

Cada sección del sitio lleva una temperatura luminosa propia — una variación mínima de color ambiental que sitúa el registro emocional sin declararlo. El hero tiene el acero frío del argumento inaugural; la sección de contacto tiene el calor de la entrega. Este sistema de lámparas es invisible en estado de reposo y apenas perceptible al activarse: ejerce influencia sin reclamar atención.

**Key Characteristics:**
- Canvas oscuro absoluto con un único foco de acento dorado
- Tipografía variable de alta calidad: opsz y wght se ajustan por contexto
- Espacio negativo como argumento, no como vacío por llenar
- Sin bordes redondeados en ningún contenedor de UI
- Motion significativo: la estela recorre la página como memoria del sistema
- Sin iconos, sin ilustraciones, sin elementos decorativos no funcionales

## Colors

Un sistema de dos voces: la tinta silencia, el hilo señala. Los doce valores del sistema tienen función específica; no hay alias ni duplicados.

### Primary

- **Hilo Dorado** (`#B99B6B`): el único acento del sistema. Aparece en la estela (memoria del recorrido), las marcas de los cuatro momentos, los estados hover de todos los elementos interactivos, el borde activo de los momentos de navegación, y el color de selección de texto. Su escasez es su fuerza.

### Neutral

- **Tinta** (`#101312`): el lienzo. Fondo de toda la página y del umbral de marca. Nunca sustituido por ningún otro oscuro.
- **Hueso** (`#EAE7DF`): texto primario, bordes de CTA primario en reposo, color de selección invertida. Blanco roto, no blanco puro — la diferencia hace que el lienzo respire.
- **Cuerpo** (`#CFCCC3`): la prosa narrativa. Un hueso atenuado entre Hueso y Niebla: el texto que sostiene el argumento sin la presencia del texto primario ni la subordinacion del secundario.
- **Niebla** (`#9CA29B`): texto secundario, eyebrows en reposo, rol, posicionamiento. Subordinado, presente.
- **Hilo Tenue** (`rgba(185,155,107,0.55)`): versión atenuada del hilo dorado. Bordes de los nodos de la estela y la línea decorativa bajo eyebrow-sección.
- **Hilo Enlace** (`rgba(185,155,107,0.62)`): el underline de los enlaces de contacto en reposo. Un escalón por encima de Hilo Tenue porque ahí el subrayado no es ornamento: el enlace comparte color exacto con el texto vecino, así que la línea es lo único que lo identifica y debe alcanzar 3:1 (0.55 daba 2.96; 0.62 da 3.43).
- **Línea** (`rgba(234,231,223,0.14)`): divisores y bordes de contenedor (unidades del marco, retratos). Una presencia casi imperceptible — el borde existe para ordenar, no para decorar.

### Section Lamps (temperatura por registro)

Valores de color ambiental aplicados como gradiente radial dentro de cada sección (`opacity: 0.10` en reposo, `0.20` cuando activa). No aparecen en la UI; modulan el ambiente emocional del lienzo por sección. Son cinco, una por sección del recorrido:

- **Acero Frío** (`#5E6D78`): hero — la tesis
- **Azul Analítico** (`#46545F`): mecanismo — la lógica del problema, el más frío
- **Templado** (`#7A6B4F`): marco — los cuatro momentos, registro operativo
- **Verde Sereno** (`#5C6F66`): territorio — la condición de contorno
- **Cobre Cercano** (`#996F3D`): conversemos — el más cálido

### Rampa longitudinal de la estela

Segunda rampa, independiente de las lámparas: son las paradas del gradiente del trazo SVG y el factor de energía del lienzo, definidos en `script.js` (`TEMPERATURAS`). No son colores de UI y no deben confundirse con la paleta de texto.

- `#DFC08F` (op .95, factor 1.0) — hero
- `#8A98A0` (op .62, factor .60) — mecanismo
- `#C4A87A` (op .82, factor .80) — marco
- `#A99B79` (op .70, factor .70) — territorio
- `#E8CD9C` (op 1.0, factor 1.0) — conversemos

**La Regla del Hilo.** El hilo dorado (`#B99B6B`) ocupa menos del 10% de cualquier viewport. Cuanto menos aparece, más significa cuando aparece. No usarlo para texto de párrafo, fondos, ni elementos decorativos.

**La Regla del Lienzo.** El fondo es siempre `#101312`. No negro puro, no gris oscuro — esta tinta exacta. Cualquier variación rompe el sistema.

## Typography

**Display Font:** Newsreader (variable, opsz 6–72, wght 200–800), Georgia fallback — serif clásico con musculatura editorial. Autohospedado como WOFF2; sin Google Fonts.

**Label/Mono Font:** IBM Plex Mono, monospace — el sistema de registro, no de expresión. Para etiquetas, índices, CTAs, datos tácticos.

**Carácter:** Newsreader tiene la densidad óptica de una publicación impresa seria — en peso 300 fluye; en opsz 72 tiene la autoridad de una firma. IBM Plex Mono funciona como el sistema nervioso técnico: preciso, invisible, nunca expresivo por sí mismo. Los dos no compiten; se turnan.

### Hierarchy

- **Display** (wght 300, clamp(42px,5.2vw,58px), lh 1.04, ls -0.015em, opsz 72): el titular-tesis del hero. La única h1 del sitio. El tope son 58px y no más: la columna del hero está acotada por el marco de 1200px, y «Una promesa comercial» ocupa 9.85px por cada px de cuerpo, de modo que por encima de 58px el pareado deja de partir en dos líneas por oración. La medida de 16.6ch fuerza ese corte e impide que «sí.» quede sola en una línea.
- **Headline** (wght 400, clamp(20px,2vw,24px), lh 1.25, ls 0.01em): subtítulos y encabezados de unidad. Peso ligeramente mayor que el cuerpo para señalar sin dominar.
- **Title** (wght 300, clamp(21px,2.3vw,29px), lh 1.4, opsz 40): la `.apertura` que abre cada sección. Tono intermedio entre Display y Body; opsz 40 mantiene la gracia óptica a tamaño intermedio.
- **Realce** (wght 300, clamp(18px,1.75vw,22px), lh 1.5–1.55): prosa alzada sobre el cuerpo sin llegar a encabezado. Dos usos: la línea de apertura del hero y las situaciones citadas del cierre. Antes eran dos escalas propias a 1 px de distancia —18→22 y 18→21—, un escalón que existía en el uso y no en el sistema.
- **Body** (wght 300, clamp(17px,1.35vw,19px), lh 1.72): texto de párrafo. Medida máxima de 66 caracteres (`--medida`). Interlineado generoso para lectura editorial larga.
- **Nota** (wght 300, clamp(15px,1.2vw,16px), lh 1.6, color Niebla): el registro de pie. Un manuscrito necesita una voz por debajo del cuerpo para lo que acompaña al argumento sin formar parte de él —la firma del autor—. Serif y fluida como el resto de la rampa de lectura; la mono es para etiquetas, no para prosa breve.
- **Label** (IBM Plex Mono, ls 0.14–0.24em, uppercase): todo lo que organiza sin narrar. Cuatro escalones discretos, no un rango continuo — **10px** navegación de momentos, **11px** eyebrows de sección y pie, **12px** CTAs, enlace de salto y remite de la validación, **13px** vías de contacto.

### Valores fuera de la rampa

Dos literales del CSS no son escalones y no deben leerse como tales:

- **Display acotado** (`clamp(38px,3.4vw,56px)`, dentro de `@media (min-width:901px) and (max-height:1040px)`): no es un paso nuevo, es el paso Display constreñido para pantallas bajas. La columna del hero no crece en esas alturas, así que el cuerpo debe seguir al ancho o el pareado vuelve a partirse en cinco líneas.
- **Glifo de reserva** (`clamp(40px,5vw,72px)`, en `.retrato.sin-imagen::after`): las iniciales que sustituyen a un retrato que no carga. Es un elemento dimensionado para llenar una caja, no texto de lectura.

### Cierre de la voz intermedia

Tres componentes usaban escalas casi idénticas y sin nombre. Al mirarlas juntas no eran tres duplicados del mismo paso, sino dos cosas distintas:

| Componente | Antes | Ahora |
|---|---|---|
| `.posicionamiento` | 18 → 22 | **Realce** 18 → 22 |
| `.situacion` | 18 → 21 | **Realce** 18 → 22 |
| `.momento-unidad h3` | 19 → 23 | **Headline** 20 → 24 |

Los dos primeros son prosa alzada y comparten paso nuevo. El tercero es un encabezado: se había fabricado una copia del paso **Headline** a 1 px de distancia en ambos extremos, mientras el paso declarado no tenía usuario —todos los `h2` llevan `.afirmacion` y lo anulan—. Ahora lo usa.

Coste medido del cambio: `.situacion` +1 px y `.momento-unidad h3` +1 px en sus máximos; `.posicionamiento` sin variación.

**La Regla del Opsz.** `font-variation-settings: 'opsz' N` siempre se ajusta al tamaño de uso: 72 para titulares display, 40 para aperturas, 6–12 por defecto en cuerpo. Un Newsreader sin ajuste óptico es la misma fuente con la mitad de su carácter.

**La Regla del Peso Único.** Newsreader aparece en 300 casi siempre — la ligereza es parte del argumento. El peso 400 y 500 existen pero se reservan para h2 y `strong`: deben sentirse como un subrayado, no como un cambio de voz.

## Layout

El layout es un solo canvas vertical, dividido en seis secciones y cinco costuras. No hay sidebar, no hay grid de tarjetas, no hay columnas secundarias en la narrativa principal.

**Contenedor:** `.marco` — `max-width: 1200px`, centrado, con padding lateral asimétrico: la izquierda lleva `--carril` (clamp(16px,6vw,88px)) + offset adicional (clamp(24px,4vw,72px)) para dejar espacio al rastro de la estela SVG. La derecha usa `--margen` (clamp(20px,6vw,96px)). El carril izquierdo es la autopista de la identidad interactiva.

**Grid del Hero:** `grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr)` — texto ligeramente más ancho que el retrato, alineados al final del contenedor (align-items: end). La asimetría es intencional: el argumento textual domina.

**Medida de lectura:** 66ch (`--medida`). Ningún bloque de párrafo supera esta medida en desktop. La legibilidad no se negocia.

**Secciones:** `padding: clamp(72px, 12vh, 140px) 0`. El espacio entre secciones escala con la ventana; el silencio entre argumentos también.

**Costuras:** Bloques vacíos de `clamp(140px, 26vh, 300px)` entre secciones que alojan los anclajes de la estela. No son decoración — son el sistema nervioso del recorrido.

**Responsive:** A 900px el grid del hero colapsa a columna única (retrato primero), el panel de momentos desaparece. A 640px el carril reduce a 20px, el encabezado de cada momento pasa a bloque y el hero reparte su ritmo vertical. El sitio no tiene tablet breakpoint — la fluidez de `clamp()` hace la transición continua.

## Elevation & Depth

El sistema es **plano por defecto**. No hay `box-shadow` en contenedores, botones, ni tarjetas. La profundidad se genera por dos mecanismos propios del sistema, no por sombras convencionales:

1. **Temperatura de sección:** el gradiente radial ambiental (opacity 0.10–0.20) crea la sensación de que el lienzo respira por zonas, sin elevar físicamente ningún elemento.
2. **El carril de la estela:** la línea de puntos y el trazo SVG que recorre el margen izquierdo crean una tercera dimensión implícita — hay algo que existe por encima del contenido sin superponerse a él.

La única sombra del sistema es el `drop-shadow(0 1px 24px rgba(200,161,90,0.14))` sobre el logotipo gold en el hero — un halo dorado de baja opacidad que acentúa la identidad sin decorar.

**La Regla del Plano.** Ningún elemento UI recibe `box-shadow` en estado de reposo. Si un elemento necesita sombra para leerse, el problema es de contraste o jerarquía, no de elevación.

## Shapes

El sistema usa **esquinas vivas en toda la UI** (`border-radius: 0`). Los bordes son líneas, no contenedores. Esta decisión es de carácter, no de economía: los bordes redondeados sugieren softness y accesibilidad digital de consumo masivo; las esquinas vivas sugieren autoridad y precisión editorial.

Las únicas formas curvas del sistema son funcionales:
- Los nodos de la estela (`.e-nodos circle`): círculos de 5×5px — puntos de memoria, no elementos de UI
- El indicador de momentos (`::after`): círculo de 5×5px — punto de estado, invisible hasta activarse
- Los retratos (`.retrato`): rectangular con `border: 1px solid var(--linea)` — un marco hairline, no un contenedor

**La Regla del Borde Cero.** `border-radius: 0` en todos los elementos de UI: botones, inputs, contenedores. Ninguna excepción. Los únicos puntos redondos son de señalización del sistema (estela, navegación).

## Components

### Botones / CTAs

Los CTAs nunca interrumpen la lectura; aparecen como una invitación natural a continuarla. Permanecen contenidos mientras el usuario observa y solo revelan un matiz de identidad cuando decide acercarse.

- **Forma:** rectangular, sin radio (0px), borde de 1px
- **Primario (`.cta`):** fondo transparente, borde `1px solid var(--hueso)` (#EAE7DF), texto en IBM Plex Mono 12px caps, padding 14px 26px, letter-spacing 0.16em
- **Hover primario:** `border-color: var(--hilo)`, `color: var(--hilo)` — transición 0.3s. El oro aparece solo cuando el usuario se acerca
- **Secundario (`.cta-secundaria`):** mismo formato, borde `rgba(234,231,223,0.3)`, texto en `var(--niebla)`. Más quieto, más distante
- **Focus visible:** `outline: 1.5px solid var(--hilo)`, offset 4px — el hilo marca también el estado de teclado

### Eyebrow Label

- **Estilo:** IBM Plex Mono, 11px, `letter-spacing: 0.22em`, `text-transform: uppercase`, color `var(--niebla)`
- **Como header de sección (`.eyebrow-seccion`):** lleva una línea de 34px × 1px en `var(--hilo-tenue)` debajo, margin-top 12px — el único ornamento del sistema
- **Marcado:** el rótulo de sección es un `<h2>`, no un párrafo — es el outline del documento y da nombre accesible a su `<section>` vía `aria-labelledby`. Para que el cambio de elemento no altere la composición, `.eyebrow` fija `font-weight:300` y `line-height:1.72`, que de otro modo tomaría de la regla `h2`

### Navegación de Momentos (`#momentos`)

Índice del marco, no de las secciones del sitio: sus cuatro etiquetas corresponden una a una con las unidades de `#framework`.

- **Posición:** fija, derecha del viewport, centrada verticalmente, desaparece a 900px
- **Estado inactivo:** IBM Plex Mono 10px, color `rgba(156,162,155,0.78)`, indicador circular de 5px con borde en el mismo color. El 0.78 no es estético: con 0.42 el rótulo quedaba en 2.24:1 sobre el lienzo, por debajo del mínimo AA para texto (4.5:1) y del mínimo de componente para el punto (3:1). A 0.78 da 4.80:1
- **Estado activo (`.momento.activo`):** color `var(--hilo)`, indicador relleno — transición 0.5s ease en ambos
- **Selección del activo:** la banda del observador (32%–60% del viewport) es más alta que una unidad, de modo que puede haber dos dentro a la vez. Se enciende la más cercana al centro de la banda, no la última que disparó: elegir por orden de callback no es determinista y parpadea. Fuera del marco el índice conserva el último momento leído en lugar de apagarse

### Retrato

- **Contenedor (`.retrato`):** fondo `#161917`, borde `1px solid var(--linea)`, sin radio
- **Imagen:** `filter: grayscale(1) contrast(1.08) brightness(0.94)` — blanco y negro con leve refuerzo de contraste
- **Hero:** `height: clamp(380px, 72vh, 680px)`, `margin-left: clamp(-90px, -6vw, -24px)` — la imagen sangra ligeramente hacia el centro
- **Encuadre (`object-position: 50% 0%`):** el sujeto es el rostro. En móvil la caja se vuelve apaisada y `cover` recorta 142 px de alto; centrado se llevaba 71 px de arriba —la cabeza por encima de la frente y el candelabro entero—. Anclado arriba, el recorte sale íntegro de la parte baja y los ojos quedan al 36% del encuadre. En escritorio el recorte es horizontal (70 px) y este valor no tiene efecto.
- **Reparto vertical en móvil (≤640px):** el retrato íntegro a ancho de columna pide 386 px y el hero solo tenía 244. El espaciado daba 95 de los 142 necesarios, así que los 47 restantes habrían salido del titular. Un retrato completo pero estrecho (240 px) deja la cara en 79 px y un hueco huérfano a la derecha; al máximo que permite el presupuesto (275 px) la tesis deja de asomar. La redistribución se emplea entonces en agrandar el recorte anclado arriba: la ventana pasa del 63,1% al 69,4% del original y, a la vez, la holgura al pliegue sube de 24 a 32 px. Tablet y escritorio no participan: sus valores siguen viniendo del bloque ≤900 y del base.
- **Escala del titular en móvil (38px, −9,5%):** probada contra la hipótesis de que reducirla invertiría la jerarquía. No la invierte: el titular conserva las seis señales de dominancia —2,11× sobre el elemento siguiente, único en Hueso a 15,12:1 frente a 7,17:1, primera posición de texto, 198 px de masa frente a 112, cinco líneas y uso exclusivo del paso Display—. Tampoco reorganiza la composición: mismo número de líneas y mismo rag proporcional (58%). Los 20 px liberados se dejan como aire y no se dan al retrato —invertirlos en la imagen devuelve el margen al pliegue a 34 px y vuelve a cortar la tesis—. Resultado: holgura de 32 a 55 px y la línea de tesis pasa de asomar a leerse.
- **Cierre del primer acto (móvil):** logotipo, retrato, titular y apertura forman una unidad —la apertura termina en punto y la tesis pertenece a otro registro: es el subtítulo de la obra, no su argumento—. Con la separación de párrafo la tesis asomaba seccionada por la mitad de las letras a 812 px de alto. Ningún valor en em lo resuelve: la holgura tras la apertura crece con la pantalla (55 px a 812, 73 a 844, 136 a 932) porque el contenido crece más despacio que el viewport. Con `clamp(24px,16vh,160px)` el acto cierra en toda la banda —holgura de 62 px a 844 y 13 px a 932— y la separación no queda vacía: la estela la atraviesa, de modo que el propio sistema del sitio provee la transición entre actos.

### Los cuatro momentos — principio organizador

**No es un componente. Es el orden del documento.** El marco —nace · se acuerda · se cumple · se recuerda— gobierna la secuencia, la jerarquía, el índice lateral, el léxico y las transiciones. Cualquier decisión que lo trate como un bloque dentro de la página lo degrada.

`.momento-unidad` es solo su manifestación tipográfica: la forma visible del mecanismo. Cuatro unidades separadas por filetes de `1px solid var(--linea)`; la última lleva también filete inferior.

- **Encabezado (`h3`):** el momento (`.momento-nombre`, hueso) seguido de la condición que exige (`.momento-condicion`, niebla, itálica, un escalón menor). El guión separador va en el marcado (`.guion`), no en un `::before`: el `h3` es la unidad citable del documento y su texto extraído debe leerse «Nace — que se prometa…», idéntico en todos los anchos.
- **Cuerpo:** `#CFCCC3`, max-width 58ch.
- **Mobile (≤640px):** el `h3` pasa a bloque y la condición baja a su propia línea, con el guión delante.

**Regla de contenido, no de estilo.** Ninguna unidad nombra una disciplina, un servicio, una herramienta ni una capacidad. Cada una afirma una condición del flujo. La prueba: si al leer una unidad se puede deducir qué se le contrataría al autor, la unidad está mal escrita — ese fue el modo de fallo del componente anterior (`.capacidad`, «Capacidades»), que anteponía la disciplina al momento y se leía como catálogo de servicios.

### Ilustración (`.ilustracion`)

El caso no demuestra la ley: hace visible una ley que el lector ya ha comprendido. De ahí las dos únicas reglas del componente.

**Nunca precede a la afirmación que ilustra.** El orden del capítulo es invariable: enunciado → condiciones → ilustración → consecuencia.

**Nunca depende de un sector.** La prueba es literal: si se cambia el sector y el ejemplo sigue siendo válido, funciona; si solo funciona porque el lector imagina una industria concreta, se descarta.

Tipográficamente se aparta con filete izquierdo en `var(--hilo-tenue)` y color Cuerpo, **sin escalón propio**: es lectura de cuerpo, no una nota. Añadir un tamaño para el ejemplo lo convertiría en material secundario, y no lo es.

### Validación (`.validacion`)

Cierre de la sección del marco. Un solo hecho, nunca un bloque, y siempre **después** de la afirmación que valida. Separado por filete superior en `var(--hilo-tenue)`, max-width 58ch, y cerrado con el traspaso explícito al currículum.

La asimetría es estructural, no de criterio: la validación no tiene sección propia, ni rótulo, ni entrada en el índice lateral. La verificación completa —trayectoria, cargos, fechas— vive solo en `cv.html`.

### Umbral de marca (`#intro`)

Cuatro tiempos, una sola marca. El trazado de la M (`.im-m`) es idéntico carácter por carácter al del isotipo —los mismos 3.549 caracteres de path, en el mismo espacio de coordenadas—, así que el logotipo se sirve en línea con sus seis grupos direccionables y no hay dos elementos que fundir.

| tiempo | ms | qué ocurre |
|---|---|---|
| 1 | 0–380 | la M llega sola, al doble de escala, en el centro óptico |
| 2 | 380–580 | la M ocupa su sitio dentro de la palabra: `scale(2)` → `scale(1)` |
| 3 | 580–920 | ELARA se despliega de izquierda a derecha, escalonada 35 ms por letra |
| 4 | 920–1200 | **reposo** — 280 ms de quietud |
| 5 | 1200–1650 | el velo se disuelve y deja ver el hero, con su hueco de logotipo vacío |
| 6 | 1220–1740 | **corte por coincidencia:** la marca vuela a la posición y el tamaño exactos del logotipo del hero |
| 7 | ~1816 | relevo: la marca del umbral se retira y la del hero aparece en el mismo fotograma |

**La geometría del primer tiempo.** `translate(0, -197.5) scale(2)` sitúa el centro de la M exactamente en el centro del viewBox, que es donde acabará el centro del logotipo completo. Medido: el eje óptico se desplaza 0 px entre el primer tiempo y el último, con 1 px de desvío respecto al centro del viewport.

**Tres defectos que esta estructura elimina de raíz.** El fundido cruzado de 360 ms —el 46% de la secuencia anterior— desaparece porque hay sucesión real. El descentrado de 41 px desaparece porque ya no hay una caja fantasma: el isotipo a opacidad 0 seguía reservando su espacio en el flujo flex. Y la ausencia de meseta desaparece porque la disolución arranca 280 ms después de que el nombre esté completo, no en el mismo fotograma.

**El vuelo (FLIP).** El destino se mide en el instante del vuelo, no antes: depende del viewport. Traslación por centros y escala por relación de anchos. El relevo se ata a `transitionend` y no a un temporizador —la cola de `cubic-bezier(.22,.61,.36,1)` es larga y a los 540 ms la marca sigue a 2 px del destino, que es justo el salto que este tiempo viene a eliminar—.

**Condición del corte: el hero no se revela bajo el umbral.** Mientras dura, `html.intro-activo .hero .revela` deja la cabecera ya asentada. Sin esto el destino se mueve mientras se le apunta: el revelado desplaza la cabecera 18 px y la marca aterrizaba 6 px baja. No se pierde nada —esa animación siempre ocurrió bajo un velo opaco y nadie la vio—. Medido tras el cambio: destino estable en un único valor y error de aterrizaje 0/0/0 en px.

**Sin movimiento:** salida por disolución simple, sin vuelo. El logotipo completo, estático y visible ~760 ms. La regla no puede condicionarse a `.playing`, que esa rama nunca añade.

### Espina de la estela (`--espina`)

El trazo corre sobre **un solo eje**, no sobre tres sistemas de coordenadas.

```
--espina: calc(max(0px, (100% - 1200px)/2) + var(--carril))
```

Reproduce dónde empieza el contenido: borde del marco centrado (tope 1200px) más el carril. Se usa `100%` y no `100vw` para no contar la barra de desplazamiento.

Antes las costuras se anclaban a `--carril`, fijado al borde del viewport, mientras las unidades del marco se anclaban al contenido: a 1900px eso son **415 px de separación**, y el trazo salía disparado al margen y volvía seis veces. Las diez coordenadas x eran `1117 → 66 → 118 → 431×4 → 66 → 118 → 607`.

Ahora: `1117 → 409 · 461 · 431×4 · 409 · 461 → 535`. Dispersión de la espina: **52 px** (antes 365). Dos excursiones y las dos narrativas —nace en él, vuelve a él— con un latido de ±26 px en el tramo intermedio.

**El final** se ancla al borde izquierdo del retrato de contacto a media altura (`left:0; top:50%`). El `left:30%` anterior era una fracción del ancho de la imagen, es decir, un punto arbitrario sobre la fotografía.

### Nodo de Estela

Componente no de UI sino de sistema. Los puntos que marcan los anclajes de la trayectoria SVG.

- **Reposo:** `fill: var(--tinta)`, `stroke: var(--hilo-tenue)`, stroke-width 1 — un punto casi invisible
- **Activo (`.encendido`):** `fill: #D8B98A`, `stroke: #D8B98A` — transición 0.8s ease. El dorado señala que la estela llegó

## Do's and Don'ts

### Do:

- **Do** usar `font-variation-settings: 'opsz' 72` para el display h1 y `'opsz' 40` para `.apertura` — Newsreader sin ajuste óptico pierde la mitad de su carácter.
- **Do** mantener la medida de lectura en 66ch (`--medida`) para cualquier bloque de texto narrativo en desktop.
- **Do** reservar el hilo dorado (`#B99B6B`) exclusivamente para: estela, hover states, estado activo del índice de momentos, filete de la validación, y selección de texto.
- **Do** implementar `prefers-reduced-motion: reduce` en toda animación — el sistema tiene `transition: none` y `animation: none` explícitos para ese caso.
- **Do** usar IBM Plex Mono para todo lo que organiza: labels, índices, CTAs, timestamps, datos tácticos, pie.
- **Do** dejar las costuras (espacios entre secciones) tan generosas como dicta `clamp(140px, 26vh, 300px)` — el silencio entre argumentos es parte del argumento.
- **Do** aplicar `grayscale(1) contrast(1.08) brightness(0.94)` a toda fotografía de retrato — la coherencia del filtro es parte de la identidad.

### Don't:

- **Don't** añadir `border-radius` a ningún botón, contenedor, tarjeta o card. Las esquinas vivas son el carácter del sistema, no un olvido.
- **Don't** usar `box-shadow` en elementos de UI. La única sombra del sistema es el `drop-shadow` de baja opacidad en el logotipo hero.
- **Don't** usar el hilo dorado como color de texto en párrafos, títulos, ni eyebrows — solo en los cinco contextos especificados en el Do anterior.
- **Don't** añadir iconos, ilustraciones, o imágenes decorativas que no sean el retrato profesional o los assets de marca congelados.
- **Don't** presentar el marco como una sección más: los cuatro momentos ordenan la secuencia, la jerarquía, el índice y el léxico del documento entero.
- **Don't** usar color de fondo distinto a `#101312` en ningún elemento de pantalla completa — ni modals, ni overlays, ni intro screens.
- **Don't** añadir animaciones que no pertenezcan a los sistemas reconocidos: estela+energía, reveal de secciones, lámparas de temperatura, umbral de marca, transición de momentos.
- **Don't** usar Newsreader en `font-weight: 700` ni superior — el peso máximo para titulares es 300 y para subtítulos 500. El diseño no habla a gritos.
