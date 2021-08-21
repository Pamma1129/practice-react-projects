import React from 'react';

const Categories = ({ categories, filterByCategory }) => {
	return (
		<div className='btn-container'>
			{categories.map((category, index) => {
				return (
					<button
						key={index}
						className='filter-btn'
						onClick={() => filterByCategory(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
