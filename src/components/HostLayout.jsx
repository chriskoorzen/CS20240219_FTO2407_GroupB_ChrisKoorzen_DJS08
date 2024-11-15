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
                <NavLink to="." end style={setActive}>Dashboard</NavLink>
                <NavLink to="income" style={setActive}>Income</NavLink>
                <NavLink to="vans" style={setActive}>Vans</NavLink>
                <NavLink to="reviews" style={setActive}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}