<?php

function debuguear($variable) : string {
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

// Escapa / Sanitizar el HTML
function s($html) : string {
    return htmlspecialchars($html);
}

// Función que revisa que el usuario este autenticado
function isAuth() : void {
    if(!isset($_SESSION['login'])) {
        header('Location: /');
    }
}

function vite_script($archivo) {
    $isDev = ($_ENV['ENVIRONMENT'] ?? 'development') === 'development';

    if ($isDev) {
        return "<script type=\"module\" src=\"http://localhost:5173/{$archivo}\"></script>";
    }

    $manifest = json_decode(file_get_contents(__DIR__ . '/../public/build/.vite/manifest.json'), true);
    $file = $manifest[$archivo]['file'] ?? '';

    return "<script type=\"module\" src=\"/build/{$file}\"></script>";
}