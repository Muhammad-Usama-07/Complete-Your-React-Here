import React from 'react';

function Header(){
    return(
        <div className= "header fixed flex">
            <img src={require("../Images/olxlogo.svg")} />
        </div>
    )
}

export default Header;