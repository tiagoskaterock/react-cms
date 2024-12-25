<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('body');
            
            // Adiciona a coluna category_id
            $table->unsignedBigInteger('category_id'); // Tipo de dado para FK (referencia o id da tabela categories)

            // Define a chave estrangeira (FK)
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade'); // Exclui posts quando a categoria for excluída
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};

