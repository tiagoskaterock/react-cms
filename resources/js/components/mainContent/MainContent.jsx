import React from "react";
import { usePage } from "../../contexts/PageContent.js";
import Dashboard from "../pages/dashboard/Dashboard";
import TopBar from "../topBar/TopBar";
import AllCategories from "../pages/categories/AllCategories";
import AllPosts from "../pages/posts/AllPosts.jsx";
import NewCategory from "../pages/categories/NewCategory.jsx";

export default function MainContent() {
    const { currentPage } = usePage(); // Obtém o estado global para decidir a página

    return (
        <div id="content">
            <TopBar />

            {/* Renderiza a página com base no estado global */}
            {currentPage === "dashboard" && <Dashboard />}
            {currentPage === "allCategories" && <AllCategories />}
            {currentPage === "newCategory" && <NewCategory />}
            {currentPage === "allPosts" && <AllPosts />}
        </div>
    );
}
