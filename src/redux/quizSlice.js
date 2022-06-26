import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCompleted: false,
  score: 0,
  isCompleted: false,
  questions: [],
  answers: [],
  selectedAnswer: null
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    initializeQuiz: (state, action) => {
      state.score = 0;
      state.isCompleted = false;
      state.answers = [];
      state.selectedAnswer = null;
      state.questions = action.payload
    },
    updateQuestions: (state, action) => {
      state.questions = action.payload;
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
    selectAnswer: (state, action) => {
      state.selectedAnswer = action.payload
    }
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
