import firebase from 'firebase'
import moment from 'moment'

export const createShortGuid = () => {
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	const x1 = possible.charAt(Math.floor(Math.random() * possible.length))
	const x2 = possible.charAt(Math.floor(Math.random() * possible.length))
	const unix = moment().format('X')
	let d = new Date().getTime()
	if (window.performance && typeof window.performance.now === 'function') {
		d += performance.now()
	}
	let uuid = 'xxxxxxxxyxxx'.replace(/[xy]/g, function (c) {
		let r = (d + Math.random() * 16) % 16 | 0
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
	});
	return unix + uuid + x1 + x2;
}

export const getInitialGroups = () => {
	const groupID_1 = createShortGuid()
	const groupID_2 = createShortGuid()
	return {
		[groupID_1]: {ID: groupID_1, name: 'Apotheker', notDeletable: true},
		[groupID_2]: {ID: groupID_2, name: 'PTA', notDeletable: true}
	}
}

const getInitialBranch = (pharmacyName) => {
	return {initialBranch: {ID: 'initialBranch', name: pharmacyName, notDeletable: true}}
}

const getInitialUser = (branchID) => {
	return {u001: {
		ID: 'u001',
		name: 'Max Mustermann',
		nameInitials: 'MaxM',
		color: '#2ecc71',
		isAdmin: true,
		branches: {initialBranch: 1}
	}}
}

export const getAccountDetails = (accountID, email) => {
	return {
		ID: accountID,
		email: email,
		creationTime: firebase.database.ServerValue.TIMESTAMP,
		maxBranches: 2,
		maxUsers: 20,
	}
}

export const getInitialAccountData = (accountID, pharmacyName, email) => {
	return {
		groups: 					getInitialGroups(),
		branches: 				getInitialBranch(pharmacyName),
		users: 						getInitialUser(),
		accountDetails: 	getAccountDetails(accountID, email)
	}
}

export const replaceDotsWithCommas = (str) => str.replace(/\./g, ',')
