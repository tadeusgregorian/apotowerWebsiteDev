import firebase from 'firebase'
import { getIntitialPrefs } from 'helpers'
import { getInitialAccountData } from 'helpers'

var config = {
	apiKey: "AIzaSyCRAE8D33cStZVlM_uGLKptrPA8EaCZC-w",
	authDomain: "apochecklistdemo.firebaseapp.com",
  databaseURL: "https://apochecklistdemo.firebaseio.com",
	projectId: "apochecklistdemo"
};

export default firebase.initializeApp(config);

export const createNewAccountOnDB = (accountID, pharmacyName) => {
	const prefs = getIntitialPrefs(accountID)
	const initialAccountData = getInitialAccountData(pharmacyName)

	var accountRef = firebase.database().ref('accounts/' + accountID)
	accountRef.set(initialAccountData)
	accountRef.child('prefs').set(prefs)
}
