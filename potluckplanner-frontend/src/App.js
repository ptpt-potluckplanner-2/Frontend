import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registration from './components/Registration';
import Items from './components/Items'

import './App.css';


function App() {
    return (
        <Router>
        <div className="App">
            <Switch>
                <Navbar/>
            </Switch>
            <Registration />
            <Login />
            {/* wasn't sure about the route to use I figured it will be routed from the Events form page Just here for dispaly until other route is finished */}
            <Items />
        </div>
        </Router>
    )
}

export default App;