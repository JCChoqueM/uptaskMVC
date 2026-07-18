<?php include_once __DIR__ . '/header-dashboard.php' ?>

<div class="contenedir-sm">
    <div class="contenedor-nueva-tarea">
        <button
            type="button"
            class="agregar-tarea"
            id="agregar-tarea"
        >&#43; Nueva Tarea</button>
    </div>
    <!-- section espacio para mostrar las tareas[inicio]  -->
    <ul
        class="listado-tareas"
        id="listado-tareas"
    ></ul>
    <!-- !section fin - espacio para mostrar las tareas[fin]  -->


</div>


<?php include_once __DIR__ . '/footer-dashboard.php' ?>

<?php
$script = vite_script('src/js/tareas.js');


?>