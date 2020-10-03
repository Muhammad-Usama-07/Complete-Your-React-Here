import React from 'react';
import car from '../images/photo-1542362567-b07e54358753.jpg'


class Header extends React.Component{
    render(){
        console.log("props===", this.props)
        return(
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
            <Logo /> <button onClick = {() => this.props.get_prop("Saylani")}>Send data</button>
            </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#">Disabled</a>
                      </div>
                    </div>
                  </nav>
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