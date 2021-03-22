import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuestionsContext } from "../../context/Context";
import "../../styles/QuestionTypes.css";
import Back from "../../common/Back";

const ModelQuestionPage = () => {
  const { fetchSetQuestions, handleStart } = useContext(QuestionsContext);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleClick = num => {
    fetchSetQuestions(num);
    handleStart();
  };
  return (
    <div className="modelset-container custom-container">
      <Back />
      <div className="heading2-section heading">
        <h3>Model Set Questions</h3>
      </div>
      <div className="modelset-section">
        {arr.map(num => (
          <Link to="/modelquestions" key={num}>
            {" "}
            <div className="bar" onClick={() => handleClick(num)}>
              Set {num}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModelQuestionPage;
