# VOCABULARIO CANÓNICO

**Proyecto:** davidmelara.com · La continuidad de una promesa
**Versión:** 1.2
**Deriva de:** `MC v7.2 — Manuscrito Canónico`
**Estado:** vigente

---

## 1 · Condición

Este documento es la **fuente única de conceptos** del proyecto. Ninguna otra capa define conceptos propios: todas los derivan de aquí.

```
MANUSCRITO
     ↓
VOCABULARIO CANÓNICO  ← este documento
     ↓
CreativeWork.about · DefinedTermSet · Person.knowsAbout · CreativeWork.mentions
llms.txt · metadatos · publicaciones futuras
     ↓
Google · Knowledge Graph · LLMs · sistemas RAG
```

Cambiar un término, añadir uno o alterar su grafía **exige una versión numerada de este documento**, con la misma disciplina que el manuscrito.

---

## 2 · Las tres clases

| Clase | Qué afirma | Sujeto | Dónde se declara | Dónde **nunca** aparece |
|---|---|---|---|---|
| **A** | el autor conoce este tema | la persona | Identidad · `hasOccupation` · `Person.knowsAbout` | `about` · `DefinedTermSet` |
| **B** | la obra establece este concepto | la obra | `CreativeWork.about` · `DefinedTermSet` | `knowsAbout` · `mentions` |
| **C** | la obra cita este concepto | la obra | `CreativeWork.mentions` | `about` · `DefinedTermSet` |

**Las clases se distinguen por sujeto, no por reparto de términos.** A afirma algo sobre la persona; B y C afirman cosas distintas sobre la obra. Por eso A y C pueden compartir un término sin contradicción: que la obra cite *customer journey* y que el autor lo conozca son dos hechos, no uno repetido.

**Lo que `mentions` protege.** Sigue siendo el contenedor que permite a la obra referirse a un concepto sin que eso implique nada sobre el autor. Lo que cambió es el supuesto de que la pertenencia a C excluyera la pertenencia a A: no la excluye, porque son afirmaciones sobre sujetos distintos.

**Regla de separación.** Que la obra cite un concepto y que el autor lo conozca son **dos afirmaciones distintas sobre sujetos distintos**, y ambas pueden ser ciertas: un mismo concepto puede figurar en `Person.knowsAbout` (clase A) y en `CreativeWork.mentions` (clase C). No es duplicación.

Lo que nunca puede ocurrir es lo contrario: **un concepto de clase B en `knowsAbout`** —el autor no «sabe sobre» su propio modelo, es su autor— y **una función ejercida declarada como tema**. Ese segundo caso era el defecto real: «coordinación entre las áreas comerciales y las de producción», «diseño de flujos de trabajo entre áreas» y «protocolos de comunicación con el cliente» no son temas, son funciones, y por eso producían la inferencia de rol operativo. La identidad no se diluye por cardinalidad: se diluye por error de categoría.

---

## 3 · Clase A · Territorio profesional del autor

Dos cosas distintas que conviven sin mezclarse.

**La identidad** describe desde dónde habla. Cadena de tres disciplinas, y **no cambia**:

> Marketing estratégico · Ventas consultivas · Estrategia comercial

Queda definitivamente descartada `Marketing estratégico · Ventas consultivas · Gestión comercial y operativa`, que no debe reaparecer de forma directa ni indirecta en ninguna capa.

**El territorio** describe sobre qué temas debe encontrarse al autor. No enumera todo lo que sabe: representa **el espacio profesional donde desea ser encontrado**, construido según cómo buscan reclutadores, direcciones generales y sistemas de IA a perfiles equivalentes — gerencia y dirección comercial, gerencia de marketing, *Head of Sales*, *Commercial Excellence*, *Business Development*, *Product Marketing Manager*, *Country Manager* en su componente comercial.

Vive en `Person.knowsAbout`, que no es un campo de identidad: el vocabulario lo define como *un tema del que se sabe, que sugiere posible pericia sin afirmarla*. Su extensión no diluye una identidad que se afirma en `hasOccupation`, `description`, `name` y la firma visible.

