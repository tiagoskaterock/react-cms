<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

// Adicione suas rotas de API aqui
Route::post('/api/categories', [CategoryController::class, 'store']);

Route::get('/api/AllCategories', [CategoryController::class, 'AllCategories']);

Route::get('/api/totalCategories', [CategoryController::class, 'totalCategories']);
