import React from 'react';
import './App.css';

// function App() {
//     return ( <
//         div className = "App" >

//         <
//         h1 > Hello < /h1> < /
//         div >
//     );
// }

class App extends React.Component {
    render() {
        let name = "Usama";
        return ( 
            <div>
            <h1> { name } < /h1> 
            </div >
        )
    }
}

export default App;