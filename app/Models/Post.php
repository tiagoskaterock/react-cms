<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Importa a trait
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 
        'body',
        'category_id',
        'banner',
    ];

    public function category() : BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
