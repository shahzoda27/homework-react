import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import "./header.scss"
export default class Header extends Component{
  render(){
    return(
       <div>
        <Navbar/>
        <header className="header">
           <h1>Railtrips To Here, There And Everywhere!</h1>
           <p>We all wish to start our year the best way possible and also according to a common belief if you have a great start to your.</p>
           <button>Explore more</button>
        </header>
       </div>
    )
  }
}