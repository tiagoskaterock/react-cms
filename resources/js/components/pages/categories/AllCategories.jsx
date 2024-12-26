import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import { usePage } from "../../../contexts/PageContent.js"; // Importe o hook

// /home/tiago/react-cms/resources/js/components/pages/categories/AllCategories.jsx

export default function AllCategories() {
    const [categories, setCategories] = useState([]); // Estado para armazenar categorias
    const [loading, setLoading] = useState(true); // Estado para indicar carregamento
    const { setCurrentPage } = usePage(); // Obtém a função para alterar o estado global

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

            <div className="row">

                <PageHeading title="Categorias" />

                <Breadcrumbs>
                    <li className="breadcrumb-item" title="Início"><a href="#">Início</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Categorias</li>
                </Breadcrumbs>

            </div>            

            <button 
                className="mb-3 btn btn-primary btn-sm" 
                title="Criar nova categoria" 
                onClick={() => setCurrentPage('newCategory')}>
                <i className="fas fa-plus mr-1"></i>
                Nova Categoria
            </button>

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
