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

  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [fade, setFade] = useState(true);
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



  const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000; // Константа для двух суток
  const ONE_MINUTE_IN_MS = 60 * 1000; // Константа для одной минуты
  const [redirectUrl, setRedirectUrl] = useState(""); // Состояние для URL перенаправления
  const source = "partner1039"; // Пример значения, используемого для выбора URL

  // Получаем или создаем таймстамп в localStorage
  const getOrSetTimestamp = () => {
    let timestamp = localStorage.getItem("timestamp");
    if (!timestamp) {
      timestamp = Date.now().toString();
      localStorage.setItem("timestamp", timestamp);
    }
    return parseInt(timestamp, 10);
  };

  // Инициализация состояния stage с использованием вычисленного значения из localStorage
  const [stage, setStage] = useState(() => {
    const existingStage = localStorage.getItem("stage");
    if (!existingStage) {
      // Если stage не существует в localStorage, записываем новое значение
      localStorage.setItem("stage", "first-stage");
      return "first-stage";
    }
    return existingStage;
  });

  // Инициализация таймстампа
  const [timestamp, setTimestamp] = useState(getOrSetTimestamp);

  // Состояние для хранения оставшегося времени
  const [remainingTime, setRemainingTime] = useState(() => {
    const timeElapsed = Date.now() - timestamp;
    return ONE_MINUTE_IN_MS - timeElapsed;
  });

  // Проверка загрузки данных

  // Функция для перехода на второй этап
  const scndstage = () => {
    setStage("second-stage");
    if (!localStorage.getItem("timestamp")) {
      const newTimestamp = Date.now();
      setTimestamp(newTimestamp);
      localStorage.setItem("timestamp", newTimestamp.toString());
    }
  };

  // Функция для сброса состояния на первый этап и открытия новой вкладки
  const resetToFirstStage = () => {
    setStage("first-stage");
    localStorage.setItem("stage", "first-stage");
    localStorage.removeItem("timestamp"); // Удаляем таймстамп из localStorage

    if (redirectUrl) {
      // Открываем новую вкладку с URL из состояния
      window.open(redirectUrl, "_blank");
    }
  };

  // useEffect для установки URL перенаправления на основе source
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
    setRedirectUrl(url); // Сохраняем URL в состояние
  }, [source]);

  // useEffect для синхронизации stage с localStorage
  useEffect(() => {
    localStorage.setItem("stage", stage);
    console.log("STAGE", stage);
  }, [stage]);

  // useEffect для обновления оставшегося времени и перехода на третий этап
  useEffect(() => {
    if (stage === "second-stage") {
      const intervalId = setInterval(() => {
        const timeElapsed = Date.now() - timestamp;
        const newRemainingTime = ONE_MINUTE_IN_MS - timeElapsed;
        setRemainingTime(newRemainingTime);

        if (newRemainingTime <= 0) {
          setStage("third-stage");
          localStorage.setItem("stage", "third-stage");
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [stage, timestamp]);

  // Форматирование оставшегося времени
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

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
                {stage != null && (
                  <div className="flex items-center justify-center jins">
                    {stage === "first-stage" && (
                      <div className="frstjin">
                        <h5 className="h5">Click Here to Unleash Your Magic Bonus!</h5>
                        <p>Get a bonus just for you tomorrow!</p>
                        <button className="btn btn-primary btn-tournament" onClick={scndstage}>Get Bonus</button>
                      </div>
                    )}
                    {stage === "second-stage" && (
                      <div className="scnjin">
                        <h5 className="h5">Thank you! Your Bonus Will Be Here Soon</h5>
                        <p>Come back after <span className="goldie">{formatTime(remainingTime)}</span> to collect it!</p>
                      </div>
                    )}
                    {stage === "third-stage" && (
                      <div className="thrdjin">
                        <h5 className="h5">Your Bonus is Ready!</h5>
                        <p>Click below to claim your magical reward!</p>
                        <button className="btn btn-primary btn-tournament" onClick={resetToFirstStage}>Bonus Ready!</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}