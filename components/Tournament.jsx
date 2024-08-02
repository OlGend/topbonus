"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import imgrandom from "@/public/coins_banner2.jpg";
import { useLanguage } from "@/components/switcher/LanguageContext";
import { useTranslation } from "react-i18next";

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
        url = "https://info.topbon.us/partner_aurnd";
        break;
      case "partner1043":
        url = "https://info.topbon.us/rnd1043";
        break;
      case "partner1044":
        url = "https://info.topbon.us/rnd1044";
        break;
      case "CLD_VIP":
        url = "https://link.bo-nus.com/rnd_cld";
        break;
      case "partner1045_b1":
        url = "https://link.bo-nus.com/rnd_cld";
        break;
      default:
        url = "https://info.topbon.us/aurnd";
    }
    setRedirectUrl(url);
  }, [source]);

  return (
    <>
      <div className="preview2 flex flex-col">
        <div className="main__container flex items-center">
       
        </div>
      </div>
    </>
  );
}
