"use client";
import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
const LazySlider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <p>Download...</p>,
});
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getBrands } from "@/components/getBrands/getBrands";
import { useLanguage } from "@/components/switcher/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import Loader from "../Loader";
import { getUserData } from "@/components/getUser/getUser";
import { useTranslation } from "react-i18next";

export type Brand = {
  id_brand: string;
  CasinoBrand: string;
  GoBig: string;
  OurOfferContent: string;
  KeitaroGoBigID: string;
  KeitaroR2dID: string;
};

interface LeadOrSale {
  campaignId: string;
  status: string;
  timestamp: string;
  paymentMethod: string;
  paymentSumIn: string;
  paymentAddress: string;
  USD: string;
}

const BRAND_CATEGORIES = { key1: "CurrentStatus", key2: "Ongoing" };
const BRAND_CATEGORIES2 = { key1: "FirstPriority", key2: "1" };

const UserBrands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [otherBrands, setOtherBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userId, setUserId] = useState("");
  const [savedUrl, setSavedUrl] = useState("");
  const [countryBrand, setCountryBrand] = useState("ALL");

  const { language } = useLanguage();
  const { t } = useTranslation();

  const loadLocalStorageData = useCallback(() => {
    setUserId(localStorage.getItem("user_id") || "");
    setSavedUrl(localStorage.getItem("savedUrl") || "");
    setCountryBrand(localStorage.getItem("country_brands") || "ALL");
  }, []);

  useEffect(() => {
    loadLocalStorageData();

    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === "user_id" ||
        e.key === "savedUrl" ||
        e.key === "country_brands"
      ) {
        loadLocalStorageData();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [loadLocalStorageData]);

  useEffect(() => {
    if (userId) {
      fetchBrands();
    }
  }, [userId, language]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const fetchBrands = useCallback(async () => {
    if (!userId) {
      console.error("No user ID found, unable to fetch brands.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const data = await getUserData(userId);
      if (!data) {
        console.error("Received null data from getUserData");
        setIsLoading(false);
        return;
      }

      const userLeads: LeadOrSale[] = JSON.parse(data.leads || "[]");
      const userSales: LeadOrSale[] = JSON.parse(data.sales || "[]");

      const leadsIds = userLeads.map((lead) => lead.campaignId);
      const salesIds = userSales.map((sale) => sale.campaignId);

      const brandsData: Brand[] = await getBrands(BRAND_CATEGORIES, language);
      const brandsData2: Brand[] = await getBrands(BRAND_CATEGORIES2, language);

      const leadsOnlyBrands = brandsData.filter((brand) =>
        leadsIds.includes(brand.KeitaroGoBigID)
      );

      setBrands(leadsOnlyBrands);
      console.log("ALLLL", brandsData, leadsOnlyBrands);

      setOtherBrands(
        brandsData.filter((brand) => !leadsIds.includes(brand.KeitaroGoBigID))
      );
    } catch (error) {
      console.error("Error loading brands:", error);
    } finally {
      setIsLoading(false);
    }
  }, [language, userId]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!userId) {
    return null;
  }

  const chunkBrands = (brands: Brand[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < brands.length; i += chunkSize) {
      chunks.push(brands.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const brandChunks = chunkBrands(brands, 6);

  return (
    <div className="mt-10">
      {brands.length > 0 ? (
        <div className="flex flex-col">
          <h2 className="fz31 text-center">
            {t("YOU ARE ALREADY REGISTERED HERE, MAKE YOUR FIRST DEPOSITS AND")}{" "}
            <span className="text-blued">
              {t("RECEIVE REAL MONEY WITH INSTANT WITHDRAWAL")}
            </span>{" "}
          </h2>
          <div className="flex justify-between mob-col mt-7">
            <div className="flex justify-content basis-[40%] flex-col items-center bander">
              <Image
                src={`/banerhome/${countryBrand.toUpperCase()}.png`}
                alt="country specific banner"
                width={468}
                height={480}
                loading="lazy"
              />
            </div>
            <div className="brands-keitaro basis-[58%]">
              <div className="flex flex-col">
                {isLoading && <Loader />}
                {brands.length > 6 && !isMobile ? (
                  <LazySlider {...settings}>
                    {brandChunks.map((chunk, index) => (
                      <div key={index} className="flex flex-wra w679">
                        {chunk.map((brand) => (
                          <BrandCard
                            key={brand.id_brand}
                            brand={brand}
                            savedUrl={savedUrl}
                            t={t}
                            count={brands.length}
                          />
                        ))}
                      </div>
                    ))}
                  </LazySlider>
                ) : (
                  <>
                    {isMobile && brands.length > 1 ? (
                      <LazySlider {...settings}>
                        {brands.map((brand) => (
                          <BrandCard
                            key={brand.id_brand}
                            brand={brand}
                            savedUrl={savedUrl}
                            t={t}
                            count={brands.length}
                          />
                        ))}
                      </LazySlider>
                    ) : (
                      <div className="flex flex-wrap">
                        {brands.slice(0, 6).map((brand) => (
                          <BrandCard
                            key={brand.id_brand}
                            brand={brand}
                            savedUrl={savedUrl}
                            t={t}
                            count={brands.length}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const BrandCard: React.FC<{
  brand: Brand;
  savedUrl: string;
  register?: () => void;
  count: number;
  t: Function;
}> = ({ brand, savedUrl, register, t, count }) => (
  <div className={`card-brand mb-3 card-32 crd-${count}`}>
    <div
      className={`brandImage p-3 items-start flex flex-col ${
        register ? "frstreg" : "frstdep"
      }`}
    >
      <Link
        className={`flex flex-col items-center`}
        href={`${brand.GoBig}/${savedUrl}&creative_id=XXL_Registration`}
        target="_blank"
      >
        <Image
          src={`/brands/${brand.CasinoBrand}.png`}
          alt={`Image of ${brand.CasinoBrand}`}
          width={250}
          height={125}
          className="mb-2"
        />
        <div>
          <div className="review-bonus text-center">
            {brand.OurOfferContent}
          </div>
        </div>
      </Link>
      <div className="buttons flex items-center justify-between">
        {register ? (
          <button
            className="btn btn-secondary btn-fz btn-fzl mr-2"
            onClick={register}
          >
            {t("Already Registered")}
          </button>
        ) : (
          ""
        )}
        <Link
          target="_blank"
          className="btn btn-primary btn-fz"
          href={`${brand.GoBig}/${savedUrl}&creative_id=XXL_Registration`}
      
        >
          {t("Deposit Now")}
        </Link>
      </div>
    </div>
  </div>
);

export default UserBrands;
