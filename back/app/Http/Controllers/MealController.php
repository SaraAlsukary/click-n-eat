<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use App\Http\Requests\StoreMealRequest;
use App\Http\Requests\UpdateMealRequest;
use App\Http\Resources\MealShowResources;

class MealController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $data = Meal::whereHas('restaurant', function ($q) use ($id) {
            $q->where('restaurant_id', $id);
        })->with(['media'])->get();
        return response()->json(['data' => $data]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMealRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Meal $meal)
    {
        $show = $meal->load(['media', 'restaurantCayegory.category']);
        return response()->json($show);
        // return response()->json(['data' => MealShowResources::collection([$show])]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMealRequest $request, Meal $meal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Meal $meal)
    {
        //
    }
}
