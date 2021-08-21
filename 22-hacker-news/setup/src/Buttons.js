import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
	const { page, nbPages, handlePage, isLoading } = useGlobalContext();
	return (
		<div className='btn-container'>
			<button disabled={isLoading} onClick={() => handlePage('DEC')}>
				prev
			</button>
			<p>
				{page + 1} of {nbPages}{' '}
			</p>
			<button disabled={isLoading} onClick={() => handlePage('INC')}>
				next
			</button>
		</div>
	);
};

export default Buttons;
