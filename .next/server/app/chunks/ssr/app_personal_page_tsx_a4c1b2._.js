(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_personal_page_tsx_a4c1b2._.js", {

"[project]/app/personal/page.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Personal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Fetcher/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$FinallyStep$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/FinallyStep/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PaymentHistory$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/PaymentHistory/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PaymentMethodStep$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/PaymentMethodStep/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PhoneNumberStep$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/PhoneNumberStep/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$Tabs$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/Tabs/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$WalletAddressStep$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/WalletAddressStep/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Cards$2f$index$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/Cards/index.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBrands$2f$UserBrands$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/UserBrands/UserBrands.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands.jsx (ecmascript, ssr)");
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
;
const DEFAULT_COIN = "USDTTRC20";
const DEFAULT_STEP = 0;
const BRAND_CATEGORIES = {
    key1: "Segment2",
    key2: "Premium"
};
function Personal() {
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { data: user, loading: userLoading, error: userError, errorMessage: userErrorMessage, refetch: refetchUser } = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useQueryUser"]();
    const { data: coins, loading: coinsLoading, error: coinsError, errorMessage: coinsErrorMessage, refetch: refetchCoins } = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useQueryCoins"]();
    const [tab, setTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [step, setStep] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](DEFAULT_STEP);
    const [coin, setCoin] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](DEFAULT_COIN);
    const [amount, setAmount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [walletAddress, setWalletAddress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [phoneNumber, setPhoneNumber] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const fetchBrands = async ()=>{
        const brandsData = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$28$ecmascript$29$__["getBrands"](BRAND_CATEGORIES, language);
        setBrands(brandsData);
    };
    const onChangeTab = (_e, newTabIndex)=>{
        setTab(newTabIndex);
    };
    const onChangeStep = (nextStep)=>{
        setStep(nextStep);
    };
    const onChangeCoin = (e)=>{
        const nextCoin = e.target.value;
        setCoin(nextCoin);
    };
    const onChangeAmount = (e)=>{
        const nextAmount = e.target.value;
        setAmount(nextAmount);
    };
    const onChangeWalletAddress = (e)=>{
        const nextWalletAddress = e.target.value;
        setWalletAddress(nextWalletAddress);
    };
    const onChangePhoneNumber = (nextPhoneNumber)=>{
        setPhoneNumber(nextPhoneNumber);
    };
    const { data: fee, loading: feeLoading, error: feeError, errorMessage: feeErrorMessage, refetch: refetchFee, reset: resetFee } = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useQueryFee"](coin, amount);
    const { data: estimatedAmount, loading: estimatedAmountLoading, error: estimatedAmountError, errorMessage: estimatedAmountErrorMessage, refetch: refetchEstimatedAmount, reset: resetEstimatedAmount } = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useQueryEstimated"](coin, amount);
    const getFeeAndEstimatedAmount = async ()=>{
        await refetchFee();
        await refetchEstimatedAmount();
    };
    const onFinish = async ()=>{
        await refetchUser();
        setStep(DEFAULT_STEP);
        setCoin(DEFAULT_COIN);
        setAmount("");
        setWalletAddress("");
        setPhoneNumber("");
        resetFee();
        resetEstimatedAmount();
    };
    const getWalletAddressStepDescription = ()=>{
        const isPayPal = coin === "PayPal";
        if (!fee || !estimatedAmount || isPayPal) return;
        const receive = Number(estimatedAmount) - fee;
        return `${t("Fee:")} ${fee} ${coin}, ${t("You will receive on balance:")} ${receive} ${coin}`;
    };
    const getSteps = (user, coins)=>{
        const initialSteps = [
            {
                label: t("Payment Method"),
                description: t("Select one of the withdrawal methods and enter the withdrawal amount"),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PaymentMethodStep$2f$index$2e$ts__$28$ecmascript$29$__["PaymentMethodStep"], {
                    user: user,
                    coins: coins,
                    step: step,
                    coin: coin,
                    amount: amount,
                    onChangeStep: onChangeStep,
                    onChangeCoin: onChangeCoin,
                    onChangeAmount: onChangeAmount,
                    getFeeAndEstimatedAmount: getFeeAndEstimatedAmount
                }, void 0, false, {
                    fileName: "<[project]/app/personal/page.tsx>",
                    lineNumber: 172,
                    columnNumber: 11
                }, this)
            },
            {
                label: coin === "PayPal" ? `${t("Email")} ${t("Address")}` : t("Wallet address"),
                description: getWalletAddressStepDescription(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$WalletAddressStep$2f$index$2e$ts__$28$ecmascript$29$__["WalletAddressStep"], {
                    user: user,
                    step: step,
                    coin: coin,
                    walletAddress: walletAddress,
                    amount: amount,
                    estimatedAmount: estimatedAmount,
                    onChangeStep: onChangeStep,
                    onChangeWalletAddress: onChangeWalletAddress,
                    fetchBrands: fetchBrands,
                    onFinish: onFinish
                }, void 0, false, {
                    fileName: "<[project]/app/personal/page.tsx>",
                    lineNumber: 192,
                    columnNumber: 11
                }, this)
            },
            {
                label: t("Final Step"),
                description: t("Congratulations, you have successfully requested a withdrawal, in order for them to be credited to your wallet you will need to make a deposit with one of our brands"),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$FinallyStep$2f$index$2e$ts__$28$ecmascript$29$__["FinallyStep"], {
                    brands: brands
                }, void 0, false, {
                    fileName: "<[project]/app/personal/page.tsx>",
                    lineNumber: 211,
                    columnNumber: 18
                }, this)
            }
        ];
        if (!user.phone_number) {
            initialSteps.splice(1, 0, {
                label: t("Phone Number"),
                description: t("To create a transfer, we need to verify your phone number"),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PhoneNumberStep$2f$index$2e$ts__$28$ecmascript$29$__["PhoneNumberStep"], {
                    user: user,
                    step: step,
                    phoneNumber: phoneNumber,
                    onChangeStep: onChangeStep,
                    onChangePhoneNumber: onChangePhoneNumber
                }, void 0, false, {
                    fileName: "<[project]/app/personal/page.tsx>",
                    lineNumber: 222,
                    columnNumber: 11
                }, this)
            });
        }
        return initialSteps;
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "page-personal main__container pb-10",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$index$2e$ts__$28$ecmascript$29$__["Fetcher"], {
            payload: [
                user,
                coins
            ],
            loading: userLoading || coinsLoading,
            loader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, void 0, void 0),
            error: userError || coinsError,
            onReload: ()=>{
                refetchUser();
                refetchCoins();
            },
            render: ([user, coins])=>{
                const steps = getSteps(user, coins);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "tabsstep",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "title-balance",
                            children: [
                                t("Your balance:"),
                                " ",
                                user.balance,
                                "$"
                            ]
                        }, void 0, true, void 0, void 0),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
                            className: "tab_field",
                            sx: {
                                flexGrow: 1,
                                bgcolor: "background.paper",
                                display: "flex",
                                height: "100%"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$Tabs$2f$index$2e$ts__$28$ecmascript$29$__["Tabs"], {
                                value: tab,
                                onChange: onChangeTab,
                                tabs: {
                                    labels: [
                                        t("Withdrawal Request"),
                                        t("Withdrawal History"),
                                        t("Cards Shop")
                                    ],
                                    content: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Stepper"], {
                                            activeStep: step,
                                            orientation: "vertical",
                                            sx: {
                                                width: "100%"
                                            },
                                            className: "stepper",
                                            children: steps.map((step)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Step"], {
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["StepLabel"], {
                                                            children: step.label
                                                        }, void 0, false, void 0, void 0),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["StepContent"], {
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Typography"], {
                                                                    children: step.description
                                                                }, void 0, false, void 0, void 0),
                                                                step.content
                                                            ]
                                                        }, void 0, true, void 0, void 0)
                                                    ]
                                                }, step.label, true, void 0, void 0))
                                        }, "withdrawalRequest", false, void 0, void 0),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PaymentHistory$2f$index$2e$ts__$28$ecmascript$29$__["PaymentHistory"], {
                                            statusPayment: user.status_payment
                                        }, "withdrawalHistory", false, void 0, void 0),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Cards$2f$index$2e$jsx__$28$ecmascript$29$__["default"], {
                                            user: user,
                                            onFinish: onFinish
                                        }, "cardsShop", false, void 0, void 0),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBrands$2f$UserBrands$2e$tsx__$28$ecmascript$29$__["default"], {}, "brands", false, void 0, void 0)
                                    ]
                                }
                            }, void 0, false, void 0, void 0)
                        }, void 0, false, void 0, void 0)
                    ]
                }, void 0, true, void 0, void 0);
            }
        }, void 0, false, {
            fileName: "<[project]/app/personal/page.tsx>",
            lineNumber: 238,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/personal/page.tsx>",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_personal_page_tsx_a4c1b2._.js.map