import React, {Component}from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';



class App extends Component {
    render(){
        return(
            <div>
            <Header />
            <h1>Main Body</h1>
            <Footer />
            </div>
            
        )
    }
  
}

export default App;
