import React, { useContext, useState } from "react";

import "../../styles/Question.css";

import { QuestionsContext } from "../../context/Context";

const Question = ({ question }) => {
  const { setAnswer, handleSlide, setTime } = useContext(QuestionsContext);

  const { Id, Ques, A, B, C, D, Ans } = question;
  const [showAns, setShowAns] = useState(false);

  const showRightAns = () => {
    setShowAns(true);
    setTime(0);
  };

  return (
    <>
      <div style={handleSlide()} className="question-block set-question-block">
        <p className="question">
          <i className="fa fa-chevron-right"></i> {Ques} {Ans}
        </p>
        <div className="answers">
          <form action="">
            <div className="answer">
              <label htmlFor="A">A. {A}</label>
              <input
                type="radio"
                name="right"
                onChange={() => setAnswer("A")}
              />
            </div>
            <div className="answer">
              <label htmlFor="B">B. {B}</label>
              <input
                type="radio"
                name="right"
                onChange={() => setAnswer("B")}
              />
            </div>
            <div className="answer">
              <label htmlFor="C">C. {C}</label>
              <input
                type="radio"
                name="right"
                onChange={() => setAnswer("C")}
              />
            </div>
            <div className="answer">
              <label htmlFor="D">D. {D}</label>
              <input
                type="radio"
                name="right"
                onChange={() => setAnswer("D")}
              />
            </div>
          </form>
        </div>
        <div
          className="view-ans"
          style={{
            textAlign: "center",
            background: "orange",
            borderRadius: "5px",
            width: "150px",
            margin: "1rem auto"
          }}
          onClick={showRightAns}>
          <p style={{ margin: "0", padding: "4px 6px" }}>
            {showAns ? <b>{Ans.toUpperCase()}</b> : "View Answer"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Question;
