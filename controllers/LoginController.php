<?php

namespace Controllers;

use MVC\Router;

class LoginController
{
    public static function login(Router $router)
    {
        echo "Desde login";

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
        //Render a la vista
        $router->render('auth/login',
            []
        );
    }
    public static function logout()
    {
        echo "Desde login";
    }

    public static function crear()
    {

        echo "Desde crearrr";

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
    }
//Formulario de olvide mi password
    public static function olvide()
    {
        echo "Desde olvide";
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
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
