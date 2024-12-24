import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Olá, React com Laravel Mix!</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
