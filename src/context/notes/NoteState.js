import NoteContext from "./noteContext"
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3Y2E4YzY5MWMwM2YzNDk4YjdiYmI3In0sImlhdCI6MTY1MjMzNjgzOH0.1EvGUGsSrDKQgyC6ax0z2sckitPyNXADUmy_-evB8y8'
            }
        });

        const json = await response.json()
        console.log(json)

        setNotes(json)

    }

    // ADD a Note
    const addNote = async (title, description, tag) => {
        // TODO API call

        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3Y2E4YzY5MWMwM2YzNDk4YjdiYmI3In0sImlhdCI6MTY1MjMzNjgzOH0.1EvGUGsSrDKQgyC6ax0z2sckitPyNXADUmy_-evB8y8'
            },

            body: JSON.stringify({ title, description, tag })
        });
        // const json = await response.json()

        console.log("Adding Note")
        const note = {
            "_id": "627cd19e633d98432a7b966d7",
            "user": "627ca8c691c03f3498b7bbb7",
            "title": title,
            "description": description,
            "tag": tag,
            "timestemp": "2022-05-12T09:56:54.847Z",
            "__v": 0

        };

        setNotes(notes.concat(note))
    }


    //Delete A Note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3Y2E4YzY5MWMwM2YzNDk4YjdiYmI3In0sImlhdCI6MTY1MjMzNjgzOH0.1EvGUGsSrDKQgyC6ax0z2sckitPyNXADUmy_-evB8y8'
            }
        });

        const json = response.json();
        console.log(json)

        console.log("Deleting this Note Of this id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    //Edit A Note
    const editNote = async (id, title, description, tag) => {

        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3Y2E4YzY5MWMwM2YzNDk4YjdiYmI3In0sImlhdCI6MTY1MjMzNjgzOH0.1EvGUGsSrDKQgyC6ax0z2sckitPyNXADUmy_-evB8y8'
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = response.json();

        // Login to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;