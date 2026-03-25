export default function NotesCard({notes}){
    return(<div id="notesCard">
        {notes.map(note => (<div id="card" key={note.id}>
            <h1 >{note.note}</h1>
            <div id="btns">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-bin"></i>
            </div>
        </div> )) }
    </div>)
}