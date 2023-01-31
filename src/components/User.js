import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const User = () => {
	const { user, actions } = useContext(GlobalContext)
	
	return (
		<div>
			The User is: { user }
			<br />
			
			<button onClick={actions.changeUser}>Change User</button>
		</div>
	)
}

export default User