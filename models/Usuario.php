<?php

namespace Model;

class Usuario extends ActiveRecord
{
    protected static $tabla = 'usuarios';
    protected static $columnasDB = ['id', 'nombre', 'email', 'password', 'token', 'confirmado'];

    // Agregar estas líneas:
    public ?int $id = null;   // ✅ acepta: 1, 25, 100  o  null
    //public int $id = null;    // ❌ error: int no puede ser null
    public string $nombre = '';
    public string $email = '';
    public string $password = '';
    public string $password2 = '';
    public string $token = '';
    public int $confirmado = 0;

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
        if(strlen($this->password) < 6){
            self::$alertas['error'][] = 'El Password debe contener al menos 6 caracteres';
        }
        if (!$this->password2) {
            self::$alertas['error'][] = 'El Password2 no puede ir vacio';
        }
        if($this->password !== $this->password2){
            self::$alertas['error'][] = 'Los Passwords no son iguales';
        }


        return self::$alertas;
    }
    /* !section1 fin - validacion para cuetnas nuevas[fin] */
}
