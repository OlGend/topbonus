(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_api_geolocation_route_ts_02d65f._.js", {

"[project]/app/api/geolocation/route.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
async function GET(req) {
    const country = req.headers.get('x-vercel-ip-country') || 'all';
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$28$ecmascript$29$__["NextResponse"].json({
        country
    });
}

})()),
}]);

//# sourceMappingURL=app_api_geolocation_route_ts_02d65f._.js.map