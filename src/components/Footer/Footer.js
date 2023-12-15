import React, {Component} from "react";
import "./footer.scss"
import icon3 from "../img/icon3.svg"
export default class Footer extends Component{
  state={
    footer_item1:[
        {link:"#", title:"Services"},
        {link:"#", title:"About"},
        {link:"#", title:"Our story"},
        {link:"#", title:"Benefits"},
        {link:"#", title:"Branding"}
    ],
    footer_item2:[
      {link:"#", title:"Legal"},
      {link:"#", title:"Terms & Conditions"},
      {link:"#", title:"Privecy Policy"},
      {link:"#", title:"Terms of use"}
  ]
}
  render(){
    const {footer_item1,footer_item2} = this. state
    return(
      <footer className="footer">
        <div className="footer_item1">
        <h2>Trevland</h2>
        <p>Contact us</p>
        <p>@shovasatkhira88.com</p>
        <img src={icon3} />
        </div>
        <div className="footer_item2">
        <ul>
        {
            footer_item1.map((item,index)=>{
                return <li key={index}><a href={item.link}>{item.title}</a></li>
            })
        }
        </ul>
        </div>
        <div className="footer_item2">
        <ul>
        {
            footer_item2.map((item,index)=>{
                return <li key={index}><a href={item.link}>{item.title}</a></li>
            })
        }
        </ul>
        </div>


        <div className="footer_item3">
        <h2>SUBSCRIBE NOW</h2>
        <span>
          <input type="text"placeholder="Email" className="input" />
          <button>Send</button>
        </span>
        </div>
      </footer>
    )
  }
}