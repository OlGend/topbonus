"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import imgrandom from "@/public/coins_banner2.jpg";
import { useLanguage } from "@/components/switcher/LanguageContext";
import { useTranslation } from "react-i18next";
import { Play, Eye, X } from "phosphor-react";

export default function TopBrandsRandom() {
  const [newUrl, setNewUrl] = useState("");
  const [source, setSource] = useState("");
  const { language } = useLanguage();
  const { t } = useTranslation();
  const timeoutRef = useRef(null);
  const [redirectUrl, setRedirectUrl] = useState("");

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (!redirectUrl) return;
      window.location.href = `${redirectUrl}/${newUrl}&creative_id=XXL_Redirect`;
    }, 900000);
  };

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

    resetTimeout();
    const events = ["mousemove", "scroll", "keydown"];
    events.forEach((event) => {
      window.addEventListener(event, resetTimeout);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimeout);
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [language]);

  useEffect(() => {
    let url = "";
    switch (source) {
      case "partner1039":
        url = `https://info.topbon.us/partner_aurnd/${newUrl}&creative_id=XXL_JIN`;
        break;
      case "partner1043":
        url = `https://info.topbon.us/rnd1043/${newUrl}&creative_id=XXL_JIN`;
        break;
      case "partner1044":
        url = `https://info.topbon.us/rnd1044/${newUrl}&creative_id=XXL_JIN`;
        break;
      case "CLD_VIP":
        url = `https://link.bo-nus.com/rnd_cld/${newUrl}&creative_id=XXL_JIN`;
        break;
      case "partner1045_b1":
        url = `https://link.bo-nus.com/rnd_cld/${newUrl}&creative_id=XXL_JIN`;
        break;
      default:
        url = `https://info.topbon.us/aurnd/${newUrl}&creative_id=XXL_JIN`;
    }
    setRedirectUrl(url);
  }, [source]);

  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const setRandomBrandAndShowModal = () => {
    setShowModal(true);
    setIsActive(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsActive(false);
    localStorage.setItem("lastClosedTime", Date.now().toString());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const lastClosedTime = Number(
        localStorage.getItem("lastClosedTime") || 0
      );
      if (Date.now() - lastClosedTime > 600000) {
        setRandomBrandAndShowModal();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastClosedTime = Number(
        localStorage.getItem("lastClosedTime") || 0
      );
      if (Date.now() - lastClosedTime > 600000) {
        setRandomBrandAndShowModal();
      }
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  return (
    showModal && (
      <div className={`modal-overlay active`}>
        <div className="modal-content relative">
          <p>Random Brand</p>
          <span className="mb-2">
            Pay attention to a random brand suggested just for you
          </span>
          <div className="card-brand flex items-center mt-2">
            <div className="buttons p-3">
              {/* <Link
                className="btn btn-secondary flex justify-center items-center mb-1"
                href={`/bonuses/${randomBrand.id}`}
              >
                <Eye className="mr-1" size={20} />
                Read Review
              </Link> */}
              <Link
                className="btn btn-primary flex justify-center items-center mt-1"
                href={`https://link.reg2dep1.com/${newUrl}`}
                target="_blank"
              >
                <Play className="mr-1" size={20} />
                Play Now
              </Link>
            </div>
          </div>
          <button className="absolute top-3 right-3" onClick={closeModal}>
            <X size={20} />
          </button>
        </div>
      </div>
    )
  );
}
