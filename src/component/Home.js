import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../image/color2.avif";
import "../styles/home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
      <p> THE SUPER FAST COLOR PALETTES GENERATOR</p>
      <Link to="/color">
        <button> VIEW COLOURS </button>
      </Link>
    </div>
  </div>
  )
}

export default Home