import React from "react";
import classNames from "classnames/bind";
import scss from './Todo.scss';

const cx = classNames.bind(scss);

class Todo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {nextIndex:0, tasks: []};
  }

  deleteTask(taskId) {
    let originTasks = this.state.tasks;
    this.setState({tasks: originTasks.filter((task) => { return task !== taskId})}, () => {console.log('hello')});
  }

  addTask() {
    let newTasks = this.state.tasks;
    let index = this.state.nextIndex;
    newTasks.push(index + 1);
    this.setState({nextIndex:index + 1, tasks: newTasks}, null);
  }

  render () {
    return (
      <div className={ cx('todo-app') }>
        <h1>Todo List</h1>
        <button onClick={() => this.addTask()}>add</button>
        <ul>
          {
            this.state.tasks.map((task) => {
              return <li key={task}>item{task}<button onClick={() => this.deleteTask(task)}>delete</button></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Todo;