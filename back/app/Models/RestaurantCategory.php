<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestaurantCategory extends Model
{
    /** @use HasFactory<\Database\Factories\RestaurantCategoryFactory> */
    use HasFactory;

    public function meal()
    {
        return $this->belongsToMany(
            Meal::class,
            'restaurant_category_meals',
            'restaurant_category_id',
            'meal_id'
        )->withPivot(['price', 'id']);
    }
    public function category()
    {
        return $this->belongsTo(
            Category::class,

        );
    }
}
