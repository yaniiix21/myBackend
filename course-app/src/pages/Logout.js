import { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext'

export default function Logout(){
	// localStorage.clear();

	const {unsetUser, setUser} = useContext(UserContext)

	// Clear the localstorage for the user's information
	unsetUser();

	useEffect(() => {
		// set the user state back to its original value
		setUser({id: null})
	})

	// Redirect back to login 
	return(
		<Redirect to='/login' />

	)
}

