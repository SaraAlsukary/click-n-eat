<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class RestaurantCategoryMeal extends Model
{
    /** @use HasFactory<\Database\Factories\RestaurantCategoryMealFactory> */
    use HasFactory;

    public function order(): BelongsToMany
    {
        return $this->belongsToMany(
            Order::class,
            'order_items',
            'restaurant_category_meal_id',
            'order_id',
        );
    }
    public function meal()
    {
        return $this->belongsTo(Meal::class, 'meal_id');
    }
}
