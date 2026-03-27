import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import NotesApp from './features/NotesApp'
import Home from "./Pages/Home"
import New from "./Pages/New"
import Edit from './Pages/Edit'
import Err from './Pages/Err'
// import NotFound from "./Pages/404"
import './App.css'

function App() {
  let [notes,setNotes] = useState([]);
  let [searchQ,setSearchQ] = useState("");
  let [isOpen,setIsOpen] = useState("");

  let filteredNotes = notes.filter((val) => {
    console.log("search query hai",searchQ,"value hai",val,"notes hahi",val.note)
    if(searchQ === ""){
      return false
    } else{
      return val.note.toLowerCase().includes(searchQ.toLowerCase())
    }
    
  })

  const sortedNotes = [...notes].sort((a, b) => b.isPinned - a.isPinned);//sort fx mai a-b return acendinga ndn b-a deceing and yah 1(true)
//true chaiye uper then false(0) chhaiye neeeche so hum b-a kr rhe haiiii
  let deleteFunc = (id) => {
    setNotes((prev) => prev.filter((note) => note.id != id))
  }

  let pinFx = (id) => {
    console.log("pin btn is clicked",id);
    setNotes((prev) => prev.map((val) => {
      if(val.id == id){
        console.log("Comparing:", val.id, id, val.id == id);
        return {...val,isPinned:!val.isPinned}
      } else {
        return val
      }
  }))
  }

  
  return (
   <>
   <Routes>
      <Route path="/" element={<NotesApp handler={setSearchQ} setIsOpen={setIsOpen} isOpen={isOpen} filteredNotes={filteredNotes}/>}>
        <Route index element={< Home notes={sortedNotes} delFunx={deleteFunc} pinFunx={pinFx}/>} />
        <Route path="/new" element={<New setNotes={setNotes} />} />
        <Route path="/edit/:id" element={<Edit setNotes={setNotes}/>}/>
        <Route path="*" element={<Err/>} />
      </Route>
    </Routes>
   </>
  )
}

export default App
