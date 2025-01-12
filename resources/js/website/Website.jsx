import React from 'react';
import ReactDOM from 'react-dom/client';

const Website = () => {
    return (
        <>         
            <h1>Website</h1> 
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('website'));
root.render(<Website />);
