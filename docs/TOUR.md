# Tour Interactivo - UpTask

Guía para el recorrido interactivo (tour) implementado con Driver.js.

## ¿Qué es?

El tour interactivo es una guía paso a paso que se muestra a los nuevos usuarios al acceder al dashboard por primera vez. Ayuda a familiarizarse con la interfaz de la aplicación.

## Implementación

### Archivo JavaScript

`src/js/dashboard/tour.js`

```javascript
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const tour = driver({
    showProgress: true,  // Muestra barra de progreso
    steps: [
        {
            element: '#sidebar',          // Elemento a resaltar
            popover: {
                title: 'Título',        // Título del paso
                description: 'Descripción', // Texto explicativo
                position: 'right'       // Posición del popover
            }
        }
    ]
});

tour.drive();  // Iniciar el tour
```

### Archivo SCSS

`src/scss/dashboard/_tour.scss`

Contiene los estilos personalizados para que el tour tenga la apariencia visual de la aplicación.

## Pasos del Tour

1. **Sidebar de Navegación** (`#sidebar`) - Explicación del menú principal
2. **Crear Proyecto** (`.crear-proyecto`) - Botón para crear nuevos proyectos
3. **Tus Proyectos** (`.nombre-pagina`) - Encabezado de la sección de proyectos

## Posiciones Disponibles

- `top` - Encima del elemento
- `right` - A la derecha del elemento
- `bottom` - Debajo del elemento
- `left` - A la izquierda del elemento

## Características

- **Primera visita**: Se muestra automáticamente usando `localStorage`
- **Botón móvil**: Un botón flotante 🎯 aparece en dispositivos móviles
- **Botón sidebar**: En escritorio, un botón en el sidebar permite reactivar el tour
- **Persistente**: El tour no se vuelve a mostrar automáticamente, pero se puede reactivar manualmente

## Personalización

Para modificar los pasos del tour, edita el archivo `src/js/dashboard/tour.js`:

```javascript
// Agregar un nuevo paso
{
    element: '.tu-clase',
    popover: {
        title: 'Nuevo Paso',
        description: 'Descripción del nuevo paso',
        position: 'bottom'
    }
}
```

## Dependencias

- [Driver.js](https://driverjs.com/) - ^1.8.0

## Notas Técnicas

- El CSS de Driver.js se importa automáticamente desde el paquete npm
- Los estilos personalizados están en `_tour.scss` y se compilan con SASS
- El tour solo se activa en la ruta `/dashboard`