import React, { useState } from 'react';

export default function Home(){
    
    const [token, setToken] = useState(localStorage.getItem('token'))
    
    return(
        <div>
            {token && (<section className='homePage'>
            </section>)}
        {!token && (
            <div>
            <h1>Welcome to Potluck Planning!</h1>
            <h3>Bringing people together, one meal at a time.</h3>
            <p>Log In or Sign Up to join the fun!</p>
            </div>
        )}
        </div>
    )
}