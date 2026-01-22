import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from './Contact.module.css';

const whatsappNumber = '917667703866'; // replace with company WhatsApp number
const companyEmail = 'team@conversedkey.com'; // replace with official email
const companyPhone = '+91 7667703866'; // replace with official phone

function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
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

  const contactCategories = [
    { id: 'general', label: 'General Inquiry', icon: '💬' },
    { id: 'hiring', label: 'Hiring Needs', icon: '👥' },
    { id: 'career', label: 'Career Opportunities', icon: '💼' },
    { id: 'partnership', label: 'Partnership', icon: '🤝' },
    { id: 'support', label: 'Support', icon: '🛠️' },
  ];

  const contactInfo = [
    { icon: '📍', title: 'Visit Our Office', details: ['704, 7th floor,  Sector 16', 'Palm Court, Gurugram, Haryana 122007', 'India'], link: 'https://maps.google.com' },
    { icon: '📞', title: 'Call Us', details: [companyPhone, 'Mon - Fri: 9:00 AM - 6:00 PM'], link: `tel:${companyPhone}` },
    { icon: '✉️', title: 'Email Us', details: [companyEmail, 'Response within 24 hours'], link: `mailto:${companyEmail}` },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get the selected category label
    const categoryLabel = contactCategories.find(c => c.id === formData.category)?.label || formData.category;
    
    // Build WhatsApp message with form data
    const whatsappMessage = `Hello Conversed Key Team,

*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Category:* ${categoryLabel}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form after redirect
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.section 
      id="contact"
      className={styles.contact}
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div 
          className={styles.contactGrid}
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />
        <div className={styles.contactOrb1} />
        <div className={styles.contactOrb2} />
        <div className={styles.contactOrb3} />
        
        {/* Animated Lines */}
        <div className={styles.animatedLines}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={styles.line} style={{ animationDelay: `${i * 0.5}s` }} />
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
            <span className={styles.badgeIcon}>📞</span>
            <span className={styles.badgeText}>Get In Touch</span>
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Start a{" "}
            <span className={styles.gradientText}>Conversation</span>
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We're here to help. Reach out to us through any channel, and our team will 
            connect with you promptly to discuss your needs.
          </motion.p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className={styles.contactGridSection}>
          {/* Quick Contact Cards */}
          <motion.div 
            className={styles.quickContact}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={styles.sectionTitle}>Quick Connect</h3>
            
            {/* WhatsApp Card */}
            <motion.div 
              className={styles.contactCard}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon} style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                  <span className={styles.icon}>💬</span>
                  <div className={styles.iconGlow} />
                </div>
                <div className={styles.cardTitleContent}>
                  <h4 className={styles.cardTitle}>WhatsApp Chat</h4>
                  <p className={styles.cardSubtitle}>Instant Support</p>
                </div>
              </div>
              <p className={styles.cardDescription}>
                Get immediate assistance for hiring needs, job opportunities, 
                or general inquiries. Our team responds within minutes.
              </p>
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Conversed%20Key%20Team,%20I%20would%20like%20to%20connect%20with%20you%20regarding%20[Your%20Inquiry].`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.btnIcon}>💬</span>
                Start Chat on WhatsApp
                <span className={styles.btnArrow}>→</span>
                <div className={styles.buttonGlow} />
              </motion.a>
            </motion.div>

            {/* Contact Info Cards */}
            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className={styles.infoCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <h5 className={styles.infoTitle}>{info.title}</h5>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={styles.infoDetail}>{detail}</p>
                    ))}
                  </div>
                  <a href={info.link} className={styles.infoLink}>
                    <span className={styles.linkArrow}>↗</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className={styles.contactFormSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSubtitle}>
                  Fill out the form below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                {/* Category Selection */}
                <div className={styles.categorySelector}>
                  <label className={styles.categoryLabel}>What would you like to discuss?</label>
                  <div className={styles.categoryButtons}>
                    {contactCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        className={`${styles.categoryBtn} ${formData.category === category.id ? styles.activeCategory : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, category: category.id }))}
                      >
                        <span className={styles.categoryIcon}>{category.icon}</span>
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      <span className={styles.labelIcon}>👤</span>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      <span className={styles.labelIcon}>✉️</span>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>
                      <span className={styles.labelIcon}>📱</span>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      <span className={styles.labelIcon}>📝</span>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    <span className={styles.labelIcon}>💭</span>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formTextarea}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner} />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className={styles.submitArrow}>→</span>
                    </>
                  )}
                  <div className={styles.submitGlow} />
                </motion.button>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className={styles.successIcon}>✅</span>
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
            <div className={styles.formGlow} />
          </motion.div>
        </div>

        {/* Response Time Cards */}
        <motion.div 
          className={styles.responseSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className={styles.responseTitle}>Our Response Times</h3>
          <div className={styles.responseCards}>
            {[
              { icon: '⚡', title: 'WhatsApp', time: 'Within minutes', desc: 'Instant chat support during business hours' },
              { icon: '📧', title: 'Email', time: 'Within 24 hours', desc: 'Detailed responses via email' },
              { icon: '📞', title: 'Phone Call', time: '1-2 business days', desc: 'Scheduled callback for in-depth discussions' },
              { icon: '💼', title: 'Business Proposals', time: '2-3 business days', desc: 'Comprehensive proposals for partnerships' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={styles.responseCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.responseIcon}>{item.icon}</div>
                <h4 className={styles.responseCardTitle}>{item.title}</h4>
                <div className={styles.responseTime}>{item.time}</div>
                <p className={styles.responseDesc}>{item.desc}</p>
                <div className={styles.responseGlow} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className={styles.faqSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
          <div className={styles.faqGrid}>
            {[
              {
                question: "What types of staffing services do you offer?",
                answer: "We provide comprehensive staffing solutions including permanent placements, contract staffing, executive search, and bulk hiring across IT, HR, and BPO sectors."
              },
              {
                question: "How quickly can you fill a job position?",
                answer: "Typically within 2-4 weeks, depending on role complexity and requirements. We maintain a large talent database for faster placements."
              },
              {
                question: "Do you offer both remote and on-site opportunities?",
                answer: "Yes, we provide flexible work options including remote, hybrid, and on-site positions based on client requirements and candidate preferences."
              },
              {
                question: "What makes Conversed Key different from other agencies?",
                answer: "Our deep industry expertise, personalized approach, and commitment to long-term relationships set us apart. We focus on quality matches over quantity."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className={styles.faqQuestion}>
                  <span className={styles.faqIcon}>❓</span>
                  {faq.question}
                </div>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;