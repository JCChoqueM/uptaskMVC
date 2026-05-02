<?php

require_once __DIR__ . '/../includes/app.php';

use MVC\Router;
?>

<!DOCTYPE html>
<html>
<head>
    <script type="module" src="http://localhost:5173/@vite/client"></script>
</head>
<body>
    <h1>Probando live relo2ad</h1>
</body>
</html>

<?php
$router = new Router();
$router->comprobarRutas();