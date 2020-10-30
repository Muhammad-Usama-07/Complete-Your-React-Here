import React, {Component}from 'react';
import './App.css';
import {BrowserRouter, Route,Link} from 'react-router-dom'



class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Route path = '/'></Route>
            </BrowserRouter>
            
        )
    }
  
}

export default App;
