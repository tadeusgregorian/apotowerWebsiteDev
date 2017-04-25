import firebase from 'firebase'
//import firebaseAuth from 'firebase/auth'

var config = {
	apiKey: "AIzaSyCRAE8D33cStZVlM_uGLKptrPA8EaCZC-w",
	authDomain: "apochecklistdemo.firebaseapp.com",
	projectId: "apochecklistdemo"
};

export default firebase.initializeApp(config);
