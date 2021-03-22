import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import {
	add_logged_in_user,
	login_user,
	check_logged_in_user,
} from './Auth_requests';

const Login = ({ history }) => {
	const [userID, setUserID] = useState('');
	const [validationErr, setValidationErr] = useState('');
	const [registrationNo, setRegistrationNo] = useState('');

	const showError = (msg) => {
		setValidationErr(msg);
	};

	const routerHandler = () => {
		return history.push('/mainpage');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userID === '' || registrationNo === '') {
			setValidationErr(" Fields can't be empty!");
			return;
		}

		login_user(
			'POST',
			'http://159.65.150.229:4400/students/login',
			{ Contact: userID, Mac: registrationNo },
			() => showError('Invalid Crediantials'),
			routerHandler,
		);
		// check_logged_in_user(
		// 	'POST',
		// 	'http://159.65.150.229:4000/students/checkuser',
		// 	{ Contact: userID },
		// 	() => showError('User is already Logged in'),
		// 	() =>
		// 	,
		// );
	};

	return (
		<div className="form-container">
			<div className="shape-one shape"></div>
			<div className="shape-two shape"></div>
			<h2 className="login-title">LOGIN</h2>
			<form action="" className="login-form" onSubmit={handleSubmit}>
				<div className="field">
					<label htmlFor="contact">Username</label>
					<i className="fas fa-user user-icon"></i>
					<input
						type="text"
						id="contact"
						// value="9805266825"
						onChange={(e) => setUserID(e.target.value)}
					/>
				</div>
				<div className="field">
					<label htmlFor="registration_no">Registration Number</label>
					<i className="fas fa-user user-icon"></i>
					<input
						type="text"
						id="registration_no"
						// value="1466"
						onChange={(e) => setRegistrationNo(e.target.value)}
					/>
					{validationErr && <span className="show-error">{validationErr}</span>}
				</div>
				<button className="login-button" type="submit">
					LOGIN
				</button>
				<p style={{ fontSize: '13px', color: '#eee' }}>
					Username: prabesh , Registration No: 1466
				</p>
			</form>
			<div className="recommend-to-signup">
				<p className="sign-up-rec">Don't have an account?</p>

				<a
					href="http://edumarkfoundation.com/Admission.php"
					style={{ color: '#eee' }}
				>
					<p className="signup-link">Sign Up Now</p>
				</a>
			</div>
		</div>
	);
};

export default Login;
