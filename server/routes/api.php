<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ExerciseController;
use App\Http\Controllers\API\WorkoutController;
use App\Http\Controllers\API\MealController;
use App\Http\Controllers\API\WeightController;
use App\Http\Controllers\API\DashboardController;

// Публичные маршруты
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Защищенные маршруты (требуют аутентификации)
Route::middleware('auth:sanctum')->group(function () {
    // Auth
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // Dashboard
    Route::get('/dashboard/stats', [DashboardController::class, 'stats']);

    // Exercises
    Route::apiResource('exercises', ExerciseController::class);

    // Workouts
    Route::get('/workouts/history', [WorkoutController::class, 'history']);
    Route::post('/workouts/{workout}/sets', [WorkoutController::class, 'addSet']);
    Route::apiResource('workouts', WorkoutController::class);

    // Meals
    Route::get('/meals/daily/{date}', [MealController::class, 'daily']);
    Route::apiResource('meals', MealController::class);

    // Weight
    Route::apiResource('weight', WeightController::class);
});
