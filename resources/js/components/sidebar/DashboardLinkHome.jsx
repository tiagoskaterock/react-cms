import React from 'react';

function DashboardHome(props) {

    return (
        <li className="nav-item" title="Website">
            <a
                className="nav-link"
                href="/"
            >
                <i className="fas fa-home"></i>
                <span>Website</span>
            </a>
        </li>
    );
}

export default DashboardHome;
