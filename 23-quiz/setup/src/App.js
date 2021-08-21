import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function App() {
	const {
		waiting,
		loading,
		questions,
		index,
		correct,
		handleNextQuestion,
		checkAnswer,
	} = useGlobalContext();

	if (waiting) {
		return <SetupForm />;
	}
	if (loading) {
		return <Loading />;
	}

	const { question, incorrect_answers, correct_answer } = questions[index];

	console.log(correct_answer);
	const randomIndex = Math.floor(Math.random() * 4);
	const answers = [...incorrect_answers];
	answers.splice(randomIndex, 0, correct_answer);
	console.log(answers);

	return (
		<main>
			<Modal />
			<section className='quiz'>
				<p className='correct-answers'>
					correct answers: {correct} / {index}
				</p>
				<article className='container'>
					<h2 dangerouslySetInnerHTML={{ __html: question }} />
					<div className='btn-nav-container'>
						{answers.map((answer, index) => {
							return (
								<button
									key={index}
									className='answer-btn'
									onClick={() => checkAnswer(correct_answer === answer)}
									dangerouslySetInnerHTML={{ __html: answer }}
								/>
							);
						})}
					</div>
				</article>
				<button onClick={() => handleNextQuestion()} className='next-question'>
					next question
				</button>
			</section>
		</main>
	);
}

export default App;
