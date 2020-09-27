import React from 'react';
import car from '../images/photo-1542362567-b07e54358753.jpg'


class Header extends React.Component{
    render(){
        return(
            <div className = "header">
                <h2>A Header</h2>
            </div>
        )
    }
}
class Logo extends React.Component{
    render(){
        return(
            <div>
                <img src = {car}  width="54px"/>
            </div>
        )
    }
}

export{
    Header,Logo
}   