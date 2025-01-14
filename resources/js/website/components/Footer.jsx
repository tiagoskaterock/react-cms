import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <div className="container p-4">
        {/* Texto do footer */}
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Meu CMS. Todos os direitos reservados.</p>
        </div>

        {/* Links sociais */}
        <div className="text-center">
          <a href="#" className="me-3 text-decoration-none">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="me-3 text-decoration-none">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="me-3 text-decoration-none">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
