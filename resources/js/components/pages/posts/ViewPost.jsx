import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading.jsx";
import Breadcrumbs from "../../navbar/Breadcrumbs.jsx";
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import PageNavigation from "../../navbar/PageNavigation.jsx";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { usePage } from "../../../contexts/PageContent.js"; // Importe o hook

export default function ViewPost() {
  const { selectedPostId, setSelectedPostId, setCurrentPage } = usePage(); // Atualizado para Post
  const [post, setPost] = useState({}); // Estado para o post
  const [loading, setLoading] = useState(false); // Estado para indicar carregamento
  const [message, setMessage] = useState(""); // Estado para mensagens de sucesso ou erro

  // Atualiza a página atual e busca o post ao montar
  useEffect(() => {
    setCurrentPage("viewPost");
    if (selectedPostId) {
      fetchPost();
    }
  }, [selectedPostId]);

  // Função para buscar os dados do post
  const fetchPost = async () => {
    setLoading(true);
    setMessage(""); // Limpa mensagens anteriores
    try {
      const response = await fetch(`/api/viewPost/${selectedPostId}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar post. Verifique o ID e tente novamente.");
      }
      const data = await response.json();
      setPost(data); // Salva os dados do post no estado
    } catch (error) {
      setMessage(error.message || "Erro desconhecido ao buscar post.");
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
        <PageHeading title="Post" />
        <Breadcrumbs>
          <Breadcrumb page="dashboard" title="Início" />
          <Breadcrumb page="allPosts" title="Posts" />
          <BreadcrumbActive title={post.name || "Carregando..."} />
        </Breadcrumbs>
      </PageNavigation>

      <div>
        <div>
          <label className="mr-1">Título: </label>
          <span>{post.name || "Carregando..."}</span>
        </div>

        <div>
          <label className="mr-1">Conteúdo: </label>
          <span>{post.body || "Carregando..."}</span>
        </div>

        <div>
          <label className="mr-1">Categoria: </label>
          <span>{post.category?.name || "Carregando..."}</span>
        </div>

        <div>
          <label className="mr-1">Criado: </label>
          <span>{formatDate(post.created_at) || "Carregando..."}</span>
        </div>

        <div>
          <label className="mr-1">Atualizado: </label>
          <span>{formatDate(post.updated_at) || "Carregando..."}</span>
        </div>

        <div>
          <button
            title={"Editar post " + post.name}
            className="btn btn-primary mr-1"
            // onClick={() => {
            //   setSelectedPostId(post.id); // Define o ID do post selecionado
            //   setCurrentPage("editPost"); // Altera a página para a de edição
            // }}
          >
            <i className="fas fa-edit"></i>
            {' Editar'}
          </button>
        </div>
      </div>

      {loading && <p>Carregando...</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
