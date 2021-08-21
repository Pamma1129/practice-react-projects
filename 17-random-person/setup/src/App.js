import React, { useState, useEffect } from 'react';
import {
	FaEnvelopeOpen,
	FaUser,
	FaCalendarTimes,
	FaMap,
	FaPhone,
	FaLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
	const [loading, setLoading] = useState(true);
	const [person, setPerson] = useState(null);
	const [title, setTitle] = useState('name');
	const [value, setValue] = useState('random person');

	const handleValue = e => {
		if (e.target.classList.contains('icon')) {
			const labelName = e.target.dataset.label;
			setTitle(labelName);
			setValue(person[labelName]);
		}
	};

	const fetchUser = async () => {
		const response = await fetch(url);
		const data = await response.json();
		const person = data.results[0];
		const { email, phone } = person;
		const {
			name: { first, last },
		} = person;
		const {
			picture: { large: image },
		} = person;
		const {
			dob: { age },
		} = person;
		const {
			location: {
				street: { number, name },
			},
		} = person;
		const {
			login: { password },
		} = person;

		const newPerson = {
			name: `${first},${last}`,
			street: `${number} ${name}`,
			email,
			phone,
			image,
			age,
			password,
		};
		setPerson(newPerson);
		setLoading(false);
		setTitle('name');
		setValue(newPerson.name);
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<main>
			<div className='block bcg-black'></div>
			<div className='block'>
				<div className='container'>
					<img
						src={(person && person.image) || defaultImage}
						alt='random-user'
						className='user-img'
					/>
					<p className='user-title'>my {title} is </p>
					<p className='user-value'>{value}</p>
					<div className='values-list'>
						<button
							className='icon'
							data-label='name'
							onMouseOver={handleValue}>
							<FaUser />
						</button>
						<button
							className='icon'
							data-label='email'
							onMouseOver={handleValue}>
							<FaEnvelopeOpen />
						</button>
						<button className='icon' data-label='age' onMouseOver={handleValue}>
							<FaCalendarTimes />
						</button>
						<button
							className='icon'
							data-label='street'
							onMouseOver={handleValue}>
							<FaMap />
						</button>
						<button
							className='icon'
							data-label='phone'
							onMouseOver={handleValue}>
							<FaPhone />
						</button>
						<button
							className='icon'
							data-label='password'
							onMouseOver={handleValue}>
							<FaLock />
						</button>
					</div>
					<button className='btn' type='button' onClick={() => fetchUser()}>
						{loading ? 'loading...' : 'random-user'}
					</button>
				</div>
			</div>
		</main>
	);
}

export default App;
