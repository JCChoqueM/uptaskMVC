# Architecture Guide - UpTask

Guía detallada de la arquitectura del proyecto.

## Patrón MVC (Modelo-Vista-Controlador)

UpTask implementa el patrón MVC para separar la lógica de negocio, la presentación y el control de flujo.

```
┌─────────────────────────────────────────────────────────────┐
│                        Request                              │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  public/index.php (Front Controller / Punto de Entrada)       │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              Router.php (Enrutamiento)                       │
│  - Define rutas GET y POST                                 │
│  - Asigna controladores y métodos                           │
│  - Comprueba y ejecuta rutas                                 │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   Controllers                                │
│  ┌─────────────────┐  ┌─────────────────┐               │
│  │ LoginController │  │ TareaController │               │
│  └─────────────────┘  └─────────────────┘               │
│  ┌───────────────────────┐                                 │
│  │ DashboardController   │                                 │
│  └───────────────────────┘                                 │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                     Models                                   │
│  ┌─────────────────┐  ┌─────────────────┐                 │
│  │    Usuario      │  │    Tarea        │                 │
│  └─────────────────┘  └─────────────────┘                 │
│  ┌─────────────────┐  ┌─────────────────┐                 │
│  │   Proyecto      │  │  ActiveRecord   │                 │
│  └─────────────────┘  └─────────────────┘                 │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                      Views                                   │
│  - Renderizado de plantillas PHP                             │
│  - Inyección de datos                                        │
│  - layout.php como plantilla base                            │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    Response                                   │
│  - HTML renderizado                                          │
│  - JSON (API)                                                │
└─────────────────────────────────────────────────────────────┘
```

## Componentes Principales

### 1. Router (Router.php)

El enrutador es el componente central que:
- Registra rutas GET y POST
- Compara la URL actual con las rutas definidas
- Ejecuta el controlador y método asociados
- Maneja errores 404

**Métodos principales:**
```php
$router->get($url, $fn);    // Registrar ruta GET
$router->post($url, $fn);   // Registrar ruta POST
$router->render($view, $datos); // Renderizar vista
$router->comprobarRutas();  // Procesar la petición
```

### 2. ActiveRecord (models/ActiveRecord.php)

Clase base que implementa el patrón ActiveRecord:

**Características:**
- Conexión a base de datos centralizada
- Operaciones CRUD genéricas
- Sincronización automática de propiedades
- Sanitización de datos contra SQL injection

**Métodos CRUD:**
- `crear()` - INSERT
- `actualizar()` - UPDATE
- `eliminar()` - DELETE
- `find($id)` - SELECT por ID
- `where($columna, $valor)` - SELECT con filtro

### 3. Controladores

Cada controlador maneja un dominio específico:

**LoginController** - Autenticación y gestión de usuarios
**DashboardController** - Lógica del dashboard principal
**TareaController** - API REST para tareas

### 4. Vistas

Sistema de plantillas con:
- `layout.php` como plantilla base
- Vistas parciales reutilizables en `templates/`
- Separación de concerns (header, footer, componentes)

## Flujo de Datos

### Request HTTP

```
1. El servidor recibe la petición
2. public/index.php carga la aplicación
3. Se crea una instancia del Router
4. Se definen todas las rutas disponibles
5. Router.comprobarRutas() identifica la ruta
6. Se ejecuta el controlador correspondiente
7. El controlador interactúa con los modelos
8. Se renderiza la vista apropiada
9. Se devuelve la respuesta al cliente
```

### Autenticación

```
┌─────────────────────────────────────────────────┐
│               Flujo de Login                    │
├─────────────────────────────────────────────────┤
│                                                  │
│  1. Usuario envía credenciales                   │
│            ↓                                     │
│  2. LoginController::login() valida            │
│            ↓                                     │
│  3. Usuario::where() busca en BD               │
│            ↓                                     │
│  4. password_verify() confirma password           │
│            ↓                                     │
│  5. session_start() crea sesión                  │
│            ↓                                     │
│  6. $_SESSION almacena datos de usuario          │
│            ↓                                     │
│  7. Redirect a /dashboard                        │
│                                                  │
└─────────────────────────────────────────────────┘
```

## Seguridad

### Medidas Implementadas

1. **Sanitización de datos** - Uso de `mysqli::escape_string()` y `htmlspecialchars()`
2. **Contraseñas** - Hash con `password_hash()` (bcrypt)
3. **Autenticación** - Control por sesiones PHP
4. **Autorización** - Verificación de propiedad de proyectos/tareas
5. **CSRF** - Prevención básica mediante verificación de sesión

### Funciones de Seguridad

```php
// Sanitizar HTML
s($html) // htmlspecialchars()

// Verificar autenticación
isAuth() // Redirige si no hay sesión activa

// Validación de datos
$usuario->validarLogin()
$usuario->validarNuevaCuenta()
```

## Build y Desarrollo

### Vite

- Servidor de desarrollo en puerto 5173
- Hot reload automático
- Build optimizado para producción
- Soporte para módulos ES6

### Gulp (Tareas)

- Optimización de imágenes
- Compresión y procesamiento de assets

## Extensiones del Proyecto

Para añadir nuevas funcionalidades:

1. **Crear modelo** en `models/` extendiendo de `ActiveRecord`
2. **Crear controlador** en `controllers/`
3. **Añadir rutas** en `public/index.php`
4. **Crear vistas** en `views/`
5. **Actualizar lógica** según sea necesario