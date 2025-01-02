import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading";
import MainCard from "./MainCard";
import axios from "axios";

export default function Dashboard() {

    const [totalCategories, setTotalCategories] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    // Total de categorias pela API
    useEffect(() => {
        axios
            .get('/api/totalCategories')
            .then(response => {
                setTotalCategories(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar o total de categorias:", error);
            });
    }, []);

    // Total de posts pela API
    useEffect(() => {
        axios
            .get('/api/totalPosts')
            .then(response => {
                setTotalPosts(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar o total de posts:", error);
            });
    }, []);

    // Total de users pela API
    useEffect(() => {
        axios
            .get('/api/getTotalUsers')
            .then(response => {
                setTotalUsers(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar o total de users:", error);
            });
    }, []);

    return (
        <div className="container-fluid">
            <PageHeading title="Dashboard" />

            <div className="row">
                <MainCard
                    title="Categorias"
                    value={totalCategories}
                    icon="fas fa-list"
                    styleClass="primary"
                    page="allCategories"
                />

                <MainCard
                    title="Posts"
                    value={totalPosts}
                    icon="fas fa-blog"
                    styleClass="primary"
                    page="allPosts"
                />

                <MainCard
                    title="Usuários"
                    value={totalUsers}
                    icon="fas fa-users"
                    styleClass="primary"
                    page="allUsers"
                />
            </div>

        </div>
    )
}