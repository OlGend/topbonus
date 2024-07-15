"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Loader from "@/components/Loader";
import { shuffle } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Card from "@/components/slider/Card";
import Carousel from "@/components/slider/Carousel";
import imgrandom from "@/public/coins_banner2.jpg";
import { useLanguage } from "@/components/switcher/LanguageContext";
import { getBrands } from "@/components/getBrands/getBrands2";
import { useTranslation } from "react-i18next";
import Timer from "@/components/Timer";

import UserBrands from "./Brands_home/UserBrands";

export default function TopBrands() {
  const [newUrl, setNewUrl] = useState("");
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to manage fade effect
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    // Обновляем URL, удаляем параметры и устанавливаем source на основе localStorage
    const currentUrl = window.location.href;
    const indexOfQuestionMark = currentUrl.indexOf("?");
    const newUrl2 =
      indexOfQuestionMark !== -1
        ? currentUrl.substring(0, indexOfQuestionMark)
        : currentUrl;
    window.history.replaceState({}, document.title, newUrl2);

    // Работа с URL и localStorage для определения source
    const urlObj = new URL(currentUrl);
    const searchParams = new URLSearchParams(urlObj.search);
    searchParams.delete("brand");
    const currentKeyword = searchParams.get("keyword");

    const partners = ["partner1039", "partner1043", "partner1044", "CLD_VIP"];

    function setPartnerSource(keyword) {
      const partner = partners.find((p) => keyword.includes(p));
      if (partner) {
        localStorage.setItem("source", partner);
        setSource(partner);
        searchParams.set("source", partner);
      } else {
        setSource("0");
        // Получаем текущий источник и проверяем, не является ли он одним из допустимых партнеров
        const sourceFound = localStorage.getItem("source");
        if (!partners.includes(sourceFound)) {
          localStorage.setItem("source", "0");
          searchParams.set("source", "0");
        }
      }
    }

    if (currentKeyword) {
      setPartnerSource(currentKeyword);
    }

    const ad_campaign = localStorage.getItem("ad_campaign_id");

    const savedUrl = localStorage.getItem("savedUrl");
    if (savedUrl) {
      setNewUrl(savedUrl);
    }
  }, [language]);

  const categoryBrands = { key1: "Segment2", key2: "Premium" };
  const { data, error } = useSWR(
    ["brands", language],
    () => getBrands(language),
    { initialData: brands }
  );
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (rowData) => rowData[categoryBrands.key1] === categoryBrands.key2
      );
      console.log("FILTER", filteredData);
      setBrands(filteredData);
      setLoading(false);
    }
  }, [data, categoryBrands.key1, categoryBrands.key2]);

  const shuffledBrands = shuffle(brands);
  const cards2 = shuffledBrands.slice(0, 6).map((brand) => ({
    key: uuidv4(),
    content: (
      <Card
        imagen={`/brands/${brand.CasinoBrand}.png`}
        link={brand.GoBig}
        bonus={brand.OurOfferContent}
      />
    ),
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brands.length);
        setFade(true); // Start fade-in
      }, 500); // Duration of fade-out effect
    }, 5000000); // Change brand every 5 seconds

    return () => clearInterval(interval);
  }, [brands.length]);

  console.log("BRANDS", brands);

  return (
    <>
      <div className="topbr">
        <div className="main__container">
          <Timer />
          {loading ? (
            <Loader />
          ) : (
            cards2 && (
              <div className="flex justify-between items-center">
                <div className="slidertop">
                  <Carousel
                    className="carmob"
                    cards={cards2}
                    height="500px"
                    width="100%"
                    margin="0 auto"
                    offset={200}
                    showArrows={false}
                  />
                </div>
                <div className="secondbanner flex items-center justify-center">
                  {brands.length > 0 && (
                    <div
                      className={`card-second-banner mb-2 flex flex-col items-center pb-3 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                      key={brands[currentBrandIndex].id_brand}
                    >
                      <div className="brandImage p-3">
                        <Link
                          className="flex justify-center flex-col items-center target-top-new-releases"
                          href={`${brands[currentBrandIndex].GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                          target="_blank"
                        >
                          <Image
                            src={`/brands/${brands[currentBrandIndex].CasinoBrand}.png`}
                            alt={brands[currentBrandIndex].CasinoBrand}
                            width={200}
                            height={80}
                            loading="lazy"
                            className="target-top-new-releases"
                          />
                          <div className="p-3 text-center flex items-center review-bonus">
                            {brands[currentBrandIndex].OurOfferContent}
                          </div>
                        </Link>
                      </div>
                      <Link
                        className="btn btn-primary btn-new target-top-new-releases"
                        href={`${brands[currentBrandIndex].GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                        target="_blank"
                      >
                        {t("Play Now")}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
