import { createSlice, createSelector } from '@reduxjs/toolkit';
import QUESTIONS from '../api/data';

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
    goNext: (state) => {
      const index = state.quizData.findIndex((i) => i.questionId === state.currentQuestionId)
      state.currentQuestionId = state.quizData[index + 1].questionId;
      state.questionsAsked += 1;
    },
    goBack: (state) => {
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

const rootSelector = (state) => state.quiz;

export const quizSelectors = {
  rootSelector,
  selectQuizData: createSelector(rootSelector, (state) => state.quizData),
  selectCurrentQuestion: createSelector(
    rootSelector,
    (state) => QUESTIONS.find(question => question.id === state.currentQuestionId),
  ),
  selectQuestion: createSelector(
    rootSelector,
    (_, questionId) => questionId,
    (state, questionId) => QUESTIONS.find(question => question.id === questionId),
  ),
  selectAnswerId: createSelector(
    rootSelector,
    (state) => state.quizData.find(item => item.questionId === state.currentQuestionId)?.answerId,
  ),
  // z parametrem
  // const question2 = useSelector((state) => quizSelectors.selectCurrentQuestion(state, currentQuestionId));

  // selectCurrentQuestion: createSelector(
  //   rootSelector,
  //   (_, currentQuestionId) => currentQuestionId,
  //   (state, currentQuestionId) => QUESTIONS.find(question => question.id === currentQuestionId),
  // ),
};

export default quizSlice.reducer;
