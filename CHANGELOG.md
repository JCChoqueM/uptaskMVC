# Changelog

Todos los cambios notables de este proyecto se documentarán en este archivo.

## [1.0.0] - 2024-01-XX

### Añadido
- Sistema de autenticación de usuarios (registro, login, logout)
- Confirmación de cuenta por email con token único
- Recuperación de contraseña mediante email
- Gestión de proyectos (crear, ver, listar)
- Gestión de tareas (crear, actualizar, eliminar, cambiar estado)
- API REST para operaciones de tareas
- Interfaz de usuario con SASS y JavaScript vanilla
- Integración con Vite para desarrollo y build
- Dockerización de la aplicación (PHP, MySQL, Apache)
- Sistema de alertas y notificaciones
- Integración con SweetAlert2 para confirmaciones

### Tecnologías
- PHP 8.2 con arquitectura MVC
- MySQL 8.0
- Vite 5.0 como bundler
- SASS para estilos
- PHPMailer para envío de emails
- vlucas/phpdotenv para gestión de entorno

## [Unreleased]

### Añadido
- Tour interactivo con Driver.js para guía de bienvenida
- Archivo de esquema de base de datos (`database/schema.sql`)
- Documentación completa (`README.md`, `docs/`)
- Archivo `.env.example` como referencia

### Pendiente
- Tests unitarios
- Documentación API con Swagger
- Deploy en producción
- Mejoras de seguridad en validación