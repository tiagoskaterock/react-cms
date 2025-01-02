<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserController extends Controller
{

    /**
     * retorna todos os usuários
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function allUsers() : Collection      
    {
        return User::all();
    }
    /**
     * Retorna o total de usuários do sistema
     * @return int
     */
    public function getTotalUsers()
    {
        return User::count();
    }
}
