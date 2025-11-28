<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Meal;
use App\Models\Restaurant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MideaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $image_Category_1 = storage_path('images\salad.jpeg');
        $image_Category_2 = storage_path('images\pizza.jpg');
        $image_Category_3 = storage_path('images\nuggets.jpg');
        $image_Category_4 = storage_path('images\noodles.jpeg');
        $image_Category_5 = storage_path('images\Ice Cream.webp');
        $image_Category_6 = storage_path('images\Hot Dog.webp');
        $image_Category_7 = storage_path('images\donut.jpeg');
        $image_Category_8 = storage_path('images\burger.jpg');
        $image_Category_9 = storage_path('images\coffe.jpg');
        $Category_1 = Category::find(1);
        $Category_1
            ->addMedia($image_Category_1)
            ->preservingOriginal()
            ->toMediaCollection('categories');
        $Category_2 = Category::find(2);
        $Category_2
            ->addMedia($image_Category_2)
            ->preservingOriginal()
            ->toMediaCollection('categories');
        $Category_3 = Category::find(3);
        $Category_3
            ->addMedia($image_Category_3)
            ->preservingOriginal()
            ->toMediaCollection('categories');
        $Category_4 = Category::find(4);
        $Category_4
            ->addMedia($image_Category_4)
            ->preservingOriginal()
            ->toMediaCollection('categories');
        $Category_5 = Category::find(5);
        $Category_5
            ->addMedia($image_Category_5)
            ->preservingOriginal()
            ->toMediaCollection('categories');
        $Category_6 = Category::find(6);
        $Category_6
            ->addMedia($image_Category_6)
            ->preservingOriginal()
            ->toMediaCollection('categories');
        $Category_7 = Category::find(7);
        $Category_7
            ->addMedia($image_Category_7)
            ->preservingOriginal()
            ->toMediaCollection('categories');
        $Category_8 = Category::find(8);
        $Category_8
            ->addMedia($image_Category_8)
            ->preservingOriginal()
            ->toMediaCollection('categories');
        $Category_9 = Category::find(9);
        $Category_9
            ->addMedia($image_Category_9)
            ->preservingOriginal()
            ->toMediaCollection('categories');

        $image_Restaurant_1 = storage_path('images\Curbside Delivery.png');
        $image_Restaurant_2 = storage_path('images\Dragon Palace.jpg');
        $image_Restaurant_3 = storage_path('images\Hot Meal.jpg');
        $image_Restaurant_4 = storage_path('images\Lazeez Food.avif');
        $image_Restaurant_5 = storage_path('images\Soul and vibe.jpeg');
        $image_Restaurant_6 = storage_path('images\SubWay.jpg');
        $image_Restaurant_7 = storage_path('images\Versailles .jpg');
        $image_Restaurant_8 = storage_path('images\White swan.jpg');
        $Restaurant_1 = Restaurant::find(1);
        $Restaurant_1
            ->addMedia($image_Restaurant_1)
            ->preservingOriginal()
            ->toMediaCollection('restaurants');
        $Restaurant_2 = Restaurant::find(2);
        $Restaurant_2
            ->addMedia($image_Restaurant_2)
            ->preservingOriginal()
            ->toMediaCollection('restaurants');
        $Restaurant_3 = Restaurant::find(3);
        $Restaurant_3
            ->addMedia($image_Restaurant_3)
            ->preservingOriginal()
            ->toMediaCollection('restaurants');
        $Restaurant_4 = Restaurant::find(4);
        $Restaurant_4
            ->addMedia($image_Restaurant_4)
            ->preservingOriginal()
            ->toMediaCollection('restaurants');
        $Restaurant_5 = Restaurant::find(5);
        $Restaurant_5
            ->addMedia($image_Restaurant_5)
            ->preservingOriginal()
            ->toMediaCollection('restaurants');
        $Restaurant_6 = Restaurant::find(6);
        $Restaurant_6
            ->addMedia($image_Restaurant_6)
            ->preservingOriginal()
            ->toMediaCollection('restaurants');
        $Restaurant_7 = Restaurant::find(7);
        $Restaurant_7
            ->addMedia($image_Restaurant_7)
            ->preservingOriginal()
            ->toMediaCollection('restaurants');
        $Restaurant_8 = Restaurant::find(8);
        $Restaurant_8
            ->addMedia($image_Restaurant_8)
            ->preservingOriginal()
            ->toMediaCollection('restaurants');
        $image_meal_1 = storage_path('images\meal_1.jpg');
        $image_meal_2 = storage_path('images\meal_2.jpg');
        $image_meal_4 = storage_path('images\meal_3.jpg');
        $image_meal_3 = storage_path('images\meal_4.jpg');
        $image_meal_5 = storage_path('images\meal_5.jpg');
        $image_meal_6 = storage_path('images\meal_6.jpg');
        $image_meal_7 = storage_path('images\meal_7.jpg');
        $image_meal_8 = storage_path('images\meal_8.png');
        $image_meal_9 = storage_path('images\meal_9.png');
        $image_meal_10 = storage_path('images\meal_10.png');
        $image_meal_11 = storage_path('images\meal_11.png');
        $image_meal_12 = storage_path('images\meal_12.png');
        $image_meal_13 = storage_path('images\meal_13.png');
        $meal_1 = Meal::find(1);
        $meal_1
            ->addMedia($image_meal_1)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_2 = Meal::find(2);
        $meal_2
            ->addMedia($image_meal_2)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_3 = Meal::find(3);
        $meal_3
            ->addMedia($image_meal_3)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_4 = Meal::find(4);
        $meal_4
            ->addMedia($image_meal_4)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_5 = Meal::find(5);
        $meal_5
            ->addMedia($image_meal_5)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_6 = Meal::find(6);
        $meal_6
            ->addMedia($image_meal_6)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_7 = Meal::find(7);
        $meal_7
            ->addMedia($image_meal_7)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_8 = Meal::find(8);
        $meal_8
            ->addMedia($image_meal_8)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_9 = Meal::find(9);
        $meal_9
            ->addMedia($image_meal_9)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_10 = Meal::find(10);
        $meal_10
            ->addMedia($image_meal_10)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_11 = Meal::find(11);
        $meal_11
            ->addMedia($image_meal_11)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_12 = Meal::find(12);
        $meal_12
            ->addMedia($image_meal_12)
            ->preservingOriginal()
            ->toMediaCollection('meals');
        $meal_13 = Meal::find(13);
        $meal_13
            ->addMedia($image_meal_13)
            ->preservingOriginal()
            ->toMediaCollection('meals');
    }
}
