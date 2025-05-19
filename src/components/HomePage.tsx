import React from 'react';

interface HomePageProps {
  onStartQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="card slide-in">
               <h1>Deutsche Präpositionen</h1>

      <p className="home-subtitle">
        Lerne Deutsch mit diesem lustigen Quiz! 
       
      </p>
      
      <div className="instructions">
        <h2 style={{ fontSize: '1.4rem', margin: '1rem 0', color: 'var(--primary)' }}>
          So geht's: <span className="emoji">📝</span>
        </h2>
        <ul style={{ listStyle: 'none', padding: '0 0 1rem 0' }}>
          <li style={{ margin: '0.8rem 0', display: 'flex', alignItems: 'center' }}>
            <span className="emoji">🎯</span>
            <span>10 Fragen pro Runde</span>
          </li>
          <li style={{ margin: '0.8rem 0', display: 'flex', alignItems: 'center' }}>
            <span className="emoji">⭐</span>
            <span>1 Punkt pro richtiger Antwort</span>
          </li>
          <li style={{ margin: '0.8rem 0', display: 'flex', alignItems: 'center' }}>
            <span className="emoji">💡</span>
            <span>Lerne aus deinen Fehlern</span>
          </li>
          <li style={{ margin: '0.8rem 0', display: 'flex', alignItems: 'center' }}>
            <span className="emoji">🏆</span>
            <span>Sieh am Ende deine Punktzahl</span>
          </li>
        </ul>
      </div>
      
      <button 
        className="btn btn-secondary animate-pulse" 
        onClick={onStartQuiz}
      >
        Los geht's! 🚀
      </button>
    </div>
  );
};

export default HomePage;