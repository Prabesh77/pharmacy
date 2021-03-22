import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';
import axios from 'axios';
import * as moment from 'moment';

const MainPage = ({ history }) => {
	const [activeUser, setActiveUser] = useState('');
	const [isExamTime, setIsExamTime] = useState(false);
	const handleLogout = () => {
		localStorage.removeItem('jwt_auth_token');
		localStorage.removeItem('name');
		history.push('/logout');
	};

	const checkTime = () => {};

	useEffect(() => {
		const source = axios.CancelToken.source();
		const user = localStorage.getItem('name');
		setActiveUser(user);
		//Request
		axios
			.get('questions/checktime')
			.then((res) => {
				const moment_now = moment().format('MMMM Do YYYY, h:mm:ss a');
				// console.log(moment_now < res.data[0].Start);
				// console.log(moment_now < res.data[0].End);
				const a = 'March 12th 2020, 2:22:27 pm';
				const b = 'March 12th 2020, 11:50:27 pm';
				console.log(a > b);
				if (res.data[0].Start <= moment_now && res.data[0].End >= moment_now) {
					console.log('EXAM ONGOING', res.data[0].Start, moment_now);
					setIsExamTime(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {
			source.cancel();
		};
	}, []);

	return (
		<div className="bg">
			<div className="mainpage-container center custom-container">
				<div className="home-head">
					<h2>
						HOME<i className="fa fa-home"></i>
					</h2>
					<div className="logout-btn-holder">
						<button className="logout-btn" onClick={handleLogout}>
							Logout
						</button>
					</div>
				</div>
				<div className="hello-section">
					<h2>
						Hello <span className="logged-user">{activeUser}!</span>
					</h2>
					<p>
						Welcome to the official App for
						<br />
						<span style={{ fontWeight: 'bold' }}>Preparation Classes</span>
					</p>
				</div>

				<div className="mainpage-card set-card center">
					<Link to="/set">
						<h1>Set Questions</h1>
						<p>
							Duration:<b>60 seconds / question</b>
						</p>
					</Link>
				</div>

				<div className="mainpage-card model-card center">
					<Link to="/model">
						<h1>Model Questions</h1>
						<p>
							Duration:<b>3 Hours</b>
						</p>
					</Link>
				</div>

				<div
					className="mainpage-card live-card center"
					style={{
						background: isExamTime ? '' : 'rgba(0, 0, 0, .5)',
						pointerEvents: isExamTime ? '' : 'none',
					}}
				>
					<Link to="/livequestions">
						<h1>Live Questions</h1>
						<p>
							Duration:<b>2 Hours</b>
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
