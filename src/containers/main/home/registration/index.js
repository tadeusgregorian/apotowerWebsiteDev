import React from 'react'
import firebaseApi from 'firebaseApi'
import InputMinimal from 'components/inputMinimal'
import userIcon from './userIcon.png'
import emailIcon from './emailIcon.png'
import lockIcon from './lockIcon.png'
import './styles.scss'


//const inDevelopement = process.env.NODE_ENV === 'development'
export default() => {
	console.log(firebaseApi.auth())

	return(
		<fb id='registrationMain'>
			<fb id='registrationHead'>Jetzt registrieren</fb>
			<fb id='registrationBody'>
				<fb id='iWrapperPharmacyName' className='inputRegElement'>
					<InputMinimal imgUrl={userIcon} defaultText='Name der Apotheke'/>
				</fb>
				<fb id='iWrapperPharmacyEmail' className='inputRegElement'>
					<InputMinimal imgUrl={emailIcon} defaultText='Email'/>
				</fb>
				<fb id='iWrapperPassword' className='inputRegElement'>
					<InputMinimal imgUrl={lockIcon} defaultText='Passwort' password={true}/>
				</fb>
				<fb id='registrationSubmitButton'>Registrieren</fb>
				<fb id='iWrapperCaptcha'></fb>
			</fb>
		</fb>
	)
}
