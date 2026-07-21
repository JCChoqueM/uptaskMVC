# UpTask - Task Management Application

UpTask es una aplicación web de gestión de proyectos y tareas desarrollada en PHP 8 con arquitectura MVC (Modelo-Vista-Controlador). Permite a los usuarios crear proyectos, gestionar tareas y organizar su trabajo de manera eficiente.

![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?logo=php) ![MySQL](https://img.shields.io/badge/MySQL-8.0-4472A1?logo=mysql) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript) ![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Modelos](#-modelos)
- [Controladores](#-controladores)
- [Rutas API](#-rutas-api)
- [Base de Datos](#-base-de-datos)
- [Scripts Disponibles](#-scripts-disponibles)
- [Docker](#-docker)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## ✨ Características

- **Autenticación de usuarios**: Registro, login, confirmación de cuenta por email y recuperación de contraseña
- **Gestión de proyectos**: Crear y visualizar proyectos personales
- **Gestión de tareas**: Crear, editar, eliminar y cambiar el estado de tareas
- **Interfaz moderna**: Diseño responsive con SASS/CSS y JavaScript vanilla
- **API RESTful**: Endpoints para operaciones CRUD de tareas
- **Notificaciones**: Sistema de alertas y mensajes con SweetAlert2
- **Tour interactivo**: Guía de bienvenida para nuevos usuarios con Driver.js

## 🛠 Tecnologías

### Backend
- **PHP 8.2** - Lenguaje de programación principal
- **MySQL 8.0** - Base de datos
- **PDO/MySQLi** - Conexión a base de datos
- **PHPMailer** - Envío de correos electrónicos
- **vlucas/phpdotenv** - Gestión de variables de entorno

### Frontend
- **JavaScript ES6+** - Lógica del cliente
- **Vite 5.0** - Bundler y servidor de desarrollo
- **SASS** - Preprocesador CSS
- **SweetAlert2** - Notificaciones emergentes
- **Driver.js** - Tour interactivo para guías de usuario

### DevOps
- **Docker** - Contenedorización
- **Docker Compose** - Orquestación de contenedores
- **Apache** - Servidor web

## 📦 Requisitos Previos

- PHP >= 8.2
- Composer
- MySQL >= 8.0
- Node.js >= 18.x
- NPM >= 9.x
- Docker y Docker Compose (opcional, para despliegue con contenedores)

## 🚀 Instalación

### Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone [repositorio]
   cd uptask
   ```

2. **Instalar dependencias de PHP**
   ```bash
   composer install
   ```

3. **Instalar dependencias de Node.js**
   ```bash
   npm install
   ```

4. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Editar el archivo .env con las credenciales de tu base de datos
   ```

5. **Crear la base de datos**
   ```sql
   CREATE DATABASE uptask CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

6. **Importar el esquema de base de datos**
   ```sql
   USE uptask;
   SOURCE /ruta/al/archivo/schema.sql;
   ```

### Instalación con Docker

1. **Clonar el repositorio**
   ```bash
   git clone [repositorio]
   cd uptask
   ```

2. **Ejecutar los contenedores**
   ```bash
   docker-compose up -d
   ```

3. **Acceder al contenedor PHP**
   ```bash
   docker exec -it uptask_php bash
   ```

4. **Instalar dependencias dentro del contenedor**
   ```bash
   composer install
   npm install
   ```

5. **Configurar .env**
   ```bash
   # El archivo .env debe contener:
   DB_HOST=mysql
   DB_USER=root
   DB_PASS=1234
   DB_NAME=uptask
   ENVIRONMENT=development
   ```

## ⚙️ Configuración

### Variables de Entorno (.env)

```env
# Base de datos
DB_HOST=localhost
DB_USER=root
DB_PASS=tu_password
DB_NAME=uptask

# Entorno (development o production)
ENVIRONMENT=development
```

### Configuración de Vite

El archivo `vite.config.js` está configurado para:
- Servir archivos desde `src/js/` y `src/scss/`
- Habilitar hot-reload en desarrollo
- Compilar assets a `public/build/` en producción
- Excluir `vendor/` y `node_modules/` del watch

## 🏗 Arquitectura del Proyecto

UpTask sigue el patrón **MVC (Modelo-Vista-Controlador)** con la siguiente estructura:

```
uptask/
├── classes/              # Clases auxiliares
│   └── Email.php         # Clase para envío de emails
├── controllers/          # Controladores de la aplicación
│   ├── DashboardController.php
│   ├── LoginController.php
│   └── TareaController.php
├── models/               # Modelos y lógica de datos
│   ├── ActiveRecord.php  # Clase base para ORM
│   ├── Usuario.php
│   ├── Proyecto.php
│   └── Tarea.php
├── views/                # Vistas (templates PHP)
│   ├── auth/             # Vistas de autenticación
│   ├── dashboard/        # Vistas del dashboard
│   ├── templates/        # Templates reutilizables
│   └── layout.php        # Layout principal
├── includes/             # Archivos de configuración
│   ├── app.php           # Inicialización de la app
│   ├── database.php      # Conexión a BD
│   └── funciones.php     # Funciones helper
├── src/                  # Código fuente del cliente
│   ├── js/               # JavaScript
│   │   ├── app.js
│   │   ├── tareas.js
│   │   ├── dashboard/
│   │   │   └── tour.js   # Tour interactivo Driver.js
│   │   └── paginas/login.js
│   └── scss/             # Estilos SASS
│       └── dashboard/
│           └── _tour.scss # Estilos del tour
├── public/               # Punto de entrada público
│   └── index.php         # Front controller
└── Router.php            # Enrutador principal
```

### Flujo de la Aplicación

```
Request → public/index.php → Router.php → Controller → Model → View → Response
```

## 📊 Modelos

### ActiveRecord (Clase Base)

Clase base que implementa el patrón ActiveRecord para operaciones CRUD:

**Métodos disponibles:**
- `setDB($database)` - Establecer conexión a la base de datos
- `all()` - Obtener todos los registros
- `find($id)` - Buscar por ID
- `where($columna, $valor)` - Buscar por columna
- `belongsTo($columna, $valor)` - Obtener registros relacionados
- `guardar()` - Crear o actualizar registro
- `eliminar()` - Eliminar registro
- `validar()` - Validar datos (sobreescribir en clases hijas)
- `sincronizar($args)` - Sincronizar propiedades con datos externos

### Usuario

Modelo para la gestión de usuarios:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | int | ID del usuario |
| `nombre` | string | Nombre completo |
| `email` | string | Email (único) |
| `password` | string | Password hash (bcrypt) |
| `password2` | string | Confirmación de password |
| `token` | string | Token para confirmación/recuperación |
| `confirmado` | int | Estado de confirmación (0/1) |

**Métodos de validación:**
- `validarLogin()` - Validación para login
- `validarNuevaCuenta()` - Validación para registro
- `validarEmail()` - Validación de email
- `validarPassword()` - Validación de password
- `hashPassword()` - Hashear password con bcrypt
- `crearToken()` - Generar token único

### Proyecto

Modelo para proyectos:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | int | ID del proyecto |
| `proyecto` | string | Nombre del proyecto |
| `url` | string | URL única amigable |
| `propietarioId` | int | ID del usuario propietario |

**Métodos:**
- `validarProyecto()` - Validar nombre del proyecto

### Tarea

Modelo para tareas:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | int | ID de la tarea |
| `nombre` | string | Nombre de la tarea |
| `estado` | int | Estado (0: Pendiente, 1: Completada) |
| `proyectoId` | int | ID del proyecto asociado |

## 🎮 Controladores

### LoginController

Maneja la autenticación de usuarios:

| Método | Ruta | Descripción |
|--------|------|-------------|
| `login()` | GET/POST `/` | Mostrar formulario y procesar login |
| `logout()` | GET `/logout` | Cerrar sesión |
| `crear()` | GET/POST `/crear` | Registro de nuevos usuarios |
| `olvide()` | GET/POST `/olvide` | Recuperar contraseña |
| `reestablecer()` | GET/POST `/reestablecer` | Cambiar contraseña |
| `mensaje()` | GET `/mensaje` | Página de confirmación |
| `confirmar()` | GET `/confirmar` | Confirmar cuenta por token |

### DashboardController

Gestiona el dashboard principal:

| Método | Ruta | Descripción |
|--------|------|-------------|
| `index()` | GET `/dashboard` | Lista de proyectos |
| `crear_proyecto()` | GET/POST `/crear-proyecto` | Crear nuevo proyecto |
| `proyecto()` | GET `/proyecto` | Ver proyecto y tareas |
| `perfil()` | GET `/perfil` | Ver perfil de usuario |

### TareaController

API REST para tareas:

| Método | Ruta | Descripción |
|--------|------|-------------|
| `index()` | GET `/api/tareas` | Obtener tareas por proyecto |
| `crear()` | POST `/api/tarea` | Crear nueva tarea |
| `actualizar()` | POST `/api/tarea/actualizar` | Actualizar tarea |
| `eliminar()` | POST `/api/tarea/eliminar` | Eliminar tarea |

## 🔌 Rutas API

### Autenticación

| Método | Ruta | Acción |
|--------|------|--------|
| GET | `/` | Mostrar login |
| POST | `/` | Procesar login |
| GET | `/logout` | Cerrar sesión |
| GET/POST | `/crear` | Registro |
| GET/POST | `/olvide` | Olvidé contraseña |
| GET/POST | `/reestablecer` | Restablecer contraseña |
| GET | `/mensaje` | Mensaje de confirmación |
| GET | `/confirmar` | Confirmar cuenta |

### Dashboard

| Método | Ruta | Acción |
|--------|------|--------|
| GET | `/dashboard` | Lista de proyectos |
| GET/POST | `/crear-proyecto` | Crear proyecto |
| GET | `/proyecto` | Ver proyecto (query: `?id=url_proyecto`) |
| GET | `/perfil` | Perfil de usuario |

### API de Tareas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/tareas?id={proyectoUrl}` | Listar tareas |
| POST | `/api/tarea` | Crear tarea |
| POST | `/api/tarea/actualizar` | Actualizar tarea |
| POST | `/api/tarea/eliminar` | Eliminar tarea |

**Formato de respuesta JSON para tareas:**

```json
{
  "tareas": [
    {
      "id": 1,
      "nombre": "Nombre de la tarea",
      "estado": 0,
      "proyectoId": 1
    }
  ]
}
```

## 🗄 Base de Datos

### Esquema de Tablas

#### usuarios

| Columna | Tipo | Descripción |
|---------|------|-------------|
| `id` | INT (PK, AI) | ID único |
| `nombre` | VARCHAR(255) | Nombre del usuario |
| `email` | VARCHAR(255) | Email (único) |
| `password` | VARCHAR(255) | Password hash |
| `token` | VARCHAR(255) | Token de verificación |
| `confirmado` | TINYINT(1) | Estado de confirmación |
| `created_at` | TIMESTAMP | Fecha de creación |

#### proyectos

| Columna | Tipo | Descripción |
|---------|------|-------------|
| `id` | INT (PK, AI) | ID único |
| `proyecto` | VARCHAR(255) | Nombre del proyecto |
| `url` | VARCHAR(255) | URL única |
| `propietarioId` | INT | FK a usuarios.id |
| `created_at` | TIMESTAMP | Fecha de creación |

#### tareas

| Columna | Tipo | Descripción |
|---------|------|-------------|
| `id` | INT (PK, AI) | ID único |
| `nombre` | VARCHAR(255) | Nombre de la tarea |
| `estado` | TINYINT(1) | 0: Pendiente, 1: Completada |
| `proyectoId` | INT | FK a proyectos.id |
| `created_at` | TIMESTAMP | Fecha de creación |

### Consultas de Creación

```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    token VARCHAR(255),
    confirmado TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proyecto VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL UNIQUE,
    propietarioId INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (propietarioId) REFERENCES usuarios(id)
);

CREATE TABLE tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    estado TINYINT(1) DEFAULT 0,
    proyectoId INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (proyectoId) REFERENCES proyectos(id)
);
```

## 🎯 Tour Interactivo

UpTask incluye un tour interactivo para guiar a los nuevos usuarios a través de la interfaz.

### Características del Tour

- **Auto-ejecutable**: Se muestra automáticamente en el primer acceso al dashboard
- **Manual**: Botón 🎯 disponible para reactivar el tour cuando se desee
- **Responsive**: Diseño adaptado para móviles y escritorio
- **LocalStorage**: Recuerda si el tour ya fue mostrado

### Pasos del Tour

1. **Sidebar de Navegación** - Explicación del menú principal
2. **Crear Proyecto** - Cómo crear nuevos proyectos
3. **Lista de Proyectos** - Visualización de proyectos existentes
4. **Bienvenida** - Introducción general a la aplicación

### Archivos

```
src/js/dashboard/tour.js         # Lógica del tour
src/scss/dashboard/_tour.scss  # Estilos personalizados
```

### Personalización

Puedes modificar los pasos del tour en `src/js/dashboard/tour.js`:

```javascript
const tour = driver({
    showProgress: true,
    steps: [
        {
            element: '#sidebar',
            popover: {
                title: 'Título del paso',
                description: 'Descripción del paso',
                position: 'right'
            }
        }
        // ... más pasos
    ]
});
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo Vite |
| `npm run build` | Compilar assets para producción |
| `npm run imagen` | Optimizar imágenes con Gulp |
| `npm run start` | Cambiar a desarrollo y ejecutar Vite |
| `npm run prod` | Cambiar a producción y compilar assets |

## 🐳 Docker

### Puertos

| Servicio | Puerto Interno | Puerto Externo |
|----------|---------------|--------------|
| PHP/Apache | 80 | 8082 |
| Vite | 5173 | 5173 |
| MySQL | 3306 | 3308 |

### Variables de Entorno (Docker)

```env
# MySQL
MYSQL_ROOT_PASSWORD=1234
MYSQL_DATABASE=uptask
```

### Comandos Docker

```bash
# Iniciar contenedores
docker-compose up -d

# Detener contenedores
docker-compose down

# Ver logs
docker-compose logs -f

# Ejecutar comandos en el contenedor PHP
docker exec -it uptask_php bash
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia ISC. Ver el archivo `LICENSE` para más detalles.

---

Desarrollado con ❤️ por **Tu nombre**