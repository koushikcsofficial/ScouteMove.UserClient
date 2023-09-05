import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <div className="articleSection p-5">
      <h1>Articles</h1>
      <h5>Recently added articles</h5>
      <div className="articlebody">
        <div className="left">
          <article>
            <img src="/img/articleimg1.png" alt="logo" />
            <h5>
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
              quam leo nec.
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
              quam leo nec. Lorem ipsum dolor sit amet consectetur. Nec
              vestibulum eget duis quam leo nec. Lorem ipsum dolor sit amet
              consectetur. Nec vestibulum eget duis quam leo nec. Lorem ipsum
              dolor sit amet consectetur. Nec vestibulum eget duis quam leo nec.
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
              quam leo nec. Lorem ipsum dolor sit amet consectetur. Nec
              vestibulum eget duis quam leo nec. <a href="#">See more</a>
            </p>
          </article>
        </div>
        <div className="right">
          <article>
            <img src="/img/articleimg2.png" alt="logo" />
            <div className="content">
              <h5>
                Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
                quam leo nec.
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
                quam leo nec. Lorem ipsum dolor sit amet consectetur. Nec
                vestibulum eget duis quam leo nec. Lorem ipsum dolor sit amet.
                <a href="#">See more</a>
              </p>
            </div>
          </article>
          <article>
            <img src="/img/articleimg2.png" alt="logo" />
            <div className="content">
              <h5>
                Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
                quam leo nec.
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
                quam leo nec. Lorem ipsum dolor sit amet consectetur. Nec
                vestibulum eget duis quam leo nec. Lorem ipsum dolor sit amet.
                <a href="#">See more</a>
              </p>
            </div>
          </article>
          <article>
            <img src="/img/articleimg2.png" alt="logo" />
            <div className="content">
              <h5>
                Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
                quam leo nec.
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
                quam leo nec. Lorem ipsum dolor sit amet consectetur. Nec
                vestibulum eget duis quam leo nec. Lorem ipsum dolor sit amet.
                <a href="#">See more</a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Article;
