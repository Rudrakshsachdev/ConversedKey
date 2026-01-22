import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Hero.module.css";

// Import background image - adjust path as needed
import backgroundImage from "../../assets/hero-bg.jpg";

function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState([]);

  // Fixed stats without animation
  const stats = [
    { value: 500, label: "Clients Served", suffix: "+" },
    { value: 10000, label: "Talent Placed", suffix: "+" },
    { value: 95, label: "Satisfaction Rate", suffix: "%" },
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const words = ["Career", "Potential", "Success", "Growth", "Opportunity"];

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x: xPos, y: yPos });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < word.length) {
            setTypedText(word.substring(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(word.substring(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex]);

  // Particle system
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.speedX) % 100,
          y: (p.y + p.speedY) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Interactive glow effect
  const handleGlowHover = (e) => {
    const cards = document.querySelectorAll(".glowCard");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <motion.section
      id="home"
      className={styles.hero}
      ref={containerRef}
      style={{ y: springY }} // Remove opacity from here
      onMouseMove={handleGlowHover}
    >
      {/* Background Image with Overlay */}
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translate(${mousePosition.x * 0.5}px, ${
            mousePosition.y * 0.5
          }px)`,
        }}
      />

      {/* Gradient Overlays */}
      <div className={styles.gradientOverlay} />
      <div className={styles.vignette} />

      {/* Animated Particles */}
      <div className={styles.particleContainer}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingOrbs}>
        <div className={styles.floatingOrb1} />
        <div className={styles.floatingOrb2} />
        <div className={styles.floatingOrb3} />
      </div>

      {/* Animated Grid Pattern */}
      <div
        className={styles.animatedGrid}
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${
            mousePosition.y * 0.2
          }px)`,
        }}
      />

      <div className={styles.container}>
        {/* Animated Badge */}
        <motion.div
          className={styles.companyBadge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className={styles.badgeIcon}>★</span>
          <span className={styles.badgeText}>The Key to Unlocking Your Career!</span>
        </motion.div>

        {/* Main Heading with Split Animation */}
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className={styles.headingLine}>
            <motion.span
              className={styles.headingWord1}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Conversed
            </motion.span>
            <motion.span
              className={styles.headingWord2}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Key
            </motion.span>
          </span>
          <motion.span
            className={styles.headingRest}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Private Limited
          </motion.span>
        </motion.h1>

        {/* Animated Tagline with Typing Effect */}
        <motion.div
          className={styles.taglineContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className={styles.tagline}>
            The Key to Unlocking Your{" "}
            <span className={styles.typingText}>
              {typedText}
              <span className={styles.cursor}>|</span>
            </span>
          </h2>
        </motion.div>

        {/* Interactive Cards */}
        <div className={styles.cardsContainer}>
          <motion.div
            className={`${styles.card} glowCard`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardIcon}>👥</div>
            <h3 className={styles.cardTitle}>Expert Staffing</h3>
            <p className={styles.cardText}>
              Connect with top talent through our comprehensive recruitment
              solutions.
            </p>
            <div className={styles.cardGlow} />
          </motion.div>

          <motion.div
            className={`${styles.card} glowCard`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardIcon}>⚡</div>
            <h3 className={styles.cardTitle}>BPO Solutions</h3>
            <p className={styles.cardText}>
              Streamline your operations with our efficient business process
              outsourcing.
            </p>
            <div className={styles.cardGlow} />
          </motion.div>

          <motion.div
            className={`${styles.card} glowCard`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardIcon}>🎯</div>
            <h3 className={styles.cardTitle}>Career Growth</h3>
            <p className={styles.cardText}>
              Unlock your potential with our career development and placement
              services.
            </p>
            <div className={styles.cardGlow} />
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          className={styles.statsContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <motion.div
                className={styles.statNumber}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 1.5 + index * 0.1,
                }}
              >
                {stat.value}
                <span className={styles.statSuffix}>{stat.suffix}</span>
              </motion.div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Interactive CTA Buttons */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.a
            href="https://wa.me/917667703866?text=Hello%20Conversed%20Key%20Team,%20I%20would%20like%20to%20get%20started%20with%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.btnText}>Get Started Free</span>
            <span className={styles.btnIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.btnRipple} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/reel/DTAbrYlkyXe/?igsh=MWtta2prc29jN3F3dA=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.btnText}>Watch Demo</span>
            <span className={styles.btnIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator with Animation */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel} />
          </div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </motion.div>

        {/* Interactive Background Blobs */}
        <div className={styles.interactiveBlobs}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={styles.blob}
              style={{
                animationDelay: `${i * 2}s`,
                filter: `hue-rotate(${mousePosition.x * 0.5}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;