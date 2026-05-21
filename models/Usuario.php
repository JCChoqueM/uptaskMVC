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
}
