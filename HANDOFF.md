# davidmelara.com · punto de partida de la Fase 2

> Documento de traspaso. Léelo entero antes de tocar nada.
> Su función es evitar que se rediscutan decisiones ya cerradas y medidas.

---

## 1 · Dónde está el proyecto

| | |
|---|---|
| Repositorio | `C:\Users\David\Proyectos\davidmelara-site` |
| Remoto | `github.com/melara-strategy/davidmelara-site` |
| Rama | `main` |
| Hito estable | `da5e9f1` — *feat: establish the editorial paradigm and unify the site narrative* |
| Estado | local y `origin/main` sincronizados, árbol limpio, 46 archivos versionados |

Sitio estático: HTML + CSS + JS vanilla. Sin framework, sin build, sin dependencias. Para verlo: un servidor estático sobre la raíz (`python -m http.server`).

---

## 2 · Qué es el sitio ahora

**No es un portafolio, ni un CV en línea, ni una página de servicios.** Es la exposición de un modelo organizacional, y David Melara aparece como su autor, no como su protagonista.

**El objeto de la obra es la continuidad de la promesa.** No las organizaciones, no las ventas,
no el marketing. Ese eje se cerró el 2026-07-29 y no se rediscute.

Su desarrollo:

1. El cliente recibe la promesa como una sola continuidad; la empresa la ejecuta mediante múltiples decisiones.
2. Desde que la promesa entra en la organización, mantener su continuidad deja de depender de una sola decisión y pasa a depender del sistema completo. Cada vez que esa continuidad deja de sostenerse, la distancia entre lo prometido y lo entregado empieza a crecer.
3. Cada función protege su tarea; la continuidad depende del recorrido completo, y ese recorrido solo avanza cuando algo lo impulsa. Casi siempre lo impulsa quien no puede verlo —el cliente— y quien hizo la promesa. Ese tiempo no crea valor: compensa una continuidad que la organización no sostuvo.
4. Una organización que no incorpora tecnologías como la inteligencia artificial no se queda atrás en tecnología, sino en atención: gasta a su mejor gente en acordarse de cosas.

**El marco — los cuatro momentos:**

| | Condición |
|---|---|
| **Nace** | la fecha se da contra un estándar, no contra la carga real |
| **Se acuerda** | un acuerdo solo existe cuando puede verificarse |
| **Se cumple** | la continuidad de una promesa depende de mucho más que ejecutar una tarea |
| **Se recuerda** | la memoria de una organización no es la suma de las memorias de quienes la componen |

**Titular:**
> La continuidad de una promesa.

Indeterminado a propósito: el titular nombra un fenómeno y todavía no hay ninguna promesa introducida. Dentro del texto —axioma, capítulos 2 y 4, introducción— se dice «la promesa», porque para entonces ya hay una en circulación. No unificar los dos artículos.

**Axioma — atraviesa la obra, no forma parte del índice:**
> La continuidad de la promesa deja de depender de personas cuando empieza a formar parte del diseño.

La formulación anterior —«Una promesa comercial no se divide. El trabajo que la cumple, sí»— **no se retiró**:
dejó de ser titular y abre el capítulo 1. Un titular delimita el fenómeno; esa frase ya lo explica.

---

## 3 · Arquitectura del recorrido

Página única, siete bloques. El recorrido es un argumento, no un menú: primero se
delimita el fenómeno, después se explica. Nunca al revés.

| id | Función |
|---|---|
| `hero` | el fenómeno, delimitado: titular, subtítulo, enlace `Leer el modelo ↓`, retrato y nota de apertura |
| `introduccion` | por qué el problema también pertenece al marketing; cierra en la percepción de valor |
| — (`.axioma`) | el axioma, solo. Sin número, sin título, sin nodo en la estela y sin entrada en el índice |
| `idea` | 1 · vender no consiste solo en obtener un sí |
| `mecanismo` | 2 · cada función protege su tarea; la continuidad depende del recorrido completo |
| `framework` | 3 · los cuatro momentos |
| `tecnologia` | 4 · el instrumento a favor de la persona; atrás en atención, no en tecnología |
| `conversemos` | 5 · la invitación, la firma del autor y el traspaso al CV |

