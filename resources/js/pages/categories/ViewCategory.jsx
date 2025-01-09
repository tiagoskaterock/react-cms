import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading.jsx";
import Breadcrumbs from "../../navbar/Breadcrumbs.jsx";
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import PageNavigation from "../../navbar/PageNavigation.jsx";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { usePage } from "../../../contexts/PageContent.js"; // Importe o hook

export default function ViewCategory() {
    const { selectedCategoryId, setSelectedCategoryId, setCurrentPage } = usePage();
    // const { selectedCategoryId, setCurrentPage } = usePage(); // Obtém o ID da categoria do contexto
    const [category, setCategory] = useState({}); // Estado para a categoria (ajustado para um objeto)
    const [loading, setLoading] = useState(false); // Estado para indicar carregamento
    const [message, setMessage] = useState(""); // Estado para mensagens de sucesso ou erro

    // Atualiza a página atual e busca a categoria ao montar
    useEffect(() => {
        setCurrentPage("viewCategory");
        if (selectedCategoryId) {
            fetchCategory();
        }
    }, [selectedCategoryId]);

    // Função para buscar os dados da categoria
    const fetchCategory = async () => {
        setLoading(true);
        setMessage(""); // Limpa mensagens anteriores
        try {
            const response = await fetch(`/api/viewCategory/${selectedCategoryId}`);
            if (!response.ok) {
                throw new Error("Erro ao buscar categoria. Verifique o ID e tente novamente.");
            }
            const data = await response.json();
            setCategory(data); // Salva os dados da categoria no estado
        } catch (error) {
            setMessage(error.message || "Erro desconhecido ao buscar categoria.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return "Carregando...";
        try {
            return format(new Date(dateString), "dd 'de' MMMM 'de' yyyy, HH:mm", { locale: ptBR });
        } catch (error) {
            console.error("Erro ao formatar a data:", error);
            return dateString;
        }
    };

    return (
        <div className="container-fluid">
            <PageNavigation>
                <PageHeading title="Categoria" />
                <Breadcrumbs>
                    <Breadcrumb page="dashboard" title="Início" />
                    <Breadcrumb page="allCategories" title="Categorias" />
                    <BreadcrumbActive title={category.name || "Carregando..."} />
                </Breadcrumbs>
            </PageNavigation>

            <div>
                <div>
                    <label className="mr-1">Nome: </label>
                    <span>{category.name || "Carregando..."}</span>
                </div>

                <div>
                    <label className="mr-1">Criado: </label>
                    <span>{formatDate(category.created_at) || "Carregando..."}</span>
                </div>

                <div>
                    <label className="mr-1">Atualizado: </label>
                    <span>{formatDate(category.updated_at) || "Carregando..."}</span>
                </div>

                <div>
                    <button
                        title={"Editar categoria " + category.name}
                        className="btn btn-primary mr-1"
                        onClick={() => {
                            setSelectedCategoryId(category.id); // Define o ID da categoria selecionada
                            setCurrentPage("editCategory"); // Altera a página para a de edição
                        }}
                    >
                        <i className="fas fa-edit"></i>
                        { ' Editar' }
                    </button>
                </div>
            </div>

            {loading && <p>Carregando...</p>}
            {message && <p>{message}</p>}
        </div>
    );
}
