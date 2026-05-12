<?php
$isDev = $_ENV['ENVIRONMENT'] === 'development';

if (!$isDev) {
    $manifest = json_decode(
        file_get_contents(__DIR__ . '/../public/build/.vite/manifest.json'),
        true
    );
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UpTask | <?= $titulo ?? '' ; ?> </title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Open+Sans&display=swap" rel="stylesheet">

    <?php if ($isDev): ?>
        <script type="module" src="http://localhost:5173/@vite/client"></script>
    <?php else: ?>
        <link rel="stylesheet" href="/build/<?= $manifest['src/scss/app.scss']['file'] ?>">
    <?php endif ?>
</head>

<body>

    <?= $contenido ?>

    <?php if ($isDev): ?>
        <script type="module" src="http://localhost:5173/src/js/app.js"></script>
    <?php else: ?>
        <script src="/build/<?= $manifest['src/js/app.js']['file'] ?>"></script>
    <?php endif ?>

    <?= $script ?? '' ?>

</body>
</html>