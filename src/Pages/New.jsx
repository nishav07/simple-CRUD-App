import NotesContainer from "../features/NotesContainer";

export default function New({setNotes}){
    return(<div id="home">
       <NotesContainer setNotes={setNotes}/>
    </div>)
}       