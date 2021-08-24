import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';

import './App.css';


function App() {
    return (
        <Router>
        <div className="App">
            <Switch>
                <Navbar/>
            </Switch>
        </div>
        </Router>
    )
}

export default App;