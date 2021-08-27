import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registration from './components/Registration';

import './App.css';


function App() {
    return (
        <Router>
        <div className="App">
            <Switch>
                <Navbar/>
            </Switch>
            <Route path='/signup' component={Registration} />
            
            <Login />
        </div>
        </Router>
    )
}

export default App;