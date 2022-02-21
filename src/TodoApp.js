import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
	return (
		<div className="todo-app">
			<h1>待辦事項</h1>
			<p>現在就來新增你的待辦事項吧～</p>
			<AddTodo />
			<VisibilityFilters />
			<TodoList />
		</div>
	);
}
