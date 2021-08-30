import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registration from './components/Registration';
import Items from './components/Items'
import Home from './components/Home';

import './App.css';


function App() {
    return (
        <Router>
        <div className="App">
            <Switch>
                <Navbar/>
            </Switch>

            <Route path='/'><Home /></Route>
           
            <Route path='/login' component={Login}/>

            <Route path='/signup' component={Registration} />            

            {/* wasn't sure about the route to use I figured it will be routed from the Events form page Just here for dispaly until other route is finished */}
            {/* <Items /> */}
            <Route 
            path='/itemlist'
            component={Items}
            />

        </div>
        </Router>

    )
}

export default App;