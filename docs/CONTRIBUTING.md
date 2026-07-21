# Contributing Guide - UpTask

¡Gracias por tu interés en contribuir a UpTask! Este documento te guiará para contribuir de manera efectiva.

## Código de Conducta

Al contribuir, se espera que sigas nuestro código de conducta y que trates a otros miembros del proyecto con respeto.

## ¿Cómo Contribuir?

### 1. Fork y Clone

```bash
git clone https://github.com/tu-usuario/uptask.git
cd uptask
```

### 2. Instala las dependencias

```bash
composer install
npm install
```

### 3. Crea una rama para tu feature

```bash
git checkout -b feature/nueva-funcionalidad
```

### 4. Desarrolla siguiendo las convenciones

- Usa PHP 8.2+ y sus características modernas
- Sigue el patrón MVC existente
- Mantén el código limpio y comentado
- Usa nombres descriptivos para variables y métodos

### 5. Commit y Push

```bash
git add .
git commit -m "feat: Añadir nueva funcionalidad"
git push origin feature/nueva-funcionalidad
```

### 6. Abre un Pull Request

Describe tus cambios y menciona el issue relacionado si existe.

## Convenciones de Código

### PHP

- **PSR-4** para autoloading
- **Namespaces**: `MVC\`, `Controllers\`, `Model\`, `Classes\`
- **Métodos**: camelCase
- **Clases**: PascalCase
- **Variables**: camelCase

```php
// Ejemplo de clase siguiendo convenciones
namespace Model;

class Usuario extends ActiveRecord
{
    protected static $tabla = 'usuarios';
    protected static $columnasDB = ['id', 'nombre', 'email'];
    
    public function validarDatos(): array
    {
        // validación
    }
}
```

### JavaScript

- ES6+ features
- Variables con `const` y `let` (no `var`)
- Arrow functions cuando sea apropiado
- Comentarios JSDoc para funciones públicas

```javascript
/**
 * Obtiene las tareas del proyecto actual
 * @returns {Promise<Array>} Array de tareas
 */
const obtenerTareas = async () => {
    const id = obtenerProyecto();
    // lógica
};
```

### CSS/SASS

- Uso de variables
- Anidamiento máximo 3 niveles
- Nombres de clases con kebab-case

## Estructura de Archivos

### Al añadir una nueva funcionalidad

1. **Modelo** → `models/NuevoModelo.php`
2. **Controlador** → `controllers/NuevoController.php`
3. **Vistas** → `views/nuevo/`
4. **JavaScript** → `src/js/nuevo.js`
5. **Estilos** → `src/scss/componentes/_nuevo.scss`

### Al añadir una API endpoint

1. Añade método en controlador existente o crea uno nuevo
2. Registra la ruta en `public/index.php`
3. Documenta en `docs/API.md`

## Testing

Actualmente no hay tests implementados. Se recomendará:
- PHP Unit para tests de backend
- Jest para tests de JavaScript

## Preguntas?

Abre un issue con la etiqueta `question` y te responderemos lo antes posible.