import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles from './Careers.module.css';

const whatsappNumber = '917667703866';

function Careers() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeJob, setActiveJob] = useState(null);
  const [particles, setParticles] = useState([]);
  
  // Mouse parallax effect
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

  // Particle system
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: Math.random() > 0.5 ? '#4cc9f0' : '#4361ee'
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
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const jobCategories = [
    {
      id: 'it',
      title: "IT & Software Roles",
      icon: "💻",
      description: "Opportunities for developers, testers, analysts, and other IT professionals across multiple technologies and experience levels.",
      requirements: [
        "Software Development",
        "Cloud & DevOps",
        "Data Science & AI",
        "Cybersecurity",
        "QA & Testing"
      ],
      color: "#4361ee"
    },
    {
      id: 'hr',
      title: "HR & Recruitment Roles",
      icon: "👥",
      description: "Join our recruitment and HR team to help organizations hire the right talent and support candidates in their career growth.",
      requirements: [
        "Talent Acquisition",
        "HR Operations",
        "Employee Engagement",
        "Training & Development",
        "Recruitment Strategy"
      ],
      color: "#3a0ca3"
    },
    {
      id: 'bpo',
      title: "BPO & Operations Roles",
      icon: "⚡",
      description: "Openings for customer support, process associates, and operations professionals in our BPO and outsourcing verticals.",
      requirements: [
        "Customer Support",
        "Process Management",
        "Operations Excellence",
        "Team Leadership",
        "Quality Assurance"
      ],
      color: "#4cc9f0"
    }
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", desc: "Industry-leading compensation" },
    { icon: "🏠", title: "Flexible Work", desc: "Hybrid & remote options" },
    { icon: "📚", title: "Learning Budget", desc: "Annual training allowance" },
    { icon: "❤️", title: "Health Insurance", desc: "Comprehensive coverage" },
    { icon: "🎯", title: "Career Growth", desc: "Clear progression paths" },
    { icon: "🎉", title: "Team Events", desc: "Regular social activities" }
  ];

  return (
    <motion.section 
      id="careers"
      className={styles.careers}
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div 
          className={styles.careersGrid}
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />
        <div className={styles.careersOrb1} />
        <div className={styles.careersOrb2} />
        
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
                backgroundColor: particle.color,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        {/* Page Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={styles.headerBadge}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <span className={styles.badgeIcon}>🚀</span>
            <span className={styles.badgeText}>Join Our Team</span>
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shape the Future of{" "}
            <span className={styles.gradientText}>Work</span>
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We're always looking for passionate professionals to join our journey. 
            Explore opportunities and start your career journey with us.
          </motion.p>
        </motion.div>

        {/* Career Benefits */}
        <motion.div 
          className={styles.benefitsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={styles.benefitsTitle}>Why Join Us?</h3>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h4 className={styles.benefitName}>{benefit.title}</h4>
                <p className={styles.benefitDesc}>{benefit.desc}</p>
                <div className={styles.benefitGlow} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className={styles.jobsSection}>
          <motion.h3 
            className={styles.jobsTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Current Opportunities
          </motion.h3>
          
          <div className={styles.jobsGrid}>
            {jobCategories.map((job, index) => (
              <motion.div 
                key={job.id}
                className={`${styles.jobCard} ${activeJob === job.id ? styles.active : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -15 }}
                onMouseEnter={() => setActiveJob(job.id)}
                onMouseLeave={() => setActiveJob(null)}
                style={{
                  '--job-color': job.color,
                }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.jobIcon}>{job.icon}</div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobStatus}>
                      <span className={styles.statusDot} />
                      <span className={styles.statusText}>Hiring Now</span>
                    </div>
                  </div>
                  
                  <p className={styles.jobDescription}>{job.description}</p>
                  
                  <div className={styles.requirements}>
                    <h4 className={styles.requirementsTitle}>Key Areas:</h4>
                    <div className={styles.requirementsList}>
                      {job.requirements.map((req, idx) => (
                        <span key={idx} className={styles.requirementTag}>{req}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.experience}>
                      <span className={styles.experienceIcon}>📊</span>
                      <span className={styles.experienceText}>0-10 Years Experience</span>
                    </div>
                    <div className={styles.location}>
                      <span className={styles.locationIcon}>📍</span>
                      <span className={styles.locationText}>Hybrid / Remote</span>
                    </div>
                  </div>
                  
                  <motion.a
                    href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(job.title)}%20at%20Conversed%20Key.%20My%20experience%20is%20[Your%20Experience].`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={styles.whatsappIcon}>💬</span>
                    <span className={styles.whatsappText}>Apply on WhatsApp</span>
                    <span className={styles.whatsappArrow}>→</span>
                    <div className={styles.buttonGlow} />
                  </motion.a>
                </div>
                
                <div className={styles.cardGlow} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        >
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>🎯</div>
            <h3 className={styles.ctaTitle}>Don't See Your Role?</h3>
            <p className={styles.ctaText}>
              We're always interested in meeting talented professionals. 
              Send us your resume and let's explore opportunities together.
            </p>
            <div className={styles.ctaButtons}>
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20general%20opportunities%20at%20Conversed%20Key.%20Please%20find%20my%20resume%20attached.`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.btnIcon}>📄</span>
                Submit Your Resume
              </motion.a>
              
              <motion.a
                href="mailto:careers@conversedkey.com"
                className={styles.ctaSecondaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.btnIcon}>📧</span>
                Email Us
              </motion.a>
            </div>
          </div>
          <div className={styles.ctaGlow} />
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className={styles.processSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h3 className={styles.processTitle}>Our Hiring Process</h3>
          <div className={styles.processSteps}>
            {[
              { number: "01", title: "Application Review", desc: "We review your profile within 48 hours" },
              { number: "02", title: "Initial Screening", desc: "Quick call to discuss your experience" },
              { number: "03", title: "Skills Assessment", desc: "Technical or role-specific evaluation" },
              { number: "04", title: "Final Interview", desc: "Meeting with the leadership team" },
              { number: "05", title: "Offer & Onboarding", desc: "Welcome to the team!" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className={styles.processStep}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
                {index < 4 && <div className={styles.stepConnector} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Careers;