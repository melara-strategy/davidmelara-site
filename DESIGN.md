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
  lamp-introduccion: "#5C6F66"
  lamp-idea: "#6B6551"
  lamp-mecanismo: "#46545F"
  lamp-marco: "#7A6B4F"
  lamp-tecnologia: "#89704A"
  lamp-contacto: "#996F3D"
  nodo-encendido: "#D8B98A"
  estela-hero: "#DFC08F"
  estela-introduccion: "#B9AE95"
  estela-idea: "#D8BC8C"
  estela-mecanismo: "#8A98A0"
  estela-marco: "#C4A87A"
  estela-tecnologia: "#CBB489"
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
  axioma:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(24px, 3vw, 36px)"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "-0.012em"
    fontVariation: "'opsz' 42"
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
  display-movil:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "38px"
    fontWeight: 300
    lineHeight: 1.04
  display-estrecho:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "34px"
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
  enlace-entrada:
    backgroundColor: "transparent"
    textColor: "{colors.hueso}"
    borderBottom: "1px solid rgba(185,155,107,0.62)"
    rounded: "{rounded.none}"
    padding: "0 0 6px 0"
  enlace-entrada-hover:
    backgroundColor: "transparent"
    textColor: "{colors.hilo}"
    borderBottom: "1px solid {colors.hilo}"
    rounded: "{rounded.none}"
    padding: "0 0 6px 0"
---

# Design System: David Melara — Presencia Ejecutiva

## Estado · MC v7.1

**La fuente autorizada del contenido y de la arquitectura editorial es `MC v7.1 — Manuscrito Canónico`.** Este documento describe el sistema visual; ante cualquier diferencia sobre estructura, jerarquía o texto, prevalece MC v7.1.

Tras la adopción de MC v7.1 quedan **superadas** las siguientes partes de este documento, que se conservan solo como registro de las mediciones que las justificaron:

- **Toda la rampa tipográfica de la sección Typography.** El sistema ya no es una rampa uniforme: son cuatro voces con política propia de peso, color y crecimiento — declarar, leer, afirmar y orientar. Los tokens vivos son `--voz-lectura`, `--voz-rotulo` y `--medida`, declarados en `styles.css`.
- **`--medida` ya no se expresa en `ch` sino en `em`** (27.5em ≈ 60–64 caracteres reales, constantes de 1024 a 2560px). `ch` es el avance de la cifra cero y hacía que la medida cambiara sola al cambiar la letra.
- **El componente «Axioma»**: en MC v7.1 el enunciado es el último párrafo de la Introducción, en nivel de cuerpo. Ya no es un bloque independiente.
- **El paso «Realce» y `h2.afirmacion`**: MC v7.1 no tiene nivel de afirmación. Las aperturas de capítulo son cuerpo, salvo dos que son N4, párrafo en peso fuerte.
- **El paso «Nota» y `.hero-nota`**: su texto abre la Introducción como párrafo de cuerpo.
- **El remate de capítulo (`.destacado`)**: MC v7.1 no le asigna nivel.
- **El encabezado de los cuatro momentos**: son N5, párrafo mixto con rótulo en peso fuerte y glosa en cursiva. No son encabezados; el documento tiene un `h1` y seis `h2`, y ningún `h3`.

Sigue vigente todo lo demás: lienzo, retícula, carril, colores, lámparas, rampa longitudinal de la estela, umbral de marca, retratos, formas y separadores estructurales.

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
- **Hueso** (`#EAE7DF`): texto primario, enlace de entrada en reposo, color de selección invertida. Blanco roto, no blanco puro — la diferencia hace que el lienzo respire.
- **Cuerpo** (`#CFCCC3`): la prosa narrativa. Un hueso atenuado entre Hueso y Niebla: el texto que sostiene el argumento sin la presencia del texto primario ni la subordinacion del secundario.
- **Niebla** (`#9CA29B`): texto secundario, eyebrows en reposo, rol, posicionamiento. Subordinado, presente.
- **Hilo Tenue** (`rgba(185,155,107,0.55)`): versión atenuada del hilo dorado. Bordes de los nodos de la estela y la línea decorativa bajo eyebrow-sección.
- **Hilo Enlace** (`rgba(185,155,107,0.62)`): el underline de los enlaces de contacto en reposo. Un escalón por encima de Hilo Tenue porque ahí el subrayado no es ornamento: el enlace comparte color exacto con el texto vecino, así que la línea es lo único que lo identifica y debe alcanzar 3:1 (0.55 daba 2.96; 0.62 da 3.43).
- **Línea** (`rgba(234,231,223,0.14)`): divisores y bordes de contenedor (unidades del marco, retratos). Una presencia casi imperceptible — el borde existe para ordenar, no para decorar.

