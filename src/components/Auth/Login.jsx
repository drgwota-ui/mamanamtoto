import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';
import './Login.css';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login for now
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="login-card-modern glass"
      >
        <div className="logo-area">
          <div className="logo-icon">🌿</div>
          <h1>MAMA na MTOTO</h1>
        </div>
        
        <div className="welcome-text">
          <h2>Karibu Tena</h2>
          <p>Tafadhali ingia ili kuendelea na safari yako</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group-modern">
            <label>Namba ya Simu</label>
            <div className="input-wrapper glass">
              <Phone size={20} className="input-icon" />
              <input 
                type="tel" 
                placeholder="06XXXXXXXX" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="login-btn-modern"
          >
            <span>Ingia</span>
            <ArrowRight size={20} />
          </motion.button>
        </form>

        <button className="register-text-btn" onClick={() => navigate('/register')}>
          Huna akaunti? <span>Jisajili hapa</span>
        </button>
      </motion.div>
    </div>
  );
}

export default Login;
