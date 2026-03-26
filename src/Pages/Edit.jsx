import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Edit({setNotes}){
    const navigate = useNavigate();
    const { id } = useParams();
    
    let [editedNotes,setEditNotes] = useState("");

    let handleNotes = (e) => {
        console.log(e.target.value)
        setEditNotes(e.target.value);
    }

    let editNotes = () => {
        setNotes((prev) => prev.map((t) => {
            if(id == t.id){
                return {...t,note:editedNotes}
            } else {
                return t
            }
        }))

        navigate("/")
    }
    
    return(<div id="inputBox">
        <input type="text" placeholder="edit" onChange={handleNotes} value={editedNotes}/>
        <button onClick={editNotes}>edit</button>
    </div>)
}