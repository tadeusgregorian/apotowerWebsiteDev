import firebase from 'firebase'
import moment from 'moment'

export const createShortGuid = () => {
	const unix = moment().format('X')
	console.log(unix)
	let d = new Date().getTime()
	if (window.performance && typeof window.performance.now === 'function') {
		d += performance.now()
	}
	let uuid = 'xxxxxxxxyxxx'.replace(/[xy]/g, function (c) {
		let r = (d + Math.random() * 16) % 16 | 0
		d = Math.floor(d / 16)
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
	});
	return unix + uuid;
}

export const getInitialGroups = () => {
	const groupID_1 = createShortGuid()
	const groupID_2 = createShortGuid()
	return {
		[groupID_1]: {ID: groupID_1, name: 'Apotheker'},
		[groupID_2]: {ID: groupID_2, name: 'PTA'}
	}
}

export const getInitialBranch = (pharmacyName) => {
	const branchID = createShortGuid()
	return {[branchID]: {ID: branchID, name: pharmacyName}}
}

export const getIntitialPrefs = (accountID) => {
	return {
		maxUsers: 20,
		maxBranches: 2,
		creationTime: firebase.database.ServerValue.TIMESTAMP,
		ID: accountID
	}
}

export const getInitialAccountData = (pharmacyName) => {
	return {
		groups: getInitialGroups(),
		branches: getInitialBranch(pharmacyName)
	}
}
