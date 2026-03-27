import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotesContainer from "./NotesContainer";
import { Link } from "react-router-dom";

export default function NotesApp({handler,setIsOpen,isOpen,filteredNotes}){

    console.log("filyer notes",filteredNotes)
    return(<div id="notesApp">
        <Navbar handler={handler} setIsOpen={setIsOpen} isOpen={isOpen}/>
        {isOpen && <div id="searchBox">{filteredNotes.map(val => (<div id="card" key={val.id}>
            <h1 >{val.note}</h1>
            <div id="btns">
                <Link to={`/edit/${val.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                
                <i id="delete" style={{color:"red"}} class="fa-solid fa-delete-left"></i>

                    <i style={{ color: val.isPinned ? "green" : "black"}} class="fa-solid fa-thumbtack"></i>
            </div>
        </div>))}</div>}
        <div id="notesContainer">
            <Outlet/>
        </div>
        </div>)
}