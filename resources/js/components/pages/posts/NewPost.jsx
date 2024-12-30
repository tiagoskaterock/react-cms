import React, { useState } from "react";
import PageHeading from "../../content/PageHeading";
import Breadcrumbs from "../../navbar/Breadcrumbs";
import { usePage } from "../../../contexts/PageContent.js";
import Breadcrumb from "../../navbar/Breadcrumb.jsx";
import BreadcrumbActive from "../../navbar/BreadcrumbActive.jsx";
import PageNavigation from "../../navbar/PageNavigation.jsx";

export default function NewPost() {
    const [postName, setPostName] = useState("");
    const [postBody, setPostBody] = useState("");
    const [categoryId, setCategoryId] = useState(""); // Categoria vinculada ao post
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const { setCurrentPage } = usePage();

    const getCSRFToken = () => {
        return document.head.querySelector('meta[name="csrf-token"]').content;
    };

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

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="postName">Título do Post</label>
                    <input
                        type="text"
                        id="postName"
                        className="form-control"
                        value={postName}
                        onChange={(e) => setPostName(e.target.value)}
                        placeholder="Digite o título do post"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="postBody">Conteúdo do Post</label>
                    <textarea
                        id="postBody"
                        className="form-control"
                        value={postBody}
                        onChange={(e) => setPostBody(e.target.value)}
                        placeholder="Digite o conteúdo do post"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="categoryId">Categoria</label>
                    <input
                        type="number"
                        id="categoryId"
                        className="form-control"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        placeholder="Digite o ID da categoria"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || !postName.trim() || !postBody.trim() || !categoryId.trim()}
                >
                    {loading ? "Criando..." : "Criar Post"}
                </button>
            </form>
        </div>
    );
}
