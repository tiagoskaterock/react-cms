<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Retorna todos os posts
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function Allposts(): Collection
    {
        return Post::orderBy('created_at', 'desc')->get();
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
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'body' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            // 'banner' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        
        if ($validator->fails()) {
            // Retorna os erros de validação no formato JSON
            return response()->json([
                'message' => 'Erro de validação nos dados fornecidos.' . $validator->errors(),
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $post = new Post();
            $post->fill($request->all());

            // Verifica e salva o banner, se fornecido
            if ($request->hasFile('banner')) {
                $post->banner = $request->file('banner')->store('uploads/posts');
            }

            $post->save();

            return response()->json([
                'message' => 'Post criado com sucesso!',
                'post' => $post,
            ], 201);
        } catch (\Exception $e) {
            // Retorna erro genérico
            return response()->json([
                'message' => 'Erro ao criar o post.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
