import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
	return (
		<section>
			<div className='title'>
				<h2>our tours</h2>
				<div className='underline'></div>
			</div>
			<div>
				{tours.map(tour => {
					return <Tour {...tour} key={tour.id} />;
				})}
			</div>
		</section>
	);
};

export default Tours;
