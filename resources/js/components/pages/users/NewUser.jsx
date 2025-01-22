import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import { usePage } from "../../../contexts/PageContent.js";
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import PageNavigation from "../../navbar/PageNavigation.jsx";

export default function NewUser(props) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const { setCurrentPage } = usePage();

    const getCSRFToken = () => {
        return document.head.querySelector('meta[name="csrf-token"]').content;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": getCSRFToken(),
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                password: userPassword,
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
                setMessage(`Usuário "${data.post.name}" criado com sucesso!`);
                setuserName("");
                setuserEmail("");
                setCategoryId("");
            })
            .catch((error) => {
                setMessage(
                    error.message || "Erro ao criar usuário. Tente novamente."
                );
                console.error(error);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="container-fluid">
            <PageNavigation>
                <PageHeading title="Novo Usuário" />

                <Breadcrumbs>
                    <Breadcrumb page="dashboard" title="Início" />
                    <Breadcrumb page="allUsers" title="Users" />
                    <BreadcrumbActive title="Novo" />
                </Breadcrumbs>
            </PageNavigation>

            {message && <div className="alert alert-info">{message}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Nome</label>
                    <input
                        type="text"
                        id="userName"
                        className="form-control"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Digite o nome do usuário"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="userEmail">Email</label>
                    <input
                        type="email"
                        id="userEmail"
                        className="form-control"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Digite o email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="userPassword">Email</label>
                    <input
                        type="password"
                        id="userPassword"
                        className="form-control"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        placeholder="Digite a senha"
                        required
                    />
                </div>


                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || !userName.trim()}
                >
                    {props.loading ? "Carregando..." : "Salvar Usuário"}
                </button>
            </form>
        </div>
    );
}
