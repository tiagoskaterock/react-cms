<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     * # tested
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(), // Gera uma palavra aleatória
        ];
    }
}
