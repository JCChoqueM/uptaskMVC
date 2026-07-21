# API Reference - UpTask

Documentación de la API REST para el manejo de tareas.

## Base URL

```
http://localhost:8082/api/
```

## Autenticación

Todas las rutas de la API requieren que el usuario esté autenticado. La autenticación se maneja mediante sesión PHP.

## Endpoints

### Tareas

#### GET /api/tareas

Obtiene todas las tareas de un proyecto específico.

**Parámetros de Query**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | string | Sí | URL única del proyecto |

**Respuesta Exitosa (200)**

```json
{
  "tareas": [
    {
      "id": 1,
      "nombre": "Comprar materiales",
      "estado": 0,
      "proyectoId": 1
    },
    {
      "id": 2,
      "nombre": "Diseñar mockups",
      "estado": 1,
      "proyectoId": 1
    }
  ]
}
```

**Errores**

| Código | Descripción |
|--------|-------------|
| 403 | No autorizado (proyecto no pertenece al usuario) |

---

#### POST /api/tarea

Crea una nueva tarea en el proyecto especificado.

**Cuerpo de la Solicitud (FormData)**

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `nombre` | string | Sí | Nombre de la tarea |
| `proyectoId` | string | Sí | URL del proyecto |

**Respuesta Exitosa (200)**

```json
{
  "tipo": "exito",
  "id": 12,
  "mensaje": "Tarea creada correctamente",
  "proyectoId": 1
}
```

**Errores**

| Código | Descripción |
|--------|-------------|
| 400 | Error en la petición (proyecto no existe o no autorizado) |
| 500 | Error del servidor |

---

#### POST /api/tarea/actualizar

Actualiza el estado de una tarea existente.

**Cuerpo de la Solicitud (FormData)**

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `id` | int | Sí | ID de la tarea |
| `nombre` | string | Sí | Nombre de la tarea |
| `estado` | int | Sí | Estado (0: Pendiente, 1: Completada) |
| `proyectoId` | string | Sí | URL del proyecto |

**Respuesta Exitosa (200)**

```json
{
  "respuesta": {
    "tipo": "exito",
    "id": 12,
    "proyectoId": 1,
    "mensaje": "Actualizado correctamente"
  }
}
```

---

#### POST /api/tarea/eliminar

Elimina una tarea existente.

**Cuerpo de la Solicitud (FormData)**

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `id` | int | Sí | ID de la tarea |
| `nombre` | string | Sí | Nombre de la tarea |
| `estado` | int | Sí | Estado actual |
| `proyectoId` | string | Sí | URL del proyecto |

**Respuesta Exitosa (200)**

```json
{
  "resultado": true,
  "mensaje": "Eliminado correctamente",
  "tipo": "exito",
  "id": 12,
  "proyectoId": 1
}
```

## Códigos de Estado

| Estado | Descripción |
|--------|-------------|
| 200 | OK - Operación exitosa |
| 400 | Bad Request - Error en la petición |
| 403 | Forbidden - No autorizado |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

## Estados de Tareas

| Código | Estado | Descripción |
|--------|--------|-------------|
| 0 | Pendiente | Tarea pendiente por completar |
| 1 | Completada | Tarea finalizada |

## Ejemplos de Uso (JavaScript)

### Obtener tareas

```javascript
const obtenerTareas = async (proyectoId) => {
    const url = `/api/tareas?id=${proyectoId}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.tareas;
};
```

### Crear tarea

```javascript
const crearTarea = async (nombre, proyectoId) => {
    const datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('proyectoId', proyectoId);
    
    const respuesta = await fetch('/api/tarea', {
        method: 'POST',
        body: datos
    });
    
    return await respuesta.json();
};
```

### Actualizar tarea

```javascript
const actualizarTarea = async (id, nombre, estado, proyectoId) => {
    const datos = new FormData();
    datos.append('id', id);
    datos.append('nombre', nombre);
    datos.append('estado', estado);
    datos.append('proyectoId', proyectoId);
    
    const respuesta = await fetch('/api/tarea/actualizar', {
        method: 'POST',
        body: datos
    });
    
    return await respuesta.json();
};
```

### Eliminar tarea

```javascript
const eliminarTarea = async (id, nombre, estado, proyectoId) => {
    const datos = new FormData();
    datos.append('id', id);
    datos.append('nombre', nombre);
    datos.append('estado', estado);
    datos.append('proyectoId', proyectoId);
    
    const respuesta = await fetch('/api/tarea/eliminar', {
        method: 'POST',
        body: datos
    });
    
    return await respuesta.json();
};
```