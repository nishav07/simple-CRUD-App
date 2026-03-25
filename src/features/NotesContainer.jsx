import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NotesCard from "../components/NotesCard";


export default function NotesContainer(){
    let [notes,setNotes] = useState([]);
    let [currNotes,setCurrNotes] = useState("");

    let handleNotes = (e) => {
        console.log(e.target.value)
        console.log("notes",notes)
        setCurrNotes(e.target.value);
    }

    let addNotes = () => {
        setNotes((prev) => {
            return [...prev,{note:currNotes,id:uuidv4()}]
        } )

        setCurrNotes("");
    }
    
    return(<div id="notesContainer">
        <input type="text" placeholder="notes" onChange={handleNotes} value={currNotes}/>
        <button onClick={addNotes}>Add</button>


        <NotesCard notes={notes} />
    </div>)
}