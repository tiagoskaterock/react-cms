<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/api/posts', [PostController::class, 'allPosts']);

Route::get('/api/totalPosts', [PostController::class, 'totalPosts']);
