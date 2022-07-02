import React, { useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import QUESTIONS from '../../api/data';
import { useNavigate } from "react-router-dom";
import { Progress } from '../../components/Progress';
import { Button } from '../../components/Button';
import { Question } from './Question';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions, quizSelectors } from '../../redux/quizSlice';

export const TestView = () => {

  useEffect(() => {
    startQuiz();
  }, []);

  const {
    isCompleted,
    quizData,
    currentQuestionId,
    questionsAsked,
  } = useSelector(quizSelectors.rootSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startQuiz = () => {
    const data = shuffle(QUESTIONS.map(question => ({ questionId: question.id, answerId: null })));
    dispatch(quizActions.initializeQuiz(data));
  };

  const returnToPreviousQuestion = () => {
    const index = quizData.findIndex((i) => i.questionId === currentQuestionId)
    const chosenAnswer = quizData[index - 1].answerId;

    dispatch(quizActions.goBack(chosenAnswer));
  };

  const answerId = quizData.find(item => item.questionId === currentQuestionId)?.answerId;

  return (
    <>
      {!isCompleted && (
        <div>
          <Progress question={questionsAsked} quizLength={QUESTIONS.length} />
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">

              <Question />

              <div className="row"></div>
              <div className="d-flex justify-content-between">

                {questionsAsked === 1 && (
                  <Button className="btn btn-secondary disabled" aria-disabled="true">wstecz</Button>
                )}

                {questionsAsked != 1 && (
                  <Button className="btn btn-primary" onClick={() => returnToPreviousQuestion()}>wstecz</Button>
                )}

                {questionsAsked === QUESTIONS.length && (
                  <Button className="btn btn-success" onClick={() => {
                    answerId != null ? dispatch(quizActions.completeQuiz()) : null
                    navigate("../testSummary")
                  }}>
                    zakończ quiz</Button>
                )}

                {questionsAsked != QUESTIONS.length && (
                  <Button className="btn btn-success" onClick={() => answerId != null ? dispatch(quizActions.goNext()) : null}>dalej</Button>
                )}

              </div>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};


