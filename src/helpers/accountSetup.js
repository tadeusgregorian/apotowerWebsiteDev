import firebase from 'firebase'
import { createShortGuid } from './helperFunctions'

export const getInitialGroups = () => {
	const groupID_1 = createShortGuid()
	const groupID_2 = createShortGuid()
	return {
		[groupID_1]: {ID: groupID_1, name: 'Apotheker', notDeletable: true},
		[groupID_2]: {ID: groupID_2, name: 'PTA', notDeletable: true}
	}
}

const getInitialBranch = (pharmacyName) => {
	return {Z03930initialBranchID: {ID: 'Z03930initialBranchID', name: pharmacyName, notDeletable: true}}
}

const getInitialUser = (branchID) => {
	return {u001: {
		ID: 'u001',
		name: 'Max Mustermann',
		nameInitials: 'MaxM',
		color: '#2ecc71',
		isAdmin: true,
		branches: {Z03930initialBranchID: 1}
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
