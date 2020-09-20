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
        let firstname = "Usama";
        let lasttname = "Rajput";
        return ( 
            <div>
            <h1> {`${firstname} ${lasttname}`} < /h1> 
            </div >
        )
    }
}

export default App;