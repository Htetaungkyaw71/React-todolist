/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from '../TodoItem.module.css';

function Todoitem({
  title, completed, id, handleChanngeItem, deleteItem, setUpdate,
}) {
  const [edit, setEdit] = useState(false);
  const viewMode = {};
  const editMode = {};
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEdit(true);
  };

  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEdit(false);
    }
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>...</div>
      <input
        type="text"
        style={editMode}
        value={title}
        className={styles.textInput}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
      <input type="checkbox" className={styles.checkbox} checked={completed} onChange={() => handleChanngeItem(id)} />
      <button onClick={() => deleteItem(id)} type="button">Delete</button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>

    </li>
  );
}

export default Todoitem;
