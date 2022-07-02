import { createSlice, createSelector } from '@reduxjs/toolkit';
import QUESTIONS from '../api/data';
import shuffle from 'lodash/shuffle';

const initialState = {
  data: QUESTIONS,
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
    initializeQuiz: (state) => {
      const shuffledData = shuffle(state.data.map(question => ({ questionId: question.id, answerId: null })));
      state.score = 0;
      state.isCompleted = false;
      state.quizData = shuffledData;
      state.currentQuestionId = shuffledData[0].questionId;
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
    (state) => state.data.find(question => question.id === state.currentQuestionId),
  ),
  selectQuestion: createSelector(
    rootSelector,
    (_, questionId) => questionId,
    (state, questionId) => state.data.find(question => question.id === questionId),
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
