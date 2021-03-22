import React, { useContext } from "react";
import "../../styles/ModelExamResult.css";
import { percentage, remarks } from "../../common/CalculateResult";

import { Link } from "react-router-dom";

import { QuestionsContext } from "../../context/Context";

const LiveExamResult = () => {
  const {
    finalLiveResult,
    setFinalLiveResult,
    liveQuestions,
    setShowLiveResult,
    setLiveCorrectAns,
    setIsRealTimeUp
  } = useContext(QuestionsContext);

  const rawPercentage = percentage(finalLiveResult, liveQuestions.length);
  const percent = rawPercentage > 0 ? rawPercentage : 0;

  const handleResultButton = () => {
    setFinalLiveResult(0);
    setShowLiveResult(false);
    setLiveCorrectAns(0);
    setIsRealTimeUp(false);
    localStorage.removeItem("deadline");
  };
  return (
    <div className="container model-exam-res-container">
      <h1>Result</h1>
      <div className="show-result">
        <div className="model-res">
          <div className="om-title title">Obtained Mark</div>
          <div className="om-value value">{finalLiveResult}</div>
        </div>
        <div className="model-res">
          <div className="tm-title title">Total Mark</div>
          <div className="tm-value value">{liveQuestions.length}</div>
        </div>
        <div className="model-res">
          <div className="p-title title">Percentage</div>
          <div className="p-value value">{percent}%</div>
        </div>
        <div className="model-res">
          <div className="r-title title">Remarks</div>
          <div className="r-value value">{remarks(percent)}</div>
        </div>
      </div>
      <Link to="/mainpage">
        <button
          className="button"
          onClick={handleResultButton}
          style={{ marginTop: "3rem", width: "200px" }}>
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default LiveExamResult;
