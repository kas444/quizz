import React, { useState } from 'react';

import shuffle from 'lodash/shuffle';
import QUESTIONS from '../../api/data';
import { Button } from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../redux/quizSlice';
import { Score } from './Score';
import { Summary } from './Summary';

export const SummaryView = () => {

  const { isCompleted } = useSelector((state) => state.quiz);

  const dispatch = useDispatch();

  const startQuiz = () => {
    const data = shuffle(QUESTIONS.map(question => ({ questionId: question.id, answerId: null })));
    dispatch(quizActions.initializeQuiz(data));
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">

          {isCompleted && (
            <div>
              <Score />
              <Summary />
              <Button
                className="btn btn-primary mt-3"
                onClick={() => startQuiz()}
              >
                <span role="img" aria-label="rocket">🚀</span>
                Nowy quiz
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};