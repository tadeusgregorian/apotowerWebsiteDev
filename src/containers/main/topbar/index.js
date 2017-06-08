import React from 'react';
import apotowerLogo from './newLogoTade.jpg'
import './styles.scss'


//const inDevelopement = process.env.NODE_ENV === 'development'
export default() => (
		<div id='topbar'>
			<div id='topbarCenter'>
				<div id='topbarLogo'>
					<div id='topbarLogoImageWrapper'><img src={apotowerLogo} alt='apotowerLogo' width='34' height='34'/></div>
					<div id='topbarLogoText'>APOTOWER</div>
				</div>
				<div id='topbarNavi'>
					<div className='naviElement'>home</div>
					<div className='naviElement'>faq</div>
					<div className='naviElement'>kontakt</div>
					<div className='naviElement' id='loginNaviElement'>login</div>
				</div>
			</div>
		</div>
	)
