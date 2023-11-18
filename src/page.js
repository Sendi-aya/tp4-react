import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./page1.css"

function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);
 
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    if (page === 1){
      setPage(20)
    };
  };

  const handleNextPage = () => {
    setPage(page + 1);
    if (page === 20){
      setPage(1)
    };
  };

  return (
    <div className="App">
      <h1>my List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <p>page : {page}</p>
      <br></br>
      <button onClick={handlePreviousPage}>Précédent</button>
      <button onClick={handleNextPage}>Suivant</button>
    </div>
  );
}

export default Api;
