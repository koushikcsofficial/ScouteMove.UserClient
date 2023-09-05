import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./ArticleSlider.css";

const ArticleSlider = () => {
  return (
    <div className="articleSlider p-5">
      <h5>Similar articles</h5>
      <div className="sliderSection articlesliderSection">
        <div className="sliderCards">
          <div className="sliderCard">
            <img src="/img/sliderimg4.png" alt="bg" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
              quam leo nec.
            </p>
          </div>
          <div className="sliderCard">
            <img src="/img/sliderimg4.png" alt="bg" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
              quam leo nec.
            </p>
          </div>
          <div className="sliderCard">
            <img src="/img/sliderimg4.png" alt="bg" />
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
    </div>
  );
};

export default ArticleSlider;
