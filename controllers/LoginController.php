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
    public static function reestablecer(Router $router)
    {
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
          $router->render(
            'auth/reestablecer',
            [
                'titulo' => 'Olvide mi password',
            ]
        );
    }
    //Muestra el mensaje de confirmación
    public static function mensaje(Router $router)
    {
          $router->render(
            'auth/mensaje',
            [
                'titulo' => 'Cuenta creada exitosamente',
            ]
        );
    }

    public static function confirmar(Router $router)
    {
         $router->render(
            'auth/confirmar',
            [
                'titulo' => 'Confirma tu cuenta UpTask',
            ]
        );;
    }
}
