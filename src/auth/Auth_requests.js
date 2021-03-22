import axios from 'axios';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

export const add_logged_in_user = (method, url, data, callback) => {
	axios({
		method,
		url,
		data,
	})
		.then((res) => console.log(res.data))
		.catch((err) => {
			callback();
			console.log(err);
		});
};

export const login_user = (
	method,
	url,
	data,
	callback,
	// inside_request,
	direction_func,
) => {
	axios({
		method,
		url,
		data,
	})
		.then((res) => {
			if (res.data.token && res.data.username) {
				const a = jwt.verify(res.data.token, 'secretkey');
				console.log('matched');
				if (a.name === res.data.username) {
					localStorage.setItem('jwt_auth_token', res.data.token);
					localStorage.setItem('name', res.data.username);
				}
			} else {
				callback('Invalid Crediantials');
			}
			const token = localStorage.getItem('jwt_auth_token');
			if (token) {
				const decoded = jwtDecode(token);
				console.log(decoded);
				if (decoded) {
					if (jwt.verify(res.data.token, 'secretkey').name === decoded.name) {
						// inside_request();
						direction_func();
					} else {
						callback();
					}
				} else {
					callback();
				}
			} else {
				callback('No Token');
			}
		})
		.catch((err) => {
			if (err) throw err;
		});
};

export const check_logged_in_user = (
	method,
	url,
	data,
	callback,
	login_user,
) => {
	axios({
		method,
		url,
		data,
	})
		.then((res) => {
			console.log(res);
			if (res.data === false) {
				login_user();
				return;
			} else {
				callback('User Already Logged In');
				console.log('USER ALREADY LOGGED IN');
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
