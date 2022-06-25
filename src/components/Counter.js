import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../redux/quizSlice';

export default function Counter() {
  const { currentQuestion } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(quizActions.goNext())}>
          Increment
        </button>
        <span>{currentQuestion}</span>
        <button onClick={() => dispatch(quizActions.goNext())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
