import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const whatsappNumber = '917667703866';

function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");

  // Mouse move effect for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x: xPos, y: yPos });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80; // Account for fixed navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    
    const whatsappMessage = `Hello Conversed Key Team, I would like to subscribe to your updates and career opportunities. My email address is: ${email}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.footerGrid} />
        <div className={styles.footerOrb1} />
        <div className={styles.footerOrb2} />
        <div className={styles.particleField} />
      </div>

      {/* Gradient Overlay */}
      <div className={styles.footerOverlay} />

      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <motion.div
            className={styles.brandSection}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className={styles.logoContainer}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.logoIcon}>🔑</div>
              <div className={styles.logoText}>
                <h3 className={styles.companyName}>Conversed Key</h3>
                <p className={styles.companyType}>Private Limited</p>
              </div>
            </motion.div>

            <motion.p
              className={styles.tagline}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Key to Unlocking Your{" "}
              <span className={styles.highlight}>Potential</span>
            </motion.p>

            {/* Social Links */}
            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/*
                { platform: 'linkedin', url: 'https://www.linkedin.com/in/conversed-key-private-limited-b8646a3a4/', icon: '💼' },
                { platform: 'instagram', url: 'https://www.instagram.com/your_instagram_handle/', icon: '📸' }
              */}
              {[
                {
                  platform: "linkedin",
                  url: "https://www.linkedin.com/in/conversed-key-private-limited-b8646a3a4/",
                  icon: "💼",
                },
                {
                  platform: "instagram",
                  url: "https://www.instagram.com/conversedkeyprivatelimited?igsh=dXF6d2F6a21pZjB4",
                  icon: "📸",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.4 + index * 0.1,
                  }}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <div className={styles.socialGlow} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <div className={styles.linksGrid}>
            <motion.div
              className={styles.linkColumn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className={styles.columnTitle}>Company</h4>
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Careers", href: "#careers" },
                { label: "Contact Us", href: "#contact" },
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <span className={styles.linkBullet}>›</span>
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className={styles.linkColumn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className={styles.columnTitle}>Services</h4>
              {[
                { label: "Staffing", href: "#services" },
                { label: "Recruitment", href: "#services" },
                { label: "BPO", href: "#services" },
                { label: "Consulting", href: "#services" },
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <span className={styles.linkBullet}>›</span>
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className={styles.linkColumn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className={styles.columnTitle}>Resources</h4>
              {[
                { label: "FAQs", href: "#contact" },
                { label: "Support", href: "#contact" },
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <span className={styles.linkBullet}>›</span>
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className={styles.linkColumn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className={styles.columnTitle}>Contact</h4>
              {[
                { label: "Contact Us", href: "#contact" },
                { label: "Sales", href: "#contact" },
                { label: "Support", href: "#contact" },
                { label: "Locations", href: "#contact" },
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <span className={styles.linkBullet}>›</span>
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          className={styles.newsletter}
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${
              mousePosition.y * 0.3
            }px)`,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.newsletterContent}>
            <h4 className={styles.newsletterTitle}>Stay Updated</h4>
            <p className={styles.newsletterText}>
              Get the latest career insights and opportunities
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button
                className={styles.newsletterButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubscribe}
              >
                Subscribe
                <span className={styles.buttonArrow}>→</span>
                <span className={styles.buttonGlow} />
              </motion.button>
            </div>
          </div>
          <div className={styles.newsletterGlow} />
        </motion.div>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Bottom Bar */}
      <motion.div
        className={styles.bottomBar}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {currentYear} Conversed Key Private Limited. All rights reserved.
          </p>

          {/* <div className={styles.legalLinks}>
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Disclaimer",
            ].map((link) => (
              <a key={link} href="#" className={styles.legalLink}>
                {link}
              </a>
            ))}
          </div> */}
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
