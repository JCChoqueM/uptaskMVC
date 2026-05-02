import { deleteAsync } from 'del';

export async function clean() {
    return await deleteAsync([
        'public/build/css/**',
        'public/build/js/**',
        'public/build/img/**',
        '!public/build',
        '!public/build/css',
        '!public/build/js',
        '!public/build/img'
    ]);
}

export async function cleanCSS() {
    return await deleteAsync(['public/build/css/**']);
}

export async function cleanJS() {
    return await deleteAsync([
        'public/build/js/**',
        '!public/build/js',
        '!public/build/js/modules'
    ]);
}

export async function cleanImg() {
    return await deleteAsync(['public/build/img/**']);
}