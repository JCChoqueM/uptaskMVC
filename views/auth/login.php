<div class="contenedor">
    <h1>Uptask</h1>
    <p>Crea y administra tus proyectos </p>

    <!--section contenedor-sm -->
    <div class="contenedor-sm">
        <p class="descripcion pagina">Iniciar Sesión</p>
        <form action="/" method="POST" class="formulario">
            <div class="campo">
                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Tu Email"
                    name="email">
            </div>
            <div class="campo">
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Tu Password"
                    name="password">
            </div>
            <input type="submit" class="boton" value="Iniciar Sesión">
        </form>
    </div>
    <div class="acciones">
        <a href="/crear">Aun no tienes una cuenta? Obtener una</a>
        <a href="/olvide">Olvidaste tu password</a>

    </div>
    <!-- !section contenedor-sm -->
</div>