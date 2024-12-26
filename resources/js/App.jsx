import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/sidebar/Sidebar';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import { PageProvider } from "./contexts/PageContent";
import axios from 'axios';

// Pega o token CSRF da meta tag
const token = document.head.querySelector('meta[name="csrf-token"]').content;

// Configura o axios para enviar o token CSRF em todas as requisições
axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

const App = () => {
    return (
        <>         
            <PageProvider>
                <Sidebar />
                <ContentWrapper />            
            </PageProvider>   
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(<App />);
