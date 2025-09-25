import React from 'react';
import './Quiz.css';

const Quiz = () => {
  return (
    <section className="today-quizzes">
      <h2>Quizzes to complete today</h2>
      <div className="quiz-list">
        {/* Only one quiz card remains */}
        <div className="quiz-card">
          <div className="quiz-info">
            <div className="quiz-title">Customer Support Basics</div>
            <div className="quiz-meta">5 questions • 3 min</div>
          </div>
          <div className="quiz-action">
            <button className="btn btn-primary">Start</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
