export default function NotesCard({notes}){
    return(<div id="notesCard">
        {notes.map(notes => (<h1 key={notes.id}>{notes.note}</h1> )) }
    </div>)
}