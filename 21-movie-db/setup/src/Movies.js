import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url =
	'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
	const { movies, loading, error } = useGlobalContext();

	if (loading) {
		return <div className='loading'></div>;
	}
	if (movies) {
		return (
			<section className='movies'>
				{movies.map(
					({ imdbID: id, Poster: poster, Title: title, Year: year }) => {
						return (
							<Link to={`/movies/${id}`} key={id} className='movie'>
								<article>
									<img src={poster !== 'N/A' ? poster : url} alt={title} />
									<div className='movie-info'>
										<h4 className='title'>{title}</h4>
										<p>{year}</p>
									</div>
								</article>
							</Link>
						);
					},
				)}
			</section>
		);
	} else {
		return <div className='error'>{error.msg}</div>;
	}
};

export default Movies;
