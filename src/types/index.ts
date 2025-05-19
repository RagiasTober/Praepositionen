export interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answered: boolean;
  selectedOption: string | null;
  isCorrect: boolean | null;
  quizComplete: boolean;
}