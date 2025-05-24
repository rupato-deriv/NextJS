import { useState } from "react";
import { navbarStyles } from "@/config/navbar-config";
import { navLinks } from "@/config/navbar";
import Brand from "./brand";
import NavLink from "./nav-link";
import SearchInput from "./search-input";

/**
 * Desktop version of the navbar
 */
export default function DesktopNavbar() {
  const [selectedItem, setSelectedItem] = useState("Showcase"); // Initialize with "Showcase" selected
  const styles = navbarStyles.desktop;
  
  const handleNavLinkClick = (label: string) => {
    setSelectedItem(label); // Update the selected item
  };
  
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Brand className={styles.logo} />
        <div className={`${styles.linksContainer} space-x-2 ml-4`}>
          {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                label={link.label}
                className={styles.link}
                isSelected={link.label === selectedItem}
                onClick={handleNavLinkClick}
                variant="desktop"
              />
          ))}
        </div>
      </div>
      <div className={styles.searchContainer}>
        <SearchInput className={styles.searchInput} />
      </div>
    </nav>
  );
}
