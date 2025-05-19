import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import QuestionComponent from './QuestionComponent';
import ResultComponent from './ResultComponent';
import { getRandomQuestions } from '../data/questions';

interface QuizPageProps {
  questionsPerRound: number;
  onBackToHome: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ 
  questionsPerRound,
  onBackToHome 
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    setQuestions(getRandomQuestions(questionsPerRound));
  }, [questionsPerRound]);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsAnswered(true);
    setIsCorrect(option === questions[currentQuestionIndex].answer);
    
    if (option === questions[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(null);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestions(getRandomQuestions(questionsPerRound));
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setScore(0);
    setQuizComplete(false);
  };

  if (questions.length === 0) {
    return <div className="card">Laden... 🔄</div>;
  }

  return (
    <div className="quiz-container">
      {!quizComplete ? (
        <div className="card">
          <div className="quiz-header">
            <div>Frage {currentQuestionIndex + 1} von {questionsPerRound} 📝</div>
            <div>Punkte: {score} ⭐</div>
          </div>
          
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: `${((currentQuestionIndex) / questionsPerRound) * 100}%` 
              }}
            ></div>
          </div>
          
          <QuestionComponent
            question={questions[currentQuestionIndex]}
            selectedOption={selectedOption}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            onSelectOption={handleSelectOption}
            onNextQuestion={handleNextQuestion}
          />
        </div>
      ) : (
        <ResultComponent 
          score={score} 
          totalQuestions={questionsPerRound} 
          onRestart={handleRestartQuiz} 
        />
      )}
      
      <button 
        className="btn" 
        style={{ 
          marginTop: '1rem', 
          backgroundColor: 'transparent', 
          color: 'var(--primary)', 
          boxShadow: 'none',
          fontWeight: 'normal'
        }}
        onClick={onBackToHome}
      >
        Zurück zum Start 🏠
      </button>
    </div>
  );
};

export default QuizPage;