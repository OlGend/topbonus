"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const LazySlider = dynamic(() => import("react-slick"), {
  ssr: false, // Это будет импортировать 'react-slick' только на клиенте
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

interface Settings {
  accessibility?: boolean;
  adaptiveHeight?: boolean;
  afterChange?: (currentSlide: number) => void;
  appendDots?: (dots: React.ReactNode) => JSX.Element;
  arrows?: boolean;
  asNavFor?: string | null;
  autoplay?: boolean;
  autoplaySpeed?: number;
  beforeChange?: (currentSlide: number, nextSlide: number) => void;
  centerMode?: boolean;
  centerPadding?: string;
  className?: string;
  cssEase?: string;
  customPaging?: (index: number) => JSX.Element;
  dots?: boolean;
  dotsClass?: string;
  draggable?: boolean;
  easing?: string;
  edgeFriction?: number;
  fade?: boolean;
  focusOnSelect?: boolean;
  infinite?: boolean;
  initialSlide?: number;
  lazyLoad?: "ondemand" | "progressive";
  nextArrow?: JSX.Element;
  pauseOnDotsHover?: boolean;
  pauseOnFocus?: boolean;
  pauseOnHover?: boolean;
  prevArrow?: JSX.Element;
  responsive?: Array<{
    breakpoint: number;
    settings: Settings | "unslick";
  }>;
  rows?: number;
  rtl?: boolean;
  slide?: string;
  slidesPerRow?: number;
  slidesToScroll?: number;
  slidesToShow?: number;
  speed?: number;
  swipe?: boolean;
  swipeEvent?: (swipeDirection: "left" | "right" | "up" | "down") => void;
  swipeToSlide?: boolean;
  touchMove?: boolean;
  touchThreshold?: number;
  useCSS?: boolean;
  useTransform?: boolean;
  variableWidth?: boolean;
  vertical?: boolean;
  verticalSwiping?: boolean;
  waitForAnimate?: boolean;
}

const BRAND_CATEGORIES = { key1: "Segment2", key2: "Sandbox" };

const UserBrands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [otherBrands, setOtherBrands] = useState<Brand[]>([]);
  const count = brands.length;

  const settings: Settings = {
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

  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIshow] = useState(false);
  const { t } = useTranslation();

  let savedUrl = "";
  if (typeof window !== "undefined") {
    savedUrl = localStorage.getItem("savedUrl") || "";
  }

  let userId = "";
  if (typeof window !== "undefined") {
    userId = localStorage.getItem("user_id") || "";
  }

  const fetchBrands = async () => {
    if (userId === "null") {
      console.error("No user ID found, unable to fetch brands.");
      setIsLoading(false);
      return;
    }
    if (!userId) {
      console.error("No user ID found, unable to fetch brands.");
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
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

    try {
      const brandsData: Brand[] = await getBrands(BRAND_CATEGORIES, language);

      const leadsOnlyBrands = brandsData.filter(
        (brand) =>
          leadsIds.includes(brand.KeitaroGoBigID) &&
          !salesIds.includes(brand.KeitaroGoBigID)
      );

      setBrands(leadsOnlyBrands);

      setOtherBrands(
        brandsData.filter((brand) => !leadsIds.includes(brand.KeitaroGoBigID))
      );
    } catch (error) {
      console.error("Error loading brands:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchBrands();
    }
  }, [language, isShow, userId]);

  if (userId === "null") {
    return null;
  }
  const [isMobile, setIsMobile] = useState(false);
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
  console.log("ISMOB", isMobile);

  return userId ? (
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
                  count={count}
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
                  count={count}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
        {isMobile && brands.length > 1 ? (
            <LazySlider {...settings}>
              {otherBrands.map((brand) => (
                <BrandCard
                brand={brand}
                savedUrl={savedUrl}
                key={brand.id_brand}
                t={t}
                register={() => {
                  updateUserStatus(
                    localStorage.getItem("user_id") || "",
                    brand.KeitaroGoBigID,
                    "lead",
                    () => {
                      fetchBrands();
                      setIshow((prev) => !prev);
                    }
                  );
                }}
                count={count}
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
                    localStorage.getItem("user_id") || "",
                    brand.KeitaroGoBigID,
                    "lead",
                    () => {
                      fetchBrands();
                      setIshow((prev) => !prev);
                    }
                  );
                }}
                count={count}
                />
              ))}
            </div>
          )}
          {/* <div className="flex flex-wrap px-0">
            {otherBrands.slice(0, 6).map((brand) => (
              
              <BrandCard
                brand={brand}
                savedUrl={savedUrl}
                key={brand.id_brand}
                t={t}
                register={() => {
                  updateUserStatus(
                    localStorage.getItem("user_id") || "",
                    brand.KeitaroGoBigID,
                    "lead",
                    () => {
                      fetchBrands();
                      setIshow((prev) => !prev);
                    }
                  );
                }}
                count={count}
              />
            ))}
          </div> */}
        </>
      )}
    </div>
  ) : null;
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
            {t("I'm Registered")}
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