import React, { useState, useEffect } from "react";
import TopBarDropdownDivider from "./TopBarDropdowDivider";
import TopBarLogoutButton from "./TopBarLogoutButton";
import TopBarUserLink from "./TopBarUserLink";
import axios from "axios";
import TopBarWebsiteButton from "./TopBarWebsiteButton";

export default function NavItemUser() {

    // Estado para armazenar o nome do usuário
    const [loggedUserName, setLoggedUserName] = useState(null);

    useEffect(() => {
        // Faz a requisição para a rota que retorna o nome do usuário logado
        axios.get('/api/loggedUserName')
            .then(response => {
                // Se a requisição for bem-sucedida, armazena o nome do usuário
                setLoggedUserName(response.data);
            })
            .catch(error => {
                // Se houver erro (por exemplo, usuário não autenticado)
                console.error("Error fetching user data", error);
            });

    }, []);  // O efeito é executado apenas uma vez quando o componente é montado

    return (
        <li className="nav-item dropdown no-arrow">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{ loggedUserName }</span>
                <img className="img-profile rounded-circle" src="/sb-admin/img/undraw_profile.svg" alt="..." />
            </a>

            {/* Dropdown - User Information */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                
                <TopBarWebsiteButton />

                <TopBarLogoutButton />

            </div>
        </li>
    )
}
