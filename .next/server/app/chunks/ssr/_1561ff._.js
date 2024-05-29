(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/_1561ff._.js", {

"[project]/node_modules/next/dist/server/api-utils/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getCookieParser: null,
    sendStatusCode: null,
    redirect: null,
    checkIsOnDemandRevalidate: null,
    COOKIE_NAME_PRERENDER_BYPASS: null,
    COOKIE_NAME_PRERENDER_DATA: null,
    RESPONSE_LIMIT_DEFAULT: null,
    SYMBOL_PREVIEW_DATA: null,
    SYMBOL_CLEARED_COOKIES: null,
    clearPreviewData: null,
    ApiError: null,
    sendError: null,
    setLazyProp: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getCookieParser: function() {
        return getCookieParser;
    },
    sendStatusCode: function() {
        return sendStatusCode;
    },
    redirect: function() {
        return redirect;
    },
    checkIsOnDemandRevalidate: function() {
        return checkIsOnDemandRevalidate;
    },
    COOKIE_NAME_PRERENDER_BYPASS: function() {
        return COOKIE_NAME_PRERENDER_BYPASS;
    },
    COOKIE_NAME_PRERENDER_DATA: function() {
        return COOKIE_NAME_PRERENDER_DATA;
    },
    RESPONSE_LIMIT_DEFAULT: function() {
        return RESPONSE_LIMIT_DEFAULT;
    },
    SYMBOL_PREVIEW_DATA: function() {
        return SYMBOL_PREVIEW_DATA;
    },
    SYMBOL_CLEARED_COOKIES: function() {
        return SYMBOL_CLEARED_COOKIES;
    },
    clearPreviewData: function() {
        return clearPreviewData;
    },
    ApiError: function() {
        return ApiError;
    },
    sendError: function() {
        return sendError;
    },
    setLazyProp: function() {
        return setLazyProp;
    }
});
const _headers = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/headers.js (ecmascript, ssr)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, ssr)");
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js (ecmascript, ssr)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join("; ") : cookie);
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = _headers.HeadersAdapter.from(req.headers);
    const previewModeId = headers.get(_constants.PRERENDER_REVALIDATE_HEADER);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(_constants.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js (ecmascript, ssr)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            expires: new Date(0),
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            expires: new Date(0),
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
}

}.call(this) }),
"[project]/node_modules/next/dist/server/api-utils/node.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    tryGetPreviewData: null,
    parseBody: null,
    apiResolver: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    tryGetPreviewData: function() {
        return tryGetPreviewData;
    },
    parseBody: function() {
        return parseBody;
    },
    apiResolver: function() {
        return apiResolver;
    }
});
const _ = __turbopack_require__("[project]/node_modules/next/dist/server/api-utils/index.js (ecmascript, ssr)");
const _bytes = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/bytes/index.js (ecmascript, ssr)"));
const _etag = __turbopack_require__("[project]/node_modules/next/dist/server/lib/etag.js (ecmascript, ssr)");
const _sendpayload = __turbopack_require__("[project]/node_modules/next/dist/server/send-payload/index.js (ecmascript, ssr)");
const _stream = __turbopack_external_require__("stream");
const _contenttype = __turbopack_require__("[project]/node_modules/next/dist/compiled/content-type/index.js (ecmascript, ssr)");
const _iserror = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/lib/is-error.js (ecmascript, ssr)"));
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils.js (ecmascript, ssr)");
const _interopdefault = __turbopack_require__("[project]/node_modules/next/dist/lib/interop-default.js (ecmascript, ssr)");
const _index = __turbopack_require__("[project]/node_modules/next/dist/server/api-utils/index.js (ecmascript, ssr)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, ssr)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, ssr)");
const _cookies = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/cookies.js (ecmascript, ssr)");
const _headers = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/headers.js (ecmascript, ssr)");
const _constants1 = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, ssr)");
const _invokerequest = __turbopack_require__("[project]/node_modules/next/dist/server/lib/server-ipc/invoke-request.js (ecmascript, ssr)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function tryGetPreviewData(req, res, options) {
    var _cookies_get, _cookies_get1;
    if (options && (0, _.checkIsOnDemandRevalidate)(req, options).isOnDemandRevalidate) {
        return false;
    }
    if (_index.SYMBOL_PREVIEW_DATA in req) {
        return req[_index.SYMBOL_PREVIEW_DATA];
    }
    const headers = _headers.HeadersAdapter.from(req.headers);
    const cookies = new _cookies.RequestCookies(headers);
    const previewModeId = (_cookies_get = cookies.get(_index.COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
    const tokenPreviewData = (_cookies_get1 = cookies.get(_index.COOKIE_NAME_PRERENDER_DATA)) == null ? void 0 : _cookies_get1.value;
    if (previewModeId && !tokenPreviewData && previewModeId === options.previewModeId) {
        const data = {};
        Object.defineProperty(req, _index.SYMBOL_PREVIEW_DATA, {
            value: data,
            enumerable: false
        });
        return data;
    }
    if (!previewModeId && !tokenPreviewData) {
        return false;
    }
    if (!previewModeId || !tokenPreviewData) {
        (0, _index.clearPreviewData)(res);
        return false;
    }
    if (previewModeId !== options.previewModeId) {
        (0, _index.clearPreviewData)(res);
        return false;
    }
    let encryptedPreviewData;
    try {
        const jsonwebtoken = __turbopack_require__("[project]/node_modules/next/dist/compiled/jsonwebtoken/index.js (ecmascript, ssr)");
        encryptedPreviewData = jsonwebtoken.verify(tokenPreviewData, options.previewModeSigningKey);
    } catch  {
        (0, _index.clearPreviewData)(res);
        return false;
    }
    const { decryptWithSecret } = __turbopack_require__("[project]/node_modules/next/dist/server/crypto-utils.js (ecmascript, ssr)");
    const decryptedPreviewData = decryptWithSecret(Buffer.from(options.previewModeEncryptionKey), encryptedPreviewData.data);
    try {
        const data = JSON.parse(decryptedPreviewData);
        Object.defineProperty(req, _index.SYMBOL_PREVIEW_DATA, {
            value: data,
            enumerable: false
        });
        return data;
    } catch  {
        return false;
    }
}
function parseJson(str) {
    if (str.length === 0) {
        return {};
    }
    try {
        return JSON.parse(str);
    } catch (e) {
        throw new _index.ApiError(400, "Invalid JSON");
    }
}
async function parseBody(req, limit) {
    let contentType;
    try {
        contentType = (0, _contenttype.parse)(req.headers["content-type"] || "text/plain");
    } catch  {
        contentType = (0, _contenttype.parse)("text/plain");
    }
    const { type, parameters } = contentType;
    const encoding = parameters.charset || "utf-8";
    let buffer;
    try {
        const getRawBody = __turbopack_require__("[project]/node_modules/next/dist/compiled/raw-body/index.js (ecmascript, ssr)");
        buffer = await getRawBody(req, {
            encoding,
            limit
        });
    } catch (e) {
        if ((0, _iserror.default)(e) && e.type === "entity.too.large") {
            throw new _index.ApiError(413, `Body exceeded ${limit} limit`);
        } else {
            throw new _index.ApiError(400, "Invalid body");
        }
    }
    const body = buffer.toString();
    if (type === "application/json" || type === "application/ld+json") {
        return parseJson(body);
    } else if (type === "application/x-www-form-urlencoded") {
        const qs = __turbopack_external_require__("querystring");
        return qs.decode(body);
    } else {
        return body;
    }
}
function getMaxContentLength(responseLimit) {
    if (responseLimit && typeof responseLimit !== "boolean") {
        return _bytes.default.parse(responseLimit);
    }
    return _index.RESPONSE_LIMIT_DEFAULT;
}
function sendData(req, res, body) {
    if (body === null || body === undefined) {
        res.end();
        return;
    }
    if (res.statusCode === 204 || res.statusCode === 304) {
        res.removeHeader("Content-Type");
        res.removeHeader("Content-Length");
        res.removeHeader("Transfer-Encoding");
        if (process.env.NODE_ENV === "development" && body) {
            console.warn(`A body was attempted to be set with a 204 statusCode for ${req.url}, this is invalid and the body was ignored.\n` + `See more info here https://nextjs.org/docs/messages/invalid-api-status-body`);
        }
        res.end();
        return;
    }
    const contentType = res.getHeader("Content-Type");
    if (body instanceof _stream.Stream) {
        if (!contentType) {
            res.setHeader("Content-Type", "application/octet-stream");
        }
        body.pipe(res);
        return;
    }
    const isJSONLike = [
        "object",
        "number",
        "boolean"
    ].includes(typeof body);
    const stringifiedBody = isJSONLike ? JSON.stringify(body) : body;
    const etag = (0, _etag.generateETag)(stringifiedBody);
    if ((0, _sendpayload.sendEtagResponse)(req, res, etag)) {
        return;
    }
    if (Buffer.isBuffer(body)) {
        if (!contentType) {
            res.setHeader("Content-Type", "application/octet-stream");
        }
        res.setHeader("Content-Length", body.length);
        res.end(body);
        return;
    }
    if (isJSONLike) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
    }
    res.setHeader("Content-Length", Buffer.byteLength(stringifiedBody));
    res.end(stringifiedBody);
}
function sendJson(res, jsonBody) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send(JSON.stringify(jsonBody));
}
function isValidData(str) {
    return typeof str === "string" && str.length >= 16;
}
function setDraftMode(res, options) {
    if (!isValidData(options.previewModeId)) {
        throw new Error("invariant: invalid previewModeId");
    }
    const expires = options.enable ? undefined : new Date(0);
    const { serialize } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js (ecmascript, ssr)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(_index.COOKIE_NAME_PRERENDER_BYPASS, options.previewModeId, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            expires
        })
    ]);
    return res;
}
function setPreviewData(res, data, options) {
    if (!isValidData(options.previewModeId)) {
        throw new Error("invariant: invalid previewModeId");
    }
    if (!isValidData(options.previewModeEncryptionKey)) {
        throw new Error("invariant: invalid previewModeEncryptionKey");
    }
    if (!isValidData(options.previewModeSigningKey)) {
        throw new Error("invariant: invalid previewModeSigningKey");
    }
    const jsonwebtoken = __turbopack_require__("[project]/node_modules/next/dist/compiled/jsonwebtoken/index.js (ecmascript, ssr)");
    const { encryptWithSecret } = __turbopack_require__("[project]/node_modules/next/dist/server/crypto-utils.js (ecmascript, ssr)");
    const payload = jsonwebtoken.sign({
        data: encryptWithSecret(Buffer.from(options.previewModeEncryptionKey), JSON.stringify(data))
    }, options.previewModeSigningKey, {
        algorithm: "HS256",
        ...options.maxAge !== undefined ? {
            expiresIn: options.maxAge
        } : undefined
    });
    if (payload.length > 2048) {
        throw new Error(`Preview data is limited to 2KB currently, reduce how much data you are storing as preview data to continue`);
    }
    const { serialize } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js (ecmascript, ssr)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(_index.COOKIE_NAME_PRERENDER_BYPASS, options.previewModeId, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.maxAge !== undefined ? {
                maxAge: options.maxAge
            } : undefined,
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(_index.COOKIE_NAME_PRERENDER_DATA, payload, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.maxAge !== undefined ? {
                maxAge: options.maxAge
            } : undefined,
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    return res;
}
async function revalidate(urlPath, opts, req, context) {
    if (typeof urlPath !== "string" || !urlPath.startsWith("/")) {
        throw new Error(`Invalid urlPath provided to revalidate(), must be a path e.g. /blog/post-1, received ${urlPath}`);
    }
    const revalidateHeaders = {
        [_constants1.PRERENDER_REVALIDATE_HEADER]: context.previewModeId,
        ...opts.unstable_onlyGenerated ? {
            [_constants1.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER]: "1"
        } : {}
    };
    const allowedRevalidateHeaderKeys = [
        ...context.allowedRevalidateHeaderKeys || [],
        ...context.trustHostHeader ? [
            "cookie",
            "x-vercel-protection-bypass"
        ] : []
    ];
    for (const key of Object.keys(req.headers)){
        if (allowedRevalidateHeaderKeys.includes(key)) {
            revalidateHeaders[key] = req.headers[key];
        }
    }
    try {
        if (context.trustHostHeader) {
            const res = await fetch(`https://${req.headers.host}${urlPath}`, {
                method: "HEAD",
                headers: revalidateHeaders
            });
            const cacheHeader = res.headers.get("x-vercel-cache") || res.headers.get("x-nextjs-cache");
            if ((cacheHeader == null ? void 0 : cacheHeader.toUpperCase()) !== "REVALIDATED" && !(res.status === 404 && opts.unstable_onlyGenerated)) {
                throw new Error(`Invalid response ${res.status}`);
            }
        } else if (context.revalidate) {
            const ipcPort = process.env.__NEXT_PRIVATE_ROUTER_IPC_PORT;
            if (ipcPort) {
                const ipcKey = process.env.__NEXT_PRIVATE_ROUTER_IPC_KEY;
                const res = await (0, _invokerequest.invokeRequest)(`http://${context.hostname}:${ipcPort}?key=${ipcKey}&method=revalidate&args=${encodeURIComponent(JSON.stringify([
                    {
                        urlPath,
                        revalidateHeaders,
                        opts
                    }
                ]))}`, {
                    method: "GET",
                    headers: {}
                });
                const chunks = [];
                for await (const chunk of res){
                    if (chunk) {
                        chunks.push(chunk);
                    }
                }
                const body = Buffer.concat(chunks).toString();
                const result = JSON.parse(body);
                if (result.err) {
                    throw new Error(result.err.message);
                }
                return;
            }
            await context.revalidate({
                urlPath,
                revalidateHeaders,
                opts
            });
        } else {
            throw new Error(`Invariant: required internal revalidate method not passed to api-utils`);
        }
    } catch (err) {
        throw new Error(`Failed to revalidate ${urlPath}: ${(0, _iserror.default)(err) ? err.message : err}`);
    }
}
async function apiResolver(req, res, query, resolverModule, apiContext, propagateError, dev, page) {
    const apiReq = req;
    const apiRes = res;
    try {
        var _config_api, _config_api1, _config_api2, _getTracer_getRootSpanAttributes;
        if (!resolverModule) {
            res.statusCode = 404;
            res.end("Not Found");
            return;
        }
        const config = resolverModule.config || {};
        const bodyParser = ((_config_api = config.api) == null ? void 0 : _config_api.bodyParser) !== false;
        const responseLimit = ((_config_api1 = config.api) == null ? void 0 : _config_api1.responseLimit) ?? true;
        const externalResolver = ((_config_api2 = config.api) == null ? void 0 : _config_api2.externalResolver) || false;
        (0, _index.setLazyProp)({
            req: apiReq
        }, "cookies", (0, _index.getCookieParser)(req.headers));
        apiReq.query = query;
        (0, _index.setLazyProp)({
            req: apiReq
        }, "previewData", ()=>tryGetPreviewData(req, res, apiContext));
        (0, _index.setLazyProp)({
            req: apiReq
        }, "preview", ()=>apiReq.previewData !== false ? true : undefined);
        (0, _index.setLazyProp)({
            req: apiReq
        }, "draftMode", ()=>apiReq.preview);
        if (bodyParser && !apiReq.body) {
            apiReq.body = await parseBody(apiReq, config.api && config.api.bodyParser && config.api.bodyParser.sizeLimit ? config.api.bodyParser.sizeLimit : "1mb");
        }
        let contentLength = 0;
        const maxContentLength = getMaxContentLength(responseLimit);
        const writeData = apiRes.write;
        const endResponse = apiRes.end;
        apiRes.write = (...args)=>{
            contentLength += Buffer.byteLength(args[0] || "");
            return writeData.apply(apiRes, args);
        };
        apiRes.end = (...args)=>{
            if (args.length && typeof args[0] !== "function") {
                contentLength += Buffer.byteLength(args[0] || "");
            }
            if (responseLimit && contentLength >= maxContentLength) {
                console.warn(`API response for ${req.url} exceeds ${_bytes.default.format(maxContentLength)}. API Routes are meant to respond quickly. https://nextjs.org/docs/messages/api-routes-response-size-limit`);
            }
            return endResponse.apply(apiRes, args);
        };
        apiRes.status = (statusCode)=>(0, _index.sendStatusCode)(apiRes, statusCode);
        apiRes.send = (data)=>sendData(apiReq, apiRes, data);
        apiRes.json = (data)=>sendJson(apiRes, data);
        apiRes.redirect = (statusOrUrl, url)=>(0, _index.redirect)(apiRes, statusOrUrl, url);
        apiRes.setDraftMode = (options = {
            enable: true
        })=>setDraftMode(apiRes, Object.assign({}, apiContext, options));
        apiRes.setPreviewData = (data, options = {})=>setPreviewData(apiRes, data, Object.assign({}, apiContext, options));
        apiRes.clearPreviewData = (options = {})=>(0, _index.clearPreviewData)(apiRes, options);
        apiRes.revalidate = (urlPath, opts)=>revalidate(urlPath, opts || {}, req, apiContext);
        const resolver = (0, _interopdefault.interopDefault)(resolverModule);
        let wasPiped = false;
        if ("TURBOPACK compile-time truthy", 1) {
            res.once("pipe", ()=>wasPiped = true);
        }
        (_getTracer_getRootSpanAttributes = (0, _tracer.getTracer)().getRootSpanAttributes()) == null ? void 0 : _getTracer_getRootSpanAttributes.set("next.route", page);
        const apiRouteResult = await (0, _tracer.getTracer)().trace(_constants.NodeSpan.runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>resolver(req, res));
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof apiRouteResult !== "undefined") {
                if (apiRouteResult instanceof Response) {
                    throw new Error('API route returned a Response object in the Node.js runtime, this is not supported. Please use `runtime: "edge"` instead: https://nextjs.org/docs/api-routes/edge-api-routes');
                }
                console.warn(`API handler should not return a value, received ${typeof apiRouteResult}.`);
            }
            if (!externalResolver && !(0, _utils.isResSent)(res) && !wasPiped) {
                console.warn(`API resolved without sending a response for ${req.url}, this may result in stalled requests.`);
            }
        }
    } catch (err) {
        if (err instanceof _index.ApiError) {
            (0, _index.sendError)(apiRes, err.statusCode, err.message);
        } else {
            if (dev) {
                if ((0, _iserror.default)(err)) {
                    err.page = page;
                }
                throw err;
            }
            console.error(err);
            if (propagateError) {
                throw err;
            }
            (0, _index.sendError)(apiRes, 500, "Internal Server Error");
        }
    }
}

}.call(this) }),
"[project]/node_modules/void-elements/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

