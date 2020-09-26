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
}

class App extends React.Component {
    render() {
        let todos = [{ text: "ghous" }, { text: "basit" }];
        return (
            <div> 
            <Header />
            <h1 style = {{backgroundColor: 'red'}}>Main Component </h1>
            <img src="https://www.aa.co.nz/assets/motoring/car-reviews/honda/civic/civic-ima-2012/_resampled/FillWyIxMjgwIiwiNzIwIl0/honda-civic-2012-1.JPG?m=1533799003" />
            
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