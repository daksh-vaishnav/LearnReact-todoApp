import "./App.css";
import Header from "./myComponent/Header";
import Todos from "./myComponent/Todos";
import React, { useState } from "react";
import Footer from "./myComponent/Footer";
import { AddTodo } from "./myComponent/AddTodo";

function App() {
	const [arr, setTodos] = useState([
		{
			title: "1. first todo",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid veritatis ipsam hic aperiam pariatur cumque nesciunt ut nisi distinctio esse id, officia odio modi maxime exercitationem recusandae provident magnam.",
			complete: false,
		},
		{
			title: "2. second todo",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid veritatis ipsam hic aperiam pariatur cumque nesciunt ut nisi distinctio esse id, officia odio modi maxime exercitationem recusandae provident magnam.",
			complete: false,
		},
		{
			title: "3. thrd todo",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid veritatis ipsam hic aperiam pariatur cumque nesciunt ut nisi distinctio esse id, officia odio modi maxime exercitationem recusandae provident magnam.",
			complete: false,
		},
	]);

	const onDelete = (id) => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm("Are You Sure!!!")){
			console.log("deleted item!!!", "id is ", id);
			// arr.splice(id,1); // not going to work in react
			setTodos(arr.filter((todo, index) => index !== id));
		}

	};

	const onDone = (id) => {
		setTodos(
			arr.map((todo, index) => {
				if (index === id) {
					todo.complete = true;
				}
				return todo;
			})
		);
	};

	const onUndone = (id) => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm("Are You Sure!!!")){
			setTodos(
				arr.map((todo, index) => {
					if (index === id) {
						todo.complete = false;
					}
					return todo;
				})
			);
		}
	};

	const events = { onDelete: onDelete, onDone: onDone, onUndone: onUndone };

	return (
		<div className="App">
			<Header title="My Todo List" />
			<AddTodo />
			<div className="container">
			<Todos data={arr} eventHandlers={events} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
