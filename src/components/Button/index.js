import React from 'react';

export function Button({ children, className, onClick, }) {
  return (
    <button
      // style={{
      //   color: 'red',
      //   fontSize: '30px',
      //   backgroundColor: 'white',
      // }}
      className={`button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}