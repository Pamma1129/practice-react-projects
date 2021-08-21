import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
	const { closeSidebar, isSidebarOpen } = useGlobalContext();

	return (
		<aside
			className={`${
				isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
			}`}>
			<div className='sidebar'>
				<button onClick={closeSidebar} className='close-btn'>
					<FaTimes />
				</button>
				<div className='sidebar-links'>
					{sublinks.map((sublink, index) => {
						const { links, page } = sublink;
						return (
							<article key={index}>
								<h4>{page}</h4>
								<div className='sidebar-sublinks'>
									{links.map((link, index) => {
										const { label, url, icon } = link;
										return (
											<a key={index} href={url}>
												{icon}
												{label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
