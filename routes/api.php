<?php

use Illuminate\Support\Facades\Route;

// Adicione suas rotas de API aqui
Route::post('/api/categories', [\App\Http\Controllers\CategoryController::class, 'store']);
