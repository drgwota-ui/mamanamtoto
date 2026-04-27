import React from 'react';
import './GrowthTracker.css';

function GrowthTracker() {
  const growthLogs = [
    { date: '2026-04-10', weight: '10.2 kg', height: '82 cm' },
    { date: '2026-03-05', weight: '9.8 kg', height: '80 cm' },
    { date: '2026-02-01', weight: '9.5 kg', height: '78 cm' }
  ];

  return (
    <div className="growth-container">
      <div className="growth-header">
        <h3>Historia ya Makuzi</h3>
        <button className="add-btn">+</button>
      </div>
      <div className="logs-list">
        {growthLogs.map((log, index) => (
          <div key={index} className="log-item glass">
            <div className="log-date">{log.date}</div>
            <div className="log-metrics">
              <span>{log.weight}</span>
              <span>{log.height}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrowthTracker;
