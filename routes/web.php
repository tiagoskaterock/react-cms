<?php

use Illuminate\Support\Facades\Route;
use App\Models\Post;

/**
 * Início da aplicação
 */
Route::get('/', function () {
    return view('welcome');
});

/**
 * Área restrita administrativa da aplicação, parte do CMS
 */
Route::get('/admin', function () {
    return view('admin');
});

// Se você deseja registrar as rotas da API aqui:
require base_path('routes/categories.php');
require base_path('routes/posts.php');