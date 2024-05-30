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
import { updateUserStatus } from "../UserBrands/UpdateUserStatus";
import { getUserData } from "@/components/getUser/getUser";
import { useTranslation } from "react-i18next";
import Img from "@/public/gr_bl.png";

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

const BRAND_CATEGORIES = { key1: "Segment2", key2: "Sandbox" };
const BRAND_CATEGORIES2 = { key1: "FirstPriority", key2: "1" };

const UserBrands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [otherBrands, setOtherBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userId, setUserId] = useState("");
  const [savedUrl, setSavedUrl] = useState("");

  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    setUserId(localStorage.getItem("user_id") || "");
    setSavedUrl(localStorage.getItem("savedUrl") || "");
  }, []);

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

      const leadsOnlyBrands = brandsData.filter(
        (brand) =>
          leadsIds.includes(brand.KeitaroGoBigID) &&
          !salesIds.includes(brand.KeitaroGoBigID)
      );

      setBrands(leadsOnlyBrands);

      setOtherBrands(
        brandsData.filter((brand) => !leadsIds.includes(brand.KeitaroGoBigID))
        // brandsData2
      );
    } catch (error) {
      console.error("Error loading brands:", error);
    } finally {
      setIsLoading(false);
    }
  }, [language, userId]);

  useEffect(() => {
    if (userId) {
      fetchBrands();
    }
  }, [language, isShow, userId, fetchBrands]);

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



  return (
    <div className="flex justify-between mob-col">
      <div className="flex justify-content basis-[40%] flex-col items-center bander">
        <Image src={Img} alt="random brand" width={290} loading="lazy" />
        {brands.length > 0 ? (
          <h1 className="fz31">
            {t("You have successfully registered on these brands")}{" "}
            <span className="text-blued">{t("Make First Deposit Now ")}</span>{" "}
            {t("and Receive Up To $20 Back On Your Wallet!")}{" "}
          </h1>
        ) : (
          <h1 className="fz31">
            {t("Make First Deposit On One Of These Brands &")}{" "}
            <span className="text-blued">
              {t("Get Up To $20 Right On Your Wallet!")}
            </span>{" "}
          </h1>
        )}
      </div>
      <div className="brands-keitaro basis-[58%]">
        <div className="flex flex-col">
          {isLoading && <Loader />}
          {brands.length > 0 ? (
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
          ) : (
            <>
              {isMobile && otherBrands.length > 1 ? (
                <LazySlider {...settings}>
                  {otherBrands.map((brand) => (
                    <BrandCard
                      brand={brand}
                      savedUrl={savedUrl}
                      key={brand.id_brand}
                      t={t}
                      register={() => {
                        updateUserStatus(
                          userId,
                          brand.KeitaroGoBigID,
                          "lead",
                          () => {
                            fetchBrands();
                            setIsShow((prev) => !prev);
                          }
                        );
                      }}
                      count={brands.length}
                    />
                  ))}
                </LazySlider>
              ) : (
                <div className="flex flex-wrap">
                  {otherBrands.slice(0, 6).map((brand) => (
                    <BrandCard
                      brand={brand}
                      savedUrl={savedUrl}
                      key={brand.id_brand}
                      t={t}
                      register={() => {
                        updateUserStatus(
                          userId,
                          brand.KeitaroGoBigID,
                          "lead",
                          () => {
                            fetchBrands();
                            setIsShow((prev) => !prev);
                          }
                        );
                      }}
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
        href={`${brand.GoBig}/${savedUrl}`}
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
          className="btn btn-primary btn-fz"
          href={`${brand.GoBig}/${savedUrl}`}
        >
          {t("Deposit Now")}
        </Link>
      </div>
    </div>
  </div>
);

export default UserBrands;
