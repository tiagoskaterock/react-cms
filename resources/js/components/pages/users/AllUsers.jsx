import React, { useState, useEffect } from "react";
import PageNavigation from "../../navbar/PageNavigation";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import Breadcrumb from "../../navbar/Breadcrumb";
import BreadcrumbActive from "../../navbar/BreadcrumbActive";
import Table from "../../table/Table";
import BtnCreate from "../../buttons/BtnCreate";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/allUsers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
        setLoading(false);
      });
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div className="container-fluid">

      <PageNavigation>

        <PageHeading title="Usuários" />

        <Breadcrumbs>
          <Breadcrumb page="dashboard" title="Início" />
          <BreadcrumbActive title="Usuários" />
        </Breadcrumbs>

      </PageNavigation>

      <BtnCreate title="Novo Usuário" page="newUser" />

      {/* Mostrar mensagem de carregamento */}
      {loading ? (
        <p>Carregando usuários...</p>
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
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>
                    <button
                      title={"Visualizar usuário " + user.name}
                      className="btn btn-info btn-sm mr-1"
                    // onClick={() => {
                    //     setSelecteduserId(user.id); // Define o ID da user selecionada
                    //     setCurrentPage("viewuser"); // Altera a página para a de edição
                    // }}
                    >
                      <i className="fas fa-eye"></i>
                    </button>

                    <button
                      title={"Editar usuário " + user.name}
                      className="btn btn-sm btn-primary mr-1"
                    // onClick={() => {
                    //     setSelecteduserId(user.id); // Define o ID da user selecionada
                    //     setCurrentPage("edituser"); // Altera a página para a de edição
                    // }}
                    >
                      <i className="fas fa-edit"></i>
                    </button>

                    <button
                      title={"Excluir usuário " + user.name}
                      className="btn btn-danger btn-sm"
                    // onClick={() => deleteuser(post.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Nenhum usuário encontrado.</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
}
