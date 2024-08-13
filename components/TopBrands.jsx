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
import Timestamp from "@/components/timestamp";

import UserBrands from "./Brands_home/UserBrands";

export default function TopBrands() {
  const [newUrl, setNewUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [source, setSource] = useState("");

  useEffect(() => {
    // Ensure code runs only on client-side
    if (typeof window !== "undefined") {
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
          // Проверка, есть ли источник в localStorage, если нет, устанавливаем "0"
          const sourceFound = localStorage.getItem("source") || "0";
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
          setSource(savedSource); // Устанавливаем source из localStorage
        }
      }

      const savedUrl = localStorage.getItem("savedUrl");
      if (savedUrl) {
        setNewUrl(savedUrl);
      }
    }
  }, [language]);

  const categoryBrands = { key1: "Segment2", key2: "Premium" };
  const { data, error } = useSWR(
    ["brands", language],
    () => getBrands(language),
    { initialData: brands }
  );

  // useEffect(() => {
  //   if (data) {
  //     const filteredData = data.filter(
  //       (rowData) => rowData[categoryBrands.key1] === categoryBrands.key2
  //     );
  //     console.log("FILTER", filteredData);
  //     setBrands(filteredData);
  //     setLoading(false);
  //   }
  // }, [data, categoryBrands.key1, categoryBrands.key2]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (rowData) => rowData[categoryBrands.key1] === categoryBrands.key2
      );
      console.log("FILTER", filteredData);
      setBrands(filteredData);
      setLoading(false);

      // Выбираем случайный бренд один раз
      setCurrentBrandIndex(Math.floor(Math.random() * filteredData.length));
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(false); // Start fade-out
  //     setTimeout(() => {
  //       setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brands.length);
  //       setFade(true); // Start fade-in
  //     }, 500); // Duration of fade-out effect
  //   }, 5000); // Change brand every 5 seconds

  //   return () => clearInterval(interval);
  // }, [brands.length]);

  return (
    <>
      <div className="topbr">
        <div className="main__container">
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
                <Timestamp />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
