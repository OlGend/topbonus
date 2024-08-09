"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { getBrands } from "@/components/getBrands/getBrands2";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/switcher/LanguageContext";
import Loader from "../Loader";
import Counter from "./calc";

const Jackpot = () => {
  const [brands, setBrands] = useState([]);
  const [visibleBrands, setVisibleBrands] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();
  const categoryBrands = { key1: "High_hybrid", key2: "1" };

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
    }
  }, [data, categoryBrands.key1, categoryBrands.key2]);

  const { t } = useTranslation();

  const [newUrl, setNewUrl] = useState("");
  useEffect(() => {
    const savedUrl = localStorage.getItem("savedUrl");
    if (savedUrl) {
      setNewUrl(savedUrl);
    }
  }, []);

  const loadMoreBrands = () => {
    setVisibleBrands((prev) => prev + 5);
  };

  const hasMoreBrands = brands.length > visibleBrands;

console.log("BRBRBR", brands)

  return (
    <div className="flex flex-col container-fortune">
      <div className="banner-jackpot content123">
        <p className="text-shadows">HIT THE JACKPOT!</p>
        <Counter />
      </div>
      <p className="text-center mt-3">Make deposits on the brands below to participate in the jackpot</p>

      <div className="flex flex-wrap px-0 py-6">
        {isLoading ? (
          <Loader />
        ) : (
          brands.slice(0, visibleBrands).map((brand) => (
            <div key={brand.id_brand} className="card-brand mb-3 basis-[19%]">
              <div className="brandImage p-3">
                <Link
                  target="_blank"
                  href={`${brand.GoBig}/${newUrl}&creative_id=`}
                >
                  <Image
                    src={`/brands/${brand.CasinoBrand}.png`}
                    alt={brand.CasinoBrand}
                    width={150}
                    height={75}
                  />
                </Link>
              </div>
              <div className="brandContent p-3">
                <div className="review-bonus">{brand.OurOfferContent}</div>
                <div className="buttons">
                  <Link
                    target="_blank"
                    className={`btn btn-primary`}
                    href={`${brand.GoBig}/${newUrl}&creative_id=`}
                  >
                    {t("Play Now")}
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {hasMoreBrands && (
        <button
          className="btn-primary btn-more text-lg max-w-sm p-3 ml-auto mr-auto mt-4 font-semibold text-white flex justify-center items-center"
          onClick={loadMoreBrands}
        >
          {t("Load More Brands")}
        </button>
      )}
    </div>
  );
};

export default Jackpot;
