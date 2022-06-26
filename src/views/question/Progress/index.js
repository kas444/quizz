import React from 'react';
// import Emoji from 'react-emoji-render';

export const Progress = ({ currentQuestion, totalLength }) => {
  return (
    <div className="mb-2">
      {/* <Emoji text=":four_leaf_clover:" /> */}
      Pytanie {currentQuestion} / {totalLength}
    </div>
  );
};
