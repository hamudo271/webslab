import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play, Youtube, Film, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            UNIVERLAB
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Creative Video Editing Agency
          </motion.p>
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span>SCROLL</span>
            <div className="line"></div>
          </motion.div>
        </div>
        <div className="hero-bg"></div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span>WHO WE ARE</span>
              <h2>We create value<br />through video.</h2>
            </div>
            <div className="about-content">
              <p>
                유니버랩은 단순한 영상 편집을 넘어,<br />
                브랜드의 가치를 담아내는 크리에이티브 파트너입니다.<br />
                트렌디한 감각과 전문적인 기술로<br />
                당신의 상상을 현실로 만들어드립니다.
              </p>
              <Link to="/about" className="btn-link">
                MORE ABOUT US <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span>OUR SERVICES</span>
              <h2>What we do</h2>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <Youtube size={40} />
                <h3>YouTube Editing</h3>
                <p>유튜브 채널의 성장을 위한<br />트렌디한 편집과 기획</p>
              </div>
              <div className="service-card">
                <Film size={40} />
                <h3>Commercial</h3>
                <p>브랜드 이미지를 높이는<br />고퀄리티 홍보 영상</p>
              </div>
              <div className="service-card">
                <Monitor size={40} />
                <h3>Motion Graphics</h3>
                <p>영상의 몰입도를 높이는<br />화려한 모션 그래픽</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section portfolio-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span>PORTFOLIO</span>
              <h2>Recent Works</h2>
            </div>
            <div className="portfolio-grid">
              {/* Placeholder items - replace with real data later */}
              <div className="portfolio-item">
                <div className="portfolio-thumb"></div>
                <div className="portfolio-info">
                  <h3>Project Title 01</h3>
                  <p>YouTube / Entertainment</p>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-thumb"></div>
                <div className="portfolio-info">
                  <h3>Project Title 02</h3>
                  <p>Commercial / Brand</p>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-thumb"></div>
                <div className="portfolio-info">
                  <h3>Project Title 03</h3>
                  <p>Motion Graphic</p>
                </div>
              </div>
            </div>
            <div className="center-btn">
              <Link to="/portfolio" className="btn-outline">
                VIEW ALL PROJECTS
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="contact-banner">
        <div className="container">
          <FadeInSection>
            <h2>Ready to start a project?</h2>
            <p>당신의 이야기를 영상으로 만들어보세요.</p>
            <Link to="/contact" className="btn-primary">
              CONTACT US
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
