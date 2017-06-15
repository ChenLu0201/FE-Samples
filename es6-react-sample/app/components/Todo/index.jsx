import React from "react";
import PropTypes from "prop-types";
import scss from './Todo.scss';

const cx = classNames.bind(scss);

class Todo extends React.Component {
  static propTypes = {
    index: PropTypes.number
  };

  constructor (props) {
    super(props);
    this.state = {nextIndex:0, tasks: []};
    console.log('constructor()');
  };

  getInitialState() {
    console.log('getInitialState');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  deleteTask(taskId) {
    let originTasks = this.state.tasks;
    this.setState({tasks: originTasks.filter((task) => { return task !== taskId})}, null);
  };

  addTask() {
    let newTasks = this.state.tasks;
    let index = this.state.nextIndex;
    newTasks.push(index + 1);
    this.setState({nextIndex:index + 1, tasks: newTasks}, null);
  };

  render () {
    console.log('render');
    return (
      <div className={ cx('todo-app') }>
        <h1>Todo List</h1>
        <button onClick={() => this.addTask()}>add</button>
        <ul>
          {
            this.state.tasks.map((task) => {
              return <li>item{task}<button onClick={() => this.deleteTask(task)}>delete</button></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Todo;