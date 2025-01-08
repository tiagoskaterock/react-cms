<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;

class CategoryController extends Controller
{
    /**
     * get all categories
     * @return \Illuminate\Database\Eloquent\Collection
     * # tested
     */
    public function allCategories(): Collection
    {
        return Category::all();
    }

    /**
     * Retorna o total de categorias
     * @return int
     * #tested
     */
    public function totalCategories(): int
    {
        return Category::count();
    }

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

    /**
     * Retorna os dados de uma categoria específica.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function editCategory($id)
    {
        try {
            $category = Category::findOrFail($id); // Busca a categoria pelo ID ou lança um erro
            return response()->json($category, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Categoria não encontrada.'], 404);
        }
    }

    public function updateCategory(Request $request, $id)
    {
        try {
            // Validação dos dados recebidos
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
            ]);

            // Busca a categoria pelo ID
            $category = Category::findOrFail($id);

            // Atualiza o nome da categoria
            $category->name = $validatedData['name'];
            $category->save();

            // Retorna uma resposta de sucesso
            return response()->json([
                'message' => 'Categoria atualizada com sucesso!',
                'category' => $category
            ], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Retorna erro de validação
            return response()->json([
                'message' => 'Erro de validação.',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            // Retorna erro genérico
            return response()->json([
                'message' => 'Erro ao atualizar a categoria. Verifique o ID e tente novamente.',
            ], 500);
        }
    }

    public function viewCategory($id)
    {
        try {
            $category = Category::findOrFail($id); // Busca a categoria pelo ID ou lança um erro
            return response()->json($category, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Categoria não encontrada.'], 404);
        }
    }

    public function deleteCategory($id)
    {
        try {
            $category = Category::find($id);

            if (!$category) {
                return response()->json(['message' => 'Categoria não encontrada'], 404);
            }

            $category->delete();

            return response()->json(['message' => 'Categoria excluída com sucesso']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao excluir categoria', 'error' => $e->getMessage()], 500);
        }
    }
}
