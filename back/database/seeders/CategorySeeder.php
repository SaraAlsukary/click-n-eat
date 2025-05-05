<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $name = ['salad', 'Pizza', 'nuggets', 'noodles', 'Ice Cream', 'Hot Dog', 'donut', 'burger', 'drink'];
        $name_ar = ['سلطة', 'بيتزا', 'ناغيت', 'معكرونة', 'بوظة', 'صندويشات', 'دونات', 'برغر', 'مشروبات'];
        for ($i = 0; $i <= 8; $i++) {
            Category::create([
                'name' => $name[$i],
                'name_ar' => $name_ar[$i]
            ]);
        }
    }
}
