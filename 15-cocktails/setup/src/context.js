import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [searchterm, setSearchTerm] = useState('a');
	const [cocktails, setCocktails] = useState([]);

	const fecthCocktails = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${searchterm}`);
			const { drinks } = await response.json();
			console.log(drinks);

			if (drinks) {
				setCocktails(drinks);
			} else {
				setCocktails([]);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
		setLoading(false);
	}, [searchterm]);

	useEffect(() => {
		fecthCocktails();
	}, [searchterm, fecthCocktails]);

	return (
		<AppContext.Provider
			value={{
				loading,
				searchterm,
				cocktails,
				setSearchTerm,
			}}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
