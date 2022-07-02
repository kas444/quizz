import React from 'react';
import './style.css';
import { TestView } from './views/test';
import { SummaryView } from './views/testSummary';

export default function App() {

  return (
    <>
      <div>
        <header>
          <h1 className="main-banner">Quizz z wiedzy o prawie</h1>
        </header>

        <main className="container mb-4">
          {/* react-router */}
          {/* <Router> */}
          <TestView />
          <SummaryView />
          {/* </Router> */}
        </main>
      </div>
    </>
  );
}
