import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';

const SingleColor = ({ color, index }) => {
	const { rgb, weight, hex } = color;
	const [alert, setAlert] = useState(false);
	const bgColor = rgb.join(',');
	const hexValue = `#${hex}`;

	useEffect(() => {
		const id = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => {
			clearTimeout(id);
		};
	}, [alert]);

	return (
		<article
			className={`color ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${bgColor})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
			}}>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'> {hexValue}</p>
			{alert && <p className='alert'>copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
