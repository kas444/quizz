import React from 'react';
import { useSelector } from 'react-redux';
import { quizSelectors } from '../../../redux/quizSlice';


export const Score = () => {
  const { score, data } = useSelector(quizSelectors.rootSelector);

  if (score > data.length) {
    console.error('Score cannot be greater than number of questions');
    return <div>ERROR, check console for details</div>
  }

  const value = Math.round((score / data.length) * 1000) / 10;

  return (
    <p className="h4 mb-2">
      <span role="img" aria-label="score">😎 </span>
      <span>Your score is: </span>
      <span className="text-info" data-testid="progress-bar">{value}% </span>
      <span>({score} / {data.length})</span>
    </p>
  );
};