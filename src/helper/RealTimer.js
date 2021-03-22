import React, { useContext } from 'react';
import useInterval from '../hooks/useInterval';

import '../styles/RealTimer.css';
import { QuestionsContext } from './../context/Context';

const RealTimer = () => {
	const { realTime, runRealTime, setIsRealTimeUp } = useContext(
		QuestionsContext,
	);
	useInterval(() => {
		runRealTime();
	}, 1000);

	const getDead = localStorage.getItem('deadline');

	if (getDead === realTime) {
		console.log('ITs OVER');
		clearInterval(0);
		setIsRealTimeUp(true);
	}

	return (
		<div
			className="real-timer custom-container"
			style={{
				margin: '0 auto',
			}}
		>
			<div className="real-timer-showcase">
				<p style={{ display: getDead <= realTime ? 'none' : '' }}>
					Current Time: <span className="real-time">{realTime}</span>
				</p>
				<p>
					End Time: <span className="dead-line">{getDead}</span>
				</p>
			</div>
		</div>
	);
};

export default RealTimer;
