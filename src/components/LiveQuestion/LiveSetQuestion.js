import React, { useContext } from 'react';

import '../../styles/ModelSetQuestion.css';

import { QuestionsContext } from '../../context/Context';
import LiveQuestion from './LiveQuestion';
import Spinner from '../../common/Spinner';
import LiveExamResult from './LiveExamResult';
import RealTimer from '../../helper/RealTimer';

const LiveSetQuestion = (props) => {
	const {
		showLiveResult,
		setShowLiveResult,
		isRealTimeUp,
		liveQuestions,
		finalLiveSubmit,
	} = useContext(QuestionsContext);

	const backClick = () => {
		props.history.goBack();
		localStorage.removeItem('deadline');
	};

	if (isRealTimeUp) {
		setShowLiveResult(true);
	}

	return (
		<>
			<button
				className="model-home-btn"
				onClick={backClick}
				style={{ position: 'fixed' }}
			>
				<i className="fa fa-arrow-left"></i>
			</button>

			<div className="question-container container model-question-container">
				{!showLiveResult && (
					<>
						{' '}
						<RealTimer />
						<p className="model-note">
							<span>Note: </span>
							You cannot re-select the answers. Once you choose, you're done!!!
						</p>
					</>
				)}

				{showLiveResult ? (
					<LiveExamResult />
				) : liveQuestions.length ? (
					liveQuestions.map((question) => (
						<LiveQuestion key={question.Id} question={question} />
					))
				) : (
					<Spinner run={true} />
				)}
			</div>
			{!showLiveResult && (
				<button className="model-submit button" onClick={finalLiveSubmit}>
					Submit
				</button>
			)}
		</>
	);
};

export default LiveSetQuestion;
