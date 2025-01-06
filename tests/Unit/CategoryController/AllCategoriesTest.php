<?php

namespace Tests\Unit\CategoryController;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Category;

class AllCategoriesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
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
}