### Section Lamps (temperatura por registro)

Valores de color ambiental aplicados como gradiente radial dentro de cada sección (`opacity: 0.10` en reposo, `0.20` cuando activa). No aparecen en la UI; modulan el ambiente emocional del lienzo por sección. Son siete, una por sección del recorrido:

- **Acero Frío** (`#5E6D78`): hero — el fenómeno, nombrado
- **Verde Sereno** (`#5C6F66`): introducción — se delimita el territorio
- **Neutra Cálida** (`#6B6551`): idea — la proposición
- **Azul Analítico** (`#46545F`): mecanismo — la lógica del problema, el más frío
- **Templado** (`#7A6B4F`): marco — los cuatro momentos, registro operativo
- **Ámbar Sordo** (`#89704A`): tecnología — el instrumento, entre el marco y el cierre
- **Cobre Cercano** (`#996F3D`): conversemos — el más cálido

El axioma no lleva lámpara: no es una sección. Atraviesa el lienzo sin cambiarle la temperatura.

### Rampa longitudinal de la estela

Segunda rampa, independiente de las lámparas: son las paradas del gradiente del trazo SVG y el factor de energía del lienzo, definidos en `script.js` (`TEMPERATURAS`). No son colores de UI y no deben confundirse con la paleta de texto.

- `#DFC08F` (op .95, factor 1.00) — hero
- `#B9AE95` (op .72, factor .70) — introducción
- `#D8BC8C` (op .88, factor .90) — idea
- `#8A98A0` (op .62, factor .60) — mecanismo
- `#C4A87A` (op .82, factor .80) — marco
- `#CBB489` (op .86, factor .85) — tecnología
- `#E8CD9C` (op 1.0, factor 1.00) — conversemos

La curva no es decorativa: entra caliente, se enfría al delimitar, vuelve a calentarse con la proposición, toca su punto más frío en el análisis y sube sin interrupción hasta el cierre. El axioma queda entre dos paradas y el gradiente lo interpola: el trazo lo atraviesa sin nodo.

**La Regla del Hilo.** El hilo dorado (`#B99B6B`) ocupa menos del 10% de cualquier viewport. Cuanto menos aparece, más significa cuando aparece. No usarlo para texto de párrafo, fondos, ni elementos decorativos.

**La Regla del Lienzo.** El fondo es siempre `#101312`. No negro puro, no gris oscuro — esta tinta exacta. Cualquier variación rompe el sistema.

## Typography

**Display Font:** Newsreader (variable, opsz 6–72, wght 200–800), Georgia fallback — serif clásico con musculatura editorial. Autohospedado como WOFF2; sin Google Fonts.

**Label/Mono Font:** IBM Plex Mono, monospace — el sistema de registro, no de expresión. Para etiquetas, índices, enlaces de sistema, datos tácticos.

**Carácter:** Newsreader tiene la densidad óptica de una publicación impresa seria — en peso 300 fluye; en opsz 72 tiene la autoridad de una firma. IBM Plex Mono funciona como el sistema nervioso técnico: preciso, invisible, nunca expresivo por sí mismo. Los dos no compiten; se turnan.

### Hierarchy

- **Display** (wght 300, clamp(42px,5.2vw,58px), lh 1.04, ls -0.015em, opsz 72): el titular del hero, que delimita el fenómeno. La única h1 del sitio. El tope son 58px y no más: la columna del hero está acotada por el marco de 1200px. La medida es de 12ch y fija dónde parte: «La continuidad» mide 10.5ch y «La continuidad de la», 14.1ch, de modo que por encima de esa segunda cifra el corte deja el artículo colgando y «promesa.» sola. A 12ch parte donde debe y las dos líneas quedan parejas —308 y 292px a 1440.
- **Headline** (wght 400, clamp(20px,2vw,24px), lh 1.25, ls 0.01em): subtítulos y encabezados de unidad. Peso ligeramente mayor que el cuerpo para señalar sin dominar.
- **Axioma** (wght 300, clamp(24px,3vw,36px), lh 1.3, ls -0.012em, opsz 42): un solo usuario, `.axioma p`, y un solo enunciado. Es el paso que faltaba: el axioma no es un titular —no delimita— ni una afirmación de sección —no pertenece a ninguna—, y a los 29px de Title se leía como un encabezado más. Cae en el hueco real de la rampa: 7px por encima del tope de Title y 22px por debajo del de Display.

  **Medida: 25ch, y es una decisión de rag, no de columna.** A 26ch el enunciado caía en 532 · 430 · 490 px: 102px de desnivel y una mella visible en el centro del borde derecho. En un texto de tres líneas a 36px el ojo no promedia el rag, así que cada desnivel se lee como decisión, y un rag irregular en la frase que sostiene la obra le resta autoridad. Barrido de 20 a 34ch: 23ch y menos parten en cuatro líneas; 26 a 32 mantienen o empeoran el bache; 33 en adelante dejan 101px en la última. La meseta buena es 24–25ch, con **489 · 473 · 490 y 17px de desnivel**. En `ch` porque medida y cuerpo escalan juntos y los cortes se conservan a cualquier ancho. Escala, peso, aire y aislamiento no se tocan.
