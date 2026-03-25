import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotesContainer from "./NotesContainer";

export default function NotesApp(){
    return(<div id="notesApp">
        <Navbar/>
        <div id="notesContainer">
            <Outlet/>
        </div>
        </div>)
}