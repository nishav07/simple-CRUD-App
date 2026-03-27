import NotesCard from "../components/NotesCard"

export default function Home({notes,delFunx,pinFunx}){
    return(<div id="home">
       <NotesCard notes={notes} delFunx={delFunx} pinFunx={pinFunx}/>
    </div>)
}       