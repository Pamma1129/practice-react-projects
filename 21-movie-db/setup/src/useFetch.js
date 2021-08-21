import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(urlParams) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState({ show: false, msg: '' });
	const [data, setData] = useState([]);

	const getMovies = async url => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data.Response === 'True') {
				setData(data);
				setError({ show: false, msg: '' });
			} else {
				setError({ show: true, msg: data.Error });
			}
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			setLoading(false);
			setError({ show: true, msg: 'something went wrong!' });
		}
	};

	useEffect(() => {
		getMovies(`${API_ENDPOINT}${urlParams}`);
	}, [urlParams]);

	return { loading, error, data };
}

export default useFetch;
