import React from 'react';
import './AlertBanner.css';

function AlertBanner({ type, message }) {
  if (!message) return null;

  return (
    <div className={`alert-banner ${type} glass`}>
      <span className="alert-icon">
        {type === 'danger' ? '⚠️' : 'ℹ️'}
      </span>
      <p className="alert-message">{message}</p>
    </div>
  );
}

export default AlertBanner;
