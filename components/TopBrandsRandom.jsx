"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { shuffle } from "lodash";
import Image from "next/image";
import Link from "next/link";
import imgrandom from "@/public/coins_banner2.jpg";
import { useLanguage } from "@/components/switcher/LanguageContext";
import { getBrands } from "@/components/getBrands/getBrands2";
import { useTranslation } from "react-i18next";



export default function TopBrandsRandom() {
  const [newUrl, setNewUrl] = useState("");
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
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

    const partners = ["partner1039", "partner1043", "partner1044"];

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




  return (
    <>
   
      <div className="preview2 flex flex-col">
        <div className="main__container flex items-center">
          <div className="flex flex-col">
            <h1 className="">
              {t("Feeling lucky today?")}{" "}
              <span className="text-blued">{t("Click now to play")}</span>{" "}
              {t("and see if")}{" "}
              <span className="text-blued"> {t("luck is on your side!")}</span>
            </h1>
            {shuffledBrands.slice(0, 1).map((item) => (
              <Link
                target="_blank"
                key={item}
                className="btn btn-primary big-btn mt-3 target-try-your-luck"
                href={`${item.GoBig}/${newUrl}&creative_id=XXL_Try_Your_Luck`}
              >
                {t("Try Your Luck")}
              </Link>
            ))}
          </div>
          <Image src={imgrandom} alt={imgrandom} width={500} loading="lazy" />
        </div>
{/* 
        <div id="keitaro" className="main__container flex flex-col !mt-7 shMb">
          <UserBrands />
        </div> */}
      </div>
    </>
  );
}