| Grupo | Términos, en español e inglés |
|---|---|
| **Estrategia** | `Marketing estratégico` / `Strategic Marketing` · `Estrategia comercial` / `Commercial Strategy` · `Go-to-Market` / `GTM` · `Posicionamiento` / `Positioning` · `Propuesta de valor` / `Value Proposition` · `Desarrollo de mercado` / `Market Development` · `Inteligencia de mercado` / `Market Intelligence` · `Investigación de mercados` / `Market Research` · `Segmentación` / `Market Segmentation` · `Planeación comercial` / `Commercial Planning` |
| **Ventas** | `Venta consultiva` / `Consultative Selling` · `Gestión de cuentas clave` / `Key Account Management` · `Desarrollo de negocios` / `Business Development` · `Gestión de canales` / `Channel Management` · `Negociación` / `Commercial Negotiation` · `Dirección de ventas` / `Sales Leadership` · `Excelencia comercial` / `Commercial Excellence` · `Sales Enablement` · `Venta técnica` / `Technical Sales` · `Venta de soluciones complejas` / `Complex Sales` |
| **Cliente** | `Customer Experience` / `Experiencia del cliente` · `Customer Journey` / `Recorrido del cliente` · `CRM` / `Gestión de relaciones con clientes` · `Fidelización` / `Customer Loyalty` · `Voice of Customer` |
| **Marketing** | `Product Marketing` · `Marketing Automation` / `Automatización de marketing` · `Demand Generation` · `Service Design` / `Diseño de servicios` · `Lanzamiento de productos` / `Product Launch` |
| **Liderazgo** | `Liderazgo comercial` · `Desarrollo de equipos comerciales` · `Formación de fuerza de ventas` · `Gestión del desempeño comercial` · `Gestión del cambio` · `Planificación estratégica` |
| **Contexto de mercado** | `Mercados especializados` · `Decisiones de compra complejas` · `Ciclos comerciales largos` · `Relaciones comerciales de largo plazo` · `Organizaciones complejas` · `Comunicación de valor` |
| **Contexto sectorial** | `Industria farmacéutica` · `Laboratorios dentales` · `Organizaciones industriales` |

**El sector no es el eje.** El contexto se describe por **tipo de mercado** —especializado, decisión compleja, varios actores, ciclo largo, credibilidad sostenida, conocimiento técnico como condición de entrada—. Las industrias concretas permanecen únicamente como evidencia de trayectoria y contexto de observación.

**Por qué bilingüe.** Un par español-inglés no es un duplicado ortográfico: son **dos superficies de consulta** que escriben usuarios distintos. Sí se excluyen las variantes de grafía dentro de un mismo idioma: `Go-to-market` frente a `Go-to-Market`.

**Lo único que permanece fuera.** Toda expresión que describa función ejercida en Operaciones, gestión operativa, producción, logística, *supply chain*, coordinación entre áreas, diseño de flujos operativos o protocolos operativos. En concreto, las tres que producían la inferencia de rol operativo: coordinación entre áreas comerciales y de producción, diseño de flujos de trabajo entre áreas, protocolos de comunicación con el cliente. **La obra puede hablar de operación; la identidad no.**

**No incorporados por falta de sustento.** `Dispositivos médicos` y `salud` no figuran: ni el manuscrito ni el currículum los sostienen. Un territorio solo puede contener lo que la obra o el expediente pueden respaldar.

## 4 · Clase B · Conceptos propios de la obra

Lo que la obra establece. Sus definiciones son **literales del manuscrito**: aquí no se redacta ninguna definición nueva.

| Concepto | Grafía canónica | Forma inglesa autorizada |
|---|---|---|
| La obra | `La continuidad de una promesa` | — |
| El concepto | `la continuidad de la promesa` | `Promise Continuity` |
| El marco | `Los cuatro momentos de una promesa` | — |
| Momento 1 | `Nace` | — |
| Momento 2 | `Se acuerda` | — |
| Momento 3 | `Se cumple` | — |
| Momento 4 | `Se recuerda` | — |

**Los dos artículos no se unifican.** El título lleva artículo indeterminado —«una promesa»— porque nombra un fenómeno antes de que exista ninguna promesa en el texto. Dentro de la obra se dice «la promesa», porque para entonces ya hay una en circulación. Decisión cerrada.

**`Promise Continuity`** es la única forma inglesa autorizada del concepto, y se declara como `alternateName` del mismo término, no como término aparte: es un concepto con dos nombres, no dos conceptos.

**Concepto no consolidado.** `la inversión silenciosa` nombra el mecanismo del capítulo 2 y es acuñación de la obra, pero aparece una sola vez. **Queda registrado aquí y fuera del `DefinedTermSet`.** Entra en el conjunto cuando el manuscrito lo use por segunda vez. Regla cerrada; no requiere nueva decisión.

---

## 5 · Clase C · Conceptos del dominio como soporte argumental

Citados por la obra, no poseídos ni reclamados. Cursiva para extranjerismos crudos, redonda para siglas, conforme a MC §4.7.

