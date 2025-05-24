/**
 * Configuration for the navbar component
 */

/**
 * Navbar styles
 */
export const navbarStyles = {
  desktop: {
    container: "bg-white dark:bg-gray-800 shadow-md flex items-center justify-between p-4",
    logoContainer: "flex items-center",
    logo: "text-xl font-bold",
    linksContainer: "flex",
    link: "hover:text-blue-600 transition-colors",
    searchContainer: "",
    searchInput: "px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none text-black",
  },
  mobile: {
    container: "",
    header: "flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md",
    logo: "text-xl font-bold",
    menuButton: "focus:outline-none",
    menu: "bg-white dark:bg-gray-800 shadow-md p-6",
    searchContainer: "flex items-center justify-between mb-6",
    searchInput: "px-6 py-3 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none w-full text-black",
    linksContainer: "flex flex-col space-y-6",
    link: "py-3 hover:text-blue-600 transition-colors",
  },
  content: "flex-1",
};

/**
 * SVG paths for icons
 */
export const icons = {
  close: "M6 18L18 6M6 6l12 12",
  hamburger: "M4 6h16M4 12h16M4 18h16",
};

/**
 * Search input configuration
 */
export const searchConfig = {
  placeholder: "Search...",
};

/**
 * Brand configuration
 */
export const brandConfig = {
  name: "AEON",
  href: "/",
};
