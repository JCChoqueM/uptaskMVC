import browserSync from 'browser-sync';

// Crear instancia de Browser-Sync
const bs = browserSync.create();

/**
 * Iniciar servidor de desarrollo con Browser-Sync
 */
export function servidor(done) {
    bs.init({
        proxy: 'http://aprende-php-mvc.test/',
        port: 3000,
        open:true,
        //ui: false,

        // Archivos a observar
        files: [
           //!RULES 'public/build/**/*.css',
           //!RULES 'public/build/**/*.js',
           //!RULES 'public/build/img/**/*',
            'views/**/*.php',
            'src/**/*.php',
            'controllers/**/*.php',
            'models/**/*.php',
            '**/*.php'
        ],

        // Opciones de UI
        notify: false,
        open: false,           // Cambiar a true si quieres que abra el navegador automáticamente

        // Opciones de sincronización
        ghostMode: false,      // Deshabilita sincronización entre pestañas
        reloadDelay: 0,
        reloadDebounce: 300,

        // Headers para deshabilitar caché en desarrollo
        middleware: [
            function (req, res, next) {
                res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
                res.setHeader('Pragma', 'no-cache');
                res.setHeader('Expires', '0');
                next();
            }
        ],

        // Logging
        logLevel: 'info',      // 'debug', 'info', 'silent'
        logPrefix: 'BS',
        logConnections: false,
        logFileChanges: true
    });

    done();
}

/**
 * Recargar navegador
 */
export function reload(done) {
    bs.reload();
    done();
}

/**
 * Inyectar CSS sin recargar página completa (más rápido)
 */
export function streamCSS() {
    return bs.stream();
}

/**
 * Obtener instancia de Browser-Sync
 * Útil para llamadas desde otros archivos
 */
export function getInstance() {
    return bs;
}

/**
 * Detener Browser-Sync
 */
export function detener(done) {
    bs.exit();
    done();
}