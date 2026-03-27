import "../index.css"
import { Link } from "react-router-dom";

export default function Navbar({handler,setIsOpen,isOpen}){

    return(<div id="navbar">
        <h1>WeNote</h1>

        <div id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" onFocus={() => setIsOpen(true)} onBlur={() => {setIsOpen(false)}} placeholder="search notes" id="searchBar" onChange={(e) => handler(e.target.value)}/>
        </div>

        

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">Add</Link></li>
            <li><a href="">filter</a></li>
        </ul>
    </div>)
}