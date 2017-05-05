import React from "react";

class Todo extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          <li>item1</li>
          <li>item2</li>
        </ul>
      </div>
    );
  }
}

export default Todo;