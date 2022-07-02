import React, { useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import QUESTIONS from '../../../api/data';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../../redux/quizSlice';

export const LearningQuestion = () => {
  const [shuffledOptions, shuffleOptions] = useState([]);
  const { currentQuestionId, quizData } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const question = QUESTIONS.find(question => question.id === currentQuestionId);
  const answerId = quizData.find(item => item.questionId === currentQuestionId)?.answerId;

  useEffect(() => {
    if (question) shuffleOptions(shuffle(question.options));
  }, [question])

  if (!question) { return null; }

  const saveAnswer = (selectedAnswerId) => {
    const newQuizData = quizData.map(item => item.questionId === currentQuestionId ? {
      questionId: currentQuestionId,
      answerId: selectedAnswerId
    } : item);

    dispatch(quizActions.updateQuizData(newQuizData));
  };

  const isCorrect = question.correctOptionId === answerId;

  return (
    <>
      <div className="question">{question.question}</div>
      <div className="list-group">
        {shuffledOptions.map(({ id, label }, idx) => (
          <button
            key={idx}
            onClick={() => saveAnswer(id)}
            className={` P
              list-group-item list-group-item-action
              ${answerId === id ? "active" : ""}
            `}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        className={
          "card-footer text-white " +
          (isCorrect ? "bg-success" : "bg-danger")
        }
      >
        {answerId != null && (
          <>
            {isCorrect ? (
              <div>
                <span role="img" aria-label="smiling">🙂 </span>
                Correct
              </div>
            ) : (
              <div>
                <span role="img" aria-label="disappointed">😞 </span>
                Wrong answer
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
