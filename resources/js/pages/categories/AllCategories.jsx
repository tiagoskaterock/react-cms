import React, { useState, useEffect } from "react";
import PageHeading from "../../components/content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import { usePage } from "../../../contexts/PageContent.js"; // Importe o hook
import PageNavigation from "../../navbar/PageNavigation.jsx";
import BtnCreate from "../../buttons/BtnCreate.jsx";
import Table from "../../table/Table.jsx";
import BtnView from "../../buttons/BtnView.jsx";
import BtnEdit from "../../buttons/BtnEdit.jsx";
import BtnDelete from "../../buttons/BtnDelete.jsx";

export default function AllCategories() {

  const { setSelectedCategoryId, setCurrentPage } = usePage();
  const [categories, setCategories] = useState([]); // Estado para armazenar categorias
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento

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

  const deleteCategory = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta categoria?")) {
      // Obter o CSRF token do meta tag
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");

      fetch(`/api/deleteCategory/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken, // Inclui o token CSRF
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao excluir categoria");
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
          // Atualiza a lista de categorias após a exclusão
          setCategories(categories.filter((category) => category.id !== id));
        })
        .catch((error) => {
          console.error("Erro:", error);
          alert("Não foi possível excluir a categoria.");
        });
    }
  };

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
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>

                    <BtnView
                      title={"Visualizar categoria " + category.name}
                      onClick={() => {
                        setSelectedCategoryId(category.id); // Define o ID da categoria selecionada
                        setCurrentPage("viewCategory"); // Altera a página para a de edição
                      }}
                    />

                    <BtnEdit
                      title={"Editar categoria " + category.name}
                      onClick={() => {
                        setSelectedCategoryId(category.id); // Define o ID da categoria selecionada
                        setCurrentPage("editCategory"); // Altera a página para a de edição
                      }}
                    />

                    <BtnDelete
                      title={"Excluir categoria " + category.name}
                      onClick={() => deleteCategory(category.id)}
                    />

                  </td>
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
