import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading.jsx";
import Breadcrumbs from "../../navbar/Breadcrumbs.jsx";
import { usePage } from "../../../contexts/PageContent.js";
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import PageNavigation from "../../navbar/PageNavigation.jsx";

export default function EditCategory() {
    const { selectedCategoryId, setCurrentPage } = usePage(); // Obtém o ID da categoria do contexto
    const [categoryName, setCategoryName] = useState(""); // Estado para o nome da categoria
    const [loading, setLoading] = useState(false); // Estado para indicar carregamento
    const [message, setMessage] = useState(""); // Estado para mensagens de sucesso ou erro

    // Atualiza a página atual e busca a categoria ao montar
    useEffect(() => {
        setCurrentPage("editCategory");
        if (selectedCategoryId) {
            fetchCategory();
        }
    }, [selectedCategoryId]);

    // Função para pegar o token CSRF
    const getCSRFToken = () => {
        const token = document.head.querySelector('meta[name="csrf-token"]');
        return token ? token.content : "";
    };

    // Função para buscar os dados da categoria
    const fetchCategory = async () => {
        setLoading(true);
        setMessage(""); // Limpa mensagens anteriores
        try { 
            const response = await fetch(`/api/EditCategory/${selectedCategoryId}`);
            if (!response.ok) {
                throw new Error("Erro ao buscar categoria. Verifique o ID e tente novamente.");
            }
            const data = await response.json();
            setCategoryName(data.name); // Define o nome da categoria
        } catch (error) {
            setMessage(error.message || "Erro desconhecido ao buscar categoria.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Função para lidar com o envio do formulário de edição
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        setLoading(true);
        setMessage(""); // Limpa mensagens anteriores

        try {
            const response = await fetch(`/api/updateCategory/${selectedCategoryId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": getCSRFToken(),
                },
                body: JSON.stringify({ name: categoryName }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Erro ao atualizar categoria.");
            }

            const data = await response.json();
            setMessage(`Categoria "${data.category.name}" atualizada com sucesso!`);
        } catch (error) {
            setMessage(error.message || "Erro ao atualizar categoria. Tente novamente.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid">
            <PageNavigation>
                <PageHeading title="Editar Categoria" />
                <Breadcrumbs>
                    <Breadcrumb page="dashboard" title="Início" />
                    <Breadcrumb page="allCategories" title="Categorias" />
                    <BreadcrumbActive title="Editar" />
                </Breadcrumbs>
            </PageNavigation>

            {/* Mensagem de feedback */}
            {message && <div className="alert alert-info">{message}</div>}

            {/* Formulário de edição */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="categoryName">Nome da Categoria</label>
                    <input
                        type="text"
                        id="categoryName"
                        className="form-control"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="Digite o novo nome da categoria"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || !categoryName.trim()}
                >
                    {loading ? "Atualizando..." : "Atualizar Categoria"}
                </button>
            </form>
        </div>
    );
}
