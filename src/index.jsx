import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { TestView } from './views/test';
import { TestSummaryView } from './views/testSummary';
import { LearnView } from './views/learn';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/quizz" element={<App />}>
          <Route path="/quizz/nauka" element={<LearnView />} />
          <Route path="/quizz/test" element={<TestView />} />
          <Route path="/quizz/testSummary" element={<TestSummaryView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
