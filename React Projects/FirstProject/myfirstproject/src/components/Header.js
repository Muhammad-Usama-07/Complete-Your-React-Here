import React from 'react';

function Header() {
    return ( 
        <div className = "header fixed flex" >
            <div className = "logo" >
            <img src = { require("../Images/olxlogo.png") }/> 
            </div> 
        </div>
    )
}

export default Header;