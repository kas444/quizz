import React, { useEffect } from 'react';

import QUESTIONS from '../../../api/data';
import { Mark } from '../Mark';

export const Result = ({ questionId, answerId, index }) => {

    const question = QUESTIONS.find(question => question.id === questionId);

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
            <Mark questionId={questionId} answerId={answerId} />
        </div>
    );
};
