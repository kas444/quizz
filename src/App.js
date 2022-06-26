import React from 'react';
import './style.css';
import { QuestionView } from './views/question';
import { ResultView } from './views/result';

export default function App() {

  return (
    <div>
      <h1>Quizz z wiedzy o prawie</h1>
      <QuestionView />
      <ResultView />
    </div>
  );
}
