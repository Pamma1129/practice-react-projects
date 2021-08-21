import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
	const { isModalOpen, isSidebarOpen, openModal, openSidebar } =
		useGlobalContext();

	return (
		!isModalOpen &&
		!isSidebarOpen && (
			<main>
				<button className='sidebar-toggle'>
					<FaBars onClick={() => openSidebar()} />
				</button>
				<button
					className='btn'
					onClick={() => {
						openModal();
					}}>
					showModal
				</button>
			</main>
		)
	);
};

export default Home;
