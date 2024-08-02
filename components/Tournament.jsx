"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import imgrandom from "@/public/coins_banner2.jpg";
import { useLanguage } from "@/components/switcher/LanguageContext";
import { useTranslation } from "react-i18next";
import coin1 from "@/public/coin_01.png";
import coin2 from "@/public/coin_02.png";
import cup1 from "@/public/cup.png";
import cup2 from "@/public/cup-1.png";
import diamond from "@/public/diamond.png";

export default function Tournament() {
  const [newUrl, setNewUrl] = useState("");
  const [source, setSource] = useState("");
  const { language } = useLanguage();
  const { t } = useTranslation();

  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    const indexOfQuestionMark = currentUrl.indexOf("?");
    const newUrl2 =
      indexOfQuestionMark !== -1
        ? currentUrl.substring(0, indexOfQuestionMark)
        : currentUrl;
    window.history.replaceState({}, document.title, newUrl2);

    const urlObj = new URL(currentUrl);
    const searchParams = new URLSearchParams(urlObj.search);
    searchParams.delete("brand");
    const currentKeyword = searchParams.get("keyword");

    const partners = [
      "partner1039",
      "partner1043",
      "partner1044",
      "CLD_VIP",
      "partner1045_b1",
    ];

    function setPartnerSource(keyword) {
      const partner = partners.find((p) => keyword.includes(p));
      if (partner) {
        localStorage.setItem("source", partner);
        setSource(partner);
        searchParams.set("source", partner);
      } else {
        setSource("0");
        const sourceFound = localStorage.getItem("source");
        if (!partners.includes(sourceFound)) {
          localStorage.setItem("source", "0");
          searchParams.set("source", "0");
        } else {
          setSource(sourceFound);
        }
      }
    }

    if (currentKeyword) {
      setPartnerSource(currentKeyword);
    } else {
      const savedSource = localStorage.getItem("source");
      if (savedSource) {
        setSource(savedSource);
      }
    }

    const savedUrl = localStorage.getItem("savedUrl");
    if (savedUrl) {
      setNewUrl(savedUrl);
    }
  }, [language]);

  useEffect(() => {
    let url = "";
    switch (source) {
      case "partner1039":
        url = "https://link.reg2dep.business/topbonus_rnd39";
        break;
      case "partner1043":
        url = "https://link.reg2dep.business/topbonus_rnd43";
        break;
      case "partner1044":
        url = "https://link.reg2dep.business/topbonus_rnd44";
        break;
      case "CLD_VIP":
        url = "https://link.reg2dep.business/topbonus_rndcld";
        break;
      case "partner1045_b1":
        url = "https://link.reg2dep.business/topbonus_rndcld";
        break;
      default:
        url = "https://link.reg2dep.business/topbonus_rnd";
    }

    setRedirectUrl(url);
  }, [source]);

  return (
    <>
      <div className="main__container banners-anim flex items-center justify-between mt-5">
        <div className="banner-animation animation1">
          <h3>{t("BIGGEST JACKPOTS")}</h3>
          <Image
            src={coin1}
            alt="coin"
            width={86}
            loading="lazy"
            className="floating-image coin1"
          />
          <Image
            src={coin2}
            alt="coin"
            width={83}
            loading="lazy"
            className="floating-image coin2"
          />
          <Image
            src={diamond}
            alt="coin"
            width={80}
            loading="lazy"
            className="floating-image diamond"
          />
          <a
            href={`${redirectUrl}/${newUrl}&creative_id=BIGGEST_JACKPOTS`}
            className="btn btn-primary btn-tournament"
            target="_blank"
          >
            {t("Play Now")}
          </a>
        </div>
        <div className="banner-animation animation2">
          <h3>{t("TOP TOURNAMENTS")}</h3>
          <Image
            src={cup1}
            alt="coin"
            width={180}
            loading="lazy"
            className="floating-image cup1"
          />
          <Image
            src={cup2}
            alt="coin"
            width={180}
            loading="lazy"
            className="floating-image cup2"
          />
          
          <a
            target="_blank"
            href={`${redirectUrl}/${newUrl}&creative_id=TOP_TOURNAMENTS`}
            className="btn btn-primary btn-tournament"
          >
            {t("Play Now")}
          </a>
        </div>
      </div>
    </>
  );
}
