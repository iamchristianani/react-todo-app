import React from 'react';
// import Styles
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  // eslint-disable-next-line
  state = {
    editing: false,
  }

  completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  // eslint-disable-next-line
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    console.log('Cleaning up ...');
  }

  render() {
    // eslint-disable-next-line
    const { completed, id, title } = this.props.todo;
    const viewMode = {};
    const editMode = {};

    // eslint-disable-next-line
    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            // eslint-disable-next-line
            onChange={() => this.props.handleChangeProps(id)}
          />
          {/* eslint-disable-next-line */}
          <button onClick={() => this.props.deleteTodoProps(id)}>
            Delete
          </button>
          <span style={completed ? this.completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            // eslint-disable-next-line
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
