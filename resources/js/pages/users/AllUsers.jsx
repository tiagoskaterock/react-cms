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
                  <BtnView
                      title={"Visualizar usuário" + user.name}
                    // onClick={() => {
                    //     setSelectedpostId(user.id); // Define o ID da usuárioselecionada
                    //     setCurrentPage("viewpost"); // Altera a página para a de edição
                    // }}
                    />

                    <BtnEdit
                      title={"Editar usuário" + user.name}
                      // onClick={() => {
                      //   setSelectedCategoryId(category.id); // Define o ID da usuárioselecionada
                      //   setCurrentPage("editCategory"); // Altera a página para a de edição
                      // }}
                    />

                    <BtnDelete
                      title={"Excluir usuário" + user.name}
                      // onClick={() => deleteCategory(category.id)}
                    />
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
