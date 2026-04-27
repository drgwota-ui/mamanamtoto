import React from 'react';
import { Calendar, User } from 'lucide-react';
import './ChildProfile.css';

function ChildProfile() {
  const child = {
    name: 'Baraka',
    dob: '2025-01-10',
    age: 'Miezi 15',
    gender: 'Mvulana'
  };

  return (
    <div className="child-card-modern glass">
      <div className="child-header-side">
        <div className="child-avatar-modern">👶</div>
        <div className="gender-tag">{child.gender}</div>
      </div>
      <div className="child-body-side">
        <h2>{child.name}</h2>
        <div className="child-meta">
          <div className="meta-item">
            <Calendar size={14} />
            <span>{child.dob}</span>
          </div>
          <div className="meta-item">
            <User size={14} />
            <span>{child.age}</span>
          </div>
        </div>
        <div className="child-actions">
          <button className="btn-outline">Edit Wasifu</button>
        </div>
      </div>
    </div>
  );
}

export default ChildProfile;
