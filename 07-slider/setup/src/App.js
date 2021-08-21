import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
	const [reviews, setReviews] = useState(data);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setValue(value => (value === data.length - 1 ? 0 : value + 1));
		}, 3000);
		return () => clearInterval(id);
	}, [value]);

	return (
		<section className='section'>
			<div className='title'>
				<h2>
					<span>/</span> reviews
				</h2>
			</div>
			<div className='section-center'>
				{reviews.map((review, index) => {
					const { id, image, name, title, quote } = review;

					let position = 'nextSlide';
					if (index === value) position = 'activeSlide';
					if (
						index === value - 1 ||
						(value === 0 && index === data.length - 1)
					) {
						position = 'lastSlide';
					}

					return (
						<article className={position} key={id}>
							<img className='person-img' src={image} alt={name} />
							<h4>{name}</h4>
							<p className='title'>{title}</p>
							<p className='text'>{quote}</p>
							<FaQuoteRight className='icon' />
						</article>
					);
				})}
				<button
					onClick={() =>
						setValue(value => (value === 0 ? data.length - 1 : value - 1))
					}
					className='prev'>
					<FiChevronLeft />
				</button>
				<button
					onClick={() =>
						setValue(value => (value === data.length - 1 ? 0 : value + 1))
					}
					className='next'>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

export default App;
