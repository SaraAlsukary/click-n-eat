<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Order extends Model
{
    /** @use HasFactory<\Database\Factories\OrderFactory> */
    use HasFactory;
    protected $fillable = [
        'type',
        'phone',
        'address',
        'bankNumber',
        'bankPassword',
        'firstName',
        'lastName',
        'priceTotal',
        'status',
        'user_id'
    ];
    public function items(): BelongsToMany
    {
        return $this->belongsToMany(
            RestaurantCategoryMeal::class,
            'order_items',
            'order_id',
            'restaurant_category_meal_id'
        );
    }
}
