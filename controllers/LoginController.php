<?php

namespace Controllers;

use MVC\Router;

class LoginController
{
    public static function login(Router $router)
    {


        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
        //Render a la vista
        $router->render(
            'auth/login',
            [
                'titulo' => 'Iniciar Sesión'
            ]
        );
    }
    public static function logout()
    {
        echo "Desde login";
    }

    public static function crear(Router $router)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
        $router->render(
            'auth/crear',
            [
                'titulo' => 'Crea tu cuenta en UpTask',
            ]
        );
    }
    //Formulario de olvide mi password
    public static function olvide(Router $router)
    {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
        $router->render(
            'auth/olvide',
            [
                'titulo' => 'Olvide mi password',
            ]
        );
    }
    //Colocar el nuevo password
    public static function reestablecer()
    {
        echo "Desde reestablecer";
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
    }
    //Muestra el mensaje de confirmación
    public static function mensaje()
    {
        echo "Desde mensaje";
    }

    public static function confirmar()
    {
        echo "Desde confirmar";
    }
}
