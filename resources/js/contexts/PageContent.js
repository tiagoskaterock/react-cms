import React, { createContext, useState, useContext } from "react";

// Criação do contexto
const PageContext = createContext();

// Provedor do contexto
export function PageProvider({ children }) {
    const [currentPage, setCurrentPage] = useState('allCategories');
    console.log(currentPage);
    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    );
}

// Hook para usar o contexto em qualquer componente
export function usePage() {
    return useContext(PageContext);
}
