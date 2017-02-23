import React, { Component } from 'react';
import './App.css';
import Top from './Top';

class App extends Component {
    render() {
        return ( 
            < div className="App" >
            <Top />
                <p className="App-intro">
                    This is the main landing page!
                </p>
            </div >
        );
    }
}


export default App;