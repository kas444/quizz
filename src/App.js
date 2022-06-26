import React from 'react';
import './style.css';
import { QuestionView } from './views/question';

export default function App() {
  return (
    <div>
      <h1>Quizz z wiedzy o prawie</h1>
      <QuestionView />
    </div>
  );
}
