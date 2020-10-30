import React from 'react';

function Header() {
    return ( 
        <div className = "header fixed flex" >
            <div className = "logo" >
            <img src = { require("../Images/olxlogo.png") } />  
            </div> 
            <div className = "location rel" >
                <div className = "icon-search" / >
                <input className = "label" placeholder = "your Location" / >
                <button className = "icon-chevron-down" /> 
            </div>  
            <div className="search aic">
                <input type="text" placeholder = "Find Cars, Mobile phones and more..." className="query" / > <button className = "icon-search" /> 
  
            </div>
            <div className="action flex aic">
                <button className = "">
                    <div className = "icon-plus" />
                        <h2 className="">Sell</h2>
                </button> 
  
            </div>
        < /div>
    )
}

export default Header;