- **Title** (wght 300, clamp(21px,2.3vw,29px), lh 1.4, opsz 40): la `h2.afirmacion` que abre cada sección. Tono intermedio entre Display y Body; opsz 40 mantiene la gracia óptica a tamaño intermedio.
- **Realce** (wght 300, clamp(18px,1.75vw,22px), lh 1.5–1.55): prosa alzada sobre el cuerpo sin llegar a encabezado. Un solo usuario desde que el cierre dejó de citar situaciones: el subtítulo del hero, que dice de qué trata el modelo. El paso se conserva —no se colapsa contra Body— porque ese subtítulo es lo primero que se lee después del titular y necesita separarse de la prosa.
- **Body** (wght 300, clamp(17px,1.35vw,19px), lh 1.72): texto de párrafo. Medida máxima de 66 caracteres (`--medida`). Interlineado generoso para lectura editorial larga.
- **Nota** (wght 300, clamp(15px,1.2vw,16px), lh 1.6, color Niebla): el registro de pie. Un manuscrito necesita una voz por debajo del cuerpo para lo que acompaña al argumento sin formar parte de él. Dos usuarios: la nota de apertura del hero —la que dice que el fenómeno ya se ha vivido sin nombrarse— y el oficio bajo la firma. Serif y fluida como el resto de la rampa de lectura; la mono es para etiquetas, no para prosa breve. La nota del hero llegó a escribir su propio `clamp(14px,1.15vw,16px)`, idéntico en el tope y a 1px en el suelo: exactamente la deriva que esta rampa existe para impedir.
- **Label** (IBM Plex Mono, ls 0.14–0.24em, uppercase): todo lo que organiza sin narrar. Cuatro escalones discretos, no un rango continuo — **10px** navegación de momentos, **11px** eyebrows de sección y pie, **12px** enlace de entrada al modelo y enlace de salto, **13px** vías de contacto.

### Valores fuera de la rampa

Cuatro literales del CSS no son escalones y no deben leerse como tales. Los tres primeros son el mismo paso **Display** constreñido por el espacio disponible; el cuarto no es texto de lectura:

- **Display acotado** (`clamp(38px,3.4vw,56px)`, dentro de `@media (min-width:901px) and (max-height:1040px)`): la columna del hero no crece en esas alturas, así que el cuerpo debe seguir al ancho o el titular pasa de dos líneas a tres.
- **Display móvil** (`38px`, dentro de `@media(max-width:640px)`): −9,5% sobre el mínimo de la rampa. Se probó contra la hipótesis de que reducirlo invertiría la jerarquía; no la invierte, y los píxeles liberados se dejan como aire.
- **Display estrecho** (`34px`, dentro de `@media(max-width:360px)`): por debajo de 360px la columna del hero cae a ~240px y «de una promesa.» deja de caber, de modo que el titular parte en tres líneas y la de en medio queda con dos palabras. A 34px la segunda línea mide 233px y vuelve a entrar. Es el único ajuste por debajo de 360; el resto del bloque móvil no cambia. Medido a 320×640: dos líneas, sin desbordamiento horizontal.
- **Glifo de reserva** (`clamp(40px,5vw,72px)`, en `.retrato.sin-imagen::after`): las iniciales que sustituyen a un retrato que no carga. Es un elemento dimensionado para llenar una caja, no texto de lectura.
- **Firma** (`clamp(19px,1.7vw,22px)`, en `.firma`): el nombre del autor al cierre. Roza el paso **Realce** (18→22) sin coincidir con él. Se conserva como está —compone bien y no hay evidencia de defecto, sólo de un valor sin declarar— y queda registrado aquí para que deje de parecer una inconsistencia.

*Retirado de esta lista:* `.momento-condicion` llevaba un `clamp(17px,1.5vw,20px)` que tampoco era escalón — valía 1px sobre el cuerpo en escritorio y 0 en móvil, de modo que no creaba intervalo en ninguna parte— y ahora usa el paso **Body** declarado.

### Cierre de la voz intermedia

Tres componentes usaban escalas casi idénticas y sin nombre. Al mirarlas juntas no eran tres duplicados del mismo paso, sino dos cosas distintas:

