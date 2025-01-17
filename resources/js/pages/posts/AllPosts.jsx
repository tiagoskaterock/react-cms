import React, { useState, useEffect } from "react";
import PageNavigation from "../../navbar/PageNavigation";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import Breadcrumb from "../../navbar/Breadcrumb";
import BreadcrumbActive from "../../navbar/BreadcrumbActive";
import Table from "../../table/Table";
import BtnCreate from "../../buttons/BtnCreate";
import BtnView from "../../buttons/BtnView";
import BtnEdit from "../../buttons/BtnEdit";
import BtnDelete from "../../buttons/BtnDelete";
import { usePage } from "../../../contexts/PageContent.js"; // Importe o hook

export default function AllPosts() {
  const { setSelectedPostId, setCurrentPage } = usePage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
        setLoading(false);
      });
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div className="container-fluid">

      <PageNavigation>

        <PageHeading title="Posts" />

        <Breadcrumbs>
          <Breadcrumb page="dashboard" title="Início" />
          <BreadcrumbActive title="Posts" />
        </Breadcrumbs>

      </PageNavigation>

      <BtnCreate title="Novo Post" page="newPost" />
      <BtnCreate title="Novo Post" page="newPost" />

      {/* Mostrar mensagem de carregamento */}
      {loading ? (
        <p>Carregando posts...</p>
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
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <tr key={post.id}>
                  <td>{index + 1}</td>
                  <td>{post.name}</td>
                  <td>

                    <BtnView
                      title={"Visualizar post teste" + post.name}
                      onClick={() => {
                        setSelectedPostId(post.id);
                        setCurrentPage("viewPost");
                      }}
                    />

                    <BtnEdit
                      title={"Editar post " + post.title}
                    // onClick={() => {
                    //   setSelectedCategoryId(category.id); // Define o ID da post selecionada
                    //   setCurrentPage("editCategory"); // Altera a página para a de edição
                    // }}
                    />

                    <BtnDelete
                      title={"Excluir post " + post.title}
                    // onClick={() => deleteCategory(category.id)}
                    />

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Nenhum post encontrado.</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
}
