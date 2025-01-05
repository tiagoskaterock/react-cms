<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/api/posts', [PostController::class, 'allPosts']);

Route::get('/api/viewPost/{id}', [PostController::class, 'viewPost']);

Route::get('/api/totalPosts', [PostController::class, 'totalPosts']);

Route::post('/api/posts', [PostController::class, 'store']); // Rota para criar novo post