| Componente | Antes | Ahora |
|---|---|---|
| `.posicionamiento` | 18 → 22 | **Realce** 18 → 22 |
| `.situacion` *(retirado)* | 18 → 21 | **Realce** 18 → 22 |
| `.momento-unidad h3` | 19 → 23 | **Headline** 20 → 24 |

Los dos primeros son prosa alzada y comparten paso nuevo. El tercero es un encabezado: se había fabricado una copia del paso **Headline** a 1 px de distancia en ambos extremos, mientras el paso declarado no tenía usuario —todos los `h2` llevan `.afirmacion` y lo anulan—. Ahora lo usa.

Coste medido del cambio: `.situacion` +1 px y `.momento-unidad h3` +1 px en sus máximos; `.posicionamiento` sin variación. `.situacion` se retiró después, con las situaciones citadas del cierre; el paso **Realce** conserva un solo usuario y se justifica en la rampa.

**La Regla del Opsz.** `font-variation-settings: 'opsz' N` siempre se ajusta al tamaño de uso: 72 para titulares display, 40 para las afirmaciones de sección, 42 para el axioma, 6–12 por defecto en cuerpo. Un Newsreader sin ajuste óptico es la misma fuente con la mitad de su carácter.

**La Regla del Peso Único.** Newsreader aparece en 300 casi siempre — la ligereza es parte del argumento. El peso 400 y 500 existen pero se reservan para h2 y `strong`: deben sentirse como un subrayado, no como un cambio de voz.

## Layout

El layout es un solo canvas vertical: siete secciones, un axioma sin sección propia y seis costuras. No hay sidebar, no hay grid de tarjetas, no hay columnas secundarias en la narrativa principal.

**Contenedor:** `.marco` — `max-width: 1200px`, centrado, con padding lateral asimétrico: la izquierda lleva `--carril` (clamp(16px,6vw,88px)) + offset adicional (clamp(24px,4vw,72px)) para dejar espacio al rastro de la estela SVG. La derecha usa `--margen` (clamp(20px,6vw,96px)). El carril izquierdo es la autopista de la identidad interactiva.

**Grid del Hero:** `grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr)` — texto ligeramente más ancho que el retrato, alineados al final del contenedor (align-items: end). La asimetría es intencional: el argumento textual domina.

**Medida de lectura:** 66ch (`--medida`). **La medida se declara sobre el texto, nunca sobre el contenedor.** Ninguna columna de la obra supera 66ch: ni la prosa, ni el cuerpo de las unidades del marco, ni la condición de cada momento. Verificado a 1440, 1280, 375 y 320. La legibilidad no se negocia.

**El borde editorial único.** Todas las secciones arrancan en el mismo borde izquierdo. Antes no era así: `.marco-lectura` y `.marco-contacto` conseguían su columna estrecha angostando el contenedor, y como el contenedor está centrado, angostarlo **desplazaba el borde izquierdo del texto**. Medido sobre la página completa había **cuatro márgenes izquierdos** en un mismo documento —264px en el hero y en el marco, 388 en los capítulos, 289 en el retrato del cierre, 593 en su texto— y el marco sobresalía respecto a los capítulos que lo rodean, de modo que la pieza estructural de la obra parecía pertenecer a otro documento.

Ahora `.marco-lectura` cierra la columna por la derecha (`.marco-lectura .cuerpo{max-width:var(--medida)}`) y `.marco-contacto` no lleva tope propio: ambos conservan el eje de 1200px. Un solo borde a cada ancho: 264 · 168 · 44 · 44. En el cierre el borde lo ocupa el retrato y el texto se compone a su derecha —una plancha al margen con el texto al lado, disposición editorial normal—.

Consecuencia que no era el objetivo y vale por sí sola: **la distancia del carril de la estela al texto pasó de alternar 70/182px a ser constante en 80px.** El elemento que representa la continuidad era el único cuya relación con el texto no era continua. Y la medida de lectura, que medía 69ch, cayó en los 66 declarados.

**Secciones:** `padding: clamp(72px, 12vh, 140px) 0`. El espacio entre secciones escala con la ventana; el silencio entre argumentos también.

**Costuras:** Bloques vacíos de `clamp(140px, 26vh, 300px)` entre secciones que alojan los anclajes de la estela. No son decoración — son el sistema nervioso del recorrido.

**Responsive:** El índice de momentos desaparece a 1339px, no a 900: por debajo de ese ancho el marco de 1200px deja de tener aire a la derecha y el índice se montaría sobre el texto. A 900px el grid del hero colapsa a columna única (retrato primero) y el cierre pasa a columna. A 640px el carril reduce a 20px y el hero reparte su ritmo vertical. A 360px el titular baja a 34px. El sitio no tiene tablet breakpoint — la fluidez de `clamp()` hace la transición continua.

