import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, TrendingUp, Syringe } from 'lucide-react';
import Navbar from '../components/common/Navbar.jsx';
import ChildProfile from '../components/Mtoto/ChildProfile.jsx';
import GrowthTracker from '../components/Mtoto/GrowthTracker.jsx';
import './MtotoPage.css';

function MtotoPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="page-container"
    >
      <Navbar />
      <header className="mtoto-header">
        <h1>MTOTO</h1>
        <p>Afya na Makuzi ya Mtoto</p>
      </header>

      <div className="mtoto-tabs-nav">
        <button 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => setActiveTab('profile')}
        >
          <User size={18} />
          <span>Wasifu</span>
        </button>
        <button 
          className={activeTab === 'growth' ? 'active' : ''} 
          onClick={() => setActiveTab('growth')}
        >
          <TrendingUp size={18} />
          <span>Makuzi</span>
        </button>
        <button 
          className={activeTab === 'vaccine' ? 'active' : ''} 
          onClick={() => setActiveTab('vaccine')}
        >
          <Syringe size={18} />
          <span>Chanjo</span>
        </button>
      </div>

      <motion.div 
        key={activeTab}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mtoto-content"
      >
        {activeTab === 'profile' && <ChildProfile />}
        {activeTab === 'growth' && <GrowthTracker />}
        {activeTab === 'vaccine' && (
          <div className="placeholder-card glass">
            <Syringe size={48} className="placeholder-icon" />
            <p>Kalenda ya chanjo inakuja hivi karibuni.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default MtotoPage;
