import React, { createContext, useState, useContext } from "react";

// Criação do contexto
const PageContext = createContext();

// Provedor do contexto
export function PageProvider({ children }) {
    // Estado para a página atual
    const [currentPage, setCurrentPage] = useState("dashboard");
    
    // Estado para armazenar o ID da categoria selecionada
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    return (
        <PageContext.Provider value={{ 
            currentPage, 
            setCurrentPage, 
            selectedCategoryId, 
            setSelectedCategoryId 
        }}>
            {children}
        </PageContext.Provider>
    );
}

// Hook para consumir o contexto em qualquer componente
export function usePage() {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePage deve ser usado dentro de um PageProvider");
    }
    return context;
}
