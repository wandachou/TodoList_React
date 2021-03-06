import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import "../styles.css"

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          placeholder="請輸入待辦事項"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          新增
        </button>
      </div>
    );
  }
}

export default connect(null,{addTodo})(AddTodo);
