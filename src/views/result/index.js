import React, { useState } from 'react';

import shuffle from 'lodash/shuffle';
import QUESTIONS from '../../api/data';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../redux/quizSlice';
import { Score } from './Score';

export const ResultView = () => {

  const {
    score,
    isCompleted,
    quizData,
  } = useSelector((state) => state.quiz);

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
              <Score score={score} totalLength={QUESTIONS.length} />

              <div>
                {questions.map((qq, index) => {
                  const isCorrect = qq.correct === answers[index];
                  return (
                    <div key={index} className="card mt-3">
                      <div className="card-header">
                        Q{qq.id}: {qq.question}
                      </div>
                      <div className="card-body">
                        <div>
                          {qq.options.map((x, index) => (
                            <li
                              key={index}
                              className={
                                qq.correct === index && "text-success"
                              }
                            >
                              {x}
                            </li>
                          ))}
                        </div>
                      </div>

                      <div
                        className={
                          "card-footer text-white " +
                          (isCorrect ? "bg-success" : "bg-danger")
                        }
                      >
                        {isCorrect ? (
                          <div>
                            {/* <Emoji text=":smile:" /> */}
                            Correct
                          </div>
                        ) : (
                          <div>
                            {/* <Emoji text=":disappointed:" /> */}
                            Your answer: {qq.options[answers[index]]}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                className="btn btn-primary mt-3"
                onClick={() => startQuiz()}
              >
                {/* <Emoji text=":rocket:" /> */}
                Nowy quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};