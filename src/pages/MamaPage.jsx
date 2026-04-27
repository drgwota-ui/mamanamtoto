import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, BookOpen, CalendarCheck } from 'lucide-react';
import Navbar from '../components/common/Navbar.jsx';
import PregnancyTracker from '../components/Mama/PregnancyTracker.jsx';
import VitalSignsInput from '../components/Mama/VitalSignsInput.jsx';
import MamaEducation from '../components/Mama/MamaEducation.jsx';
import './MamaPage.css';

function MamaPage() {
  const [activeTab, setActiveTab] = useState('tracker');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="page-container"
    >
      <Navbar />
      <header className="mama-header">
        <h1>MAMA</h1>
        <p>Afya ya Mama Mjamzito</p>
      </header>
      
      <div className="mama-tabs-nav">
        <button 
          className={activeTab === 'tracker' ? 'active' : ''} 
          onClick={() => setActiveTab('tracker')}
        >
          <CalendarCheck size={18} />
          <span>Kufuatilia</span>
        </button>
        <button 
          className={activeTab === 'vitals' ? 'active' : ''} 
          onClick={() => setActiveTab('vitals')}
        >
          <Activity size={18} />
          <span>Afya Yako</span>
        </button>
        <button 
          className={activeTab === 'edu' ? 'active' : ''} 
          onClick={() => setActiveTab('edu')}
        >
          <BookOpen size={18} />
          <span>Elimu</span>
        </button>
      </div>

      <motion.div 
        key={activeTab}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mama-content"
      >
        {activeTab === 'tracker' && <PregnancyTracker />}
        {activeTab === 'vitals' && <VitalSignsInput />}
        {activeTab === 'edu' && <MamaEducation trimester={2} />}
      </motion.div>
    </motion.div>
  );
}

export default MamaPage;
