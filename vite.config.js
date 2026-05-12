import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
    publicDir: false,    // ← aquí, fuera de build
    plugins: [
        FullReload(['**/*.php'],
            {
                delay: 1000
            }

        )
    ],
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                includePaths: ['src/scss']
            }
        }
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        watch: {
            usePolling: true,
            interval: 1500,
            ignored: ['**/vendor/**',
                '**/node_modules/**',
                '**/public/build/**']
        }
    },
    build: {
        outDir: 'public/build',
        manifest: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                app: 'src/js/app.js',
                styles: 'src/scss/app.scss'
            }
        }
    }
});