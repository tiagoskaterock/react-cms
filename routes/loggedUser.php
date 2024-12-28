<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoggedUserController;

// Adicione suas rotas de API aqui
Route::get('/api/loggedUserName', action: [LoggedUserController::class, 'loggedUserName']);
