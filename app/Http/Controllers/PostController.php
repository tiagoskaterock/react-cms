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
    public function Allposts(): Collection
    {
        return Post::all();
    }

    public function viewPost($id)
    {
        try {
            $post = Post::with('category')->findOrFail($id); // Inclui a categoria nos dados
            return response()->json($post, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Post não encontrado.'], 404);
        }
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

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'body' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            // 'banner' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Valida a imagem
        ]);

        try {
            $post = Post::create($validated);

            return response()->json([
                'message' => 'Post criado com sucesso!',
                'post' => $post,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao criar post: ' . $e->getMessage(),
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
