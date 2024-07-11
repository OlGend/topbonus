"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Marque = () => {
  const handleClick = () => {
    const targetElement = document.getElementById("real");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { t } = useTranslation();

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
