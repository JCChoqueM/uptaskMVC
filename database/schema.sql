-- =====================================================
-- UpTask - Esquema de Base de Datos
-- MySQL 8.0+
-- =====================================================

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS uptask 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE uptask;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    token VARCHAR(255) DEFAULT NULL,
    confirmado TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_token (token)
);

-- Tabla de proyectos
CREATE TABLE proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proyecto VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL UNIQUE,
    propietarioId INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (propietarioId) REFERENCES usuarios(id) ON DELETE CASCADE,
    INDEX idx_url (url),
    INDEX idx_propietario (propietarioId)
);

-- Tabla de tareas
CREATE TABLE tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    estado TINYINT(1) DEFAULT 0,
    proyectoId INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (proyectoId) REFERENCES proyectos(id) ON DELETE CASCADE,
    INDEX idx_proyecto (proyectoId),
    INDEX idx_estado (estado)
);

-- =====================================================
-- Datos de prueba (opcional)
-- =====================================================

-- Usuario de ejemplo
INSERT INTO usuarios (nombre, email, password, confirmado) VALUES
('Usuario Demo', 'demo@uptask.com', '$2y$10$Ejemplotokenhash', 1);

-- Proyecto de ejemplo
SET @usuario_id = LAST_INSERT_ID();
INSERT INTO proyectos (proyecto, url, propietarioId) VALUES
('Proyecto Demo', 'demo-project-url', @usuario_id);

-- Tarea de ejemplo
SET @proyecto_id = LAST_INSERT_ID();
INSERT INTO tareas (nombre, estado, proyectoId) VALUES
('Primera tarea', 0, @proyecto_id),
('Segunda tarea completada', 1, @proyecto_id);