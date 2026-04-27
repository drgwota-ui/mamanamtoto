import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'mother' // mother or caregiver
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration
    navigate('/');
  };

  return (
    <div className="register-container">
      <div className="register-card glass">
        <h1>Jisajili</h1>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Jina Kamili</label>
            <input 
              type="text" 
              placeholder="Ingiza jina lako" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="input-group">
            <label>Namba ya Simu</label>
            <input 
              type="tel" 
              placeholder="06XXXXXXXX" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          <div className="input-group">
            <label>Wewe ni nani?</label>
            <select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="mother">Mama Mjamzito / Mwenye Mtoto</option>
              <option value="caregiver">Mlezi</option>
            </select>
          </div>
          <button type="submit" className="register-btn">Anza Sasa</button>
        </form>
        <button className="text-btn" onClick={() => navigate('/login')}>Tayari una akaunti? Ingia</button>
      </div>
    </div>
  );
}

export default Register;
