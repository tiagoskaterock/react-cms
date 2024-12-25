import React, { useState, useEffect } from "react";
import PageHeading from "../../content/PageHeading";

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
            <PageHeading title="Posts" />

            {/* Mostrar mensagem de carregamento */}
            {loading ? (
                <p>Carregando posts...</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <tr key={post.id}>
                                    <td>{index + 1}</td>
                                    <td>{post.name}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">Nenhum post encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}
