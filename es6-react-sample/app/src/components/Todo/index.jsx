import React from "react";
import classNames from "classnames/bind";
import scss from './Todo.scss';

const cx = classNames.bind(scss);

class Todo extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={ cx('todo-app') }>
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