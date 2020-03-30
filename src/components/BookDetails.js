import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';

export default function BookDetails({book}) {
    const {removeBook} = useContext(BookContext)
  return (
    <div>
        <li>
              <div className="title"> Title: {book.title}</div>
              <div className="year">Year published: {book.year}</div>
              <div className="author">Written By: {book.author}</div>
              <input type="submit" value="delete" onClick={() => removeBook(book.id)}/>
        </li>
       
    </div>
  );
}
