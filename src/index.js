import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './layout';

render((
	<BrowserRouter>
		<AppContainer />
	</BrowserRouter>
), document.getElementById('app'))