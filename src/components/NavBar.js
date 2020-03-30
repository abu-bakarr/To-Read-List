import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';


export default function NavBar() {
    const {books} = useContext(BookContext)
    console.log(books)
  return (
    <div className="navbar">
        <h2>Lovel's Reading Lists</h2>
        <p key={books.id}>Currently have {books.length}</p>
    </div>
  );
}