**El marco no es una sección: es el principio organizador.** Gobierna secuencia, jerarquía, índice lateral, léxico y transiciones.

**El sitio no tiene botones.** La entrada es un enlace tenue en Plex Mono: un ensayo invita, no convierte.

Las secciones `territorio` y la validación desaparecieron como bloques. No se perdieron: el alcance
del modelo vive ahora en `llms.txt` y la acreditación del autor, en la firma del cierre y en el CV.

`cv.html` + `assets/cv-david-melara.pdf` son el **único** lugar de verificación documental: trayectoria, cargos, fechas, instituciones, formación.

---

**Identidad profesional — una sola cadena, literal:** «Marketing estratégico · Ventas consultivas · Estrategia comercial». Aparece en la firma
del cierre, en `jobTitle` y `hasOccupation` del JSON-LD, en `llms.txt` y en la imagen social.
El pie no la repite: lleva nombre y ámbito. Si cambia, cambia en los cinco sitios a la vez.

**Observación editorial registrada, no bloqueante (2026-07-29).** El tercer momento —«se cumple»—
reformula el segundo y el tercer párrafo del capítulo 2 con estructura casi idéntica. David decidió
conservarlo: el capítulo 2 explica el mecanismo y el capítulo 3 construye el marco para reconocerlo,
de modo que cumplen funciones distintas. Queda anotado para una edición futura. **No es un bloqueo.**

## 4 · Lo que está CERRADO · no reabrir

Cada punto se cerró tras comparación medida, no por preferencia.

- **La identidad.** Cerrada desde la investigación previa. No se reformula ni se «mejora».
- **Los cinco hechos autorizados.** Texto literal fijado en el skill. No se añaden otros, no se adornan.
- **El manuscrito.** Fase editorial cerrada tras auditoría de seis preguntas. Dos refinamientos quedaron registrados como no bloqueantes (ver §7).
- **El umbral de marca.** Siete tiempos, una sola marca, corte de coincidencia con error 0 px sobre el logotipo del hero.
- **La estela.** Espina única; dispersión de 365 px a 52 px.
- **El hero.** Escala del titular, encuadre del retrato, cierre del primer acto — los tres decididos comparando variantes con capturas y mediciones.
- **El CV.** Tres páginas, sin viudas, sin desbordes.

---

## 5 · Reglas que gobiernan cualquier texto futuro

Hay un skill permanente: **`posicionamiento-ejecutivo`** en `~/.claude/skills/`. Invócalo siempre que se redacte, revise o corrija material sobre David Melara. Contiene el embudo de decisión, los cinco hechos con su texto literal, las ocho reglas y las formulaciones prohibidas.

Lo esencial, para no depender de que se cargue:

**Dos registros.** En soporte personal (CV, LinkedIn, correo, entrevista) el sujeto es él. En el sitio el sujeto es el mecanismo y él firma como autor. *Un autor no desaparece de su libro: aparece en la portada, no en cada párrafo.*

**Cinco pruebas para cada párrafo del sitio:**
1. ¿Describe un fenómeno organizacional o una experiencia personal?
2. ¿Podría publicarse sin depender de una empresa concreta?
3. ¿Sigue siendo válido si borro todos los nombres propios?
4. ¿El lector entiende mejor cómo funciona una organización, o quién es David?
5. ¿Convierte la experiencia en evidencia de una teoría, o la teoría en excusa para contar una experiencia?

**Prohibiciones absolutas:**
- **No se reclama competencia en CRM, IA ni automatización.** Sin respaldo documental en el expediente: no pueden figurar como capacidad, especialidad ni servicio. La restricción es de evidencia, no ideológica — escribir *sobre* automatización es legítimo si la posición se deriva del marco. El cuarto momento sigue siendo una condición estructural, nunca una categoría tecnológica.
- «Cierro la distancia entre lo que las organizaciones prometen y lo que sus clientes experimentan» — retirada: la puede firmar cualquier consultor.
- Ningún nombre propio en el cuerpo de la home. Cero, hoy. La verificación vive en el CV.

**Corpus operativo de campo** (comunicaciones internas, protocolos, rediseño de flujo): es la fuente del modelo y **no se publica, ni se cita, ni se parafrasea de cerca**. Contiene un empleador identificable y crítica operativa que en el sitio se leería como hablar mal de una empresa.

