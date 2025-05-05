<?php

namespace Database\Seeders;

use App\Models\Category;
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
    }
}
