import { src, dest } from 'gulp';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import { paths } from '../config/paths.js';

// Archivos de la raíz → bundle.js (sin cambios)
export function js() {
    return src(paths.js, { sourcemaps: true })
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(dest('./public/build/js', { sourcemaps: '.' }));
}

// Procesa modules/, templates/ y renderers/ manteniendo la estructura de carpetas
export function jsSubfolders() {
    return src(paths.jssubfolders, { sourcemaps: true, base: './src/js' })
        .pipe(terser())
        .pipe(dest('./public/build/js', { sourcemaps: '.' }));
}