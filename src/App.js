import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionPage from './components/SetQuestion/QuestionPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { QuestionsProvider } from './context/Context';
import ModelSetQuestion from './components/ModelQuestion/ModelSetQuestion';
import Login from './auth/Login';
import AuthenticateComponent from './helper/AuthenticateComponent';
import Logout from './auth/Logout';
import MainPage from './components/MainPage';
import SetQuestionPage from './components/QuestionTypes/SetQuestionPage';
import ModelQuestionPage from './components/QuestionTypes/ModelQuestionPage';
import LiveQuestionPage from './components/QuestionTypes/LiveQuestionPage';
import LiveSetQuestion from './components/LiveQuestion/LiveSetQuestion';
import Four from './components/404';

import * as moment from 'moment';

const token = localStorage.getItem('jwt_auth_token');

function App() {
	const [a, seta] = useState('');

	// useEffect(() => {

	//   if (token) {
	//     seta("token");
	//   } else {
	//     seta("");
	//   }
	// }, []);

	return (
		<QuestionsProvider>
			<div className="App">
				{token ? <Redirect to="/mainpage" /> : <Redirect to="/login" />}
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<AuthenticateComponent>
						<Route exact path="/mainpage" component={MainPage} />
						<Route exact path="/setquestions" component={QuestionPage} />
						<Route path="/modelquestions" component={ModelSetQuestion} />
						<Route path="/livequestions" component={LiveSetQuestion} />
						<Route path="/set" component={SetQuestionPage} />
						<Route path="/model" component={ModelQuestionPage} />
						{/* <Route path="/live" component={LiveQuestionPage} /> */}
					</AuthenticateComponent>
					<Route component={Four} />
				</Switch>
			</div>
		</QuestionsProvider>
	);
}

export default App;
