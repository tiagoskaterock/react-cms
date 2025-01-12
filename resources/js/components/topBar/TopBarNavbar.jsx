import NavItemAlerts from "./NavItemAlerts";
import NavItemMessages from "./NavItemMessages";
import NavItemSearchDropdown from "./NavItemSearchDropdown";
import NavItemUser from "./NavItemUser";
import TopBarDivider from "./TopBarDivider";

export default function TopBarNavbar() {
    return (
        <ul className="navbar-nav ml-auto">

            <NavItemSearchDropdown />

            <NavItemUser />

        </ul>
    )
}
