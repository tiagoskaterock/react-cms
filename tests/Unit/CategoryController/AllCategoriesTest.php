<?php

namespace Tests\Unit\CategoryController;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;
use App\Models\Category;
use App\Http\Controllers\CategoryController;

class AllCategoriesTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function it_should_return_all_categories()
    {
        // Arrange: Crie categorias no banco de dados de teste.
        Category::factory()->count(3)->create();

        // Act: Chame o método ou endpoint que usa o método allCategories.
        $response = $this->getJson(route('allCategories')); // Substitua pela rota correta.

        // Assert: Verifique se as categorias são retornadas.
        $response->assertStatus(200);
        $response->assertJsonCount(3); // Verifica se 3 categorias foram retornadas.
    }

    #[Test]
    public function it_returns_the_correct_total_of_categories()
    {
        // Arrange: Cria algumas categorias
        Category::factory()->count(5)->create();

        // Act: Chama o método totalCategories()
        $category = new CategoryController();
        $totalCategorys = $category->totalCategories();

        // Assert: Verifica se o resultado é igual ao número de categorias criadas
        $this->assertEquals(5, $totalCategorys);
    }
}
