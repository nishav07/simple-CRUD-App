import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import NotesApp from './features/NotesApp'
import Home from "./Pages/Home"
import New from "./Pages/New"
// import NotFound from "./Pages/404"
import './App.css'

function App() {

  return (
   <>
   <Routes>
      <Route path="/" element={<NotesApp />}>
        <Route index element={< Home/>} />
        <Route path="new" element={<New />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
   </>
  )
}

export default App
