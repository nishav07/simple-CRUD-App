import NotesCard from "../components/NotesCard"

export default function Home({notes,delFunx}){
    return(<div id="home">
       <NotesCard notes={notes} delFunx={delFunx}/>
    </div>)
}       