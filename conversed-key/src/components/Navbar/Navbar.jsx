import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false);
  };

  // Menu items data for better maintainability
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav 
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ""} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <h2 className={styles.logo}>
              <span className={styles.logoText}>Conversed</span>
              <span className={styles.logoAccent}>Key</span>
            </h2>
            <div className={styles.logoGlow}></div>
          </div>
          
          {/* Desktop Menu */}
          <ul className={styles.menu} role="menubar">
            {menuItems.map((item) => (
              <li key={item.path} className={styles.menuItem} role="none">
                <Link
                  to={item.path}
                  className={`${styles.menuLink} ${activeLink === item.path ? styles.active : ""}`}
                  onClick={() => handleLinkClick(item.path)}
                  role="menuitem"
                  aria-current={activeLink === item.path ? "page" : undefined}
                >
                  <span className={styles.linkText}>{item.label}</span>
                  <span className={styles.linkHoverEffect}></span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line1 : ""}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line2 : ""}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line3 : ""}`}></span>
          </button>
          
          {/* Mobile Menu */}
          <div 
            id="mobile-menu"
            className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}
            role="menu"
            aria-hidden={!isMobileMenuOpen}
          >
            <ul className={styles.mobileMenuList}>
              {menuItems.map((item) => (
                <li key={item.path} className={styles.mobileMenuItem} role="none">
                  <Link
                    to={item.path}
                    className={`${styles.mobileMenuLink} ${activeLink === item.path ? styles.active : ""}`}
                    onClick={() => handleLinkClick(item.path)}
                    role="menuitem"
                    aria-current={activeLink === item.path ? "page" : undefined}
                  >
                    <span className={styles.mobileLinkText}>{item.label}</span>
                    <span className={styles.mobileLinkIcon}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Navigation Indicator */}
        <div className={styles.navIndicator}></div>
      </nav>
      
      {/* Background Overlay for Mobile Menu */}
      <div 
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.overlayVisible : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      ></div>
    </>
  );
};

export default Navbar;