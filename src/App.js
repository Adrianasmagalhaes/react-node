import "./App.css";
import React, { useState, useEffect } from "react";
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("/books")
  //     .then((response) => response.json())
  //     .then(data => {
  //       console.log('data',data)
  //       setBooks(data)
  //     })
  //     // .then((data) => setBooks(data.content));
  // }, []);
  useEffect(()=>{
    axios.get('/books')
    .then((response)=> console.log(response.data))

  }, [])
  return (
    <div className="App">

      {/* <table border="1">
        <thead>
          <th>Titulo</th>
          <th>Autor</th>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td>{book.title} </td>
              <td>{book.authors} </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {JSON.stringify(books)}
    </div>
  );
}

export default App;
