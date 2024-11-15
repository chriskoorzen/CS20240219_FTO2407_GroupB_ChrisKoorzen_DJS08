import { Link, NavLink } from "react-router-dom"


export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    const setActive = ({isActive}) => {return isActive ? activeStyles : null}

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" style={setActive}>Host</NavLink>
                <NavLink to="/about" style={setActive}>About</NavLink>
                <NavLink to="/vans" style={setActive}>Vans</NavLink>
            </nav>
        </header>
    )
}