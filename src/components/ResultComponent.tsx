import React from 'react';

interface ResultComponentProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultComponent: React.FC<ResultComponentProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const getMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage === 100) {
      return "Perfekt! Du bist ein Präpositions-Profi! 🏆";
    } else if (percentage >= 80) {
      return "Super gemacht! Du bist richtig gut! 🌟";
    } else if (percentage >= 60) {
      return "Gut gemacht! Weiter so! 👍";
    } else if (percentage >= 40) {
      return "Das war schon nicht schlecht! 💪";
    } else {
      return "Üben macht den Meister! 📚";
    }
  };

  return (
    <div className="card result-card slide-in">
      <h2 style={{ fontSize: '2rem', color: 'var(--primary)' }}>
        Quiz beendet! 🎉
      </h2>
      <div className="result-score">
        {score} / {totalQuestions}
      </div>
      <div className="result-message">{getMessage()}</div>
      <button className="btn" onClick={onRestart}>
        Noch einmal spielen 🔄
      </button>
    </div>
  );
};

export default ResultComponent;