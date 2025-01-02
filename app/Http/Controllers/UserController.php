<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    /**
     * Retorna o total de usuários do sistema
     * @return int
     */
    public function getTotalUsers()
    {
        return User::count();
    }
}
