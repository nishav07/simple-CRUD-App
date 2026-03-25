import "../index.css"

export default function Navbar(){
    return(<div id="navbar">
        <h1>WeNote</h1>

        <div id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="search notes" id="searchBar"/>
        </div>

        <ul>
            <li><a href="">Add</a></li>
            <li><a href="">Theme</a></li>
            <li><a href="">filter</a></li>
        </ul>
    </div>)
}