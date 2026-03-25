import "../index.css"
import { Link } from "react-router-dom";

export default function Navbar(){
    return(<div id="navbar">
        <h1>WeNote</h1>

        <div id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="search notes" id="searchBar"/>
        </div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">Add</Link></li>
            <li><a href="">filter</a></li>
        </ul>
    </div>)
}