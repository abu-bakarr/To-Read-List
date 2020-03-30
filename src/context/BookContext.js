import React, {useState, createContext} from 'react';
import uuid from 'uuid/v1'


export const BookContext =  createContext()

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title: "Chick and the river", author: "Lovel", year: "2001", id: 1},
        {title: "Dest in mane", author: "Maje", year: "2021", id: 2},
        {title: "Hust  the river", author: "Bakarr", year: "2023", id: 3},
    ])
    const addBook = (title, year, author) =>{
        setBooks([...books, {title, year, author, id: uuid()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
  return (
   <BookContext.Provider value={{books, addBook, removeBook}}>
       {props.children}
   </BookContext.Provider>
  );
}
