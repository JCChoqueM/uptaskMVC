<div class="barra">
    <p>Hola: <span><?php echo $_SESSION['nombre'] ?></span> </p>
    <a href="/logout" class="cerrar-sesion">Cerrar Sesión</a>
</div>

<!-- Botón de tour (visible en móviles) -->
<button id="tour-btn-mobile" class="tour-btn-mobile" title="Ver tour de bienvenida">🎯</button>

<?php 
// Agregar script del tour solo en dashboard
if (strpos($_SERVER['REQUEST_URI'] ?? '', '/dashboard') !== false || $titulo === 'Proyectos') {
    $script = vite_script('src/js/dashboard/tour.js');
}
?>