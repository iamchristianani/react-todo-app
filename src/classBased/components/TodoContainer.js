import React from 'react';
// import component file
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
// import UUID

class TodoContainer extends React.Component {
  // eslint-disable-next-line
  state = {
    todos: [],
  };

  // eslint-disable-next-line
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  delTodo = (id) => {
    this.setState({
      todos: [
        // eslint-disable-next-line
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      // eslint-disable-next-line
      todos: [...this.state.todos, newTodo],
    });
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      // eslint-disable-next-line
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //   .then(response => response.json())
    //   .then(data => this.setState({ todos: data }));
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line
    if (prevState.todos !== this.state.todos) {
      // eslint-disable-next-line
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            // eslint-disable-next-line
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
