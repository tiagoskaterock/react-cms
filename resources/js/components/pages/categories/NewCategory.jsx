import React, { useState } from "react";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import { usePage } from "../../../contexts/PageContent.js"; // Importe o hook
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import PageNavigation from "../../navbar/PageNavigation.jsx";

export default function NewCategory() {
    const [categoryName, setCategoryName] = useState(""); // Estado para o nome da nova categoria
    const [loading, setLoading] = useState(false); // Estado para indicar carregamento
    const [message, setMessage] = useState(""); // Estado para mensagem de sucesso ou erro
    const { setCurrentPage } = usePage(); // Obtém a função para alterar o estado global

    // Função para pegar o token CSRF
    const getCSRFToken = () => {
        return document.head.querySelector('meta[name="csrf-token"]').content;
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        setLoading(true);

        // Simula envio para a API
        fetch("/api/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": getCSRFToken(), // Adiciona o token CSRF
            },
            body: JSON.stringify({ name: categoryName }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                // Se a resposta não for OK, verifica se a resposta contém um erro
                return response.json().then((data) => {
                    throw new Error(data.message || "Erro desconhecido");
                });
            })
            .then((data) => {
                // Mensagem de sucesso
                setMessage(`Categoria "${data.category.name}" criada com sucesso!`);
                setCategoryName(""); // Reseta o campo de entrada
            })
            .catch((error) => {
                // Se o erro for de validação, extrai e exibe a mensagem de erro
                if (error.response && error.response.errors) {
                    const validationErrors = error.response.errors;
                    const firstError = validationErrors.name ? validationErrors.name[0] : "Erro desconhecido.";
                    setMessage(`Erro de validação: ${firstError}`);
                } else {
                    // Caso seja outro tipo de erro, exibe a mensagem genérica
                    setMessage(error.message || "Erro ao criar categoria. Tente novamente.");
                }

                console.error(error);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="container-fluid">

            <PageNavigation>
                <PageHeading title="Nova Categoria" />

                <Breadcrumbs>
                    <Breadcrumb page="dashboard" title="Início" />
                    <Breadcrumb page="allCategories" title="Categorias" /> 
                    <BreadcrumbActive title="Nova" />                                       
                </Breadcrumbs>
            </PageNavigation>

            {/* Mensagem de feedback */}
            {message && <div className="alert alert-info">{message}</div>}

            {/* Formulário de criação */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="categoryName">Nome da Categoria</label>
                    <input
                        type="text"
                        id="categoryName"
                        className="form-control"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="Digite o nome da categoria"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || !categoryName.trim()}
                >
                    {loading ? "Criando..." : "Criar Categoria"}
                </button>
            </form>
        </div>
    );
}
