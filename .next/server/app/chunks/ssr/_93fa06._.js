(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/_93fa06._.js", {

"[project]/.env.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

const env = process.env = {
    ...process.env
};
env["__NEXT_IMAGE_OPTS"] = {
    "deviceSizes": [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    "imageSizes": [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    "path": "/_next/image",
    "loader": "default",
    "domains": [
        "hotoffers.casino",
        "gobig.finance",
        "trckln.com"
    ],
    "disableStaticImages": false,
    "minimumCacheTtl": 60,
    "formats": [
        "image/avif",
        "image/webp"
    ],
    "dangerouslyAllowSvg": false,
    "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;",
    "remotePatterns": [],
    "unoptimized": false
};

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-segment-param.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentParam", {
    enumerable: true,
    get: function() {
        return getSegmentParam;
    }
});
const _interceptionroutes = __turbopack_require__("[project]/node_modules/next/dist/server/future/helpers/interception-routes.js (ecmascript, ssr)");
function getSegmentParam(segment) {
    const interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((marker)=>segment.startsWith(marker));
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
            type: "optional-catchall",
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
            type: "catchall",
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
            type: "dynamic",
            param: segment.slice(1, -1)
        };
    }
    return null;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/flight-render-result.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FlightRenderResult", {
    enumerable: true,
    get: function() {
        return FlightRenderResult;
    }
});
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const _renderresult = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/render-result.js (ecmascript, ssr)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FlightRenderResult extends _renderresult.default {
    constructor(response){
        super(response, {
            contentType: _approuterheaders.RSC_CONTENT_TYPE_HEADER
        });
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/action-handler.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleAction", {
    enumerable: true,
    get: function() {
        return handleAction;
    }
});
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const _notfound = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
const _renderresult = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/render-result.js (ecmascript, ssr)"));
const _flightrenderresult = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/flight-render-result.js (ecmascript, ssr)");
const _utils = __turbopack_require__("[project]/node_modules/next/dist/server/lib/server-ipc/utils.js (ecmascript, ssr)");
const _requestcookies = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js (ecmascript, ssr)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function nodeToWebReadableStream(nodeReadable) {
    if ("TURBOPACK compile-time truthy", 1) {
        const { Readable } = __turbopack_external_require__("stream");
        if ("toWeb" in Readable && typeof Readable.toWeb === "function") {
            return Readable.toWeb(nodeReadable);
        }
        return new ReadableStream({
            start (controller) {
                nodeReadable.on("data", (chunk)=>{
                    controller.enqueue(chunk);
                });
                nodeReadable.on("end", ()=>{
                    controller.close();
                });
                nodeReadable.on("error", (error)=>{
                    controller.error(error);
                });
            }
        });
    } else {
        "TURBOPACK unreachable";
    }
}
function formDataFromSearchQueryString(query) {
    const searchParams = new URLSearchParams(query);
    const formData = new FormData();
    for (const [key, value] of searchParams){
        formData.append(key, value);
    }
    return formData;
}
function nodeHeadersToRecord(headers) {
    const record = {};
    for (const [key, value] of Object.entries(headers)){
        if (value !== undefined) {
            record[key] = Array.isArray(value) ? value.join(", ") : `${value}`;
        }
    }
    return record;
}
function getForwardedHeaders(req, res) {
    const requestHeaders = req.headers;
    const requestCookies = requestHeaders["cookie"] ?? "";
    const responseHeaders = res.getHeaders();
    const rawSetCookies = responseHeaders["set-cookie"];
    const setCookies = (Array.isArray(rawSetCookies) ? rawSetCookies : [
        rawSetCookies
    ]).map((setCookie)=>{
        const [cookie] = `${setCookie}`.split(";");
        return cookie;
    });
    const mergedHeaders = (0, _utils.filterReqHeaders)({
        ...nodeHeadersToRecord(requestHeaders),
        ...nodeHeadersToRecord(responseHeaders)
    });
    const mergedCookies = requestCookies.split("; ").concat(setCookies).join("; ");
    mergedHeaders["cookie"] = mergedCookies;
    delete mergedHeaders["transfer-encoding"];
    return new Headers(mergedHeaders);
}
function fetchIPv4v6(url, init, v6 = false) {
    const hostname = url.hostname;
    if (!v6 && hostname === "localhost") {
        url.hostname = "127.0.0.1";
    }
    return fetch(url, init).catch((err)=>{
        if (err.code === "ECONNREFUSED" && !v6) {
            return fetchIPv4v6(url, init, true);
        }
        throw err;
    });
}
async function addRevalidationHeader(res, { staticGenerationStore, requestStore }) {
    var _staticGenerationStore_revalidatedTags;
    await Promise.all(staticGenerationStore.pendingRevalidates || []);
    const isTagRevalidated = ((_staticGenerationStore_revalidatedTags = staticGenerationStore.revalidatedTags) == null ? void 0 : _staticGenerationStore_revalidatedTags.length) ? 1 : 0;
    const isCookieRevalidated = (0, _requestcookies.getModifiedCookieValues)(requestStore.mutableCookies).length ? 1 : 0;
    res.setHeader("x-action-revalidated", JSON.stringify([
        [],
        isTagRevalidated,
        isCookieRevalidated
    ]));
}
async function createRedirectRenderResult(req, res, redirectUrl, staticGenerationStore) {
    res.setHeader("x-action-redirect", redirectUrl);
    if (redirectUrl.startsWith("/")) {
        var _staticGenerationStore_incrementalCache;
        const forwardedHeaders = getForwardedHeaders(req, res);
        forwardedHeaders.set(_approuterheaders.RSC, "1");
        const host = req.headers["host"];
        const proto = ((_staticGenerationStore_incrementalCache = staticGenerationStore.incrementalCache) == null ? void 0 : _staticGenerationStore_incrementalCache.requestProtocol) || "https";
        const fetchUrl = new URL(`${proto}://${host}${redirectUrl}`);
        if (staticGenerationStore.revalidatedTags) {
            var _staticGenerationStore_incrementalCache1, _staticGenerationStore_incrementalCache_prerenderManifest, _staticGenerationStore_incrementalCache_prerenderManifest_preview;
            forwardedHeaders.set("x-next-revalidated-tags", staticGenerationStore.revalidatedTags.join(","));
            forwardedHeaders.set("x-next-revalidate-tag-token", ((_staticGenerationStore_incrementalCache1 = staticGenerationStore.incrementalCache) == null ? void 0 : (_staticGenerationStore_incrementalCache_prerenderManifest = _staticGenerationStore_incrementalCache1.prerenderManifest) == null ? void 0 : (_staticGenerationStore_incrementalCache_prerenderManifest_preview = _staticGenerationStore_incrementalCache_prerenderManifest.preview) == null ? void 0 : _staticGenerationStore_incrementalCache_prerenderManifest_preview.previewModeId) || "");
        }
        try {
            const headResponse = await fetchIPv4v6(fetchUrl, {
                method: "HEAD",
                headers: forwardedHeaders,
                next: {
                    internal: 1
                }
            });
            if (headResponse.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER) {
                const response = await fetchIPv4v6(fetchUrl, {
                    method: "GET",
                    headers: forwardedHeaders,
                    next: {
                        internal: 1
                    }
                });
                for (const [key, value] of response.headers){
                    if (!_utils.forbiddenHeaders.includes(key)) {
                        res.setHeader(key, value);
                    }
                }
                return new _flightrenderresult.FlightRenderResult(response.body);
            }
        } catch (err) {
            console.error(`failed to get redirect response`, err);
        }
    }
    return new _renderresult.default(JSON.stringify({}));
}
async function handleAction({ req, res, ComponentMod, pathname, serverActionsManifest, generateFlight, staticGenerationStore, requestStore, serverActionsBodySizeLimit }) {
    let actionId = req.headers[_approuterheaders.ACTION.toLowerCase()];
    const contentType = req.headers["content-type"];
    const isURLEncodedAction = req.method === "POST" && contentType === "application/x-www-form-urlencoded";
    const isMultipartAction = req.method === "POST" && (contentType == null ? void 0 : contentType.startsWith("multipart/form-data"));
    const isFetchAction = actionId !== undefined && typeof actionId === "string" && req.method === "POST";
    if (isFetchAction || isURLEncodedAction || isMultipartAction) {
        let bound = [];
        const workerName = "app" + pathname;
        const serverModuleMap = new Proxy({}, {
            get: (_, id)=>{
                return {
                    id: serverActionsManifest[process.env.NEXT_RUNTIME === "edge" ? "edge" : "node"][id].workers[workerName],
                    name: id,
                    chunks: []
                };
            }
        });
        const { actionAsyncStorage } = ComponentMod;
        let actionResult;
        try {
            await actionAsyncStorage.run({
                isAction: true
            }, async ()=>{
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                } else {
                    const { decodeReply, decodeReplyFromBusboy, decodeAction } = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-server-dom-webpack/server.node.js (ecmascript, ssr)");
                    if (isMultipartAction) {
                        if (isFetchAction) {
                            const busboy = __turbopack_require__("[project]/node_modules/busboy/lib/index.js (ecmascript, ssr)");
                            const bb = busboy({
                                headers: req.headers
                            });
                            req.pipe(bb);
                            bound = await decodeReplyFromBusboy(bb, serverModuleMap);
                        } else {
                            const UndiciRequest = __turbopack_require__("[project]/node_modules/next/dist/compiled/undici/index.js (ecmascript, ssr)").Request;
                            const fakeRequest = new UndiciRequest("http://localhost", {
                                method: "POST",
                                headers: {
                                    "Content-Type": req.headers["content-type"]
                                },
                                body: nodeToWebReadableStream(req),
                                duplex: "half"
                            });
                            const formData = await fakeRequest.formData();
                            const action = await decodeAction(formData, serverModuleMap);
                            await action();
                            return;
                        }
                    } else {
                        const { parseBody } = __turbopack_require__("[project]/node_modules/next/dist/server/api-utils/node.js (ecmascript, ssr)");
                        let actionData;
                        try {
                            actionData = await parseBody(req, serverActionsBodySizeLimit ?? "1mb") || "";
                        } catch (e) {
                            if (e && e.statusCode === 413) {
                                e.message = e.message + "\nTo configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#size-limitation";
                            }
                            throw e;
                        }
                        if (isURLEncodedAction) {
                            const formData = formDataFromSearchQueryString(actionData);
                            bound = await decodeReply(formData, serverModuleMap);
                        } else {
                            bound = await decodeReply(actionData, serverModuleMap);
                        }
                    }
                }
                const actionModId = serverActionsManifest[process.env.NEXT_RUNTIME === "edge" ? "edge" : "node"][actionId].workers[workerName];
                const actionHandler = ComponentMod.__next_app__.require(actionModId)[actionId];
                const returnVal = await actionHandler.apply(null, bound);
                if (isFetchAction) {
                    await addRevalidationHeader(res, {
                        staticGenerationStore,
                        requestStore
                    });
                    actionResult = await generateFlight({
                        actionResult: Promise.resolve(returnVal),
                        skipFlight: !staticGenerationStore.pathWasRevalidated
                    });
                }
            });
            return actionResult;
        } catch (err) {
            if ((0, _redirect.isRedirectError)(err)) {
                const redirectUrl = (0, _redirect.getURLFromRedirectError)(err);
                await addRevalidationHeader(res, {
                    staticGenerationStore,
                    requestStore
                });
                if (isFetchAction) {
                    return createRedirectRenderResult(req, res, redirectUrl, staticGenerationStore);
                }
                if (err.mutableCookies) {
                    const headers = new Headers();
                    if ((0, _requestcookies.appendMutableCookies)(headers, err.mutableCookies)) {
                        res.setHeader("set-cookie", Array.from(headers.values()));
                    }
                }
                res.setHeader("Location", redirectUrl);
                res.statusCode = 303;
                return new _renderresult.default("");
            } else if ((0, _notfound.isNotFoundError)(err)) {
                res.statusCode = 404;
                await addRevalidationHeader(res, {
                    staticGenerationStore,
                    requestStore
                });
                if (isFetchAction) {
                    const promise = Promise.reject(err);
                    try {
                        await promise;
                    } catch (_) {}
                    return generateFlight({
                        skipFlight: false,
                        actionResult: promise,
                        asNotFound: true
                    });
                }
                return "not-found";
            }
            if (isFetchAction) {
                res.statusCode = 500;
                await Promise.all(staticGenerationStore.pendingRevalidates || []);
                const promise = Promise.reject(err);
                try {
                    await promise;
                } catch (_) {}
                return generateFlight({
                    actionResult: promise,
                    skipFlight: !staticGenerationStore.pathWasRevalidated
                });
            }
            throw err;
        }
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/create-flight-router-state-from-loader-tree.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addSearchParamsIfPageSegment: null,
    createFlightRouterStateFromLoaderTree: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    createFlightRouterStateFromLoaderTree: function() {
        return createFlightRouterStateFromLoaderTree;
    }
});
const _constants = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/constants.js (ecmascript, ssr)");
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment === _constants.PAGE_SEGMENT_KEY;
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? segment + "?" + stringifiedQuery : segment;
    }
    return segment;
}
function createFlightRouterStateFromLoaderTree([segment, parallelRoutes, { layout }], getDynamicParamFromSegment, searchParams, rootLayoutIncluded = false) {
    const dynamicParam = getDynamicParamFromSegment(segment);
    const treeSegment = dynamicParam ? dynamicParam.treeSegment : segment;
    const segmentTree = [
        addSearchParamsIfPageSegment(treeSegment, searchParams),
        {}
    ];
    if (!rootLayoutIncluded && typeof layout !== "undefined") {
        rootLayoutIncluded = true;
        segmentTree[4] = true;
    }
    segmentTree[1] = Object.keys(parallelRoutes).reduce((existingValue, currentValue)=>{
        existingValue[currentValue] = createFlightRouterStateFromLoaderTree(parallelRoutes[currentValue], getDynamicParamFromSegment, searchParams, rootLayoutIncluded);
        return existingValue;
    }, {});
    return segmentTree;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/validate-url.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateURL", {
    enumerable: true,
    get: function() {
        return validateURL;
    }
});
const DUMMY_ORIGIN = "http://n";
const INVALID_URL_MESSAGE = "Invalid request URL";
function validateURL(url) {
    if (!url) {
        throw new Error(INVALID_URL_MESSAGE);
    }
    try {
        const parsed = new URL(url, DUMMY_ORIGIN);
        if (parsed.origin !== DUMMY_ORIGIN) {
            throw new Error(INVALID_URL_MESSAGE);
        }
        return url;
    } catch  {
        throw new Error(INVALID_URL_MESSAGE);
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/types.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "flightRouterStateSchema", {
    enumerable: true,
    get: function() {
        return flightRouterStateSchema;
    }
});
const _zod = _interop_require_default(__turbopack_require__("[project]/node_modules/zod/lib/index.js (ecmascript, ssr)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const dynamicParamTypesSchema = _zod.default.enum([
    "c",
    "oc",
    "d"
]);
const segmentSchema = _zod.default.union([
    _zod.default.string(),
    _zod.default.tuple([
        _zod.default.string(),
        _zod.default.string(),
        dynamicParamTypesSchema
    ])
]);
const flightRouterStateSchema = _zod.default.lazy(()=>{
    const parallelRoutesSchema = _zod.default.record(flightRouterStateSchema);
    const urlSchema = _zod.default.string().nullable().optional();
    const refreshSchema = _zod.default.literal("refetch").nullable().optional();
    const isRootLayoutSchema = _zod.default.boolean().optional();
    return _zod.default.union([
        _zod.default.tuple([
            segmentSchema,
            parallelRoutesSchema,
            urlSchema,
            refreshSchema,
            isRootLayoutSchema
        ]),
        _zod.default.tuple([
            segmentSchema,
            parallelRoutesSchema,
            urlSchema,
            refreshSchema
        ]),
        _zod.default.tuple([
            segmentSchema,
            parallelRoutesSchema,
            urlSchema
        ]),
        _zod.default.tuple([
            segmentSchema,
            parallelRoutesSchema
        ])
    ]);
});

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/parse-and-validate-flight-router-state.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseAndValidateFlightRouterState", {
    enumerable: true,
    get: function() {
        return parseAndValidateFlightRouterState;
    }
});
const _types = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/types.js (ecmascript, ssr)");
function parseAndValidateFlightRouterState(stateHeader) {
    if (typeof stateHeader === "undefined") {
        return undefined;
    }
    if (Array.isArray(stateHeader)) {
        throw new Error("Multiple router state headers were sent. This is not allowed.");
    }
    if (stateHeader.length > 20 * 2000) {
        throw new Error("The router state header was too large.");
    }
    try {
        return _types.flightRouterStateSchema.parse(JSON.parse(decodeURIComponent(stateHeader)));
    } catch  {
        throw new Error("The router state header was sent but could not be parsed.");
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/render-to-string.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "renderToString", {
    enumerable: true,
    get: function() {
        return renderToString;
    }
});
const _nodewebstreamshelper = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js (ecmascript, ssr)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, ssr)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, ssr)");
async function renderToString({ ReactDOMServer, element }) {
    return (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.renderToString, async ()=>{
        const renderStream = await ReactDOMServer.renderToReadableStream(element);
        await renderStream.allReady;
        return (0, _nodewebstreamshelper.streamToString)(renderStream);
    });
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-script-nonce-from-header.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getScriptNonceFromHeader", {
    enumerable: true,
    get: function() {
        return getScriptNonceFromHeader;
    }
});
const _htmlescape = __turbopack_require__("[project]/node_modules/next/dist/server/htmlescape.js (ecmascript, ssr)");
function getScriptNonceFromHeader(cspHeaderValue) {
    var _directive_split_slice_map_find;
    const directives = cspHeaderValue.split(";").map((directive)=>directive.trim());
    const directive = directives.find((dir)=>dir.startsWith("script-src")) || directives.find((dir)=>dir.startsWith("default-src"));
    if (!directive) {
        return;
    }
    const nonce = (_directive_split_slice_map_find = directive.split(" ").slice(1).map((source)=>source.trim()).find((source)=>source.startsWith("'nonce-") && source.length > 8 && source.endsWith("'"))) == null ? void 0 : _directive_split_slice_map_find.slice(7, -1);
    if (!nonce) {
        return;
    }
    if (_htmlescape.ESCAPE_REGEX.test(nonce)) {
        throw new Error("Nonce value from Content-Security-Policy contained HTML escape characters.\nLearn more: https://nextjs.org/docs/messages/nonce-contained-invalid-characters");
    }
    return nonce;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-preloadable-fonts.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getPreloadableFonts", {
    enumerable: true,
    get: function() {
        return getPreloadableFonts;
    }
});
function getPreloadableFonts(nextFontManifest, filePath, injectedFontPreloadTags) {
    if (!nextFontManifest || !filePath) {
        return null;
    }
    const filepathWithoutExtension = filePath.replace(/\.[^.]+$/, "");
    const fontFiles = new Set();
    let foundFontUsage = false;
    const preloadedFontFiles = nextFontManifest.app[filepathWithoutExtension];
    if (preloadedFontFiles) {
        foundFontUsage = true;
        for (const fontFile of preloadedFontFiles){
            if (!injectedFontPreloadTags.has(fontFile)) {
                fontFiles.add(fontFile);
                injectedFontPreloadTags.add(fontFile);
            }
        }
    }
    if (fontFiles.size) {
        return [
            ...fontFiles
        ].sort();
    } else if (foundFontUsage && injectedFontPreloadTags.size === 0) {
        return [];
    } else {
        return null;
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-css-inlined-link-tags.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCssInlinedLinkTags", {
    enumerable: true,
    get: function() {
        return getCssInlinedLinkTags;
    }
});
function getCssInlinedLinkTags(clientReferenceManifest, filePath, injectedCSS, collectNewCSSImports) {
    const filePathWithoutExt = filePath.replace(/\.[^.]+$/, "");
    const chunks = new Set();
    const entryCSSFiles = clientReferenceManifest.entryCSSFiles[filePathWithoutExt];
    if (entryCSSFiles) {
        for (const file of entryCSSFiles){
            if (!injectedCSS.has(file)) {
                if (collectNewCSSImports) {
                    injectedCSS.add(file);
                }
                chunks.add(file);
            }
        }
    }
    return [
        ...chunks
    ];
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-short-dynamic-param-type.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dynamicParamTypes: null,
    getShortDynamicParamType: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dynamicParamTypes: function() {
        return dynamicParamTypes;
    },
    getShortDynamicParamType: function() {
        return getShortDynamicParamType;
    }
});
const dynamicParamTypes = {
    catchall: "c",
    "optional-catchall": "oc",
    dynamic: "d"
};
function getShortDynamicParamType(type) {
    const short = dynamicParamTypes[type];
    if (!short) {
        throw new Error("Unknown dynamic param type");
    }
    return short;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/create-error-handler.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createErrorHandler", {
    enumerable: true,
    get: function() {
        return createErrorHandler;
    }
});
const _hooksservercontext = __turbopack_require__("[project]/node_modules/next/dist/client/components/hooks-server-context.js (ecmascript, ssr)");
const _stringhash = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/string-hash/index.js (ecmascript, ssr)"));
const _formatservererror = __turbopack_require__("[project]/node_modules/next/dist/lib/format-server-error.js (ecmascript, ssr)");
const _notfound = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
const _nossrerror = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js (ecmascript, ssr)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createErrorHandler({ _source, dev, isNextExport, errorLogger, capturedErrors, allCapturedErrors }) {
    return (err)=>{
        var _err_message;
        if (allCapturedErrors) allCapturedErrors.push(err);
        if (err && (err.digest === _hooksservercontext.DYNAMIC_ERROR_CODE || (0, _notfound.isNotFoundError)(err) || err.digest === _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE || (0, _redirect.isRedirectError)(err))) {
            return err.digest;
        }
        if (dev) {
            (0, _formatservererror.formatServerError)(err);
        }
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes("The specific message is omitted in production builds to avoid leaking sensitive details.")))) {
            if (errorLogger) {
                errorLogger(err).catch(()=>{});
            } else {
                if ("TURBOPACK compile-time truthy", 1) {
                    const { logAppDirError } = __turbopack_require__("[project]/node_modules/next/dist/server/dev/log-app-dir-error.js (ecmascript, ssr)");
                    logAppDirError(err);
                }
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                }
            }
        }
        capturedErrors.push(err);
        return (0, _stringhash.default)(err.message + err.stack + (err.digest || "")).toString();
    };
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/preload-component.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "preloadComponent", {
    enumerable: true,
    get: function() {
        return preloadComponent;
    }
});
function preloadComponent(Component, props) {
    const prev = console.error;
    console.error = function(msg) {
        if (msg.startsWith("Warning: Invalid hook call.")) {} else {
            prev.apply(console, arguments);
        }
    };
    try {
        let result = Component(props);
        if (result && typeof result.then === "function") {
            result.then(()=>{}, ()=>{});
        }
        return function() {
            return result;
        };
    } catch (x) {} finally{
        console.error = prev;
    }
    return Component;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/interop-default.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "interopDefault", {
    enumerable: true,
    get: function() {
        return interopDefault;
    }
});
function interopDefault(mod) {
    return mod.default || mod;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/use-flight-response.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useFlightResponse", {
    enumerable: true,
    get: function() {
        return useFlightResponse;
    }
});
const _nodewebstreamshelper = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js (ecmascript, ssr)");
const _encodedecode = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/encode-decode.js (ecmascript, ssr)");
const _htmlescape = __turbopack_require__("[project]/node_modules/next/dist/server/htmlescape.js (ecmascript, ssr)");
const isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";
function useFlightResponse(writable, req, clientReferenceManifest, rscChunks, flightResponseRef, nonce) {
    if (flightResponseRef.current !== null) {
        return flightResponseRef.current;
    }
    const { createFromReadableStream } = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-server-dom-webpack/client.edge.js (ecmascript, ssr)");
    const [renderStream, forwardStream] = (0, _nodewebstreamshelper.readableStreamTee)(req);
    const res = createFromReadableStream(renderStream, {
        moduleMap: isEdgeRuntime ? clientReferenceManifest.edgeSSRModuleMapping : clientReferenceManifest.ssrModuleMapping
    });
    flightResponseRef.current = res;
    let bootstrapped = false;
    const forwardReader = forwardStream.getReader();
    const writer = writable.getWriter();
    const startScriptTag = nonce ? `<script nonce=${JSON.stringify(nonce)}>` : "<script>";
    const textDecoder = new TextDecoder();
    function read() {
        forwardReader.read().then(({ done, value })=>{
            if (value) {
                rscChunks.push(value);
            }
            if (!bootstrapped) {
                bootstrapped = true;
                writer.write((0, _encodedecode.encodeText)(`${startScriptTag}(self.__next_f=self.__next_f||[]).push(${(0, _htmlescape.htmlEscapeJsonString)(JSON.stringify([
                    0
                ]))})</script>`));
            }
            if (done) {
                setTimeout(()=>{
                    flightResponseRef.current = null;
                });
                writer.close();
            } else {
                const responsePartial = (0, _encodedecode.decodeText)(value, textDecoder);
                const scripts = `${startScriptTag}self.__next_f.push(${(0, _htmlescape.htmlEscapeJsonString)(JSON.stringify([
                    1,
                    responsePartial
                ]))})</script>`;
                writer.write((0, _encodedecode.encodeText)(scripts));
                read();
            }
        });
    }
    read();
    return res;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/create-server-components-renderer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createServerComponentRenderer", {
    enumerable: true,
    get: function() {
        return createServerComponentRenderer;
    }
});
const _react = _interop_require_wildcard(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _useflightresponse = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/use-flight-response.js (ecmascript, ssr)");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function createServerComponentRenderer(ComponentToRender, ComponentMod, { transformStream, clientReferenceManifest, serverContexts, rscChunks }, serverComponentsErrorHandler, nonce) {
    if (ComponentMod.__next_app__) {
        globalThis.__next_require__ = ComponentMod.__next_app__.require;
        globalThis.__next_chunk_load__ = ComponentMod.__next_app__.loadChunk;
    }
    let RSCStream;
    const createRSCStream = (props)=>{
        if (!RSCStream) {
            RSCStream = ComponentMod.renderToReadableStream(_react.default.createElement(ComponentToRender, props), clientReferenceManifest.clientModules, {
                context: serverContexts,
                onError: serverComponentsErrorHandler
            });
        }
        return RSCStream;
    };
    const flightResponseRef = {
        current: null
    };
    const writable = transformStream.writable;
    return function ServerComponentWrapper(props) {
        const reqStream = createRSCStream(props);
        const response = (0, _useflightresponse.useFlightResponse)(writable, reqStream, clientReferenceManifest, rscChunks, flightResponseRef, nonce);
        return (0, _react.use)(response);
    };
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/app-render.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "renderToHTMLOrFlight", {
    enumerable: true,
    get: function() {
        return renderToHTMLOrFlight;
    }
});
const _react = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _error = __turbopack_require__("[project]/node_modules/next/dist/client/components/error.js (ecmascript, ssr)");
const _createservercomponentsrenderer = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/create-server-components-renderer.js (ecmascript, ssr)");
const _renderresult = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/render-result.js (ecmascript, ssr)"));
const _nodewebstreamshelper = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js (ecmascript, ssr)");
const _matchsegments = __turbopack_require__("[project]/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
const _serverinsertedhtml = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/server-inserted-html.js (ecmascript, ssr)");
const _internalutils = __turbopack_require__("[project]/node_modules/next/dist/server/internal-utils.js (ecmascript, ssr)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const _metadata = __turbopack_require__("[project]/node_modules/next/dist/lib/metadata/metadata.js (ecmascript, ssr)");
const _requestasyncstoragewrapper = __turbopack_require__("[project]/node_modules/next/dist/server/async-storage/request-async-storage-wrapper.js (ecmascript, ssr)");
const _staticgenerationasyncstoragewrapper = __turbopack_require__("[project]/node_modules/next/dist/server/async-storage/static-generation-async-storage-wrapper.js (ecmascript, ssr)");
const _clientreference = __turbopack_require__("[project]/node_modules/next/dist/lib/client-reference.js (ecmascript, ssr)");
const _appdirmodule = __turbopack_require__("[project]/node_modules/next/dist/server/lib/app-dir-module.js (ecmascript, ssr)");
const _notfound = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
const _patchfetch = __turbopack_require__("[project]/node_modules/next/dist/server/lib/patch-fetch.js (ecmascript, ssr)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, ssr)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, ssr)");
const _interopdefault = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/interop-default.js (ecmascript, ssr)");
const _preloadcomponent = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/preload-component.js (ecmascript, ssr)");
const _flightrenderresult = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/flight-render-result.js (ecmascript, ssr)");
const _createerrorhandler = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/create-error-handler.js (ecmascript, ssr)");
const _getshortdynamicparamtype = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-short-dynamic-param-type.js (ecmascript, ssr)");
const _getsegmentparam = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-segment-param.js (ecmascript, ssr)");
const _getcssinlinedlinktags = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-css-inlined-link-tags.js (ecmascript, ssr)");
const _getpreloadablefonts = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-preloadable-fonts.js (ecmascript, ssr)");
const _getscriptnoncefromheader = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-script-nonce-from-header.js (ecmascript, ssr)");
const _rendertostring = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/render-to-string.js (ecmascript, ssr)");
const _parseandvalidateflightrouterstate = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/parse-and-validate-flight-router-state.js (ecmascript, ssr)");
const _validateurl = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/validate-url.js (ecmascript, ssr)");
const _createflightrouterstatefromloadertree = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/create-flight-router-state-from-loader-tree.js (ecmascript, ssr)");
const _actionhandler = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/action-handler.js (ecmascript, ssr)");
const _nossrerror = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js (ecmascript, ssr)");
const _log = __turbopack_require__("[project]/node_modules/next/dist/build/output/log.js (ecmascript, ssr)");
const _requestcookies = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js (ecmascript, ssr)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ErrorHtml({ children }) {
    return _react.default.createElement("html", {
        id: "__next_error__"
    }, _react.default.createElement("body", null, children));
}
function findMatchedComponent(loaderTree, componentType, depth, result) {
    const [, parallelRoutes, components] = loaderTree;
    const childKeys = Object.keys(parallelRoutes);
    result = components[componentType] || result;
    if (depth <= 0 || childKeys.length === 0) {
        return result;
    }
    for (const key of childKeys){
        const childTree = parallelRoutes[key];
        const matchedComponent = findMatchedComponent(childTree, componentType, depth - 1, result);
        if (matchedComponent) {
            return matchedComponent;
        }
    }
    return undefined;
}
function findDynamicParamFromRouterState(providedFlightRouterState, segment) {
    if (!providedFlightRouterState) {
        return null;
    }
    const treeSegment = providedFlightRouterState[0];
    if ((0, _matchsegments.canSegmentBeOverridden)(segment, treeSegment)) {
        if (!Array.isArray(treeSegment) || Array.isArray(segment)) {
            return null;
        }
        return {
            param: treeSegment[0],
            value: treeSegment[1],
            treeSegment: treeSegment,
            type: treeSegment[2]
        };
    }
    for (const parallelRouterState of Object.values(providedFlightRouterState[1])){
        const maybeDynamicParam = findDynamicParamFromRouterState(parallelRouterState, segment);
        if (maybeDynamicParam) {
            return maybeDynamicParam;
        }
    }
    return null;
}
function hasLoadingComponentInTree(tree) {
    const [, parallelRoutes, { loading }] = tree;
    if (loading) {
        return true;
    }
    return Object.values(parallelRoutes).some((parallelRoute)=>hasLoadingComponentInTree(parallelRoute));
}
async function renderToHTMLOrFlight(req, res, pagePath, query, renderOpts) {
    const isFlight = req.headers[_approuterheaders.RSC.toLowerCase()] !== undefined;
    const pathname = (0, _validateurl.validateURL)(req.url);
    const { buildManifest, subresourceIntegrityManifest, serverActionsManifest, ComponentMod, dev, nextFontManifest, supportsDynamicHTML, nextConfigOutput, serverActionsBodySizeLimit } = renderOpts;
    const appUsingSizeAdjust = !!(nextFontManifest == null ? void 0 : nextFontManifest.appUsingSizeAdjust);
    const clientReferenceManifest = renderOpts.clientReferenceManifest;
    const capturedErrors = [];
    const allCapturedErrors = [];
    const isNextExport = !!renderOpts.nextExport;
    const serverComponentsErrorHandler = (0, _createerrorhandler.createErrorHandler)({
        _source: "serverComponentsRenderer",
        dev,
        isNextExport,
        errorLogger: renderOpts.appDirDevErrorLogger,
        capturedErrors
    });
    const flightDataRendererErrorHandler = (0, _createerrorhandler.createErrorHandler)({
        _source: "flightDataRenderer",
        dev,
        isNextExport,
        errorLogger: renderOpts.appDirDevErrorLogger,
        capturedErrors
    });
    const htmlRendererErrorHandler = (0, _createerrorhandler.createErrorHandler)({
        _source: "htmlRenderer",
        dev,
        isNextExport,
        errorLogger: renderOpts.appDirDevErrorLogger,
        capturedErrors,
        allCapturedErrors
    });
    (0, _patchfetch.patchFetch)(ComponentMod);
    const generateStaticHTML = supportsDynamicHTML !== true;
    const staticGenerationAsyncStorage = ComponentMod.staticGenerationAsyncStorage;
    const requestAsyncStorage = ComponentMod.requestAsyncStorage;
    const staticGenerationBailout = ComponentMod.staticGenerationBailout;
    const wrappedRender = async ()=>{
        var _getTracer_getRootSpanAttributes, _staticGenerationStore_tags;
        const staticGenerationStore = staticGenerationAsyncStorage.getStore();
        if (!staticGenerationStore) {
            throw new Error(`Invariant: Render expects to have staticGenerationAsyncStorage, none found`);
        }
        staticGenerationStore.fetchMetrics = [];
        renderOpts.fetchMetrics = staticGenerationStore.fetchMetrics;
        const requestStore = requestAsyncStorage.getStore();
        if (!requestStore) {
            throw new Error(`Invariant: Render expects to have requestAsyncStorage, none found`);
        }
        query = {
            ...query
        };
        (0, _internalutils.stripInternalQueries)(query);
        const isPrefetch = req.headers[_approuterheaders.NEXT_ROUTER_PREFETCH.toLowerCase()] !== undefined;
        let providedFlightRouterState = isFlight ? (0, _parseandvalidateflightrouterstate.parseAndValidateFlightRouterState)(req.headers[_approuterheaders.NEXT_ROUTER_STATE_TREE.toLowerCase()]) : undefined;
        const loaderTree = ComponentMod.tree;
        const requestId = process.env.NEXT_RUNTIME === "edge" ? crypto.randomUUID() : __turbopack_require__("[project]/node_modules/next/dist/compiled/nanoid/index.cjs (ecmascript, ssr)").nanoid();
        const LayoutRouter = ComponentMod.LayoutRouter;
        const RenderFromTemplateContext = ComponentMod.RenderFromTemplateContext;
        const createSearchParamsBailoutProxy = ComponentMod.createSearchParamsBailoutProxy;
        const StaticGenerationSearchParamsBailoutProvider = ComponentMod.StaticGenerationSearchParamsBailoutProvider;
        const isStaticGeneration = staticGenerationStore.isStaticGeneration;
        const providedSearchParams = isStaticGeneration ? createSearchParamsBailoutProxy() : query;
        const searchParamsProps = {
            searchParams: providedSearchParams
        };
        const serverContexts = [
            [
                "WORKAROUND",
                null
            ]
        ];
        const pathParams = renderOpts.params;
        const getDynamicParamFromSegment = (segment)=>{
            const segmentParam = (0, _getsegmentparam.getSegmentParam)(segment);
            if (!segmentParam) {
                return null;
            }
            const key = segmentParam.param;
            let value = pathParams[key];
            if (value === "__NEXT_EMPTY_PARAM__") {
                value = undefined;
            }
            if (Array.isArray(value)) {
                value = value.map((i)=>encodeURIComponent(i));
            } else if (typeof value === "string") {
                value = encodeURIComponent(value);
            }
            if (!value) {
                if (segmentParam.type === "optional-catchall") {
                    const type = _getshortdynamicparamtype.dynamicParamTypes[segmentParam.type];
                    return {
                        param: key,
                        value: null,
                        type: type,
                        treeSegment: [
                            key,
                            "",
                            type
                        ]
                    };
                }
                return findDynamicParamFromRouterState(providedFlightRouterState, segment);
            }
            const type = (0, _getshortdynamicparamtype.getShortDynamicParamType)(segmentParam.type);
            return {
                param: key,
                value: value,
                treeSegment: [
                    key,
                    Array.isArray(value) ? value.join("/") : value,
                    type
                ],
                type: type
            };
        };
        let defaultRevalidate = false;
        const assetPrefix = renderOpts.assetPrefix || "";
        const getAssetQueryString = (addTimestamp)=>{
            const isDev = process.env.NODE_ENV === "development";
            let qs = "";
            if (isDev && addTimestamp) {
                qs += `?v=${Date.now()}`;
            }
            if (renderOpts.deploymentId) {
                qs += `${isDev ? "&" : "?"}dpl=${renderOpts.deploymentId}`;
            }
            return qs;
        };
        const createComponentAndStyles = async ({ filePath, getComponent, shouldPreload, injectedCSS })=>{
            const cssHrefs = (0, _getcssinlinedlinktags.getCssInlinedLinkTags)(clientReferenceManifest, filePath, injectedCSS);
            const styles = cssHrefs ? cssHrefs.map((href, index)=>{
                const fullHref = `${assetPrefix}/_next/${href}${getAssetQueryString(true)}`;
                const precedence = shouldPreload ? process.env.NODE_ENV === "development" ? "next_" + href : "next" : undefined;
                return _react.default.createElement("link", {
                    rel: "stylesheet",
                    href: fullHref,
                    precedence: precedence,
                    key: index
                });
            }) : null;
            const Comp = (0, _interopdefault.interopDefault)(await getComponent());
            return [
                Comp,
                styles
            ];
        };
        const getLayerAssets = ({ layoutOrPagePath, injectedCSS: injectedCSSWithCurrentLayout, injectedFontPreloadTags: injectedFontPreloadTagsWithCurrentLayout })=>{
            const stylesheets = layoutOrPagePath ? (0, _getcssinlinedlinktags.getCssInlinedLinkTags)(clientReferenceManifest, layoutOrPagePath, injectedCSSWithCurrentLayout, true) : [];
            const preloadedFontFiles = layoutOrPagePath ? (0, _getpreloadablefonts.getPreloadableFonts)(nextFontManifest, layoutOrPagePath, injectedFontPreloadTagsWithCurrentLayout) : null;
            if (preloadedFontFiles) {
                if (preloadedFontFiles.length) {
                    for(let i = 0; i < preloadedFontFiles.length; i++){
                        const fontFilename = preloadedFontFiles[i];
                        const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFilename)[1];
                        const type = `font/${ext}`;
                        const href = `${assetPrefix}/_next/${fontFilename}`;
                        ComponentMod.preloadFont(href, type);
                    }
                } else {
                    try {
                        let url = new URL(assetPrefix);
                        ComponentMod.preconnect(url.origin, "anonymous");
                    } catch (error) {
                        ComponentMod.preconnect("/", "anonymous");
                    }
                }
            }
            const styles = stylesheets ? stylesheets.map((href, index)=>{
                const fullHref = `${assetPrefix}/_next/${href}${getAssetQueryString(true)}`;
                const precedence = process.env.NODE_ENV === "development" ? "next_" + href : "next";
                ComponentMod.preloadStyle(fullHref);
                return _react.default.createElement("link", {
                    rel: "stylesheet",
                    href: fullHref,
                    precedence: precedence,
                    key: index
                });
            }) : null;
            return styles;
        };
        const parseLoaderTree = (tree)=>{
            const [segment, parallelRoutes, components] = tree;
            const { layout } = components;
            let { page } = components;
            page = segment === "__DEFAULT__" ? components.defaultPage : page;
            const layoutOrPagePath = (layout == null ? void 0 : layout[1]) || (page == null ? void 0 : page[1]);
            return {
                page,
                segment,
                components,
                layoutOrPagePath,
                parallelRoutes
            };
        };
        const createComponentTree = async ({ createSegmentPath, loaderTree: tree, parentParams, firstItem, rootLayoutIncluded, injectedCSS, injectedFontPreloadTags, asNotFound })=>{
            const { page, layoutOrPagePath, segment, components, parallelRoutes } = parseLoaderTree(tree);
            const { layout, template, error, loading, "not-found": notFound } = components;
            const injectedCSSWithCurrentLayout = new Set(injectedCSS);
            const injectedFontPreloadTagsWithCurrentLayout = new Set(injectedFontPreloadTags);
            const styles = getLayerAssets({
                layoutOrPagePath,
                injectedCSS: injectedCSSWithCurrentLayout,
                injectedFontPreloadTags: injectedFontPreloadTagsWithCurrentLayout
            });
            const [Template, templateStyles] = template ? await createComponentAndStyles({
                filePath: template[1],
                getComponent: template[0],
                shouldPreload: true,
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [
                _react.default.Fragment
            ];
            const [ErrorComponent, errorStyles] = error ? await createComponentAndStyles({
                filePath: error[1],
                getComponent: error[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            const [Loading, loadingStyles] = loading ? await createComponentAndStyles({
                filePath: loading[1],
                getComponent: loading[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            const isLayout = typeof layout !== "undefined";
            const isPage = typeof page !== "undefined";
            const [layoutOrPageMod] = await (0, _appdirmodule.getLayoutOrPageModule)(tree);
            const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
            const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
            const [NotFound, notFoundStyles] = notFound ? await createComponentAndStyles({
                filePath: notFound[1],
                getComponent: notFound[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            let dynamic = layoutOrPageMod == null ? void 0 : layoutOrPageMod.dynamic;
            if (nextConfigOutput === "export") {
                if (!dynamic || dynamic === "auto") {
                    dynamic = "error";
                } else if (dynamic === "force-dynamic") {
                    staticGenerationStore.forceDynamic = true;
                    staticGenerationStore.dynamicShouldError = true;
                    staticGenerationBailout(`output: export`, {
                        dynamic,
                        link: "https://nextjs.org/docs/advanced-features/static-html-export"
                    });
                }
            }
            if (typeof dynamic === "string") {
                if (dynamic === "error") {
                    staticGenerationStore.dynamicShouldError = true;
                } else if (dynamic === "force-dynamic") {
                    staticGenerationStore.forceDynamic = true;
                    staticGenerationBailout(`force-dynamic`, {
                        dynamic
                    });
                } else {
                    staticGenerationStore.dynamicShouldError = false;
                    if (dynamic === "force-static") {
                        staticGenerationStore.forceStatic = true;
                    } else {
                        staticGenerationStore.forceStatic = false;
                    }
                }
            }
            if (typeof (layoutOrPageMod == null ? void 0 : layoutOrPageMod.fetchCache) === "string") {
                staticGenerationStore.fetchCache = layoutOrPageMod == null ? void 0 : layoutOrPageMod.fetchCache;
            }
            if (typeof (layoutOrPageMod == null ? void 0 : layoutOrPageMod.revalidate) === "number") {
                defaultRevalidate = layoutOrPageMod.revalidate;
                if (typeof staticGenerationStore.revalidate === "undefined" || typeof staticGenerationStore.revalidate === "number" && staticGenerationStore.revalidate > defaultRevalidate) {
                    staticGenerationStore.revalidate = defaultRevalidate;
                }
                if (staticGenerationStore.isStaticGeneration && defaultRevalidate === 0) {
                    const { DynamicServerError } = ComponentMod.serverHooks;
                    const dynamicUsageDescription = `revalidate: 0 configured ${segment}`;
                    staticGenerationStore.dynamicUsageDescription = dynamicUsageDescription;
                    throw new DynamicServerError(dynamicUsageDescription);
                }
            }
            if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicUsageErr) {
                throw staticGenerationStore.dynamicUsageErr;
            }
            let Component = layoutOrPageMod ? (0, _interopdefault.interopDefault)(layoutOrPageMod) : undefined;
            if (dev) {
                const { isValidElementType } = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-is/index.js (ecmascript, ssr)");
                if ((isPage || typeof Component !== "undefined") && !isValidElementType(Component)) {
                    throw new Error(`The default export is not a React Component in page: "${pagePath}"`);
                }
                if (typeof ErrorComponent !== "undefined" && !isValidElementType(ErrorComponent)) {
                    throw new Error(`The default export of error is not a React Component in page: ${segment}`);
                }
                if (typeof Loading !== "undefined" && !isValidElementType(Loading)) {
                    throw new Error(`The default export of loading is not a React Component in ${segment}`);
                }
                if (typeof NotFound !== "undefined" && !isValidElementType(NotFound)) {
                    throw new Error(`The default export of notFound is not a React Component in ${segment}`);
                }
            }
            const segmentParam = getDynamicParamFromSegment(segment);
            const currentParams = segmentParam && segmentParam.value !== null ? {
                ...parentParams,
                [segmentParam.param]: segmentParam.value
            } : parentParams;
            const actualSegment = segmentParam ? segmentParam.treeSegment : segment;
            const parallelRouteMap = await Promise.all(Object.keys(parallelRoutes).map(async (parallelRouteKey)=>{
                const currentSegmentPath = firstItem ? [
                    parallelRouteKey
                ] : [
                    actualSegment,
                    parallelRouteKey
                ];
                const parallelRoute = parallelRoutes[parallelRouteKey];
                const childSegment = parallelRoute[0];
                const childSegmentParam = getDynamicParamFromSegment(childSegment);
                if (isPrefetch && (Loading || !hasLoadingComponentInTree(parallelRoute))) {
                    const childProp = {
                        current: null,
                        segment: (0, _createflightrouterstatefromloadertree.addSearchParamsIfPageSegment)(childSegmentParam ? childSegmentParam.treeSegment : childSegment, query)
                    };
                    return [
                        parallelRouteKey,
                        _react.default.createElement(LayoutRouter, {
                            parallelRouterKey: parallelRouteKey,
                            segmentPath: createSegmentPath(currentSegmentPath),
                            loading: Loading ? _react.default.createElement(Loading, null) : undefined,
                            loadingStyles: loadingStyles,
                            hasLoading: Boolean(Loading),
                            error: ErrorComponent,
                            errorStyles: errorStyles,
                            template: _react.default.createElement(Template, null, _react.default.createElement(RenderFromTemplateContext, null)),
                            templateStyles: templateStyles,
                            notFound: NotFound ? _react.default.createElement(NotFound, null) : undefined,
                            notFoundStyles: notFoundStyles,
                            childProp: childProp
                        })
                    ];
                }
                const { Component: ChildComponent, styles: childStyles } = await createComponentTree({
                    createSegmentPath: (child)=>{
                        return createSegmentPath([
                            ...currentSegmentPath,
                            ...child
                        ]);
                    },
                    loaderTree: parallelRoute,
                    parentParams: currentParams,
                    rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove,
                    injectedCSS: injectedCSSWithCurrentLayout,
                    injectedFontPreloadTags: injectedFontPreloadTagsWithCurrentLayout,
                    asNotFound
                });
                const childProp = {
                    current: _react.default.createElement(ChildComponent, null),
                    segment: (0, _createflightrouterstatefromloadertree.addSearchParamsIfPageSegment)(childSegmentParam ? childSegmentParam.treeSegment : childSegment, query)
                };
                const segmentPath = createSegmentPath(currentSegmentPath);
                return [
                    parallelRouteKey,
                    _react.default.createElement(LayoutRouter, {
                        parallelRouterKey: parallelRouteKey,
                        segmentPath: segmentPath,
                        error: ErrorComponent,
                        errorStyles: errorStyles,
                        loading: Loading ? _react.default.createElement(Loading, null) : undefined,
                        loadingStyles: loadingStyles,
                        hasLoading: Boolean(Loading),
                        template: _react.default.createElement(Template, null, _react.default.createElement(RenderFromTemplateContext, null)),
                        templateStyles: templateStyles,
                        notFound: NotFound ? _react.default.createElement(NotFound, null) : undefined,
                        notFoundStyles: notFoundStyles,
                        childProp: childProp,
                        styles: childStyles
                    })
                ];
            }));
            const parallelRouteComponents = parallelRouteMap.reduce((list, [parallelRouteKey, Comp])=>{
                list[parallelRouteKey] = Comp;
                return list;
            }, {});
            if (!Component) {
                return {
                    Component: ()=>_react.default.createElement(_react.default.Fragment, null, parallelRouteComponents.children),
                    styles
                };
            }
            const isClientComponent = (0, _clientreference.isClientReference)(layoutOrPageMod);
            let isLeaf = process.env.NODE_ENV === "production" ? !segment && !rootLayoutIncluded : !parallelRouteMap.length && segment === "__DEFAULT__";
            let notFoundComponent = {};
            if (NotFound && (asNotFound === "force" || asNotFound && isLeaf)) {
                notFoundComponent = {
                    children: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
                        name: "robots",
                        content: "noindex"
                    }), process.env.NODE_ENV === "development" && _react.default.createElement("meta", {
                        name: "next-error",
                        content: "not-found"
                    }), notFoundStyles, _react.default.createElement(NotFound, null))
                };
            }
            const props = {
                ...parallelRouteComponents,
                ...notFoundComponent,
                params: currentParams,
                ...(()=>{
                    if (isClientComponent && isStaticGeneration) {
                        return {};
                    }
                    if (isPage) {
                        return searchParamsProps;
                    }
                })()
            };
            if (!isClientComponent) {
                Component = await Promise.resolve().then(()=>(0, _preloadcomponent.preloadComponent)(Component, props));
            }
            return {
                Component: ()=>{
                    return _react.default.createElement(_react.default.Fragment, null, isPage && isClientComponent && isStaticGeneration ? _react.default.createElement(StaticGenerationSearchParamsBailoutProvider, {
                        propsForComponent: props,
                        Component: Component
                    }) : _react.default.createElement(Component, props), null);
                },
                styles
            };
        };
        const generateFlight = async (options)=>{
            const walkTreeWithFlightRouterState = async ({ createSegmentPath, loaderTreeToFilter, parentParams, isFirst, flightRouterState, parentRendered, rscPayloadHead, injectedCSS, injectedFontPreloadTags, rootLayoutIncluded, asNotFound })=>{
                const [segment, parallelRoutes, components] = loaderTreeToFilter;
                const parallelRoutesKeys = Object.keys(parallelRoutes);
                const { layout } = components;
                const isLayout = typeof layout !== "undefined";
                const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
                const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
                const segmentParam = getDynamicParamFromSegment(segment);
                const currentParams = segmentParam && segmentParam.value !== null ? {
                    ...parentParams,
                    [segmentParam.param]: segmentParam.value
                } : parentParams;
                const actualSegment = (0, _createflightrouterstatefromloadertree.addSearchParamsIfPageSegment)(segmentParam ? segmentParam.treeSegment : segment, query);
                const renderComponentsOnThisLevel = !flightRouterState || !(0, _matchsegments.matchSegment)(actualSegment, flightRouterState[0]) || parallelRoutesKeys.length === 0 || flightRouterState[3] === "refetch";
                if (!parentRendered && renderComponentsOnThisLevel) {
                    const overriddenSegment = flightRouterState && (0, _matchsegments.canSegmentBeOverridden)(actualSegment, flightRouterState[0]) ? flightRouterState[0] : null;
                    return [
                        [
                            overriddenSegment ?? actualSegment,
                            (0, _createflightrouterstatefromloadertree.createFlightRouterStateFromLoaderTree)(loaderTreeToFilter, getDynamicParamFromSegment, query),
                            isPrefetch && !Boolean(components.loading) ? null : _react.default.createElement(async ()=>{
                                const { Component } = await createComponentTree({
                                    createSegmentPath,
                                    loaderTree: loaderTreeToFilter,
                                    parentParams: currentParams,
                                    firstItem: isFirst,
                                    injectedCSS,
                                    injectedFontPreloadTags,
                                    rootLayoutIncluded,
                                    asNotFound
                                });
                                return _react.default.createElement(Component, null);
                            }),
                            isPrefetch && !Boolean(components.loading) ? null : (()=>{
                                const { layoutOrPagePath } = parseLoaderTree(loaderTreeToFilter);
                                const styles = getLayerAssets({
                                    layoutOrPagePath,
                                    injectedCSS: new Set(injectedCSS),
                                    injectedFontPreloadTags: new Set(injectedFontPreloadTags)
                                });
                                return _react.default.createElement(_react.default.Fragment, null, styles, rscPayloadHead);
                            })()
                        ]
                    ];
                }
                const layoutPath = layout == null ? void 0 : layout[1];
                const injectedCSSWithCurrentLayout = new Set(injectedCSS);
                const injectedFontPreloadTagsWithCurrentLayout = new Set(injectedFontPreloadTags);
                if (layoutPath) {
                    (0, _getcssinlinedlinktags.getCssInlinedLinkTags)(clientReferenceManifest, layoutPath, injectedCSSWithCurrentLayout, true);
                    (0, _getpreloadablefonts.getPreloadableFonts)(nextFontManifest, layoutPath, injectedFontPreloadTagsWithCurrentLayout);
                }
                const paths = (await Promise.all(parallelRoutesKeys.map(async (parallelRouteKey)=>{
                    const parallelRoute = parallelRoutes[parallelRouteKey];
                    const currentSegmentPath = isFirst ? [
                        parallelRouteKey
                    ] : [
                        actualSegment,
                        parallelRouteKey
                    ];
                    const path = await walkTreeWithFlightRouterState({
                        createSegmentPath: (child)=>{
                            return createSegmentPath([
                                ...currentSegmentPath,
                                ...child
                            ]);
                        },
                        loaderTreeToFilter: parallelRoute,
                        parentParams: currentParams,
                        flightRouterState: flightRouterState && flightRouterState[1][parallelRouteKey],
                        parentRendered: parentRendered || renderComponentsOnThisLevel,
                        isFirst: false,
                        rscPayloadHead,
                        injectedCSS: injectedCSSWithCurrentLayout,
                        injectedFontPreloadTags: injectedFontPreloadTagsWithCurrentLayout,
                        rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove,
                        asNotFound
                    });
                    return path.map((item)=>{
                        if (item[0] === "__DEFAULT__" && flightRouterState && !!flightRouterState[1][parallelRouteKey][0] && flightRouterState[1][parallelRouteKey][3] !== "refetch") {
                            return null;
                        }
                        return [
                            actualSegment,
                            parallelRouteKey,
                            ...item
                        ];
                    }).filter(Boolean);
                }))).flat();
                return paths;
            };
            const flightData = (options == null ? void 0 : options.skipFlight) ? null : (await walkTreeWithFlightRouterState({
                createSegmentPath: (child)=>child,
                loaderTreeToFilter: loaderTree,
                parentParams: {},
                flightRouterState: providedFlightRouterState,
                isFirst: true,
                rscPayloadHead: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_metadata.MetadataTree, {
                    key: requestId,
                    tree: loaderTree,
                    pathname: pathname,
                    searchParams: providedSearchParams,
                    getDynamicParamFromSegment: getDynamicParamFromSegment,
                    appUsingSizeAdjust: appUsingSizeAdjust
                })),
                injectedCSS: new Set(),
                injectedFontPreloadTags: new Set(),
                rootLayoutIncluded: false,
                asNotFound: pagePath === "/404" || (options == null ? void 0 : options.asNotFound)
            })).map((path)=>path.slice(1));
            const buildIdFlightDataPair = [
                renderOpts.buildId,
                flightData
            ];
            const readable = ComponentMod.renderToReadableStream(options ? [
                options.actionResult,
                buildIdFlightDataPair
            ] : buildIdFlightDataPair, clientReferenceManifest.clientModules, {
                context: serverContexts,
                onError: flightDataRendererErrorHandler
            }).pipeThrough((0, _nodewebstreamshelper.createBufferedTransformStream)());
            return new _flightrenderresult.FlightRenderResult(readable);
        };
        if (isFlight && !staticGenerationStore.isStaticGeneration) {
            return generateFlight();
        }
        const AppRouter = ComponentMod.AppRouter;
        const GlobalError = ComponentMod.GlobalError;
        const serverComponentsInlinedTransformStream = new TransformStream();
        const csp = req.headers["content-security-policy"];
        let nonce;
        if (csp && typeof csp === "string") {
            nonce = (0, _getscriptnoncefromheader.getScriptNonceFromHeader)(csp);
        }
        const serverComponentsRenderOpts = {
            transformStream: serverComponentsInlinedTransformStream,
            clientReferenceManifest,
            serverContexts,
            rscChunks: []
        };
        const validateRootLayout = dev ? {
            validateRootLayout: {
                assetPrefix: renderOpts.assetPrefix,
                getTree: ()=>(0, _createflightrouterstatefromloadertree.createFlightRouterStateFromLoaderTree)(loaderTree, getDynamicParamFromSegment, query)
            }
        } : {};
        async function getNotFound(tree, injectedCSS, requestPathname) {
            const depth = requestPathname.split("/").length - 2;
            const notFound = findMatchedComponent(tree, "not-found", depth);
            const [NotFound, notFoundStyles] = notFound ? await createComponentAndStyles({
                filePath: notFound[1],
                getComponent: notFound[0],
                injectedCSS
            }) : [];
            return [
                NotFound,
                notFoundStyles
            ];
        }
        async function getRootLayout(tree, injectedCSS, injectedFontPreloadTags) {
            const { layout } = tree[2];
            const layoutPath = layout == null ? void 0 : layout[1];
            const styles = getLayerAssets({
                layoutOrPagePath: layoutPath,
                injectedCSS: new Set(injectedCSS),
                injectedFontPreloadTags: new Set(injectedFontPreloadTags)
            });
            const rootLayoutModule = layout == null ? void 0 : layout[0];
            const RootLayout = rootLayoutModule ? (0, _interopdefault.interopDefault)(await rootLayoutModule()) : null;
            return [
                RootLayout,
                styles
            ];
        }
        const ServerComponentsRenderer = (0, _createservercomponentsrenderer.createServerComponentRenderer)(async (props)=>{
            const injectedCSS = new Set();
            const injectedFontPreloadTags = new Set();
            const { Component: ComponentTree, styles } = await createComponentTree({
                createSegmentPath: (child)=>child,
                loaderTree,
                parentParams: {},
                firstItem: true,
                injectedCSS,
                injectedFontPreloadTags,
                rootLayoutIncluded: false,
                asNotFound: props.asNotFound
            });
            const createMetadata = (tree, errorType)=>_react.default.createElement(_metadata.MetadataTree, {
                    key: requestId,
                    tree: tree,
                    errorType: errorType,
                    pathname: pathname,
                    searchParams: providedSearchParams,
                    getDynamicParamFromSegment: getDynamicParamFromSegment,
                    appUsingSizeAdjust: appUsingSizeAdjust
                });
            const initialTree = (0, _createflightrouterstatefromloadertree.createFlightRouterStateFromLoaderTree)(loaderTree, getDynamicParamFromSegment, query);
            return _react.default.createElement(_react.default.Fragment, null, styles, _react.default.createElement(AppRouter, {
                buildId: renderOpts.buildId,
                assetPrefix: assetPrefix,
                initialCanonicalUrl: pathname,
                initialTree: initialTree,
                initialHead: createMetadata(loaderTree, props.asNotFound ? "not-found" : undefined),
                globalErrorComponent: GlobalError
            }, _react.default.createElement(ComponentTree, null)));
        }, ComponentMod, serverComponentsRenderOpts, serverComponentsErrorHandler, nonce);
        const { HeadManagerContext } = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/head-manager-context.js (ecmascript, ssr)");
        const serverInsertedHTMLCallbacks = new Set();
        function InsertedHTML({ children }) {
            const addInsertedHtml = _react.default.useCallback((handler)=>{
                serverInsertedHTMLCallbacks.add(handler);
            }, []);
            return _react.default.createElement(HeadManagerContext.Provider, {
                value: {
                    appDir: true,
                    nonce
                }
            }, _react.default.createElement(_serverinsertedhtml.ServerInsertedHTMLContext.Provider, {
                value: addInsertedHtml
            }, children));
        }
        (_getTracer_getRootSpanAttributes = (0, _tracer.getTracer)().getRootSpanAttributes()) == null ? void 0 : _getTracer_getRootSpanAttributes.set("next.route", pagePath);
        const bodyResult = (0, _tracer.getTracer)().wrap(_constants.AppRenderSpan.getBodyResult, {
            spanName: `render route (app) ${pagePath}`,
            attributes: {
                "next.route": pagePath
            }
        }, async ({ asNotFound })=>{
            const polyfills = buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill)=>{
                return {
                    src: `${assetPrefix}/_next/${polyfill}${getAssetQueryString(false)}`,
                    integrity: subresourceIntegrityManifest == null ? void 0 : subresourceIntegrityManifest[polyfill]
                };
            });
            const content = _react.default.createElement(InsertedHTML, null, _react.default.createElement(ServerComponentsRenderer, {
                asNotFound: asNotFound
            }));
            let polyfillsFlushed = false;
            let flushedErrorMetaTagsUntilIndex = 0;
            const getServerInsertedHTML = (serverCapturedErrors)=>{
                const errorMetaTags = [];
                for(; flushedErrorMetaTagsUntilIndex < serverCapturedErrors.length; flushedErrorMetaTagsUntilIndex++){
                    const error = serverCapturedErrors[flushedErrorMetaTagsUntilIndex];
                    if ((0, _notfound.isNotFoundError)(error)) {
                        errorMetaTags.push(_react.default.createElement("meta", {
                            name: "robots",
                            content: "noindex",
                            key: error.digest
                        }), process.env.NODE_ENV === "development" ? _react.default.createElement("meta", {
                            name: "next-error",
                            content: "not-found",
                            key: "next-error"
                        }) : null);
                    } else if ((0, _redirect.isRedirectError)(error)) {
                        const redirectUrl = (0, _redirect.getURLFromRedirectError)(error);
                        if (redirectUrl) {
                            errorMetaTags.push(_react.default.createElement("meta", {
                                httpEquiv: "refresh",
                                content: `0;url=${redirectUrl}`,
                                key: error.digest
                            }));
                        }
                    }
                }
                const flushed = (0, _rendertostring.renderToString)({
                    ReactDOMServer: __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server.edge.js (ecmascript, ssr)"),
                    element: _react.default.createElement(_react.default.Fragment, null, Array.from(serverInsertedHTMLCallbacks).map((callback, index)=>_react.default.createElement(_react.default.Fragment, {
                            key: "_next_insert" + index
                        }, callback())), polyfillsFlushed ? null : polyfills == null ? void 0 : polyfills.map((polyfill)=>{
                        return _react.default.createElement("script", {
                            key: polyfill.src,
                            src: polyfill.src,
                            integrity: polyfill.integrity,
                            noModule: true,
                            nonce: nonce
                        });
                    }), errorMetaTags)
                });
                polyfillsFlushed = true;
                return flushed;
            };
            try {
                const renderStream = await (0, _nodewebstreamshelper.renderToInitialStream)({
                    ReactDOMServer: __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server.edge.js (ecmascript, ssr)"),
                    element: content,
                    streamOptions: {
                        onError: htmlRendererErrorHandler,
                        nonce,
                        bootstrapScripts: [
                            ...subresourceIntegrityManifest ? buildManifest.rootMainFiles.map((src)=>({
                                    src: `${assetPrefix}/_next/` + src + getAssetQueryString(false),
                                    integrity: subresourceIntegrityManifest[src]
                                })) : buildManifest.rootMainFiles.map((src)=>`${assetPrefix}/_next/` + src + getAssetQueryString(false))
                        ]
                    }
                });
                const result = await (0, _nodewebstreamshelper.continueFromInitialStream)(renderStream, {
                    dataStream: serverComponentsRenderOpts.transformStream.readable,
                    generateStaticHTML: staticGenerationStore.isStaticGeneration || generateStaticHTML,
                    getServerInsertedHTML: ()=>getServerInsertedHTML(allCapturedErrors),
                    serverInsertedHTMLToHead: true,
                    ...validateRootLayout
                });
                return result;
            } catch (err) {
                var _err_message;
                if (err.code === "NEXT_STATIC_GEN_BAILOUT" || ((_err_message = err.message) == null ? void 0 : _err_message.includes("https://nextjs.org/docs/advanced-features/static-html-export"))) {
                    throw err;
                }
                if (err.digest === _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE) {
                    (0, _log.warn)(`Entire page ${pagePath} deopted into client-side rendering. https://nextjs.org/docs/messages/deopted-into-client-rendering`, pagePath);
                }
                if ((0, _notfound.isNotFoundError)(err)) {
                    res.statusCode = 404;
                }
                let hasRedirectError = false;
                if ((0, _redirect.isRedirectError)(err)) {
                    hasRedirectError = true;
                    res.statusCode = 307;
                    if (err.mutableCookies) {
                        const headers = new Headers();
                        if ((0, _requestcookies.appendMutableCookies)(headers, err.mutableCookies)) {
                            res.setHeader("set-cookie", Array.from(headers.values()));
                        }
                    }
                    res.setHeader("Location", (0, _redirect.getURLFromRedirectError)(err));
                }
                const is404 = res.statusCode === 404;
                const injectedCSS = new Set();
                const injectedFontPreloadTags = new Set();
                const [RootLayout, rootStyles] = await getRootLayout(loaderTree, injectedCSS, injectedFontPreloadTags);
                const [NotFound, notFoundStyles] = await getNotFound(loaderTree, injectedCSS, pathname);
                const serverErrorComponentsRenderOpts = {
                    ...serverComponentsRenderOpts,
                    rscChunks: [],
                    transformStream: is404 ? new TransformStream() : (0, _nodewebstreamshelper.cloneTransformStream)(serverComponentsRenderOpts.transformStream)
                };
                const errorType = is404 ? "not-found" : hasRedirectError ? "redirect" : undefined;
                const errorMeta = _react.default.createElement(_react.default.Fragment, null, res.statusCode >= 400 && _react.default.createElement("meta", {
                    name: "robots",
                    content: "noindex"
                }), process.env.NODE_ENV === "development" && _react.default.createElement("meta", {
                    name: "next-error",
                    content: "not-found"
                }));
                const ErrorPage = (0, _createservercomponentsrenderer.createServerComponentRenderer)(async ()=>{
                    const head = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_metadata.MetadataTree, {
                        key: requestId,
                        tree: loaderTree,
                        pathname: pathname,
                        errorType: errorType,
                        searchParams: providedSearchParams,
                        getDynamicParamFromSegment: getDynamicParamFromSegment,
                        appUsingSizeAdjust: appUsingSizeAdjust
                    }), errorMeta);
                    const notFoundLoaderTree = is404 ? [
                        "__DEFAULT__",
                        {},
                        loaderTree[2]
                    ] : loaderTree;
                    const initialTree = (0, _createflightrouterstatefromloadertree.createFlightRouterStateFromLoaderTree)(notFoundLoaderTree, getDynamicParamFromSegment, query);
                    const GlobalNotFound = NotFound || _error.NotFound;
                    const ErrorLayout = RootLayout || ErrorHtml;
                    const notFoundElement = _react.default.createElement(ErrorLayout, {
                        params: {}
                    }, rootStyles, notFoundStyles, _react.default.createElement(GlobalNotFound, null));
                    return _react.default.createElement(AppRouter, {
                        buildId: renderOpts.buildId,
                        assetPrefix: assetPrefix,
                        initialCanonicalUrl: pathname,
                        initialTree: initialTree,
                        initialHead: head,
                        globalErrorComponent: GlobalError
                    }, is404 ? notFoundElement : _react.default.createElement(ErrorHtml, {
                        head: head
                    }));
                }, ComponentMod, serverErrorComponentsRenderOpts, serverComponentsErrorHandler, nonce);
                try {
                    const renderStream = await (0, _nodewebstreamshelper.renderToInitialStream)({
                        ReactDOMServer: __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server.edge.js (ecmascript, ssr)"),
                        element: _react.default.createElement(ErrorPage, null),
                        streamOptions: {
                            nonce,
                            bootstrapScripts: subresourceIntegrityManifest ? buildManifest.rootMainFiles.map((src)=>({
                                    src: `${assetPrefix}/_next/` + src + getAssetQueryString(false),
                                    integrity: subresourceIntegrityManifest[src]
                                })) : buildManifest.rootMainFiles.map((src)=>`${assetPrefix}/_next/` + src + getAssetQueryString(false))
                        }
                    });
                    return await (0, _nodewebstreamshelper.continueFromInitialStream)(renderStream, {
                        dataStream: serverErrorComponentsRenderOpts.transformStream.readable,
                        generateStaticHTML: staticGenerationStore.isStaticGeneration,
                        getServerInsertedHTML: ()=>getServerInsertedHTML([]),
                        serverInsertedHTMLToHead: true,
                        ...validateRootLayout
                    });
                } catch (finalErr) {
                    if (process.env.NODE_ENV !== "production" && (0, _notfound.isNotFoundError)(finalErr)) {
                        const bailOnNotFound = __turbopack_require__("[project]/node_modules/next/dist/client/components/dev-root-not-found-boundary.js (ecmascript, ssr)").bailOnNotFound;
                        bailOnNotFound();
                    }
                    throw finalErr;
                }
            }
        });
        const actionRequestResult = await (0, _actionhandler.handleAction)({
            req,
            res,
            ComponentMod,
            pathname: renderOpts.pathname,
            serverActionsManifest,
            generateFlight,
            staticGenerationStore,
            requestStore,
            serverActionsBodySizeLimit
        });
        if (actionRequestResult === "not-found") {
            return new _renderresult.default(await bodyResult({
                asNotFound: "force"
            }));
        } else if (actionRequestResult) {
            return actionRequestResult;
        }
        const renderResult = new _renderresult.default(await bodyResult({
            asNotFound: pagePath === "/404"
        }));
        if (staticGenerationStore.pendingRevalidates) {
            await Promise.all(staticGenerationStore.pendingRevalidates);
        }
        (0, _patchfetch.addImplicitTags)(staticGenerationStore);
        renderOpts.fetchTags = (_staticGenerationStore_tags = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags.join(",");
        if (staticGenerationStore.isStaticGeneration) {
            const htmlResult = await (0, _nodewebstreamshelper.streamToBufferedResult)(renderResult);
            if (capturedErrors.length > 0) {
                throw capturedErrors[0];
            }
            const filteredFlightData = await (0, _nodewebstreamshelper.streamToBufferedResult)(await generateFlight());
            if (staticGenerationStore.forceStatic === false) {
                staticGenerationStore.revalidate = 0;
            }
            const extraRenderResultMeta = {
                pageData: filteredFlightData,
                revalidate: staticGenerationStore.revalidate ?? defaultRevalidate
            };
            if (extraRenderResultMeta.revalidate === 0) {
                extraRenderResultMeta.staticBailoutInfo = {
                    description: staticGenerationStore.dynamicUsageDescription,
                    stack: staticGenerationStore.dynamicUsageStack
                };
            }
            return new _renderresult.default(htmlResult, {
                ...extraRenderResultMeta
            });
        }
        return renderResult;
    };
    return _requestasyncstoragewrapper.RequestAsyncStorageWrapper.wrap(requestAsyncStorage, {
        req,
        res,
        renderOpts
    }, ()=>_staticgenerationasyncstoragewrapper.StaticGenerationAsyncStorageWrapper.wrap(staticGenerationAsyncStorage, {
            pathname: pagePath,
            renderOpts
        }, ()=>wrappedRender()));
}

}.call(this) }),
}]);

//# sourceMappingURL=_93fa06._.js.map