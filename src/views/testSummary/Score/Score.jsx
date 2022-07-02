import React from 'react';
import QUESTIONS from '../../../api/data';
import { useSelector } from 'react-redux';

export const Score = () => {
  const { score } = useSelector((state) => state.quiz);

  if (score > QUESTIONS.length) {
    console.error('Score cannot be greater than number of questions');
    return <div>ERROR, check console for details</div>
  }

  const value = Math.round((score / QUESTIONS.length) * 1000) / 10;

  return (
    <p className="h4 mb-2">
      <span role="img" aria-label="score">😎 </span>
      <span>Your score is: </span>
      <span className="text-info" data-testid="progress-bar">{value}% </span>
      <span>({score} / {QUESTIONS.length})</span>
    </p>
  );
};