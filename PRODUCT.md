# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Quien decide o influye sobre una promesa compleja: dirección general, dirección comercial, dirección de operaciones, consejo. No se define por sector — se define por la situación. Comparten un rasgo: han visto fallar la continuidad entre lo que su organización promete y lo que entrega, y no tienen un nombre para el fenómeno. Llegan sin contexto previo, principalmente por búsqueda.

La audiencia no se segmenta por industria. Cualquier definición sectorial del lector rebaja el nivel de abstracción del texto y convierte un modelo en una especialidad.

## Product Purpose

davidmelara.com expone un modelo sobre **la continuidad de la promesa** —por qué las organizaciones incumplen lo que prometen y por qué el problema pertenece tanto al marketing como a la operación— y acredita a su autor.

No es un portafolio, ni un CV en línea, ni una página de servicios. Es la exposición de un fenómeno organizacional: qué lo produce, dónde ocurre, qué condiciones lo contienen y en qué mercados decide la relación.

**Éxito:** el lector cierra la página habiendo comprendido algo que ya había visto y no sabía nombrar. La conversación llega como consecuencia de eso, no como objetivo del texto.

Esta métrica sustituye a la anterior —«el visitante contacta o descarga el CV»—, que evaluaba cada decisión editorial contra la conversión inmediata y penalizaba por construcción cualquier subida de nivel de abstracción.

## Positioning

**El sujeto de la obra es la promesa atravesando una organización.** No las organizaciones, no las ventas, no el marketing, no el autor.

El cliente recibe la promesa como una sola continuidad; la empresa la ejecuta mediante múltiples decisiones. Desde que entra en la organización, mantener su continuidad deja de depender de una sola decisión y pasa a depender del sistema completo: cada espera, cada retrabajo, cada pérdida de contexto y cada decisión que aleja lo entregado de lo prometido la debilitan. Sobre esa lógica se ordenan los cuatro momentos.

**Titular (invariable):**
> La continuidad de una promesa.

El artículo indeterminado no es un matiz: el titular nombra un fenómeno antes de que exista ninguna promesa en el texto. En el axioma y en el cuerpo se conserva «la promesa», que ahí remite a la que el lector ya tiene delante.

**Axioma — va solo, sin número ni título, entre la introducción y el capítulo 1:**
> La continuidad de la promesa deja de depender de personas cuando empieza a formar parte del diseño.

«Una promesa comercial no se divide. El trabajo que la cumple, sí» dejó de ser titular y **abre el capítulo 1**: un titular delimita el fenómeno, y esa frase ya lo explica. La formulación «cierro la distancia entre lo que las organizaciones prometen y lo que sus clientes experimentan» sigue **retirada**: figura en la lista de prohibidas del skill de posicionamiento con el diagnóstico «cualquier consultor», y además pone a la persona como sujeto de la acción.

Los mercados donde el criterio se formó —farmacéutica de línea ética, sistemas dentales CAD/CAM en Centroamérica— son el contexto donde el modelo se probó, **nunca su definición**. No aparecen antes que el mecanismo ni lo sustituyen.

## Operating Context

Página única. El recorrido es un argumento, no un menú: hero → introducción → axioma → idea → mecanismo → marco → tecnología → conversación. Primero se delimita el fenómeno y después se explica; nunca al revés. El marco de los cuatro momentos (nace · se acuerda · se cumple · se recuerda) no es una sección: es el principio que organiza secuencia, jerarquía, navegación, lenguaje y transiciones. El axioma no forma parte del índice: lo atraviesa.

La verificación documental —trayectoria, cargos, fechas, instituciones— vive exclusivamente en `cv.html` y en el PDF. La home no contiene cronología ni cargos.

Sin formulario y **sin botones**. La entrada al modelo es un enlace tenue —`Leer el modelo ↓`— en Plex Mono: una obra invita, no convierte. El cierre es correo, LinkedIn o currículum.

## Capabilities and Constraints

