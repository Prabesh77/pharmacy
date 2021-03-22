import React, { useContext } from "react";
import "../../styles/Result.css";
import { percentage, remarks } from "../../common/CalculateResult";

import { Link } from "react-router-dom";
import { QuestionsContext } from "../../context/Context";

const Result = () => {
  const {
    questions,
    setQuestions,
    setQueIndex,
    correctAns,
    setShowResult,
    setCorrectAns,
    skipped,
    setSkipped
  } = useContext(QuestionsContext);

  const percent = percentage(correctAns - 1, questions.length);

  const resetAll = () => {
    setSkipped(1);
    setCorrectAns(1);
    setShowResult(false);
    setQuestions([]);
    setQueIndex(0);
  };

  return (
    <div className="container">
      <h3 className="score-title">Your Score</h3>
      <p className="right res">
        <span className="label">Right Answers:</span>{" "}
        <span className="res-data">{correctAns - 1}</span>
      </p>
      <p className="wrong res">
        <span className="label">Wrong Answers:</span>{" "}
        <span className="res-data">{questions.length - correctAns + 1}</span>
      </p>
      <p className="skipped res">
        <span className="label">Skipped</span>{" "}
        <span className="res-data">{skipped - 1}</span>
      </p>
      <p className="percent res">
        <span className="label">Percent:</span>{" "}
        <span className="res-data">{percent} % </span>
      </p>
      <p className="remarks res">
        <span className="label">Remarks:</span>
        <span className="res-data">{remarks(percent)}</span>
      </p>
      <Link to="/mainpage">
        <button
          className="button"
          onClick={resetAll}
          style={{ marginTop: "3rem" }}>
          Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Result;
