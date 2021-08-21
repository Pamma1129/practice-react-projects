import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [menu, setMenu] = useState(items);
	const [categories, setCategories] = useState([
		'all',
		...new Set(items.map(item => item.category)),
	]);

	const filterByCategory = category => {
		const newFilter =
			category === 'all'
				? items
				: items.filter(item => item.category === category);
		setMenu(newFilter);
	};

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>our menu</h2>
					<div className='underline'></div>
				</div>
				<Categories
					categories={categories}
					filterByCategory={filterByCategory}
				/>
				<Menu items={menu} />
			</section>
		</main>
	);
}

export default App;
