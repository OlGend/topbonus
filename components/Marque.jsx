"use client";
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
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>
          </span>
        </div>
        <div aria-hidden="true" className="marquee">
        <span onClick={handleClick}>
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>{" "}
            {t("* Explore the Hottest New Brands –")} <b>{t("Click Here!")}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marque;