| Concepto | Grafía canónica |
|---|---|
| 1 | *value proposition* |
| 2 | *Product Marketing* |
| 3 | *Service Design* |
| 4 | *brand promise* |
| 5 | *messaging* |
| 6 | *customer journey* |
| 7 | *positioning* |
| 8 | *marketing automation* |
| 9 | CRM |
| 10 | Product Requirements Document (PRD) |

**Término descartado.** `Division of Labour` no entra: el manuscrito describe la división del trabajo como condición, no la acuña como término, y es vocabulario genérico de economía sin relación distintiva con la obra.

---

## 6 · Identidad profesional

Cadena única, literal, idéntica en todas las superficies:

> **David Melara**
> Marketing estratégico · Ventas consultivas · Estrategia comercial

Y la línea de práctica, que es **prosa y no declaración de término**:

> Trabajo con organizaciones farmacéuticas, dentales e industriales en Centroamérica: Go-to-Market, Customer Experience y continuidad entre la promesa comercial y su ejecución.

La identidad describe **desde dónde habla** el autor; la práctica describe **sobre qué trabaja**. Son dos registros distintos y no se mezclan. La obra puede seguir hablando de operación cuando corresponda: lo que no puede es que la representación del autor sugiera que ejerce funciones operativas.

**Superficies donde vive la identidad, y que cambian todas a la vez:** la firma del cierre en `index.html`, `hasOccupation.name` en el JSON-LD de `index.html` y de `cv.html`, `llms.txt`, y la imagen social `assets/og-image-v2.jpg`.

**Cerrado.** La imagen social se regeneró con la identidad definitiva y se publicó bajo nombre nuevo, `assets/og-image-v2.jpg`, para invalidar el caché de los rascadores sociales. El archivo anterior se retiró del repositorio y su ruta redirige (301) a la nueva. Ninguna superficie pública, de texto o visual, representa ya la identidad retirada.

---

## 7 · Política para publicaciones futuras

1. Toda superficie nueva declara de qué clase toma cada concepto.
2. No se introduce ningún término que no figure aquí.
3. No se admiten variantes de grafía, ni traducciones no autorizadas, ni sinónimos.
4. Un término nuevo exige **primero** una versión numerada de este documento y **después** su aparición en cualquier capa.
5. Ninguna capa define conceptos: todas los derivan.

**Verificación mecánica posible.** Un recuento de los términos presentes en cada capa contra este documento, que falla si aparece un término no declarado o una variante de grafía. Es la única forma de que la consistencia no dependa de la memoria.

---

## 8 · Correspondencia por capa

| Capa | Contenido | Clases |
|---|---|---|
| `CreativeWork.about` | los siete términos de la obra | **B** |
| `DefinedTermSet` | los mismos siete, con definición literal del manuscrito | **B** |
| `Person.knowsAbout` | el territorio completo, bilingüe | **A** |
| `CreativeWork.mentions` · `WebPage.mentions` | los diez del dominio | **C** |
| `hasOccupation.name` | la cadena de identidad | **A** (1–3) |
| `llms.txt` § Conceptos principales | índice conceptual: B con definición, A **en prosa junto al nombre y la geografía**, C rotulada como citada | **B · A · C** |
| Metadatos | `title` y las tres `description` idénticas, derivadas del subtítulo de MC §3 | — |
| `keywords` | **no se implementa** | — |

**Por qué no se implementa `keywords`.** No por inferioridad semántica —su rango admite `DefinedTerm`— sino porque `about`, `mentions` y el `DefinedTermSet` ya cargan el vocabulario, y añadirla crearía una cuarta superficie sin ningún consumidor identificado. Bajo la condición de consistencia, una superficie no sincronizada es un pasivo.

**Condición de reversión:** si aparece un consumidor concreto que lee `keywords` y no lee `about`, se añade apuntando a los mismos nodos `DefinedTerm`, nunca como texto. Un vocabulario, dos vías de acceso.

---

## 9 · Historial de versiones

**1.2** — Reconstrucción de la clase A como territorio profesional para descubrimiento: siete grupos, pares bilingües, contexto de mercado en lugar de sector como eje. `Person.knowsAbout` pasa a 71 términos. Se sustituye la regla de exclusividad por la **regla de separación**: un concepto puede figurar a la vez en clase A y en clase C, porque son afirmaciones sobre sujetos distintos. Identidad, clase B, clase C, `about`, `mentions` y el `DefinedTermSet` sin cambios.

**1.1** — Primera ampliación del territorio y restitución de los pares bilingües, tras verificar que la identidad no se diluye por cardinalidad sino por error de categoría.

**1.0** — Establecimiento del vocabulario: tres clases, identidad, clase B con definiciones literales del manuscrito, clase C, y la decisión de no implementar `keywords`.
