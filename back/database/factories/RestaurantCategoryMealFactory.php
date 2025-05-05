<?php

namespace Database\Factories;

use App\Models\Meal;
use App\Models\RestaurantCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RestaurantCategoryMeal>
 */
class RestaurantCategoryMealFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'restaurant_category_id' => RestaurantCategory::inRandomOrder()->first()->id,
            'meal_id' =>  Meal::inRandomOrder()->first()->id,
            'price' => rand(100, 5000)
        ];
    }
}
