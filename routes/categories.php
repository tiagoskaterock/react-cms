<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

// Adicione suas rotas de API aqui
Route::post('/api/categories', [CategoryController::class, 'store']);

Route::get('/api/AllCategories', [CategoryController::class, 'allCategories'])->name('allCategories');

Route::get('/api/EditCategory/{id}', [CategoryController::class, 'editCategory']);

Route::get('/api/viewCategory/{id}', [CategoryController::class, 'viewCategory']);

Route::patch('/api/updateCategory/{id}', [CategoryController::class, 'updateCategory']);

Route::get('/api/totalCategories', [CategoryController::class, 'totalCategories']);

Route::delete('/api/deleteCategory/{id}', [CategoryController::class, 'deleteCategory']);
