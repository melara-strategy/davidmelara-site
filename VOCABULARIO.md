# VOCABULARIO CANÓNICO

**Proyecto:** davidmelara.com · La continuidad de una promesa
**Versión:** 1.0
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

| Clase | Qué contiene | Dónde se declara | Dónde **nunca** aparece |
|---|---|---|---|
| **A** | Territorio profesional del autor | Identidad · `hasOccupation` · `Person.knowsAbout` | `about` · `DefinedTermSet` |
| **B** | Conceptos propios de la obra | `CreativeWork.about` · `DefinedTermSet` | `knowsAbout` · `mentions` |
| **C** | Conceptos del dominio usados como soporte argumental | `CreativeWork.mentions` | `knowsAbout` · `about` · `DefinedTermSet` |

**La razón de la clase C no es taxonómica, es de cumplimiento.** El manuscrito cita CRM, *marketing automation*, *Product Marketing*, *Service Design* y el PRD. Si esos conceptos entraran en `knowsAbout` dejarían de ser exposición y se convertirían en reclamo de competencia, que el expediente prohíbe sin respaldo documental. `mentions` es el único contenedor tipado que dice «la obra se refiere a esto» sin afirmar ni propiedad ni competencia.

**Regla de exclusividad.** Un concepto aparece en **una sola** propiedad por tipo de nodo. `Go-to-Market` y `Customer Experience` pertenecen a la clase A: se declaran en `knowsAbout` y no se repiten en `mentions`.

---

## 3 · Clase A · Territorio profesional del autor

Describe **desde dónde habla** el autor. No describe la materia de la obra ni todos los dominios que conoce. **No describe funciones operativas.**

| Concepto | Grafía canónica única |
|---|---|
| 1 | `Marketing estratégico` |
| 2 | `Ventas consultivas` |
| 3 | `Estrategia comercial` |
| 4 | `Go-to-Market` |
| 5 | `Customer Experience` |
| 6 | `Venta técnica` |
| 7 | `Gestión de cuentas clave` |
| 8 | `Investigación de mercados` |
| 9 | `Formación de fuerza de ventas` |
| 10 | `Industria farmacéutica` |
| 11 | `Laboratorios dentales` |

Los tres primeros forman la identidad profesional y se escriben siempre en ese orden, separados por punto medio U+00B7 con espacio normal a ambos lados.

**Términos retirados y por qué.** `Gestión comercial y operativa`, `Coordinación entre las áreas comerciales y las de producción`, `Diseño de flujos de trabajo entre áreas` y `Protocolos de comunicación con el cliente` afirmaban competencia operativa que la obra no sostiene. `Dirección comercial`, `Desarrollo comercial` y `Venta de soluciones complejas` eran redundantes con 1–3. `Technical Sales`, `Commercial Management`, `Complex Sales`, `Key Account Management`, `Experiencia del cliente`, `Value Proposition`, `Posicionamiento`, `Propuesta de valor` y `Go-to-market` eran duplicados en dos idiomas o variantes de grafía. `Visita médica`, `Comunicación científica`, `Odontología` y `Educación superior` eran granularidad de contexto, no conocimiento.

---

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

**Superficies donde vive la identidad, y que cambian todas a la vez:** la firma del cierre en `index.html`, `hasOccupation.name` en el JSON-LD de `index.html` y de `cv.html`, `llms.txt`, y la imagen social `assets/og-image.jpg`.

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
| `Person.knowsAbout` | los once del territorio | **A** |
| `CreativeWork.mentions` · `WebPage.mentions` | los diez del dominio | **C** |
| `hasOccupation.name` | la cadena de identidad | **A** (1–3) |
| `llms.txt` § Conceptos principales | índice conceptual: B, luego A, luego C rotulada como citada | **B · A · C** |
| Metadatos | `title` y las tres `description` idénticas, derivadas del subtítulo de MC §3 | — |
| `keywords` | **no se implementa** | — |

**Por qué no se implementa `keywords`.** No por inferioridad semántica —su rango admite `DefinedTerm`— sino porque `about`, `mentions` y el `DefinedTermSet` ya cargan el vocabulario, y añadirla crearía una cuarta superficie sin ningún consumidor identificado. Bajo la condición de consistencia, una superficie no sincronizada es un pasivo.

**Condición de reversión:** si aparece un consumidor concreto que lee `keywords` y no lee `about`, se añade apuntando a los mismos nodos `DefinedTerm`, nunca como texto. Un vocabulario, dos vías de acceso.
