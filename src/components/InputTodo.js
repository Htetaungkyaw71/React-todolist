/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function InputTodo({ addTodo }) {
  const [input, setInput] = useState({ title: '' });
  const handleInput = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title.trim()) {
      addTodo(input.title);
      setInput({
        title: '',
      });
    } else {
      alert('please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" className="input-text" placeholder="Add Todo..." name="title" value={input.title} onChange={handleInput} />
      <button type="submit" className="input-submit">Add</button>
    </form>
  );
}

export default InputTodo;
