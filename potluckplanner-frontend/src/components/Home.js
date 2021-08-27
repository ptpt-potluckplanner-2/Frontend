import React, { useState } from 'react';

export default function Home() {

    const [token, setToken] = useState(localStorage.getItem('token'))

    return(
        <div>
            {token && (<section className='userPage'></section>)}
            {!token && (
            <div>
            <h1>Welcome to Potluck Planner!</h1>
            <h3>Bringing family and friends together for a unique meal experience.</h3>
            <p>Sign Up or Log In to join in the fun!</p>
            </div>
            )}
        </div>
    )
}