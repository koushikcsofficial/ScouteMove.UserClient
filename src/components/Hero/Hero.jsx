import { Search } from "@mui/icons-material";
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroSection p-5">
      <div className="left">
        <h1>
          Dare to live <span>the life</span> you've always <b>wanted</b>.
        </h1>
        <div className="searchbox">
          <div className="search">
            <Search />
            <input type="text" placeholder="Search Blogs,Articles" />
          </div>
          <button>Search</button>
        </div>
      </div>
      <div className="right">
        <div className="temperatureSection">
          <div className="left">
            <div className="vector">
              <h3>Delhi</h3>
              <img src="/img/herosun.png" alt="logo" />
              <button>Delhi</button>
            </div>
            <h1>-28º</h1>
          </div>
          <div className="right">
            <p>Precipitation: 7% </p>
            <p>Humidity: 54% </p>
            <p>Wind: 5 mph</p>
          </div>
        </div>
        <div className="temperatureBoxes">
          <div className="temperaturebox darkbg">
            <p>Delhi</p>
            <h1>28º</h1>
            <img src="/img/sunicon.png" alt="logo" />
          </div>
          <div className="temperaturebox">
            <p>Mumbai</p>
            <h1>18º</h1>
            <img src="/img/sunicon.png" alt="logo" />
          </div>
          <div className="temperaturebox">
            <p>Chennai</p>
            <h1>28º</h1>
            <img src="/img/cloudicon.png" alt="logo" />
          </div>

          <div className="temperaturebox">
            <p>pemba</p>
            <h1>28º</h1>
            <img src="/img/sunicon.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
