(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_getUser_pushPayment_ts_4e4d95._.js", {

"[project]/components/getUser/pushPayment.ts (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "updateUserStatusPayment": ()=>updateUserStatusPayment
});
const updateUserStatusPayment = async (body)=>{
    try {
        const res = await fetch(`https://pickbonus.myawardwallet.com/api/user/update_payment.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        });
        if (res.ok) {
            const responseData = await res.json();
            console.log("Статус оплаты успешно обновлен:", responseData);
            return responseData;
        } else {
            console.error("Не удалось обновить статус оплаты:", res.status);
            return null;
        }
    } catch (error) {
        console.error("Произошла ошибка при обновлении статуса оплаты:", error);
        return null;
    }
};

})()),
}]);

//# sourceMappingURL=components_getUser_pushPayment_ts_4e4d95._.js.map