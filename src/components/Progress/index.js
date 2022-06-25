import React from 'react';
// import Emoji from 'react-emoji-render';

export function Progress(props) {
  return (
    <div className="mb-2">
      {/* <Emoji text=":four_leaf_clover:" /> */}
      Pytanie {props.currentQuestion} / {props.totalLength}
    </div>
  );
}
