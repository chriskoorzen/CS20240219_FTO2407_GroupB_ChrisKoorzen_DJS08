import React from "react"
import { Outlet, Navigate, useOutletContext } from "react-router-dom"

export default function AuthRequired() {
    const auth = localStorage.getItem("loggedin")
    
    if (auth) {
        // Allow routing to Protected Route
        return <Outlet context={ auth }/>
    }

    return (
        <Navigate 
            to="/login" 
            state={{message: "You must log in first"}}
            replace
        />
    )
}