import  {useState, useEffect, createContext, useReducer} from 'react';
import { bookReducer } from '../reducers/bookReducer';

// %% WAS COMMENT BECAUSE OF REDUX"
// import uuid from 'uuid/v1'


export const BookContext =  createContext()

export default function BookContextProvider(props) {


        //%%  WAS COMMENT BECAUSE OF REDUX
    // const [books, setBooks] = useState([
    //     {title: "Chick and the river", author: "Lovel", year: "2001", id: 1},
    //     {title: "Dest in mane", author: "Maje", year: "2021", id: 2},
    //     {title: "Hust  the river", author: "Bakarr", year: "2023", id: 3},
    // ])
    // const addBook = (title, year, author) =>{
    //     setBooks([...books, {title, year, author, id: uuid()}])
    // }
    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    const [books, dispatch] = useReducer(bookReducer, [], () =>{
        const locatData = localStorage.getItem('lovelBooks')
        return locatData ? JSON.parse(locatData) : []
    })

    useEffect(() =>{
        localStorage.setItem('lovelBooks', JSON.stringify(books))
    },[books])

  return (
   <BookContext.Provider value={{books, dispatch}}>
       {props.children}
   </BookContext.Provider>
  );
}
