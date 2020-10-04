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
    constructor(){
        super()
        // this.state = {
        //     name: "ghous Ahmed",
        //     email: "asas@gmail.com",
        //     value: ""
        // }
        this.state = {
            todo: ["ghous", "ahmed", "omair"],
            value: ""
        }
        
    }
    add_todo = () =>{
        this.state.todo.push(this.state.value)
        // this.setState({
        //     todo: this.state.todo
        // })
        this.setState({
            todo: [...this.state.todo, this.state.value],
            value: ""
        })
    }
    delete_todo = (index) =>{
        this.state.todo.splice(index,1)
        this.setState({
            todo: this.state.todo
        })
    }
    edit_todo = (index) => {
        var updated_value = prompt("Enter Value");
        this.state.todo[index] = updated_value;
         this.setState({
            todo: this.state.todo
        })
        
    }
    
    // set_name = () => {
    //     this.setState({
    //         name: this.state.value
    //     })
    // }
    // get_name = () => {
    //     console.log(this.state.name)
    // }
    // handleChange(e){
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    // get_prop = (props) =>{
    //     console.log(props)
    // }
    render() {
        let {todo, value} = this.state;
       // let todos = [{ text: "ghous" }, { text: "basit" }];
        return (
            // <div> 
            //     <Logo />
            //     <Header get_prop = {this.get_prop} name = {this.state.name} email={this.state.email} page="Application Page" />
            //     <h2>My name is {this.state.name}</h2>
            //     <h4>My email is: {this.state.email}</h4>
            //     <input name="name" onChange = {(e) => this.handleChange(e)} type="text" placeholder= "name here"></input>
            //     <input name="email" onChange = {(e) => this.handleChange(e)} type="text" placeholder= " email"></input>

            //     <button onClick = {this.set_name}>set name</button>
            //     <button onClick = {this.get_name}>get name</button>

            // <h1 style = {{color: 'red'}}>Main Component </h1>
            //     <br />
            //     <BasicTextFields />
            //     <br />
            //     <button type="button" className="btn btn-primary">Primary</button>
            
            
            // {
            //     /*<
            //                 ul > {
            //                     todos.map((item, index) => {
            //                         return <li key = { index } > { item.text } < /li>
            //                     })
            //                 } <
            //                 /ul>*/
            // } 
            //     <Footer />
            // </div >
            <div>
                <input value = {value} onChange = {(e) => this.setState({value: e.target.value})} type = "text" placeholder = "Enter Value"></input>
                <button onClick = {this.add_todo}>Add Item</button>
                <ul>
                    {this.state.todo.map((v,i) => {
                        return <li key = {i}>{v} 
                            <button onClick = {() => this.edit_todo(i)}>Edit</button>
                            <button onClick = {() => this.delete_todo(i)}>Delete</button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default App;