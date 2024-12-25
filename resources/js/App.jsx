import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/sidebar/Sidebar';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import { PageProvider } from "./contexts/PageContent";

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
