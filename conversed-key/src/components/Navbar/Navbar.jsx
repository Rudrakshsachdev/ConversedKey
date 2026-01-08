import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#' },
    { id: 'careers', label: 'Careers', href: '#' },
    { id: 'contact', label: 'Contact', href: '#' },
  ];

  const handleNavClick = (label) => {
    setActiveLink(label);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${mobileMenuOpen ? styles.mobileOpen : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        {/* Brand / Logo with animation */}
        <div className={styles.brand}>
          <div className={styles.brandInner}>
            <span className={styles.brandText}>Conversed Key</span>
            <span className={styles.brandAccent}></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop} aria-label="Desktop navigation">
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`${styles.navLink} ${activeLink === item.label ? styles.active : ''}`}
                onClick={() => handleNavClick(item.label)}
                aria-current={activeLink === item.label ? 'page' : undefined}
              >
                <span className={styles.navText}>{item.label}</span>
                <span className={styles.navUnderline}></span>
              </a>
            ))}
          </div>
        </nav>

        {/* CTA Button - Desktop */}
        <button className={styles.ctaButton} aria-label="Get started">
          <span className={styles.ctaText}>Get Started</span>
          <span className={styles.ctaIcon}>→</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.active : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <div className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`${styles.mobileNavLink} ${activeLink === item.label ? styles.active : ''}`}
                onClick={() => handleNavClick(item.label)}
                aria-current={activeLink === item.label ? 'page' : undefined}
              >
                <span className={styles.mobileNavText}>{item.label}</span>
                <span className={styles.mobileNavIndicator}></span>
              </a>
            ))}
          </div>
          <button className={styles.mobileCtaButton} aria-label="Get started on mobile">
            Get Started
            <span className={styles.mobileCtaIcon}>→</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;