import React, { Suspense, lazy } from "react";
import "./style.css";
// import Counter from './components/Counter'

// const Counter = lazy(()=>import('./components/Counter'))
const Counter = lazy(() => {
  return new Promise(load => {
     setTimeout(() => load(import('./components/Counter')), 1000);
  });
});



export default function App() {
  return (
    <div>
      <h1>React Redux</h1>
      
      <Suspense fallback={<div>Loading...</div>}>
      <Counter />
      </Suspense>

      
    </div>
  );
}
