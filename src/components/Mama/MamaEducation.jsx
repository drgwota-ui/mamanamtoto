import React from 'react';
import './MamaEducation.css';

function MamaEducation({ trimester }) {
  const articles = [
    { title: 'Lishe Bora kwa Mama', desc: 'Nini cha kula ukiwa mjamzito.', icon: '🍎' },
    { title: 'Mazoezi ya Viungo', desc: 'Mazoezi salama kwa trimester ya pili.', icon: '🧘‍♀️' },
    { title: 'Dalili za Hatari', desc: 'Wakati gani unapaswa kwenda hospitali.', icon: '⚠️' }
  ];

  return (
    <div className="education-list">
      <h3>Masomo ya Wiki {trimester * 12}</h3>
      {articles.map((art, index) => (
        <div key={index} className="edu-card glass">
          <div className="edu-icon">{art.icon}</div>
          <div className="edu-info">
            <h4>{art.title}</h4>
            <p>{art.desc}</p>
          </div>
          <button className="read-btn">Soma</button>
        </div>
      ))}
    </div>
  );
}

export default MamaEducation;
