import React from 'react';
import './style.css';
import Counter from './components/Counter';
import QuestionView from './views/question';

export default function App() {
  return (
    <div>
      <h1>Quizz</h1>
      <Counter />
      <QuestionView />
    </div>
  );
}
