import React from 'react';
import { usePage } from '../../contexts/PageContent'; // Importe o hook

function DashboardLink(props) {
    const { setCurrentPage } = usePage(); // Obtém a função para alterar o estado global

    return (
        <li className="nav-item" title={props.title}>
            <a
                className="nav-link"
                href="#"
                onClick={() => setCurrentPage(props.targetPage)} // Atualiza o estado global
            >
                <i className={props.icon}></i>
                <span>{props.title}</span>
            </a>
        </li>
    );
}

export default DashboardLink;
