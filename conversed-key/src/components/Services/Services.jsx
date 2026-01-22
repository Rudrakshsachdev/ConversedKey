// import { useEffect, useRef, useState } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
// import styles from "./Services.module.css";

// function Services() {
//   const containerRef = useRef(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 });
//   const controls = useAnimation();

//   // Mouse move effect for background
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const xPos = (clientX / window.innerWidth - 0.5) * 20;
//       const yPos = (clientY / window.innerHeight - 0.5) * 20;
//       setMousePosition({ x: xPos, y: yPos });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Animate when in view
//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   const services = [
//     {
//       id: 1,
//       title: "Staffing Solutions",
//       description: "We provide reliable and skilled manpower solutions tailored to meet the dynamic workforce needs of businesses across industries.",
//       icon: "👥",
//       gradient: "linear-gradient(135deg, #4361ee, #3a0ca3)",
//       features: ["Temporary Staffing", "Permanent Placement", "Contract Workforce", "Industry Specialists"]
//     },
//     {
//       id: 2,
//       title: "Recruitment Services",
//       description: "Our recruitment experts help organizations identify, attract, and hire the right talent to drive long-term success.",
//       icon: "🎯",
//       gradient: "linear-gradient(135deg, #4cc9f0, #4361ee)",
//       features: ["Executive Search", "Technical Hiring", "Volume Recruitment", "Assessment Tools"]
//     },
//     {
//       id: 3,
//       title: "BPO Outsourcing",
//       description: "We offer efficient and scalable BPO outsourcing services that help businesses reduce costs while maintaining high service quality.",
//       icon: "⚡",
//       gradient: "linear-gradient(135deg, #7209b7, #4cc9f0)",
//       features: ["Customer Support", "Back-Office Operations", "Data Management", "Process Optimization"]
//     },
//     {
//       id: 4,
//       title: "Talent Development",
//       description: "Comprehensive training and development programs to upskill your workforce and maximize productivity.",
//       icon: "📈",
//       gradient: "linear-gradient(135deg, #f72585, #7209b7)",
//       features: ["Skill Assessment", "Training Programs", "Certification", "Performance Coaching"]
//     },
//     {
//       id: 5,
//       title: "HR Consulting",
//       description: "Strategic HR consulting services to optimize your human resource management and organizational development.",
//       icon: "💼",
//       gradient: "linear-gradient(135deg, #3a0ca3, #f72585)",
//       features: ["HR Strategy", "Policy Development", "Compliance", "Employee Engagement"]
//     },
//     {
//       id: 6,
//       title: "Payroll Management",
//       description: "End-to-end payroll processing and management solutions ensuring accuracy, compliance, and timely disbursement.",
//       icon: "💰",
//       gradient: "linear-gradient(135deg, #4361ee, #f72585)",
//       features: ["Payroll Processing", "Tax Compliance", "Reporting", "Employee Self-Service"]
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const handleGlowHover = (e) => {
//     const cards = document.querySelectorAll(".serviceGlowCard");
//     cards.forEach((card) => {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       card.style.setProperty("--mouse-x", `${x}px`);
//       card.style.setProperty("--mouse-y", `${y}px`);
//     });
//   };

//   return (
//     <motion.section
//       className={styles.services}
//       ref={containerRef}
//       initial="hidden"
//       animate={controls}
//       variants={containerVariants}
//       onMouseMove={handleGlowHover}
//     >
//       {/* Background Elements */}
//       <div className={styles.backgroundElements}>
//         <div
//           className={styles.animatedGrid}
//           style={{
//             transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
//           }}
//         />
//         <div className={styles.floatingShapes}>
//           <div className={styles.shape1} />
//           <div className={styles.shape2} />
//           <div className={styles.shape3} />
//         </div>
//         <div className={styles.gradientOverlay} />
//       </div>

//       <div className={styles.container}>
//         {/* Animated Section Header */}
//         <motion.div
//           className={styles.sectionHeader}
//           variants={itemVariants}
//         >
//           <motion.div
//             className={styles.sectionBadge}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Our Expertise
//           </motion.div>

//           <motion.h2
//             className={styles.heading}
//             variants={itemVariants}
//           >
//             Comprehensive
//             <span className={styles.gradientText}> Workforce </span>
//             Solutions
//           </motion.h2>

//           <motion.p
//             className={styles.subheading}
//             variants={itemVariants}
//           >
//             We deliver innovative staffing and HR solutions that transform businesses and
//             empower talent through cutting-edge technology and strategic expertise.
//           </motion.p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className={styles.servicesGrid}>
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               className={`${styles.serviceCard} serviceGlowCard`}
//               variants={itemVariants}
//               custom={index}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.2 }
//               }}
//               onMouseEnter={() => setHoveredCard(service.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//               style={{
//                 '--card-gradient': service.gradient
//               }}
//             >
//               <div className={styles.cardHeader}>
//                 <motion.div
//                   className={styles.iconWrapper}
//                   animate={hoveredCard === service.id ? { rotate: 10, scale: 1.1 } : { rotate: 0, scale: 1 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                 >
//                   <span className={styles.icon}>{service.icon}</span>
//                 </motion.div>
//                 <div className={styles.titleWrapper}>
//                   <h3 className={styles.title}>{service.title}</h3>
//                   <div className={styles.titleUnderline} />
//                 </div>
//               </div>

//               <p className={styles.description}>{service.description}</p>

//               <div className={styles.featuresList}>
//                 {service.features.map((feature, idx) => (
//                   <motion.span
//                     key={idx}
//                     className={styles.feature}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.5 + (idx * 0.1) }}
//                   >
//                     ✓ {feature}
//                   </motion.span>
//                 ))}
//               </div>

//               <motion.div
//                 className={styles.cardGlow}
//                 animate={hoveredCard === service.id ? { opacity: 1 } : { opacity: 0 }}
//               />

//               <div className={styles.cardBackground} />
//             </motion.div>
//           ))}
//         </div>

//         {/* Process Visualization */}
//         <motion.div
//           className={styles.processSection}
//           variants={itemVariants}
//         >
//           <h3 className={styles.processTitle}>Our Process</h3>
//           <div className={styles.processSteps}>
//             {[
//               { step: "01", title: "Assessment", desc: "Needs Analysis" },
//               { step: "02", title: "Strategy", desc: "Custom Planning" },
//               { step: "03", title: "Implementation", desc: "Solution Deployment" },
//               { step: "04", title: "Support", desc: "Ongoing Management" }
//             ].map((step, index) => (
//               <motion.div
//                 key={step.step}
//                 className={styles.processStep}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 + (index * 0.1) }}
//               >
//                 <div className={styles.stepNumber}>{step.step}</div>
//                 <h4 className={styles.stepTitle}>{step.title}</h4>
//                 <p className={styles.stepDesc}>{step.desc}</p>
//                 {index < 3 && <div className={styles.stepConnector} />}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className={styles.ctaSection}
//           variants={itemVariants}
//         >
//           <motion.div
//             className={styles.ctaCard}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 1.2 }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className={styles.ctaContent}>
//               <h3 className={styles.ctaTitle}>Ready to Transform Your Workforce?</h3>
//               <p className={styles.ctaText}>
//                 Let's discuss how our tailored solutions can drive your business forward.
//               </p>
//             </div>
//             <motion.button
//               className={styles.ctaButton}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>Get Free Consultation</span>
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </motion.button>
//             <div className={styles.ctaGlow} />
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// export default Services;

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import styles from "./Services.module.css";

function Services() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [selectedService, setSelectedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModal, setActiveModal] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [savedStates, setSavedStates] = useState({});
  
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  
  // Performance: Debounced mouse movement
  const mouseMoveTimeout = useRef(null);
  
  const handleMouseMove = useCallback((e) => {
    if (mouseMoveTimeout.current) {
      cancelAnimationFrame(mouseMoveTimeout.current);
    }
    
    mouseMoveTimeout.current = requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x: xPos, y: yPos });
    });
  }, []);

  // Performance: Optimized mouse tracking
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseMoveTimeout.current) {
        cancelAnimationFrame(mouseMoveTimeout.current);
      }
    };
  }, [handleMouseMove]);

  // Initialize animations
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const sectionTop = containerRef.current?.offsetTop || 0;
      const sectionHeight = containerRef.current?.offsetHeight || 1;
      const progress = (scrollTop - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Services data with enhanced details
  const services = [
    {
      id: 1,
      title: "Staffing Solutions",
      description: "We provide reliable and skilled manpower solutions tailored to meet the dynamic workforce needs of businesses across industries.",
      icon: "👥",
      gradient: "linear-gradient(135deg, #4361ee, #3a0ca3)",
      features: ["Temporary Staffing", "Permanent Placement", "Contract Workforce", "Industry Specialists"],
      category: "staffing",
      stats: { clients: "500+", satisfaction: "98%", speed: "24h" },
      color: "#4361ee",
      tags: ["flexible", "scalable", "quick"],
      details: {
        timeline: "1-3 days",
        pricing: "Competitive rates",
        requirements: "Varies by role"
      }
    },
    {
      id: 2,
      title: "Recruitment Services",
      description: "Our recruitment experts help organizations identify, attract, and hire the right talent to drive long-term success.",
      icon: "🎯",
      gradient: "linear-gradient(135deg, #4cc9f0, #4361ee)",
      features: ["Executive Search", "Technical Hiring", "Volume Recruitment", "Assessment Tools"],
      category: "recruitment",
      stats: { placements: "10K+", retention: "95%", accuracy: "99%" },
      color: "#4cc9f0",
      tags: ["precision", "fast", "quality"],
      details: {
        timeline: "2-4 weeks",
        pricing: "Success-based",
        requirements: "Job description needed"
      }
    },
    {
      id: 3,
      title: "BPO Outsourcing",
      description: "We offer efficient and scalable BPO outsourcing services that help businesses reduce costs while maintaining high service quality.",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #7209b7, #4cc9f0)",
      features: ["Customer Support", "Back-Office Operations", "Data Management", "Process Optimization"],
      category: "consulting",
      stats: { efficiency: "40%+", savings: "60%+", uptime: "99.9%" },
      color: "#7209b7",
      tags: ["efficient", "reliable", "scalable"],
      details: {
        timeline: "1-2 weeks setup",
        pricing: "Monthly subscription",
        requirements: "Process documentation"
      }
    },
    {
      id: 4,
      title: "Talent Development",
      description: "Comprehensive training and development programs to upskill your workforce and maximize productivity.",
      icon: "📈",
      gradient: "linear-gradient(135deg, #f72585, #7209b7)",
      features: ["Skill Assessment", "Training Programs", "Certification", "Performance Coaching"],
      category: "staffing",
      stats: { trained: "2K+", improvement: "75%+", completion: "98%" },
      color: "#f72585",
      tags: ["growth", "certified", "measurable"],
      details: {
        timeline: "Ongoing",
        pricing: "Per program",
        requirements: "Skill gap analysis"
      }
    },
    {
      id: 5,
      title: "HR Consulting",
      description: "Strategic HR consulting services to optimize your human resource management and organizational development.",
      icon: "💼",
      gradient: "linear-gradient(135deg, #3a0ca3, #f72585)",
      features: ["HR Strategy", "Policy Development", "Compliance", "Employee Engagement"],
      category: "consulting",
      stats: { clients: "200+", compliance: "100%", satisfaction: "96%" },
      color: "#3a0ca3",
      tags: ["strategic", "compliant", "engaging"],
      details: {
        timeline: "Project-based",
        pricing: "Consultation fee",
        requirements: "Business goals"
      }
    },
    {
      id: 6,
      title: "Payroll Management",
      description: "End-to-end payroll processing and management solutions ensuring accuracy, compliance, and timely disbursement.",
      icon: "💰",
      gradient: "linear-gradient(135deg, #4361ee, #f72585)",
      features: ["Payroll Processing", "Tax Compliance", "Reporting", "Employee Self-Service"],
      category: "recruitment",
      stats: { processed: "50K+", accuracy: "99.9%", compliance: "100%" },
      color: "#4361ee",
      tags: ["accurate", "timely", "compliant"],
      details: {
        timeline: "Monthly",
        pricing: "Per employee",
        requirements: "Employee data"
      }
    }
  ];

  // Filter services based on active tab and search
  const filteredServices = services.filter(service => {
    const matchesTab = activeTab === "all" || service.category === activeTab;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Save service state (simulating backend save)
  const saveServiceState = (serviceId, state) => {
    setSavedStates(prev => ({
      ...prev,
      [serviceId]: state
    }));
  };

  // Interactive drag handler
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    const dragDistance = Math.sqrt(
      Math.pow(e.clientX - dragStart.x, 2) + 
      Math.pow(e.clientY - dragStart.y, 2)
    );
    
    if (dragDistance > 50) {
      // Trigger special effect on long drag
      console.log("Long drag detected!");
    }
  };

  // Modal component
  const ServiceModal = ({ service, onClose }) => (
    <motion.div 
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={styles.modalContent}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose}>×</button>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className={styles.modalDetails}>
          {Object.entries(service.details).map(([key, value]) => (
            <div key={key} className={styles.detailItem}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section 
      id="services"
      className={styles.services}
      ref={containerRef}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Interactive Background Elements */}
      <div className={styles.interactiveBackground}>
        <div 
          className={styles.dynamicGrid}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            opacity: 0.2 + scrollProgress * 0.3
          }}
        />
        
        {/* Interactive Particles (Performance Optimized) */}
        <div className={styles.performanceParticles}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className={styles.performanceParticle}
              style={{
                animationDelay: `${i * 0.5}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `hsl(${200 + i * 10}, 100%, 70%)`
              }}
            />
          ))}
        </div>

        {/* Interactive Connection Lines */}
        <div className={styles.connectionLines}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className={styles.connectionLine}
              style={{
                animationDelay: `${i * 0.3}s`,
                transform: `rotate(${i * 45}deg)`
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        {/* Interactive Header */}
        <div className={styles.interactiveHeader}>
          <motion.div 
            className={styles.headerBadge}
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            Interactive Services
          </motion.div>

          <motion.h2 
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our <span className={styles.highlight}>Interactive</span> Solutions
          </motion.h2>

          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Click, hover, drag, and interact with each service card to discover features
          </motion.p>

          {/* Interactive Controls */}
          <div className={styles.interactiveControls}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>🔍</button>
            </div>

            <div className={styles.viewControls}>
              <button 
                className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
                onClick={() => setViewMode('grid')}
              >
                Grid
              </button>
              <button 
                className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
                onClick={() => setViewMode('list')}
              >
                List
              </button>
            </div>

            <div className={styles.filterChips}>
              {['all', 'staffing', 'recruitment', 'consulting'].map(category => (
                <motion.button
                  key={category}
                  className={`${styles.filterChip} ${activeTab === category ? styles.active : ''}`}
                  onClick={() => setActiveTab(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  {activeTab === category && (
                    <motion.div 
                      className={styles.activeGlow}
                      layoutId="activeGlow"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Service Cards */}
        <div className={`${styles.servicesContainer} ${viewMode === 'list' ? styles.listView : ''}`}>
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.interactiveCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                '--card-color': service.color,
                zIndex: hoveredCard === service.id ? 100 : 1
              }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <motion.div 
                  className={styles.cardIcon}
                  animate={hoveredCard === service.id ? { 
                    rotate: 360,
                    scale: 1.2 
                  } : { 
                    rotate: 0,
                    scale: 1 
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                
                <div className={styles.cardTitleSection}>
                  <h3>{service.title}</h3>
                  <div className={styles.cardTags}>
                    {service.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                
                <motion.button 
                  className={styles.cardMenu}
                  whileHover={{ rotate: 90 }}
                >
                  ⋮
                </motion.button>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <p>{service.description}</p>
                
                <div className={styles.statsContainer}>
                  {Object.entries(service.stats).map(([key, value]) => (
                    <motion.div 
                      key={key}
                      className={styles.stat}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={styles.statValue}>{value}</div>
                      <div className={styles.statLabel}>{key}</div>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.featuresGrid}>
                  {service.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      className={styles.feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: service.color + '20'
                      }}
                    >
                      <span className={styles.featureIcon}>✓</span>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interactive Card Footer */}
              <div className={styles.cardFooter}>
                <motion.a 
                  href={`https://wa.me/917667703866?text=Hello%20Conversed%20Key%20Team,%20I%20would%20like%20to%20learn%20more%20about%20your%20${encodeURIComponent(service.title)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionButton}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 20px ${service.color}40`
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
                
                <div className={styles.cardActions}>
                  <motion.button 
                    className={styles.smallAction}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    onClick={() => saveServiceState(service.id, 'saved')}
                  >
                    💾
                  </motion.button>
                  <motion.button 
                    className={styles.smallAction}
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    📌
                  </motion.button>
                  <motion.button 
                    className={styles.smallAction}
                    whileHover={{ scale: 1.2 }}
                  >
                    📤
                  </motion.button>
                </div>
              </div>

              {/* Interactive Effects */}
              <motion.div 
                className={styles.cardGlow}
                animate={hoveredCard === service.id ? { 
                  opacity: 0.6,
                  scale: 1.1 
                } : { 
                  opacity: 0,
                  scale: 1 
                }}
              />
              
              <div className={styles.cardHighlight} />
              
              {/* Connection Points */}
              <div className={styles.connectionPoints}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className={styles.connectionPoint} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Comparison Tool */}
        <motion.div 
          className={styles.comparisonTool}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className={styles.comparisonTitle}>Compare Services</h3>
          <div className={styles.comparisonGrid}>
            {services.slice(0, 3).map(service => (
              <motion.div 
                key={service.id}
                className={styles.comparisonItem}
                whileHover={{ scale: 1.05 }}
              >
                <h4>{service.title}</h4>
                <div className={styles.comparisonBars}>
                  {Object.values(service.stats).map((value, i) => (
                    <div key={i} className={styles.comparisonBar}>
                      <motion.div 
                        className={styles.barFill}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 80 + 20}%` }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        style={{ background: service.color }}
                      />
                    </div>
                  ))}
                </div>
                <button 
                  className={styles.compareButton}
                  onClick={() => console.log(`Comparing ${service.title}`)}
                >
                  Compare
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Quiz */}
        <motion.div 
          className={styles.interactiveQuiz}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Which Service Fits Your Needs?</h3>
          <div className={styles.quizQuestions}>
            {[
              { q: "Need quick staffing?", options: ["Yes", "No"] },
              { q: "Looking for long-term solutions?", options: ["Yes", "No"] },
              { q: "Budget constraints?", options: ["Yes", "No"] }
            ].map((question, i) => (
              <motion.div 
                key={i}
                className={styles.quizQuestion}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <p>{question.q}</p>
                <div className={styles.quizOptions}>
                  {question.options.map((option, j) => (
                    <motion.button
                      key={j}
                      className={styles.quizOption}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.button 
            className={styles.quizSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Recommendation
          </motion.button>
        </motion.div>

        {/* Stats Counter */}
        <motion.div 
          className={styles.statsCounter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "500+", label: "Happy Clients", icon: "😊" },
            { value: "10K+", label: "Successful Placements", icon: "🎯" },
            { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
            { value: "24/7", label: "Support Available", icon: "🔄" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {activeModal && (
          <ServiceModal 
            service={activeModal} 
            onClose={() => setActiveModal(null)} 
          />
        )}
      </AnimatePresence>

      {/* Interactive Floating Elements */}
      <div className={styles.floatingElements}>
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.floatingElement}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              animationDelay: `${i * 2}s`,
              background: `conic-gradient(from ${i * 72}deg, #4361ee, #4cc9f0, #7209b7, #f72585)`
            }}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <motion.div 
        className={styles.progressIndicator}
        style={{ scaleX: scrollProgress }}
      />
    </section>
  );
}

export default Services;