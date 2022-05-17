import React , { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import { AddNote } from './AddNote';
// import { Modal } from './Modal';
import { Noteitem } from './Noteitem';



export const Notes = () => {

    const context = useContext(noteContext);
    const {notes, getNotes} = context;
    // eslint-disable-next-line 
    useEffect(() => {
        getNotes()
    },[])
    const [note, setNote] = useState({ etitle: "", edescription: "",etag: "default" })

    
    const ref = useRef(null)
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    }
    const onChange = (e) => {
        setNote({ ...noteContext, [e.target.name]: e.target.value })
    }
    const onClick = (e) => {
        e.preventDefault();
        console.log("updating the Note..", note)
    }
    return (
        <>
        <AddNote/>
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title - Title of the Note </label>
                        <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="etag" value={note.etag} name="etag" />
                    </div>

                </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={onClick } type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row  my-3" >
            <h1>Your Notes </h1>
            {notes.map((note) => {
                return  <Noteitem key={note._id} updateNote={updateNote} note={note}/> 
            })}
        </div>
            </> 
    )
}
