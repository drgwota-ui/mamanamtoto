import React from 'react';
import './PregnancyTracker.css';

function PregnancyTracker() {
  const pregnancyData = {
    lmp: '2025-11-20',
    edd: '2026-08-27',
    weeks: 24,
    days: 3,
    trimester: 2
  };

  const progress = (pregnancyData.weeks / 40) * 100;

  return (
    <div className="tracker-group">
      <div className="tracker-card glass">
        <div className="tracker-header">
          <div className="week-badge glass">Wiki ya {pregnancyData.weeks}</div>
          <h3>Safari Yako</h3>
        </div>
        
        <div className="visual-progress">
          <div className="progress-bar-bg glass">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
              <div className="baby-marker">👶</div>
            </div>
          </div>
          <div className="progress-labels">
            <span>Mwanzo</span>
            <span>Maendeleo: {Math.round(progress)}%</span>
            <span>Kujifungua</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-box glass">
            <span className="stat-label">Siku zilizobaki</span>
            <span className="stat-value">112</span>
          </div>
          <div className="stat-box glass">
            <span className="stat-label">Trimester</span>
            <span className="stat-value">Ya 2</span>
          </div>
        </div>
      </div>

      <div className="info-card glass">
        <h4>Kuhusu Wiki Hii</h4>
        <p>Mtoto wako sasa ni mkubwa kama ndizi! Sasa unaweza kuanza kuhisi miondoko yake kwa urahisi zaidi.</p>
      </div>
    </div>
  );
}

export default PregnancyTracker;