*El encabezado de cada momento ya no depende del ancho: se compone en bloque a cualquier tamaño (ver «Los cuatro momentos»). La versión anterior de este documento situaba ese cambio en 640px y el código lo hacía en 360; ambas cifras quedan obsoletas.*

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

### Enlace de entrada (`.hero-enlace`)

**El sitio no tiene botones.** Un ensayo invita a seguir leyendo; no convierte. El único paso adelante del hero es un enlace tenue, y su forma es deliberadamente la de una nota al pie, no la de un control.

- **Forma:** sin caja, sin borde, sin radio. Solo un subrayado
- **Estilo:** IBM Plex Mono 12px caps, `letter-spacing: 0.16em`, color `var(--hueso)`, `border-bottom: 1px solid rgba(185,155,107,0.62)`, `padding-bottom: 6px`
- **Por qué .62 y no --hilo-tenue:** el enlace comparte color exacto con el texto vecino, así que el subrayado es lo único que lo identifica y necesita 3:1. A .55 daba 2.96
- **Hover:** `color` y `border-color` a `var(--hilo)` — transición 0.3s. El oro aparece solo cuando el usuario se acerca
- **Focus visible:** `outline: 1.5px solid var(--hilo)`, offset 4px — el hilo marca también el estado de teclado

### Eyebrow Label

- **Estilo:** IBM Plex Mono, 11px, `letter-spacing: 0.22em`, `text-transform: uppercase`, color `var(--niebla)`
- **Como header de sección (`.eyebrow-seccion`):** lleva una línea de 34px × 1px en `var(--hilo-tenue)` debajo, margin-top 12px — el único ornamento del sistema
- **Marcado:** el rótulo de sección es un `<h2>`, no un párrafo — es el outline del documento y da nombre accesible a su `<section>` vía `aria-labelledby`. Para que el cambio de elemento no altere la composición, `.eyebrow` fija `font-weight:300` y `line-height:1.72`, que de otro modo tomaría de la regla `h2`

### Navegación de Momentos (`#momentos`)

Índice del marco, no de las secciones del sitio: sus cuatro etiquetas corresponden una a una con las unidades de `#framework`.

- **Posición:** fija, derecha del viewport, centrada verticalmente, desaparece a 1339px
- **Presencia — acompaña al marco, no al lector.** Sólo es visible mientras `#framework` está en la banda de lectura: `opacity:0` por defecto y `html.marco-a-la-vista #momentos{opacity:1}`, con la clase gobernada por el mismo `IntersectionObserver` que enciende las lámparas de sección (no se añade un observador nuevo). Antes acompañaba al lector desde la primera pantalla y nombraba cuatro momentos que todavía no había conocido: era el índice de un capítulo que no había empezado, y su permanencia es lo que lo hacía leer como interfaz y no como publicación — un elemento que no se va es cromo. Entra y sale por opacidad en 0.7s, deliberadamente más lento y discreto que el propio elemento: algo que aparece llama más la atención que algo que siempre estuvo. `transition:none` bajo `prefers-reduced-motion`. **Ni su forma, ni su tamaño, ni sus valores de contraste, ni su estado activo cambian: sólo su presencia**
- **Estado inactivo:** IBM Plex Mono 10px, color `rgba(156,162,155,0.78)`, indicador circular de 5px con borde en el mismo color. El 0.78 no es estético: con 0.42 el rótulo quedaba en 2.24:1 sobre el lienzo, por debajo del mínimo AA para texto (4.5:1) y del mínimo de componente para el punto (3:1). A 0.78 da 4.80:1
- **Estado activo (`.momento.activo`):** color `var(--hilo)`, indicador relleno — transición 0.5s ease en ambos
- **Selección del activo:** la banda del observador (32%–60% del viewport) es más alta que una unidad, de modo que puede haber dos dentro a la vez. Se enciende la más cercana al centro de la banda, no la última que disparó: elegir por orden de callback no es determinista y parpadea. Fuera del marco el índice conserva el último momento leído en lugar de apagarse — la lógica sigue vigente y verificada, aunque desde el cambio de presencia sólo se observa entrando y saliendo del marco: deja de verse, no de existir

### Retrato

