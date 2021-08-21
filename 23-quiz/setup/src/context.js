import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

/* AppContext */
const AppContext = React.createContext();

const table = {
	sports: 21,
	history: 23,
	politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const defaultURL = `${API_ENDPOINT}amount=10&category=21&difficulty=easy&type=multiple`;

/* AppProvider */
const AppProvider = ({ children }) => {
	const [waiting, setWaiting] = useState(true);
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [error, setError] = useState(false);
	const [quiz, setQuiz] = useState({
		amount: 10,
		category: 'sports',
		difficulty: 'easy',
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	const fetchQuestions = async url => {
		setLoading(true);
		setWaiting(false);
		const response = await axios.get(url).catch(err => console.log(err));
		if (response) {
			const data = response.data.results;
			console.log(data);
			if (data.length) {
				setQuestions(data);
				setLoading(false);
				setWaiting(false);
				setError(false);
			} else {
				setWaiting(true);
				setError(true);
			}
		} else {
			setWaiting(true);
		}
	};

	const handleNextQuestion = () => {
		setIndex(oldIndex => {
			const index = oldIndex + 1;
			if (index > questions.length - 1) {
				openModal();
				return 0;
			}
			return index;
		});
	};

	const checkAnswer = value => {
		if (value) {
			setCorrect(oldState => oldState + 1);
		}
		handleNextQuestion();
	};

	useEffect(() => {
		fetchQuestions(defaultURL);
	}, []);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setWaiting(true);
		setCorrect(0);
		setIsModalOpen(false);
	};

	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		setQuiz({ ...quiz, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const { amount, category, difficulty } = quiz;
		const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}`;
		console.log(url);
		fetchQuestions(url);
	};

	return (
		<AppContext.Provider
			value={{
				waiting,
				loading,
				questions,
				index,
				correct,
				error,
				isModalOpen,
				handleNextQuestion,
				checkAnswer,
				closeModal,
				handleChange,
				handleSubmit,
				quiz,
			}}>
			{children}
		</AppContext.Provider>
	);
};

/* Global custom Hook */
const useGlobalContext = () => {
	return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
