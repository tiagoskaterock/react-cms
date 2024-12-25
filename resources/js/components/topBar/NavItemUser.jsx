import TopBarDropdownDivider from "./TopBarDropdowDivider";
import TopBarLogoutButton from "./TopBarLogoutButton";
import TopBarUserLink from "./TopBarUserLink";

export default function NavItemUser() {
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
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                <img className="img-profile rounded-circle" src="/sb-admin/img/undraw_profile.svg" alt="..." />
            </a>
            {/* Dropdown - User Information */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">

                <TopBarUserLink title="Perfil" href="#" icon="fas fa-user" />

                <TopBarUserLink title="Ajustes" href="#" icon="fas fa-cogs" />

                <TopBarUserLink title="Atividades" href="#" icon="fas fa-list" />

                <TopBarDropdownDivider />

                <TopBarLogoutButton />
            </div>
        </li>
    )
}
