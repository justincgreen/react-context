import { useState, createContext } from 'react';

const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {
	const [user, setUser] = useState('Default User');
	
	const handleUser = () => {
		setUser('Bob Belcher');
	}
	
	return (
		<GlobalContext.Provider value={{			
			user,
			setUser,
			actions: {
				changeUser: handleUser
			}
		}}>
		{props.children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;