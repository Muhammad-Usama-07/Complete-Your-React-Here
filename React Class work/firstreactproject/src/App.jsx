import React from 'react';
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
            <h1 style = {{color: 'red'}}>Main Component </h1>
            
            
            {
                /*<
                            ul > {
                                todos.map((item, index) => {
                                    return <li key = { index } > { item.text } < /li>
                                })
                            } <
                            /ul>*/
            } 
            </div >
        )
    }
}

export default App;