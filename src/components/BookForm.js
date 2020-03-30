import React, {useContext, useState} from 'react';
import { BookContext } from '../context/BookContext';

export default function BookForm() {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState("")

    const handleSubmit =(e) => {
        e.preventDefault()
        addBook(title, author, year)
        console.log(title, author, year)
        setAuthor("")
        setTitle("")
        setYear("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type="text"  placeholder="Enter Author" onChange={(e) => setAuthor(e.target.value)} value={author}/>
            <input type="text"  placeholder="Enter Year Published" onChange={(e) => setYear(e.target.value)} value={year}/>
            <input type="submit" value="Add Book" />
        </form>
    </div>
  );
}
