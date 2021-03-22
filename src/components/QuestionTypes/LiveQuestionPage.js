// import React, { useContext } from "react";

// import { Link } from "react-router-dom";

// import "../../styles/QuestionTypes.css";
// import { QuestionsContext } from "../../context/Context";
// import Back from "../../common/Back";

// const LiveQuestionPage = () => {
//   const { fetchLiveQuestions, handleStart } = useContext(QuestionsContext);
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const handleClick = num => {
//     fetchLiveQuestions(num);
//     handleStart();
//   };
//   return (
//     <div className=" custom-container">
//       <Back />
//       <div className="heading2-section heading">
//         <h3>Live Exam</h3>
//       </div>
//       <div className="modelset-section">
//         {arr.map(num => (
//           <Link to="/livequestions" key={num}>
//             <div className="bar" onClick={() => handleClick(num)}>
//               Set {num}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LiveQuestionPage;
