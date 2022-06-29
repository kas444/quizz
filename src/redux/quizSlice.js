import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCompleted: false,
  score: 0,
  quizData: [],
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
      state.quizData = action.payload;
      state.currentQuestionId = action.payload[0].questionId;
      state.questionsAsked = 1;
    },
    incrementScore: (state) => {
      state.score = state.score + 1
    },
    updateQuizData: (state, action) => {
      state.quizData = action.payload;
    },
    goNext: (state, action) => {
      const index = state.quizData.findIndex((i) => i.questionId === state.currentQuestionId)
      state.currentQuestionId = state.quizData[index + 1].questionId;
      state.questionsAsked += 1;
    },
    goBack: (state, action) => {
      const index = state.quizData.findIndex((i) => i.questionId === state.currentQuestionId)
      state.currentQuestionId = state.quizData[index - 1].questionId;
      state.questionsAsked -= 1;
    },
    completeQuiz: (state) => {
      state.isCompleted = true;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
