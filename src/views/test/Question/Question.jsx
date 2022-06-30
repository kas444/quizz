import React, { useState } from 'react';

import shuffle from 'lodash/shuffle';
import QUESTIONS from '../../../api/data';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../../redux/quizSlice';

export const Question = () => {

    const { currentQuestionId, quizData } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    if (!currentQuestionId) { return null; }

    const question = QUESTIONS.find(question => question.id === currentQuestionId);

    question.options = shuffle(question.options);

    const saveAnswer = (selectedAnswerId) => {
        const newQuizData = quizData.map(item => item.questionId === currentQuestionId ? {
            questionId: currentQuestionId,
            answerId: selectedAnswerId
        } : item);

        dispatch(quizActions.updateQuizData(newQuizData));
    };

    const answerId = quizData.find(item => item.questionId === currentQuestionId).answerId;

    return (
        <>
            <div className="question">{question.question}</div>
            <div className="list-group">
                {question.options.map(({ id, label }, idx) => (
                    <button
                        key={idx}
                        onClick={() => saveAnswer(id)}
                        className={`
                            list-group-item list-group-item-action
                            ${answerId === id ? "active" : ""}
                        `}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </>
    );
};