import { Link } from "react-router-dom"

export default function NotesCard({notes,delFunx,pinFunx}){

    return(<div id="notesCards">
        {notes.map(note => (<div id="card" key={note.id}>
            <h1 >{note.note}</h1>
            <div id="btns">
                <Link to={`/edit/${note.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                
                <i id="delete" style={{color:"red"}} onClick={() => {
                    console.log('id',note)
                    delFunx(note.id)
                    }} class="fa-solid fa-delete-left"></i>

                    <i onClick={() => {
                        pinFunx(note.id)
                    }} style={{ color: note.isPinned ? "green" : "black"}} class="fa-solid fa-thumbtack"></i>
            </div>
        </div> )) }
    </div>)
}