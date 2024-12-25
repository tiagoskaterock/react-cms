import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/sidebar/Sidebar';
import ContentWrapper from './components/contentWrapper/ContentWrapper';

const App = () => {
    return (
        <>            
            <Sidebar />
            <ContentWrapper />            
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(<App />);
