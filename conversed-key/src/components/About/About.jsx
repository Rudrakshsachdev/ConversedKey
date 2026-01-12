import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles from "./About.module.css";

function About() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("vision");

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x: xPos, y: yPos });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Check elements in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section 
      className={styles.about} 
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div 
          className={styles.backgroundGrid}
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />
        <div className={styles.aboutOrb1} />
        <div className={styles.aboutOrb2} />
        <div className={styles.floatingShapes}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={styles.floatingShape} style={{ animationDelay: `${i * 2}s` }} />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.headerBadge}>
            <span className={styles.badgeIcon}>🔑</span>
            <span className={styles.badgeText}>About Our Company</span>
          </div>
          <motion.h2 
            className={styles.mainTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlocking Human{" "}
            <span className={styles.gradientText}>Potential</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bridging talent with opportunity through innovative workforce solutions
          </motion.p>
        </motion.div>

        {/* Company Overview Card */}
        <motion.div 
          className={styles.overviewCard}
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>🏢</div>
              <h3 className={styles.cardTitle}>Company Overview</h3>
            </div>
            <p className={styles.cardText}>
              <span className={styles.highlight}>Conversed Key Private Limited</span> is a premier staffing, 
              recruitment, and BPO outsourcing company dedicated to bridging the gap between 
              forward-thinking organizations and exceptional talent. We specialize in delivering 
              <span className={styles.highlight}> scalable, efficient, and innovative</span> human resource solutions that drive business growth.
            </p>
            <div className={styles.statsRow}>
              {[
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Clients Served" },
                { value: "95%", label: "Success Rate" },
                { value: "24/7", label: "Global Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className={styles.statItem}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    delay: 0.5 + index * 0.1 
                  }}
                >
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className={styles.cardGlow} />
        </motion.div>

        {/* Vision & Mission Section */}
        <div className={styles.visionMissionSection}>
          {/* Toggle Tabs */}
          <motion.div 
            className={styles.tabContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              className={`${styles.tab} ${activeTab === "vision" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("vision")}
            >
              <span className={styles.tabIcon}>👁️</span>
              Our Vision
            </button>
            <button
              className={`${styles.tab} ${activeTab === "mission" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("mission")}
            >
              <span className={styles.tabIcon}>🎯</span>
              Our Mission
            </button>
          </motion.div>

          {/* Tab Content */}
          <div className={styles.tabContent}>
            <motion.div 
              className={styles.tabPanel}
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === "vision" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "vision" ? (
                <div className={styles.visionContent}>
                  <div className={styles.visionHeader}>
                    <div className={styles.visionIcon}>🌟</div>
                    <h3 className={styles.visionTitle}>Our Vision</h3>
                  </div>
                  <p className={styles.visionText}>
                    To emerge as the world's most trusted workforce solutions partner, 
                    recognized for our unwavering commitment to 
                    <span className={styles.highlight}> integrity, innovation, and excellence</span>. 
                    We envision a future where every organization has access to exceptional 
                    talent and every professional finds meaningful opportunities for growth.
                  </p>
                  <div className={styles.visionGoals}>
                    {[
                      "Global workforce solutions leader",
                      "Technology-driven talent matching",
                      "Sustainable employment ecosystems",
                      "Industry-recognized excellence"
                    ].map((goal, index) => (
                      <div key={index} className={styles.goalItem}>
                        <span className={styles.goalCheck}>✓</span>
                        {goal}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={styles.missionContent}>
                  <div className={styles.missionHeader}>
                    <div className={styles.missionIcon}>🚀</div>
                    <h3 className={styles.missionTitle}>Our Mission</h3>
                  </div>
                  <p className={styles.missionText}>
                    To empower organizations worldwide by providing 
                    <span className={styles.highlight}> strategic workforce solutions</span> that 
                    drive business success while enabling individuals to unlock their full 
                    potential through expert guidance, continuous support, and meaningful 
                    career opportunities.
                  </p>
                  <div className={styles.missionPillars}>
                    <div className={styles.pillar}>
                      <div className={styles.pillarIcon}>💡</div>
                      <h4 className={styles.pillarTitle}>Innovation</h4>
                      <p className={styles.pillarText}>Leveraging cutting-edge technology for talent matching</p>
                    </div>
                    <div className={styles.pillar}>
                      <div className={styles.pillarIcon}>🤝</div>
                      <h4 className={styles.pillarTitle}>Partnership</h4>
                      <p className={styles.pillarText}>Building lasting relationships based on trust</p>
                    </div>
                    <div className={styles.pillar}>
                      <div className={styles.pillarIcon}>📈</div>
                      <h4 className={styles.pillarTitle}>Growth</h4>
                      <p className={styles.pillarText}>Fostering continuous development for all stakeholders</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Director Message */}
        <motion.div 
          className={styles.directorCard}
          ref={el => sectionRefs.current[0] = el}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        >
          <div className={styles.directorContent}>
            <div className={styles.directorHeader}>
              <div className={styles.directorAvatar}>
                <span className={styles.avatarIcon}>👨‍💼</span>
                <div className={styles.avatarGlow} />
              </div>
              <div className={styles.directorInfo}>
                <h3 className={styles.directorName}>Message from the Director</h3>
                <p className={styles.directorRole}>Founder & CEO</p>
              </div>
            </div>
            <blockquote className={styles.directorQuote}>
              <div className={styles.quoteMark}>"</div>
              <p className={styles.quoteText}>
                At Conversed Key Private Limited, we believe that people are the 
                <span className={styles.highlight}> foundation of every successful organization</span>. 
                Our commitment is to create lasting partnerships by delivering workforce 
                solutions that are not only efficient but also ethical and growth-oriented.
              </p>
              <p className={styles.quoteText}>
                We remain dedicated to excellence, transparency, and continuous improvement 
                in everything we do. Every placement we make, every partnership we build, 
                and every solution we deliver is guided by our core belief in unlocking 
                human potential.
              </p>
              <footer className={styles.quoteFooter}>
                <div className={styles.quoteSignature}>
                  <div className={styles.signatureLine} />
                  <span className={styles.signatureName}>Director's Signature</span>
                </div>
              </footer>
            </blockquote>
            <div className={styles.quoteGlow} />
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className={styles.valuesSection}
          ref={el => sectionRefs.current[1] = el}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className={styles.valuesTitle}>Our Core Values</h3>
          <div className={styles.valuesGrid}>
            {[
              { icon: "🎯", title: "Excellence", desc: "Pursuing exceptional quality in all we do" },
              { icon: "🤝", title: "Integrity", desc: "Building trust through transparency" },
              { icon: "💡", title: "Innovation", desc: "Embracing creativity and technology" },
              { icon: "❤️", title: "Empathy", desc: "Understanding people's aspirations" },
              { icon: "🌍", title: "Global Mindset", desc: "Thinking beyond boundaries" },
              { icon: "📈", title: "Growth", desc: "Continuous learning and improvement" }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDesc}>{value.desc}</p>
                <div className={styles.valueGlow} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;