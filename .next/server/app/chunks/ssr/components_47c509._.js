(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_47c509._.js", {

"[project]/components/getUser/getUser.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getUserData": ()=>getUserData
});
const getUserData = async (userId)=>{
    try {
        const res = await fetch(`https://bonusnumber1.com/api/user/read_one.php?id=${userId}`);
        if (res.ok) {
            const responseData = await res.json();
            return responseData;
        } else {
            console.error("Failed to fetch data:", res.status);
            return null;
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return null;
    }
};

})()),
"[project]/components/Loader.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Loader = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "loader",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "loader-inner",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "loader-line-wrap",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "loader-line"
                    }, void 0, false, {
                        fileName: "<[project]/components/Loader.jsx>",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Loader.jsx>",
                    lineNumber: 8,
                    columnNumber: 7
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "loader-line-wrap",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "loader-line"
                    }, void 0, false, {
                        fileName: "<[project]/components/Loader.jsx>",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Loader.jsx>",
                    lineNumber: 11,
                    columnNumber: 7
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "loader-line-wrap",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "loader-line"
                    }, void 0, false, {
                        fileName: "<[project]/components/Loader.jsx>",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Loader.jsx>",
                    lineNumber: 14,
                    columnNumber: 7
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "loader-line-wrap",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "loader-line"
                    }, void 0, false, {
                        fileName: "<[project]/components/Loader.jsx>",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Loader.jsx>",
                    lineNumber: 17,
                    columnNumber: 7
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "loader-line-wrap",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "loader-line"
                    }, void 0, false, {
                        fileName: "<[project]/components/Loader.jsx>",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Loader.jsx>",
                    lineNumber: 20,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Loader.jsx>",
            lineNumber: 7,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Loader.jsx>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Loader;

})()),
"[project]/components/switcher/LanguageContext.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "LanguageProvider": ()=>LanguageProvider,
    "useLanguage": ()=>useLanguage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const LanguageContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["createContext"]();
