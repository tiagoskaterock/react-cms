import React, { useState } from 'react';
import DashboardLink from './DashboardLink';
import SidebarBrand from './SidebarBrand';
import SidebarDivider from './SidebarDivider';

function Sidebar() {
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleComponents = () => setIsComponentsOpen(!isComponentsOpen);
  const toggleUtilities = () => setIsUtilitiesOpen(!isUtilitiesOpen);
  const togglePages = () => setIsPagesOpen(!isPagesOpen);

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <SidebarBrand />

        <SidebarDivider />

        <DashboardLink title="Dashboard" icon="fas fa-fw fa-tachometer-alt" href="#" />        
    </ul>
  );
}

export default Sidebar;
