import React, {Component} from "react";
import "./main.scss"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
export default class Main extends Component{

  render(){
    return(
      <main className="main">
        <h2>Popular Location</h2>
        <p>For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and voyagers— from island hopping in the</p>
        <div className="main_box">
        <div className="main_item1">
          <img src={img1} className="img"/>
          <h4>Istanbul, Turkey</h4>
          <p>Istanbul is a major city in Turkey that straddles Europe. </p>
        </div>
        <div className="main_item1">
          <img src={img2} className="img"/>
          <h4>Kuala Lumpur, malaysia</h4>
          <p>A 272-step long trek leads you to this century.</p>
        </div>
        <div className="main_item1">
          <img src={img3} className="img"/>
          <h4>Seoul, South Korea</h4>
          <p>South Korea officially the Republic of Korea is a country in East Asia. </p>
        </div>
        </div>
      </main>
    )
  }
}