import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { useSelector } from 'react-redux';
import { quizSelectors } from '../../redux/quizSlice';
import { Score } from './Score';
import { Summary } from './Summary';

export const TestSummaryView = () => {
  const { isCompleted } = useSelector(quizSelectors.rootSelector);
  const navigate = useNavigate();

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          {isCompleted && (
            <div>
              <Score />
              <Summary />
              <Button
                className="btn btn-primary mb-3"
                onClick={() => navigate("../quizz/test")}
              >
                <span role="img" aria-label="rocket">🚀 </span>
                Nowy quiz
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};