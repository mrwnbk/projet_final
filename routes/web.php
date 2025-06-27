<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\ForAdmin;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ArticleController::class, 'index'])->name('home');

Route::middleware([ForAdmin::class])->group(function () {
    Route::get('/article/create', [ArticleController::class, 'create']);
    Route::post('/article/post', [ArticleController::class, 'store']);
    Route::get('/article/edit/{id}', [ArticleController::class, 'edit']);
    Route::put('/article/update/{id}', [ArticleController::class, 'update']);
    Route::delete('/article/delete/{id}', [ArticleController::class, 'destroy']);

    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/article/detail/{id}', [ArticleController::class, 'show']);
    Route::post('/commentaire/post', [CommentaireController::class, 'store']);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
