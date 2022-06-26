import React from 'react';

import QUESTIONS from '../../../api/data';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../../redux/quizSlice';

export const Question = ({ questionId }) => {
  const { selectedAnswer } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const question = QUESTIONS.find(question => question.id === questionId);

  return (
    <>
      <div>{question.question}</div>
      <div className="list-group">
        {question.options.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => dispatch(quizActions.selectAnswer(id))}
            className={`
            list-group-item list-group-item-action
            ${selectedAnswer === id ? "active" : ""}
          `}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};