import React from 'react';

import QUESTIONS from '../../../api/data';
import { useSelector } from 'react-redux';

export const Score = () => {

    const { score } = useSelector((state) => state.quiz);

    return (
        <p className="h4">
            <span role="img" aria-label="score">😎</span>
            <span>Your score is: </span>
            <span className="text-info">
                {Math.round((score / QUESTIONS.length) * 1000) / 10}%
            </span>
            <span>
                ({score} / {QUESTIONS.length})
            </span>
        </p>
    );
};