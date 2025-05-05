<?php

namespace Database\Seeders;

use App\Models\RestaurantCategoryMeal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestaurantCategoryMealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RestaurantCategoryMeal::factory(50)->create();
    }
}
