import React from 'react';
// import Emoji from 'react-emoji-render';

export const Progress = ({ question, quizLength }) => {
  return (
    <div className="mb-2">
      {/* <Emoji text=":four_leaf_clover:" /> */}
      Pytanie {question} / {quizLength}
    </div>
  );
};
