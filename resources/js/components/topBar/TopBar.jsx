import SidebarToggleTop from "./SidebarToggleTop";
import TopBarNavbar from "./TopBarNavbar";
import TopBarSearch from "./TopBarSearch";

export default function TopBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">      
      
      <SidebarToggleTop />
      <TopBarNavbar />
    
    </nav>
  );
}
