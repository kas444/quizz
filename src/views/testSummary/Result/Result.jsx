import React from 'react';
import { CheckAnswer } from '../CheckAnswer';
import { quizSelectors } from '../../../redux/quizSlice';
import { useSelector } from 'react-redux';

export const Result = ({ questionId, answerId, index }) => {
  const question = useSelector((state) => quizSelectors.selectQuestion(state, questionId));

  return (
    <div key={index} className="card mt-3">
      <div className="card-header">
        Q{index}: {question.question}
      </div>
      <div className="card-body">
        <div>
          {question.options.map(({ id, label }, index) => (
            <li
              key={index}
              className={
                question.correctOptionId === id ? "text-success correctAnswer" : ""
              }
            >
              {label}
            </li>
          ))}
        </div>
      </div>
      <CheckAnswer questionId={questionId} answerId={answerId} />
    </div >
  );
};
