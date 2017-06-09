import React, { PureComponent } from 'react'
import firebaseApi from 'firebaseApi'
import { createNewAccountOnDB } from 'firebaseApi'
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

	onKeyDownPW = (e) => {
		if(e.key === 'Enter') this.regButtonClicked()
	}

	regButtonClicked = () => {
		// TODO: check for real email Adress with regex maybe
		const auth = firebaseApi.auth()
		const pharmacyName = this.state.pharmacyName
		const email = this.state.email
		const password = this.state.password
		auth.createUserWithEmailAndPassword(email, password)
			.catch(e => console.log(e.message))
			.then(user => user && createNewAccountOnDB(user.uid, pharmacyName, email))
	}

	render = () =>{
		return(
			<div id='registrationMain'>
				<div id='registrationHead'>Jetzt registrieren</div>
				<div id='registrationBody'>
					<div id='iWrapperPharmacyName' className='inputRegElement'>
						<InputMinimal
							onInputChange={(inp)=>this.setState({pharmacyName: inp})}
							imgUrl={userIcon}
							defaultText='Name der Apotheke'
							value={this.state.pharmacyName}/>
					</div>
					<div id='iWrapperPharmacyEmail' className='inputRegElement' data-balloon="Email-Adresse der Apotheke" data-balloon-pos="up">
						<InputMinimal
							onInputChange={(inp)=>this.setState({email: inp})}
							imgUrl={emailIcon}
							defaultText='Email'
							value={this.state.email}/>
					</div>
					<div id='iWrapperPassword' className='inputRegElement' onKeyDown={this.onKeyDownPW}>
						<InputMinimal
							onInputChange={(inp)=>this.setState({password: inp})}
							imgUrl={lockIcon}
							defaultText='Passwort'
							value={this.state.password}
							password={true} />
					</div>
					<div id='registrationSubmitButton' onClick={this.regButtonClicked}>Registrieren</div>
					<div id='iWrapperCaptcha'></div>
				</div>
			</div>
		)
	}
}
