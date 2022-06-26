import React, { useState } from 'react';

import { useSelector } from 'react-redux';

export const Score = () => {

    const { score, totalLength } = useSelector((state) => state.quiz);

    return (
        <p className="h4">
            {/* <Emoji text=":sparkles:" /> */}
            <span>Your score is: </span>
            <span className="text-info">
                {Math.round((score / totalLength) * 1000) / 10}%
            </span>
            <span>
                ({score} / {totalLength})
            </span>
        </p>
    );
};