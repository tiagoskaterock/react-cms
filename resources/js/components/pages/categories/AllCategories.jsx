import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import { usePage } from "../../../contexts/PageContent.js"; // Importe o hook
import PageNavigation from "../../navbar/PageNavigation.jsx";
import BtnCreate from "../../buttons/BtnCreate.jsx";
import Table from "../../table/Table.jsx";

// /home/tiago/react-cms/resources/js/components/pages/categories/AllCategories.jsx

export default function AllCategories() {
    const [categories, setCategories] = useState([]); // Estado para armazenar categorias
    const [loading, setLoading] = useState(true); // Estado para indicar carregamento
    const { setCurrentPage } = usePage(); // Obtém a função para alterar o estado global

    // Função para buscar categorias da API
    useEffect(() => {
        fetch("/api/AllCategories")
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

            <PageNavigation>

                <PageHeading title="Categorias" />

                <Breadcrumbs>
                    <Breadcrumb page="dashboard" title="Início" />                    
                    <BreadcrumbActive title="Categorias" />
                </Breadcrumbs>

            </PageNavigation>

            <BtnCreate title="Nova Categoria" page="newCategory" />

            {/* Mostrar mensagem de carregamento */}
            {loading ? (
                <p>Carregando categorias...</p>
            ) : (
                <Table>
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
                </Table>
            )}
        </div>
    );
}
