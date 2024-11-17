import { Link, NavLink } from "react-router-dom"

import avatarImgUrl from "../../static/images/avatar-icon.png"


export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const setActive = ({isActive}) => {return isActive ? activeStyles : null}

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    const auth = localStorage.getItem("loggedin")

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="host" style={setActive}>Host</NavLink>
                <NavLink to="about" style={setActive}>About</NavLink>
                <NavLink to="vans" style={setActive}>Vans</NavLink>
                
                <Link to="login" className="login-link">
                    <img src={avatarImgUrl} className="login-icon"/>
                </Link>

                <button onClick={fakeLogOut}>x</button>
            </nav>
        </header>
    )
}