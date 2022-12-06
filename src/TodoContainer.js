/* eslint-disable no-param-reassign */
import { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todolist from './components/Todolist';
import Header from './components/Header';
import InputTodo from './components/InputTodo';

function TodoContainer() {
  const getInitialTodos = () => {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  const [list, setList] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(list);
    localStorage.setItem('todos', temp);
  }, [list]);

  const handleChannge = (id) => {
    setList((prev) => (
      prev.map((item) => {
        if (item.id === id) {
          return (
            {
              ...item,
              completed: !item.completed,
            }
          );
        }
        return item;
      })
    ));
  };

  const delTodo = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setList((prev) => [...prev, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setList((prev) => (
      prev.map((item) => {
        if (item.id === id) {
          item.title = updatedTitle;
        }
        return item;
      })
    ));
  };

  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodo={addTodo} />
          <Todolist
            todolist={list}
            handleChanngeProps={handleChannge}
            deleteHandle={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default TodoContainer;
