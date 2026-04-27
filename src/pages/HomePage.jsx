import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Baby, Calendar, ChevronRight, Bell } from 'lucide-react';
import Navbar from '../components/common/Navbar.jsx';
import AlertBanner from '../components/Alerts/AlertBanner.jsx';
import './HomePage.css';

function HomePage() {
  const user = { name: 'Mama Maria' };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="page-container"
    >
      <Navbar />
      <div className="content">
        <header className="home-header">
          <div className="user-profile-mini">
            <div className="mini-avatar">👩🏾‍🦱</div>
            <div>
              <span className="greeting">Habari,</span>
              <h2 className="user-name">{user.name}</h2>
            </div>
          </div>
          <button className="notif-btn glass">
            <Bell size={20} />
          </button>
        </header>

        <AlertBanner type="info" message="Kumbuka: Kliniki yako ijayo ni tarehe 15 Mei." />
        
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="welcome-section"
        >
          <div className="status-card glass">
            <div className="status-info">
              <div className="tag">Kipindi cha Pili</div>
              <h3>Hali ya Ujauzito</h3>
              <p className="status-desc">Wiki ya 24 • Mtoto ana ukubwa wa Ndizi</p>
            </div>
            <div className="status-action">
              <Link to="/mama" className="btn-modern">
                Details <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </motion.section>

        <section className="quick-links">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/mama" className="link-card glass mama-gradient">
              <div className="icon-wrap">
                <Heart size={32} />
              </div>
              <div className="link-text">
                <span>MAMA</span>
                <p>Afya ya Uzazi</p>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/mtoto" className="link-card glass mtoto-gradient">
              <div className="icon-wrap">
                <Baby size={32} />
              </div>
              <div className="link-text">
                <span>MTOTO</span>
                <p>Afya ya Mtoto</p>
              </div>
            </Link>
          </motion.div>
        </section>

        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="reminders-preview"
        >
          <div className="section-header">
            <h3>Ratiba Yako</h3>
            <Link to="/reminders">Zote</Link>
          </div>
          <div className="reminder-item glass">
            <div className="rem-icon pink">
              <Calendar size={18} />
            </div>
            <div className="rem-content">
              <p>Chanjo ya Mtoto</p>
              <span>Mei 20, 2026</span>
            </div>
            <ChevronRight size={16} className="arrow" />
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default HomePage;
