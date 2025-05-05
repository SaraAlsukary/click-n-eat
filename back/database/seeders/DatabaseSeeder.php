<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Restaurant;
use App\Models\RestaurantMeal;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            CategorySeeder::class,
            MealSeeder::class,
            RestaurantSeeder::class,
            MideaSeeder::class,
            RestaurantCategorySeeder::class,
            RestaurantCategoryMealSeeder::class
        ]);
    }
}
