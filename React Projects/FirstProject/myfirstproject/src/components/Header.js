import React from 'react';

function Header() {
    return ( 
        <div className = "header fixed flex" >
            <div className = "logo" >
            <img src = { require("../Images/olxlogo.png") } />  
            </div> 
            <div className = "location rel" >
                <div className = "icon-search ico" / >
                <input className = "label s15 font" placeholder = "your Location" / >
                <button className = "icon-chevron-down arro" /> 
            </div>  
            <div className="search aic">
                <input type="text" placeholder = "Find Cars, Mobile phones and more..." className="query font s15" / > <button className = "icon-search go" /> 
  
            </div>
            <div className="actions flex aic">
                <button className = "">
                    <div className = "icon-plus" />
                        <h2 className="s15 font">Sell</h2>
                </button> 
  
            </div>
        < /div>
    )
}

export default Header;