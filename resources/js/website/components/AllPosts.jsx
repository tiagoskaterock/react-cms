import React, { useState, useEffect } from "react";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento dos posts

    useEffect(() => {
        fetch("/api/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar os posts");
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
                setLoading(false); // Marca o carregamento como completo
            })
            .catch((error) => {
                console.error("Erro ao buscar posts:", error);
                setLoading(false); // Em caso de erro, também marca como completo
            });
    }, []); // Executa apenas uma vez ao montar o componente

    if (loading) {
        return <p>Carregando posts...</p>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Posts</h2>
            <div style={styles.cardContainer}>
                {posts.map((post) => (
                    <div key={post.id} style={styles.card}>
                        <h3 style={styles.cardTitle}>{post.title}</h3>
                        <p style={styles.cardBody}>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Estilos embutidos
const styles = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
    },
    heading: {
        textAlign: "center",
        color: "#333",
    },
    cardContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
    },
    card: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        backgroundColor: "#fff",
    },
    cardTitle: {
        fontSize: "18px",
        color: "#007BFF",
        marginBottom: "10px",
    },
    cardBody: {
        fontSize: "14px",
        color: "#555",
    },
};
