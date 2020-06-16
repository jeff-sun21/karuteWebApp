import React from "react";
import "./Home.css";
import logo from '../logo.svg';

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Karute</h1>
        <p>A simple Karute management app</p>
        <img src={logo} className="App-logo" alt="logo"  />
      </div>
    </div>
  );
}