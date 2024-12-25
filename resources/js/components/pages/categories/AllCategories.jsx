import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading";

export default function AllCategories() {
    const [categories, setCategories] = useState([]); // Estado para armazenar categorias
    const [loading, setLoading] = useState(true); // Estado para indicar carregamento

    // Função para buscar categorias da API
    useEffect(() => {
        fetch("/api/categories")
            .then((response) => response.json())
            .then((data) => {
                setCategories(data); // Define as categorias no estado
                setLoading(false); // Desativa o carregamento
            })
            .catch((error) => {
                console.error("Erro ao buscar categorias:", error);
                setLoading(false);
            });
    }, []); // Executa apenas uma vez ao montar o componente

    return (
        <div className="container-fluid">
            <PageHeading title="Categorias" />

            {/* Mostrar mensagem de carregamento */}
            {loading ? (
                <p>Carregando categorias...</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length > 0 ? (
                            categories.map((category, index) => (
                                <tr key={category.id}>
                                    <td>{index + 1}</td>
                                    <td>{category.name}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">Nenhuma categoria encontrada.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}
