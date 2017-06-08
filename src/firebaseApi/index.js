import firebase from 'firebase'
import { getInitialAccountData, replaceDotsWithCommas } from 'helpers'

const config = {
	apiKey: "AIzaSyCRAE8D33cStZVlM_uGLKptrPA8EaCZC-w",
	authDomain: "apochecklistdemo.firebaseapp.com",
  databaseURL: "https://apochecklistdemo.firebaseio.com",
	projectId: "apochecklistdemo"
};

export default firebase.initializeApp(config)

export const createNewAccountOnDB = (accountID, pharmacyName, email) => {
	const emailWithCommas = replaceDotsWithCommas(email)
	const initialAccountData = getInitialAccountData(accountID, pharmacyName, emailWithCommas)
	const ref = firebase.database().ref()

	ref.child('accounts/' + accountID).set(initialAccountData)
	ref.child('accountEmails/' + emailWithCommas).set(accountID)
}

export const setAuthStateChangeListener = () => {
	firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
			console.log(user.uid)
			//here we redirect the user after logging in to the app.apotower.de
			//window.location = "http://localhost:61611/"
		}
	})
}
