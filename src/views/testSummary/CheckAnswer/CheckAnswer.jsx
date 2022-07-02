import React, { useEffect } from 'react';
import { quizActions, quizSelectors } from '../../../redux/quizSlice';
import { useSelector, useDispatch } from 'react-redux';

export const CheckAnswer = ({ questionId, answerId }) => {
  const question = useSelector((state) => quizSelectors.selectQuestion(state, questionId));

  const answer = question.options.filter(option => option.id === answerId)[0].label;
  const isCorrect = question.correctOptionId === answerId;

  useEffect(() => {
    if (isCorrect) {
      dispatch(quizActions.incrementScore());
    }
  }, [isCorrect]);

  const dispatch = useDispatch();

  return (
    <div
      className={
        "card-footer text-white " +
        (isCorrect ? "bg-success" : "bg-danger")
      }
    >
      {isCorrect ? (
        <div>
          <span role="img" aria-label="smiling">🙂 </span>
          Correct
        </div>
      ) : (
        <div>
          <span role="img" aria-label="disappointed">😞 </span>
          Your answer: {answer}
        </div>
      )}
    </div>
  );
};
