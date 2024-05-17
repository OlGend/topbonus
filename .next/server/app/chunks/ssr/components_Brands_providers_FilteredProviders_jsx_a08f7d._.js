(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_Brands_providers_FilteredProviders_jsx_a08f7d._.js", {

"[project]/components/Brands_providers/AllProviders.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>AllProviders
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$2c$__chunks$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js (ecmascript, chunks, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FilterLoader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/FilterLoader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-client-chunks }";
;
"use client";
;
;
;
;
;
;
;
;
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
            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
            lineNumber: 25,
            columnNumber: 18
        }, this)
});
;
;
function AllProviders({ creative, isLoader, segment, value, target, brands, currentText }) {
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const itemsPerPage = 4;
    const itemsPerPage2 = 4;
    const [visibleBrands, setVisibleBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](itemsPerPage);
    const [visibleBrands2, setVisibleBrands2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](itemsPerPage2);
    const [hasMoreBrands, setHasMoreBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [openPlusesId, setOpenPlusesId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [openWithdrawalId, setOpenWithdrawalId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [openDepositsId, setOpenDepositsId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [openCountriesId, setOpenCountriesId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [filteredBrands, setFilteredBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [topBrands, setTopBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const categoryBrandsAll = {
        key1: segment,
        key2: value
    };
    const categoryBrands = {
        key1: "Video",
        key2: "1"
    };
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            setVisible(true);
            const filteredData = data.filter((rowData)=>{
                return rowData[categoryBrandsAll.key1] === categoryBrandsAll.key2 && rowData.categories && rowData.categories.includes(currentText);
            });
            const topData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            setFilteredBrands(filteredData);
            setTopBrands(topData);
        }
    }, [
        data,
        categoryBrandsAll.key1,
        categoryBrandsAll.key2,
        categoryBrands.key1,
        categoryBrands.key2,
        currentText
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setHasMoreBrands(visibleBrands < filteredBrands.length);
    }, [
        visibleBrands,
        filteredBrands.length
    ]);
    const loadMoreBrands = ()=>{
        setVisibleBrands((prevVisibleBrands)=>prevVisibleBrands + itemsPerPage);
        setVisibleBrands2((prevVisibleBrands)=>prevVisibleBrands + itemsPerPage2);
    };
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, []);
    const [randomBrands, setRandomBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [randomBrands2, setRandomBrands2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [brandsGenerated, setBrandsGenerated] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const generateRandomBrands = ()=>{
            if (!brandsGenerated && filteredBrands.length > 0) {
                const shuffledBrands = [
                    ...filteredBrands
                ].sort(()=>Math.random() - 0.5);
                const shuffledBrands2 = [
                    ...topBrands
                ].sort(()=>Math.random() - 0.5);
                setRandomBrands(shuffledBrands);
                setRandomBrands2(shuffledBrands2);
                setBrandsGenerated(true);
            }
        };
        generateRandomBrands();
    }, [
        brandsGenerated,
        filteredBrands
    ]);
    const vis = randomBrands.length > 0 ? randomBrands : filteredBrands;
    const vis2 = randomBrands2.length > 0 ? randomBrands2 : topBrands;
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
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
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
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
    const handlePlusesClick = (brandId)=>{
        setOpenPlusesId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleWithdrawalClick = (brandId)=>{
        setOpenWithdrawalId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleDepositsClick = (brandId)=>{
        setOpenDepositsId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleCountriesClick = (brandId)=>{
        setOpenCountriesId((prevId)=>prevId === brandId ? null : brandId);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: isLoader ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FilterLoader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
            lineNumber: 190,
            columnNumber: 9
        }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex flex-wrap justify-between awesome",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col px-0 py-6 basis-[75%]",
                    children: [
                        vis.slice(0, visibleBrands).map((brand)=>{
                            const advantages = brand.advantages !== null ? brand.advantages.split(",").map((advantage)=>({
                                    advantage: advantage.trim()
                                })) : "";
                            const deposits = brand.DepositMethods !== null ? brand.DepositMethods.split(",").map((deposit)=>({
                                    deposit: deposit.trim()
                                })) : "";
                            const withdrawals = brand.WithdrawalMethods !== null ? brand.WithdrawalMethods.split(",").map((withdrawal)=>({
                                    withdrawal: withdrawal.trim()
                                })) : "";
                            const restricted = brand.RestrictedCountries !== null ? brand.RestrictedCountries.split(",").map((restrict)=>({
                                    restrict: restrict.trim()
                                })) : "";
                            const isPlusesOpen = openPlusesId === brand.id_brand;
                            const isWithdrawalOpen = openWithdrawalId === brand.id_brand;
                            const isDepositsOpen = openDepositsId === brand.id_brand;
                            const isCountriesOpen = openCountriesId === brand.id_brand;
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "p-3 flex justify-between flex-wrap mb-2 card-brand-filtered w-full",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col basis-[63%]",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex ml-1 mb-3"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Gift"], {
                                                        className: "mr-1",
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 235,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: " flex items-center review-bonus",
                                                        children: brand.OurOfferContent
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 234,
                                                columnNumber: 21
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "mb-2 withdrawal withdrawal-limits flex items-center",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Handshake"], {
                                                        className: "mr-1 mb-1",
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 241,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title mr-2",
                                                        children: t("Withdrawal Limits:")
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "items-center",
                                                        children: brand.WithdrawalLimits
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 246,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this),
                                            advantages && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onClick: ()=>handlePlusesClick(brand.id_brand),
                                                className: "pluses custom-list-item mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["ShieldPlus"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 256,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Advantages")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 257,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 258,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 255,
                                                        columnNumber: 25
                                                    }, this),
                                                    isPlusesOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "items-center ml-3",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                            className: "review-pros",
                                                            children: advantages.map((advantage, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    className: "review-pros-item",
                                                                    children: advantage.advantage
                                                                }, index, false, {
                                                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                    lineNumber: 264,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                            lineNumber: 262,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 261,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 251,
                                                columnNumber: 23
                                            }, this),
                                            deposits && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onClick: ()=>handleDepositsClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CurrencyCircleDollar"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 280,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Payment Methods")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 281,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 284,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 279,
                                                        columnNumber: 25
                                                    }, this),
                                                    isDepositsOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "withdrawal flex mt-2",
                                                        children: deposits.map((deposit, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "depimg flex items-center justify-center mr-1 mb-1 flex-wrap",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                                    width: 60,
                                                                    height: 38,
                                                                    src: `/payments/${deposit.deposit}.png`,
                                                                    alt: `${deposit.deposit}`,
                                                                    loading: "lazy"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                    lineNumber: 293,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 289,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 287,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 275,
                                                columnNumber: 23
                                            }, this),
                                            withdrawals && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onClick: ()=>handleWithdrawalClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["GameController"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 312,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Game Providers")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 313,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 316,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 311,
                                                        columnNumber: 25
                                                    }, this),
                                                    isWithdrawalOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "withdrawal flex mt-2",
                                                        children: withdrawals.map((withdrawal, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "depimg flex items-center justify-center mr-1 mb-1 flex-wrap",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                                    width: 60,
                                                                    height: 38,
                                                                    src: `/providers/${withdrawal.withdrawal}.png`,
                                                                    alt: `${withdrawal.withdrawal}`,
                                                                    loading: "lazy"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                    lineNumber: 325,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 321,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 319,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 307,
                                                columnNumber: 23
                                            }, this),
                                            restricted && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onClick: ()=>handleCountriesClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Prohibit"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 344,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Restricted Countries")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 345,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 348,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 343,
                                                        columnNumber: 25
                                                    }, this),
                                                    isCountriesOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "withdrawal",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "countries flex flex-wrap justify-between mt-1",
                                                            children: restricted.map((restrict, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "basis-[49%] pl-1 mb-2 flex",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MinusCircle"], {
                                                                            color: "#dd3333",
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                            lineNumber: 359,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                            children: restrict.restrict
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                            lineNumber: 360,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                    lineNumber: 355,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                            lineNumber: 353,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 351,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 339,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                        lineNumber: 230,
                                        columnNumber: 19
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "basis-[36%]",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "brandImage p-3",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                    className: "target-brand-exit",
                                                    href: `${brand.GoBig}/${newUrl}&creative_id=XXL_Brand_Exit`,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                        src: `/brands/${brand.CasinoBrand}.png`,
                                                        alt: `/brands/${brand.CasinoBrand}.png`,
                                                        width: 250,
                                                        height: 125,
                                                        loading: "lazy",
                                                        className: "target-brand-exit"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 376,
                                                        columnNumber: 25
                                                    }, this)
                                                }, brand.id_brand, false, {
                                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                    lineNumber: 371,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 370,
                                                columnNumber: 21
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "buttons ml-auto flex items-center",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex flex-col items-center w-full p-4 howUse mt-2 mb-2",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "text-center",
                                                                children: t("How to get bonus?")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 401,
                                                                columnNumber: 25
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-center m-0 text-slate-500",
                                                                children: t("Activate bonus in your casino account")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 404,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 400,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                        className: "btn btn-primary mt-0 text-center flex justify-center items-center target-brand-exit",
                                                        href: `${brand.GoBig}/${newUrl}&creative_id=XXL_Brand_Exit`,
                                                        target: "_blank",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Play"], {
                                                                className: "mr-2",
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                                lineNumber: 413,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            t("Play Now")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                        lineNumber: 408,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 387,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                        lineNumber: 369,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, brand.id_brand, true, {
                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                lineNumber: 226,
                                columnNumber: 17
                            }, this);
                        }),
                        hasMoreBrands && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "btn-primary btn-more text-lg max-w-sm p-3 ml-auto mr-auto mt-4 font-semibold text-white flex justify-center items-center",
                            onClick: loadMoreBrands,
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["DotsThreeCircle"], {
                                    className: "mr-1",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                    lineNumber: 426,
                                    columnNumber: 17
                                }, this),
                                t("Load More Brands")
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                            lineNumber: 422,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                    lineNumber: 193,
                    columnNumber: 11
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col basis-[24%] py-6",
                    children: !isMobile ? vis2.slice(0, visibleBrands2).map((item)=>{
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "card-brand-banner mb-2 flex flex-col items-center pb-3",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "brandImage p-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                        className: "flex justify-center flex-col items-center target-listing-brands",
                                        href: `${item.GoBig}/${newUrl}&creative_id=XXL_Listing_Brands`,
                                        target: "_blank",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                src: `/brands/${item.CasinoBrand}.png`,
                                                alt: `/brands/${item.CasinoBrand}.png`,
                                                width: 200,
                                                height: 80,
                                                loading: "lazy",
                                                className: "target-listing-brands"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 448,
                                                columnNumber: 25
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "p-3 text-center flex items-center review-bonus",
                                                children: item.OurOfferContent
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                lineNumber: 456,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, item.id_brand, true, {
                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                        lineNumber: 442,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                    lineNumber: 441,
                                    columnNumber: 21
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    className: "btn btn-primary btn-new target-listing-brands",
                                    href: `${item.GoBig}/${newUrl}&creative_id=XXL_Listing_Brands`,
                                    target: "_blank",
                                    children: t("Play Now")
                                }, item.id_brand, false, {
                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                    lineNumber: 461,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, item.id_brand, true, {
                            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                            lineNumber: 437,
                            columnNumber: 19
                        }, this);
                    }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](LazySlider, {
                        ...settings,
                        children: vis2.map((item)=>{
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "card-brand-banner mb-2 flex flex-col items-center pb-3",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "brandImage p-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            className: "flex justify-center flex-col items-center target-listing-brands",
                                            href: `${item.GoBig}/${newUrl}&creative_id=XXL_Listing_Brands`,
                                            target: "_blank",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                    src: `/brands/${item.CasinoBrand}.png`,
                                                    alt: `/brands/${item.CasinoBrand}.png`,
                                                    width: 200,
                                                    height: 80,
                                                    loading: "lazy",
                                                    className: "target-listing-brands"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                    lineNumber: 487,
                                                    columnNumber: 27
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "p-3 text-center flex items-center review-bonus",
                                                    children: item.OurOfferContent
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                                    lineNumber: 495,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, item.id_brand, true, {
                                            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                            lineNumber: 481,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                        lineNumber: 480,
                                        columnNumber: 23
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                        className: "btn btn-primary btn-new target-listing-brands",
                                        href: `${item.GoBig}/${newUrl}&creative_id=XXL_Listing_Brands`,
                                        target: "_blank",
                                        children: t("Play Now")
                                    }, item.id_brand, false, {
                                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                        lineNumber: 500,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, item.id_brand, true, {
                                fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                                lineNumber: 476,
                                columnNumber: 21
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                        lineNumber: 473,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
                    lineNumber: 431,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Brands_providers/AllProviders.jsx>",
            lineNumber: 192,
            columnNumber: 9
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Brands_providers/Navigate.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/index.esm.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const useNavigateBrands = ()=>{
    return [
        {
            currentTab: 1,
            currentCategories: 137,
            currentText: "All Providers",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "providers"
        },
        {
            currentTab: 2,
            currentCategories: 107,
            currentText: "Amatic",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "amatic"
        },
        {
            currentTab: 3,
            currentCategories: 105,
            currentText: "BGaming",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "bgaming"
        },
        {
            currentTab: 4,
            currentCategories: 132,
            currentText: "Booongo",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "booongo"
        },
        {
            currentTab: 5,
            currentCategories: 152,
            currentText: "EGT",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "egt"
        },
        {
            currentTab: 6,
            currentCategories: 106,
            currentText: "Evolution",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "evolution"
        },
        {
            currentTab: 7,
            currentCategories: 186,
            currentText: "Mascot",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "mascot"
        },
        {
            currentTab: 8,
            currentCategories: 160,
            currentText: "NetEnt",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "netent"
        },
        {
            currentTab: 9,
            currentCategories: 130,
            currentText: "Nolimit city",
            value: "Ongoing",
            slug: "nolimit-city"
        },
        {
            currentTab: 10,
            currentCategories: 108,
            currentText: "Play’n go",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "playn-go"
        },
        {
            currentTab: 11,
            currentCategories: 104,
            currentText: "Pragmatic Play",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "pragmatic-play"
        },
        {
            currentTab: 12,
            currentCategories: 133,
            currentText: "Push Gaming",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "push-gaming"
        },
        {
            currentTab: 13,
            currentCategories: 131,
            currentText: "Spinomenal",
            segment: "CurrentStatus",
            value: "Ongoing",
            slug: "spinomenal"
        }
    ];
};
const __TURBOPACK__default__export__ = useNavigateBrands;

})()),
"[project]/components/Brands_providers/FilteredProviders.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_providers$2f$Navigate$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Brands_providers/Navigate.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_providers$2f$AllProviders$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Brands_providers/AllProviders.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const FilteredProviders = ()=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const [isLoader, setIsLoader] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [currentTab, setCurrentTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](1);
    const navigateBrands = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_providers$2f$Navigate$2e$jsx__$28$ecmascript$29$__["default"]();
    const handleTabChange = (tabNumber)=>{
        setCurrentTab(tabNumber);
        setIsLoader(true);
        setTimeout(()=>{
            setIsLoader(false);
        }, 500);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "main pt-10 pb-10 custom-bonuses filtered-providers",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "main__container filter-brands",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "content flex flex-wrap",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "left flex flex-col justify-center basis-[60%]",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                className: "text-white",
                                children: t("Comprehensive 2024 Directory for Online Casinos Sorted by Game Providers")
                            }, void 0, false, {
                                fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-white mt-5",
                                children: t("Interested in locating online casinos featuring games from particular providers? Browse our up-to-date list of diverse casino options to find your perfect match.")
                            }, void 0, false, {
                                fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex navigate-filter flex-wrap",
                    children: navigateBrands.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: `flex justify-center flex-col basis-[7.69%] items-center p-2 border text-lg button-tab ${currentTab === item.currentTab ? "active" : ""}`,
                            onClick: ()=>handleTabChange(item.currentTab),
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center",
                                children: item.currentText
                            }, void 0, false, {
                                fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        }, item.currentTab, false, {
                            fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "overlay-filter",
                    children: navigateBrands.map((item)=>{
                        return currentTab === item.currentTab && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_providers$2f$AllProviders$2e$jsx__$28$ecmascript$29$__["default"], {
                            creative: item.currentText,
                            isLoader: isLoader,
                            segment: item.segment,
                            value: item.value,
                            target: item.target,
                            currentText: item.currentText
                        }, `${item.currentTab}-${language}`, false, {
                            fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                            lineNumber: 61,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Brands_providers/FilteredProviders.jsx>",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FilteredProviders;

})()),
}]);

//# sourceMappingURL=components_Brands_providers_FilteredProviders_jsx_a08f7d._.js.map