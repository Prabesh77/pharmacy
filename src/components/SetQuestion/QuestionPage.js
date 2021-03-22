import React, { useContext } from "react";
import Timer from "../../helper/Timer";

import "../../styles/QuestionPage.css";

import { QuestionsContext } from "../../context/Context";
import SetQuestion from "./SetQuestion";
import Result from "./Result";
import Back from "../../common/Back";

const QuestionPage = () => {
  const {
    showResult,
    skipHandler,
    isDisabled,
    setIsDisabled,
    handleSubmitAnswer,
    time,
    setTime
  } = useContext(QuestionsContext);

  const btnStyle = {
    display: isDisabled ? "block" : "none"
  };

  const disableBtn = () => {
    setIsDisabled(true);
  };

  const resetTime = () => {
    setTime(60);
  };

  return (
    <div className="container question-page-container">
      <p className="note">
        <b>Note:</b> In order to go to next question, you should either give the
        right answer or wait for 60 Seconds.
      </p>
      {!showResult ? (
        <>
          <div onClick={resetTime}>
            <Back />
          </div>

          <SetQuestion />
          <div className="actions">
            <button
              className="button next-btn"
              onClick={handleSubmitAnswer}
              style={{ display: isDisabled ? "none" : "block" }}>
              Submit Answer
            </button>
            <button
              className="button skip-btn"
              onClick={skipHandler}
              style={btnStyle}>
              Skip
            </button>
          </div>
          <Timer disableBtn={disableBtn} time={time} setTime={setTime} />
        </>
      ) : (
        <Result />
      )}
    </div>
  );
};

export default QuestionPage;
