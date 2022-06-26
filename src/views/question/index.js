import React, { useEffect } from 'react';

import { Progress } from './Progress';
import { Button } from '../../components/Button';
import { Question } from './Question';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../redux/quizSlice';

export const QuestionView = () => {

  useEffect(() => {
    startQuiz();
  }, []);

  const {
    totalLength,
    currentQuestion,
    isCompleted,
    question,
    correct,
    selectedAnswer
  } = useSelector((state) => state.quiz);

  const dispatch = useDispatch();

  const startQuiz = () => {
    dispatch(quizActions.initializeQuiz());
    dispatch(quizActions.setQuestion(0));
  };

  const selectAnswer = (selectedId) => {
    if (selectedId === correct) {
      dispatch(quizActions.incrementScore());
    }

    dispatch(quizActions.addAnswers(selectedId));

    if (currentQuestion === totalLength) {
      dispatch(quizActions.completeQuiz());
      return;
    } else {
      dispatch(quizActions.goNext());
      dispatch(quizActions.setQuestion());
    }
  };

  return (
    <>
      {!isCompleted && (
        <div>
          <Progress currentQuestion={currentQuestion} totalLength={totalLength} />
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div>{question}</div>
              <Question key={currentQuestion} />
              <div className="row"></div>
              <div className="d-flex justify-content-between">
                {currentQuestion === 1 && (
                  <Button className="btn btn-secondary disabled" aria-disabled="true">wstecz</Button>
                )}
                {currentQuestion != 1 && (
                  <Button className="btn btn-primary">wstecz</Button>
                )}
                {/* {currentQuestion === totalLength && (
                  <Button className="btn btn-success" onClick={() => endQuiz(selectedAnswer)}>zakończ quiz</Button>
                )} */}
                {/* {currentQuestion != totalLength && ( */}
                <Button className="btn btn-success" onClick={() => selectedAnswer != null ? selectAnswer(selectedAnswer) : null}>dalej</Button>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


