<?php

namespace Model;

class Usuario extends ActiveRecord
{
    protected static $tabla = 'usuarios';
    protected static $columnasDB = ['id', 'nombre', 'email', 'password', 'token', 'confirmado'];

    public $id = null;
    public $nombre = '';
    public $email = '';
    public $password = '';
    public $password2 = '';
    public $token = '';
    public $confirmado = 0;

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->nombre = $args['nombre'] ?? '';
        $this->email = $args['email'] ?? '';
        $this->password = $args['password'] ?? '';
        $this->password2 = $args['password2'] ?? '';
        $this->token = $args['token'] ?? '';
        $this->confirmado = $args['confirmado'] ?? 0;
    }

    /* section1 validacion para cuetnas nuevas[inicio] */
    public function validarNuevaCuenta()
    {
        if (!$this->nombre) {
            self::$alertas['error'][] = 'El Nombre es Obligatorio';
        }

        if (!$this->email) {
            self::$alertas['error'][] = 'El Email es Obligatorio';
        }

        if (!$this->password) {
            self::$alertas['error'][] = 'El Password no puede ir vacio';
        }
        if (strlen($this->password) < 6) {
            self::$alertas['error'][] = 'El Password debe contener al menos 6 caracteres';
        }
        if (!$this->password2) {
            self::$alertas['error'][] = 'El Password2 no puede ir vacio';
        }
        if ($this->password !== $this->password2) {
            self::$alertas['error'][] = 'Los Passwords no son iguales';
        }

        return self::$alertas;
    }
    /* !section1 fin - validacion para cuetnas nuevas[fin] */

    /* section2 valida un email[inicio] */

    public function validarEmail()
    {
        if (!$this->email) {
            self::$alertas['error'][] = 'El Email es Obligatorio';
        }

        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            self::$alertas['error'][] = 'Email no valido';
        }
        return self::$alertas;
    }

    /* !section2 fin - valida un email[fin] */

    /* section3 validarPassword[inicio] */

    public function validarPassword(){
        if (!$this->password) {
            self::$alertas['error'][] = 'El Password no puede ir vacio';
        }
        if (strlen($this->password) < 6) {
            self::$alertas['error'][] = 'El Password debe contener al menos 6 caracteres';
        }
        return self::$alertas;
    }
    /* !section3 fin - validarPassword[fin] */


    /* SECTION  hashea el password[inicio] */
    public function hashPassword()
    {
        $this->password = password_hash($this->password, PASSWORD_BCRYPT);
    }
    /* !SECTION  fin - hashea el password[fin] */

    /* section1 generar un token[inicio] */
    public function crearToken()
    {
        $this->token = uniqid();  //tb se puede poner md5(uniqueid()); que genera 32 caracteres pero en bd esta configurado con 15 
    }
    /* !section1 fin - generar un token[fin] */
}