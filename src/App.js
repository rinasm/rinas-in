import React, { Component } from 'react';
import './App.css';
import DataManager from './DataManager/DataManager';
import LandingLoader from './Component/LandingLoader/LandingLoader';
import Home from './Component/Home/Home';

DataManager({
    pageLoaded:false
});

class App extends Component {

    render() {
        return (
            <div className="App">
                <LandingLoader/>
                <Home/>
            </div>
        );
    }
}

export default App;
