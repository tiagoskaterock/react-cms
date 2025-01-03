import React, { useState, useEffect } from "react";
import PageNavigation from "../../navbar/PageNavigation";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import Breadcrumb from "../../navbar/Breadcrumb";
import BreadcrumbActive from "../../navbar/BreadcrumbActive";
import Table from "../../table/Table";
import BtnCreate from "../../buttons/BtnCreate";

export default function AllPosts() {
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
                    <button
                      title={"Visualizar post " + post.name}
                      className="btn btn-info btn-sm mr-1"
                    // onClick={() => {
                    //     setSelectedpostId(post.id); // Define o ID da post selecionada
                    //     setCurrentPage("viewpost"); // Altera a página para a de edição
                    // }}
                    >
                      <i className="fas fa-eye"></i>
                    </button>

                    <button
                      title={"Editar post " + post.name}
                      className="btn btn-sm btn-primary mr-1"
                    // onClick={() => {
                    //     setSelectedpostId(post.id); // Define o ID da post selecionada
                    //     setCurrentPage("editpost"); // Altera a página para a de edição
                    // }}
                    >
                      <i className="fas fa-edit"></i>
                    </button>

                    <button
                      title={"Excluir post " + post.name}
                      className="btn btn-danger btn-sm"
                    // onClick={() => deletepost(post.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
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
