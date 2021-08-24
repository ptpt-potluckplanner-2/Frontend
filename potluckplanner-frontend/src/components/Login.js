import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import loginSchema from '../validation/loginSchema'

export default function Login() {
    const [loginValues, setLoginValues] = useState({
        username: "",
        password: ""
    })

    const [disabled, setDisabled] = useState(true)

    const [loginErrors, setLoginErrors] = useState({
        username: "",
        password: ""
    })

    const update = event => {
        yup.reach(loginSchema, event.target.name)
            .validate(event.target.value)
            .then(() => {
                setLoginErrors({
                    ...loginErrors,
                    [event.target.name]: ""
                })
            })
            .catch(error => {
                setLoginErrors({
                    ...loginErrors,
                    [event.target.name]: error.message
                })
            })

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

    useEffect(() => {
        loginSchema
        .isValid(loginValues)
        .then(isSchemaValid => {
            setDisabled(!isSchemaValid)
        })
    })

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
                <div>
                    <button disabled={disabled}>Submit</button>
                    <div className="errors">
                        <ul>
                            <li>{loginErrors.username}</li>
                            <li>{loginErrors.password}</li>
                        </ul>
                    </div> 
                </div>
            </form>
        </div>
    )
}