import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';

function App() {
  const [view, setView] = useState<'home' | 'quiz'>('home');
  
  // Register service worker for PWA functionality
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch(error => {
            console.log('ServiceWorker registration failed: ', error);
          });
      });
    }
  }, []);

  return (
    <div className="app-container">
      {/*<header className="header">
      </header>*/}
      
      <main className="main-content">
        {view === 'home' ? (
          <HomePage onStartQuiz={() => setView('quiz')} />
        ) : (
          <QuizPage 
            questionsPerRound={10} 
            onBackToHome={() => setView('home')} 
          />
        )}
      </main>
      

    </div>
  );
}

export default App;