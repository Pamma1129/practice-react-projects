import React, { useEffect } from 'react';

const Alert = ({ type, msg, showAlert }) => {
	useEffect(() => {
		const id = setTimeout(() => {
			showAlert();
		}, 3000);

		return () => {
			clearTimeout(id);
		};
	}, [showAlert]);
	return <p className={`alert  alert-${type}`}>{msg}</p>;
};

export default Alert;
