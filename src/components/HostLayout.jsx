import { NavLink, Outlet } from "react-router-dom"


export default function HostLayout(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    const setActive = ({isActive}) => {return isActive ? activeStyles : null}

    return(
        <>
            <nav className="host-nav">
                <NavLink to="/host" end style={setActive}>Dashboard</NavLink>
                <NavLink to="/host/income" style={setActive}>Income</NavLink>
                <NavLink to="/host/vans" style={setActive}>Vans</NavLink>
                <NavLink to="/host/reviews" style={setActive}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}