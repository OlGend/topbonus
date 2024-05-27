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
import Img from "@/public/gr_bl.png";
import UserBrands from "./Brands_home/UserBrands";

export default function TopBrands() {
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

  console.log("BRANDS", brands);

  return (
    <>
      <div className="topbr">
        <div className="main__container">
          {loading ? (
            <Loader />
          ) : (
            cards2 && (
              <Carousel
                className="carmob"
                cards={cards2}
                height="500px"
                width="100%"
                margin="0 auto"
                offset={200}
                showArrows={false}
              />
            )
          )}
        </div>
      </div>
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

        <div className="main__container flex flex-col !mt-7 shMb">
            {/* <h3 className="mb-5 whotake">Users who take bonus from us: <span>3543</span></h3> */}
          <div className="flex justify-between mob-col">
            <div className="flex justify-content basis-[40%] flex-col items-center bander">
              <Image src={Img} alt={Img} width={290} loading="lazy" />
              <h1 className="fz31">
                {t("You Made Registration Here.")}{" "}
                <span className="text-blued">
                  {t("Make First Deposit Now ")}
                </span>{" "}
                {t("and Receive Up To $20 Back On Your Wallet!")}{" "}
              </h1>
            </div>
            <div className="brands-keitaro basis-[58%]">
              <UserBrands />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
