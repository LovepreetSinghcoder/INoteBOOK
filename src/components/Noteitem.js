import React , { useContext } from 'react';

import noteContext from "../context/notes/noteContext";


export const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            {/* {note.title}
            {note.description} */}
            <div className="card my-3">

                <div className="card-body">
                    <h4 className="card-title">{note.title}</h4>
                    <p className="card-text">{note.description}  </p>
                    {/* <i className="fa-solid fa-circle-trash"></i> */}
                    <i className="fa-solid fa-trash mx-2" onClick={() =>{deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-user-pen mx-2" onClick={() =>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    ) 
}
