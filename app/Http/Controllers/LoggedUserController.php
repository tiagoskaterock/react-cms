<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoggedUserController extends Controller
{
    public function loggedUserName()
    {
        // Verifica se o usuário está autenticado
        if (Auth::check()) {
            // Retorna o nome do usuário logado
            return Auth::user()->name;
        }

        // Se o usuário não estiver autenticado, retorna uma resposta de erro
        return response()->json(['error' => 'User not authenticated'], 401);
    }
}
