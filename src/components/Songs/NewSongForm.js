import React, {useState} from 'react';

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title,year)
        setTitle('')
        setYear('')
    }

    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <input type="text" value ={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value ={year} onChange={(e) => setYear(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default NewSongForm;
