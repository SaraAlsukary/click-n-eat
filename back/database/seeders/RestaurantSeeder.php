<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $name = ['Curbside Delivery', 'Dragon Palace', 'Hot Meal', 'Lazeez Food', 'Soul and vibe', 'SubWay', 'Versailles ', 'White swan'];
        for ($i = 0; $i <= 7; $i++) {
            Restaurant::create([
                'name' => $name[$i],
                'address' => 'syria , aleppo',
                'description' => 'It is an ideal destination for lovers of authentic oriental cuisine, as it offers a diverse menu of traditional dishes prepared with fresh ingredients. It is characterized by its warm and intimate atmosphere, with a décor inspired by the Arab heritage. The restaurant provides excellent service that guarantees an unforgettable dining experience.',
                'description_ar' => 'هو وجهة مثالية لعشاق المأكولات الشرقية الأصيلة، حيث يقدم قائمة متنوعة من الأطباق التقليدية المحضرة بمكونات طازجة. يتميز بأجوائه الدافئة والحميمة، مع ديكور مستوحى من التراث العربي. يقدم المطعم خدمة ممتازة تضمن تجربة تناول طعام لا تُنسى.'
            ]);
        }
    }
}
