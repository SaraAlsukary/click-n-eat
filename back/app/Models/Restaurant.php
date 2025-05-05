<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Restaurant extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\RestaurantFactory> */
    use HasFactory, InteractsWithMedia;

    public function meals()
    {
        return $this->belongsToMany(
            Restaurant::class,
            'restaurant_meals',
            'restaurant_id',
            'meal_id'
        )->withPivot(['price', 'restaurant_id']);
    }
    public function category()
    {
        return $this->belongsToMany(
            Category::class,
            'restaurant_categories',
            'restaurant_id',
            'category_id'
        )->withPivot('id');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('restaurants')->singleFile();
    }
}
