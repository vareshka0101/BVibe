<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ExerciseController;
use App\Http\Controllers\API\WorkoutController;
use App\Http\Controllers\API\MealController;
use App\Http\Controllers\API\WeightController;
use App\Http\Controllers\API\DashboardController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);


    Route::get('/dashboard/stats', [DashboardController::class, 'stats']);


    Route::apiResource('exercises', ExerciseController::class);


    Route::get('/workouts/history', [WorkoutController::class, 'history']);
    Route::post('/workouts/{workout}/sets', [WorkoutController::class, 'addSet']);
    Route::apiResource('workouts', WorkoutController::class);


    Route::get('/meals/daily/{date}', [MealController::class, 'daily']);
    Route::apiResource('meals', MealController::class);


    Route::apiResource('weight', WeightController::class);
});
