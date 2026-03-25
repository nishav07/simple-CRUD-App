import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NotesCard from "../components/NotesCard";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function NotesContainer({setNotes}){
    const navigate = useNavigate();
    let [currNotes,setCurrNotes] = useState("");

    let handleNotes = (e) => {
        console.log(e.target.value)
        setCurrNotes(e.target.value);
    }

    let addNotes = () => {
        setNotes((prev) => {
            return [...prev,{note:currNotes,id:uuidv4()}]
        } )

        setCurrNotes("");
        navigate("/")
    }
    
    return(<div id="inputBox">
        <input type="text" placeholder="notes" onChange={handleNotes} value={currNotes}/>
        <button onClick={addNotes}>Add</button>
    </div>)
}