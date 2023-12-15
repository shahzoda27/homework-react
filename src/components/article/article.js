import React, {Component} from "react";
import "./article.scss"
import img9 from "../img/img9.png"
import img10 from "../img/img10.png"
import img11 from "../img/img11.png"
import img12 from "../img/img12.png"
export default class Article extends Component{
  render(){
    return(
        <section className="article">
            <h1>From Blog & News</h1>
            <p className="p">Welcome to Community Conversations, a new interview series featuring Intrepid travellers, creatives and activists in our community.</p>
            <section className="article_box">
                <div className="article_item1">
                    <img src={img9}/>
                    <h3>Banff National Park</h3>
                    <p>Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada's most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible </p>
                    <h4>@thomasalva_adison</h4>
                </div>
                <div className="article_item2">
                    <div className="article_item2-box1">
                        <img src={img10} className="img10" />
                        <div>
                            <h3>The Hiroshima Peace!</h3>
                            <p>It was formally opened to the public in August that year.</p>
                            <h4>@shova_bd88</h4>
                        </div>
                    </div>
                    <div className="article_item2-box1">
                        <img src={img11} className="img10" />
                        <div>
                            <h3>The Hiroshima Peace!</h3>
                            <p>It was formally opened to the public in August that year.</p>
                            <h4>@shova_bd88</h4>
                        </div>
                    </div>
                    <div className="article_item2-box1">
                        <img src={img12} className="img10" />
                        <div>
                            <h3>The Hiroshima Peace!</h3>
                            <p>It was formally opened to the public in August that year.</p>
                            <h4>@shova_bd88</h4>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
  }
}