import React, { Component } from 'react';

import { Progress } from './components/Progress';
// import { Button } from './components/Button';
// import { Question } from '../Question';
import { useSelector } from 'react-redux';

const QuestionView = () => {
  const { totalLength, currentQuestion } = useSelector((state) => state.quiz);
  // const selectAnswer = (selectedId) => {

  //   if (selectedId === correct) {
  //     this.props.incrementScore();
  //   }

  //   this.props.addAnswers(selectedId);

  //   if (currentQuestion === totalLength) {
  //     this.showResult();
  //     return;
  //   } else {
  //     this.props.goNext();
  //     this.props.setQuestion();
  //   }
  // };

  return (
    <>
      <Progress currentQuestion={currentQuestion} totalLength={totalLength} />
    </>
  );
};

export default QuestionView;
