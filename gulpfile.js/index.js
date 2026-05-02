// src() → tomar archivos de entrada (js, scss, imágenes) para procesar
// dest() → guardar los archivos procesados en la carpeta de salida
// symlink() → crear enlaces simbólicos en lugar de copiar archivos
// lastRun() → procesar solo los archivos que cambiaron desde la última ejecución  src(paths.js, { since: lastRun(js) })
// series() → ejecutar tareas en orden, una después de otra
// parallel() → ejecutar tareas al mismo tiempo, sin esperar a la otra
// watch() → observar cambios en archivos y ejecutar tareas automáticamente
// task() → registrar tareas manualmente (útil en compatibilidad o legacy)
// tree() → mostrar el árbol de tareas y sus dependencias
// Vinyl → objeto interno que representa cada archivo en el flujo de Gulp
// Vinyl.isVinyl() → comprobar si un objeto es un archivo Vinyl
// Vinyl.isCustomProp() → verificar propiedades especiales agregadas a un Vinyl
import { watch, series } from 'gulp';
import { paths } from './config/paths.js';
import { css } from './tasks/css.js';
import { js, jsSubfolders } from './tasks/js.js';
import { imagenes } from './tasks/imagenes.js';
import { servidor } from './tasks/servidor.js';

// Tarea de observación
export function dev() {
    watch(paths.scss, css);
    watch(paths.js, js);
    watch(paths.jssubfolders, jsSubfolders);
    watch('src/img/**/*.{png,jpg}', imagenes);
}

// Exportar tareas individuales
export { css, js, jsSubfolders, imagenes, servidor };

// Tareas compuestas
export const imagen = series(imagenes);
export const build = series(css, js, jsSubfolders);
export default series(css, js, jsSubfolders, imagenes, dev);