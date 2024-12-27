<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Retorna todos os posts
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function Allposts() : Collection
    {
        return Post::all();
    }
    
    /**
     * retorna o total de posts
     * @param \Illuminate\Http\Request $request
     * @return int
     */
    public function totalPosts(Request $request)
    {
        return Post::count();
    }    
}
