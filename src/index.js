import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./TodoApp";
import "./styles.css";

const rootElement = document.getElementById("root")

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
)
