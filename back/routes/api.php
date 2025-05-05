<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\RestaurantCategoryController;
use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('logout', [AuthController::class, 'logout']);
    });
});

Route::group(['prefix' => 'restaurant'], function () {
    Route::get('index', [RestaurantController::class, 'index']);
    Route::get('show/{restaurant}', [RestaurantController::class, 'show']);
});

Route::group(['prefix' => 'meal'], function () {
    Route::get('show/{restaurantCategory}', [RestaurantCategoryController::class, 'show']);
});
