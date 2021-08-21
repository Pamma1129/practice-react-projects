import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
	const list = localStorage.getItem('list');
	return list ? JSON.parse(localStorage.getItem('list')) : [];
};

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage);
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	// const showAlert = useCallback((show = false, type = '', msg = '') => {
	// 	setAlert({ show, type, msg });
	// }, []);

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

	const removeItem = id => {
		showAlert(true, 'danger', 'item got removed!');
		setList(list.filter(item => item.id !== id));
	};

	const editItem = id => {
		const editingItem = list.find(item => item.id === id);
		setIsEditing(true);
		setEditId(id);
		setName(editingItem.title);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!name) {
			showAlert(true, 'danger', 'please enter item!');
		} else if (name && isEditing) {
			const editedList = list.map(item => {
				if (item.id === editId) {
					item.title = name;
				}
				return item;
			});
			setList(editedList);
			showAlert(true, 'success', 'item edited');
			setName('');
			setEditId(null);
			setIsEditing(false);
		} else {
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			showAlert(true, 'success', 'item added');
			setName('');
		}
	};

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
				<h3>grocery bud</h3>
				<div className='form-control'>
					<input
						className='grocery'
						placeholder='add item...'
						type='text'
						value={name}
						onChange={e => {
							setName(e.target.value);
						}}
					/>
					<button type='submit' className='submit-btn'>
						{isEditing ? 'edit' : 'add'}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className='grocery-container'>
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button
						onClick={() => {
							showAlert(true, 'danger', 'list got empty');
							setList([]);
						}}
						className='clear-btn'>
						clear items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
