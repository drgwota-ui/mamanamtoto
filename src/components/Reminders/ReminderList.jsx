import React from 'react';
import './ReminderList.css';

function ReminderList() {
  const reminders = [
    { title: 'Kunywa Vidonge vya Folic Acid', time: 'Kila asubuhi' },
    { title: 'Kliniki ijayo', time: '15 Mei, 2026' }
  ];

  return (
    <div className="reminders-list">
      {reminders.map((rem, index) => (
        <div key={index} className="reminder-card glass">
          <div className="rem-dot"></div>
          <div className="rem-info">
            <h4>{rem.title}</h4>
            <p>{rem.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReminderList;
