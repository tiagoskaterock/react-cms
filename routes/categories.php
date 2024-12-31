<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

// Adicione suas rotas de API aqui
Route::post('/api/categories', [CategoryController::class, 'store']);

Route::get('/api/AllCategories', [CategoryController::class, 'allCategories']);

Route::get('/api/EditCategory/{id}', [CategoryController::class, 'editCategory']);

Route::patch('/api/updateCategory/{id}', [CategoryController::class, 'updateCategory']);

Route::get('/api/totalCategories', [CategoryController::class, 'totalCategories']);
