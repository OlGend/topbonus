(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_UserBrands_UserBrands_tsx_200772._.js", {

"[project]/components/UserBrands/UpdateUserStatus.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "updateUserStatus": ()=>updateUserStatus
});
const updateUserStatus = async (userId, campaignId, status, fetchBrands)=>{
    if (!userId || !campaignId) {
        console.error("Error: Missing userId or campaignId");
        return;
    }
    try {
        const response = await fetch("https://bonusnumber1.com/api/addStatus/add_status.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: userId,
                campaignId: campaignId,
                status: status
            })
        });
        if (!response.ok) throw new Error("Network response was not ok");
        if (response.ok) {
            fetchBrands();
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

})()),
"[project]/components/UserBrands/UserBrands.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBrands$2f$UpdateUserStatus$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/UserBrands/UpdateUserStatus.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/getUser.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
const BRAND_CATEGORIES = {
    key1: "Segment2",
    key2: "Sandbox"
};
const BRAND_CATEGORIES2 = {
    key1: "FirstPriority",
    key2: "1"
};
const UserBrands = ()=>{
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [otherBrands, setOtherBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [isShow, setIshow] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    let savedUrl = "";
    if (typeof window !== "undefined") {
        savedUrl = localStorage.getItem("savedUrl") || "";
    }
    let userId = "";
    if (typeof window !== "undefined") {
        userId = localStorage.getItem("user_id") || "";
    }
    const fetchBrands = async ()=>{
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
        try {
            const brandsData = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$28$ecmascript$29$__["getBrands"](BRAND_CATEGORIES, language);
            const brandsData2 = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$28$ecmascript$29$__["getBrands"](BRAND_CATEGORIES2, language);
            const leadsOnlyBrands = brandsData.filter((brand)=>leadsIds.includes(brand.KeitaroGoBigID) && !salesIds.includes(brand.KeitaroGoBigID));
            setBrands(leadsOnlyBrands);
            setOtherBrands(brandsData2);
        } catch (error) {
            console.error("Error loading brands:", error);
        } finally{
            setIsLoading(false);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (userId) {
            fetchBrands();
        }
    }, [
        language,
        isShow,
        userId
    ]);
    if (userId === "null") {
        return null;
    }
    return userId ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex flex-col",
        children: [
            isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                lineNumber: 120,
                columnNumber: 21
            }, this),
            brands.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        children: t("You Already Made Registration Here, Make First Deposit & Get Up To $20!")
                    }, void 0, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "mt-3",
                        children: t("Select a brand from the list below, make your first deposit and receive up to $20 in rewards!")
                    }, void 0, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex flex-wrap px-0 py-6",
                        children: brands.map((brand)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](BrandCard, {
                                brand: brand,
                                savedUrl: savedUrl,
                                t: t
                            }, brand.id_brand, false, {
                                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "descriptions",
                        children: t("You will get 50 Free Spins for every First Deposit from our website. Spin these spins and get up to $20 on your crypto wallet/PayPal. To qualify for withdrawals, ensure your first deposits is at least Є25 or the equivalent on other currencies and was made after requesting a withdrawal.")
                    }, void 0, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        children: t("Make First Deposit On One Brand Below & Get Up To $20!")
                    }, void 0, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "mt-3",
                        children: t("Select a brand from the list below, make your first deposit and receive up to $20 in rewards!")
                    }, void 0, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex flex-wrap px-0 py-6",
                        children: otherBrands.map((brand)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](BrandCard, {
                                brand: brand,
                                savedUrl: savedUrl,
                                t: t,
                                register: ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBrands$2f$UpdateUserStatus$2e$tsx__$28$ecmascript$29$__["updateUserStatus"](localStorage.getItem("user_id") || "", brand.KeitaroGoBigID, "lead", ()=>{
                                        fetchBrands();
                                        setIshow((prev)=>!prev);
                                    });
                                }
                            }, brand.id_brand, false, {
                                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "descriptions",
                        children: t("You will get 50 Free Spins for every First Deposit from our website. Spin these spins and get up to $20 on your crypto wallet/PayPal. To qualify for withdrawals, ensure your first deposits is at least Є25 or the equivalent on other currencies and was made after requesting a withdrawal.")
                    }, void 0, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
        lineNumber: 119,
        columnNumber: 5
    }, this) : null;
};
const BrandCard = ({ brand, savedUrl, register, t })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "card-brand mb-3 basis-[49%] glowing-box",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: `brandImage p-3 items-start flex flex-col ${register ? "frstreg" : "frstdep"}`,
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                    className: `flex flex-col items-start`,
                    href: `${brand.GoBig}/${savedUrl}`,
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                            src: `/brands/${brand.CasinoBrand}.png`,
                            alt: `Image of ${brand.CasinoBrand}`,
                            width: 200,
                            height: 100
                        }, void 0, false, {
                            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                            lineNumber: 195,
                            columnNumber: 9
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "review-bonus",
                                children: brand.OurOfferContent
                            }, void 0, false, {
                                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                            lineNumber: 201,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                    lineNumber: 191,
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
                            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this) : "",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            className: "btn btn-primary btn-fz",
                            href: `${brand.GoBig}/${savedUrl}`,
                            children: t("Deposit Now")
                        }, void 0, false, {
                            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                            lineNumber: 216,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                    lineNumber: 205,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
            lineNumber: 186,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
        lineNumber: 185,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = UserBrands;

})()),
}]);

//# sourceMappingURL=components_UserBrands_UserBrands_tsx_200772._.js.map