export default function NavItemMessages() {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <i className="fas fa-envelope fa-fw"></i>
                {/* Counter - Messages */}
                <span className="badge badge-danger badge-counter">7</span>
            </a>
            {/* Dropdown - Messages */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">Message Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                        <img
                            className="rounded-circle"
                            src="/sb-admin/img/undraw_profile_1.svg"
                            alt="Profile Picture"
                        />
                        <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                        <div className="text-truncate">
                            Hi there! I am wondering if you can help me with a problem I've been having.
                        </div>
                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                </a>
                {/* Outras mensagens omitidas por brevidade */}
                <a className="dropdown-item text-center small text-gray-500" href="#">
                    Read More Messages
                </a>
            </div>
        </li>
    )
}
