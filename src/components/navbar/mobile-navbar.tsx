import { useState } from "react";
import { navbarStyles, icons } from "@/config/navbar-config";
import { navLinks } from "@/config/navbar";
import Brand from "./brand";
import NavLink from "./nav-link";
import SearchInput from "./search-input";
import Icon from "./icon";

/**
 * Mobile version of the navbar
 */
export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Showcase"); // Initialize with "Showcase" selected
  const styles = navbarStyles.mobile;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (label: string) => {
    setSelectedItem(label); // Update the selected item
  };

  return (
    <div className={styles.container}>
      {/* Mobile Header */}
      <div className={styles.header}>
        <Brand className={styles.logo} />
        <button onClick={toggleMenu} className={styles.menuButton}>
          {isMenuOpen ? (
            <Icon path={icons.close} />
          ) : (
            <Icon path={icons.hamburger} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.searchContainer}>
            <SearchInput className={styles.searchInput} />
          </div>
          <div className={`${styles.linksContainer} flex flex-col w-full space-y-1`}>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                label={link.label}
                className={styles.link}
                isSelected={link.label === selectedItem}
                onClick={handleNavLinkClick}
                variant="mobile"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
