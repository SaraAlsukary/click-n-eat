<?php

namespace App\Http\Controllers;

use App\Models\RestaurantCategory;
use App\Http\Requests\StoreRestaurantCategoryRequest;
use App\Http\Requests\UpdateRestaurantCategoryRequest;

class RestaurantCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRestaurantCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(RestaurantCategory $restaurantCategory)
    {
        $data = $restaurantCategory->load(['meal', 'meal.media']);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRestaurantCategoryRequest $request, RestaurantCategory $restaurantCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RestaurantCategory $restaurantCategory)
    {
        //
    }
}
