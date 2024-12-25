<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence, // Gera um título para o post
            'body' => $this->faker->paragraph, // Gera o conteúdo do post
            'category_id' => Category::inRandomOrder()->first()->id, // Gera um category_id aleatório a partir das categorias existentes
        ];
    }
}