const useLanguage = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useContext"](LanguageContext);
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('all');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('country_brands');
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
        }
    }, []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](LanguageContext.Provider, {
        value: {
            language,
            setLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "<[project]/components/switcher/LanguageContext.jsx>",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};

})()),
"[project]/components/getBrands/getBrands.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getBrands": ()=>getBrands
});
const getBrands = async (categoryBrands, lng)=>{
    const apiAll = "https://bonusnumber1.com/api/brandsNew/read.php";
    const api1039 = "https://bonusnumber1.com/api/brandsNew2/read.php";
    const api1043 = "https://bonusnumber1.com/api/brandsNew3/read.php";
    const api1044 = "https://bonusnumber1.com/api/brandsNew4/read.php";
    const apiCLD_VIP = "https://bonusnumber1.com/api/brandsNew5/read.php";
    const availableLanguages = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "cz",
            label: "Czech",
            flag: "🇨🇿"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "bg",
            label: "Bulgaria",
            flag: "🇧🇬"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1039 = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "bg",
            label: "Bulgaria",
            flag: "🇧🇬"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "cz",
            label: "Czech",
            flag: "🇨🇿"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "pt",
            label: "Portugal",
            flag: "🇵🇹"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "es",
            label: "Spain",
            flag: "🇪🇸"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "tr",
            label: "Turkey",
            flag: "🇹🇷"
        },
        {
            code: "gb",
            label: "United Kingdom",
            flag: "🇬🇧"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1043 = [
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "us",
            label: "United States",
            flag: "🇺🇸"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1044 = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "cz",
            label: "The Czech Republic",
            flag: "🇨🇿"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "gb",
            label: "Great Britain",
            flag: "🇬🇧"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "za",
            label: "South Africa",
            flag: "🇿🇦"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "us",
            label: "USA",
            flag: "🇺🇸"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguagesCLD_VIP = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "cz",
            label: "The Czech Republic",
            flag: "🇨🇿"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const partners = {
        partner1039: {
            url: api1039,
            languages: availableLanguages1039
        },
        partner1043: {
            url: api1043,
            languages: availableLanguages1043
        },
        partner1044: {
            url: api1044,
            languages: availableLanguages1044
        },
        CLD_VIP: {
            url: apiCLD_VIP,
            languages: availableLanguagesCLD_VIP
        },
        default: {
            url: apiAll,
            languages: availableLanguages
        }
    };
    const source = localStorage.getItem("source") || "default";
    const { url, languages } = partners[source];
    let supportedLanguage = languages.find((language)=>language.code.toUpperCase() === lng.toUpperCase());
    if (!supportedLanguage) {
        supportedLanguage = {
            code: "all"
        };
    }
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error("Failed to fetch data:", res.status);
            return [];
        }
        const responseData = await res.json();
        const filteredData = responseData.brandsNew.filter((rowData)=>(rowData.GEO === supportedLanguage.code.toUpperCase() || supportedLanguage.code === "ALL") && rowData["CurrentStatus"] === "Ongoing" && ![
                "Mirax (FS)",
                "Katsubet (FS)",
                "7Bit (FS)"
            ].includes(rowData["CasinoBrand"]) && rowData[categoryBrands.key1] === categoryBrands.key2);
        return filteredData;
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};

})()),
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
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                    lineNumber: 177,
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
                                lineNumber: 185,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "brands-keitaro basis-[58%]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-col",
                                children: [
                                    isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                        lineNumber: 195,
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
                                                        lineNumber: 201,
                                                        columnNumber: 27
                                                    }, this))
                                            }, index, false, {
                                                fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                                lineNumber: 199,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                        lineNumber: 197,
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
                                                    lineNumber: 217,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                            lineNumber: 215,
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
                                                    lineNumber: 229,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                            lineNumber: 227,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
            lineNumber: 176,
            columnNumber: 9
        }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
            lineNumber: 246,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
        lineNumber: 174,
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
                    href: `${brand.GoBig}/${savedUrl}&creative_id=XXL_Registration`,
                    target: "_blank",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                            src: `/brands/${brand.CasinoBrand}.png`,
                            alt: `Image of ${brand.CasinoBrand}`,
                            width: 250,
                            height: 125,
                            className: "mb-2"
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 270,
                            columnNumber: 9
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "review-bonus text-center",
                                children: brand.OurOfferContent
                            }, void 0, false, {
                                fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 277,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                    lineNumber: 265,
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
                            lineNumber: 285,
                            columnNumber: 11
                        }, this) : "",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            target: "_blank",
                            className: "btn btn-primary btn-fz",
                            href: `${brand.GoBig}/${savedUrl}&creative_id=XXL_Registration`,
                            children: t("Deposit Now")
                        }, void 0, false, {
                            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                            lineNumber: 294,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
                    lineNumber: 283,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
            lineNumber: 260,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Brands_home/UserBrands.tsx>",
        lineNumber: 259,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = UserBrands;

})()),
"[project]/components/Timer.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Timer = ()=>{
    const [timeLeft, setTimeLeft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const storedStartDate = localStorage.getItem("startDate");
        let startDate;
        if (storedStartDate) {
            startDate = new Date(storedStartDate);
            const now = new Date();
            const timeDiff = now - startDate;
            if (timeDiff >= 48 * 60 * 60 * 1000) {
                startDate = new Date();
                localStorage.setItem("startDate", startDate);
            }
        } else {
            startDate = new Date();
            localStorage.setItem("startDate", startDate);
        }
        const updateTimer = ()=>{
            const now = new Date();
            const timeDiff = 48 * 60 * 60 * 1000 - (now - startDate);
            if (timeDiff <= 0) {
                setTimeLeft(null);
            } else {
                const hours = Math.floor(timeDiff / (1000 * 60 * 60));
                const minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
                const seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
                setTimeLeft({
                    hours: String(hours).padStart(2, "0"),
                    minutes: String(minutes).padStart(2, "0"),
                    seconds: String(seconds).padStart(2, "0")
                });
            }
        };
        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
        return ()=>clearInterval(timerInterval);
    }, []);
    if (timeLeft === null) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: "..."
        }, void 0, false, {
            fileName: "<[project]/components/Timer.jsx>",
            lineNumber: 59,
            columnNumber: 12
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "timer",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: t("Expires in:")
            }, void 0, false, {
                fileName: "<[project]/components/Timer.jsx>",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            " ",
            timeLeft.hours,
            ":",
            timeLeft.minutes,
            ":",
            timeLeft.seconds
        ]
    }, void 0, true, {
        fileName: "<[project]/components/Timer.jsx>",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Timer;

})()),
"[project]/components/getBrands/languages.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "availableLanguages": ()=>availableLanguages,
    "availableLanguages1039": ()=>availableLanguages1039,
    "availableLanguages1043": ()=>availableLanguages1043,
    "availableLanguages1044": ()=>availableLanguages1044,
    "availableLanguagesCLD_VIP": ()=>availableLanguagesCLD_VIP
});
const availableLanguages = [
    {
        code: "au",
        label: "Australia",
        flag: "🇦🇺"
    },
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "de",
        label: "Germany",
        flag: "🇩🇪"
    },
    {
        code: "ie",
        label: "Ireland",
        flag: "🇮🇪"
    },
    {
        code: "nz",
        label: "New Zealand",
        flag: "🇳🇿"
    },
    {
        code: "no",
        label: "Norway",
        flag: "🇳🇴"
    },
    {
        code: "fi",
        label: "Finland",
        flag: "🇫🇮"
    },
    {
        code: "at",
        label: "Austria",
        flag: "🇦🇹"
    },
    {
        code: "ch",
        label: "Switzerland",
        flag: "🇨🇭"
    },
    {
        code: "dk",
        label: "Denmark",
        flag: "🇩🇰"
    },
    {
        code: "fr",
        label: "France",
        flag: "🇫🇷"
    },
    {
        code: "it",
        label: "Italy",
        flag: "🇮🇹"
    },
    {
        code: "pl",
        label: "Poland",
        flag: "🇵🇱"
    },
    {
        code: "se",
        label: "Sweden",
        flag: "🇸🇪"
    },
    {
        code: "cz",
        label: "Czech",
        flag: "🇨🇿"
    },
    {
        code: "sk",
        label: "Slovakia",
        flag: "🇸🇰"
    },
    {
        code: "be",
        label: "Belgium",
        flag: "🇧🇪"
    },
    {
        code: "gr",
        label: "Greece",
        flag: "🇬🇷"
    },
    {
        code: "nl",
        label: "Netherlands",
        flag: "🇳🇱"
    },
    {
        code: "hu",
        label: "Hungary",
        flag: "🇭🇺"
    },
    {
        code: "bg",
        label: "Bulgaria",
        flag: "🇧🇬"
    },
    {
        code: "all",
        label: "World",
        flag: "🌍"
    }
];
const availableLanguages1039 = [
    {
        code: "au",
        label: "Australia",
        flag: "🇦🇺"
    },
    {
        code: "at",
        label: "Austria",
        flag: "🇦🇹"
    },
    {
        code: "be",
        label: "Belgium",
        flag: "🇧🇪"
    },
    {
        code: "bg",
        label: "Bulgaria",
        flag: "🇧🇬"
    },
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "cz",
        label: "Czech",
        flag: "🇨🇿"
    },
    {
        code: "dk",
        label: "Denmark",
        flag: "🇩🇰"
    },
    {
        code: "fi",
        label: "Finland",
        flag: "🇫🇮"
    },
    {
        code: "fr",
        label: "France",
        flag: "🇫🇷"
    },
    {
        code: "de",
        label: "Germany",
        flag: "🇩🇪"
    },
    {
        code: "gr",
        label: "Greece",
        flag: "🇬🇷"
    },
    {
        code: "hu",
        label: "Hungary",
        flag: "🇭🇺"
    },
    {
        code: "ie",
        label: "Ireland",
        flag: "🇮🇪"
    },
    {
        code: "it",
        label: "Italy",
        flag: "🇮🇹"
    },
    {
        code: "nl",
        label: "Netherlands",
        flag: "🇳🇱"
    },
    {
        code: "nz",
        label: "New Zealand",
        flag: "🇳🇿"
    },
    {
        code: "no",
        label: "Norway",
        flag: "🇳🇴"
    },
    {
        code: "pl",
        label: "Poland",
        flag: "🇵🇱"
    },
    {
        code: "pt",
        label: "Portugal",
        flag: "🇵🇹"
    },
    {
        code: "sk",
        label: "Slovakia",
        flag: "🇸🇰"
    },
    {
        code: "es",
        label: "Spain",
        flag: "🇪🇸"
    },
    {
        code: "se",
        label: "Sweden",
        flag: "🇸🇪"
    },
    {
        code: "ch",
        label: "Switzerland",
        flag: "🇨🇭"
    },
    {
        code: "tr",
        label: "Turkey",
        flag: "🇹🇷"
    },
    {
        code: "gb",
        label: "United Kingdom",
        flag: "🇬🇧"
    },
    {
        code: "all",
        label: "World",
        flag: "🌍"
    }
];
const availableLanguages1043 = [
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "us",
        label: "United States",
        flag: "🇺🇸"
    }
];
const availableLanguages1044 = [
    {
        code: "au",
        label: "Australia",
        flag: "🇦🇺"
    },
    {
        code: "at",
        label: "Austria",
        flag: "🇦🇹"
    },
    {
        code: "be",
        label: "Belgium",
        flag: "🇧🇪"
    },
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "ch",
        label: "Switzerland",
        flag: "🇨🇭"
    },
    {
        code: "nl",
        label: "Netherlands",
        flag: "🇳🇱"
    },
    {
        code: "de",
        label: "Germany",
        flag: "🇩🇪"
    },
    {
        code: "gr",
        label: "Greece",
        flag: "🇬🇷"
    },
    {
        code: "cz",
        label: "The Czech Republic",
        flag: "🇨🇿"
    },
    {
        code: "fi",
        label: "Finland",
        flag: "🇫🇮"
    },
    {
        code: "gb",
        label: "Great Britain",
        flag: "🇬🇧"
    },
    {
        code: "ie",
        label: "Ireland",
        flag: "🇮🇪"
    },
    {
        code: "it",
        label: "Italy",
        flag: "🇮🇹"
    },
    {
        code: "nz",
        label: "New Zealand",
        flag: "🇳🇿"
    },
    {
        code: "no",
        label: "Norway",
        flag: "🇳🇴"
    },
    {
        code: "pl",
        label: "Poland",
        flag: "🇵🇱"
    },
    {
        code: "za",
        label: "South Africa",
        flag: "🇿🇦"
    },
    {
        code: "se",
        label: "Sweden",
        flag: "🇸🇪"
    },
    {
        code: "us",
        label: "USA",
        flag: "🇺🇸"
    },
    {
        code: "all",
        label: "World",
        flag: "🌍"
    }
];
const availableLanguagesCLD_VIP = [
    {
        code: "au",
        label: "Australia",
        flag: "🇦🇺"
    },
    {
        code: "at",
        label: "Austria",
        flag: "🇦🇹"
    },
    {
        code: "be",
        label: "Belgium",
        flag: "🇧🇪"
    },
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "ch",
        label: "Switzerland",
        flag: "🇨🇭"
    },
    {
        code: "cz",
        label: "The Czech Republic",
        flag: "🇨🇿"
    },
    {
        code: "de",
        label: "Germany",
        flag: "🇩🇪"
    },
    {
        code: "dk",
        label: "Denmark",
        flag: "🇩🇰"
    },
    {
        code: "fi",
        label: "Finland",
        flag: "🇫🇮"
    },
    {
        code: "fr",
        label: "France",
        flag: "🇫🇷"
    },
    {
        code: "gr",
        label: "Greece",
        flag: "🇬🇷"
    },
    {
        code: "hu",
        label: "Hungary",
        flag: "🇭🇺"
    },
    {
        code: "ie",
        label: "Ireland",
        flag: "🇮🇪"
    },
    {
        code: "it",
        label: "Italy",
        flag: "🇮🇹"
    },
    {
        code: "no",
        label: "Norway",
        flag: "🇳🇴"
    },
    {
        code: "nz",
        label: "New Zealand",
        flag: "🇳🇿"
    },
    {
        code: "pl",
        label: "Poland",
        flag: "🇵🇱"
    },
    {
        code: "se",
        label: "Sweden",
        flag: "🇸🇪"
    },
    {
        code: "sk",
        label: "Slovakia",
        flag: "🇸🇰"
    },
    {
        code: "all",
        label: "World",
        flag: "🌍"
    }
];

})()),
"[project]/components/getBrands/getBrands2.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getBrands": ()=>getBrands
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/languages.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const getBrands = async (lng)=>{
    const apiAll = "https://bonusnumber1.com/api/brandsNew/read.php";
    const api1039 = "https://bonusnumber1.com/api/brandsNew2/read.php";
    const api1043 = "https://bonusnumber1.com/api/brandsNew3/read.php";
    const api1044 = "https://bonusnumber1.com/api/brandsNew4/read.php";
    const apiCLD_VIP = "https://bonusnumber1.com/api/brandsNew5/read.php";
    const partners = {
        partner1039: {
            url: api1039,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguages1039"]
        },
        partner1043: {
            url: api1043,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguages1043"]
        },
        partner1044: {
            url: api1044,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguages1044"]
        },
        CLD_VIP: {
            url: apiCLD_VIP,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguagesCLD_VIP"]
        },
        default: {
            url: apiAll,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguages"]
        }
    };
    const source = localStorage.getItem("source") || "default";
    const { url, languages } = partners[source];
    let supportedLanguage = languages.find((language)=>language.code.toUpperCase() === lng.toUpperCase());
    if (!supportedLanguage) {
        supportedLanguage = {
            code: "all"
        };
    }
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error("Failed to fetch data:", res.status);
            return [];
        }
        const responseData = await res.json();
        const filteredData = responseData.brandsNew.filter((rowData)=>(rowData.GEO === supportedLanguage.code.toUpperCase() || supportedLanguage.code === "ALL") && rowData["CurrentStatus"] === "Ongoing" && ![
                "Mirax (FS)",
                "Katsubet (FS)",
                "7Bit (FS)"
            ].includes(rowData["CasinoBrand"]));
        return filteredData;
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};

})()),
"[project]/node_modules/react-spring-3d-carousel/dist/bundle.js (ecmascript, manifest chunk, loader, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__((__turbopack_import__) => {
    return Promise.all([{"path":"chunks/ssr/node_modules_react-spring-3d-carousel_dist_bundle_c8d681.js","included":["[project]/node_modules/react-spring-3d-carousel/dist/bundle.js (ecmascript, manifest chunk, ssr)"]},"chunks/ssr/node_modules_react-spring-3d-carousel_dist_bundle_639314.js"].map((chunk) => __turbopack_load__(chunk))).then(() => {
        return __turbopack_require__("[project]/node_modules/react-spring-3d-carousel/dist/bundle.js (ecmascript, manifest chunk, ssr)");
    }).then((chunks) => {
        return Promise.all(chunks.map((chunk) => __turbopack_load__(chunk)));
    }).then(() => {
        return __turbopack_import__("[project]/node_modules/react-spring-3d-carousel/dist/bundle.js (ecmascript, ssr)");
    });
});

})()),
"[project]/components/slider/Carousel.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Carroussel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spring$2d$3d$2d$carousel$2f$dist$2f$bundle$2e$js__$28$ecmascript$2c$__chunks$29$__ = __turbopack_import__("[project]/node_modules/react-spring-3d-carousel/dist/bundle.js (ecmascript, chunks, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-client-chunks }";
;
;
;
;
function Carroussel(props) {
    const [Carousel, setCarousel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [offsetRadius, setOffsetRadius] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](4);
    const [showArrows, setShowArrows] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [goToSlide, setGoToSlide] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [cards, setCards] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const autoScrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const loadCarousel = async ()=>{
            const DynamicCarousel = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$28$ecmascript$29$__["default"](()=>__turbopack_require__("[project]/node_modules/react-spring-3d-carousel/dist/bundle.js (ecmascript, manifest chunk, loader, ssr)")(__turbopack_import__), {
                loadableGenerated: {
                    modules: [
                        JSON.stringify({
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spring$2d$3d$2d$carousel$2f$dist$2f$bundle$2e$js__$28$ecmascript$2c$__chunks$29$__["default"],
                            chunks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spring$2d$3d$2d$carousel$2f$dist$2f$bundle$2e$js__$28$ecmascript$2c$__chunks$29$__["chunks"]
                        })
                    ]
                }
            });
            setCarousel(()=>DynamicCarousel);
        };
        loadCarousel();
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [
        props.offset,
        props.showArrows
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const table = props.cards.map((element, index)=>{
            return {
                ...element,
                onClick: ()=>setGoToSlide(index)
            };
        });
        setCards(table);
    }, [
        props.cards,
        setGoToSlide
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const startAutoScroll = ()=>{
            autoScrollRef.current = setInterval(()=>{
                setGoToSlide((prevSlide)=>(prevSlide + 1) % props.cards.length);
            }, 5000);
        };
        startAutoScroll();
        return ()=>{
            clearInterval(autoScrollRef.current);
        };
    }, [
        props.cards.length
    ]);
    const handleMouseEnter = ()=>{
        clearInterval(autoScrollRef.current);
    };
    const handleMouseLeave = ()=>{
        autoScrollRef.current = setInterval(()=>{
            setGoToSlide((prevSlide)=>(prevSlide + 1) % props.cards.length);
        }, 5000);
    };
    if (!Carousel) {
        return null;
    }
    let xDown = null;
    let yDown = null;
    const getTouches = (evt)=>{
        return evt.touches || evt.originalEvent.touches;
    };
    const handleTouchStart = (evt)=>{
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
        clearInterval(autoScrollRef.current);
    };
    const handleTouchMove = (evt)=>{
        if (!xDown || !yDown) {
            return;
        }
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                setGoToSlide((prevSlide)=>(prevSlide + 1) % props.cards.length);
            } else {
                setGoToSlide((prevSlide)=>(prevSlide - 1 + props.cards.length) % props.cards.length);
            }
        }
        xDown = null;
        yDown = null;
        autoScrollRef.current = setInterval(()=>{
            setGoToSlide((prevSlide)=>(prevSlide + 1) % props.cards.length);
        }, 5000);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        style: {
            width: props.width,
            height: props.height,
            margin: props.margin
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Carousel, {
            slides: cards,
            goToSlide: goToSlide,
            offsetRadius: offsetRadius,
            showNavigation: showArrows,
            className: "proverka"
        }, void 0, false, {
            fileName: "<[project]/components/slider/Carousel.jsx>",
            lineNumber: 119,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/slider/Carousel.jsx>",
        lineNumber: 108,
        columnNumber: 7
    }, this);
}

})()),
"[project]/components/slider/Card.module.css (css module, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "btnn": "btnn__Card__40cc38fe",
  "card": "card__Card__40cc38fe",
});

})()),
"[project]/components/slider/Card.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/slider/Card.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spring$2f$dist$2f$react$2d$spring$2e$modern$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-spring/dist/react-spring.modern.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
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
function Card({ imagen, link, bonus }) {
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const [show, setShown] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const props3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spring$2f$dist$2f$react$2d$spring$2e$modern$2e$mjs__$28$ecmascript$29$__["useSpring"]({
        borderRadius: 2,
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)"
    });
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (typeof window !== "undefined") {
            const savedUrl = localStorage.getItem("savedUrl");
            setNewUrl(savedUrl);
        }
    }, []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spring$2f$dist$2f$react$2d$spring$2e$modern$2e$mjs__$28$ecmascript$29$__["animated"].div, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$module$2e$css__$28$css__module$29$__["default"].card,
        style: props3,
        onMouseEnter: ()=>setShown(true),
        onMouseLeave: ()=>setShown(false),
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                className: "target-top-brand",
                href: `${link}/${newUrl}&creative_id=XXL_TOP_Brand`,
                target: "_blank",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                    width: 300,
                    height: 150,
                    loading: "lazy",
                    src: imagen,
                    alt: bonus,
                    className: "target-top-brand"
                }, void 0, false, {
                    fileName: "<[project]/components/slider/Card.jsx>",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/slider/Card.jsx>",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "tobbb",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "review-bonus bb",
                    children: bonus
                }, void 0, false, {
                    fileName: "<[project]/components/slider/Card.jsx>",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/slider/Card.jsx>",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$module$2e$css__$28$css__module$29$__["default"].btnn,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                    className: "btn btn-primary target-top-brand",
                    href: `${link}/${newUrl}&creative_id=XXL_TOP_Brand`,
                    target: "_blank",
                    children: t("Play Now")
                }, void 0, false, {
                    fileName: "<[project]/components/slider/Card.jsx>",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/slider/Card.jsx>",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/slider/Card.jsx>",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Card;

})()),
"[project]/components/TopBrands.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>TopBrands
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-node/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Carousel$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Carousel.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$coins_banner2$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$coins_banner2$2e$jpg__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/coins_banner2.jpg.mjs/(IMAGE)/[project]/public/coins_banner2.jpg (static) (structured image object, ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timer$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Timer.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$UserBrands$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Brands_home/UserBrands.tsx (ecmascript, ssr)");
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
;
;
;
;
;
;
function TopBrands() {
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [currentBrandIndex, setCurrentBrandIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [fade, setFade] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
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
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Segment2",
        key2: "Premium"
    };
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            console.log("FILTER", filteredData);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__["default"](brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__["v4"](),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "<[project]/components/TopBrands.jsx>",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        }));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true);
            }, 500);
        }, 5000000);
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    console.log("BRANDS", brands);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "topbr",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timer$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/components/TopBrands.jsx>",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/components/TopBrands.jsx>",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this) : cards2 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-between items-center",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "slidertop",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Carousel$2e$jsx__$28$ecmascript$29$__["default"], {
                                    className: "carmob",
                                    cards: cards2,
                                    height: "500px",
                                    width: "100%",
                                    margin: "0 auto",
                                    offset: 200,
                                    showArrows: false
                                }, void 0, false, {
                                    fileName: "<[project]/components/TopBrands.jsx>",
                                    lineNumber: 130,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/TopBrands.jsx>",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "secondbanner flex items-center justify-center",
                                children: brands.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: `card-second-banner mb-2 flex flex-col items-center pb-3 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`,
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "brandImage p-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "flex justify-center flex-col items-center target-top-new-releases",
                                                href: `${brands[currentBrandIndex].GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                target: "_blank",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                        src: `/brands/${brands[currentBrandIndex].CasinoBrand}.png`,
                                                        alt: brands[currentBrandIndex].CasinoBrand,
                                                        width: 200,
                                                        height: 80,
                                                        loading: "lazy",
                                                        className: "target-top-new-releases"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/TopBrands.jsx>",
                                                        lineNumber: 152,
                                                        columnNumber: 27
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "p-3 text-center flex items-center review-bonus",
                                                        children: brands[currentBrandIndex].OurOfferContent
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/TopBrands.jsx>",
                                                        lineNumber: 160,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/TopBrands.jsx>",
                                                lineNumber: 147,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/TopBrands.jsx>",
                                            lineNumber: 146,
                                            columnNumber: 23
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            className: "btn btn-primary btn-new target-top-new-releases",
                                            href: `${brands[currentBrandIndex].GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                            target: "_blank",
                                            children: t("Play Now")
                                        }, void 0, false, {
                                            fileName: "<[project]/components/TopBrands.jsx>",
                                            lineNumber: 165,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, brands[currentBrandIndex].id_brand, true, {
                                    fileName: "<[project]/components/TopBrands.jsx>",
                                    lineNumber: 142,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/TopBrands.jsx>",
                                lineNumber: 140,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/TopBrands.jsx>",
                        lineNumber: 128,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/TopBrands.jsx>",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/TopBrands.jsx>",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false);
}

})()),
}]);

//# sourceMappingURL=components_47c509._.js.map