import React, { useState, useContext } from "react";

import "../../styles/Question.css";

import { QuestionsContext } from "../../context/Context";

const ModelQuestion = ({ question }) => {
  const { setModelAnswer, handleModelQuestionsSubmit } = useContext(
    QuestionsContext
  );

  const [isDone, setIsDone] = useState(false);

  const { Id, Ques, A, B, C, D, Ans } = question;

  const handleChange = ans => {
    setModelAnswer(ans);
    handleModelQuestionsSubmit(ans, Ans);
    setIsDone(true);
  };

  const style = isDone
    ? { pointerEvents: "none", color: "#ccc" }
    : { background: "#ccc" };

  return (
    <>
      <div className="question-block" style={style}>
        <p className="question">
          {Id}. {Ques}
        </p>
        <div className="answers">
          <form action="">
            <div className="answer">
              <label htmlFor="A">A. {A}</label>
              <input
                type="radio"
                name="right"
                onChange={() => handleChange("A")}
              />
            </div>
            <div className="answer">
              <label htmlFor="B">B. {B}</label>
              <input
                type="radio"
                name="right"
                onChange={() => handleChange("B")}
              />
            </div>
            <div className="answer">
              <label htmlFor="C">C. {C}</label>
              <input
                type="radio"
                name="right"
                onChange={() => handleChange("C")}
              />
            </div>
            <div className="answer">
              <label htmlFor="D">D. {D}</label>
              <input
                type="radio"
                name="right"
                onChange={() => handleChange("D")}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModelQuestion;
