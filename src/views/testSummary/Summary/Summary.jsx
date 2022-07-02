import React from 'react';
import { Result } from '../Result';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const { quizData } = useSelector((state) => state.quiz);

  return (
    <div data-testid="Result">
      {quizData.map(({ questionId, answerId }, index) => <Result questionId={questionId} answerId={answerId} index={index} key={questionId} />)}
    </div>
  );
};