import React from 'react';

interface AnswerModalProps {
  isCorrect: boolean;
  explanation: string;
  onNextQuestion: () => void;
}

const AnswerModal: React.FC<AnswerModalProps> = ({
  isCorrect,
  explanation,
  onNextQuestion,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-emoji">
          {isCorrect ? '🎉' : '💡'}
        </div>
        <div className="modal-message">
          {isCorrect ? (
            <span>Super! Das ist richtig! 🌟</span>
          ) : (
            <>
              <p>Nicht ganz richtig! 🤔</p>
              <p className="explanation">
                <strong>Erklärung:</strong> {explanation}
              </p>
            </>
          )}
        </div>
        <button 
          className="modal-button"
          onClick={onNextQuestion}
        >
          Weiter zur nächsten Frage ➡️
        </button>
      </div>
    </div>
  );
};

export default AnswerModal;