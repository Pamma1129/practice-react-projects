import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
	const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
	return (
		<main>
			<section className='quiz quiz-small'>
				<form className='setup-form'>
					<h2>setup quiz</h2>
					<div className='form-control'>
						<label htmlFor='amount'>number of questions</label>
						<input
							type='text'
							name='amount'
							id='amount'
							value={quiz.amount}
							className='form-input'
							min={1}
							max={50}
							onChange={handleChange}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='category'>select category</label>
						<select
							type='text'
							name='category'
							id='category'
							value={quiz.category}
							className='form-input'
							onChange={handleChange}>
							<option value='sports'>sports</option>
							<option value='history'>history</option>
							<option value='politics'>politics</option>
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='difficulty'>select difficulty</label>
						<select
							type='text'
							name='difficulty'
							id='difficulty'
							value={quiz.difficulty}
							className='form-input'
							onChange={handleChange}>
							<option value='easy'>easy</option>
							<option value='medium'>medium</option>
							<option value='hard'>hard</option>
						</select>
					</div>
					{error && (
						<p class='error'>
							cant generate questions, Please try different options.
						</p>
					)}
					<button type='submit' onClick={handleSubmit} className='submit-btn'>
						start
					</button>
				</form>
			</section>
		</main>
	);
};

export default SetupForm;
