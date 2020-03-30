import React, {useState} from 'react';
import NewSongForm from './NewSongForm';
import uuid from 'uuid/v1'

export default function SongList() {

    const [songs, setSongs] = useState([
        { title: 'Mourning star', id: 1},
        { title: 'Cheif dont run', id: 2},
        { title: 'Collabo', id: 3},
    ])

   const  addSong =(title,year) =>{
        setSongs([...songs, {title, year, id: uuid()}])
    }
  return (
    <div className="song-list">
        <ul>
        {songs.map(song =>{
             return (
                <li key={song.id}>{song.title} --- {song.year}</li>
             )
         })}
        </ul>
         <button onClick={addSong}>Add</button>
         <NewSongForm  addSong={addSong}/>
    </div>
  );
}
