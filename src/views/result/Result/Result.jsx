import React from 'react';

import QUESTIONS from '../../../api/data';
import { useSelector } from 'react-redux';

export const Result = () => {

    const { quizData } = useSelector((state) => state.quiz);

    return (
        <>
            <div>
                {quizData.map(({ questionId, answerId }, index) => {
                    const question = QUESTIONS.find(question => question.id === questionId);
                    const answer = question.options.filter(option => option.id === answerId)[0].label;
                    const isCorrect = question.correctOptionId === answerId;
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
                                                question.correctOptionId === id ? "text-success" : ""
                                            }
                                        >
                                            {label}
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
                                        <span role="img" aria-label="smiling">🙂</span>
                                        Correct
                                    </div>
                                ) : (
                                    <div>
                                        <span role="img" aria-label="disappointed">😞</span>
                                        Your answer: {answer}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};