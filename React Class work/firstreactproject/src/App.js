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
class App extends React.Component {
    render() {
        let todos = [{ text: "ghous" }, { text: "basit" }];
        return ( <
            div >
            <
            ul > {
                todos.map((item, index) => {
                    console.log(item)
                })
            } <
            /ul></div >
        )
    }
}

export default App;