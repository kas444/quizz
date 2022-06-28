import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCompleted: false,
  score: 0,
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
      state.quizData = action.payload;
      state.currentQuestionId = action.payload[0].questionId;
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
    goNext: (state, action) => {
      const index = state.quizData.findIndex((i) => i.questionId === state.currentQuestionId)
      state.currentQuestionId = state.quizData[index + 1].questionId;
      state.selectedAnswer = state.quizData[index + 1].answerId;
      state.questionsAsked += 1;
    },
    goBack: (state, action) => {
      const index = state.quizData.findIndex((i) => i.questionId === state.currentQuestionId)
      state.currentQuestionId = state.quizData[index - 1].questionId;
      state.selectedAnswer = action.payload;
      state.questionsAsked -= 1;
    },
    completeQuiz: (state) => {
      state.isCompleted = true;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
