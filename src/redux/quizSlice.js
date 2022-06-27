import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCompleted: false,
  score: 0,
  index: 0,
  quizData: [],
  selectedAnswer: null,
  currentQuestionId: null,
  questionsAsked: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    initializeQuiz: (state, action) => {
      state.score = 0;
      state.isCompleted = false;
      state.index = 0;
      state.quizData = action.payload;
      state.currentQuestionId = state.quizData[state.index].questionId;
      state.selectedAnswer = null;
      state.questionsAsked = 1;
    },
    selectAnswer: (state, action) => {
      state.selectedAnswer = action.payload.id;
    },
    incrementScore: (state) => {
      state.score = state.score + 1
    },
    addAnswer: (state, action) => {
      state.quizData = action.payload;
    },
    goNext: (state) => {
      state.index += 1;
      state.currentQuestionId += state.quizData[state.index].questionId;
      state.selectedAnswer = null;
      state.questionsAsked += 1;
    },
    completeQuiz: (state) => {
      state.isCompleted = true;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
