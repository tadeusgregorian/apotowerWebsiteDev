import React, { PureComponent } from 'react'
import firebaseApi from 'firebaseApi'
import { createNewAccountOnDB } from 'firebaseApi'
import { isValidEmail, Toast } from 'helpers'
import InputMinimal from 'components/inputMinimal'
import userIcon from './userIcon.png'
import emailIcon from './emailIcon.png'
import lockIcon from './lockIcon.png'
import './styles.scss'


//const inDevelopement = process.env.NODE_ENV === 'development'
export default class Registration extends PureComponent{
	constructor(props){
		super(props)
		this.state = {
			pharmacyName: '',
			email: '',
			password: ''
		}
	}

	regButtonClicked = () => {
		const { pharmacyName, email, password } = this.state
		let error = ''
		const emailInUse = 'Dise E-Mail Adresse ist bereits registriert.'

		if(!pharmacyName || !email || !password) 	error = error || 'Bitte füllen Sie alle Felder aus.'
		if(pharmacyName.length < 6 )							error = error || 'Der Name der Apotheke ist zu kurz.'
		if(password.length < 6 )									error = error || 'Das Passwort muss mindestens 6 Zeichen lang sein.'
		if(!isValidEmail(email)) 									error = error || 'Bitte geben sie eine gültige E-Mail Adresse ein.'

		error ?
			Toast.warning(error) :
			firebaseApi.auth().createUserWithEmailAndPassword(email, password)
				.then(user => user && createNewAccountOnDB(user.uid, pharmacyName, email))
				.catch(e => e.code === 'auth/email-already-in-use' && Toast.warning(emailInUse))
	}

	render = () =>{
		return(
			<fb id='registrationMain'>
				<fb id='registrationHead'>Jetzt registrieren</fb>
				<fb id='registrationBody'>
					<fb id='iWrapperPharmacyName' className='inputRegElement'>
						<InputMinimal
							onInputChange={(inp)=>this.setState({pharmacyName: inp})}
							imgUrl={userIcon}
							defaultText='Name der Apotheke'/>
					</fb>
					<fb id='iWrapperPharmacyEmail' className='inputRegElement' data-balloon="Email-Adresse der Apotheke" data-balloon-pos="up">
						<InputMinimal
							onInputChange={(inp)=>this.setState({email: inp})}
							imgUrl={emailIcon}
							defaultText='Email'/>
					</fb>
					<fb id='iWrapperPassword' className='inputRegElement' onKeyDown={(e) => e.keyCode === 13 && this.regButtonClicked()}>
						<InputMinimal
							onInputChange={(inp)=>this.setState({password: inp})}
							imgUrl={lockIcon}
							defaultText='Passwort'
							password={true} />
					</fb>
					<fb id='registrationSubmitButton' onClick={this.regButtonClicked}>Registrieren</fb>
					<fb id='iWrapperCaptcha'></fb>
				</fb>
			</fb>
		)
	}
}
