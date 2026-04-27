import React, { useState } from 'react';
import './VitalSignsInput.css';

function VitalSignsInput() {
  const [vitals, setVitals] = useState({
    bp_sys: '',
    bp_dia: '',
    weight: '',
    symptoms: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Takwimu zimehifadhiwa!');
  };

  return (
    <div className="vitals-form glass">
      <h3>Ingiza Vipimo</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label>BP (Systolic)</label>
            <input 
              type="number" 
              placeholder="120"
              value={vitals.bp_sys}
              onChange={(e) => setVitals({...vitals, bp_sys: e.target.value})}
            />
          </div>
          <div className="input-group">
            <label>BP (Diastolic)</label>
            <input 
              type="number" 
              placeholder="80"
              value={vitals.bp_dia}
              onChange={(e) => setVitals({...vitals, bp_dia: e.target.value})}
            />
          </div>
        </div>
        <div className="input-group">
          <label>Uzito (kg)</label>
          <input 
            type="number" 
            placeholder="65"
            value={vitals.weight}
            onChange={(e) => setVitals({...vitals, weight: e.target.value})}
          />
        </div>
        <div className="input-group">
          <label>Dalili (Maumivu yoyote?)</label>
          <textarea 
            placeholder="Elezea unavyohisi..."
            value={vitals.symptoms}
            onChange={(e) => setVitals({...vitals, symptoms: e.target.value})}
          />
        </div>
        <button type="submit" className="save-btn">Hifadhi</button>
      </form>
    </div>
  );
}

export default VitalSignsInput;
