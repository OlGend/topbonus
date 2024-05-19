(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_products_ea654f._.js", {

"[project]/components/products/apiProducts/index.js (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getProducts": ()=>getProducts
});
const getProducts = async ()=>{
    try {
        const res = await fetch(`https://pickbonus.myawardwallet.com/api/products/read.php`);
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
"[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PhoneNumberStep": ()=>PhoneNumberStep
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const DEFAULT_OTP_LENGTH = 5;
const PhoneNumberStep = ({ step, onChangeStep, onConfirm, user, product, setEmail, t })=>{
    const defaultCountry = localStorage.getItem("country") ?? undefined;
    const [phoneNumber, setPhoneNumber] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"]("");
    const [otp, setOtp] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"]("");
    const [userData, setUserData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"](user);
    const onChangePhoneNumber = (nextPhoneNumber)=>{
        setPhoneNumber(nextPhoneNumber);
    };
    const [saveUserPhoneNumber, { loading: saveUserPhoneNumberLoading, error: saveUserPhoneNumberError }] = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useMutationSaveUserPhoneNumber"]();
    const [sendUserPhoneNumber, { data: sendUserPhoneNumberData, loading: sendUserPhoneNumberLoading, error: sendUserPhoneNumberError }] = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useMutationSendUserPhoneNumber"]();
    const isButtonContinueDisabled = otp.length < DEFAULT_OTP_LENGTH;
    const [showOtp, setShowOtp] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"](true);
    const [showProduct, setShowProduct] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"](true);
    const [showPhone, setShowPhone] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"](false);
    const [otherContent, setOtherContent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"](false);
    const onConfirmOtp = async ()=>{
        if (!sendUserPhoneNumberData) return;
        try {
            const response = await fetch("https://pickbonus.myawardwallet.com/api/user/send_code.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    otp_id: sendUserPhoneNumberData,
                    otp_code: otp
                })
            });
            const data = await response.json();
            if (user !== null) {
                const id = user.id;
                if (response.ok && data.status === "APPROVED") {
                    await saveUserPhoneNumber({
                        userId: id,
                        phoneNumber
                    });
                    setShowProduct(true);
                    setShowPhone(false);
                } else {
                    console.log("!!!!!!!!!!!!!!!!!!!!!!!", showProduct);
                }
            }
        } catch (e) {
            console.error("ERROR - onConfirmOtp:", e);
        }
    };
    const onReload = async ()=>{
        window.location.reload();
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](StyledDiv, {
        children: showProduct && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
            className: "flex flex-col items-center modal-final",
            children: !otherContent ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                        className: "text-center mb-2",
                        id: "modal-modal-title",
                        variant: "h6",
                        component: "h2",
                        children: t("Indicate the email address to which to send the card")
                    }, void 0, false, {
                        fileName: "<[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 187,
                        columnNumber: 15
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["OutlinedInput"], {
                        placeholder: t("Email"),
                        onChange: (e)=>setEmail(e.target.value)
                    }, void 0, false, {
                        fileName: "<[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 196,
                        columnNumber: 15
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                        className: "btn btn-primary mt-4",
                        onClick: async ()=>{
                            if (user !== null) {
                                await onConfirm();
                                setOtherContent(true);
                            } else {
                                console.error("User is null");
                            }
                        },
                        variant: "contained",
                        children: t("Confirm")
                    }, void 0, false, {
                        fileName: "<[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 201,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                        className: "text-center mb-2",
                        id: "modal-modal-title",
                        variant: "h6",
                        component: "h2",
                        children: t("Your prepaid card request has been received. Our support team will contact you soon to finalize details. Check your inbox.")
                    }, void 0, false, {
                        fileName: "<[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 220,
                        columnNumber: 15
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                        className: "btn btn-primary mt-4",
                        onClick: async ()=>{
                            onReload();
                        },
                        variant: "contained",
                        children: t("Confirm")
                    }, void 0, false, {
                        fileName: "<[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 228,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "<[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx>",
            lineNumber: 184,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx>",
        lineNumber: 115,
        columnNumber: 5
    }, this);
};
const StyledDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["styled"]("div")(()=>`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `);
const StyledBoxTel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"])(()=>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  `);
const StyledButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"])(()=>`
    text-wrap: nowrap;
  `);
const StyledBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"])(()=>`
    display: flex;
    justify-content: center;
  `);

})()),
"[project]/components/products/PhoneNumberStep/index.ts (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PhoneNumberStep": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PhoneNumberStep$2f$PhoneNumberStep$2e$tsx__$28$ecmascript$29$__["PhoneNumberStep"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PhoneNumberStep$2f$PhoneNumberStep$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/products/Stepper/TextMobileStepper.tsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "TextMobileStepper": ()=>TextMobileStepper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PhoneNumberStep$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/PhoneNumberStep/index.ts (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const TextMobileStepper = ({ onConfirm, item, setEmail, t })=>{
    const { data: user, loading: userLoading, error: userError, errorMessage: userErrorMessage, refetch: refetchUser } = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useQueryUser"]();
    const defaultStep = 0;
    const [step, setStep] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"](defaultStep);
    const onChangeStep = (nextStep)=>{
        setStep(nextStep);
    };
    const steps = [
        {
            label: t("Verify your phone number"),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PhoneNumberStep$2f$index$2e$ts__$28$ecmascript$29$__["PhoneNumberStep"], {
                step: step,
                onChangeStep: onChangeStep,
                onConfirm: onConfirm,
                user: user,
                product: item,
                setEmail: setEmail,
                t: t
            }, void 0, false, {
                fileName: "<[project]/components/products/Stepper/TextMobileStepper.tsx>",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }
    ];
    const theme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__["useTheme"]();
    const [activeStep, setActiveStep] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__.useState(0);
    const maxSteps = steps.length;
    const handleNext = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep + 1);
    };
    const handleBack = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep - 1);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__["default"], {
        sx: {
            maxWidth: 400,
            flexGrow: 1
        },
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__["default"], {
            children: steps[activeStep].content
        }, void 0, false, {
            fileName: "<[project]/components/products/Stepper/TextMobileStepper.tsx>",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/products/Stepper/TextMobileStepper.tsx>",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};

})()),
"[project]/components/products/Stepper/index.ts (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "TextMobileStepper": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Stepper$2f$TextMobileStepper$2e$tsx__$28$ecmascript$29$__["TextMobileStepper"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Stepper$2f$TextMobileStepper$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/Stepper/TextMobileStepper.tsx (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/products/Card/index.js (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>MediaCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Card$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Card/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardActions$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardActions/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardContent/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardMedia$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardMedia/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Modal/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$pushPayment$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/pushPayment.ts (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Stepper$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/Stepper/index.ts (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
function MediaCard(props) {
    function cleanJson(jsonString) {
        return jsonString.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
    }
    const { lang, item, onFinish } = props;
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"](false);
    const descriptions = JSON.parse(cleanJson(item.product_description));
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const descriptionForLang = descriptions.find((desc)=>desc[lang]) || descriptions.find((desc)=>desc["all"]);
    const { data: user, loading: userLoading, error: userError, errorMessage: userErrorMessage, refetch: refetchUser } = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useQueryUser"]();
    const onConfirm = async ()=>{
        const status_payment = JSON.stringify({
            status: "Waiting",
            timestamp: new Date().toISOString(),
            paymentMethod: item.product_name,
            paymentSumIn: item.products_amount,
            paymentAddress: email,
            USD: item.products_amount
        });
        const body = JSON.stringify({
            id: user.id,
            status_payment,
            sumMinus: item.products_amount
        });
        const withdrawalData = {
            id: user.id,
            amount: item.products_amount,
            paymentMethod: item.product_name
        };
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$pushPayment$2e$ts__$28$ecmascript$29$__["updateUserStatusPayment"](body);
            console.log("response", response);
        } catch (e) {
            console.error("ERROR - onConfirm:", e);
        }
    };
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const [email, setEmail] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"]("");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "w-full",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "card flex flex-nowrap w-full justify-between items-center",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                        className: " flex",
                        src: `/products/${item.product_image}.jpg`,
                        alt: item.product_name,
                        width: 96,
                        height: 74
                    }, void 0, false, {
                        fileName: "<[project]/components/products/Card/index.js>",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "basis-8/12 card-content flex",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex justify-between basis-3/12 mr-3",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "mr-3 flex items-center",
                                        children: [
                                            " ",
                                            item.product_name
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/products/Card/index.js>",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "flex items-center",
                                        children: [
                                            item.products_amount,
                                            "$"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/products/Card/index.js>",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/products/Card/index.js>",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "basis-8/12 ml-auto dm-none flex items-center",
                                children: [
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: descriptionForLang[lang] || descriptionForLang["all"]
                                    }, void 0, false, {
                                        fileName: "<[project]/components/products/Card/index.js>",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/products/Card/index.js>",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/products/Card/index.js>",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                        onClick: handleOpen,
                        className: "btn-primary btn basis-1/12",
                        variant: "contained",
                        size: "small",
                        disabled: userLoading || !user || +user.balance < +item.products_amount,
                        children: t("Buy")
                    }, void 0, false, {
                        fileName: "<[project]/components/products/Card/index.js>",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/products/Card/index.js>",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                className: "modal-mui modal-email",
                keepMounted: true,
                open: open,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                    sx: {
                        ...style,
                        width: 400
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Stepper$2f$index$2e$ts__$28$ecmascript$29$__["TextMobileStepper"], {
                        setEmail: setEmail,
                        onConfirm: onConfirm,
                        item: item,
                        t: t
                    }, void 0, false, {
                        fileName: "<[project]/components/products/Card/index.js>",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/products/Card/index.js>",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/products/Card/index.js>",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/products/Card/index.js>",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}

})()),
"[project]/components/products/Cards/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$apiProducts$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/apiProducts/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Card$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/Card/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const Cards = ({ user, onFinish })=>{
    const [productsData, setProductsData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useState"]([]);
    const { i18n, t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const lang = i18n.language;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchData = async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$apiProducts$2f$index$2e$js__$28$ecmascript$29$__["getProducts"]();
                setProductsData(data.products);
            } catch (error) {
                console.error("Ошибка при получении товаров:", error);
            }
        };
        fetchData();
    }, [
        lang
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex flex-wrap mt-10 cards",
        children: [
            productsData.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Card$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                    lang: lang,
                    item: item,
                    onFinish: onFinish
                }, item.product_id, false, {
                    fileName: "<[project]/components/products/Cards/index.jsx>",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "cardaval",
                children: t("Card availability varies by region.")
            }, void 0, false, {
                fileName: "<[project]/components/products/Cards/index.jsx>",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/products/Cards/index.jsx>",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Cards;

})()),
}]);

//# sourceMappingURL=components_products_ea654f._.js.map