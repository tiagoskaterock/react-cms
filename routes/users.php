<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/api/allUsers', [UserController::class, 'allUsers']);

Route::get('/api/getTotalUsers', [UserController::class, 'getTotalUsers']);
