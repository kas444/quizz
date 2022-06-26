import { createSlice } from '@reduxjs/toolkit';
import QUESTIONS from '../api/data';

const initialState = {
  isCompleted: false,
  options: [],
  totalLength: QUESTIONS.length,
  questions: QUESTIONS,
  score: 0,
  isCompleted: false,
  answers: [],
  currentQuestion: 1,
  selectedAnswer: null
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    initializeQuiz: (state) => {
      state.score = 0;
      state.isCompleted = false;
      state.answers = [];
      state.currentQuestion = 1;
      state.selectedAnswer = null;
    },
    incrementScore: (state) => {
      state.score = state.score + 1
    },
    completeQuiz: (state) => {
      state.isCompleted = true;
    },
    goNext: (state, action) => {
      state.currentQuestion += 1;
      state.selectedAnswer = null;
    },
    addAnswers: (state, action) => {
      state.answers = [...state.answers, action.payload];
    },
    setQuestion: (state) => {
      const QUESTION = QUESTIONS[state.currentQuestion - 1];
      state.currentQuestion = QUESTION.id;
      state.question = QUESTION.question;
      state.options = QUESTION.options;
      state.correct = QUESTION.correct;
    },
    selectAnswer: (state, action) => {
      state.selectedAnswer = action.payload
    }
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
