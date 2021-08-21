import { useState, useEffect } from 'react';
import paginate from './utils';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const getProducts = async () => {
		const response = await fetch(url);
		const data = await response.json();
		const newFollowers = paginate(data); // we passed here Single Array of 100 items but get back as Array of Arrays -> which means newFollowers[0] -> represent first 10 followers and so on..
		setData(newFollowers);
		setLoading(false);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return { loading, data };
};
