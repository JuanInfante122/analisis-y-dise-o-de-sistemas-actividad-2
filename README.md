# ÚltimaRuta: maquetación HTML y CSS

Maquetación inicial del prototipo de ÚltimaRuta, una plataforma web de movilidad para estudiantes de jornada nocturna. Corresponde al diseño elaborado en Figma para la Actividad 2 del curso Análisis y Diseño de Sistemas, Corporación Universitaria Iberoamericana.

- **Equipo:** Eduardo Lozada Ducuara, Juan Manuel Infante Quiroga y David Eslava Rincón
- **Demo en línea:** https://juaninfante122.github.io/analisis-y-dise-o-de-sistemas-actividad-2/
- **Diseño en Figma:** https://www.figma.com/design/nOkjHywa1m7LQH68SRcc1n

> **Aviso:** es una maquetación para validar la estructura visual y la navegación. Las rutas, horarios, salones y calificaciones son datos simulados y la lógica del sistema no está implementada en esta fase.

## Pantallas

| Archivo | Pantalla | Historias de usuario |
|---|---|---|
| `index.html` | Ingreso con correo institucional | HU-07 |
| `registro.html` | Registro | HU-07 |
| `inicio.html` | Panel principal: aviso de clase, "Sal antes de" y grupos | HU-02, HU-09 |
| `inicio-cancelada.html` | Panel principal con clase cancelada | HU-09 |
| `rutas.html` | Rutas de regreso ordenadas por hora límite | HU-01, HU-02 |
| `ruta.html` | Detalle de ruta con paradero, calificación y grupos | HU-03, HU-11 |
| `crear-grupo.html` | Crear grupo de salida | HU-04 |
| `mis-grupos.html` | Mis grupos | HU-05, HU-06 |
| `calificar.html` | Calificar paradero | HU-12 |
| `docente.html` | Registrar novedad de clase (docente) | HU-10 |
| `bienestar-rutas.html` | Gestión de rutas y horarios (Bienestar, escritorio) | HU-08 |
| `bienestar-reportes.html` | Reporte de paraderos peor calificados (Bienestar) | HU-08, HU-11 |
| `perfil.html` | Perfil y cambio de tema | RQNF005 |
| `pantallas.html` | Índice de todas las pantallas | |

El tema oscuro se activa con el botón de luna de la barra superior o agregando `?tema=oscuro` a la dirección. Para ver solo la estructura de cualquier pantalla (wireframe en escala de grises) se agrega `?modo=wireframe`.

## Cómo abrirlo

**En línea:** abrir la demo desde el celular o el computador.

**Localmente:**

1. Descargar el proyecto con **Code > Download ZIP** o clonarlo:
   ```bash
   git clone https://github.com/JuanInfante122/analisis-y-dise-o-de-sistemas-actividad-2.git
   ```
2. Abrir `index.html` con doble clic. No requiere instalación ni conexión a internet: Bootstrap y las fuentes están incluidos en el proyecto.

## Coherencia con Figma

| Figma | Código |
|---|---|
| Variables `claro/…` y `oscuro/…` de la colección Color | Variables CSS `--ur-…` en `css/tokens.css`, con `[data-bs-theme="dark"]` para el tema oscuro |
| Colección Espaciado y radios | `--ur-space-…` y `--ur-radius-…` |
| Estilos de texto (Hora/Grande, Título/Pantalla…) | Clases `.t-hora`, `.t-pantalla`, `.t-seccion`, `.t-etiqueta`, `.t-pequeno` |
| Componentes del UI Kit (Botón, Campo de texto, Estado de ruta, Código de ruta, Aviso de clase, Fila de ruta, Tarjeta de grupo, Calificación, Barra superior, Barra inferior) | Clases del mismo nombre en `css/app.css`, construidas sobre Bootstrap 5 |
| Iconos Lucide del UI Kit | Los mismos 24 iconos en `js/app.js` |

## Estructura

```
index.html ... pantallas.html   Pantallas
css/tokens.css                  Variables de diseño (iguales a Figma)
css/app.css                     Componentes del UI Kit sobre Bootstrap
js/app.js                       Iconos, tema y validaciones de demostración
vendor/bootstrap/               Bootstrap 5.3.8
fonts/                          Roboto (SIL Open Font License)
```

## Accesibilidad

Contraste mínimo de 4.5:1 en ambos temas, áreas táctiles de al menos 44 px, estados de ruta con texto e icono (no solo color), foco visible y etiquetas en todos los campos (WCAG 2.1 AA, RQNF005).

## Licencias de terceros

Bootstrap (MIT), iconos Lucide (ISC) y fuente Roboto (SIL Open Font License 1.1).
