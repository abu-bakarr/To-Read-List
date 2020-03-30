import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';

export default function BookDetails({book}) {
 //%%  WAS COMMENT BECAUSE OF REDUX
    // const {removeBook} = useContext(BookContext)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%
const {dispatch} = useContext(BookContext)
  return (
    <div>
        <li>
              <div className="title"> Title: {book.title}</div>
              <div className="year">Year published: {book.year}</div>
              <div className="author">Written By: {book.author}</div>
                <button id="del-btn" onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>Delete</button>
        </li>
       
    </div>
  );
}
