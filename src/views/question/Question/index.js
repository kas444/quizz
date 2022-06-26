import React from 'react';

import { useSelector } from 'react-redux';
//import QUESTION from '../../../api/data';

export const Question = ({ selectAnswer }) => {

  // const question = QUESTION.find()[id];

  // console.log({ question });
  const { options } = useSelector((state) => state.quiz);

  return (
    <div className="list-group options">
      {options.map((answer, idx) => (
        <button
          key={idx}
          className="list-group-item list-group-item-action"
          onClick={() => selectAnswer(idx)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};