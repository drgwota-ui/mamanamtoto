import React from 'react';
import { motion } from 'motion/react';
import { Globe, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import Navbar from '../components/common/Navbar.jsx';
import './ProfilePage.css';

function ProfilePage() {
  const user = {
    name: 'Mama Maria',
    phone: '0654123456',
    role: 'Mama'
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="page-container"
    >
      <Navbar />
      <header className="profile-header">
        <h1>Wasifu</h1>
      </header>

      <div className="profile-content">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="profile-header-card glass"
        >
          <div className="profile-avatar-wrap">
            <div className="avatar">👩🏾‍🦱</div>
          </div>
          <h2>{user.name}</h2>
          <div className="profile-badge">{user.role}</div>
          <p className="phone">{user.phone}</p>
        </motion.div>

        <div className="settings-list">
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="settings-item-modern glass"
          >
            <div className="item-icon-wrap blue">
              <Globe size={20} />
            </div>
            <div className="item-info">
              <span>Lugha / Language</span>
              <p>Kiswahili</p>
            </div>
            <ChevronRight size={18} className="arrow" />
          </motion.div>

          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="settings-item-modern glass"
          >
            <div className="item-icon-wrap green">
              <HelpCircle size={20} />
            </div>
            <div className="item-info">
              <span>Msaada</span>
              <p>Pata maelekezo ya matumizi</p>
            </div>
            <ChevronRight size={18} className="arrow" />
          </motion.div>

          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="logout-btn-modern glass"
          >
            <LogOut size={20} />
            <span>Ondoka kwenye akaunti</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
