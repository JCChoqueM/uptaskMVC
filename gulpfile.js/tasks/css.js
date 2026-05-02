import { src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import { paths } from '../config/paths.js';

const sass = gulpSass(dartSass);

export function css(done) {
  src(paths.scss, { sourcemaps: true })
    .pipe(sass.sync({  // ← Usa .sync() para mejor rendimiento
      outputStyle: 'compressed',
      // silenceDeprecations: ['legacy-js-api']  // ← Silencia la advertencia
    }).on('error', sass.logError))
    .pipe(dest('./public/build/css', { sourcemaps: '.' }));
  done();
}