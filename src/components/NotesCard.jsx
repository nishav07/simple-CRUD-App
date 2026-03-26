import { Link } from "react-router-dom"

export default function NotesCard({notes,delFunx}){

    return(<div id="notesCards">
        {notes.map(note => (<div id="card" key={note.id}>
            <h1 >{note.note}</h1>
            <div id="btns">
                <Link to={`/edit/${note.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                
                <i id="delete" onClick={() => {
                    console.log('id',note)
                    delFunx(note.id)
                    }} class="fa-solid fa-delete-left"></i>
            </div>
        </div> )) }
    </div>)
}