- Sitio estático de una sola página: HTML + CSS + JS vanilla, sin framework ni build.
- El sistema **estela** (trayectoria SVG sobre anclajes `[data-estela]`) + **energía** (partículas canvas) son invariantes: son la firma interactiva del sitio.
- El **umbral de marca** se muestra una vez por sesión, respeta `prefers-reduced-motion`, sin parpadeo, y resuelve por corte de coincidencia hacia el logotipo del hero.
- Fuentes autohospedadas sin Google Fonts: Newsreader variable (opsz 6–72, wght 200–800) + IBM Plex Mono, subset Latin WOFF2 en `fonts/`.
- El currículum es un documento aparte, no una sección narrativa.
- El modo **Persuade** aplica a todo el sitio: el diseño es el producto, no el soporte de una app.

## Brand Commitments

- **Identidad visual:** lienzo oscuro `#101312` dominante, oro `#C8A15A` / `#B99B6B` / champán `#F2DCB3` como acento mínimo. Blanco roto para lectura. Espacio negativo amplio. Editorial, no promocional.
- **Tipografía:** Newsreader (serif, titulares y lectura) + IBM Plex Mono (etiquetas, datos). Sin fuentes genéricas.
- **Logotipo congelado:** `assets/Logo/melara-logotipo-master-v3-gold.svg` (hero + umbral). `assets/Logo/melara-logotipo-master-v3.svg` (master). No rasterizar para uso en página. No sustituir.
- **Favicon:** variante B aprobada y congelada — teja oscura con isotipo champán `#F2DCB3`.
- **Prohibido sin excepción:** iconos genéricos, ilustraciones corporativas, personajes, infografías decorativas, efectos llamativos, animaciones innecesarias, apariencia de agencia digital o landing de marketing.
- Referencias estéticas vinculantes: Apple, Aesop, B&O, Stripe Press.
- **Voz:** expositiva. Autoridad por precisión del análisis, no por volumen ni por credenciales.
- **No se reclama competencia en CRM, inteligencia artificial ni automatización.** No tienen respaldo documental en el expediente, así que no pueden figurar como capacidad, especialidad ni servicio en ningún soporte. **Distinto es escribir sobre ellas:** el marco tiene posición propia sobre dónde cabe una herramienta y dónde no, y esa posición sí es publicable porque se deriva del modelo. La restricción es de evidencia, no ideológica. El cuarto momento —«se recuerda»— es una condición estructural del sistema, nunca una categoría tecnológica. *(Sustituye al principio anterior «CRM, IA y automatización son capacidad 04 de cuatro».)*

## Evidence on Hand

- Sitio en producción en davidmelara.com.
- **Corpus operativo de campo** (comunicaciones internas, protocolos de flujo, rediseño de proceso). Es la fuente del modelo y **no se publica, ni se cita, ni se parafrasea de cerca**: contiene un empleador identificable, clínicas y pacientes con nombre, y crítica operativa que en el sitio se leería como hablar mal de una empresa. Alimenta el pensamiento; no aparece en ninguna capa.
- Cinco hechos autorizados, con texto fijado en el skill de posicionamiento. Verificación completa en el currículum.
- Manifiesto V3: `docs/MANIFIESTO_DAVID_MELARA_V3.md` — **superado en dos puntos** (el marco no se deriva del expediente sino del corpus operativo; la capacidad «CRM, IA y automatización» no tiene respaldo).
- Fotografía profesional en blanco y negro; logotipo, isotipo y favicon vectoriales congelados.
- **Ausencia explícita:** no hay testimoniales reales publicados, no hay estudios de caso ni métricas de clientes. No fabricar.

## Product Principles

1. **El protagonista es el fenómeno.** Nunca la persona, nunca una empresa, nunca un sector. El autor aparece como quien estudió el mecanismo, no como quien lo resolvió.
2. **La teoría sostiene los casos, no al revés.** Primero se formula el principio; después, y solo si aporta, se demuestra. Un hecho que llega antes de la afirmación que valida se convierte en anécdota.
3. **Si el lector puede pensar «depende», el nivel de abstracción es demasiado bajo.** Subir hasta que la afirmación resista sin nombres propios.
4. **Estructuras e incentivos, nunca culpas.** El reparto del trabajo es una propiedad de toda organización, no un defecto de ninguna. Ningún párrafo debe poder leerse como reproche a un actor.
5. **El marco organiza, no decora.** Estela + energía + los cuatro momentos + umbral son invariantes. Los cuatro momentos, además, ordenan el recorrido entero: no son un bloque dentro de la página.
6. **Conversaciones, no conversiones.** El objetivo no es un embudo de alta conversión; es que el lector correcto reconozca su propio problema descrito con precisión.
