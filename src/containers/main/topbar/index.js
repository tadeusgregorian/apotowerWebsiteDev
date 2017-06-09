import React from 'react';
import apotowerLogo from './newLogoTade.jpg'
import './styles.scss'


//const inDevelopement = process.env.NODE_ENV === 'development'
export default() => (
		<fb id='topbar'>
			<fb id='topbarCenter'>
				<fb id='topbarLogo'>
					<fb id='topbarLogoImageWrapper'><img src={apotowerLogo} alt='apotowerLogo' width='34' height='34'/></fb>
					<fb id='topbarLogoText'>APOTOWER</fb>
				</fb>
				<fb id='topbarNavi'>
					<fb className='naviElement'>home</fb>
					<fb className='naviElement'>faq</fb>
					<fb className='naviElement'>kontakt</fb>
					<fb className='naviElement' id='loginNaviElement'>login</fb>
				</fb>
			</fb>
		</fb>
	)
