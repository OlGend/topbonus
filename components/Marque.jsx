"use client"
import React from "react";

const Marque = () => {
  const handleClick = () => {
    const targetElement = document.getElementById("real");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="wrap-line-text">
      <div className="marquee-container">
        <div className="marquee">
          <span onClick={handleClick}>
            * Explore the Hottest New Brands – <b >Click Here!</b> * Explore the
            Hottest New Brands – <b>Click Here!</b> * Explore the Hottest New
            Brands – <b>Click Here!</b> * Explore the Hottest New Brands –{" "}
            <b>Click Here!</b> * Explore the Hottest New Brands –{" "}
            <b>Click Here!</b> * Explore the Hottest New Brands –{" "}
            <b>Click Here!</b> *
          </span>
        </div>
        <div aria-hidden="true" className="marquee">
          <span onClick={handleClick}>
          * Explore the Hottest New Brands – <b>Click Here!</b> * Explore the
            Hottest New Brands – <b>Click Here!</b> * Explore the Hottest New
            Brands – <b>Click Here!</b> * Explore the Hottest New Brands –{" "}
            <b>Click Here!</b> * Explore the Hottest New Brands –{" "}
            <b>Click Here!</b> * Explore the Hottest New Brands –{" "}
            <b>Click Here!</b> *
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marque;
