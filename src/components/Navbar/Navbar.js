import React, {Component} from "react";
import "./navbar.scss"
export default class Navbar extends Component{
    state={
        navbar_items:[
            {link:"#", title:"Home"},
            {link:"#", title:"Location"},
            {link:"#", title:"Blog"},
            {link:"#", title:"About"},
            {link:"#", title:"Contact"}
        ]
    }
  render(){
    const {navbar_items} = this. state
    return(
       <nav className="navbar">
        <h1>Trevland</h1>
        <ul className="ul">
        {
            navbar_items.map((item,index)=>{
                return <li className="li" key={index}><a className="a" href={item.link}>{item.title}</a></li>
            })
        }
        </ul>
        <button>Booking now</button>
       </nav>
    )
  }
}