- **Contenedor (`.retrato`):** fondo `#161917`, borde `1px solid var(--linea)`, sin radio
- **Imagen:** `filter: grayscale(1) contrast(1.08) brightness(0.94)` — blanco y negro con leve refuerzo de contraste
- **Hero:** `height: clamp(360px, 66vh, 620px)`, `margin-left: clamp(-64px, -4.2vw, -24px)` — la imagen sangra ligeramente hacia el centro. Bajó de 72vh a 66vh cuando el hero ganó la nota de apertura: a 72vh el bloque medía 1000px sobre un viewport de 900 y cortaba la nota 10px por debajo del pliegue. A 66vh la nota cierra en 856 con 44px de holgura, y el retrato sigue siendo el elemento mayor de la pantalla.
- **Encuadre (`object-position: 50% 0%`):** el sujeto es el rostro. En móvil la caja se vuelve apaisada y `cover` recorta 142 px de alto; centrado se llevaba 71 px de arriba —la cabeza por encima de la frente y el candelabro entero—. Anclado arriba, el recorte sale íntegro de la parte baja y los ojos quedan al 36% del encuadre. En escritorio el recorte es horizontal (70 px) y este valor no tiene efecto.
- **Reparto vertical en móvil (≤640px):** el retrato íntegro a ancho de columna pide 386 px y el hero solo tenía 244. El espaciado daba 95 de los 142 necesarios, así que los 47 restantes habrían salido del titular. Un retrato completo pero estrecho (240 px) deja la cara en 79 px y un hueco huérfano a la derecha; al máximo que permite el presupuesto (275 px) la tesis deja de asomar. La redistribución se emplea entonces en agrandar el recorte anclado arriba: la ventana pasa del 63,1% al 69,4% del original y, a la vez, la holgura al pliegue sube de 24 a 32 px. Tablet y escritorio no participan: sus valores siguen viniendo del bloque ≤900 y del base.
- **Escala del titular en móvil (38px, −9,5%) · medida sobre el titular anterior:** probada contra la hipótesis de que reducirla invertiría la jerarquía. No la invierte: el titular conserva las seis señales de dominancia —2,11× sobre el elemento siguiente, único en Hueso a 15,12:1 frente a 7,17:1, primera posición de texto, 198 px de masa frente a 112, cinco líneas y uso exclusivo del paso Display—. Tampoco reorganiza la composición: mismo número de líneas y mismo rag proporcional (58%). Los 20 px liberados se dejan como aire y no se dan al retrato —invertirlos en la imagen devuelve el margen al pliegue a 34 px y vuelve a cortar la tesis—. Resultado: holgura de 32 a 55 px y la línea de tesis pasa de asomar a leerse.
- **Cierre del primer acto (móvil) · superado el 2026-07-29, se conserva el método:** logotipo, retrato, titular y apertura forman una unidad —la apertura termina en punto y la tesis pertenece a otro registro: es el subtítulo de la obra, no su argumento—. Con la separación de párrafo la tesis asomaba seccionada por la mitad de las letras a 812 px de alto. Ningún valor en em lo resuelve: la holgura tras la apertura crece con la pantalla (55 px a 812, 73 a 844, 136 a 932) porque el contenido crece más despacio que el viewport. Con `clamp(24px,16vh,160px)` el acto cierra en toda la banda —holgura de 62 px a 844 y 13 px a 932— y la separación no queda vacía: la estela la atraviesa, de modo que el propio sistema del sitio provee la transición entre actos.

### Los cuatro momentos — principio organizador

**No es un componente. Es el orden del documento.** El marco —nace · se acuerda · se cumple · se recuerda— gobierna la secuencia, la jerarquía, el índice lateral, el léxico y las transiciones. Cualquier decisión que lo trate como un bloque dentro de la página lo degrada.

`.momento-unidad` es solo su manifestación tipográfica: la forma visible del mecanismo. Cuatro unidades separadas por filetes de `1px solid var(--linea)`; la última lleva también filete inferior.

- **Encabezado (`h3`) — dos líneas, no run-in, a cualquier ancho.** El momento (`.momento-nombre`, hueso, paso Headline) ocupa línea propia y la condición que exige (`.momento-condicion`) baja a la siguiente como subtítulo: itálica, Niebla, **paso Body**. El guión separador va en el marcado (`.guion`), no en un `::before`: el `h3` es la unidad citable del documento y su texto extraído debe leerse «Nace — la fecha se da contra un estándar…», idéntico en todos los anchos y sin cambio respecto a la forma anterior.
- **Cuerpo:** `#CFCCC3`, `max-width: var(--medida)`.
- **Los tres niveles comparten exactamente una columna.** El `h3` lleva `max-width: var(--medida)` y la condición **lleva el suyo propio**: `--medida` en el `h3` se resuelve contra la letra del `h3` (24px) y vale 880px, de modo que la condición, siendo de 19px, podía correr hasta 84 caracteres. Declarado en la condición, 66ch valen los mismos 691px que el cuerpo.
- **Sin caso especial por ancho.** La disposición en bloque era una excepción de ≤360px y ahora es la regla general.

