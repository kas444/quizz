import React from 'react';

export const Progress = ({ question, quizLength }) => {
  const progress = (Math.round((question / quizLength) * 1000) / 10);

  return (
    <>
      <div className="mb-2">
        <span role="img" aria-label="question">🧐  </span>
        Pytanie {question} / {quizLength}
      </div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={`${question}`}
          aria-valuemin="0" aria-valuemax={`${quizLength}`} style={{ width: `${progress}%` }}>
        </div>
      </div>
    </>
  );
};