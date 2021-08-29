import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import registrationSchema from '../validation/registrationSchema'
import "./Registration.css"

export default function Registration() {
    const [registrationValues, setRegistrationValues] = useState({
        username: "",
        email: "",
        password: ""
    })
    
    const [disabled, setDisabled] = useState(true)

    const [registrationErrors, setRegistrationErrors] = useState({
        username: "",
        email: "",
        password: ""
    })

    const update = event => {
        yup.reach(registrationSchema, event.target.name)
            .validate(event.target.value)
            .then(() => {
                setRegistrationErrors({
                    ...registrationErrors,
                    [event.target.name]: ""
                })
            })
            .catch(error => {
                setRegistrationErrors({
                    ...registrationErrors,
                    [event.target.name]: error.message
                })
            })

        setRegistrationValues({
            ...registrationValues,
            [event.target.name]: event.target.value
        })
    }

    const submit = event => {
        event.preventDefault()
        console.log(registrationValues)
        setRegistrationValues({
            username: "",
            email: "",
            password: ""
        })
    }

    useEffect(() => {
        registrationSchema
        .isValid(registrationValues)
        .then(isSchemaValid => {
            setDisabled(!isSchemaValid)
        })
    })

    return (
        <div className="registration">
            <h1>Sign Up</h1>
            {console.log(registrationValues)}
            <form className="registration-form" onSubmit={event => submit(event)}>
                <label>
                    Username:
                    <input 
                        type="text"
                        name="username"
                        value={registrationValues.username}
                        onChange={update}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email"
                        name="email"
                        value={registrationValues.email}
                        onChange={update}
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password"
                        name="password"
                        value={registrationValues.password}
                        onChange={update}
                    />
                </label>
                <div>
                    <button disabled={disabled}>Submit</button>
                    <div className="errors">
                        <div>{registrationErrors.username}</div>
                        <div>{registrationErrors.email}</div>
                        <div>{registrationErrors.password}</div>
                    </div> 
                </div>
            </form>
        </div>
    )
}