**Por qué cambió la forma del encabezado.** Al unificar el borde editorial, el desequilibrio del marco cambió de signo: dejó de ser una columna un 50% más ancha que sus vecinas y pasó a ser un cuerpo de 607px contra los 691 del resto —la excepción de 58ch ya sin razón— y un encabezado que llegaba a 782px, más ancho que cualquier columna de lectura de la obra. Un encabezado más ancho que el texto que encabeza es defecto de oficio.

La forma nueva **retira dos excepciones en lugar de añadir una** y da al momento tres niveles reales, subordinados por escala y no sólo por color: 24px Hueso · 19px itálica Niebla · 19px Cuerpo. El efecto editorial buscado —que el centro de la obra tenga un acontecimiento y no una meseta— se consigue por claridad, no por compresión: el marco se lee como la taxonomía que es y no como prosa más ancha. La condición perdió su tamaño propio de 20px, que nunca creaba intervalo real (1px sobre el cuerpo en escritorio, 0 en móvil) y sólo introducía un escalón sin declarar.

**Regla de contenido, no de estilo.** Ninguna unidad nombra una disciplina, un servicio, una herramienta ni una capacidad. Cada una afirma una condición del flujo. La prueba: si al leer una unidad se puede deducir qué se le contrataría al autor, la unidad está mal escrita — ese fue el modo de fallo del componente anterior (`.capacidad`, «Capacidades»), que anteponía la disciplina al momento y se leía como catálogo de servicios.

### Remate de capítulo (`.cuerpo.destacado`)

La frase que cierra el argumento de un capítulo se alza al texto primario: `color: var(--hueso)`, **11.64 → 15.12:1**. Sin cambio de tamaño ni de registro — diferenciación por peso óptico, no por escala. Cuatro usuarios: el cierre de la introducción, de idea, de mecanismo y la línea de tecnología que dice que el atraso es de atención.

**Va con dos clases y no con una.** El marcado es `class="cuerpo destacado"`; `.destacado` sola (0-1-0) empataba en especificidad con `.cuerpo` y perdía por orden de fuente, de modo que la regla **no tenía ningún efecto** y los cuatro remates se pintaban idénticos al cuerpo. Con `.cuerpo.destacado` (0-2-0) el resultado deja de depender del orden. Es probable que nunca llegara a verse: la versión anterior de `.cuerpo` usaba una exclusión por `:not()` con especificidad 0-3-1, que también lo anulaba.

**Por qué importa.** La cadencia de un capítulo se cierra visualmente, no sólo sintácticamente. Un remate que no se distingue obliga a releer para saber si terminó — en tecnología, «Se está quedando atrás en atención.» quedaba sola en una línea corta y se leía como fragmento huérfano en lugar de como golpe. Con el remate alzado, cada capítulo tiene tres niveles: afirmación (Title, Hueso), remate (Body, Hueso) y prosa (Body, Cuerpo); la afirmación conserva la jerarquía por escala, 29px contra 19.

### Cierre: firma y acreditación

- **Bloque (`.contacto-texto`):** `max-width: 62ch`. Antes 52ch, que topaban el bloque en 544px.
- **Firma (`.firma`):** serif 400, `clamp(19px,1.7vw,22px)`, filete superior en `var(--linea)`. Cierra la obra: el lector llega conociendo el modelo, así que el nombre no presenta, acredita. Por eso va después y no antes.
- **Acreditación (`.firma-oficio`) — una sola línea.** IBM Plex Mono 12px, `ls .11em`, versales, Niebla. **Sin tope propio.** El `max-width:34ch` que llevaba valía 245px a 12px de mono —un tercio de la cadena, no 34 caracteres de lectura— y era la restricción real que la partía en tres líneas, con un separador colgando al final de la primera y «Gestión comercial y operativa» seccionado entre la segunda y la tercera. Es la acreditación del autor, ocupa el lugar de mayor responsabilidad de la obra, y era el texto peor compuesto del proyecto. La cadena pide 630px y el bloque a 62ch los concede: entra completa a 1440.
- **`text-wrap: pretty`** para los anchos donde vuelve a partir. Medido a 900 y 375: sin `pretty` quedaba «operativa» sola; con `balance` el corte cae en separador a 900 pero a 375 devuelve el separador colgante. `pretty` no falla en ninguno de los tres anchos. **La cadena literal no se toca** — sigue siendo idéntica en los cinco soportes.

### Ilustración (`.ilustracion`) — RETIRADO 2026-07-29

*El componente salió del sitio con la sección `territorio`. Las dos reglas de contenido siguen vigentes como criterio editorial y por eso se conservan: si vuelve una ilustración, vuelve con ellas.*

