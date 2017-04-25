import React from 'react';
import Home from './home'
import Topbar from './topbar'


import 'styles/main.scss'
import './styles.scss'


//const inDevelopement = process.env.NODE_ENV === 'development'
export default() => (
	<fb style={{width: '100%'}}>
		<Topbar />
		<content>
			<Home />
		</content>
	</fb>
	)
