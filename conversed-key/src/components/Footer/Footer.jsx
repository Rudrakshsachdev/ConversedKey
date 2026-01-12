import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
              {['linkedin', 'twitter', 'instagram', 'facebook'].map((platform, index) => (
                <motion.a
                  key={platform}
                  href="#"
                  className={styles.socialLink}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: 0.4 + index * 0.1 
                  }}
                >
                  <span className={styles.socialIcon}>
                    {platform === 'linkedin' && '💼'}
                    {platform === 'twitter' && '🐦'}
                    {platform === 'instagram' && '📸'}
                    {platform === 'facebook' && '📘'}
                  </span>
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
              {['About Us', 'Careers', 'Team', 'Press'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className={styles.navLink}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <span className={styles.linkBullet}>›</span>
                  {link}
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
              {['Staffing', 'Recruitment', 'BPO', 'Consulting'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className={styles.navLink}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <span className={styles.linkBullet}>›</span>
                  {link}
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
              {['Blog', 'Case Studies', 'FAQs', 'Support'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className={styles.navLink}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <span className={styles.linkBullet}>›</span>
                  {link}
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
              {['Contact Us', 'Sales', 'Support', 'Locations'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className={styles.navLink}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <span className={styles.linkBullet}>›</span>
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className={styles.newsletter}
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
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
              />
              <motion.button
                className={styles.newsletterButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
          
          <div className={styles.legalLinks}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((link) => (
              <a key={link} href="#" className={styles.legalLink}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;