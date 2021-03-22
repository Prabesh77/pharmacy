import React, { useContext } from "react";

import { QuestionsContext } from "../../context/Context";
import Question from "./Question";
import Spinner from "../../common/Spinner";

const SetQuestion = () => {
  const { questions } = useContext(QuestionsContext);
  return (
    <div className="question-container set-question-container">
      {questions.length ? (
        questions.map(question => (
          <Question key={question.Id} question={question} />
        ))
      ) : (
        <Spinner run={true} />
      )}
    </div>
  );
};

export default SetQuestion;
