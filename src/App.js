import React, {Component} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/section/section";
import Article from "./components/article/article";
import Footer from "./components/Footer/Footer";

export default class App extends Component{
  render(){
    return(
      <div>
        <Header/>
       <Main/>
        <Section/>
        <Article/>
        <Footer/>
      </div>
    )
  }
}
