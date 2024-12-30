<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Importa a trait

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 
        'body',
        'category_id',
    ];
}
