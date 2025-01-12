import React from 'react';

export default function TopBarLogoutButton() {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    return (
        <form action="/logout" method="post">
            {/* Adicionando o CSRF Token como um campo oculto */}
            <input type="hidden" name="_token" value={csrfToken} />
            <button className="dropdown-item" type="submit">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </button>
        </form>
    );
}
