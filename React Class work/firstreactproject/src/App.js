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

class Header extends React.Component {
    render() {
        return ( 
            <div>
            <h1>A Header </h1>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        let todos = [{ text: "ghous" }, { text: "basit" }];
        return (
            <div> 
            <Header />
            <h1>Main Component </h1>
            
            {
                /*<
                            ul > {
                                todos.map((item, index) => {
                                    return <li key = { index } > { item.text } < /li>
                                })
                            } <
                            /ul>*/
            } < /div >
        )
    }
}

export default App;