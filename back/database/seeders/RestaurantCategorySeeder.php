<?php

namespace Database\Seeders;

use App\Models\RestaurantCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestaurantCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cat = [1, 2, 3, 4, 5, 6];
        $r = [1, 2, 3, 4, 5, 6];
        for ($i = 0; $i < 6; $i++) {
            $excludedNumbers = [];
            for ($j = 0; $j < 3; $j++) {
                do {
                    $randomNumber = $cat[array_rand($cat)];
                } while (in_array($randomNumber, $excludedNumbers));
                RestaurantCategory::create([
                    'restaurant_id' => $r[$i],
                    'category_id' => $randomNumber
                ]);
            }
        }
    }
}
