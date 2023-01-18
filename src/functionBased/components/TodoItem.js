import React, { useState, useEffect } from 'react';
// import Styles
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';
// import SVG

// eslint-disable-next-line
const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  // eslint-disable-next-line
  const { completed, id, title } = props.todo;
  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
    // eslint-disable-next-line
    console.log('Cleaning up...');
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          // eslint-disable-next-line
          onChange={() => props.handleChangeProps(id)} />
        {/* eslint-disable-next-line */}
        <button type="button" onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>
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
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
