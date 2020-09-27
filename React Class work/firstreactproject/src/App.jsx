import React from 'react';


import {Header,Logo} from './components/Header';
import Footer from './components/Footer';
import BasicTextFields from './components/TextField'
import './App.css';


// Function Component
// ******************

// function App() {
//     return ( <
//         div >
//         <
//         h1 > Hello < /h1> < /
//         div >
//     );
// }


// Class Component
// ******************

/*
class Header extends React.Component {
    render() {
        return ( 
            <div className = "header">
            <h1>A Header </h1>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return ( 
            <div className = "footer">
            <h1>A Footer </h1>
            </div>
        )
    }
}*/

class App extends React.Component {
    render() {
       // let todos = [{ text: "ghous" }, { text: "basit" }];
        return (
            <div> 
                <Logo />
                <Header />
            <h1 style = {{color: 'red'}}>Main Component </h1>
                <br />
                <BasicTextFields />
                <br />
                <button type="button" className="btn btn-primary">Primary</button>
            
            
            {
                /*<
                            ul > {
                                todos.map((item, index) => {
                                    return <li key = { index } > { item.text } < /li>
                                })
                            } <
                            /ul>*/
            } 
                <Footer />
            </div >
        )
    }
}

export default App;