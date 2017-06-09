import React from 'react';
import Home from './home'
import Topbar from './topbar'
import { setAuthStateChangeListener } from 'firebaseApi'

import 'normalize.css/normalize.css' // needed for material-ui i think
import 'styles/main.scss'
import 'styles/baloon.css'
import './styles.scss'


//const inDevelopement = process.env.NODE_ENV === 'development'
export default() => {
	setAuthStateChangeListener()

	return(
		<fb style={{width: '100%'}}>
			<Topbar />
			<fb id='content'>
				<Home />
			</fb>
		</fb>
	)
}
