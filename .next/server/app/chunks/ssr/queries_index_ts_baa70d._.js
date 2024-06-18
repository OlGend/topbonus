(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/queries_index_ts_baa70d._.js", {

"[project]/queries/useMutationUpdatePayment.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useMutationUpdatePayment": ()=>useMutationUpdatePayment
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const useMutationUpdatePayment = (userId, coin, estimatedAmount, walletAddress, amount)=>{
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [message, setMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const mutation = async ()=>{
        setLoading(true);
        setError(false);
        setMessage("");
        const body = JSON.stringify({
            id: userId,
            status_payment: JSON.stringify({
                status: "Waiting",
                timestamp: new Date().toISOString(),
                paymentMethod: coin,
                paymentSumIn: estimatedAmount,
                paymentAddress: walletAddress,
                USD: amount
            }),
            sumMinus: amount
        });
        try {
            const response = await fetch(`https://bonusnumber1.com/api/user/update_payment.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            });
            if (!response.ok) {
                const data = await response.json();
                setLoading(false);
                setError(true);
                setMessage(data.message);
                return false;
            }
            setLoading(false);
            return true;
        } catch (e) {
            setLoading(false);
            setError(true);
            setMessage("Something wrong, try again!");
            return false;
        }
    };
    return [
        mutation,
        {
            loading,
            error,
            message
        }
    ];
};

})()),
"[project]/queries/useMutationSendUserPhoneNumber.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useMutationSendUserPhoneNumber": ()=>useMutationSendUserPhoneNumber
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const useMutationSendUserPhoneNumber = ()=>{
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [message, setMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const mutation = async ({ phoneNumber })=>{
        setData(null);
        setLoading(true);
        setError(false);
        setMessage("");
        try {
            const response = await fetch("https://bonusnumber1.com/api/user/get_token.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    phoneNumber
                })
            });
            if (!response.ok) throw new Error();
            const data = await response.json();
            setData(data.otp_id);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            setMessage("Something wrong, try again!");
        }
    };
    return [
        mutation,
        {
            data,
            loading,
            error,
            message
        }
    ];
};

})()),
"[project]/queries/useMutationSaveUserPhoneNumber.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useMutationSaveUserPhoneNumber": ()=>useMutationSaveUserPhoneNumber
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const useMutationSaveUserPhoneNumber = ()=>{
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const mutation = async ({ userId, phoneNumber })=>{
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(`https://bonusnumber1.com/api/user/update_phone.php`, {
                method: "POST",
                body: JSON.stringify({
                    id: userId,
                    phone_number: phoneNumber
                })
            });
            if (!response.ok) throw new Error();
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    };
    return [
        mutation,
        {
            loading,
            error
        }
    ];
};

})()),
"[project]/queries/useMutationWalletAddressValidate.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useMutationWalletAddressValidate": ()=>useMutationWalletAddressValidate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const apiKey = "MG5SRC6-HFBMACK-MMSR9QW-1EST6QC";
const url = "https://api.nowpayments.io/v1/payout/validate-address";
const useMutationWalletAddressValidate = (coin, walletAddress)=>{
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [message, setMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const mutation = async ()=>{
        setLoading(true);
        setError(false);
        setMessage("");
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    address: walletAddress,
                    currency: coin
                })
            });
            if (response.ok) {
                setData(true);
                setLoading(false);
                return true;
            }
            const data = await response.json();
            setData(data.status);
            setLoading(false);
            setMessage("Invalid payout address, try again!");
            return data.status;
        } catch (error) {
            setData(null);
            setLoading(false);
            setError(true);
            setMessage("Something wrong, try again!");
            return false;
        }
    };
    return [
        mutation,
        {
            data,
            loading,
            error,
            message
        }
    ];
};

})()),
"[project]/queries/useQueryUser.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useQueryUser": ()=>useQueryUser
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const api = "https://bonusnumber1.com/api";
const getUserId = ()=>{
    return localStorage.getItem("user_id") ?? new URLSearchParams(window.location.search).get("keyword");
};
const useQueryUser = ()=>{
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [errorMessage, setErrorMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const getData = async ()=>{
        setLoading(true);
        setError(false);
        setErrorMessage(null);
        const userId = getUserId();
        if (!userId) throw new Error();
        try {
            const response = await fetch(`${api}/user/read_one.php?id=${userId}`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            setErrorMessage("Unexpected error, try again!");
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        getData();
    }, []);
    return {
        data,
        loading,
        error,
        errorMessage,
        refetch: getData
    };
};

})()),
"[project]/queries/useQueryFee.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useQueryFee": ()=>useQueryFee
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const apiKey = "MG5SRC6-HFBMACK-MMSR9QW-1EST6QC";
const useQueryFee = (coin, amount)=>{
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [errorMessage, setErrorMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const getData = async ()=>{
        setLoading(true);
        setError(false);
        setErrorMessage(null);
        try {
            const response = await fetch(`https://api.nowpayments.io/v1/payout/fee?currency=${coin}&amount=${amount}`, {
                headers: {
                    "x-api-key": apiKey
                }
            });
            if (!response.ok) throw new Error();
            const data = await response.json();
            setData(data.fee);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            setErrorMessage("Unexpected error, try again!");
        }
    };
    const reset = ()=>{
        setData(null);
    };
    return {
        data,
        loading,
        error,
        errorMessage,
        refetch: getData,
        reset
    };
};

})()),
"[project]/queries/useQueryEstimated.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useQueryEstimated": ()=>useQueryEstimated
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const useQueryEstimated = (coin, amount)=>{
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [errorMessage, setErrorMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const getData = async ()=>{
        setLoading(true);
        setError(false);
        setErrorMessage(null);
        try {
            const response = await fetch(`https://bonusnumber1.com/api/payment/estimated.php?amount=${amount}&currency_from=usd&currency_to=${coin}`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            setData(data.estimated_amount);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            setErrorMessage("Unexpected error, try again!");
        }
    };
    const reset = ()=>{
        setData(null);
    };
    return {
        data,
        loading,
        error,
        errorMessage,
        refetch: getData,
        reset
    };
};

})()),
"[project]/queries/useQueryCoins.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useQueryCoins": ()=>useQueryCoins
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const apiKey = "MG5SRC6-HFBMACK-MMSR9QW-1EST6QC";
const useQueryCoins = ()=>{
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [errorMessage, setErrorMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const getData = async ()=>{
        setLoading(true);
        setError(false);
        setErrorMessage(null);
        try {
            const response = await fetch("https://api.nowpayments.io/v1/merchant/coins", {
                headers: {
                    "x-api-key": apiKey
                }
            });
            if (!response.ok) throw new Error();
            const data = await response.json();
            setData(data.selectedCurrencies);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            setErrorMessage("Unexpected error, try again!");
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        getData();
    }, []);
    return {
        data,
        loading,
        error,
        errorMessage,
        refetch: getData
    };
};

})()),
"[project]/queries/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useMutationSaveUserPhoneNumber": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useMutationSaveUserPhoneNumber$2e$ts__$28$ecmascript$29$__["useMutationSaveUserPhoneNumber"],
    "useMutationSendUserPhoneNumber": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useMutationSendUserPhoneNumber$2e$ts__$28$ecmascript$29$__["useMutationSendUserPhoneNumber"],
    "useMutationUpdatePayment": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useMutationUpdatePayment$2e$ts__$28$ecmascript$29$__["useMutationUpdatePayment"],
    "useMutationWalletAddressValidate": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useMutationWalletAddressValidate$2e$ts__$28$ecmascript$29$__["useMutationWalletAddressValidate"],
    "useQueryCoins": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useQueryCoins$2e$ts__$28$ecmascript$29$__["useQueryCoins"],
    "useQueryEstimated": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useQueryEstimated$2e$ts__$28$ecmascript$29$__["useQueryEstimated"],
    "useQueryFee": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useQueryFee$2e$ts__$28$ecmascript$29$__["useQueryFee"],
    "useQueryUser": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useQueryUser$2e$ts__$28$ecmascript$29$__["useQueryUser"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useQueryCoins$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/useQueryCoins.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useQueryEstimated$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/useQueryEstimated.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useQueryFee$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/useQueryFee.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useQueryUser$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/useQueryUser.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useMutationWalletAddressValidate$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/useMutationWalletAddressValidate.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useMutationSaveUserPhoneNumber$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/useMutationSaveUserPhoneNumber.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useMutationSendUserPhoneNumber$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/useMutationSendUserPhoneNumber.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$useMutationUpdatePayment$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/useMutationUpdatePayment.ts (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;

})()),
}]);

//# sourceMappingURL=queries_index_ts_baa70d._.js.map