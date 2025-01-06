<?php

namespace Tests\Unit\CategoryFactory;

use Tests\TestCase;
use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DefinitionTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_creates_a_valid_category_instance()
    {
        // Arrange: Gere uma instância de categoria usando a factory
        $category = Category::factory()->make();

        // Assert: Verifique se a instância é válida
        $this->assertInstanceOf(Category::class, $category);
        $this->assertNotEmpty($category->name); // Garante que 'name' não está vazio
    }

    /** @test */
    public function it_persists_a_category_instance_in_the_database()
    {
        // Act: Crie e salve uma categoria no banco de dados
        $category = Category::factory()->create();

        // Assert: Verifique se a categoria foi salva corretamente
        $this->assertDatabaseHas('categories', [
            'id' => $category->id,
            'name' => $category->name,
        ]);
    }

    /** @test */
    public function it_creates_multiple_categories()
    {
        // Act: Crie múltiplas categorias
        $categories = Category::factory()->count(5)->create();

        // Assert: Verifique se as categorias foram criadas
        $this->assertCount(5, $categories);
        $this->assertDatabaseCount('categories', 5); // Garante que 5 categorias estão no banco
    }

    /** @test */
    public function it_generates_unique_names_for_categories()
    {
        // Act: Gere duas categorias
        $categories = Category::factory()->count(2)->make();

        // Assert: Verifique se os nomes são diferentes
        $this->assertNotEquals($categories[0]->name, $categories[1]->name);
    }
}
