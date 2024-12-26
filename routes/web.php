<?php

use Illuminate\Support\Facades\Route;
use App\Models\Category;
use App\Models\Post;
use App\Http\Controllers\CategoryController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin', function () {
    return view('admin');
});

/**
 * Categories
 */
Route::get('/api/categories', function () {
    return Category::all();
});


/**
 * Posts
 */
Route::get('/api/posts', function () {
    return Post::all();
});

// Se você deseja registrar as rotas da API aqui:
require base_path('routes/api.php');