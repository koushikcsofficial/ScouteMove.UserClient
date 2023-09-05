import React from "react";
import "./Slider.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Slider = () => {
  return (
    <div className="sliderSection p-5">
      <div className="sliderHeader">
        <button className="active">Michael Yon</button>
        <button>Long War Journal</button>
        <button>Army of Dude</button>
        <button>Stripes - Military News</button>
        <button>Kaboom War Journal</button>
      </div>
      <div className="sliderCards">
        <div className="sliderCard">
          <img src="/img/sliderimg1.png" alt="bg" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
            quam leo nec.
          </p>
        </div>
        <div className="sliderCard">
          <img src="/img/sliderimg2.png" alt="bg" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
            quam leo nec.
          </p>
        </div>
        <div className="sliderCard">
          <img src="/img/sliderimg3.png" alt="bg" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
            quam leo nec.
          </p>
        </div>
      </div>
      <div className="sliderBtns">
        <div className="left">
          <div className="btns">
            <span></span>
            <span className="active"></span>
          </div>
          <p>View all</p>
        </div>
        <div className="right">
          <div className="button">
            <ArrowBackIos />
          </div>
          <div className="button active">
            <ArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
