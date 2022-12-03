import React from 'react';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
};

async function TodosList() {
  const todos = await fetchTodos();

  return <div>TodosList</div>;
}

export default TodosList;
