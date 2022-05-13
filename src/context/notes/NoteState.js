import NoteContext from "./noteContext"
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "627cc693ad00dcda039b7415",
          "user": "627ca8c691c03f3498b7bbb7",
          "title": "hallo everyone",
          "description": "Hi everyponew i want",
          "tag": "nice",
          "timestemp": "2022-05-12T08:34:27.643Z",
          "__v": 0
        },
        {
          "_id": "627cd9e633d98432a7b966d7",
          "user": "627ca8c691c03f3498b7bbb7",
          "title": "hallo everyone",
          "description": "Hi everyponew i want",
          "tag": "nice",
          "timestemp": "2022-05-12T09:56:54.847Z",
          "__v": 0
        },
        {
          "_id": "627cd9e733d98432a7b966d9",
          "user": "627ca8c691c03f3498b7bbb7",
          "title": "hallo everyone",
          "description": "Hi everyponew i want",
          "tag": "nice",
          "timestemp": "2022-05-12T09:56:55.877Z",
          "__v": 0
        }
        ,
        {
          "_id": "627cd9e633d98432a7b966d7",
          "user": "627ca8c691c03f3498b7bbb7",
          "title": "hallo everyone",
          "description": "Hi everyponew i want",
          "tag": "nice",
          "timestemp": "2022-05-12T09:56:54.847Z",
          "__v": 0
        },
        {
          "_id": "627cd9e733d98432a7b966d9",
          "user": "627ca8c691c03f3498b7bbb7",
          "title": "hallo everyone",
          "description": "Hi everyponew i want",
          "tag": "nice",
          "timestemp": "2022-05-12T09:56:55.877Z",
          "__v": 0
        }
        ,
        {
          "_id": "627cd9e633d98432a7b966d7",
          "user": "627ca8c691c03f3498b7bbb7",
          "title": "hallo everyone",
          "description": "Hi everyponew i want",
          "tag": "nice",
          "timestemp": "2022-05-12T09:56:54.847Z",
          "__v": 0
        },
        {
          "_id": "627cd9e733d98432a7b966d9",
          "user": "627ca8c691c03f3498b7bbb7",
          "title": "hallo everyone",
          "description": "Hi everyponew i want",
          "tag": "nice",
          "timestemp": "2022-05-12T09:56:55.877Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] =useState(notesInitial);
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;