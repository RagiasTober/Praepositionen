import React from 'react';
import { Question } from '../types';
import AnswerModal from './AnswerModal';

interface QuestionComponentProps {
  question: Question;
  selectedOption: string | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  onSelectOption: (option: string) => void;
  onNextQuestion: () => void;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  selectedOption,
  isAnswered,
  isCorrect,
  onSelectOption,
  onNextQuestion,
}) => {
  return (
    <div className="slide-in">
      <div className="question">{question.question}</div>
      <div className="options">
        {question.options.map((option) => {
          let buttonClass = 'btn btn-option';
          if (isAnswered) {
            if (option === question.answer) {
              buttonClass += ' correct';
            } else if (option === selectedOption && option !== question.answer) {
              buttonClass += ' incorrect';
            }
          } else if (option === selectedOption) {
            buttonClass += ' selected';
          }

          return (
            <button
              key={option}
              className={buttonClass}
              onClick={() => !isAnswered && onSelectOption(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <AnswerModal
          isCorrect={isCorrect!}
          explanation={question.explanation}
          onNextQuestion={onNextQuestion}
        />
      )}
    </div>
  );
};

export default QuestionComponent;