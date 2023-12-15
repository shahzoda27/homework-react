import React, {Component} from "react";
import "./section.scss"
import img4 from "../img/img4.png"
import icon1 from "../img/icon1.svg"
import icon2 from "../img/icon2.svg"
import img5 from "../img/img5.png"
import img6 from "../img/img6.png"
import img7 from "../img/img7.png"
import img8 from "../img/img8.png"
export default class Section extends Component{
  render(){
    return(
      <section className="section">
        <h1>Special Offers</h1>
        <p className="p">With the New Year comes a refreshing sense of wanderlust, a longing in our souls to escape to warmer climates, </p>
        <div className="section_box">
        <div className="section_item1">
        <img src={img4} className="img4"/>
        <h3>Statue of Liberty.</h3>
        <div className="icons"><span><img src={icon1}/>New York</span><span><img src={icon2}/>4.8</span></div>
        <p>4 Day 5 Nights</p>
        <h5>$450/person</h5>
        </div>
        <div className="section_item2">
        <img src={img5} className="img4"/>
        <h3>Statue of Liberty.</h3>
        <div className="icons"><span><img src={icon1}/>New York</span><span><img src={icon2}/>4.8</span></div>
        <p>4 Day 5 Nights</p>
        <h5>$450/person</h5>
        </div>
        <div className="section_item3">
        <img src={img6} className="img4"/>
        <h3>Statue of Liberty.</h3>
        <div className="icons"><span><img src={icon1}/>New York</span><span><img src={icon2}/>4.8</span></div>
        <p>4 Day 5 Nights</p>
        <h5>$450/person</h5>
        </div>
        <div className="section_item4">
        <img src={img7} className="img4"/>
        <h3>Statue of Liberty.</h3>
        <div className="icons"><span><img src={icon1}/>New York</span><span><img src={icon2}/>4.8</span></div>
        <p>4 Day 5 Nights</p>
        <h5>$450/person</h5>
        </div>
        <div className="section_item4">
        <img src={img8} className="img4"/>
        <h3>Statue of Liberty.</h3>
        <div className="icons"><span><img src={icon1}/>New York</span><span><img src={icon2}/>4.8</span></div>
        <p>4 Day 5 Nights</p>
        <h5>$450/person</h5>
        </div>
        </div>
      </section>
    )
  }
}