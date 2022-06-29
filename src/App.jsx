import React from 'react';
import './style.css';
import { QuestionView } from './views/question';
import { ResultView } from './views/result';

export default function App() {

  return (
    <>
      <div>
        <header>
          <h1 className="main-banner">Quizz z wiedzy o prawie</h1>
        </header>

        <main className="container mb-4">
          <QuestionView />
          <ResultView />
        </main>
      </div>
    </>
  );
}
