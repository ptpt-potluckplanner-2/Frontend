import React, { useState } from 'react'

export default function Login() {
    const [loginValues, setLoginValues] = useState({
        username: "",
        password: ""
    })

    const update = event => {
        setLoginValues({ 
            ...loginValues, 
            [event.target.name]: event.target.value 
        })
    }

    const submit = event => {
        event.preventDefault()
        console.log(loginValues)
        setLoginValues({
            username: "",
            password: ""
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            {console.log(loginValues)}
            <form className="login-form" onSubmit={event => submit(event)}>
                <label>
                    Username:
                    <input 
                        type="text"
                        name="username"
                        value={loginValues.username}
                        onChange={update}
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password"
                        name="password"
                        value={loginValues.password}
                        onChange={update}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}