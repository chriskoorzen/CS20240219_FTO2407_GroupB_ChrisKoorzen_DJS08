import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const signInMessage = location.state?.message || "Sign in to your account"

    return (
        <div className="login-container">
            <h1>{signInMessage}</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}