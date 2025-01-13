import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

const Website = () => {
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("website"));
root.render(<Website />);
