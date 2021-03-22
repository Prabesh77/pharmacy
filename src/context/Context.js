import React, { useState, createContext } from 'react';
import axios from 'axios';
import moment from 'moment';

export const QuestionsContext = createContext();

export const QuestionsProvider = (props) => {
	const [questions, setQuestions] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [answer, setAnswer] = useState('');
	const [correctAns, setCorrectAns] = useState(1);

	const [modelAnswer, setModelAnswer] = useState('');
	const [finalModelResult, setFinalModelResult] = useState(0);
	const [showModelResult, setShowModelResult] = useState(false);
	const [modelCorrectAns, setModelCorrectAns] = useState(0);

	const [liveQuestions, setLiveQuestions] = useState([]);
	const [liveAnswer, setLiveAnswer] = useState('');
	const [liveCorrectAns, setLiveCorrectAns] = useState(0);
	const [finalLiveResult, setFinalLiveResult] = useState(0);
	const [showLiveResult, setShowLiveResult] = useState(false);

	const [skipped, setSkipped] = useState(1);
	const [spinner, setSpinner] = useState(false);

	//   Handle the buttons-- SKIP and Submit button
	const [isDisabled, setIsDisabled] = useState(false);
	const [slide, setSlide] = useState(0);

	//   COntrolling the Timer Component
	const [time, setTime] = useState(60);
	// const [modelTime, setModelTime] = useState(60 * 60 * 3);
	// const [liveTime, setLiveTime] = useState(60 * 60 * 2);

	const handleNextQuestion = () => {
		if (slide <= questions.length * 416 - 832) {
			setSlide(slide + 416);
		} else {
			// setQuestions([]);
			setShowResult(true);
			setSlide(0);
		}

		setSpinner(true);
		setTime(60);
		setIsDisabled(false);
		setSpinner(false);
		return;
	};

	const handleSlide = () => {
		let style = { transform: `translateX(-${slide}px)` };
		return style;
	};

	// Check if the answer is right
	const [queIndex, setQueIndex] = useState(0);
	const handleSubmitAnswer = () => {
		if (queIndex < questions.length) {
			setQueIndex(queIndex + 1);
			console.log(questions[queIndex]);
			if (questions[queIndex].Ans.toUpperCase() === answer.toUpperCase()) {
				setCorrectAns(correctAns + 1);
				console.log('Right');
				setAnswer('');
			} else {
				console.log('Wrong');
				setAnswer('');
			}
		}
		handleNextQuestion();
		return;
	};

	const handleModelQuestionsSubmit = (a, b) => {
		if (a.toUpperCase() === b.toUpperCase()) {
			setModelCorrectAns(modelCorrectAns + 1);
			// console.log("MODEL CORRECT", modelCorrectAns);
		} else {
			// console.log("MODEL WRONG", a, b);
		}
	};

	const handleLiveQuestionsSubmit = (a, b) => {
		if (a.toUpperCase() === b.toUpperCase()) {
			setLiveCorrectAns(liveCorrectAns + 1);
			// console.log("MODEL CORRECT", liveCorrectAns);
		} else {
			// console.log("MODEL WRONG", a, b);
		}
	};

	const finalModelSubmit = () => {
		setFinalModelResult(modelCorrectAns);
		setShowModelResult(true);
		// console.log(finalModelResult);
	};

	const finalLiveSubmit = () => {
		setFinalLiveResult(liveCorrectAns);
		setShowLiveResult(true);
		console.log(finalLiveResult);
		axios({
			method: 'POST',
			url: 'http://159.65.150.229:4400/result',
			data: {
				Name: localStorage.getItem('name'),
				Full_mark: liveQuestions.length,
				Obtained_mark: liveCorrectAns,
			},
		})
			.then((res) => {
				// console.log(res);
			})
			.catch((err) => {
				// console.log("ERROR", err);
			});
	};

	// Fire this function when skip buttons is clicked
	const skipHandler = () => {
		setSkipped(skipped + 1);
		handleNextQuestion();
	};

	//Question limit

	// Fetch next question
	const fetchSetQuestions = (id) => {
		axios(`http://159.65.150.229:4400/questions/set/${id}`)
			.then((res) => {
				setQuestions(res.data);
			})
			.catch((err) => {
				// console.log(err);
			});
	};

	const fetchLiveQuestions = (id) => {
		axios(`http://159.65.150.229:4400/questions/live`)
			.then((res) => {
				setLiveQuestions(res.data);
				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// ================================
	// REAL TIMER STUFFS//

	const [realTime, setRealTime] = useState('');
	const [isRealTimeUp, setIsRealTimeUp] = useState(false);
	const [isLiveTimeUp, setIsLiveTimeUp] = useState(false);
	const runRealTime = () => {
		let time = moment().format('LTS');
		setRealTime(time);
	};

	const handleStart = () => {
		const deadline = new Date().getTime() + 120 * 60000;
		let dead = moment(deadline).format('LTS');
		// setDeadLine(dead);
		localStorage.setItem('deadline', dead);
	};

	//===================================

	return (
		<QuestionsContext.Provider
			value={{
				questions,
				setQuestions,
				setQueIndex,
				answer,
				setAnswer,
				correctAns,
				setCorrectAns,
				showResult,
				setShowResult,
				skipHandler,
				time,
				setTime,
				isDisabled,
				setIsDisabled,
				handleSubmitAnswer,
				skipped,
				setSkipped,
				spinner,
				liveQuestions,
				liveAnswer,
				setLiveAnswer,
				liveCorrectAns,
				setLiveCorrectAns,
				fetchSetQuestions,
				fetchLiveQuestions,
				handleSlide,
				handleModelQuestionsSubmit,
				handleLiveQuestionsSubmit,
				modelAnswer,
				setModelAnswer,
				finalModelSubmit,
				finalLiveSubmit,
				modelCorrectAns,
				setModelCorrectAns,
				finalModelResult,
				setFinalModelResult,
				finalLiveResult,
				setFinalLiveResult,
				showModelResult,
				setShowModelResult,
				showLiveResult,
				setShowLiveResult,
				realTime,
				runRealTime,
				handleStart,
				isRealTimeUp,
				setIsRealTimeUp,
				isLiveTimeUp,
				setIsLiveTimeUp,
			}}
		>
			{props.children}
		</QuestionsContext.Provider>
	);
};
