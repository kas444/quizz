import React from 'react';
import { Result } from '../Result';
import { useSelector } from 'react-redux';
import { quizSelectors } from '../../../redux/quizSlice';

export const Summary = () => {
  const { quizData } = useSelector(quizSelectors.rootSelector);

  return (
    <div data-testid="Result">
      {quizData.map(({ questionId, answerId }, index) => <Result questionId={questionId} answerId={answerId} index={index} key={questionId} />)}
    </div>
  );
};