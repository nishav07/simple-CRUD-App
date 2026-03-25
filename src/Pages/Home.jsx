import NotesCard from "../components/NotesCard"

export default function Home({notes}){
    return(<div id="home">
       <h1>Your notes</h1>
       <NotesCard notes={notes}/>
    </div>)
}       