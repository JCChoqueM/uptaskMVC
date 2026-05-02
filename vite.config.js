import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
    plugins: [
        FullReload(['**/*.php'])
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        watch: {
            usePolling: true,
            interval: 500
        }
    },
    build: {
        outDir: 'public/build',
        rollupOptions: {
            input: {
                app: 'src/js/app.js',
                styles: 'src/scss/app.scss'
            }
        }
    }
});