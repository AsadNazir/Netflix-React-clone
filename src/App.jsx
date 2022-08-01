import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./index.css";
import Row from "./components/Row";
import instance from "./axios.js";
import REQUEST from "./request";
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      {/* <h1>This is My Nutelafix App</h1>
      <p>This is going to  be an awesomw app as practice for React JS. Hope You like it.</p> */}
      <Row title="Netflix-Originals" fetchURL={REQUEST.Netflix_Originals} large={true}/>
      <Row title="Trendings" fetchURL={REQUEST.trending} large={false}/>
      <Row title="Horror" fetchURL={REQUEST.Horror} large={false}/>
      <Row title="Comedy" fetchURL={REQUEST.Comedy} large={false}/>
      <Row title="Romance" fetchURL={REQUEST.Romance} large={true}/>
      <Row title="Documentary" fetchURL={REQUEST.Doucmentary} large={true}/>
    </div>
  );
}

export default App;
