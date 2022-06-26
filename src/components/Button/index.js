import React from 'react';

export function Button({ children, className = 'btn btn-primary' }) {
  return (
    <button
      // style={{
      //   color: 'red',
      //   fontSize: '30px',
      //   backgroundColor: 'white',
      // }}
      className={className}
    >
      {children}
    </button>
  );
}