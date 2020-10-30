import React, {Component}from 'react';
import './App.css';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/Home'


function App() {
        return(
            <div>
            <Header />
            <BrowserRouter>
                <Route path = "/" component = {HomePage} />
            </BrowserRouter>
            </div>
        );
  
}

export default App;
