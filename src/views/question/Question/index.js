import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../../redux/quizSlice';
//import QUESTION from '../../../api/data';

export const Question = () => {

  // const question = QUESTION.find()[id];

  // console.log({ question });

  const { options, selectedAnswer } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  return (
    <div className="list-group">
      {options.map((answer, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(quizActions.selectAnswer(idx))}
          className={`
            list-group-item list-group-item-action
            ${selectedAnswer === idx ? "active" : ""}
          `}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};