import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
	return (
		<div className="todo-app">
			<h1>待辦事項</h1>
			<p>快把你會忘記的事情，通通記下吧～</p>
			<div className="raw">
				<AddTodo />
				<VisibilityFilters />
				<TodoList />
			</div>

		</div>
	);
}
