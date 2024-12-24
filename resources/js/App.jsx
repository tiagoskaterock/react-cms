import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
    return (
        <>            
            <Sidebar />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(<App />);
