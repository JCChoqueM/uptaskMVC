import fs from 'fs';
import path from 'path';

function updateIndex(fileDir, fileName, action) {
    const indexPath = path.join(fileDir, '_index.scss');
    const importLine = `@forward '${fileName}';`;

    if (action === 'add') {
        let content = fs.existsSync(indexPath)
            ? fs.readFileSync(indexPath, 'utf8')
            : '';

        if (!content.includes(importLine)) {
            fs.appendFileSync(indexPath, importLine + '\n');
            console.log(`[scss-auto-index] Añadido: ${importLine}`);
        }
    }

    if (action === 'remove') {
        if (!fs.existsSync(indexPath)) return;

        let content = fs.readFileSync(indexPath, 'utf8');
        const updated = content
            .split('\n')
            .filter(line => !line.includes(importLine))
            .join('\n')
            .trim();

        if (updated === '') {
            fs.unlinkSync(indexPath);
            console.log(`[scss-auto-index] Eliminado _index.scss vacío en ${fileDir}`);
        } else {
            fs.writeFileSync(indexPath, updated + '\n');
            console.log(`[scss-auto-index] Eliminado: ${importLine}`);
        }
    }
}

function watchDir(dir) {
    fs.watch(dir, { recursive: true }, (event, filename) => {
        if (!filename) return;
        if (!filename.endsWith('.scss')) return;
        if (path.basename(filename) === '_index.scss') return;

        const filePath = path.join(dir, filename);
        const fileDir = path.dirname(filePath);
        const fileName = path.basename(filename, '.scss').replace(/^_/, '');
        // _acciones.scss → 'acciones'

        if (event === 'rename') {
            if (fs.existsSync(filePath)) {
                updateIndex(fileDir, fileName, 'add');
            } else {
                updateIndex(fileDir, fileName, 'remove');
            }
        }
    });
}

export default function scssAutoIndex(scssDir = 'src/scss') {
    return {
        name: 'scss-auto-index',
        configureServer() {
            const absDir = path.resolve(process.cwd(), scssDir);
            console.log(`[scss-auto-index] Watching: ${absDir}`);
            watchDir(absDir);
        }
    };
}