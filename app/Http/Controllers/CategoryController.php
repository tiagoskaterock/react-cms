<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Armazena uma nova categoria.
     * @param Request $request
     */
    public function store(Request $request)
    {
        try {
            // Validação dos dados
            $validated = $request->validate([
                'name' => 'required|string|max:255|unique:categories,name',
            ]);

            // Criação da categoria
            $category = Category::create([
                'name' => $validated['name'],
            ]);

            // Retornar a resposta com sucesso
            return response()->json([
                'message' => 'Categoria criada com sucesso!',
                'category' => $category,
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Caso a validação falhe
            $errors = $e->errors(); // Obtém os erros de validação

            // Se houver um erro no campo 'name', exibe o primeiro erro
            $firstError = isset($errors['name']) ? $errors['name'][0] : 'Erro desconhecido';

            // Retorne a resposta com o primeiro erro de validação
            return response()->json([
                'error' => 'Erro de validação',
                'message' => $firstError, // Mensagem específica sobre o erro de validação
            ], 422); // 422 Unprocessable Entity para erros de validação

        } catch (\Exception $e) {
            // Caso ocorra um erro inesperado
            return response()->json([
                'error' => 'Erro inesperado',
                'message' => $e->getMessage(), // Exibe a mensagem do erro específico
                'details' => $e->getTraceAsString(), // Adiciona detalhes para o desenvolvedor
            ], 500); // 500 Internal Server Error
        }
    }
}
