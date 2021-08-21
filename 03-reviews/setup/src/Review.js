import React, { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, job, text, image } = reviews[index];

	const nextReview = () => {
		index < reviews.length - 1 &&
			index !== reviews.length - 1 &&
			setIndex(index => index + 1);
	};

	const prevReview = () => {
		index <= reviews.length - 1 && index !== 0 && setIndex(index => index - 1);
	};

	const randomReview = () => {
		const randomIndex = Math.floor(Math.random() * reviews.length);
		setIndex(randomIndex);
	};

	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} className='person-img' alt={name} />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='btn-container'>
				<button className='prev-btn' onClick={prevReview}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextReview}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomReview}>
				suprise me
			</button>
		</article>
	);
};

export default Review;
