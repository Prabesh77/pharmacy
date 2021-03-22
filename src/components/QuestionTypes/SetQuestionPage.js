import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/QuestionTypes.css";

import { QuestionsContext } from "../../context/Context";
import Back from "../../common/Back";

const SetQuestionsPage = () => {
  const { fetchSetQuestions, setTime } = useContext(QuestionsContext);
  setTime(60);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="custom-container set-container">
      <Back />
      <div className="heading2-section heading">
        <h3>Reading Set Questions</h3>
      </div>
      <Back />
      <div className="modelset-section">
        {arr.map(num => (
          <Link to="/setquestions" key={num}>
            {" "}
            <div className="bar" onClick={() => fetchSetQuestions(num)}>
              Set {num}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SetQuestionsPage;
