import React from 'react';
// import component files
import TodoItem from './TodoItem';

// eslint-disable-next-line
class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {/* eslint-disable-next-line */}
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            // eslint-disable-next-line
            handleChangeProps={this.props.handleChangeProps}
            // eslint-disable-next-line
            deleteTodoProps={this.props.deleteTodoProps}
            // eslint-disable-next-line
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
