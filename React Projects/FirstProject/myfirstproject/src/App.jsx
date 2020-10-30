import React, {Component}from 'react';
import './App.css';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import Header from './components/Header'
import HomePage form './components/Home'


function App() {
        return(
            <Header></Header>
            <BrowserRouter>
                <Route path = '/'></Route>
            </BrowserRouter>
            
        );
  
}

export default App;
