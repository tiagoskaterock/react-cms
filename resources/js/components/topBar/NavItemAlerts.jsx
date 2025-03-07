export default function NavItemAlerts() {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <i className="fas fa-bell fa-fw"></i>
                {/* Counter - Alerts */}
                <span className="badge badge-danger badge-counter">3+</span>
            </a>
            {/* Dropdown - Alerts */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">Alerts Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                        <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 12, 2019</div>
                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </a>
                {/* Outras notificações omitidas por brevidade */}
                <a className="dropdown-item text-center small text-gray-500" href="#">
                    Show All Alerts
                </a>
            </div>
        </li>
    )
}