El caso no demuestra la ley: hace visible una ley que el lector ya ha comprendido. De ahí las dos únicas reglas del componente.

**Nunca precede a la afirmación que ilustra.** El orden del capítulo es invariable: enunciado → condiciones → ilustración → consecuencia.

**Nunca depende de un sector.** La prueba es literal: si se cambia el sector y el ejemplo sigue siendo válido, funciona; si solo funciona porque el lector imagina una industria concreta, se descarta.

Tipográficamente se aparta con filete izquierdo en `var(--hilo-tenue)` y color Cuerpo, **sin escalón propio**: es lectura de cuerpo, no una nota. Añadir un tamaño para el ejemplo lo convertiría en material secundario, y no lo es.

### Validación (`.validacion`) — RETIRADO 2026-07-29

*La acreditación del autor dejó de ser un bloque dentro del marco. Vive en la firma del cierre, en `llms.txt` y en el currículum. Se conserva la regla de asimetría, que sigue gobernando.*

Cierre de la sección del marco. Un solo hecho, nunca un bloque, y siempre **después** de la afirmación que valida. Separado por filete superior en `var(--hilo-tenue)`, max-width 58ch, y cerrado con el traspaso explícito al currículum.

La asimetría es estructural, no de criterio: la validación no tiene sección propia, ni rótulo, ni entrada en el índice lateral. La verificación completa —trayectoria, cargos, fechas— vive solo en `cv.html`.

### Umbral de marca (`#intro`)

Siete tiempos, una sola marca. El trazado de la M (`.im-m`) es idéntico carácter por carácter al del isotipo —los mismos 3.549 caracteres de path, en el mismo espacio de coordenadas—, así que el logotipo se sirve en línea con sus seis grupos direccionables y no hay dos elementos que fundir.

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

- **Do** usar `font-variation-settings: 'opsz' 72` para el display h1 y `'opsz' 40` para `h2.afirmacion` — Newsreader sin ajuste óptico pierde la mitad de su carácter.
- **Do** mantener la medida de lectura en 66ch (`--medida`) para cualquier bloque de texto narrativo en desktop, y **declararla sobre el texto y nunca sobre el contenedor**: un contenedor centrado que se angosta desplaza el borde izquierdo, y el borde izquierdo es la única promesa estructural que la página hace al ojo.
- **Do** comprobar, al declarar `--medida` en `ch` dentro de un elemento, contra qué letra se resuelve: `ch` usa la del propio elemento, así que 66ch valen 691px a 19px y 880px a 24px. Un hijo más pequeño heredaría una columna más ancha de lo permitido.
- **Do** reservar el hilo dorado (`#B99B6B`) exclusivamente para: estela, hover states, estado activo del índice de momentos, subrayado del enlace de entrada y de las vías de contacto, y selección de texto.
- **Do** implementar `prefers-reduced-motion: reduce` en toda animación — el sistema tiene `transition: none` y `animation: none` explícitos para ese caso.
- **Do** usar IBM Plex Mono para todo lo que organiza: labels, índices, enlace de entrada, vías de contacto, pie.
- **Do** dejar las costuras (espacios entre secciones) tan generosas como dicta `clamp(140px, 26vh, 300px)` — el silencio entre argumentos es parte del argumento.
- **Do** aplicar `grayscale(1) contrast(1.08) brightness(0.94)` a toda fotografía de retrato — la coherencia del filtro es parte de la identidad.

### Don't:

- **Don't** añadir `border-radius` a ningún enlace, contenedor, tarjeta o card. Las esquinas vivas son el carácter del sistema, no un olvido.
- **Don't** usar `box-shadow` en elementos de UI. La única sombra del sistema es el `drop-shadow` de baja opacidad en el logotipo hero.
- **Don't** usar el hilo dorado como color de texto en párrafos, títulos, ni eyebrows — solo en los contextos especificados en el Do anterior.
- **Don't** añadir iconos, ilustraciones, o imágenes decorativas que no sean el retrato profesional o los assets de marca congelados.
- **Don't** presentar el marco como una sección más: los cuatro momentos ordenan la secuencia, la jerarquía, el índice y el léxico del documento entero.
- **Don't** usar color de fondo distinto a `#101312` en ningún elemento de pantalla completa — ni modals, ni overlays, ni intro screens.
- **Don't** añadir animaciones que no pertenezcan a los sistemas reconocidos: estela+energía, reveal de secciones, lámparas de temperatura, umbral de marca, transición de momentos y presencia del índice.
- **Don't** usar Newsreader en `font-weight: 700` ni superior — el peso máximo para titulares es 300 y para subtítulos 500. El diseño no habla a gritos.
