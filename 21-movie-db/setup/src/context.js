import React, { useState, useContext } from 'react';
import useFetch from './useFetch';

/* App Context */
const AppContext = React.createContext();

/* App Provider */
const AppProvider = ({ children }) => {
	const [query, setQuery] = useState('avengers');
	const {
		loading,
		error,
		data: { Search: movies },
	} = useFetch(`&s=${query}`);

	return (
		<AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
			{children}
		</AppContext.Provider>
	);
};

/* Custom Hook */
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