---

## 6 · Mapa de la documentación

| Archivo | Gobierna |
|---|---|
| `PRODUCT.md` | propósito, audiencia, posicionamiento, métrica de éxito, principios de producto |
| `DESIGN.md` | sistema de diseño: North Star, paleta, rampa tipográfica, componentes, do's & don'ts |
| `.impeccable/design.json` | espejo del sistema para el hook de Impeccable |
| `llms.txt` | mismo esqueleto que la home, para motores generativos |
| JSON-LD en `index.html` | `WebPage.about` → la obra; `author` → la persona; el marco como `DefinedTermSet` |
| `_redirects` | documentación interna fuera de producción |
| `HANDOFF.md` | este documento: estado y decisiones cerradas |
| `CLAUDE.md` | se carga solo en cada sesión; apunta a este documento |
| `docs/` | notas locales, ignorado por git |

**North Star vigente:** *«La Forma del Argumento»* — el diseño existe para que un modelo se lea con la claridad de un libro. (Sustituyó a «La Evidencia del Criterio», que estaba formulada alrededor de acreditar al autor.)

**Invariantes técnicos:** estela SVG + energía canvas, los cuatro momentos, el umbral de marca. Romperlos rompe la identidad.

---

## 7 · Abierto y conocido

No son defectos ocultos: se midieron y se decidió no actuar.

- **360×640** (móvil corto): la línea de apertura no cierra antes del pliegue, −42 px. El titular sí queda completo. Límite conocido del dispositivo más exigente.
- **Repetición en la condición de contorno:** «verificar antes de decidir» aparece cuatro veces en 226 palabras y resta filo a la renuncia final. Refinamiento editorial, no bloqueo.
- **Cierre de «Se acuerda»:** el párrafo termina repitiendo su propio encabezado. Ídem.
- **Titular de LinkedIn:** redactado y aprobado, pendiente de que David lo aplique. No es trabajo de repositorio.
- **Índice lateral** oculto por debajo de 1340 px: por debajo el retrato lo alcanzaría y quedaría sobre la fotografía.

---

## 8 · Cómo se trabajó, y por qué conviene seguir así

El método que dio resultado, en una línea: **medir antes de afirmar**.

- Toda decisión visual se resolvió con mediciones en el navegador —`getBoundingClientRect`, rangos de texto para contar líneas, cálculo de contraste con composición alfa—, no con juicio a ojo.
- Cada aceptación exigió prueba. **Cada rechazo también.** Sin evidencia, se conserva la versión actual; no se rechaza con argumentos.
- Las capturas del panel llegan a veces desfasadas: cuando la imagen y la medición discrepan, **manda la medición**.
- Antes de cualquier cambio de composición: capturar la huella geométrica, cambiar, comparar. Un diff de cero elementos es la prueba de que no hubo efecto secundario.

Lo que más rindió fue la regla de que cada rechazo necesita prueba. Sin ella se defienden con argumentos elegantes decisiones equivocadas.

---

## 9 · Qué NO hacer al empezar la Fase 2

- No rediseñar el umbral, la estela ni el CV.
- **Regla de edición vigente:** se edita la forma —bloques, ritmo, HTML, consistencia,
  repeticiones, geometría editorial—. La tesis solo cambia si David lo decide. No introducir
  ideas nuevas ni reformular las existentes sin aprobación explícita.
- No reabrir la identidad ni los cinco hechos.
- No «mejorar» el manuscrito sin un error objetivo que lo justifique.
- No introducir nombres propios ni cronología en la home.
- No tratar el marco como una sección más.
- No versionar `.impeccable/live/`, `.claude/` ni `docs/` — ya están ignorados.
- No servir en producción la documentación interna: `_redirects` la bloquea.

---

## 10 · Para arrancar

```bash
cd C:\Users\David\Proyectos\davidmelara-site
git log -1 --oneline        # debe decir da5e9f1
git status                  # debe estar limpio
python -m http.server 8080  # y abrir http://localhost:8080
```

El umbral de marca se muestra una vez por sesión: para volver a verlo, pestaña nueva o limpiar `sessionStorage`.
