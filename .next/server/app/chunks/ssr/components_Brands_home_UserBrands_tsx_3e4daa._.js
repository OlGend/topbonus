(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_Brands_home_UserBrands_tsx_3e4daa._.js", {

"[project]/components/Brands_home/UserBrands.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$2c$__chunks$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js (ecmascript, chunks, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/getUser.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-client-chunks }";
;
"use client";
;
;
;
const LazySlider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$28$ecmascript$29$__["default"](null, {
    loadableGenerated: {
        modules: [
            JSON.stringify({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$2c$__chunks$29$__["default"],
                chunks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$2c$__chunks$29$__["chunks"]
            })
        ]
    },
    ssr: false,
    loading: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
            children: "Download..."
        }, void 0, false, {
            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
            lineNumber: 6,
            columnNumber: 18
        }, this)
});
;
;
;
;
;
;
;
;
;
const BRAND_CATEGORIES = {
    key1: "CurrentStatus",
    key2: "Ongoing"
};
const BRAND_CATEGORIES2 = {
    key1: "FirstPriority",
    key2: "1"
};
const UserBrands = ()=>{
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [otherBrands, setOtherBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [isShow, setIsShow] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [userId, setUserId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [savedUrl, setSavedUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [countryBrand, setCountryBrand] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("ALL");
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const loadLocalStorageData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useCallback"](()=>{
        setUserId(localStorage.getItem("user_id") || "");
        setSavedUrl(localStorage.getItem("savedUrl") || "");
        setCountryBrand(localStorage.getItem("country_brands") || "ALL");
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        loadLocalStorageData();
        const handleStorageChange = (e)=>{
            if (e.key === "user_id" || e.key === "savedUrl" || e.key === "country_brands") {
                loadLocalStorageData();
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return ()=>{
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [
        loadLocalStorageData
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (userId) {
            fetchBrands();
        }
    }, [
        userId,
        language
    ]);
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
                    initialSlide: 1
                }
            }
        ]
    };
    const fetchBrands = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useCallback"](async ()=>{
        if (!userId) {
            console.error("No user ID found, unable to fetch brands.");
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__["getUserData"](userId);
            if (!data) {
                console.error("Received null data from getUserData");
                setIsLoading(false);
                return;
            }
            const userLeads = JSON.parse(data.leads || "[]");
            const userSales = JSON.parse(data.sales || "[]");
            const leadsIds = userLeads.map((lead)=>lead.campaignId);
            const salesIds = userSales.map((sale)=>sale.campaignId);
            const brandsData = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$28$ecmascript$29$__["getBrands"](BRAND_CATEGORIES, language);
            const brandsData2 = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$28$ecmascript$29$__["getBrands"](BRAND_CATEGORIES2, language);
            const leadsOnlyBrands = brandsData.filter((brand)=>leadsIds.includes(brand.KeitaroGoBigID));
            setBrands(leadsOnlyBrands);
            console.log("ALLLL", brandsData, leadsOnlyBrands);
            setOtherBrands(brandsData.filter((brand)=>!leadsIds.includes(brand.KeitaroGoBigID)));
        } catch (error) {
            console.error("Error loading brands:", error);
        } finally{
            setIsLoading(false);
        }
    }, [
        language,
        userId
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setIsMobile(window.innerWidth < 768);
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    if (!userId) {
        return null;
    }
    const chunkBrands = (brands, chunkSize)=>{
        const chunks = [];
        for(let i = 0; i < brands.length; i += chunkSize){
            chunks.push(brands.slice(i, i + chunkSize));
        }
        return chunks;
    };
    const brandChunks = chunkBrands(brands, 6);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "mt-10",
        children: brands.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex flex-col",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                    className: "fz31 text-center",
                    children: [
                        t("YOU ARE ALREADY REGISTERED HERE, MAKE YOUR FIRST DEPOSITS AND"),
                        " ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "text-blued",
                            children: t("RECEIVE REAL MONEY WITH INSTANT WITHDRAWAL")
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                    lineNumber: 173,
                    columnNumber: 11
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-between mob-col mt-7",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex justify-content basis-[40%] flex-col items-center bander",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                src: `/banerhome/${countryBrand.toUpperCase()}.png`,
                                alt: "country specific banner",
                                width: 468,
                                height: 480,
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "brands-keitaro basis-[58%]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-col",
                                children: [
                                    isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                        lineNumber: 189,
                                        columnNumber: 31
                                    }, this),
                                    brands.length > 6 && !isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](LazySlider, {
                                        ...settings,
                                        children: brandChunks.map((chunk, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-wra w679",
                                                children: chunk.map((brand)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](BrandCard, {
                                                        brand: brand,
                                                        savedUrl: savedUrl,
                                                        t: t,
                                                        count: brands.length
                                                    }, brand.id_brand, false, {
                                                        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                                        lineNumber: 195,
                                                        columnNumber: 27
                                                    }, this))
                                            }, index, false, {
                                                fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                                lineNumber: 193,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                                        children: isMobile && brands.length > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](LazySlider, {
                                            ...settings,
                                            children: brands.map((brand)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](BrandCard, {
                                                    brand: brand,
                                                    savedUrl: savedUrl,
                                                    t: t,
                                                    count: brands.length
                                                }, brand.id_brand, false, {
                                                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                                    lineNumber: 211,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                            lineNumber: 209,
                                            columnNumber: 23
                                        }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex flex-wrap",
                                            children: brands.slice(0, 6).map((brand)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](BrandCard, {
                                                    brand: brand,
                                                    savedUrl: savedUrl,
                                                    t: t,
                                                    count: brands.length
                                                }, brand.id_brand, false, {
                                                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                                    lineNumber: 223,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                            lineNumber: 221,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
            lineNumber: 172,
            columnNumber: 9
        }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
            lineNumber: 240,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
        lineNumber: 170,
        columnNumber: 5
    }, this);
};
const BrandCard = ({ brand, savedUrl, register, t, count })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `card-brand mb-3 card-32 crd-${count}`,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: `brandImage p-3 items-start flex flex-col ${register ? "frstreg" : "frstdep"}`,
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                    className: `flex flex-col items-center`,
                    href: `${brand.GoBig}/${savedUrl}`,
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                            src: `/brands/${brand.CasinoBrand}.png`,
                            alt: `Image of ${brand.CasinoBrand}`,
                            width: 250,
                            height: 125,
                            className: "mb-2"
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 263,
                            columnNumber: 9
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "review-bonus text-center",
                                children: brand.OurOfferContent
                            }, void 0, false, {
                                fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 270,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                    lineNumber: 259,
                    columnNumber: 7
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "buttons flex items-center justify-between",
                    children: [
                        register ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "btn btn-secondary btn-fz btn-fzl mr-2",
                            onClick: register,
                            children: t("Already Registered")
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this) : "",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            className: "btn btn-primary btn-fz",
                            href: `${brand.GoBig}/${savedUrl}`,
                            children: t("Deposit Now")
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 287,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                    lineNumber: 276,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
            lineNumber: 254,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
        lineNumber: 253,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = UserBrands;

})()),
}]);

//# sourceMappingURL=components_Brands_home_UserBrands_tsx_3e4daa._.js.map