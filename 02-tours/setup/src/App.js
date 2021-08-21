import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import { ToursContext } from './Context';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const updatedTours = id => {
		const filteredTours = tours.filter(tour => tour.id !== id);
		setTours(filteredTours);
	};

	const fetchTours = async () => {
		try {
			const resp = await fetch(url);
			const tours = await resp.json();
			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	} else {
		return (
			<ToursContext.Provider value={updatedTours}>
				{tours.length ? (
					<main>
						<Tours tours={tours} />
					</main>
				) : (
					<main>
						<div className='title'>
							<h2>no tours left to browse</h2>
							<button className='btn' onClick={fetchTours}>
								refresh
							</button>
						</div>
					</main>
				)}
			</ToursContext.Provider>
		);
	}
}

export default App;
