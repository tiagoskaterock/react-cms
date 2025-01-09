import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import { usePage } from "../../../contexts/PageContent.js";
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import PageNavigation from "../../navbar/PageNavigation.jsx";
import PostForm from "./PostForm.jsx";

export default function NewPost() {
  const [categories, setCategories] = useState([]); // Estado para armazenar categorias
  const [postName, setPostName] = useState("");
  const [postBody, setPostBody] = useState("");
  const [categoryId, setCategoryId] = useState(""); // Categoria vinculada ao post
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { setCurrentPage } = usePage();

  const getCSRFToken = () => {
    return document.head.querySelector('meta[name="csrf-token"]').content;
  };

  // Função para buscar categorias da API
  useEffect(() => {
    setLoading(true); // Ativa o carregamento antes de buscar
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": getCSRFToken(),
      },
      body: JSON.stringify({
        name: postName,
        body: postBody,
        category_id: categoryId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Erro desconhecido");
        });
      })
      .then((data) => {
        setMessage(`Post "${data.post.name}" criado com sucesso!`);
        setPostName("");
        setPostBody("");
        setCategoryId("");
      })
      .catch((error) => {
        setMessage(error.message || "Erro ao criar post. Tente novamente.");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container-fluid">
      <PageNavigation>
        <PageHeading title="Novo Post" />

        <Breadcrumbs>
          <Breadcrumb page="dashboard" title="Início" />
          <Breadcrumb page="allPosts" title="Posts" />
          <BreadcrumbActive title="Novo" />
        </Breadcrumbs>
      </PageNavigation>

      {message && <div className="alert alert-info">{message}</div>}

      <PostForm 
        handleSubmit={handleSubmit}
        setPostName={setPostName}
        setPostBody={setPostBody}
        setCategoryId={setCategoryId}
        postName={postName}
        postBody={postBody}
        categoryId={categoryId}
        categories={categories}
        loading={loading}
      />
    </div>
  );
}
