import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://books.ronier.me")
      .then((response) => response.json())
      .then((data) => setBooks(data.content));
  }, []);
  return (
    <div className="App">
      <table border="1">
        <thead>
          <td>Titulo</td>
          <td>Autor</td>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td>{book.title} </td>
              <td>{book.authors} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
