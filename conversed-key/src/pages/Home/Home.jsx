import { useState, useEffect, useRef } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [buttonHover, setButtonHover] = useState({ hire: false, explore: false });
  const heroRef = useRef(null);

  // Handle scroll progress for background parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 800;
      const progress = Math.min(scrollY / (heroHeight * 0.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle button hover states
  const handleButtonHover = (button, isHovering) => {
    setButtonHover(prev => ({ ...prev, [button]: isHovering }));
  };

  // Handle button clicks with animation
  const handleButtonClick = (action) => {
    const button = document.querySelector(`[data-action="${action}"]`);
    if (button) {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
        // Add your navigation logic here
        console.log(`${action} clicked`);
      }, 150);
    }
  };

  return (
    <>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div 
          className={styles.parallaxBackground}
          style={{ transform: `translateY(${scrollProgress * 50}px)` }}
        />
        <div className={styles.gridOverlay} />
        <div className={styles.gradientOrb} />
        <div className={styles.noiseTexture} />
      </div>

      <section 
        ref={heroRef}
        className={styles.hero}
        aria-label="Hero section"
      >
        <div className={styles.heroContainer}>
          {/* Decorative Elements */}
          <div className={styles.decorationLine} data-line="top" />
          <div className={styles.decorationLine} data-line="right" />
          <div className={styles.decorationLine} data-line="bottom" />
          <div className={styles.decorationLine} data-line="left" />
          
          {/* Content Wrapper with Staggered Animation */}
          <div className={styles.contentWrapper}>
            {/* Pre-title with subtle animation */}
            <div className={styles.preTitle}>
              <span className={styles.preTitleText}>Welcome to</span>
              <div className={styles.preTitleUnderline} />
            </div>
            
            {/* Main Title with Gradient */}
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine} data-line="1">
                <span className={styles.titleText}>Conversed Key</span>
              </span>
              <span className={styles.titleLine} data-line="2">
                <span className={styles.titleText}>Private Limited</span>
              </span>
            </h1>
            
            {/* Subtitle with Accent */}
            <h2 className={styles.subtitle}>
              <span className={styles.subtitleText}>The Key to Unlocking</span>
              <span className={styles.subtitleAccent}>Your Career!</span>
            </h2>
            
            {/* Description with Enhanced Typography */}
            <div className={styles.descriptionContainer}>
              <div className={styles.descriptionLine} />
              <p className={styles.description}>
                We are a trusted staffing, recruitment, and BPO outsourcing company 
                delivering skilled talent and efficient business solutions.
              </p>
              <div className={styles.descriptionLine} />
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className={styles.ctaContainer}>
              <button
                className={`${styles.ctaButton} ${styles.primaryButton}`}
                data-action="hire"
                onMouseEnter={() => handleButtonHover('hire', true)}
                onMouseLeave={() => handleButtonHover('hire', false)}
                onClick={() => handleButtonClick('hire')}
                aria-label="Hire talent from Conversed Key"
              >
                <span className={styles.buttonContent}>
                  <span className={styles.buttonText}>Hire Talent</span>
                  <span className={styles.buttonIcon}>
                    <svg 
                      className={`${styles.icon} ${buttonHover.hire ? styles.iconActive : ''}`} 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
                <span className={styles.buttonGlow} />
                <span className={styles.buttonRipple} />
              </button>
              
              <button
                className={`${styles.ctaButton} ${styles.secondaryButton}`}
                data-action="explore"
                onMouseEnter={() => handleButtonHover('explore', true)}
                onMouseLeave={() => handleButtonHover('explore', false)}
                onClick={() => handleButtonClick('explore')}
                aria-label="Explore career opportunities at Conversed Key"
              >
                <span className={styles.buttonContent}>
                  <span className={styles.buttonText}>Explore Careers</span>
                  <span className={styles.buttonIcon}>
                    <svg 
                      className={`${styles.icon} ${buttonHover.explore ? styles.iconActive : ''}`} 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M5 13.3333L10 8.33333L15 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
                <span className={styles.buttonGlow} />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>1000+</span>
                <span className={styles.trustLabel}>Talents Placed</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>50+</span>
                <span className={styles.trustLabel}>Client Partners</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>98%</span>
                <span className={styles.trustLabel}>Satisfaction Rate</span>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
              <span className={styles.scrollText}>Discover More</span>
              <div className={styles.scrollAnimation}>
                <div className={styles.scrollDot} />
                <div className={styles.scrollDot} />
                <div className={styles.scrollDot} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;