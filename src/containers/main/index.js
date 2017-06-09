import React from 'react';
import Home from './home'
import Topbar from './topbar'
import { setAuthStateChangeListener } from 'firebaseApi'


import 'styles/main.scss'
import 'styles/baloon.css'
import './styles.scss'

//const inDevelopement = process.env.NODE_ENV === 'development'
export default() => {
	setAuthStateChangeListener()

	return(
		<div style={{width: '100%'}}>
			<Topbar />
			<div id='content'>
				<Home />
			</div>
		</div>
	)
}
