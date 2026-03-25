import NotesCard from "../components/NotesCard"

export default function Home({notes}){
    return(<div id="home">
       <NotesCard notes={notes}/>
    </div>)
}       