import React from 'react'
import homeImage from './homeImage2.jpg';
import Registration from './registration';
import './styles.scss'


//const inDevelopement = process.env.NODE_ENV === 'development'
export default() => (
	<div id='homeMain'>
		<div id='homeLeft'>
			<div id='homeImageTitle'>Apotower <br/>bringt <br/>Ordnung <br/>in <br/>das <br/>Chaos</div>
			<div id='homeImageWrapper'><img src={homeImage} alt='homeImage' width='244' height='208'/></div>
		</div>
		<div id='homeRight'>
			<Registration />
		</div>
	</div>
)
