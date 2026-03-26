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

  let deleteFunc = (id) => {
    setNotes((prev) => prev.filter((note) => note.id != id))
  }

  return (
   <>
   <Routes>
      <Route path="/" element={<NotesApp />}>
        <Route index element={< Home notes={notes} delFunx={deleteFunc}/>} />
        <Route path="/new" element={<New setNotes={setNotes} />} />
        <Route path="/edit/:id" element={<Edit setNotes={setNotes}/>}/>
        <Route path="*" element={<Err/>} />
      </Route>
    </Routes>
   </>
  )
}

export default App