module.exports = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "link": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
};

}.call(this) }),
"[project]/node_modules/next/dist/server/stream-utils/encode-decode.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    encodeText: null,
    decodeText: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    encodeText: function() {
        return encodeText;
    },
    decodeText: function() {
        return decodeText;
    }
});
function encodeText(input) {
    return new TextEncoder().encode(input);
}
function decodeText(input, textDecoder) {
    return textDecoder.decode(input, {
        stream: true
    });
}

}.call(this) }),
"[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    streamToBufferedResult: null,
    cloneTransformStream: null,
    readableStreamTee: null,
    chainStreams: null,
    streamFromArray: null,
    streamToString: null,
    createBufferedTransformStream: null,
    createInsertedHTMLStream: null,
    renderToInitialStream: null,
    createDeferredSuffixStream: null,
    createInlineDataStream: null,
    createSuffixStream: null,
    createRootLayoutValidatorStream: null,
    continueFromInitialStream: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    streamToBufferedResult: function() {
        return streamToBufferedResult;
    },
    cloneTransformStream: function() {
        return cloneTransformStream;
    },
    readableStreamTee: function() {
        return readableStreamTee;
    },
    chainStreams: function() {
        return chainStreams;
    },
    streamFromArray: function() {
        return streamFromArray;
    },
    streamToString: function() {
        return streamToString;
    },
    createBufferedTransformStream: function() {
        return createBufferedTransformStream;
    },
    createInsertedHTMLStream: function() {
        return createInsertedHTMLStream;
    },
    renderToInitialStream: function() {
        return renderToInitialStream;
    },
    createDeferredSuffixStream: function() {
        return createDeferredSuffixStream;
    },
    createInlineDataStream: function() {
        return createInlineDataStream;
    },
    createSuffixStream: function() {
        return createSuffixStream;
    },
    createRootLayoutValidatorStream: function() {
        return createRootLayoutValidatorStream;
    },
    continueFromInitialStream: function() {
        return continueFromInitialStream;
    }
});
const _nonnullable = __turbopack_require__("[project]/node_modules/next/dist/lib/non-nullable.js (ecmascript, ssr)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, ssr)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, ssr)");
const _encodedecode = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/encode-decode.js (ecmascript, ssr)");
const queueTask = process.env.NEXT_RUNTIME === "edge" ? globalThis.setTimeout : setImmediate;
const streamToBufferedResult = async (renderResult)=>{
    const renderChunks = [];
    const textDecoder = new TextDecoder();
    const writable = {
        write (chunk) {
            renderChunks.push((0, _encodedecode.decodeText)(chunk, textDecoder));
        },
        end () {},
        destroy () {}
    };
    await renderResult.pipe(writable);
    return renderChunks.join("");
};
function cloneTransformStream(source) {
    const sourceReader = source.readable.getReader();
    const clone = new TransformStream({
        async start (controller) {
            while(true){
                const { done, value } = await sourceReader.read();
                if (done) {
                    break;
                }
                controller.enqueue(value);
            }
        },
        transform () {}
    });
    return clone;
}
function readableStreamTee(readable) {
    const transformStream = new TransformStream();
    const transformStream2 = new TransformStream();
    const writer = transformStream.writable.getWriter();
    const writer2 = transformStream2.writable.getWriter();
    const reader = readable.getReader();
    function read() {
        reader.read().then(({ done, value })=>{
            if (done) {
                writer.close();
                writer2.close();
                return;
            }
            writer.write(value);
            writer2.write(value);
            read();
        });
    }
    read();
    return [
        transformStream.readable,
        transformStream2.readable
    ];
}
function chainStreams(streams) {
    const { readable, writable } = new TransformStream();
    let promise = Promise.resolve();
    for(let i = 0; i < streams.length; ++i){
        promise = promise.then(()=>streams[i].pipeTo(writable, {
                preventClose: i + 1 < streams.length
            }));
    }
    return readable;
}
function streamFromArray(strings) {
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    strings.forEach((str)=>writer.write((0, _encodedecode.encodeText)(str)));
    writer.close();
    return readable;
}
async function streamToString(stream) {
    const reader = stream.getReader();
    const textDecoder = new TextDecoder();
    let bufferedString = "";
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            return bufferedString;
        }
        bufferedString += (0, _encodedecode.decodeText)(value, textDecoder);
    }
}
function createBufferedTransformStream(transform = (v)=>v) {
    let bufferedString = "";
    let pendingFlush = null;
    const flushBuffer = (controller)=>{
        if (!pendingFlush) {
            pendingFlush = new Promise((resolve)=>{
                setTimeout(async ()=>{
                    const buffered = await transform(bufferedString);
                    controller.enqueue((0, _encodedecode.encodeText)(buffered));
                    bufferedString = "";
                    pendingFlush = null;
                    resolve();
                }, 0);
            });
        }
        return pendingFlush;
    };
    const textDecoder = new TextDecoder();
    return new TransformStream({
        transform (chunk, controller) {
            bufferedString += (0, _encodedecode.decodeText)(chunk, textDecoder);
            flushBuffer(controller);
        },
        flush () {
            if (pendingFlush) {
                return pendingFlush;
            }
        }
    });
}
function createInsertedHTMLStream(getServerInsertedHTML) {
    return new TransformStream({
        async transform (chunk, controller) {
            const insertedHTMLChunk = (0, _encodedecode.encodeText)(await getServerInsertedHTML());
            controller.enqueue(insertedHTMLChunk);
            controller.enqueue(chunk);
        }
    });
}
function renderToInitialStream({ ReactDOMServer, element, streamOptions }) {
    return (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    let freezing = false;
    const textDecoder = new TextDecoder();
    return new TransformStream({
        async transform (chunk, controller) {
            if (freezing) {
                controller.enqueue(chunk);
                return;
            }
            const insertion = await insert();
            if (inserted) {
                controller.enqueue((0, _encodedecode.encodeText)(insertion));
                controller.enqueue(chunk);
                freezing = true;
            } else {
                const content = (0, _encodedecode.decodeText)(chunk, textDecoder);
                const index = content.indexOf("</head>");
                if (index !== -1) {
                    const insertedHeadContent = content.slice(0, index) + insertion + content.slice(index);
                    controller.enqueue((0, _encodedecode.encodeText)(insertedHeadContent));
                    freezing = true;
                    inserted = true;
                }
            }
            if (!inserted) {
                controller.enqueue(chunk);
            } else {
                queueTask(()=>{
                    freezing = false;
                });
            }
        },
        async flush (controller) {
            const insertion = await insert();
            if (insertion) {
                controller.enqueue((0, _encodedecode.encodeText)(insertion));
            }
        }
    });
}
function createDeferredSuffixStream(suffix) {
    let suffixFlushed = false;
    let suffixFlushTask = null;
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            if (!suffixFlushed && suffix) {
                suffixFlushed = true;
                suffixFlushTask = new Promise((res)=>{
                    setTimeout(()=>{
                        controller.enqueue((0, _encodedecode.encodeText)(suffix));
                        res();
                    });
                });
            }
        },
        flush (controller) {
            if (suffixFlushTask) return suffixFlushTask;
            if (!suffixFlushed && suffix) {
                suffixFlushed = true;
                controller.enqueue((0, _encodedecode.encodeText)(suffix));
            }
        }
    });
}
function createInlineDataStream(dataStream) {
    let dataStreamFinished = null;
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            if (!dataStreamFinished) {
                const dataStreamReader = dataStream.getReader();
                dataStreamFinished = new Promise((res)=>setTimeout(async ()=>{
                        try {
                            while(true){
                                const { done, value } = await dataStreamReader.read();
                                if (done) {
                                    return res();
                                }
                                controller.enqueue(value);
                            }
                        } catch (err) {
                            controller.error(err);
                        }
                        res();
                    }, 0));
            }
        },
        flush () {
            if (dataStreamFinished) {
                return dataStreamFinished;
            }
        }
    });
}
function createSuffixStream(suffix) {
    let foundSuffix = false;
    const textDecoder = new TextDecoder();
    return new TransformStream({
        transform (chunk, controller) {
            if (!suffix || foundSuffix) {
                return controller.enqueue(chunk);
            }
            const content = (0, _encodedecode.decodeText)(chunk, textDecoder);
            if (content.endsWith(suffix)) {
                foundSuffix = true;
                const contentWithoutSuffix = content.slice(0, -suffix.length);
                controller.enqueue((0, _encodedecode.encodeText)(contentWithoutSuffix));
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            if (suffix) {
                controller.enqueue((0, _encodedecode.encodeText)(suffix));
            }
        }
    });
}
function createRootLayoutValidatorStream(assetPrefix = "", getTree) {
    let foundHtml = false;
    let foundBody = false;
    const textDecoder = new TextDecoder();
    return new TransformStream({
        async transform (chunk, controller) {
            if (!foundHtml || !foundBody) {
                const content = (0, _encodedecode.decodeText)(chunk, textDecoder);
                if (!foundHtml && content.includes("<html")) {
                    foundHtml = true;
                }
                if (!foundBody && content.includes("<body")) {
                    foundBody = true;
                }
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [
                foundHtml ? null : "html",
                foundBody ? null : "body"
            ].filter(_nonnullable.nonNullable);
            if (missingTags.length > 0) {
                controller.enqueue((0, _encodedecode.encodeText)(`<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({
                    missingTags,
                    assetPrefix: assetPrefix ?? "",
                    tree: getTree()
                })}</script>`));
            }
        }
    });
}
async function continueFromInitialStream(renderStream, { suffix, dataStream, generateStaticHTML, getServerInsertedHTML, serverInsertedHTMLToHead, validateRootLayout }) {
    const closeTag = "</body></html>";
    const suffixUnclosed = suffix ? suffix.split(closeTag)[0] : null;
    if (generateStaticHTML) {
        await renderStream.allReady;
    }
    const transforms = [
        createBufferedTransformStream(),
        getServerInsertedHTML && !serverInsertedHTMLToHead ? createInsertedHTMLStream(getServerInsertedHTML) : null,
        suffixUnclosed != null ? createDeferredSuffixStream(suffixUnclosed) : null,
        dataStream ? createInlineDataStream(dataStream) : null,
        createSuffixStream(closeTag),
        createHeadInsertionTransformStream(async ()=>{
            const serverInsertedHTML = getServerInsertedHTML && serverInsertedHTMLToHead ? await getServerInsertedHTML() : "";
            return serverInsertedHTML;
        }),
        validateRootLayout ? createRootLayoutValidatorStream(validateRootLayout.assetPrefix, validateRootLayout.getTree) : null
    ].filter(_nonnullable.nonNullable);
    return transforms.reduce((readable, transform)=>readable.pipeThrough(transform), renderStream);
}

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
"[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NextVanillaSpanAllowlist: null,
    BaseServerSpan: null,
    LoadComponentsSpan: null,
    NextServerSpan: null,
    NextNodeServerSpan: null,
    StartServerSpan: null,
    RenderSpan: null,
    RouterSpan: null,
    AppRenderSpan: null,
    NodeSpan: null,
    AppRouteRouteHandlersSpan: null,
    ResolveMetadataSpan: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NextVanillaSpanAllowlist: function() {
        return NextVanillaSpanAllowlist;
    },
    BaseServerSpan: function() {
        return BaseServerSpan;
    },
    LoadComponentsSpan: function() {
        return LoadComponentsSpan;
    },
    NextServerSpan: function() {
        return NextServerSpan;
    },
    NextNodeServerSpan: function() {
        return NextNodeServerSpan;
    },
    StartServerSpan: function() {
        return StartServerSpan;
    },
    RenderSpan: function() {
        return RenderSpan;
    },
    RouterSpan: function() {
        return RouterSpan;
    },
    AppRenderSpan: function() {
        return AppRenderSpan;
    },
    NodeSpan: function() {
        return NodeSpan;
    },
    AppRouteRouteHandlersSpan: function() {
        return AppRouteRouteHandlersSpan;
    },
    ResolveMetadataSpan: function() {
        return ResolveMetadataSpan;
    }
});
var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["sendStatic"] = "NextNodeServer.sendStatic";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
const NextVanillaSpanAllowlist = [
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata"
];

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getTracer: null,
    SpanStatusCode: null,
    SpanKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getTracer: function() {
        return getTracer;
    },
    SpanStatusCode: function() {
        return SpanStatusCode;
    },
    SpanKind: function() {
        return SpanKind;
    }
});
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, ssr)");
let api;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    try {
        api = __turbopack_require__("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js (ecmascript, ssr)");
    } catch (err) {
        api = __turbopack_require__("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js (ecmascript, ssr)");
    }
}
const { context, trace, SpanStatusCode, SpanKind } = api;
const isPromise = (p)=>{
    return p !== null && typeof p === "object" && typeof p.then === "function";
};
const closeSpanWithError = (span, error)=>{
    if (error) {
        span.recordException(error);
    }
    span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error == null ? void 0 : error.message
    });
    span.end();
};
const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey("next.rootSpanId");
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
class NextTracerImpl {
    getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
    }
    getContext() {
        return context;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    trace(...args) {
        const [type, fnOrOptions, fnOrEmpty] = args;
        const { fn, options } = typeof fnOrOptions === "function" ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        if (!_constants.NextVanillaSpanAllowlist.includes(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
            return fn();
        }
        const spanName = options.spanName ?? type;
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = api.ROOT_CONTEXT;
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            "next.span_name": spanName,
            "next.span_type": type,
            ...options.attributes
        };
        return api.context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if (isPromise(result)) {
                        result.then(()=>span.end(), (err)=>closeSpanWithError(span, err)).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!_constants.NextVanillaSpanAllowlist.includes(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === "function" && typeof fn === "function") {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === "function") {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/server-ipc/utils.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    forbiddenHeaders: null,
    filterReqHeaders: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    forbiddenHeaders: function() {
        return forbiddenHeaders;
    },
    filterReqHeaders: function() {
        return filterReqHeaders;
    }
});
const forbiddenHeaders = [
    "accept-encoding",
    "keepalive",
    "content-encoding",
    "transfer-encoding",
    "connection"
];
const filterReqHeaders = (headers)=>{
    for (const [key, value] of Object.entries(headers)){
        if (forbiddenHeaders.includes(key) || !(Array.isArray(value) || typeof value === "string")) {
            delete headers[key];
        }
    }
    return headers;
};

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/server-ipc/invoke-request.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invokeRequest", {
    enumerable: true,
    get: function() {
        return invokeRequest;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/next/dist/server/lib/server-ipc/utils.js (ecmascript, ssr)");
const invokeRequest = async (targetUrl, requestInit, readableBody)=>{
    const invokeHeaders = (0, _utils.filterReqHeaders)({
        ...requestInit.headers
    });
    const invokeRes = await new Promise((resolveInvoke, rejectInvoke)=>{
        const http = __turbopack_external_require__("http");
        try {
            const parsedTargetUrl = new URL(targetUrl);
            parsedTargetUrl.hostname = "127.0.0.1";
            const invokeReq = http.request(parsedTargetUrl.toString(), {
                headers: invokeHeaders,
                method: requestInit.method
            }, (res)=>{
                resolveInvoke(res);
            });
            invokeReq.on("error", (err)=>{
                rejectInvoke(err);
            });
            if (requestInit.method !== "GET" && requestInit.method !== "HEAD") {
                if (readableBody) {
                    readableBody.pipe(invokeReq);
                    readableBody.on("close", ()=>{
                        invokeReq.end();
                    });
                }
            } else {
                invokeReq.end();
            }
        } catch (err) {
            rejectInvoke(err);
        }
    });
    return invokeRes;
};

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/incremental-cache/utils.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDerivedTags", {
    enumerable: true,
    get: function() {
        return getDerivedTags;
    }
});
const getDerivedTags = (tags)=>{
    const derivedTags = [
        "/"
    ];
    for (const tag of tags || []){
        if (tag.startsWith("/")) {
            const pathnameParts = tag.split("/");
            for(let i = 1; i < pathnameParts.length + 1; i++){
                const curPathname = pathnameParts.slice(0, i).join("/");
                if (curPathname) {
                    derivedTags.push(curPathname);
                    if (!derivedTags.includes(curPathname)) {
                        derivedTags.push(curPathname);
                    }
                }
            }
        } else if (!derivedTags.includes(tag)) {
            derivedTags.push(tag);
        }
    }
    return derivedTags;
};

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/incremental-cache/fetch-cache.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FetchCache;
    }
});
const _lrucache = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/lru-cache/index.js (ecmascript, ssr)"));
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, ssr)");
const _utils = __turbopack_require__("[project]/node_modules/next/dist/server/lib/incremental-cache/utils.js (ecmascript, ssr)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let memoryCache;
let rateLimitedUntil = 0;
class FetchCache {
    static isAvailable(ctx) {
        return !!(ctx._requestHeaders["x-vercel-sc-host"] || process.env.SUSPENSE_CACHE_URL);
    }
    constructor(ctx){
        this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        this.headers = {};
        this.revalidatedTags = ctx.revalidatedTags;
        this.headers["Content-Type"] = "application/json";
        if (_approuterheaders.FETCH_CACHE_HEADER in ctx._requestHeaders) {
            const newHeaders = JSON.parse(ctx._requestHeaders[_approuterheaders.FETCH_CACHE_HEADER]);
            for(const k in newHeaders){
                this.headers[k] = newHeaders[k];
            }
            delete ctx._requestHeaders[_approuterheaders.FETCH_CACHE_HEADER];
        }
        const scHost = ctx._requestHeaders["x-vercel-sc-host"] || process.env.SUSPENSE_CACHE_URL;
        const scBasePath = ctx._requestHeaders["x-vercel-sc-basepath"] || process.env.SUSPENSE_CACHE_BASEPATH;
        if (process.env.SUSPENSE_CACHE_AUTH_TOKEN) {
            this.headers["Authorization"] = `Bearer ${process.env.SUSPENSE_CACHE_AUTH_TOKEN}`;
        }
        if (scHost) {
            this.cacheEndpoint = `https://${scHost}${scBasePath || ""}`;
            if (this.debug) {
                console.log("using cache endpoint", this.cacheEndpoint);
            }
        } else if (this.debug) {
            console.log("no cache endpoint available");
        }
        if (ctx.maxMemoryCacheSize) {
            if (!memoryCache) {
                if (this.debug) {
                    console.log("using memory store for fetch cache");
                }
                memoryCache = new _lrucache.default({
                    max: ctx.maxMemoryCacheSize,
                    length ({ value }) {
                        var _JSON_stringify;
                        if (!value) {
                            return 25;
                        } else if (value.kind === "REDIRECT") {
                            return JSON.stringify(value.props).length;
                        } else if (value.kind === "IMAGE") {
                            throw new Error("invariant image should not be incremental-cache");
                        } else if (value.kind === "FETCH") {
                            return JSON.stringify(value.data || "").length;
                        } else if (value.kind === "ROUTE") {
                            return value.body.length;
                        }
                        return value.html.length + (((_JSON_stringify = JSON.stringify(value.pageData)) == null ? void 0 : _JSON_stringify.length) || 0);
                    }
                });
            }
        } else {
            if (this.debug) {
                console.log("not using memory store for fetch cache");
            }
        }
    }
    async revalidateTag(tag) {
        if (this.debug) {
            console.log("revalidateTag", tag);
        }
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited ", rateLimitedUntil);
            }
            return;
        }
        try {
            const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/revalidate?tags=${tag}`, {
                method: "POST",
                headers: this.headers,
                next: {
                    internal: true
                }
            });
            if (res.status === 429) {
                const retryAfter = res.headers.get("retry-after") || "60000";
                rateLimitedUntil = Date.now() + parseInt(retryAfter);
            }
            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}.`);
            }
        } catch (err) {
            console.warn(`Failed to revalidate tag ${tag}`, err);
        }
    }
    async get(key, fetchCache, fetchUrl, fetchIdx) {
        var _data_value;
        if (!fetchCache) return null;
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited");
            }
            return null;
        }
        let data = memoryCache == null ? void 0 : memoryCache.get(key);
        if (Date.now() - ((data == null ? void 0 : data.lastModified) || 0) > 2000) {
            data = undefined;
        }
        if (!data && this.cacheEndpoint) {
            try {
                const start = Date.now();
                const fetchParams = {
                    internal: true,
                    fetchType: "cache-get",
                    fetchUrl: fetchUrl,
                    fetchIdx
                };
                const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/${key}`, {
                    method: "GET",
                    headers: {
                        ...this.headers,
                        "X-Vercel-Cache-Item-Name": fetchUrl
                    },
                    next: fetchParams
                });
                if (res.status === 429) {
                    const retryAfter = res.headers.get("retry-after") || "60000";
                    rateLimitedUntil = Date.now() + parseInt(retryAfter);
                }
                if (res.status === 404) {
                    if (this.debug) {
                        console.log(`no fetch cache entry for ${key}, duration: ${Date.now() - start}ms`);
                    }
                    return null;
                }
                if (!res.ok) {
                    console.error(await res.text());
                    throw new Error(`invalid response from cache ${res.status}`);
                }
                const cached = await res.json();
                if (!cached || cached.kind !== "FETCH") {
                    this.debug && console.log({
                        cached
                    });
                    throw new Error(`invalid cache value`);
                }
                const cacheState = res.headers.get("x-vercel-cache-state");
                const age = res.headers.get("age");
                data = {
                    value: cached,
                    lastModified: cacheState !== "fresh" ? Date.now() - _constants.CACHE_ONE_YEAR : Date.now() - parseInt(age || "0", 10) * 1000
                };
                if (this.debug) {
                    console.log(`got fetch cache entry for ${key}, duration: ${Date.now() - start}ms, size: ${Object.keys(cached).length}, cache-state: ${cacheState}`);
                }
                if (data) {
                    memoryCache == null ? void 0 : memoryCache.set(key, data);
                }
            } catch (err) {
                if (this.debug) {
                    console.error(`Failed to get from fetch-cache`, err);
                }
            }
        }
        if ((data == null ? void 0 : (_data_value = data.value) == null ? void 0 : _data_value.kind) === "FETCH") {
            const innerData = data.value.data;
            const derivedTags = (0, _utils.getDerivedTags)(innerData.tags || []);
            if (derivedTags.some((tag)=>{
                return this.revalidatedTags.includes(tag);
            })) {
                data = undefined;
            }
        }
        return data || null;
    }
    async set(key, data, fetchCache, fetchUrl, fetchIdx) {
        if (!fetchCache) return;
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited");
            }
            return;
        }
        memoryCache == null ? void 0 : memoryCache.set(key, {
            value: data,
            lastModified: Date.now()
        });
        if (this.cacheEndpoint) {
            try {
                const start = Date.now();
                if (data !== null && "revalidate" in data) {
                    this.headers["x-vercel-revalidate"] = data.revalidate.toString();
                }
                if (!this.headers["x-vercel-revalidate"] && data !== null && "data" in data) {
                    this.headers["x-vercel-cache-control"] = data.data.headers["cache-control"];
                }
                const body = JSON.stringify(data);
                const headers = {
                    ...this.headers
                };
                if (data !== null && "data" in data && data.data.tags) {
                    headers["x-vercel-cache-tags"] = data.data.tags.join(",");
                }
                if (this.debug) {
                    console.log("set cache", key, {
                        tags: headers["x-vercel-cache-tags"]
                    });
                }
                const fetchParams = {
                    internal: true,
                    fetchType: "cache-set",
                    fetchUrl,
                    fetchIdx
                };
                const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/${key}`, {
                    method: "POST",
                    headers: {
                        ...headers,
                        "X-Vercel-Cache-Item-Name": fetchUrl || ""
                    },
                    body: body,
                    next: fetchParams
                });
                if (res.status === 429) {
                    const retryAfter = res.headers.get("retry-after") || "60000";
                    rateLimitedUntil = Date.now() + parseInt(retryAfter);
                }
                if (!res.ok) {
                    this.debug && console.log(await res.text());
                    throw new Error(`invalid response ${res.status}`);
                }
                if (this.debug) {
                    console.log(`successfully set to fetch-cache for ${key}, duration: ${Date.now() - start}ms, size: ${body.length}`);
                }
            } catch (err) {
                if (this.debug) {
                    console.error(`Failed to update fetch cache`, err);
                }
            }
        }
        return;
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/incremental-cache/file-system-cache.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileSystemCache;
    }
});
const _lrucache = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/lru-cache/index.js (ecmascript, ssr)"));
const _path = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/isomorphic/path.js (ecmascript, ssr)"));
const _utils = __turbopack_require__("[project]/node_modules/next/dist/server/lib/incremental-cache/utils.js (ecmascript, ssr)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let memoryCache;
let tagsManifest;
class FileSystemCache {
    constructor(ctx){
        this.fs = ctx.fs;
        this.flushToDisk = ctx.flushToDisk;
        this.serverDistDir = ctx.serverDistDir;
        this.appDir = !!ctx._appDir;
        this.revalidatedTags = ctx.revalidatedTags;
        if (ctx.maxMemoryCacheSize && !memoryCache) {
            memoryCache = new _lrucache.default({
                max: ctx.maxMemoryCacheSize,
                length ({ value }) {
                    var _JSON_stringify;
                    if (!value) {
                        return 25;
                    } else if (value.kind === "REDIRECT") {
                        return JSON.stringify(value.props).length;
                    } else if (value.kind === "IMAGE") {
                        throw new Error("invariant image should not be incremental-cache");
                    } else if (value.kind === "FETCH") {
                        return JSON.stringify(value.data || "").length;
                    } else if (value.kind === "ROUTE") {
                        return value.body.length;
                    }
                    return value.html.length + (((_JSON_stringify = JSON.stringify(value.pageData)) == null ? void 0 : _JSON_stringify.length) || 0);
                }
            });
        }
        if (this.serverDistDir && this.fs) {
            this.tagsManifestPath = _path.default.join(this.serverDistDir, "..", "cache", "fetch-cache", "tags-manifest.json");
            this.loadTagsManifest();
        }
    }
    loadTagsManifest() {
        if (!this.tagsManifestPath || !this.fs || tagsManifest) return;
        try {
            tagsManifest = JSON.parse(this.fs.readFileSync(this.tagsManifestPath).toString("utf8"));
        } catch (err) {
            tagsManifest = {
                version: 1,
                items: {}
            };
        }
    }
    async setTags(key, tags) {
        this.loadTagsManifest();
        if (!tagsManifest || !this.tagsManifestPath) {
            return;
        }
        for (const tag of tags){
            const data = tagsManifest.items[tag] || {
                keys: []
            };
            if (!data.keys.includes(key)) {
                data.keys.push(key);
            }
            tagsManifest.items[tag] = data;
        }
        try {
            await this.fs.mkdir(_path.default.dirname(this.tagsManifestPath));
            await this.fs.writeFile(this.tagsManifestPath, JSON.stringify(tagsManifest || {}));
        } catch (err) {
            console.warn("Failed to update tags manifest.", err);
        }
    }
    async revalidateTag(tag) {
        this.loadTagsManifest();
        if (!tagsManifest || !this.tagsManifestPath) {
            return;
        }
        const data = tagsManifest.items[tag] || {
            keys: []
        };
        data.revalidatedAt = Date.now();
        tagsManifest.items[tag] = data;
        try {
            await this.fs.mkdir(_path.default.dirname(this.tagsManifestPath));
            await this.fs.writeFile(this.tagsManifestPath, JSON.stringify(tagsManifest || {}));
        } catch (err) {
            console.warn("Failed to update tags manifest.", err);
        }
    }
    async get(key, fetchCache) {
        var _data_value, _data_value1, _data_value2;
        let data = memoryCache == null ? void 0 : memoryCache.get(key);
        if (!data && process.env.NEXT_RUNTIME !== "edge") {
            try {
                const { filePath } = await this.getFsPath({
                    pathname: `${key}.body`,
                    appDir: true
                });
                const fileData = await this.fs.readFile(filePath);
                const { mtime } = await this.fs.stat(filePath);
                const meta = JSON.parse((await this.fs.readFile(filePath.replace(/\.body$/, ".meta"))).toString("utf8"));
                const cacheEntry = {
                    lastModified: mtime.getTime(),
                    value: {
                        kind: "ROUTE",
                        body: fileData,
                        headers: meta.headers,
                        status: meta.status
                    }
                };
                return cacheEntry;
            } catch (_) {}
            try {
                const { filePath, isAppPath } = await this.getFsPath({
                    pathname: fetchCache ? key : `${key}.html`,
                    fetchCache
                });
                const fileData = (await this.fs.readFile(filePath)).toString("utf-8");
                const { mtime } = await this.fs.stat(filePath);
                if (fetchCache) {
                    const lastModified = mtime.getTime();
                    const parsedData = JSON.parse(fileData);
                    data = {
                        lastModified,
                        value: parsedData
                    };
                } else {
                    const pageData = isAppPath ? (await this.fs.readFile((await this.getFsPath({
                        pathname: `${key}.rsc`,
                        appDir: true
                    })).filePath)).toString("utf8") : JSON.parse((await this.fs.readFile((await this.getFsPath({
                        pathname: `${key}.json`,
                        appDir: false
                    })).filePath)).toString("utf8"));
                    let meta = {};
                    if (isAppPath) {
                        try {
                            meta = JSON.parse((await this.fs.readFile(filePath.replace(/\.html$/, ".meta"))).toString("utf-8"));
                        } catch (_) {}
                    }
                    data = {
                        lastModified: mtime.getTime(),
                        value: {
                            kind: "PAGE",
                            html: fileData,
                            pageData,
                            headers: meta.headers,
                            status: meta.status
                        }
                    };
                }
                if (data) {
                    memoryCache == null ? void 0 : memoryCache.set(key, data);
                }
            } catch (_) {}
        }
        let cacheTags;
        if ((data == null ? void 0 : (_data_value = data.value) == null ? void 0 : _data_value.kind) === "PAGE") {
            var _data_value_headers;
            const tagsHeader = (_data_value_headers = data.value.headers) == null ? void 0 : _data_value_headers["x-next-cache-tags"];
            if (typeof tagsHeader === "string") {
                cacheTags = tagsHeader.split(",");
            }
        }
        if ((data == null ? void 0 : (_data_value1 = data.value) == null ? void 0 : _data_value1.kind) === "PAGE" && (cacheTags == null ? void 0 : cacheTags.length)) {
            this.loadTagsManifest();
            const derivedTags = (0, _utils.getDerivedTags)(cacheTags || []);
            const isStale = derivedTags.some((tag)=>{
                var _tagsManifest_items_tag;
                return ((_tagsManifest_items_tag = tagsManifest == null ? void 0 : tagsManifest.items[tag]) == null ? void 0 : _tagsManifest_items_tag.revalidatedAt) && (tagsManifest == null ? void 0 : tagsManifest.items[tag].revalidatedAt) >= ((data == null ? void 0 : data.lastModified) || Date.now());
            });
            if (isStale) {
                data.lastModified = -1;
            }
        }
        if (data && (data == null ? void 0 : (_data_value2 = data.value) == null ? void 0 : _data_value2.kind) === "FETCH") {
            this.loadTagsManifest();
            const innerData = data.value.data;
            const derivedTags = (0, _utils.getDerivedTags)(innerData.tags || []);
            const wasRevalidated = derivedTags.some((tag)=>{
                var _tagsManifest_items_tag;
                if (this.revalidatedTags.includes(tag)) {
                    return true;
                }
                return ((_tagsManifest_items_tag = tagsManifest == null ? void 0 : tagsManifest.items[tag]) == null ? void 0 : _tagsManifest_items_tag.revalidatedAt) && (tagsManifest == null ? void 0 : tagsManifest.items[tag].revalidatedAt) >= ((data == null ? void 0 : data.lastModified) || Date.now());
            });
            if (wasRevalidated) {
                data = undefined;
            }
        }
        return data || null;
    }
    async set(key, data) {
        memoryCache == null ? void 0 : memoryCache.set(key, {
            value: data,
            lastModified: Date.now()
        });
        if (!this.flushToDisk) return;
        if ((data == null ? void 0 : data.kind) === "ROUTE") {
            const { filePath } = await this.getFsPath({
                pathname: `${key}.body`,
                appDir: true
            });
            await this.fs.mkdir(_path.default.dirname(filePath));
            await this.fs.writeFile(filePath, data.body);
            await this.fs.writeFile(filePath.replace(/\.body$/, ".meta"), JSON.stringify({
                headers: data.headers,
                status: data.status
            }));
            return;
        }
        if ((data == null ? void 0 : data.kind) === "PAGE") {
            const isAppPath = typeof data.pageData === "string";
            const { filePath: htmlPath } = await this.getFsPath({
                pathname: `${key}.html`,
                appDir: isAppPath
            });
            await this.fs.mkdir(_path.default.dirname(htmlPath));
            await this.fs.writeFile(htmlPath, data.html);
            await this.fs.writeFile((await this.getFsPath({
                pathname: `${key}.${isAppPath ? "rsc" : "json"}`,
                appDir: isAppPath
            })).filePath, isAppPath ? data.pageData : JSON.stringify(data.pageData));
            if (data.headers || data.status) {
                await this.fs.writeFile(htmlPath.replace(/\.html$/, ".meta"), JSON.stringify({
                    headers: data.headers,
                    status: data.status
                }));
            }
        } else if ((data == null ? void 0 : data.kind) === "FETCH") {
            const { filePath } = await this.getFsPath({
                pathname: key,
                fetchCache: true
            });
            await this.fs.mkdir(_path.default.dirname(filePath));
            await this.fs.writeFile(filePath, JSON.stringify(data));
            await this.setTags(key, data.data.tags || []);
        }
    }
    async getFsPath({ pathname, appDir, fetchCache }) {
        if (fetchCache) {
            return {
                filePath: _path.default.join(this.serverDistDir, "..", "cache", "fetch-cache", pathname),
                isAppPath: false
            };
        }
        let isAppPath = false;
        let filePath = _path.default.join(this.serverDistDir, "pages", pathname);
        if (!this.appDir || appDir === false) return {
            filePath,
            isAppPath
        };
        try {
            await this.fs.readFile(filePath);
            return {
                filePath,
                isAppPath
            };
        } catch (err) {
            return {
                filePath: _path.default.join(this.serverDistDir, "app", pathname),
                isAppPath: true
            };
        }
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/incremental-cache/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    CacheHandler: null,
    IncrementalCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CacheHandler: function() {
        return CacheHandler;
    },
    IncrementalCache: function() {
        return IncrementalCache;
    }
});
const _filesystemcache = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/lib/incremental-cache/file-system-cache.js (ecmascript, ssr)"));
const _path = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/isomorphic/path.js (ecmascript, ssr)"));
const _normalizepagepath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/page-path/normalize-page-path.js (ecmascript, ssr)");
const _fetchcache = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/lib/incremental-cache/fetch-cache.js (ecmascript, ssr)"));
const _base64arraybuffer = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/base64-arraybuffer.js (ecmascript, ssr)");
const _encodedecode = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/encode-decode.js (ecmascript, ssr)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, ssr)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toRoute(pathname) {
    return pathname.replace(/\/$/, "").replace(/\/index$/, "") || "/";
}
class CacheHandler {
    constructor(_ctx){}
    async get(_key, _fetchCache, _fetchUrl, _fetchIdx) {
        return {};
    }
    async set(_key, _data, _fetchCache, _fetchUrl, _fetchIdx) {}
    async revalidateTag(_tag) {}
}
class IncrementalCache {
    constructor({ fs, dev, appDir, flushToDisk, fetchCache, minimalMode, serverDistDir, requestHeaders, requestProtocol, maxMemoryCacheSize, getPrerenderManifest, fetchCacheKeyPrefix, CurCacheHandler, allowedRevalidateHeaderKeys }){
        var _this_prerenderManifest, _this_prerenderManifest_preview, _this_prerenderManifest1, _this_prerenderManifest_preview1;
        const debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        if (!CurCacheHandler) {
            if (fs && serverDistDir) {
                if (debug) {
                    console.log("using filesystem cache handler");
                }
                CurCacheHandler = _filesystemcache.default;
            }
            if (_fetchcache.default.isAvailable({
                _requestHeaders: requestHeaders
            }) && minimalMode && fetchCache) {
                if (debug) {
                    console.log("using fetch cache handler");
                }
                CurCacheHandler = _fetchcache.default;
            }
        } else if (debug) {
            console.log("using custom cache handler", CurCacheHandler.name);
        }
        if (process.env.__NEXT_TEST_MAX_ISR_CACHE) {
            maxMemoryCacheSize = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10);
        }
        this.dev = dev;
        this.minimalMode = minimalMode;
        this.requestHeaders = requestHeaders;
        this.requestProtocol = requestProtocol;
        this.allowedRevalidateHeaderKeys = allowedRevalidateHeaderKeys;
        this.prerenderManifest = getPrerenderManifest();
        this.fetchCacheKeyPrefix = fetchCacheKeyPrefix;
        let revalidatedTags = [];
        if (requestHeaders[_constants.PRERENDER_REVALIDATE_HEADER] === ((_this_prerenderManifest = this.prerenderManifest) == null ? void 0 : (_this_prerenderManifest_preview = _this_prerenderManifest.preview) == null ? void 0 : _this_prerenderManifest_preview.previewModeId)) {
            this.isOnDemandRevalidate = true;
        }
        if (minimalMode && typeof requestHeaders["x-next-revalidated-tags"] === "string" && requestHeaders["x-next-revalidate-tag-token"] === ((_this_prerenderManifest1 = this.prerenderManifest) == null ? void 0 : (_this_prerenderManifest_preview1 = _this_prerenderManifest1.preview) == null ? void 0 : _this_prerenderManifest_preview1.previewModeId)) {
            revalidatedTags = requestHeaders["x-next-revalidated-tags"].split(",");
        }
        if (CurCacheHandler) {
            this.cacheHandler = new CurCacheHandler({
                dev,
                fs,
                flushToDisk,
                serverDistDir,
                revalidatedTags,
                maxMemoryCacheSize,
                _appDir: !!appDir,
                _requestHeaders: requestHeaders,
                fetchCacheKeyPrefix
            });
        }
    }
    calculateRevalidate(pathname, fromTime, dev) {
        if (dev) return new Date().getTime() - 1000;
        const { initialRevalidateSeconds } = this.prerenderManifest.routes[toRoute(pathname)] || {
            initialRevalidateSeconds: 1
        };
        const revalidateAfter = typeof initialRevalidateSeconds === "number" ? initialRevalidateSeconds * 1000 + fromTime : initialRevalidateSeconds;
        return revalidateAfter;
    }
    _getPathname(pathname, fetchCache) {
        return fetchCache ? pathname : (0, _normalizepagepath.normalizePagePath)(pathname);
    }
    async revalidateTag(tag) {
        var _this_cacheHandler;
        return (_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.revalidateTag == null ? void 0 : _this_cacheHandler.revalidateTag(tag);
    }
    async fetchCacheKey(url, init = {}) {
        const MAIN_KEY_PREFIX = "v3";
        let cacheKey;
        const bodyChunks = [];
        if (init.body) {
            if (typeof init.body.getReader === "function") {
                const readableBody = init.body;
                const reader = readableBody.getReader();
                let arrayBuffer = new Uint8Array();
                function processValue({ done, value }) {
                    if (done) {
                        return;
                    }
                    if (value) {
                        try {
                            bodyChunks.push(typeof value === "string" ? value : (0, _base64arraybuffer.encode)(value));
                            const curBuffer = typeof value === "string" ? (0, _encodedecode.encodeText)(value) : new Uint8Array(value);
                            const prevBuffer = arrayBuffer;
                            arrayBuffer = new Uint8Array(prevBuffer.byteLength + curBuffer.byteLength);
                            arrayBuffer.set(prevBuffer);
                            arrayBuffer.set(curBuffer, prevBuffer.byteLength);
                        } catch (err) {
                            console.error(err);
                        }
                    }
                    reader.read().then(processValue);
                }
                await reader.read().then(processValue);
                init._ogBody = arrayBuffer;
            } else if (typeof init.body.keys === "function") {
                const formData = init.body;
                init._ogBody = init.body;
                for (const key of new Set([
                    ...formData.keys()
                ])){
                    const values = formData.getAll(key);
                    bodyChunks.push(`${key}=${(await Promise.all(values.map(async (val)=>{
                        if (typeof val === "string") {
                            return val;
                        } else {
                            return await val.text();
                        }
                    }))).join(",")}`);
                }
            } else if (typeof init.body.arrayBuffer === "function") {
                const blob = init.body;
                const arrayBuffer = await blob.arrayBuffer();
                bodyChunks.push((0, _base64arraybuffer.encode)(await init.body.arrayBuffer()));
                init._ogBody = new Blob([
                    arrayBuffer
                ], {
                    type: blob.type
                });
            } else if (typeof init.body === "string") {
                bodyChunks.push(init.body);
                init._ogBody = init.body;
            }
        }
        const cacheString = JSON.stringify([
            MAIN_KEY_PREFIX,
            this.fetchCacheKeyPrefix || "",
            url,
            init.method,
            typeof (init.headers || {}).keys === "function" ? Object.fromEntries(init.headers) : init.headers,
            init.mode,
            init.redirect,
            init.credentials,
            init.referrer,
            init.referrerPolicy,
            init.integrity,
            init.cache,
            bodyChunks
        ]);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            const crypto1 = __turbopack_external_require__("crypto");
            cacheKey = crypto1.createHash("sha256").update(cacheString).digest("hex");
        }
        return cacheKey;
    }
    async get(pathname, fetchCache, revalidate, fetchUrl, fetchIdx) {
        var _this_cacheHandler, _cacheData_value, _this_prerenderManifest_routes_toRoute;
        if (this.dev && (!fetchCache || this.requestHeaders["cache-control"] === "no-cache")) {
            return null;
        }
        pathname = this._getPathname(pathname, fetchCache);
        let entry = null;
        const cacheData = await ((_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.get(pathname, fetchCache, fetchUrl, fetchIdx));
        if ((cacheData == null ? void 0 : (_cacheData_value = cacheData.value) == null ? void 0 : _cacheData_value.kind) === "FETCH") {
            revalidate = revalidate || cacheData.value.revalidate;
            const age = Math.round((Date.now() - (cacheData.lastModified || 0)) / 1000);
            const isStale = age > revalidate;
            const data = cacheData.value.data;
            return {
                isStale: isStale,
                value: {
                    kind: "FETCH",
                    data,
                    revalidate: revalidate
                },
                revalidateAfter: Date.now() + revalidate * 1000
            };
        }
        const curRevalidate = (_this_prerenderManifest_routes_toRoute = this.prerenderManifest.routes[toRoute(pathname)]) == null ? void 0 : _this_prerenderManifest_routes_toRoute.initialRevalidateSeconds;
        let isStale;
        let revalidateAfter;
        if ((cacheData == null ? void 0 : cacheData.lastModified) === -1) {
            isStale = -1;
            revalidateAfter = -1 * _constants.CACHE_ONE_YEAR;
        } else {
            revalidateAfter = this.calculateRevalidate(pathname, (cacheData == null ? void 0 : cacheData.lastModified) || Date.now(), this.dev && !fetchCache);
            isStale = revalidateAfter !== false && revalidateAfter < Date.now() ? true : undefined;
        }
        if (cacheData) {
            entry = {
                isStale,
                curRevalidate,
                revalidateAfter,
                value: cacheData.value
            };
        }
        if (!cacheData && this.prerenderManifest.notFoundRoutes.includes(pathname)) {
            entry = {
                isStale,
                value: null,
                curRevalidate,
                revalidateAfter
            };
            this.set(pathname, entry.value, curRevalidate, fetchCache, fetchUrl, fetchIdx);
        }
        return entry;
    }
    async set(pathname, data, revalidateSeconds, fetchCache, fetchUrl, fetchIdx) {
        if (this.dev && !fetchCache) return;
        if (fetchCache && JSON.stringify(data).length > 2 * 1024 * 1024) {
            if (this.dev) {
                throw new Error(`fetch for over 2MB of data can not be cached`);
            }
            return;
        }
        pathname = this._getPathname(pathname, fetchCache);
        try {
            var _this_cacheHandler;
            if (typeof revalidateSeconds !== "undefined" && !fetchCache) {
                this.prerenderManifest.routes[pathname] = {
                    dataRoute: _path.default.posix.join("/_next/data", `${(0, _normalizepagepath.normalizePagePath)(pathname)}.json`),
                    srcRoute: null,
                    initialRevalidateSeconds: revalidateSeconds
                };
            }
            await ((_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.set(pathname, data, fetchCache, fetchUrl, fetchIdx));
        } catch (error) {
            console.warn("Failed to update prerender cache for", pathname, error);
        }
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/app-dir-module.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getLayoutOrPageModule: null,
    getErrorOrLayoutModule: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getLayoutOrPageModule: function() {
        return getLayoutOrPageModule;
    },
    getErrorOrLayoutModule: function() {
        return getErrorOrLayoutModule;
    }
});
async function getLayoutOrPageModule(loaderTree) {
    const { layout, page, defaultPage } = loaderTree[2];
    const isLayout = typeof layout !== "undefined";
    const isPage = typeof page !== "undefined";
    const isDefaultPage = typeof defaultPage !== "undefined" && loaderTree[0] === "__DEFAULT__";
    let value = undefined;
    let modType = undefined;
    if (isLayout) {
        value = await layout[0]();
        modType = "layout";
    } else if (isPage) {
        value = await page[0]();
        modType = "page";
    } else if (isDefaultPage) {
        value = await defaultPage[0]();
        modType = "page";
    }
    return [
        value,
        modType
    ];
}
async function getErrorOrLayoutModule(loaderTree, errorType) {
    const { [errorType]: error, layout } = loaderTree[2];
    if (typeof error !== "undefined") {
        return await error[0]();
    } else if (typeof layout !== "undefined") {
        return await layout[0]();
    }
    return undefined;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/patch-fetch.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addImplicitTags: null,
    patchFetch: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addImplicitTags: function() {
        return addImplicitTags;
    },
    patchFetch: function() {
        return patchFetch;
    }
});
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, ssr)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, ssr)");
const _constants1 = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, ssr)");
const isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";
function addImplicitTags(staticGenerationStore) {
    const newTags = [];
    const pathname = staticGenerationStore == null ? void 0 : staticGenerationStore.originalPathname;
    if (!pathname) {
        return newTags;
    }
    if (!Array.isArray(staticGenerationStore.tags)) {
        staticGenerationStore.tags = [];
    }
    if (!staticGenerationStore.tags.includes(pathname)) {
        staticGenerationStore.tags.push(pathname);
    }
    newTags.push(pathname);
    return newTags;
}
function trackFetchMetric(staticGenerationStore, ctx) {
    if (!staticGenerationStore) return;
    if (!staticGenerationStore.fetchMetrics) {
        staticGenerationStore.fetchMetrics = [];
    }
    const dedupeFields = [
        "url",
        "status",
        "method"
    ];
    if (staticGenerationStore.fetchMetrics.some((metric)=>{
        return dedupeFields.every((field)=>metric[field] === ctx[field]);
    })) {
        return;
    }
    staticGenerationStore.fetchMetrics.push({
        url: ctx.url,
        cacheStatus: ctx.cacheStatus,
        status: ctx.status,
        method: ctx.method,
        start: ctx.start,
        end: Date.now(),
        idx: staticGenerationStore.nextFetchId || 0
    });
}
function patchFetch({ serverHooks, staticGenerationAsyncStorage }) {
    if (!globalThis._nextOriginalFetch) {
        globalThis._nextOriginalFetch = globalThis.fetch;
    }
    if (globalThis.fetch.__nextPatched) return;
    const { DynamicServerError } = serverHooks;
    const originFetch = globalThis._nextOriginalFetch;
    globalThis.fetch = async (input, init)=>{
        var _init_method;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = "";
            url.password = "";
        } catch  {
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? "";
        const fetchStart = Date.now();
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || "GET";
        return await (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.fetch, {
            kind: _tracer.SpanKind.CLIENT,
            spanName: [
                "fetch",
                method,
                fetchUrl
            ].filter(Boolean).join(" "),
            attributes: {
                "http.url": fetchUrl,
                "http.method": method,
                "net.peer.name": url == null ? void 0 : url.hostname,
                "net.peer.port": (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _ref, _getRequestMeta;
            const staticGenerationStore = staticGenerationAsyncStorage.getStore();
            const isRequestInput = input && typeof input === "object" && typeof input.method === "string";
            const getRequestMeta = (field)=>{
                let value = isRequestInput ? input[field] : null;
                return value || (init == null ? void 0 : init[field]);
            };
            if (!staticGenerationStore || ((_ref = init == null ? void 0 : init.next) == null ? void 0 : _ref.internal) || staticGenerationStore.isDraftMode) {
                return originFetch(input, init);
            }
            let revalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== "undefined" ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            let curRevalidate = getNextField("revalidate");
            const tags = getNextField("tags") || [];
            if (Array.isArray(tags)) {
                if (!staticGenerationStore.tags) {
                    staticGenerationStore.tags = [];
                }
                for (const tag of tags){
                    if (!staticGenerationStore.tags.includes(tag)) {
                        staticGenerationStore.tags.push(tag);
                    }
                }
            }
            const implicitTags = addImplicitTags(staticGenerationStore);
            for (const tag of implicitTags || []){
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            }
            const isOnlyCache = staticGenerationStore.fetchCache === "only-cache";
            const isForceCache = staticGenerationStore.fetchCache === "force-cache";
            const isDefaultCache = staticGenerationStore.fetchCache === "default-cache";
            const isDefaultNoStore = staticGenerationStore.fetchCache === "default-no-store";
            const isOnlyNoStore = staticGenerationStore.fetchCache === "only-no-store";
            const isForceNoStore = staticGenerationStore.fetchCache === "force-no-store";
            let _cache = getRequestMeta("cache");
            if (typeof _cache === "string" && typeof curRevalidate !== "undefined") {
                console.warn(`Warning: fetch for ${fetchUrl} on ${staticGenerationStore.pathname} specified "cache: ${_cache}" and "revalidate: ${curRevalidate}", only one should be specified.`);
                _cache = undefined;
            }
            if (_cache === "force-cache") {
                curRevalidate = false;
            }
            if ([
                "no-cache",
                "no-store"
            ].includes(_cache || "")) {
                curRevalidate = 0;
            }
            if (typeof curRevalidate === "number" || curRevalidate === false) {
                revalidate = curRevalidate;
            }
            let cacheReason = "";
            const _headers = getRequestMeta("headers");
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === "function" ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get("authorization") || initHeaders.get("cookie");
            const isUnCacheableMethod = ![
                "get",
                "head"
            ].includes(((_getRequestMeta = getRequestMeta("method")) == null ? void 0 : _getRequestMeta.toLowerCase()) || "get");
            const autoNoCache = (hasUnCacheableHeader || isUnCacheableMethod) && staticGenerationStore.revalidate === 0;
            if (isForceNoStore) {
                revalidate = 0;
                cacheReason = "fetchCache = force-no-store";
            }
            if (isOnlyNoStore) {
                if (_cache === "force-cache" || revalidate === 0) {
                    throw new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`);
                }
                revalidate = 0;
                cacheReason = "fetchCache = only-no-store";
            }
            if (isOnlyCache && _cache === "no-store") {
                throw new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`);
            }
            if (isForceCache && (typeof curRevalidate === "undefined" || curRevalidate === 0)) {
                cacheReason = "fetchCache = force-cache";
                revalidate = false;
            }
            if (typeof revalidate === "undefined") {
                if (isDefaultCache) {
                    revalidate = false;
                    cacheReason = "fetchCache = default-cache";
                } else if (autoNoCache) {
                    revalidate = 0;
                    cacheReason = "auto no cache";
                } else if (isDefaultNoStore) {
                    revalidate = 0;
                    cacheReason = "fetchCache = default-no-store";
                } else {
                    cacheReason = "auto cache";
                    revalidate = typeof staticGenerationStore.revalidate === "boolean" || typeof staticGenerationStore.revalidate === "undefined" ? false : staticGenerationStore.revalidate;
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${revalidate}`;
            }
            if (!autoNoCache && (typeof staticGenerationStore.revalidate === "undefined" || typeof revalidate === "number" && (staticGenerationStore.revalidate === false || typeof staticGenerationStore.revalidate === "number" && revalidate < staticGenerationStore.revalidate))) {
                staticGenerationStore.revalidate = revalidate;
            }
            const isCacheableRevalidate = typeof revalidate === "number" && revalidate > 0 || revalidate === false;
            let cacheKey;
            if (staticGenerationStore.incrementalCache && isCacheableRevalidate) {
                try {
                    cacheKey = await staticGenerationStore.incrementalCache.fetchCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const requestInputFields = [
                "cache",
                "credentials",
                "headers",
                "integrity",
                "keepalive",
                "method",
                "mode",
                "redirect",
                "referrer",
                "referrerPolicy",
                "signal",
                "window",
                "duplex"
            ];
            if (isRequestInput) {
                const reqInput = input;
                const reqOptions = {
                    body: reqInput._ogBody || reqInput.body
                };
                for (const field of requestInputFields){
                    reqOptions[field] = reqInput[field];
                }
                input = new Request(reqInput.url, reqOptions);
            } else if (init) {
                const initialInit = init;
                init = {
                    body: init._ogBody || init.body
                };
                for (const field of requestInputFields){
                    init[field] = initialInit[field];
                }
            }
            const fetchIdx = staticGenerationStore.nextFetchId ?? 1;
            staticGenerationStore.nextFetchId = fetchIdx + 1;
            const normalizedRevalidate = typeof revalidate !== "number" ? _constants1.CACHE_ONE_YEAR : revalidate;
            const doOriginalFetch = async (isStale)=>{
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: "origin",
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale) {
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: "miss",
                            status: res.status,
                            method: clonedInit.method || "GET"
                        });
                    }
                    if (res.status === 200 && staticGenerationStore.incrementalCache && cacheKey && isCacheableRevalidate) {
                        const bodyBuffer = Buffer.from(await res.arrayBuffer());
                        try {
                            await staticGenerationStore.incrementalCache.set(cacheKey, {
                                kind: "FETCH",
                                data: {
                                    headers: Object.fromEntries(res.headers.entries()),
                                    body: bodyBuffer.toString("base64"),
                                    status: res.status,
                                    tags,
                                    url: res.url
                                },
                                revalidate: normalizedRevalidate
                            }, revalidate, true, fetchUrl, fetchIdx);
                        } catch (err) {
                            console.warn(`Failed to set fetch cache`, input, err);
                        }
                        const response = new Response(bodyBuffer, {
                            headers: new Headers(res.headers),
                            status: res.status
                        });
                        Object.defineProperty(response, "url", {
                            value: res.url
                        });
                        return response;
                    }
                    return res;
                });
            };
            if (cacheKey && (staticGenerationStore == null ? void 0 : staticGenerationStore.incrementalCache)) {
                const entry = staticGenerationStore.isOnDemandRevalidate ? null : await staticGenerationStore.incrementalCache.get(cacheKey, true, revalidate, fetchUrl, fetchIdx);
                if ((entry == null ? void 0 : entry.value) && entry.value.kind === "FETCH") {
                    const currentTags = entry.value.data.tags;
                    if (!(staticGenerationStore.isRevalidate && entry.isStale)) {
                        if (entry.isStale) {
                            if (!staticGenerationStore.pendingRevalidates) {
                                staticGenerationStore.pendingRevalidates = [];
                            }
                            staticGenerationStore.pendingRevalidates.push(doOriginalFetch(true).catch(console.error));
                        } else if (tags && !tags.every((tag)=>{
                            return currentTags == null ? void 0 : currentTags.includes(tag);
                        })) {
                            var _staticGenerationStore_incrementalCache;
                            if (!entry.value.data.tags) {
                                entry.value.data.tags = [];
                            }
                            for (const tag of tags){
                                if (!entry.value.data.tags.includes(tag)) {
                                    entry.value.data.tags.push(tag);
                                }
                            }
                            (_staticGenerationStore_incrementalCache = staticGenerationStore.incrementalCache) == null ? void 0 : _staticGenerationStore_incrementalCache.set(cacheKey, entry.value, revalidate, true, fetchUrl, fetchIdx);
                        }
                        const resData = entry.value.data;
                        let decodedBody;
                        if ("TURBOPACK compile-time falsy", 0) {
                            "TURBOPACK unreachable";
                        } else {
                            decodedBody = Buffer.from(resData.body, "base64").subarray();
                        }
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: "hit",
                            status: resData.status || 200,
                            method: (init == null ? void 0 : init.method) || "GET"
                        });
                        const response = new Response(decodedBody, {
                            headers: resData.headers,
                            status: resData.status
                        });
                        Object.defineProperty(response, "url", {
                            value: entry.value.data.url
                        });
                        return response;
                    }
                }
            }
            if (staticGenerationStore.isStaticGeneration) {
                if (init && typeof init === "object") {
                    const cache = init.cache;
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                    if (cache === "no-store") {
                        staticGenerationStore.revalidate = 0;
                        const dynamicUsageReason = `no-store fetch ${input}${staticGenerationStore.pathname ? ` ${staticGenerationStore.pathname}` : ""}`;
                        const err = new DynamicServerError(dynamicUsageReason);
                        staticGenerationStore.dynamicUsageErr = err;
                        staticGenerationStore.dynamicUsageStack = err.stack;
                        staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                    }
                    const hasNextConfig = "next" in init;
                    const next = init.next || {};
                    if (typeof next.revalidate === "number" && (typeof staticGenerationStore.revalidate === "undefined" || typeof staticGenerationStore.revalidate === "number" && next.revalidate < staticGenerationStore.revalidate)) {
                        const forceDynamic = staticGenerationStore.forceDynamic;
                        if (!forceDynamic || next.revalidate !== 0) {
                            staticGenerationStore.revalidate = next.revalidate;
                        }
                        if (!forceDynamic && next.revalidate === 0) {
                            const dynamicUsageReason = `revalidate: ${next.revalidate} fetch ${input}${staticGenerationStore.pathname ? ` ${staticGenerationStore.pathname}` : ""}`;
                            const err = new DynamicServerError(dynamicUsageReason);
                            staticGenerationStore.dynamicUsageErr = err;
                            staticGenerationStore.dynamicUsageStack = err.stack;
                            staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                        }
                    }
                    if (hasNextConfig) delete init.next;
                }
            }
            return doOriginalFetch();
        });
    };
    globalThis.fetch.__nextGetStaticStore = ()=>{
        return staticGenerationAsyncStorage;
    };
    globalThis.fetch.__nextPatched = true;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/etag.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fnv1a52: null,
    generateETag: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fnv1a52: function() {
        return fnv1a52;
    },
    generateETag: function() {
        return generateETag;
    }
});
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
};

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/node-fs-methods.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "nodeFs", {
    enumerable: true,
    get: function() {
        return nodeFs;
    }
});
const _fs = _interop_require_default(__turbopack_external_require__("fs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const nodeFs = {
    readFile: (f)=>_fs.default.promises.readFile(f),
    readFileSync: (f)=>_fs.default.readFileSync(f),
    writeFile: (f, d)=>_fs.default.promises.writeFile(f, d),
    mkdir: (dir)=>_fs.default.promises.mkdir(dir, {
            recursive: true
        }),
    stat: (f)=>_fs.default.promises.stat(f)
};

}.call(this) }),
"[project]/node_modules/next/dist/server/node-polyfill-fetch.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
if (typeof fetch === "undefined" && typeof globalThis.fetch === "undefined") {
    function getFetchImpl() {
        return __turbopack_require__("[project]/node_modules/next/dist/compiled/undici/index.js (ecmascript, ssr)");
    }
    function getRequestImpl() {
        const OriginRequest = getFetchImpl().Request;
        return class Request extends OriginRequest {
            constructor(input, init){
                super(input, init);
                this.next = init == null ? void 0 : init.next;
            }
        };
    }
    globalThis.fetch = (...args)=>{
        var _global___NEXT_HTTP_AGENT_OPTIONS;
        const fetchImpl = getFetchImpl();
        if (!((_global___NEXT_HTTP_AGENT_OPTIONS = global.__NEXT_HTTP_AGENT_OPTIONS) == null ? void 0 : _global___NEXT_HTTP_AGENT_OPTIONS.keepAlive) && !global.__NEXT_UNDICI_AGENT_SET) {
            global.__NEXT_UNDICI_AGENT_SET = true;
            fetchImpl.setGlobalDispatcher(new fetchImpl.Agent({
                pipelining: 0
            }));
            console.warn('Warning - Configuring `keepAlive: false` is deprecated. Use `{ headers: { connection: "close" } }` instead.');
        }
        return fetchImpl.fetch(...args);
    };
    Object.defineProperties(global, {
        Headers: {
            get () {
                return getFetchImpl().Headers;
            }
        },
        Request: {
            get () {
                return getRequestImpl();
            }
        },
        Response: {
            get () {
                return getFetchImpl().Response;
            }
        }
    });
}

}.call(this) }),
"[project]/node_modules/next/dist/server/node-polyfill-web-streams.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
if (!global.ReadableStream) {
    if (__turbopack_external_require__("stream/web").ReadableStream) {
        global.ReadableStream = __turbopack_external_require__("stream/web").ReadableStream;
    } else {
        const { ReadableStream } = __turbopack_require__("[project]/node_modules/next/dist/compiled/@edge-runtime/ponyfill/index.js (ecmascript, ssr)");
        global.ReadableStream = ReadableStream;
    }
}
if (!global.TransformStream) {
    if (__turbopack_external_require__("stream/web").TransformStream) {
        global.TransformStream = __turbopack_external_require__("stream/web").TransformStream;
    } else {
        const { TransformStream } = __turbopack_require__("[project]/node_modules/next/dist/compiled/@edge-runtime/ponyfill/index.js (ecmascript, ssr)");
        global.TransformStream = TransformStream;
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/node-polyfill-headers.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
if (!("getAll" in Headers.prototype)) {
    Headers.prototype.getAll = function(name) {
        name = name.toLowerCase();
        if (name !== "set-cookie") throw new Error("Headers.getAll is only supported for Set-Cookie header");
        const headers = [
            ...this.entries()
        ].filter(([key])=>key === name);
        return headers.map(([, value])=>value);
    };
}

}.call(this) }),
"[project]/node_modules/next/dist/server/node-polyfill-crypto.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
if (!global.crypto) {
    let webcrypto;
    Object.defineProperty(global, "crypto", {
        enumerable: false,
        configurable: true,
        get () {
            if (!webcrypto) {
                webcrypto = __turbopack_external_require__("node:crypto").webcrypto;
            }
            return webcrypto;
        },
        set (value) {
            webcrypto = value;
        }
    });
}

}.call(this) }),
"[project]/node_modules/next/dist/server/internal-utils.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    stripInternalQueries: null,
    stripInternalSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    stripInternalQueries: function() {
        return stripInternalQueries;
    },
    stripInternalSearchParams: function() {
        return stripInternalSearchParams;
    }
});
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    _approuterheaders.NEXT_RSC_UNION_QUERY
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/htmlescape.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ESCAPE_REGEX: null,
    htmlEscapeJsonString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ESCAPE_REGEX: function() {
        return ESCAPE_REGEX;
    },
    htmlEscapeJsonString: function() {
        return htmlEscapeJsonString;
    }
});
const ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
}

}.call(this) }),
"[project]/node_modules/next/dist/server/render-result.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderResult;
    }
});
class RenderResult {
    static fromStatic(value) {
        return new RenderResult(value);
    }
    constructor(response, { contentType, ...metadata } = {}){
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata;
    }
    get isNull() {
        return this.response === null;
    }
    get isDynamic() {
        return typeof this.response !== "string";
    }
    toUnchunkedString() {
        if (typeof this.response !== "string") {
            throw new Error("Invariant: dynamic responses cannot be unchunked. This is a bug in Next.js");
        }
        return this.response;
    }
    async pipe(res) {
        if (this.response === null) {
            throw new Error("Invariant: response is null. This is a bug in Next.js");
        }
        if (typeof this.response === "string") {
            throw new Error("Invariant: static responses cannot be piped. This is a bug in Next.js");
        }
        const flush = "flush" in res && typeof res.flush === "function" ? res.flush.bind(res) : ()=>{};
        const reader = this.response.getReader();
        let shouldFatalError = false;
        try {
            let result = await reader.read();
            if (!result.done) {
                shouldFatalError = true;
            }
            while(!result.done){
                res.write(result.value);
                flush();
                result = await reader.read();
            }
            res.end();
        } catch (err) {
            if (shouldFatalError) {
                res.destroy(err);
            }
            throw err;
        }
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/crypto-utils.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    encryptWithSecret: null,
    decryptWithSecret: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    encryptWithSecret: function() {
        return encryptWithSecret;
    },
    decryptWithSecret: function() {
        return decryptWithSecret;
    }
});
const _crypto = _interop_require_default(__turbopack_external_require__("crypto"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CIPHER_ALGORITHM = `aes-256-gcm`, CIPHER_KEY_LENGTH = 32, CIPHER_IV_LENGTH = 16, CIPHER_TAG_LENGTH = 16, CIPHER_SALT_LENGTH = 64;
const PBKDF2_ITERATIONS = 100000;
function encryptWithSecret(secret, data) {
    const iv = _crypto.default.randomBytes(CIPHER_IV_LENGTH);
    const salt = _crypto.default.randomBytes(CIPHER_SALT_LENGTH);
    const key = _crypto.default.pbkdf2Sync(secret, salt, PBKDF2_ITERATIONS, CIPHER_KEY_LENGTH, `sha512`);
    const cipher = _crypto.default.createCipheriv(CIPHER_ALGORITHM, key, iv);
    const encrypted = Buffer.concat([
        cipher.update(data, `utf8`),
        cipher.final()
    ]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([
        salt,
        iv,
        tag,
        encrypted
    ]).toString(`hex`);
}
function decryptWithSecret(secret, encryptedData) {
    const buffer = Buffer.from(encryptedData, `hex`);
    const salt = buffer.slice(0, CIPHER_SALT_LENGTH);
    const iv = buffer.slice(CIPHER_SALT_LENGTH, CIPHER_SALT_LENGTH + CIPHER_IV_LENGTH);
    const tag = buffer.slice(CIPHER_SALT_LENGTH + CIPHER_IV_LENGTH, CIPHER_SALT_LENGTH + CIPHER_IV_LENGTH + CIPHER_TAG_LENGTH);
    const encrypted = buffer.slice(CIPHER_SALT_LENGTH + CIPHER_IV_LENGTH + CIPHER_TAG_LENGTH);
    const key = _crypto.default.pbkdf2Sync(secret, salt, PBKDF2_ITERATIONS, CIPHER_KEY_LENGTH, `sha512`);
    const decipher = _crypto.default.createDecipheriv(CIPHER_ALGORITHM, key, iv);
    decipher.setAuthTag(tag);
    return decipher.update(encrypted) + decipher.final(`utf8`);
}

}.call(this) }),
"[project]/components/products/apiProducts/index.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

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
"[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PhoneNumberStep": ()=>PhoneNumberStep
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, ssr)");
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
    const [phoneNumber, setPhoneNumber] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [otp, setOtp] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [userData, setUserData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](user);
    const onChangePhoneNumber = (nextPhoneNumber)=>{
        setPhoneNumber(nextPhoneNumber);
    };
    const [saveUserPhoneNumber, { loading: saveUserPhoneNumberLoading, error: saveUserPhoneNumberError }] = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useMutationSaveUserPhoneNumber"]();
    const [sendUserPhoneNumber, { data: sendUserPhoneNumberData, loading: sendUserPhoneNumberLoading, error: sendUserPhoneNumberError }] = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useMutationSendUserPhoneNumber"]();
    const isButtonContinueDisabled = otp.length < DEFAULT_OTP_LENGTH;
    const [showOtp, setShowOtp] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [showProduct, setShowProduct] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [showPhone, setShowPhone] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [otherContent, setOtherContent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
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
"[project]/components/products/PhoneNumberStep/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PhoneNumberStep": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PhoneNumberStep$2f$PhoneNumberStep$2e$tsx__$28$ecmascript$29$__["PhoneNumberStep"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PhoneNumberStep$2f$PhoneNumberStep$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/PhoneNumberStep/PhoneNumberStep.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/products/Stepper/TextMobileStepper.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "TextMobileStepper": ()=>TextMobileStepper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PhoneNumberStep$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/PhoneNumberStep/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, ssr)");
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
    const [step, setStep] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](defaultStep);
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
    const [activeStep, setActiveStep] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useState(0);
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
"[project]/components/products/Stepper/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "TextMobileStepper": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Stepper$2f$TextMobileStepper$2e$tsx__$28$ecmascript$29$__["TextMobileStepper"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Stepper$2f$TextMobileStepper$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/Stepper/TextMobileStepper.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/products/Card/index.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>MediaCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Card$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Card/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardActions$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardActions/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardContent/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardMedia$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardMedia/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Modal/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$pushPayment$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/pushPayment.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Stepper$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/Stepper/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
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
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
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
    const [email, setEmail] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
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
"[project]/components/products/Cards/index.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$apiProducts$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/apiProducts/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$Card$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/products/Card/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const Cards = ({ user, onFinish })=>{
    const [productsData, setProductsData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const { i18n, t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const lang = i18n.language;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
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
"[project]/node_modules/react-is/cjs/react-is.development.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true;
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}

}.call(this) }),
"[project]/node_modules/react-is/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/react-is/cjs/react-is.development.js (ecmascript, ssr)");
}

}.call(this) }),
"[project]/node_modules/object-assign/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};

}.call(this) }),
"[project]/node_modules/prop-types/lib/has.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);

}.call(this) }),
"[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

}.call(this) }),
"[project]/node_modules/prop-types/checkPropTypes.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_require__("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js (ecmascript, ssr)");
    var loggedTypeFailures = {};
    var has = __turbopack_require__("[project]/node_modules/prop-types/lib/has.js (ecmascript, ssr)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            throw new Error(message);
        } catch (x) {}
    };
}
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                try {
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
checkPropTypes.resetWarningCache = function() {
    if (process.env.NODE_ENV !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;

}.call(this) }),
"[project]/node_modules/prop-types/factoryWithTypeCheckers.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
var ReactIs = __turbopack_require__("[project]/node_modules/react-is/index.js (ecmascript, ssr)");
var assign = __turbopack_require__("[project]/node_modules/object-assign/index.js (ecmascript, ssr)");
var ReactPropTypesSecret = __turbopack_require__("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js (ecmascript, ssr)");
var has = __turbopack_require__("[project]/node_modules/prop-types/lib/has.js (ecmascript, ssr)");
var checkPropTypes = __turbopack_require__("[project]/node_modules/prop-types/checkPropTypes.js (ecmascript, ssr)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    var ANONYMOUS = '<<anonymous>>';
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    function is(x, y) {
        if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
        } else {
            return x !== x && y !== y;
        }
    }
    function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        if (propType === 'symbol') {
            return true;
        }
        if (!propValue) {
            return false;
        }
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

}.call(this) }),
"[project]/node_modules/prop-types/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_require__("[project]/node_modules/react-is/index.js (ecmascript, ssr)");
    var throwOnDirectAccess = true;
    module.exports = __turbopack_require__("[project]/node_modules/prop-types/factoryWithTypeCheckers.js (ecmascript, ssr)")(ReactIs.isElement, throwOnDirectAccess);
} else {
    "TURBOPACK unreachable";
}

}.call(this) }),
"[project]/node_modules/stylis/src/Utility.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "abs": ()=>abs,
    "append": ()=>append,
    "assign": ()=>assign,
    "charat": ()=>charat,
    "combine": ()=>combine,
    "from": ()=>from,
    "hash": ()=>hash,
    "indexof": ()=>indexof,
    "match": ()=>match,
    "replace": ()=>replace,
    "sizeof": ()=>sizeof,
    "strlen": ()=>strlen,
    "substr": ()=>substr,
    "trim": ()=>trim
});
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search) {
    return value.indexOf(search);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}

})()),
"[project]/node_modules/stylis/src/Enum.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "CHARSET": ()=>CHARSET,
    "COMMENT": ()=>COMMENT,
    "COUNTER_STYLE": ()=>COUNTER_STYLE,
    "DECLARATION": ()=>DECLARATION,
    "DOCUMENT": ()=>DOCUMENT,
    "FONT_FACE": ()=>FONT_FACE,
    "FONT_FEATURE_VALUES": ()=>FONT_FEATURE_VALUES,
    "IMPORT": ()=>IMPORT,
    "KEYFRAMES": ()=>KEYFRAMES,
    "LAYER": ()=>LAYER,
    "MEDIA": ()=>MEDIA,
    "MOZ": ()=>MOZ,
    "MS": ()=>MS,
    "NAMESPACE": ()=>NAMESPACE,
    "PAGE": ()=>PAGE,
    "RULESET": ()=>RULESET,
    "SUPPORTS": ()=>SUPPORTS,
    "VIEWPORT": ()=>VIEWPORT,
    "WEBKIT": ()=>WEBKIT
});
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';

})()),
"[project]/node_modules/stylis/src/Prefixer.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "prefix": ()=>prefix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function prefix(value, length, children) {
    switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["hash"](value, length)){
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + value;
        case 4789:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MOZ"] + value + value;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + value + value;
        case 5936:
            switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, length + 11)){
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
        case 6828:
        case 4268:
        case 2903:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + value + value;
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'flex-item-' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /flex-|-self/g, '') + (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"](value, /flex-|baseline/) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'grid-row-' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /flex-|-self/g, '') : '') + value;
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /align-content|flex-|-self/g, '') + value;
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, 'shrink', 'negative') + value;
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, 'basis', 'preferred-size') + value;
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + 'box-' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, 'grow', 'positive') + value;
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        case 6187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        case 5495:
        case 3959:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        case 4968:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + value + value;
        case 4200:
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"](value, /flex-|baseline/)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'grid-column-align' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"](value, length) + value;
            break;
        case 2592:
        case 3360:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, 'template-', '') + value;
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length = index, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"](element.props, /grid-\w+-end/);
            })) {
                return ~__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["indexof"](value + (children = children[length].value), 'span') ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, '-start', '') + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'grid-row-span:' + (~__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["indexof"](children, 'span') ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"](children, /\d+/) : +__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"](children, /\d+/) - +__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"](value, /\d+/)) + ';';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, '-start', '') + value;
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"](element.props, /grid-\w+-start/);
            }) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, '-end', '-span'), 'span ', '') + value;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](value) - 1 - length > 6) switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, length + 1)){
                case 109:
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, length + 4) !== 45) break;
                case 102:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MOZ"] + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                case 115:
                    return ~__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["indexof"](value, 'stretch') ? prefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, 'stretch', 'fill-available'), length, children) + value : value;
            }
            break;
        case 5152:
        case 5920:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + a + ':' + b + f + (c ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
            });
        case 4949:
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, length + 6) === 121) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"]) + value;
            break;
        case 6444:
            switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, 14) === 45 ? 18 : 11)){
                case 120:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
                case 100:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"]) + value;
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, 'scroll-', 'scroll-snap-') + value;
    }
    return value;
}

})()),
"[project]/node_modules/stylis/src/Serializer.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "serialize": ()=>serialize,
    "stringify": ()=>stringify
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function serialize(children, callback) {
    var output = '';
    var length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["sizeof"](children);
    for(var i = 0; i < length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["RULESET"]:
            element.value = element.props.join(',');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}

})()),
"[project]/node_modules/stylis/src/Tokenizer.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "alloc": ()=>alloc,
    "caret": ()=>caret,
    "char": ()=>char,
    "character": ()=>character,
    "characters": ()=>characters,
    "column": ()=>column,
    "commenter": ()=>commenter,
    "copy": ()=>copy,
    "dealloc": ()=>dealloc,
    "delimit": ()=>delimit,
    "delimiter": ()=>delimiter,
    "escaping": ()=>escaping,
    "identifier": ()=>identifier,
    "length": ()=>length,
    "line": ()=>line,
    "next": ()=>next,
    "node": ()=>node,
    "peek": ()=>peek,
    "position": ()=>position,
    "prev": ()=>prev,
    "slice": ()=>slice,
    "token": ()=>token,
    "tokenize": ()=>tokenize,
    "tokenizer": ()=>tokenizer,
    "whitespace": ()=>whitespace
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: ''
    };
}
function copy(root, props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["assign"](node('', null, null, '', null, null, 0), root, {
        length: -root.length
    }, props);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"](characters, begin, end);
}
function token(type) {
    switch(type){
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["trim"](slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["append"](identifier(position - 1), children);
            break;
        case 2:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["append"](delimit(character), children);
            break;
        default:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["append"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["from"](character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        case type:
            return position;
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        case 40:
            if (type === 41) delimiter(type);
            break;
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["from"](type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}

})()),
"[project]/node_modules/stylis/src/Middleware.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "middleware": ()=>middleware,
    "namespace": ()=>namespace,
    "prefixer": ()=>prefixer,
    "rulesheet": ()=>rulesheet
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Tokenizer.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Serializer.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Prefixer.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function middleware(collection) {
    var length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["sizeof"](collection);
    return function(element, index, children, callback) {
        var output = '';
        for(var i = 0; i < length; i++)output += collection[i](element, index, children, callback) || '';
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["DECLARATION"]:
                element.return = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$28$ecmascript$29$__["prefix"](element.value, element.length, children);
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["KEYFRAMES"]:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$28$ecmascript$29$__["serialize"]([
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["copy"](element, {
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["combine"](element.props, function(value) {
                    switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"](value, /(::plac\w+|:read-\w+)/)){
                        case ':read-only':
                        case ':read-write':
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$28$ecmascript$29$__["serialize"]([
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["copy"](element, {
                                    props: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                })
                            ], callback);
                        case '::placeholder':
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$28$ecmascript$29$__["serialize"]([
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["copy"](element, {
                                    props: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                    ]
                                }),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["copy"](element, {
                                    props: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                }),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["copy"](element, {
                                    props: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"] + 'input-$1')
                                    ]
                                })
                            ], callback);
                    }
                    return '';
                });
        }
    }
}
function namespace(element) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["RULESET"]:
            element.props = element.props.map(function(value) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["combine"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["tokenize"](value), function(value, index, children) {
                    switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](value, 0)){
                        case 12:
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"](value, 1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](value));
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return value;
                        case 58:
                            if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"](children[index], index = 1, -1);
                        case 32:
                            return index === 1 ? '' : value;
                        default:
                            switch(index){
                                case 0:
                                    element = value;
                                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["sizeof"](children) > 1 ? '' : value;
                                case index = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["sizeof"](children) - 1:
                                case 2:
                                    return index === 2 ? value + element + element : value + element;
                                default:
                                    return value;
                            }
                    }
                });
            });
    }
}

})()),
"[project]/node_modules/stylis/src/Parser.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "comment": ()=>comment,
    "compile": ()=>compile,
    "declaration": ()=>declaration,
    "parse": ()=>parse,
    "ruleset": ()=>ruleset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Tokenizer.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function compile(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["dealloc"](parse('', null, null, null, [
        ''
    ], value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["alloc"](value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["next"]()){
        case 40:
            if (previous != 108 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](characters, length - 1) == 58) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["indexof"](characters += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["delimit"](character), '&', '&\f'), '&\f') != -1) ampersand = -1;
                break;
            }
        case 34:
        case 39:
        case 91:
            characters += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["delimit"](character);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            characters += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["whitespace"](previous);
            break;
        case 92:
            characters += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["escaping"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["caret"]() - 1, 7);
            continue;
        case 47:
            switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["peek"]()){
                case 42:
                case 47:
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["append"](comment(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["commenter"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["next"](), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["caret"]()), root, parent), declarations);
                    break;
                default:
                    characters += '/';
            }
            break;
        case 123 * variable:
            points[index++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](characters) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                case 0:
                case 125:
                    scanning = 0;
                case 59 + offset:
                    if (ampersand == -1) characters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](characters, /\f/g, '');
                    if (property > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](characters) - length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["append"](property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](characters, ' ', '') + ';', rule, parent, length - 2), declarations);
                    break;
                case 59:
                    characters += ';';
                default:
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["append"](reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else switch(atrule === 99 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"](characters, 3) === 110 ? 100 : atrule){
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["append"](ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                            break;
                        default:
                            parse(characters, reference, reference, reference, [
                                ''
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        case 58:
            length = 1 + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["prev"]() == 125) continue;
            }
            switch(characters += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["from"](character), character * variable){
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                case 44:
                    points[index++] = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](characters) - 1) * ampersand, ampersand = 1;
                    break;
                case 64:
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["peek"]() === 45) characters += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["delimit"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["next"]());
                    atrule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["peek"](), offset = length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](type = characters += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["identifier"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["caret"]())), character++;
                    break;
                case 45:
                    if (previous === 45 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"](characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["sizeof"](rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"](value, post + 1, post = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["abs"](j = points[i])), z = value; x < size; ++x)if (z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["trim"](j > 0 ? rule[x] + ' ' + y : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"](y, /&\f/g, rule[x]))) props[k++] = z;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["node"](value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["RULESET"] : type, props, children, length);
}
function comment(value, root, parent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["node"](value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["COMMENT"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["from"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["char"]()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"](value, 2, -2), 0);
}
function declaration(value, root, parent, length) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["node"](value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["DECLARATION"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"](value, 0, length), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"](value, length + 1, -1), length);
}

})()),
"[project]/node_modules/stylis/index.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "CHARSET": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["CHARSET"],
    "COMMENT": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["COMMENT"],
    "COUNTER_STYLE": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["COUNTER_STYLE"],
    "DECLARATION": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["DECLARATION"],
    "DOCUMENT": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["DOCUMENT"],
    "FONT_FACE": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["FONT_FACE"],
    "FONT_FEATURE_VALUES": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["FONT_FEATURE_VALUES"],
    "IMPORT": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["IMPORT"],
    "KEYFRAMES": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["KEYFRAMES"],
    "LAYER": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["LAYER"],
    "MEDIA": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MEDIA"],
    "MOZ": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MOZ"],
    "MS": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["MS"],
    "NAMESPACE": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["NAMESPACE"],
    "PAGE": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["PAGE"],
    "RULESET": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["RULESET"],
    "SUPPORTS": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["SUPPORTS"],
    "VIEWPORT": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["VIEWPORT"],
    "WEBKIT": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__["WEBKIT"],
    "abs": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["abs"],
    "alloc": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["alloc"],
    "append": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["append"],
    "assign": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["assign"],
    "caret": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["caret"],
    "char": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["char"],
    "character": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["character"],
    "characters": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["characters"],
    "charat": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["charat"],
    "column": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["column"],
    "combine": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["combine"],
    "comment": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$28$ecmascript$29$__["comment"],
    "commenter": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["commenter"],
    "compile": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$28$ecmascript$29$__["compile"],
    "copy": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["copy"],
    "dealloc": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["dealloc"],
    "declaration": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$28$ecmascript$29$__["declaration"],
    "delimit": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["delimit"],
    "delimiter": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["delimiter"],
    "escaping": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["escaping"],
    "from": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["from"],
    "hash": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["hash"],
    "identifier": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["identifier"],
    "indexof": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["indexof"],
    "length": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["length"],
    "line": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["line"],
    "match": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["match"],
    "middleware": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$28$ecmascript$29$__["middleware"],
    "namespace": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$28$ecmascript$29$__["namespace"],
    "next": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["next"],
    "node": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["node"],
    "parse": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$28$ecmascript$29$__["parse"],
    "peek": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["peek"],
    "position": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["position"],
    "prefix": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$28$ecmascript$29$__["prefix"],
    "prefixer": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$28$ecmascript$29$__["prefixer"],
    "prev": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["prev"],
    "replace": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["replace"],
    "ruleset": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$28$ecmascript$29$__["ruleset"],
    "rulesheet": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$28$ecmascript$29$__["rulesheet"],
    "serialize": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$28$ecmascript$29$__["serialize"],
    "sizeof": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["sizeof"],
    "slice": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["slice"],
    "stringify": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$28$ecmascript$29$__["stringify"],
    "strlen": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["strlen"],
    "substr": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["substr"],
    "token": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["token"],
    "tokenize": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["tokenize"],
    "tokenizer": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["tokenizer"],
    "trim": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__["trim"],
    "whitespace": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__["whitespace"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Parser.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Prefixer.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Tokenizer.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Serializer.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Middleware.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;

})()),
"[project]/node_modules/dayjs/dayjs.min.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? ((r)=>r !== undefined && __turbopack_export_value__(r))(e(__turbopack_require__, exports, module)) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
}(this, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t) {
        return t instanceof _ || !(!t || !t[p]);
    }, w = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, O = function(t, e) {
        if (S(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t, e) {
        return O(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M(t) {
            this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (b.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return b;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = O(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return O(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < O(t);
        }, m.$g = function(t, e, n) {
            return b.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
                var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[b.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = b.p(f), y = function(t) {
                var e = O(l);
                return b.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return b.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return b.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return b.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return b.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return b.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return b.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return b.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return b.s(e.$s, 2, "0");
                        case "SSS":
                            return b.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return b.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : b.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = w(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return b.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), k = _.prototype;
    return O.prototype = k, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        k[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), O.extend = function(t, e) {
        return t.$i || (t(e, _, O), t.$i = !0), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t) {
        return O(1e3 * t);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

}.call(this) }),
}]);

//# sourceMappingURL=_1561ff._.js.map