import React, { useContext } from 'react';

import '../../styles/ModelSetQuestion.css';

import { QuestionsContext } from '../../context/Context';
import ModelQuestion from './ModelQuestion';
import Spinner from '../../common/Spinner';
import ModelExamResult from './ModelExamResult';
import RealTimer from '../../helper/RealTimer';

const ModelSetQuestion = (props) => {
	const {
		showModelResult,
		setShowModelResult,
		isRealTimeUp,
		questions,
		finalModelSubmit,
	} = useContext(QuestionsContext);

	if (isRealTimeUp) {
		setShowModelResult(true);
	}

	const backClick = () => {
		props.history.goBack();
		localStorage.removeItem('deadline');
	};

	return (
		<>
			<div className="question-container container model-question-container">
				<button className="model-home-btn" onClick={backClick}>
					<i className="fa fa-arrow-left"></i>
				</button>
				{!showModelResult && (
					<>
						{' '}
						<RealTimer />
						<p className="model-note" style={{ padding: '8px 0' }}>
							<span>Note: </span>
							You cannot re-select the answers. Once you choose, you're done!!!
						</p>
					</>
				)}

				{showModelResult ? (
					<ModelExamResult />
				) : questions.length ? (
					questions.map((question) => (
						<ModelQuestion key={question.Id} question={question} />
					))
				) : (
					<Spinner run={true} />
				)}
			</div>
			{!showModelResult && (
				<button className="model-submit button" onClick={finalModelSubmit}>
					Submit
				</button>
			)}
		</>
	);
};

export default ModelSetQuestion;
