import { useState } from "react"
import { useNavigate, Navigate, useLocation, useOutletContext } from "react-router-dom"
import { loginUser } from "../dev/api.js"


export default function Login() {
    const auth = localStorage.getItem("loggedin")
    if (auth) return (<Navigate to="/host" />)
    
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const location = useLocation()
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(-1, { replace: true })
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
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
            { error ? (<h3 className="login-error">{error.message}</h3>) : null}
            
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
                <button disabled={status === "submitting"}>
                    { status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )

}