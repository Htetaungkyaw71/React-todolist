/* eslint-disable react/prop-types */
import React from 'react';
import Todoitem from './Todoitem';

function Todolist({
  todolist, handleChanngeProps, deleteHandle, setUpdate,
}) {
  return (
    <ul>
      {todolist.map((item) => (
        <Todoitem
          setUpdate={setUpdate}
          id={item.id}
          title={item.title}
          completed={item.completed}
          key={item.id}
          handleChanngeItem={handleChanngeProps}
          deleteItem={deleteHandle}
        />
      ))}
    </ul>
  );
}

export default Todolist;
