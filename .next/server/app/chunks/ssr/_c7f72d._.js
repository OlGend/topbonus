(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/_c7f72d._.js", {

"[project]/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    matchSegment: null,
    canSegmentBeOverridden: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchSegment: function() {
        return matchSegment;
    },
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    }
});
const _getsegmentparam = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-segment-param.js (ecmascript, ssr)");
const matchSegment = (existingSegment, segment)=>{
    if (typeof existingSegment === "string") {
        if (typeof segment === "string") {
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === "string") {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseComponentStack", {
    enumerable: true,
    get: function() {
        return parseComponentStack;
    }
});
function parseComponentStack(componentStack) {
    const componentStackFrames = [];
    for (const line of componentStack.trim().split("\n")){
        const match = /at ([^ ]+)( \((.*)\))?/.exec(line);
        if (match == null ? void 0 : match[1]) {
            const component = match[1];
            const webpackFile = match[3];
            if (webpackFile == null ? void 0 : webpackFile.includes("next/dist")) {
                break;
            }
            const modulePath = webpackFile == null ? void 0 : webpackFile.replace(/^(webpack-internal:\/\/\/|file:\/\/)(\(.*\)\/)?/, "");
            var _modulePath_split;
            const [file, lineNumber, column] = (_modulePath_split = modulePath == null ? void 0 : modulePath.split(":")) != null ? _modulePath_split : [];
            componentStackFrames.push({
                component,
                file,
                lineNumber: lineNumber ? Number(lineNumber) : undefined,
                column: column ? Number(column) : undefined
            });
        }
    }
    return componentStackFrames;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-protocol.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSocketProtocol", {
    enumerable: true,
    get: function() {
        return getSocketProtocol;
    }
});
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-websocket.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    useWebsocket: null,
    useSendMessage: null,
    useWebsocketPing: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useWebsocket: function() {
        return useWebsocket;
    },
    useSendMessage: function() {
        return useSendMessage;
    },
    useWebsocketPing: function() {
        return useWebsocketPing;
    }
});
const _react = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _getsocketprotocol = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-protocol.js (ecmascript, ssr)");
function useWebsocket(assetPrefix, shouldSubscribe) {
    if (shouldSubscribe === void 0) shouldSubscribe = true;
    const webSocketRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (webSocketRef.current || !shouldSubscribe) {
            return;
        }
        const { hostname, port } = window.location;
        const protocol = (0, _getsocketprotocol.getSocketProtocol)(assetPrefix);
        const normalizedAssetPrefix = assetPrefix.replace(/^\/+/, "");
        let url = protocol + "://" + hostname + ":" + port + (normalizedAssetPrefix ? "/" + normalizedAssetPrefix : "");
        if (normalizedAssetPrefix.startsWith("http")) {
            url = protocol + "://" + normalizedAssetPrefix.split("://")[1];
        }
        webSocketRef.current = new window.WebSocket("" + url + "/_next/webpack-hmr");
    }, [
        assetPrefix,
        shouldSubscribe
    ]);
    return webSocketRef;
}
function useSendMessage(webSocketRef) {
    const sendMessage = (0, _react.useCallback)((data)=>{
        const socket = webSocketRef.current;
        if (!socket || socket.readyState !== socket.OPEN) {
            return;
        }
        return socket.send(data);
    }, [
        webSocketRef
    ]);
    return sendMessage;
}
function useWebsocketPing(websocketRef) {
    const sendMessage = useSendMessage(websocketRef);
    const { tree } = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    (0, _react.useEffect)(()=>{
        const interval = setInterval(()=>{
            sendMessage(JSON.stringify({
                event: "ping",
                tree,
                appDirRoute: true
            }));
        }, 2500);
        return ()=>clearInterval(interval);
    }, [
        tree,
        sendMessage
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/async-local-storage.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAsyncLocalStorage", {
    enumerable: true,
    get: function() {
        return createAsyncLocalStorage;
    }
});
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/request-async-storage.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "requestAsyncStorage", {
    enumerable: true,
    get: function() {
        return requestAsyncStorage;
    }
});
const _asynclocalstorage = __turbopack_require__("[project]/node_modules/next/dist/client/components/async-local-storage.js (ecmascript, ssr)");
const requestAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectType: null,
    getRedirectError: null,
    redirect: null,
    isRedirectError: null,
    getURLFromRedirectError: null,
    getRedirectTypeFromError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    redirect: function() {
        return redirect;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    }
});
const _requestasyncstorage = __turbopack_require__("[project]/node_modules/next/dist/client/components/request-async-storage.js (ecmascript, ssr)");
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url;
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type);
}
function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination] = error.digest.split(";", 3);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string";
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 3)[1];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    notFound: null,
    isNotFoundError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    notFound: function() {
        return notFound;
    },
    isNotFoundError: function() {
        return isNotFoundError;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/is-next-router-error.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _notfound = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
function isNextRouterError(error) {
    return error && error.digest && ((0, _redirect.isRedirectError)(error) || (0, _notfound.isNotFoundError)(error));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hydrationErrorWarning: null,
    hydrationErrorComponentStack: null,
    patchConsoleError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hydrationErrorWarning: function() {
        return hydrationErrorWarning;
    },
    hydrationErrorComponentStack: function() {
        return hydrationErrorComponentStack;
    },
    patchConsoleError: function() {
        return patchConsoleError;
    }
});
let hydrationErrorWarning;
let hydrationErrorComponentStack;
const knownHydrationWarnings = new Set([
    'Warning: Text content did not match. Server: "%s" Client: "%s"%s',
    "Warning: Expected server HTML to contain a matching <%s> in <%s>.%s",
    'Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s',
    "Warning: Did not expect server HTML to contain a <%s> in <%s>.%s",
    'Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s'
]);
function patchConsoleError() {
    const prev = console.error;
    console.error = function(msg, serverContent, clientContent, componentStack) {
        if (knownHydrationWarnings.has(msg)) {
            hydrationErrorWarning = msg.replace("%s", serverContent).replace("%s", clientContent).replace("%s", "");
            hydrationErrorComponentStack = componentStack;
        }
        prev.apply(console, arguments);
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RuntimeErrorHandler: null,
    useErrorHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RuntimeErrorHandler: function() {
        return RuntimeErrorHandler;
    },
    useErrorHandler: function() {
        return useErrorHandler;
    }
});
const _react = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
const _hydrationerrorinfo = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js (ecmascript, ssr)");
const _isnextroutererror = __turbopack_require__("[project]/node_modules/next/dist/client/components/is-next-router-error.js (ecmascript, ssr)");
const RuntimeErrorHandler = {
    hadRuntimeError: false
};
function isHydrationError(error) {
    return error.message.match(/(hydration|content does not match|did not match)/i) != null;
}
if (typeof window !== "undefined") {
    try {
        Error.stackTraceLimit = 50;
    } catch (e) {}
}
const errorQueue = [];
const rejectionQueue = [];
const errorHandlers = [];
const rejectionHandlers = [];
if (typeof window !== "undefined") {
    window.addEventListener("error", (ev)=>{
        if ((0, _isnextroutererror.isNextRouterError)(ev.error)) {
            ev.preventDefault();
            return;
        }
        const error = ev == null ? void 0 : ev.error;
        if (!error || !(error instanceof Error) || typeof error.stack !== "string") {
            return;
        }
        if (isHydrationError(error) && !error.message.includes("https://nextjs.org/docs/messages/react-hydration-error")) {
            if (_hydrationerrorinfo.hydrationErrorWarning) {
                error.message += "\n\n" + _hydrationerrorinfo.hydrationErrorWarning;
            }
            if (_hydrationerrorinfo.hydrationErrorComponentStack) {
                error._componentStack = _hydrationerrorinfo.hydrationErrorComponentStack;
            }
            error.message += "\n\nSee more info here: https://nextjs.org/docs/messages/react-hydration-error";
        }
        const e = error;
        errorQueue.push(e);
        for (const handler of errorHandlers){
            handler(e);
        }
    });
    window.addEventListener("unhandledrejection", (ev)=>{
        const reason = ev == null ? void 0 : ev.reason;
        if (!reason || !(reason instanceof Error) || typeof reason.stack !== "string") {
            return;
        }
        const e = reason;
        rejectionQueue.push(e);
        for (const handler of rejectionHandlers){
            handler(e);
        }
    });
}
function useErrorHandler(handleOnUnhandledError, handleOnUnhandledRejection) {
    (0, _react.useEffect)(()=>{
        errorQueue.forEach(handleOnUnhandledError);
        rejectionQueue.forEach(handleOnUnhandledRejection);
        errorHandlers.push(handleOnUnhandledError);
        rejectionHandlers.push(handleOnUnhandledRejection);
        return ()=>{
            errorHandlers.splice(errorHandlers.indexOf(handleOnUnhandledError), 1);
            rejectionHandlers.splice(rejectionHandlers.indexOf(handleOnUnhandledRejection), 1);
        };
    }, [
        handleOnUnhandledError,
        handleOnUnhandledRejection
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "noop", {
    enumerable: true,
    get: function() {
        return noop;
    }
});
function noop(strings) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    const lastIndex = strings.length - 1;
    return strings.slice(0, lastIndex).reduce((p, s, i)=>p + s + keys[i], "") + strings[lastIndex];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CssReset", {
    enumerable: true,
    get: function() {
        return CssReset;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          all: initial;\n\n          /* the direction property is not reset by 'all' */\n          direction: ltr;\n        }\n\n        /*!\n         * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n         * Copyright 2011-2019 The Bootstrap Authors\n         * Copyright 2011-2019 Twitter, Inc.\n         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n         * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n         */\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        :host {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        article,\n        aside,\n        figcaption,\n        figure,\n        footer,\n        header,\n        hgroup,\n        main,\n        nav,\n        section {\n          display: block;\n        }\n\n        :host {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n            'Noto Color Emoji';\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          color: #212529;\n          text-align: left;\n          background-color: #fff;\n        }\n\n        [tabindex='-1']:focus:not(:focus-visible) {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 0;\n          overflow: visible;\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-top: 0;\n          margin-bottom: 8px;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 16px;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        dt {\n          font-weight: 700;\n        }\n\n        dd {\n          margin-bottom: 8px;\n          margin-left: 0;\n        }\n\n        blockquote {\n          margin: 0 0 16px;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -0.25em;\n        }\n\n        sup {\n          top: -0.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n        }\n\n        a:hover {\n          color: #0056b3;\n          text-decoration: underline;\n        }\n\n        a:not([href]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):hover {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n            'Liberation Mono', 'Courier New', monospace;\n          font-size: 1em;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 16px;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 16px;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 12px;\n          padding-bottom: 12px;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 8px;\n        }\n\n        button {\n          border-radius: 0;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type='button'],\n        [type='reset'],\n        [type='submit'] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type='button']:not(:disabled),\n        [type='reset']:not(:disabled),\n        [type='submit']:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type='button']::-moz-focus-inner,\n        [type='reset']::-moz-focus-inner,\n        [type='submit']::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type='radio'],\n        input[type='checkbox'] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type='date'],\n        input[type='time'],\n        input[type='datetime-local'],\n        input[type='month'] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: 8px;\n          font-size: 24px;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type='number']::-webkit-inner-spin-button,\n        [type='number']::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type='search'] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type='search']::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function CssReset() {
    return _react.createElement("style", null, (0, _nooptemplate.noop)(_templateObject()));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOpenInEditor", {
    enumerable: true,
    get: function() {
        return useOpenInEditor;
    }
});
const _react = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
function useOpenInEditor(param) {
    let { file, lineNumber, column } = param === void 0 ? {} : param;
    const openInEditor = (0, _react.useCallback)(()=>{
        if (file == null || lineNumber == null || column == null) return;
        const params = new URLSearchParams();
        params.append("file", file);
        params.append("lineNumber", String(lineNumber));
        params.append("column", String(column));
        self.fetch((process.env.__NEXT_ROUTER_BASEPATH || "") + "/__nextjs_launch-editor?" + params.toString()).then(()=>{}, ()=>{
            console.error("There was an issue opening this code in your editor.");
        });
    }, [
        file,
        lineNumber,
        column
    ]);
    return openInEditor;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/ComponentStackFrameRow.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ComponentStackFrameRow", {
    enumerable: true,
    get: function() {
        return ComponentStackFrameRow;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _useopenineditor = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js (ecmascript, ssr)");
function ComponentStackFrameRow(param) {
    let { componentStackFrame: { component, file, lineNumber, column } } = param;
    const open = (0, _useopenineditor.useOpenInEditor)({
        file,
        column,
        lineNumber
    });
    return _react.default.createElement("div", {
        "data-nextjs-component-stack-frame": true
    }, _react.default.createElement("h3", null, component), file ? _react.default.createElement("div", {
        tabIndex: 10,
        role: "link",
        onClick: open,
        title: "Click to open in your editor"
    }, _react.default.createElement("span", null, file, " (", lineNumber, ":", column, ")"), _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, _react.default.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), _react.default.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), _react.default.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    }))) : null);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/FrameworkIcon.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FrameworkIcon", {
    enumerable: true,
    get: function() {
        return FrameworkIcon;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
function FrameworkIcon(param) {
    let { framework } = param;
    if (framework === "react") {
        return _react.default.createElement("svg", {
            "data-nextjs-call-stack-framework-icon": "react",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 410 369",
            fill: "none",
            shapeRendering: "geometricPrecision",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "5"
        }, _react.default.createElement("path", {
            d: "M204.995 224.552C226.56 224.552 244.042 207.07 244.042 185.506C244.042 163.941 226.56 146.459 204.995 146.459C183.43 146.459 165.948 163.941 165.948 185.506C165.948 207.07 183.43 224.552 204.995 224.552Z",
            fill: "currentColor"
        }), _react.default.createElement("path", {
            d: "M409.99 184.505C409.99 153.707 381.437 126.667 335.996 108.925C343.342 60.6535 334.19 22.3878 307.492 6.98883C283.649 -6.77511 250.631 -0.0395641 214.512 25.9753C211.316 28.2692 208.143 30.7097 204.97 33.2477C201.822 30.7097 198.65 28.2692 195.477 25.9753C159.359 -0.0395641 126.34 -6.79951 102.497 6.98883C75.8237 22.3878 66.6721 60.6291 74.0422 108.852C28.5529 126.618 0 153.682 0 184.505C0 215.303 28.5528 242.342 73.9934 260.084C66.6477 308.356 75.7993 346.621 102.497 362.02C110.575 366.682 119.727 369 129.684 369C149.085 369 171.61 360.215 195.477 343.034C198.674 340.74 201.847 338.3 205.019 335.762C208.167 338.3 211.34 340.74 214.512 343.034C238.38 360.239 260.905 369 280.306 369C290.263 369 299.415 366.682 307.492 362.02C331.335 348.256 342 316.287 337.534 271.993C337.143 268.089 336.631 264.135 335.996 260.109C381.461 242.367 409.99 215.327 409.99 184.505ZM225.934 41.8136C246.238 27.1955 265.127 19.5814 280.306 19.5814C286.871 19.5814 292.728 20.9968 297.731 23.8765C315.204 33.9798 322.672 62.9475 317.327 102.433C299.756 97.0401 280.306 92.9158 259.392 90.2802C246.872 73.8074 233.597 58.9453 220.003 46.2551C221.98 44.7421 223.957 43.229 225.934 41.8136ZM112.259 23.8765C117.262 20.9968 123.119 19.5814 129.684 19.5814C144.863 19.5814 163.752 27.1711 184.056 41.8136C186.033 43.229 188.01 44.7176 189.986 46.2551C176.393 58.9453 163.142 73.783 150.622 90.2558C129.732 92.8914 110.258 97.0401 92.687 102.409C87.3424 62.9475 94.7857 33.9798 112.259 23.8765ZM19.5233 184.505C19.5233 164.322 40.9014 143.359 77.776 128.253C81.9003 146.141 88.0502 165.054 96.1768 184.456C88.0014 203.881 81.8515 222.819 77.7272 240.732C40.9014 225.626 19.5233 204.687 19.5233 184.505ZM184.056 327.196C154.966 348.134 128.805 354.675 112.259 345.133C94.7857 335.029 87.3181 306.062 92.6626 266.576C110.234 271.969 129.684 276.093 150.598 278.729C163.117 295.202 176.393 310.064 189.986 322.754C188.01 324.292 186.033 325.78 184.056 327.196ZM204.995 310.04C180.591 287.685 157.138 257.815 137.347 223.551C132.051 214.4 121.344 191.396 117 182.489C113.535 190.786 110.112 198.398 107.427 206.5C109.623 210.575 118.092 229.213 120.434 233.288C125.071 241.317 129.928 249.127 134.931 256.692C120.898 254.227 107.915 251.055 96.1035 247.321C102.815 217.011 116.213 182.064 137.347 145.458C142.545 136.453 153.838 116.346 159.5 108C150.568 109.147 143.395 108.767 135 110.5C132.56 114.453 122.777 131.645 120.434 135.721C115.749 143.823 111.454 151.925 107.427 159.978C102.546 146.581 98.8124 133.744 96.1524 121.64C125.755 112.293 162.727 106.411 204.995 106.411C215.562 106.411 237.63 106.197 247.49 106.905C242.048 99.7544 237.38 93.2819 231.694 86.888C227.082 86.7416 209.705 86.888 204.995 86.888C195.672 86.888 186.545 87.2053 177.589 87.7422C186.472 77.1752 195.672 67.5111 204.995 58.9697C229.375 81.3239 252.851 111.195 272.643 145.458C277.841 154.463 289.073 175.426 293.49 184.505C296.98 176.207 300.281 168.64 302.99 160.489C300.793 156.389 291.898 139.747 289.555 135.696C284.918 127.667 280.062 119.858 275.059 112.317C289.092 114.782 302.075 117.954 313.886 121.688C307.175 151.998 293.777 186.945 272.643 223.551C267.445 232.556 252.651 253.178 246.99 261.524C255.922 260.377 265.595 258.663 273.99 256.93C276.43 252.976 287.212 237.364 289.555 233.288C294.216 225.235 298.512 217.182 302.489 209.153C307.224 222.185 310.982 234.997 313.715 247.394C284.138 256.741 247.214 262.598 204.995 262.598C194.428 262.598 169.859 261.208 160 260.5C165.442 267.65 171.304 275.095 176.99 281.489C181.602 281.635 200.285 282.121 204.995 282.121C214.317 282.121 223.444 281.804 232.401 281.267C223.493 291.834 214.317 301.498 204.995 310.04ZM297.731 345.133C281.185 354.699 254.999 348.159 225.934 327.196C223.957 325.78 221.98 324.292 220.003 322.754C233.597 310.064 246.848 295.226 259.367 278.753C280.233 276.118 299.659 271.993 317.205 266.625C317.547 269.089 317.888 271.554 318.132 273.97C321.72 309.649 314.277 335.566 297.731 345.133ZM332.262 240.756C328.065 222.599 321.842 203.686 313.813 184.578C321.988 165.152 328.138 146.215 332.262 128.302C369.088 143.408 390.466 164.322 390.466 184.505C390.466 204.687 369.113 225.626 332.262 240.756Z",
            fill: "currentColor"
        }));
    }
    return _react.default.createElement("svg", {
        "data-nextjs-call-stack-framework-icon": "next",
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 180 180",
        fill: "none"
    }, _react.default.createElement("mask", {
        id: "mask0_408_139",
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "180",
        height: "180"
    }, _react.default.createElement("circle", {
        cx: "90",
        cy: "90",
        r: "90",
        fill: "black"
    })), _react.default.createElement("g", {
        mask: "url(#mask0_408_139)"
    }, _react.default.createElement("circle", {
        cx: "90",
        cy: "90",
        r: "87",
        fill: "black",
        stroke: "white",
        strokeWidth: "6"
    }), _react.default.createElement("path", {
        d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
        fill: "url(#paint0_linear_408_139)"
    }), _react.default.createElement("rect", {
        x: "115",
        y: "54",
        width: "12",
        height: "72",
        fill: "url(#paint1_linear_408_139)"
    })), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
        id: "paint0_linear_408_139",
        x1: "109",
        y1: "116.5",
        x2: "144.5",
        y2: "160.5",
        gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
        stopColor: "white"
    }), _react.default.createElement("stop", {
        offset: "1",
        stopColor: "white",
        stopOpacity: "0"
    })), _react.default.createElement("linearGradient", {
        id: "paint1_linear_408_139",
        x1: "121",
        y1: "54",
        x2: "120.799",
        y2: "106.875",
        gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
        stopColor: "white"
    }), _react.default.createElement("stop", {
        offset: "1",
        stopColor: "white",
        stopOpacity: "0"
    }))));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getOriginalStackFrame: null,
    getOriginalStackFrames: null,
    getFrameSource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getOriginalStackFrame: function() {
        return getOriginalStackFrame;
    },
    getOriginalStackFrames: function() {
        return getOriginalStackFrames;
    },
    getFrameSource: function() {
        return getFrameSource;
    }
});
function getOriginalStackFrame(source, type, errorMessage) {
    var _source_file, _source_file1;
    async function _getOriginalStackFrame() {
        var _source_file, _body_originalStackFrame, _body_originalStackFrame_file;
        const params = new URLSearchParams();
        params.append("isServer", String(type === "server"));
        params.append("isEdgeServer", String(type === "edge-server"));
        params.append("isAppDirectory", "true");
        params.append("errorMessage", errorMessage);
        for(const key in source){
            var _source_key;
            params.append(key, ((_source_key = source[key]) != null ? _source_key : "").toString());
        }
        const controller = new AbortController();
        const tm = setTimeout(()=>controller.abort(), 3000);
        const res = await self.fetch((process.env.__NEXT_ROUTER_BASEPATH || "") + "/__nextjs_original-stack-frame?" + params.toString(), {
            signal: controller.signal
        }).finally(()=>{
            clearTimeout(tm);
        });
        if (!res.ok || res.status === 204) {
            return Promise.reject(new Error(await res.text()));
        }
        const body = await res.json();
        var _ref;
        return {
            error: false,
            reason: null,
            external: false,
            expanded: !Boolean((_ref = ((_source_file = source.file) == null ? void 0 : _source_file.includes("node_modules")) || ((_body_originalStackFrame = body.originalStackFrame) == null ? void 0 : (_body_originalStackFrame_file = _body_originalStackFrame.file) == null ? void 0 : _body_originalStackFrame_file.includes("node_modules"))) != null ? _ref : true),
            sourceStackFrame: source,
            originalStackFrame: body.originalStackFrame,
            originalCodeFrame: body.originalCodeFrame || null,
            sourcePackage: body.sourcePackage
        };
    }
    if (!(((_source_file = source.file) == null ? void 0 : _source_file.startsWith("webpack-internal:")) || ((_source_file1 = source.file) == null ? void 0 : _source_file1.startsWith("file:")))) {
        return Promise.resolve({
            error: false,
            reason: null,
            external: true,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        });
    }
    var _err_message, _ref;
    return _getOriginalStackFrame().catch((err)=>{
        return {
            error: true,
            reason: (_ref = (_err_message = err == null ? void 0 : err.message) != null ? _err_message : err == null ? void 0 : err.toString()) != null ? _ref : "Unknown Error",
            external: false,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        };
    });
}
function getOriginalStackFrames(frames, type, errorMessage) {
    return Promise.all(frames.map((frame)=>getOriginalStackFrame(frame, type, errorMessage)));
}
function getFrameSource(frame) {
    let str = "";
    try {
        var _globalThis_location;
        const u = new URL(frame.file);
        if (typeof globalThis !== "undefined" && ((_globalThis_location = globalThis.location) == null ? void 0 : _globalThis_location.origin) !== u.origin) {
            if (u.origin === "null") {
                str += u.protocol;
            } else {
                str += u.origin;
            }
        }
        str += u.pathname;
        str += " ";
    } catch (e) {
        str += (frame.file || "(unknown)") + " ";
    }
    if (frame.lineNumber != null) {
        if (frame.column != null) {
            str += "(" + frame.lineNumber + ":" + frame.column + ") ";
        } else {
            str += "(" + frame.lineNumber + ") ";
        }
    }
    return str.slice(0, -1);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CallStackFrame", {
    enumerable: true,
    get: function() {
        return CallStackFrame;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _stackframe = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js (ecmascript, ssr)");
const _useopenineditor = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js (ecmascript, ssr)");
const CallStackFrame = function CallStackFrame(param) {
    let { frame } = param;
    var _frame_originalStackFrame;
    const f = (_frame_originalStackFrame = frame.originalStackFrame) != null ? _frame_originalStackFrame : frame.sourceStackFrame;
    const hasSource = Boolean(frame.originalCodeFrame);
    const open = (0, _useopenineditor.useOpenInEditor)(hasSource ? {
        file: f.file,
        lineNumber: f.lineNumber,
        column: f.column
    } : undefined);
    return _react.default.createElement("div", {
        "data-nextjs-call-stack-frame": true
    }, _react.default.createElement("h3", {
        "data-nextjs-frame-expanded": Boolean(frame.expanded)
    }, f.methodName), _react.default.createElement("div", {
        "data-has-source": hasSource ? "true" : undefined,
        tabIndex: hasSource ? 10 : undefined,
        role: hasSource ? "link" : undefined,
        onClick: open,
        title: hasSource ? "Click to open in your editor" : undefined
    }, _react.default.createElement("span", null, (0, _stackframe.getFrameSource)(f)), _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, _react.default.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), _react.default.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), _react.default.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    }))));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/GroupedStackFrames.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupedStackFrames", {
    enumerable: true,
    get: function() {
        return GroupedStackFrames;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _CallStackFrame = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js (ecmascript, ssr)");
const _FrameworkIcon = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/FrameworkIcon.js (ecmascript, ssr)");
function FrameworkGroup(param) {
    let { framework, stackFrames, all } = param;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("details", {
        "data-nextjs-collapsed-call-stack-details": true
    }, _react.default.createElement("summary", {
        tabIndex: 10
    }, _react.default.createElement("svg", {
        "data-nextjs-call-stack-chevron-icon": true,
        fill: "none",
        height: "20",
        width: "20",
        shapeRendering: "geometricPrecision",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24"
    }, _react.default.createElement("path", {
        d: "M9 18l6-6-6-6"
    })), _react.default.createElement(_FrameworkIcon.FrameworkIcon, {
        framework: framework
    }), framework === "react" ? "React" : "Next.js"), stackFrames.map((frame, index)=>_react.default.createElement(_CallStackFrame.CallStackFrame, {
            key: "call-stack-" + index + "-" + all,
            frame: frame
        }))));
}
function GroupedStackFrames(param) {
    let { groupedStackFrames, all } = param;
    return _react.default.createElement(_react.default.Fragment, null, groupedStackFrames.map((stackFramesGroup, groupIndex)=>{
        if (stackFramesGroup.framework) {
            return _react.default.createElement(FrameworkGroup, {
                key: "call-stack-framework-group-" + groupIndex + "-" + all,
                framework: stackFramesGroup.framework,
                stackFrames: stackFramesGroup.stackFrames,
                all: all
            });
        }
        return stackFramesGroup.stackFrames.map((frame, frameIndex)=>_react.default.createElement(_CallStackFrame.CallStackFrame, {
                key: "call-stack-" + groupIndex + "-" + frameIndex + "-" + all,
                frame: frame
            }));
    }));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/group-stack-frames-by-framework.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "groupStackFramesByFramework", {
    enumerable: true,
    get: function() {
        return groupStackFramesByFramework;
    }
});
function getFramework(sourcePackage) {
    if (!sourcePackage) return undefined;
    if (/^(react|react-dom|react-is|react-refresh|react-server-dom-webpack|scheduler)$/.test(sourcePackage)) {
        return "react";
    } else if (sourcePackage === "next") {
        return "next";
    }
    return undefined;
}
function groupStackFramesByFramework(stackFrames) {
    const stackFramesGroupedByFramework = [];
    for (const stackFrame of stackFrames){
        const currentGroup = stackFramesGroupedByFramework[stackFramesGroupedByFramework.length - 1];
        const framework = getFramework(stackFrame.sourcePackage);
        if (currentGroup && currentGroup.framework === framework) {
            currentGroup.stackFrames.push(stackFrame);
        } else {
            stackFramesGroupedByFramework.push({
                framework: framework,
                stackFrames: [
                    stackFrame
                ]
            });
        }
    }
    return stackFramesGroupedByFramework;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/CodeFrame.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return CodeFrame;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _anser = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/anser/index.js (ecmascript, ssr)"));
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _stripansi = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/strip-ansi/index.js (ecmascript, ssr)"));
const _stackframe = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js (ecmascript, ssr)");
const _useopenineditor = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js (ecmascript, ssr)");
const CodeFrame = function CodeFrame(param) {
    let { stackFrame, codeFrame } = param;
    const formattedFrame = _react.useMemo(()=>{
        const lines = codeFrame.split(/\r?\n/g);
        const prefixLength = lines.map((line)=>/^>? +\d+ +\| [ ]+/.exec((0, _stripansi.default)(line)) === null ? null : /^>? +\d+ +\| ( *)/.exec((0, _stripansi.default)(line))).filter(Boolean).map((v)=>v.pop()).reduce((c, n)=>isNaN(c) ? n.length : Math.min(c, n.length), NaN);
        if (prefixLength > 1) {
            const p = " ".repeat(prefixLength);
            return lines.map((line, a)=>~(a = line.indexOf("|")) ? line.substring(0, a) + line.substring(a).replace(p, "") : line).join("\n");
        }
        return lines.join("\n");
    }, [
        codeFrame
    ]);
    const decoded = _react.useMemo(()=>{
        return _anser.default.ansiToJson(formattedFrame, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [
        formattedFrame
    ]);
    const open = (0, _useopenineditor.useOpenInEditor)({
        file: stackFrame.file,
        lineNumber: stackFrame.lineNumber,
        column: stackFrame.column
    });
    return _react.createElement("div", {
        "data-nextjs-codeframe": true
    }, _react.createElement("div", null, _react.createElement("p", {
        role: "link",
        onClick: open,
        tabIndex: 1,
        title: "Click to open in your editor"
    }, _react.createElement("span", null, (0, _stackframe.getFrameSource)(stackFrame), " @ ", stackFrame.methodName), _react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, _react.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), _react.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), _react.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    })))), _react.createElement("pre", null, decoded.map((entry, index)=>_react.createElement("span", {
            key: "frame-" + index,
            style: {
                color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                ...entry.decoration === "bold" ? {
                    fontWeight: 800
                } : entry.decoration === "italic" ? {
                    fontStyle: "italic"
                } : undefined
            }
        }, entry.content))));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return _CodeFrame.CodeFrame;
    }
});
const _CodeFrame = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/CodeFrame.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    styles: null,
    RuntimeError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    styles: function() {
        return styles;
    },
    RuntimeError: function() {
        return RuntimeError;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _CodeFrame = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const _groupstackframesbyframework = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/group-stack-frames-by-framework.js (ecmascript, ssr)");
const _CallStackFrame = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js (ecmascript, ssr)");
const _GroupedStackFrames = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/GroupedStackFrames.js (ecmascript, ssr)");
const _ComponentStackFrameRow = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/ComponentStackFrameRow.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  button[data-nextjs-data-runtime-error-collapsed-action] {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-bigger);\n    color: var(--color-accents-3);\n  }\n\n  [data-nextjs-call-stack-frame]:not(:last-child),\n  [data-nextjs-component-stack-frame]:not(:last-child) {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-nextjs-call-stack-frame] > h3,\n  [data-nextjs-component-stack-frame] > h3 {\n    margin-top: 0;\n    margin-bottom: var(--size-gap);\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font);\n    color: #222;\n  }\n  [data-nextjs-call-stack-frame] > h3[data-nextjs-frame-expanded='false'] {\n    color: #666;\n  }\n  [data-nextjs-call-stack-frame] > div,\n  [data-nextjs-component-stack-frame] > div {\n    display: flex;\n    align-items: center;\n    padding-left: calc(var(--size-gap) + var(--size-gap-half));\n    font-size: var(--size-font-small);\n    color: #999;\n  }\n  [data-nextjs-call-stack-frame] > div > svg,\n  [data-nextjs-component-stack-frame] > div > svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n\n    display: none;\n  }\n\n  [data-nextjs-call-stack-frame] > div[data-has-source],\n  [data-nextjs-component-stack-frame] > div {\n    cursor: pointer;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source]:hover,\n  [data-nextjs-component-stack-frame] > div:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source] > svg,\n  [data-nextjs-component-stack-frame] > div > svg {\n    display: unset;\n  }\n\n  [data-nextjs-call-stack-framework-icon] {\n    margin-right: var(--size-gap);\n  }\n  [data-nextjs-call-stack-framework-icon='next'] > mask {\n    mask-type: alpha;\n  }\n  [data-nextjs-call-stack-framework-icon='react'] {\n    color: rgb(20, 158, 202);\n  }\n  [data-nextjs-collapsed-call-stack-details][open]\n    [data-nextjs-call-stack-chevron-icon] {\n    transform: rotate(90deg);\n  }\n  [data-nextjs-collapsed-call-stack-details] summary {\n    display: flex;\n    align-items: center;\n    margin: var(--size-gap-double) 0;\n    list-style: none;\n  }\n  [data-nextjs-collapsed-call-stack-details] summary::-webkit-details-marker {\n    display: none;\n  }\n\n  [data-nextjs-collapsed-call-stack-details] h3 {\n    color: #666;\n  }\n  [data-nextjs-collapsed-call-stack-details] [data-nextjs-call-stack-frame] {\n    margin-bottom: var(--size-gap-double);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const RuntimeError = function RuntimeError(param) {
    let { error } = param;
    const firstFirstPartyFrameIndex = _react.useMemo(()=>{
        return error.frames.findIndex((entry)=>entry.expanded && Boolean(entry.originalCodeFrame) && Boolean(entry.originalStackFrame));
    }, [
        error.frames
    ]);
    const firstFrame = _react.useMemo(()=>{
        var _error_frames_firstFirstPartyFrameIndex;
        return (_error_frames_firstFirstPartyFrameIndex = error.frames[firstFirstPartyFrameIndex]) != null ? _error_frames_firstFirstPartyFrameIndex : null;
    }, [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const allLeadingFrames = _react.useMemo(()=>firstFirstPartyFrameIndex < 0 ? [] : error.frames.slice(0, firstFirstPartyFrameIndex), [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const [all, setAll] = _react.useState(firstFrame == null);
    const toggleAll = _react.useCallback(()=>{
        setAll((v)=>!v);
    }, []);
    const leadingFrames = _react.useMemo(()=>allLeadingFrames.filter((f)=>f.expanded || all), [
        all,
        allLeadingFrames
    ]);
    const allCallStackFrames = _react.useMemo(()=>error.frames.slice(firstFirstPartyFrameIndex + 1), [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const visibleCallStackFrames = _react.useMemo(()=>allCallStackFrames.filter((f)=>f.expanded || all), [
        all,
        allCallStackFrames
    ]);
    const canShowMore = _react.useMemo(()=>{
        return allCallStackFrames.length !== visibleCallStackFrames.length || all && firstFrame != null;
    }, [
        all,
        allCallStackFrames.length,
        firstFrame,
        visibleCallStackFrames.length
    ]);
    const stackFramesGroupedByFramework = _react.useMemo(()=>(0, _groupstackframesbyframework.groupStackFramesByFramework)(visibleCallStackFrames), [
        visibleCallStackFrames
    ]);
    return _react.createElement(_react.Fragment, null, firstFrame ? _react.createElement(_react.Fragment, null, _react.createElement("h2", null, "Source"), leadingFrames.map((frame, index)=>_react.createElement(_CallStackFrame.CallStackFrame, {
            key: "leading-frame-" + index + "-" + all,
            frame: frame
        })), _react.createElement(_CodeFrame.CodeFrame, {
        stackFrame: firstFrame.originalStackFrame,
        codeFrame: firstFrame.originalCodeFrame
    })) : undefined, error.componentStackFrames ? _react.createElement(_react.Fragment, null, _react.createElement("h2", null, "Component Stack"), error.componentStackFrames.map((componentStackFrame, index)=>_react.createElement(_ComponentStackFrameRow.ComponentStackFrameRow, {
            key: index,
            componentStackFrame: componentStackFrame
        }))) : null, stackFramesGroupedByFramework.length ? _react.createElement(_react.Fragment, null, _react.createElement("h2", null, "Call Stack"), _react.createElement(_GroupedStackFrames.GroupedStackFrames, {
        groupedStackFrames: stackFramesGroupedByFramework,
        all: all
    })) : undefined, canShowMore ? _react.createElement(_react.Fragment, null, _react.createElement("button", {
        tabIndex: 10,
        "data-nextjs-data-runtime-error-collapsed-action": true,
        type: "button",
        onClick: toggleAll
    }, all ? "Hide" : "Show", " collapsed frames")) : undefined);
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/get-words-and-whitespaces.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getWordsAndWhitespaces", {
    enumerable: true,
    get: function() {
        return getWordsAndWhitespaces;
    }
});
function isWhitespace(char) {
    return char === " " || char === "\n" || char === "	" || char === "\r";
}
function getWordsAndWhitespaces(text) {
    const wordsAndWhitespaces = [];
    let current = "";
    let currentIsWhitespace = false;
    for (const char of text){
        if (current.length === 0) {
            current += char;
            currentIsWhitespace = isWhitespace(char);
            continue;
        }
        const nextIsWhitespace = isWhitespace(char);
        if (currentIsWhitespace === nextIsWhitespace) {
            current += char;
        } else {
            wordsAndWhitespaces.push(current);
            current = char;
            currentIsWhitespace = nextIsWhitespace;
        }
    }
    if (current.length > 0) {
        wordsAndWhitespaces.push(current);
    }
    return wordsAndWhitespaces;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HotlinkedText", {
    enumerable: true,
    get: function() {
        return HotlinkedText;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _getwordsandwhitespaces = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/get-words-and-whitespaces.js (ecmascript, ssr)");
const linkRegex = /https?:\/\/[^\s/$.?#].[^\s"]*/i;
const HotlinkedText = function HotlinkedText(props) {
    const { text } = props;
    const wordsAndWhitespaces = (0, _getwordsandwhitespaces.getWordsAndWhitespaces)(text);
    return _react.default.createElement(_react.default.Fragment, null, linkRegex.test(text) ? wordsAndWhitespaces.map((word, index)=>{
        if (linkRegex.test(word)) {
            return _react.default.createElement(_react.default.Fragment, {
                key: "link-" + index
            }, _react.default.createElement("a", {
                href: word
            }, word));
        }
        return _react.default.createElement(_react.default.Fragment, {
            key: "text-" + index
        }, word);
    }) : text);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VersionStalenessInfo", {
    enumerable: true,
    get: function() {
        return VersionStalenessInfo;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
function VersionStalenessInfo(props) {
    if (!props) return null;
    const { staleness, installed, expected } = props;
    let text = "";
    let title = "";
    let indicatorClass = "";
    switch(staleness){
        case "fresh":
            text = "Next.js is up to date";
            title = "Latest available version is detected (" + installed + ").";
            indicatorClass = "fresh";
            break;
        case "stale-patch":
        case "stale-minor":
            text = "Next.js (" + installed + ") out of date";
            title = "There is a newer version (" + expected + ") available, upgrade recommended! ";
            indicatorClass = "stale";
            break;
        case "stale-major":
            {
                text = "Next.js (" + installed + ") is outdated";
                title = "An outdated version detected (latest is " + expected + "), upgrade is highly recommended!";
                indicatorClass = "outdated";
                break;
            }
        case "stale-prerelease":
            {
                text = "Next.js (" + installed + ") is outdated";
                title = "There is a newer canary version (" + expected + ") available, please upgrade! ";
                indicatorClass = "stale";
                break;
            }
        case "newer-than-npm":
        case "unknown":
            break;
        default:
            break;
    }
    if (!text) return null;
    return _react.default.createElement("small", {
        className: "nextjs-container-build-error-version-status"
    }, _react.default.createElement("span", {
        className: indicatorClass
    }), _react.default.createElement("small", {
        className: "nextjs-container-build-error-version-status",
        title: title
    }, text), " ", staleness === "fresh" || staleness === "unknown" ? null : _react.default.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://nextjs.org/docs/messages/version-staleness"
    }, "(learn more)"));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-build-error-version-status {\n    flex: 1;\n    text-align: right;\n  }\n  .nextjs-container-build-error-version-status small {\n    margin-left: var(--size-gap);\n    font-size: var(--size-font-small);\n  }\n  .nextjs-container-build-error-version-status a {\n    font-size: var(--size-font-small);\n  }\n  .nextjs-container-build-error-version-status span {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background: var(--color-ansi-bright-black);\n  }\n  .nextjs-container-build-error-version-status span.fresh {\n    background: var(--color-ansi-green);\n  }\n  .nextjs-container-build-error-version-status span.stale {\n    background: var(--color-ansi-yellow);\n  }\n  .nextjs-container-build-error-version-status span.outdated {\n    background: var(--color-ansi-red);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    styles: null,
    VersionStalenessInfo: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    styles: function() {
        return _styles.styles;
    },
    VersionStalenessInfo: function() {
        return _VersionStalenessInfo.VersionStalenessInfo;
    }
});
const _styles = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/styles.js (ecmascript, ssr)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CloseIcon", {
    enumerable: true,
    get: function() {
        return CloseIcon;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const CloseIcon = ()=>{
    return _react.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, _react.createElement("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), _react.createElement("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFilesystemFrame: null,
    getErrorSource: null,
    decorateServerError: null,
    getServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFilesystemFrame: function() {
        return getFilesystemFrame;
    },
    getErrorSource: function() {
        return getErrorSource;
    },
    decorateServerError: function() {
        return decorateServerError;
    },
    getServerError: function() {
        return getServerError;
    }
});
const _stacktraceparser = __turbopack_require__("[project]/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js (ecmascript, ssr)");
function getFilesystemFrame(frame) {
    const f = {
        ...frame
    };
    if (typeof f.file === "string") {
        if (f.file.startsWith("/") || /^[a-z]:\\/i.test(f.file) || f.file.startsWith("\\\\")) {
            f.file = "file://" + f.file;
        }
    }
    return f;
}
const symbolError = Symbol("NextjsError");
function getErrorSource(error) {
    return error[symbolError] || null;
}
function decorateServerError(error, type) {
    Object.defineProperty(error, symbolError, {
        writable: false,
        enumerable: false,
        configurable: false,
        value: type
    });
}
function getServerError(error, type) {
    let n;
    try {
        throw new Error(error.message);
    } catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = n.toString() + "\n" + (0, _stacktraceparser.parse)(error.stack).map(getFilesystemFrame).map((f)=>{
            let str = "    at " + f.methodName;
            if (f.file) {
                let loc = f.file;
                if (f.lineNumber) {
                    loc += ":" + f.lineNumber;
                    if (f.column) {
                        loc += ":" + f.column;
                    }
                }
                str += " (" + loc + ")";
            }
            return str;
        }).join("\n");
    } catch (e) {
        n.stack = error.stack;
    }
    decorateServerError(n, type);
    return n;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_BUILD_OK: null,
    ACTION_BUILD_ERROR: null,
    ACTION_BEFORE_REFRESH: null,
    ACTION_REFRESH: null,
    ACTION_UNHANDLED_ERROR: null,
    ACTION_UNHANDLED_REJECTION: null,
    ACTION_VERSION_INFO: null,
    INITIAL_OVERLAY_STATE: null,
    errorOverlayReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_BUILD_OK: function() {
        return ACTION_BUILD_OK;
    },
    ACTION_BUILD_ERROR: function() {
        return ACTION_BUILD_ERROR;
    },
    ACTION_BEFORE_REFRESH: function() {
        return ACTION_BEFORE_REFRESH;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_UNHANDLED_ERROR: function() {
        return ACTION_UNHANDLED_ERROR;
    },
    ACTION_UNHANDLED_REJECTION: function() {
        return ACTION_UNHANDLED_REJECTION;
    },
    ACTION_VERSION_INFO: function() {
        return ACTION_VERSION_INFO;
    },
    INITIAL_OVERLAY_STATE: function() {
        return INITIAL_OVERLAY_STATE;
    },
    errorOverlayReducer: function() {
        return errorOverlayReducer;
    }
});
const ACTION_BUILD_OK = "build-ok";
const ACTION_BUILD_ERROR = "build-error";
const ACTION_BEFORE_REFRESH = "before-fast-refresh";
const ACTION_REFRESH = "fast-refresh";
const ACTION_UNHANDLED_ERROR = "unhandled-error";
const ACTION_UNHANDLED_REJECTION = "unhandled-rejection";
const ACTION_VERSION_INFO = "version-info";
const INITIAL_OVERLAY_STATE = {
    nextId: 1,
    buildError: null,
    errors: [],
    notFound: false,
    refreshState: {
        type: "idle"
    },
    versionInfo: {
        installed: "0.0.0",
        staleness: "unknown"
    }
};
function pushErrorFilterDuplicates(errors, err) {
    return [
        ...errors.filter((e)=>{
            return e.event.reason !== err.event.reason;
        }),
        err
    ];
}
const errorOverlayReducer = (state, action)=>{
    switch(action.type){
        case ACTION_BUILD_OK:
            {
                return {
                    ...state,
                    buildError: null
                };
            }
        case ACTION_BUILD_ERROR:
            {
                return {
                    ...state,
                    buildError: action.message
                };
            }
        case ACTION_BEFORE_REFRESH:
            {
                return {
                    ...state,
                    refreshState: {
                        type: "pending",
                        errors: []
                    }
                };
            }
        case ACTION_REFRESH:
            {
                return {
                    ...state,
                    buildError: null,
                    errors: state.refreshState.type === "pending" ? state.refreshState.errors : [],
                    refreshState: {
                        type: "idle"
                    }
                };
            }
        case ACTION_UNHANDLED_ERROR:
        case ACTION_UNHANDLED_REJECTION:
            {
                switch(state.refreshState.type){
                    case "idle":
                        {
                            return {
                                ...state,
                                nextId: state.nextId + 1,
                                errors: pushErrorFilterDuplicates(state.errors, {
                                    id: state.nextId,
                                    event: action
                                })
                            };
                        }
                    case "pending":
                        {
                            return {
                                ...state,
                                nextId: state.nextId + 1,
                                refreshState: {
                                    ...state.refreshState,
                                    errors: pushErrorFilterDuplicates(state.refreshState.errors, {
                                        id: state.nextId,
                                        event: action
                                    })
                                }
                            };
                        }
                    default:
                        const _ = state.refreshState;
                        return state;
                }
            }
        case ACTION_VERSION_INFO:
            {
                return {
                    ...state,
                    versionInfo: action.versionInfo
                };
            }
        default:
            {
                return state;
            }
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/getErrorByType.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getErrorByType", {
    enumerable: true,
    get: function() {
        return getErrorByType;
    }
});
const _erroroverlayreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)");
const _nodeStackFrames = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js (ecmascript, ssr)");
const _stackframe = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js (ecmascript, ssr)");
async function getErrorByType(ev) {
    const { id, event } = ev;
    switch(event.type){
        case _erroroverlayreducer.ACTION_UNHANDLED_ERROR:
        case _erroroverlayreducer.ACTION_UNHANDLED_REJECTION:
            {
                const readyRuntimeError = {
                    id,
                    runtime: true,
                    error: event.reason,
                    frames: await (0, _stackframe.getOriginalStackFrames)(event.frames, (0, _nodeStackFrames.getErrorSource)(event.reason), event.reason.toString())
                };
                if (event.type === _erroroverlayreducer.ACTION_UNHANDLED_ERROR) {
                    readyRuntimeError.componentStackFrames = event.componentStackFrames;
                }
                return readyRuntimeError;
            }
        default:
            {
                break;
            }
    }
    const _ = event;
    throw new Error("type system invariant violation");
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Toast", {
    enumerable: true,
    get: function() {
        return Toast;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const Toast = function Toast(param) {
    let { onClick, children, className } = param;
    return _react.createElement("div", {
        "data-nextjs-toast": true,
        onClick: onClick,
        className: className
    }, _react.createElement("div", {
        "data-nextjs-toast-wrapper": true
    }, children));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-toast] {\n    position: fixed;\n    bottom: var(--size-gap-double);\n    left: var(--size-gap-double);\n    max-width: 420px;\n    z-index: 9000;\n  }\n\n  @media (max-width: 440px) {\n    [data-nextjs-toast] {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  [data-nextjs-toast-wrapper] {\n    padding: 16px;\n    border-radius: var(--size-gap-half);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)\n      rgba(0, 0, 0, 0.25);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    styles: null,
    Toast: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    styles: function() {
        return _styles.styles;
    },
    Toast: function() {
        return _Toast.Toast;
    }
});
const _styles = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js (ecmascript, ssr)");
const _Toast = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    lock: null,
    unlock: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    lock: function() {
        return lock;
    },
    unlock: function() {
        return unlock;
    }
});
let previousBodyPaddingRight;
let previousBodyOverflowSetting;
let activeLocks = 0;
function lock() {
    setTimeout(()=>{
        if (activeLocks++ > 0) {
            return;
        }
        const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = "" + scrollBarGap + "px";
        }
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = "hidden";
    });
}
function unlock() {
    setTimeout(()=>{
        if (activeLocks === 0 || --activeLocks !== 0) {
            return;
        }
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;
            previousBodyPaddingRight = undefined;
        }
        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;
            previousBodyOverflowSetting = undefined;
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _platform = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/platform/platform.js (ecmascript, ssr)"));
const _cssescape = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/css.escape/css.escape.js (ecmascript, ssr)"));
function nodeArray(input) {
    if (!input) {
        return [];
    }
    if (Array.isArray(input)) {
        return input;
    }
    if (input.nodeType !== undefined) {
        return [
            input
        ];
    }
    if (typeof input === "string") {
        input = document.querySelectorAll(input);
    }
    if (input.length !== undefined) {
        return [].slice.call(input, 0);
    }
    throw new TypeError("unexpected input " + String(input));
}
function contextToElement(_ref) {
    var context = _ref.context, _ref$label = _ref.label, label = _ref$label === undefined ? "context-to-element" : _ref$label, resolveDocument = _ref.resolveDocument, defaultToDocument = _ref.defaultToDocument;
    var element = nodeArray(context)[0];
    if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
        element = element.documentElement;
    }
    if (!element && defaultToDocument) {
        return document.documentElement;
    }
    if (!element) {
        throw new TypeError(label + " requires valid options.context");
    }
    if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        throw new TypeError(label + " requires options.context to be an Element");
    }
    return element;
}
function getShadowHost() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var element = contextToElement({
        label: "get/shadow-host",
        context: context
    });
    var container = null;
    while(element){
        container = element;
        element = element.parentNode;
    }
    if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
        return container.host;
    }
    return null;
}
function getDocument(node) {
    if (!node) {
        return document;
    }
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return node;
    }
    return node.ownerDocument || document;
}
function isActiveElement(context) {
    var element = contextToElement({
        label: "is/active-element",
        resolveDocument: true,
        context: context
    });
    var _document = getDocument(element);
    if (_document.activeElement === element) {
        return true;
    }
    var shadowHost = getShadowHost({
        context: element
    });
    if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
        return true;
    }
    return false;
}
function getParents() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var list = [];
    var element = contextToElement({
        label: "get/parents",
        context: context
    });
    while(element){
        list.push(element);
        element = element.parentNode;
        if (element && element.nodeType !== Node.ELEMENT_NODE) {
            element = null;
        }
    }
    return list;
}
var names = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector"
];
var name = null;
function findMethodName(element) {
    names.some(function(_name) {
        if (!element[_name]) {
            return false;
        }
        name = _name;
        return true;
    });
}
function elementMatches(element, selector) {
    if (!name) {
        findMethodName(element);
    }
    return element[name](selector);
}
var platform = JSON.parse(JSON.stringify(_platform.default));
var os = platform.os.family || "";
var ANDROID = os === "Android";
var WINDOWS = os.slice(0, 7) === "Windows";
var OSX = os === "OS X";
var IOS = os === "iOS";
var BLINK = platform.layout === "Blink";
var GECKO = platform.layout === "Gecko";
var TRIDENT = platform.layout === "Trident";
var EDGE = platform.layout === "EdgeHTML";
var WEBKIT = platform.layout === "WebKit";
var version = parseFloat(platform.version);
var majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;
platform.is = {
    ANDROID: ANDROID,
    WINDOWS: WINDOWS,
    OSX: OSX,
    IOS: IOS,
    BLINK: BLINK,
    GECKO: GECKO,
    TRIDENT: TRIDENT,
    EDGE: EDGE,
    WEBKIT: WEBKIT,
    IE9: TRIDENT && majorVersion === 9,
    IE10: TRIDENT && majorVersion === 10,
    IE11: TRIDENT && majorVersion === 11
};
function before() {
    var data = {
        activeElement: document.activeElement,
        windowScrollTop: window.scrollTop,
        windowScrollLeft: window.scrollLeft,
        bodyScrollTop: document.body.scrollTop,
        bodyScrollLeft: document.body.scrollLeft
    };
    var iframe = document.createElement("iframe");
    iframe.setAttribute("style", "position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;");
    iframe.setAttribute("aria-live", "off");
    iframe.setAttribute("aria-busy", "true");
    iframe.setAttribute("aria-hidden", "true");
    document.body.appendChild(iframe);
    var _window = iframe.contentWindow;
    var _document = _window.document;
    _document.open();
    _document.close();
    var wrapper = _document.createElement("div");
    _document.body.appendChild(wrapper);
    data.iframe = iframe;
    data.wrapper = wrapper;
    data.window = _window;
    data.document = _document;
    return data;
}
function test(data, options) {
    data.wrapper.innerHTML = "";
    var element = typeof options.element === "string" ? data.document.createElement(options.element) : options.element(data.wrapper, data.document);
    var focus = options.mutate && options.mutate(element, data.wrapper, data.document);
    if (!focus && focus !== false) {
        focus = element;
    }
    !element.parentNode && data.wrapper.appendChild(element);
    focus && focus.focus && focus.focus();
    return options.validate ? options.validate(element, focus, data.document) : data.document.activeElement === focus;
}
function after(data) {
    if (data.activeElement === document.body) {
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        if (platform.is.IE10) {
            document.body.focus();
        }
    } else {
        data.activeElement && data.activeElement.focus && data.activeElement.focus();
    }
    document.body.removeChild(data.iframe);
    window.scrollTop = data.windowScrollTop;
    window.scrollLeft = data.windowScrollLeft;
    document.body.scrollTop = data.bodyScrollTop;
    document.body.scrollLeft = data.bodyScrollLeft;
}
function detectFocus(tests) {
    var data = before();
    var results = {};
    Object.keys(tests).map(function(key) {
        results[key] = test(data, tests[key]);
    });
    after(data);
    return results;
}
var version$1 = "1.4.1";
function readLocalStorage(key) {
    var data = void 0;
    try {
        data = window.localStorage && window.localStorage.getItem(key);
        data = data ? JSON.parse(data) : {};
    } catch (e) {
        data = {};
    }
    return data;
}
function writeLocalStorage(key, value) {
    if (!document.hasFocus()) {
        try {
            window.localStorage && window.localStorage.removeItem(key);
        } catch (e) {}
        return;
    }
    try {
        window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
}
var userAgent = typeof window !== "undefined" && window.navigator.userAgent || "";
var cacheKey = "ally-supports-cache";
var cache = readLocalStorage(cacheKey);
if (cache.userAgent !== userAgent || cache.version !== version$1) {
    cache = {};
}
cache.userAgent = userAgent;
cache.version = version$1;
var cache$1 = {
    get: function get() {
        return cache;
    },
    set: function set(values) {
        Object.keys(values).forEach(function(key) {
            cache[key] = values[key];
        });
        cache.time = new Date().toISOString();
        writeLocalStorage(cacheKey, cache);
    }
};
function cssShadowPiercingDeepCombinator() {
    var combinator = void 0;
    try {
        document.querySelector("html >>> :first-child");
        combinator = ">>>";
    } catch (noArrowArrowArrow) {
        try {
            document.querySelector("html /deep/ :first-child");
            combinator = "/deep/";
        } catch (noDeep) {
            combinator = "";
        }
    }
    return combinator;
}
var gif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
var focusAreaImgTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + gif + '">';
        return element.querySelector("area");
    }
};
var focusAreaTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + gif + '">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            return true;
        }
        var focus = element.querySelector("area");
        focus.focus();
        return _document.activeElement === focus;
    }
};
var focusAreaWithoutHref = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + gif + '">';
        return element.querySelector("area");
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            return true;
        }
        return _document.activeElement === focusTarget;
    }
};
var focusAudioWithoutControls = {
    name: "can-focus-audio-without-controls",
    element: "audio",
    mutate: function mutate(element) {
        try {
            element.setAttribute("src", gif);
        } catch (e) {}
    }
};
var invalidGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ";
var focusBrokenImageMap = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + invalidGif + '">';
        return element.querySelector("area");
    }
};
var focusChildrenOfFocusableFlexbox = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", "-1");
        element.setAttribute("style", "display: -webkit-flex; display: -ms-flexbox; display: flex;");
        element.innerHTML = '<span style="display: block;">hello</span>';
        return element.querySelector("span");
    }
};
var focusFieldsetDisabled = {
    element: "fieldset",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", 0);
        element.setAttribute("disabled", "disabled");
    }
};
var focusFieldset = {
    element: "fieldset",
    mutate: function mutate(element) {
        element.innerHTML = "<legend>legend</legend><p>content</p>";
    }
};
var focusFlexboxContainer = {
    element: "span",
    mutate: function mutate(element) {
        element.setAttribute("style", "display: -webkit-flex; display: -ms-flexbox; display: flex;");
        element.innerHTML = '<span style="display: block;">hello</span>';
    }
};
var focusFormDisabled = {
    element: "form",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", 0);
        element.setAttribute("disabled", "disabled");
    }
};
var focusImgIsmap = {
    element: "a",
    mutate: function mutate(element) {
        element.href = "#void";
        element.innerHTML = '<img ismap src="' + gif + '" alt="">';
        return element.querySelector("img");
    }
};
var focusImgUsemapTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + gif + '">';
        return element.querySelector("img");
    }
};
var focusInHiddenIframe = {
    element: function element(wrapper, _document) {
        var iframe = _document.createElement("iframe");
        wrapper.appendChild(iframe);
        var iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.close();
        return iframe;
    },
    mutate: function mutate(iframe) {
        iframe.style.visibility = "hidden";
        var iframeDocument = iframe.contentWindow.document;
        var input = iframeDocument.createElement("input");
        iframeDocument.body.appendChild(input);
        return input;
    },
    validate: function validate(iframe) {
        var iframeDocument = iframe.contentWindow.document;
        var focus = iframeDocument.querySelector("input");
        return iframeDocument.activeElement === focus;
    }
};
var result = !platform.is.WEBKIT;
function focusInZeroDimensionObject() {
    return result;
}
var focusInvalidTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", "invalid-value");
    }
};
var focusLabelTabindex = {
    element: "label",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", "-1");
    },
    validate: function validate(element, focusTarget, _document) {
        var variableToPreventDeadCodeElimination = element.offsetHeight;
        element.focus();
        return _document.activeElement === element;
    }
};
var svg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb" + "G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ" + "zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==";
var focusObjectSvgHidden = {
    element: "object",
    mutate: function mutate(element) {
        element.setAttribute("type", "image/svg+xml");
        element.setAttribute("data", svg);
        element.setAttribute("width", "200");
        element.setAttribute("height", "50");
        element.style.visibility = "hidden";
    }
};
var focusObjectSvg = {
    name: "can-focus-object-svg",
    element: "object",
    mutate: function mutate(element) {
        element.setAttribute("type", "image/svg+xml");
        element.setAttribute("data", svg);
        element.setAttribute("width", "200");
        element.setAttribute("height", "50");
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            return true;
        }
        return _document.activeElement === element;
    }
};
var result$1 = !platform.is.IE9;
function focusObjectSwf() {
    return result$1;
}
var focusRedirectImgUsemap = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + gif + '">';
        return element.querySelector("img");
    },
    validate: function validate(element, focusTarget, _document) {
        var target = element.querySelector("area");
        return _document.activeElement === target;
    }
};
var focusRedirectLegend = {
    element: "fieldset",
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        var focusable = element.querySelector('input[tabindex="-1"]');
        var tabbable = element.querySelector('input[tabindex="0"]');
        element.focus();
        element.querySelector("legend").focus();
        return _document.activeElement === focusable && "focusable" || _document.activeElement === tabbable && "tabbable" || "";
    }
};
var focusScrollBody = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("style", "width: 100px; height: 50px; overflow: auto;");
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
        return element.querySelector("div");
    }
};
var focusScrollContainerWithoutOverflow = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("style", "width: 100px; height: 50px;");
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusScrollContainer = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("style", "width: 100px; height: 50px; overflow: auto;");
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusSummary = {
    element: "details",
    mutate: function mutate(element) {
        element.innerHTML = "<summary>foo</summary><p>content</p>";
        return element.firstElementChild;
    }
};
function makeFocusableForeignObject() {
    var foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.width.baseVal.value = 30;
    foreignObject.height.baseVal.value = 30;
    foreignObject.appendChild(document.createElement("input"));
    foreignObject.lastChild.type = "text";
    return foreignObject;
}
function focusSvgForeignObjectHack(element) {
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === "svg";
    if (!isSvgElement) {
        return false;
    }
    var foreignObject = makeFocusableForeignObject();
    element.appendChild(foreignObject);
    var input = foreignObject.querySelector("input");
    input.focus();
    input.disabled = true;
    element.removeChild(foreignObject);
    return true;
}
function generate(element) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element + "</svg>";
}
function focus(element) {
    if (element.focus) {
        return;
    }
    try {
        HTMLElement.prototype.focus.call(element);
    } catch (e) {
        focusSvgForeignObjectHack(element);
    }
}
function validate(element, focusTarget, _document) {
    focus(focusTarget);
    return _document.activeElement === focusTarget;
}
var focusSvgFocusableAttribute = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate('<text focusable="true">a</text>');
        return element.querySelector("text");
    },
    validate: validate
};
var focusSvgTabindexAttribute = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="0">a</text>');
        return element.querySelector("text");
    },
    validate: validate
};
var focusSvgNegativeTabindexAttribute = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="-1">a</text>');
        return element.querySelector("text");
    },
    validate: validate
};
var focusSvgUseTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate([
            '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
            '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'
        ].join(""));
        return element.querySelector("use");
    },
    validate: validate
};
var focusSvgForeignobjectTabindex = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
        return element.querySelector("foreignObject") || element.getElementsByTagName("foreignObject")[0];
    },
    validate: validate
};
var result$2 = Boolean(platform.is.GECKO && typeof SVGElement !== "undefined" && SVGElement.prototype.focus);
function focusSvgInIframe() {
    return result$2;
}
var focusSvg = {
    element: "div",
    mutate: function mutate(element) {
        element.innerHTML = generate("");
        return element.firstChild;
    },
    validate: validate
};
var focusTabindexTrailingCharacters = {
    element: "div",
    mutate: function mutate(element) {
        element.setAttribute("tabindex", "3x");
    }
};
var focusTable = {
    element: "table",
    mutate: function mutate(element, wrapper, _document) {
        var fragment = _document.createDocumentFragment();
        fragment.innerHTML = "<tr><td>cell</td></tr>";
        element.appendChild(fragment);
    }
};
var focusVideoWithoutControls = {
    element: "video",
    mutate: function mutate(element) {
        try {
            element.setAttribute("src", gif);
        } catch (e) {}
    }
};
var result$3 = platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE;
function tabsequenceAreaAtImgPosition() {
    return result$3;
}
var testCallbacks = {
    cssShadowPiercingDeepCombinator: cssShadowPiercingDeepCombinator,
    focusInZeroDimensionObject: focusInZeroDimensionObject,
    focusObjectSwf: focusObjectSwf,
    focusSvgInIframe: focusSvgInIframe,
    tabsequenceAreaAtImgPosition: tabsequenceAreaAtImgPosition
};
var testDescriptions = {
    focusAreaImgTabindex: focusAreaImgTabindex,
    focusAreaTabindex: focusAreaTabindex,
    focusAreaWithoutHref: focusAreaWithoutHref,
    focusAudioWithoutControls: focusAudioWithoutControls,
    focusBrokenImageMap: focusBrokenImageMap,
    focusChildrenOfFocusableFlexbox: focusChildrenOfFocusableFlexbox,
    focusFieldsetDisabled: focusFieldsetDisabled,
    focusFieldset: focusFieldset,
    focusFlexboxContainer: focusFlexboxContainer,
    focusFormDisabled: focusFormDisabled,
    focusImgIsmap: focusImgIsmap,
    focusImgUsemapTabindex: focusImgUsemapTabindex,
    focusInHiddenIframe: focusInHiddenIframe,
    focusInvalidTabindex: focusInvalidTabindex,
    focusLabelTabindex: focusLabelTabindex,
    focusObjectSvg: focusObjectSvg,
    focusObjectSvgHidden: focusObjectSvgHidden,
    focusRedirectImgUsemap: focusRedirectImgUsemap,
    focusRedirectLegend: focusRedirectLegend,
    focusScrollBody: focusScrollBody,
    focusScrollContainerWithoutOverflow: focusScrollContainerWithoutOverflow,
    focusScrollContainer: focusScrollContainer,
    focusSummary: focusSummary,
    focusSvgFocusableAttribute: focusSvgFocusableAttribute,
    focusSvgTabindexAttribute: focusSvgTabindexAttribute,
    focusSvgNegativeTabindexAttribute: focusSvgNegativeTabindexAttribute,
    focusSvgUseTabindex: focusSvgUseTabindex,
    focusSvgForeignobjectTabindex: focusSvgForeignobjectTabindex,
    focusSvg: focusSvg,
    focusTabindexTrailingCharacters: focusTabindexTrailingCharacters,
    focusTable: focusTable,
    focusVideoWithoutControls: focusVideoWithoutControls
};
function executeTests() {
    var results = detectFocus(testDescriptions);
    Object.keys(testCallbacks).forEach(function(key) {
        results[key] = testCallbacks[key]();
    });
    return results;
}
var supportsCache = null;
function _supports() {
    if (supportsCache) {
        return supportsCache;
    }
    supportsCache = cache$1.get();
    if (!supportsCache.time) {
        cache$1.set(executeTests());
        supportsCache = cache$1.get();
    }
    return supportsCache;
}
var supports = void 0;
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;
function isValidTabindex(context) {
    if (!supports) {
        supports = _supports();
    }
    var validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;
    var element = contextToElement({
        label: "is/valid-tabindex",
        resolveDocument: true,
        context: context
    });
    var hasTabindex = element.hasAttribute("tabindex");
    var hasTabIndex = element.hasAttribute("tabIndex");
    if (!hasTabindex && !hasTabIndex) {
        return false;
    }
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === "svg";
    if (isSvgElement && !supports.focusSvgTabindexAttribute) {
        return false;
    }
    if (supports.focusInvalidTabindex) {
        return true;
    }
    var tabindex = element.getAttribute(hasTabindex ? "tabindex" : "tabIndex");
    if (tabindex === "-32768") {
        return false;
    }
    return Boolean(tabindex && validIntegerPattern.test(tabindex));
}
function tabindexValue(element) {
    if (!isValidTabindex(element)) {
        return null;
    }
    var hasTabindex = element.hasAttribute("tabindex");
    var attributeName = hasTabindex ? "tabindex" : "tabIndex";
    var tabindex = parseInt(element.getAttribute(attributeName), 10);
    return isNaN(tabindex) ? -1 : tabindex;
}
function isUserModifyWritable(style) {
    var userModify = style.webkitUserModify || "";
    return Boolean(userModify && userModify.indexOf("write") !== -1);
}
function hasCssOverflowScroll(style) {
    return [
        style.getPropertyValue("overflow"),
        style.getPropertyValue("overflow-x"),
        style.getPropertyValue("overflow-y")
    ].some(function(overflow) {
        return overflow === "auto" || overflow === "scroll";
    });
}
function hasCssDisplayFlex(style) {
    return style.display.indexOf("flex") > -1;
}
function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
    if (nodeName !== "div" && nodeName !== "span") {
        return false;
    }
    if (parentNodeName && parentNodeName !== "div" && parentNodeName !== "span" && !hasCssOverflowScroll(parentStyle)) {
        return false;
    }
    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}
var supports$1 = void 0;
function isFocusRelevantRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false
    } : _ref$except;
    if (!supports$1) {
        supports$1 = _supports();
    }
    var element = contextToElement({
        label: "is/focus-relevant",
        resolveDocument: true,
        context: context
    });
    if (!except.shadow && element.shadowRoot) {
        return true;
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === "input" && element.type === "hidden") {
        return false;
    }
    if (nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea") {
        return true;
    }
    if (nodeName === "legend" && supports$1.focusRedirectLegend) {
        return true;
    }
    if (nodeName === "label") {
        return true;
    }
    if (nodeName === "area") {
        return true;
    }
    if (nodeName === "a" && element.hasAttribute("href")) {
        return true;
    }
    if (nodeName === "object" && element.hasAttribute("usemap")) {
        return false;
    }
    if (nodeName === "object") {
        var svgType = element.getAttribute("type");
        if (!supports$1.focusObjectSvg && svgType === "image/svg+xml") {
            return false;
        } else if (!supports$1.focusObjectSwf && svgType === "application/x-shockwave-flash") {
            return false;
        }
    }
    if (nodeName === "iframe" || nodeName === "object") {
        return true;
    }
    if (nodeName === "embed" || nodeName === "keygen") {
        return true;
    }
    if (element.hasAttribute("contenteditable")) {
        return true;
    }
    if (nodeName === "audio" && (supports$1.focusAudioWithoutControls || element.hasAttribute("controls"))) {
        return true;
    }
    if (nodeName === "video" && (supports$1.focusVideoWithoutControls || element.hasAttribute("controls"))) {
        return true;
    }
    if (supports$1.focusSummary && nodeName === "summary") {
        return true;
    }
    var validTabindex = isValidTabindex(element);
    if (nodeName === "img" && element.hasAttribute("usemap")) {
        return validTabindex && supports$1.focusImgUsemapTabindex || supports$1.focusRedirectImgUsemap;
    }
    if (supports$1.focusTable && (nodeName === "table" || nodeName === "td")) {
        return true;
    }
    if (supports$1.focusFieldset && nodeName === "fieldset") {
        return true;
    }
    var isSvgElement = nodeName === "svg";
    var isSvgContent = element.ownerSVGElement;
    var focusableAttribute = element.getAttribute("focusable");
    var tabindex = tabindexValue(element);
    if (nodeName === "use" && tabindex !== null && !supports$1.focusSvgUseTabindex) {
        return false;
    }
    if (nodeName === "foreignobject") {
        return tabindex !== null && supports$1.focusSvgForeignobjectTabindex;
    }
    if (elementMatches(element, "svg a") && element.hasAttribute("xlink:href")) {
        return true;
    }
    if ((isSvgElement || isSvgContent) && element.focus && !supports$1.focusSvgNegativeTabindexAttribute && tabindex < 0) {
        return false;
    }
    if (isSvgElement) {
        return validTabindex || supports$1.focusSvg || supports$1.focusSvgInIframe || Boolean(supports$1.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === "true");
    }
    if (isSvgContent) {
        if (supports$1.focusSvgTabindexAttribute && validTabindex) {
            return true;
        }
        if (supports$1.focusSvgFocusableAttribute) {
            return focusableAttribute === "true";
        }
    }
    if (validTabindex) {
        return true;
    }
    var style = window.getComputedStyle(element, null);
    if (isUserModifyWritable(style)) {
        return true;
    }
    if (supports$1.focusImgIsmap && nodeName === "img" && element.hasAttribute("ismap")) {
        var hasLinkParent = getParents({
            context: element
        }).some(function(parent) {
            return parent.nodeName.toLowerCase() === "a" && parent.hasAttribute("href");
        });
        if (hasLinkParent) {
            return true;
        }
    }
    if (!except.scrollable && supports$1.focusScrollContainer) {
        if (supports$1.focusScrollContainerWithoutOverflow) {
            if (isScrollableContainer(element, nodeName)) {
                return true;
            }
        } else if (hasCssOverflowScroll(style)) {
            return true;
        }
    }
    if (!except.flexbox && supports$1.focusFlexboxContainer && hasCssDisplayFlex(style)) {
        return true;
    }
    var parent = element.parentElement;
    if (!except.scrollable && parent) {
        var parentNodeName = parent.nodeName.toLowerCase();
        var parentStyle = window.getComputedStyle(parent, null);
        if (supports$1.focusScrollBody && isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
            return true;
        }
        if (supports$1.focusChildrenOfFocusableFlexbox) {
            if (hasCssDisplayFlex(parentStyle)) {
                return true;
            }
        }
    }
    return false;
}
isFocusRelevantRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusRelevant = function isFocusRelevant(context) {
        return isFocusRelevantRules({
            context: context,
            except: except
        });
    };
    isFocusRelevant.rules = isFocusRelevantRules;
    return isFocusRelevant;
};
var isFocusRelevant = isFocusRelevantRules.except({});
function findIndex(array, callback) {
    if (array.findIndex) {
        return array.findIndex(callback);
    }
    var length = array.length;
    if (length === 0) {
        return -1;
    }
    for(var i = 0; i < length; i++){
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
function getContentDocument(node) {
    try {
        return node.contentDocument || node.contentWindow && node.contentWindow.document || node.getSVGDocument && node.getSVGDocument() || null;
    } catch (e) {
        return null;
    }
}
function getWindow(node) {
    var _document = getDocument(node);
    return _document.defaultView || window;
}
var shadowPrefix = void 0;
function selectInShadows(selector) {
    if (typeof shadowPrefix !== "string") {
        var operator = cssShadowPiercingDeepCombinator();
        if (operator) {
            shadowPrefix = ", html " + operator + " ";
        }
    }
    if (!shadowPrefix) {
        return selector;
    }
    return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ",").split(",").join(shadowPrefix);
}
var selector = void 0;
function findDocumentHostElement(_window) {
    if (!selector) {
        selector = selectInShadows("object, iframe");
    }
    if (_window._frameElement !== undefined) {
        return _window._frameElement;
    }
    _window._frameElement = null;
    var potentialHosts = _window.parent.document.querySelectorAll(selector);
    [].some.call(potentialHosts, function(element) {
        var _document = getContentDocument(element);
        if (_document !== _window.document) {
            return false;
        }
        _window._frameElement = element;
        return true;
    });
    return _window._frameElement;
}
function getFrameElement(element) {
    var _window = getWindow(element);
    if (!_window.parent || _window.parent === _window) {
        return null;
    }
    try {
        return _window.frameElement || findDocumentHostElement(_window);
    } catch (e) {
        return null;
    }
}
var notRenderedElementsPattern = /^(area)$/;
function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
function notDisplayed(_path) {
    return _path.some(function(element) {
        return computedStyle(element, "display") === "none";
    });
}
function notVisible(_path) {
    var hidden = findIndex(_path, function(element) {
        var visibility = computedStyle(element, "visibility");
        return visibility === "hidden" || visibility === "collapse";
    });
    if (hidden === -1) {
        return false;
    }
    var visible = findIndex(_path, function(element) {
        return computedStyle(element, "visibility") === "visible";
    });
    if (visible === -1) {
        return true;
    }
    if (hidden < visible) {
        return true;
    }
    return false;
}
function collapsedParent(_path) {
    var offset = 1;
    if (_path[0].nodeName.toLowerCase() === "summary") {
        offset = 2;
    }
    return _path.slice(offset).some(function(element) {
        return element.nodeName.toLowerCase() === "details" && element.open === false;
    });
}
function isVisibleRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        notRendered: false,
        cssDisplay: false,
        cssVisibility: false,
        detailsElement: false,
        browsingContext: false
    } : _ref$except;
    var element = contextToElement({
        label: "is/visible",
        resolveDocument: true,
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
        return true;
    }
    var _path = getParents({
        context: element
    });
    var isAudioWithoutControls = nodeName === "audio" && !element.hasAttribute("controls");
    if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
        return false;
    }
    if (!except.cssVisibility && notVisible(_path)) {
        return false;
    }
    if (!except.detailsElement && collapsedParent(_path)) {
        return false;
    }
    if (!except.browsingContext) {
        var frameElement = getFrameElement(element);
        var _isVisible = isVisibleRules.except(except);
        if (frameElement && !_isVisible(frameElement)) {
            return false;
        }
    }
    return true;
}
isVisibleRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isVisible = function isVisible(context) {
        return isVisibleRules({
            context: context,
            except: except
        });
    };
    isVisible.rules = isVisibleRules;
    return isVisible;
};
var isVisible = isVisibleRules.except({});
function getMapByName(name, _document) {
    var map = _document.querySelector('map[name="' + (0, _cssescape.default)(name) + '"]');
    return map || null;
}
function getImageOfArea(element) {
    var map = element.parentElement;
    if (!map.name || map.nodeName.toLowerCase() !== "map") {
        return null;
    }
    var _document = getDocument(element);
    return _document.querySelector('img[usemap="#' + (0, _cssescape.default)(map.name) + '"]') || null;
}
var supports$2 = void 0;
function isValidArea(context) {
    if (!supports$2) {
        supports$2 = _supports();
    }
    var element = contextToElement({
        label: "is/valid-area",
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== "area") {
        return false;
    }
    var hasTabindex = element.hasAttribute("tabindex");
    if (!supports$2.focusAreaTabindex && hasTabindex) {
        return false;
    }
    var img = getImageOfArea(element);
    if (!img || !isVisible(img)) {
        return false;
    }
    if (!supports$2.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
        return false;
    }
    if (!supports$2.focusAreaWithoutHref && !element.href) {
        return supports$2.focusAreaTabindex && hasTabindex || supports$2.focusAreaImgTabindex && img.hasAttribute("tabindex");
    }
    var childOfInteractive = getParents({
        context: img
    }).slice(1).some(function(_element) {
        var name = _element.nodeName.toLowerCase();
        return name === "button" || name === "a";
    });
    if (childOfInteractive) {
        return false;
    }
    return true;
}
var supports$3 = void 0;
var disabledElementsPattern = void 0;
var disabledElements = {
    input: true,
    select: true,
    textarea: true,
    button: true,
    fieldset: true,
    form: true
};
function isNativeDisabledSupported(context) {
    if (!supports$3) {
        supports$3 = _supports();
        if (supports$3.focusFieldsetDisabled) {
            delete disabledElements.fieldset;
        }
        if (supports$3.focusFormDisabled) {
            delete disabledElements.form;
        }
        disabledElementsPattern = new RegExp("^(" + Object.keys(disabledElements).join("|") + ")$");
    }
    var element = contextToElement({
        label: "is/native-disabled-supported",
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
}
var supports$4 = void 0;
function isDisabledFieldset(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === "fieldset" && element.disabled;
}
function isDisabledForm(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === "form" && element.disabled;
}
function isDisabled(context) {
    if (!supports$4) {
        supports$4 = _supports();
    }
    var element = contextToElement({
        label: "is/disabled",
        context: context
    });
    if (element.hasAttribute("data-ally-disabled")) {
        return true;
    }
    if (!isNativeDisabledSupported(element)) {
        return false;
    }
    if (element.disabled) {
        return true;
    }
    var parents = getParents({
        context: element
    });
    if (parents.some(isDisabledFieldset)) {
        return true;
    }
    if (!supports$4.focusFormDisabled && parents.some(isDisabledForm)) {
        return true;
    }
    return false;
}
function isOnlyTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        onlyFocusableBrowsingContext: false,
        visible: false
    } : _ref$except;
    var element = contextToElement({
        label: "is/only-tabbable",
        resolveDocument: true,
        context: context
    });
    if (!except.visible && !isVisible(element)) {
        return false;
    }
    if (!except.onlyFocusableBrowsingContext && (platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE)) {
        var frameElement = getFrameElement(element);
        if (frameElement) {
            if (tabindexValue(frameElement) < 0) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var tabindex = tabindexValue(element);
    if (nodeName === "label" && platform.is.GECKO) {
        return tabindex !== null && tabindex >= 0;
    }
    if (platform.is.GECKO && element.ownerSVGElement && !element.focus) {
        if (nodeName === "a" && element.hasAttribute("xlink:href")) {
            if (platform.is.GECKO) {
                return true;
            }
        }
    }
    return false;
}
isOnlyTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isOnlyTabbable = function isOnlyTabbable(context) {
        return isOnlyTabbableRules({
            context: context,
            except: except
        });
    };
    isOnlyTabbable.rules = isOnlyTabbableRules;
    return isOnlyTabbable;
};
var isOnlyTabbable = isOnlyTabbableRules.except({});
var supports$5 = void 0;
function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === "embed" || nodeName === "keygen") {
        return true;
    }
    var _tabindex = tabindexValue(element);
    if (element.shadowRoot && _tabindex === null) {
        return true;
    }
    if (nodeName === "label") {
        return !supports$5.focusLabelTabindex || _tabindex === null;
    }
    if (nodeName === "legend") {
        return _tabindex === null;
    }
    if (supports$5.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === "svg")) {
        var focusableAttribute = element.getAttribute("focusable");
        return focusableAttribute && focusableAttribute === "false";
    }
    if (nodeName === "img" && element.hasAttribute("usemap")) {
        return _tabindex === null || !supports$5.focusImgUsemapTabindex;
    }
    if (nodeName === "area") {
        return !isValidArea(element);
    }
    return false;
}
function isFocusableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        disabled: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$5) {
        supports$5 = _supports();
    }
    var _isOnlyTabbable = isOnlyTabbable.rules.except({
        onlyFocusableBrowsingContext: true,
        visible: except.visible
    });
    var element = contextToElement({
        label: "is/focusable",
        resolveDocument: true,
        context: context
    });
    var focusRelevant = isFocusRelevant.rules({
        context: element,
        except: except
    });
    if (!focusRelevant || isOnlyFocusRelevant(element)) {
        return false;
    }
    if (!except.disabled && isDisabled(element)) {
        return false;
    }
    if (!except.onlyTabbable && _isOnlyTabbable(element)) {
        return false;
    }
    if (!except.visible) {
        var visibilityOptions = {
            context: element,
            except: {}
        };
        if (supports$5.focusInHiddenIframe) {
            visibilityOptions.except.browsingContext = true;
        }
        if (supports$5.focusObjectSvgHidden) {
            var _nodeName2 = element.nodeName.toLowerCase();
            if (_nodeName2 === "object") {
                visibilityOptions.except.cssVisibility = true;
            }
        }
        if (!isVisible.rules(visibilityOptions)) {
            return false;
        }
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        var _nodeName = frameElement.nodeName.toLowerCase();
        if (_nodeName === "object" && !supports$5.focusInZeroDimensionObject) {
            if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === "svg" && supports$5.focusSvgInIframe && !frameElement && element.getAttribute("tabindex") === null) {
        return false;
    }
    return true;
}
isFocusableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusable = function isFocusable(context) {
        return isFocusableRules({
            context: context,
            except: except
        });
    };
    isFocusable.rules = isFocusableRules;
    return isFocusable;
};
var isFocusable = isFocusableRules.except({});
function createFilter(condition) {
    var filter = function filter(node) {
        if (node.shadowRoot) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (condition(node)) {
            return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
    };
    filter.acceptNode = filter;
    return filter;
}
var PossiblyFocusableFilter = createFilter(isFocusRelevant);
function queryFocusableStrict() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!context) {
        context = document.documentElement;
    }
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var _document = getDocument(context);
    var walker = _document.createTreeWalker(context, NodeFilter.SHOW_ELEMENT, strategy === "all" ? PossiblyFocusableFilter : createFilter(_isFocusable), false);
    var list = [];
    while(walker.nextNode()){
        if (walker.currentNode.shadowRoot) {
            if (_isFocusable(walker.currentNode)) {
                list.push(walker.currentNode);
            }
            list = list.concat(queryFocusableStrict({
                context: walker.currentNode.shadowRoot,
                includeOnlyTabbable: includeOnlyTabbable,
                strategy: strategy
            }));
        } else {
            list.push(walker.currentNode);
        }
    }
    if (includeContext) {
        if (strategy === "all") {
            if (isFocusRelevant(context)) {
                list.unshift(context);
            }
        } else if (_isFocusable(context)) {
            list.unshift(context);
        }
    }
    return list;
}
var supports$6 = void 0;
var selector$1 = void 0;
function selector$2() {
    if (!supports$6) {
        supports$6 = _supports();
    }
    if (typeof selector$1 === "string") {
        return selector$1;
    }
    selector$1 = "" + (supports$6.focusTable ? "table, td," : "") + (supports$6.focusFieldset ? "fieldset," : "") + "svg a," + "a[href]," + "area[href]," + "input, select, textarea, button," + "iframe, object, embed," + "keygen," + (supports$6.focusAudioWithoutControls ? "audio," : "audio[controls],") + (supports$6.focusVideoWithoutControls ? "video," : "video[controls],") + (supports$6.focusSummary ? "summary," : "") + "[tabindex]," + "[contenteditable]";
    selector$1 = selectInShadows(selector$1);
    return selector$1;
}
function queryFocusableQuick() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable;
    var _selector = selector$2();
    var elements = context.querySelectorAll(_selector);
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var result = [].filter.call(elements, _isFocusable);
    if (includeContext && _isFocusable(context)) {
        result.unshift(context);
    }
    return result;
}
function queryFocusable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, _ref$strategy = _ref.strategy, strategy = _ref$strategy === undefined ? "quick" : _ref$strategy;
    var element = contextToElement({
        label: "query/focusable",
        resolveDocument: true,
        defaultToDocument: true,
        context: context
    });
    var options = {
        context: element,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    };
    if (strategy === "quick") {
        return queryFocusableQuick(options);
    } else if (strategy === "strict" || strategy === "all") {
        return queryFocusableStrict(options);
    }
    throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
}
var supports$7 = void 0;
var focusableElementsPattern = /^(fieldset|table|td|body)$/;
function isTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$7) {
        supports$7 = _supports();
    }
    var element = contextToElement({
        label: "is/tabbable",
        resolveDocument: true,
        context: context
    });
    if (platform.is.BLINK && platform.is.ANDROID && platform.majorVersion > 42) {
        return false;
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        if (platform.is.WEBKIT && platform.is.IOS) {
            return false;
        }
        if (tabindexValue(frameElement) < 0) {
            return false;
        }
        if (!except.visible && (platform.is.BLINK || platform.is.WEBKIT) && !isVisible(frameElement)) {
            return false;
        }
        var frameNodeName = frameElement.nodeName.toLowerCase();
        if (frameNodeName === "object") {
            var isFixedBlink = platform.name === "Chrome" && platform.majorVersion >= 54 || platform.name === "Opera" && platform.majorVersion >= 41;
            if (platform.is.WEBKIT || platform.is.BLINK && !isFixedBlink) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var _tabindex = tabindexValue(element);
    var tabindex = _tabindex === null ? null : _tabindex >= 0;
    if (platform.is.EDGE && platform.majorVersion >= 14 && frameElement && element.ownerSVGElement && _tabindex < 0) {
        return true;
    }
    var hasTabbableTabindexOrNone = tabindex !== false;
    var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;
    if (element.hasAttribute("contenteditable")) {
        return hasTabbableTabindexOrNone;
    }
    if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
        return false;
    }
    if (platform.is.WEBKIT && platform.is.IOS) {
        var potentiallyTabbable = nodeName === "input" && element.type === "text" || element.type === "password" || nodeName === "select" || nodeName === "textarea" || element.hasAttribute("contenteditable");
        if (!potentiallyTabbable) {
            var style = window.getComputedStyle(element, null);
            potentiallyTabbable = isUserModifyWritable(style);
        }
        if (!potentiallyTabbable) {
            return false;
        }
    }
    if (nodeName === "use" && _tabindex !== null) {
        if (platform.is.BLINK || platform.is.WEBKIT && platform.majorVersion === 9) {
            return true;
        }
    }
    if (elementMatches(element, "svg a") && element.hasAttribute("xlink:href")) {
        if (hasTabbableTabindexOrNone) {
            return true;
        }
        if (element.focus && !supports$7.focusSvgNegativeTabindexAttribute) {
            return true;
        }
    }
    if (nodeName === "svg" && supports$7.focusSvgInIframe && hasTabbableTabindexOrNone) {
        return true;
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === "svg") {
            if (supports$7.focusSvg) {
                return true;
            }
            return element.hasAttribute("focusable") || hasTabbableTabindex;
        }
        if (element.ownerSVGElement) {
            if (supports$7.focusSvgTabindexAttribute && hasTabbableTabindex) {
                return true;
            }
            return element.hasAttribute("focusable");
        }
    }
    if (element.tabIndex === undefined) {
        return Boolean(except.onlyTabbable);
    }
    if (nodeName === "audio") {
        if (!element.hasAttribute("controls")) {
            return false;
        } else if (platform.is.BLINK) {
            return true;
        }
    }
    if (nodeName === "video") {
        if (!element.hasAttribute("controls")) {
            if (platform.is.TRIDENT || platform.is.EDGE) {
                return false;
            }
        } else if (platform.is.BLINK || platform.is.GECKO) {
            return true;
        }
    }
    if (nodeName === "object") {
        if (platform.is.BLINK || platform.is.WEBKIT) {
            return false;
        }
    }
    if (nodeName === "iframe") {
        return false;
    }
    if (!except.scrollable && platform.is.GECKO) {
        var _style = window.getComputedStyle(element, null);
        if (hasCssOverflowScroll(_style)) {
            return hasTabbableTabindexOrNone;
        }
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === "area") {
            var img = getImageOfArea(element);
            if (img && tabindexValue(img) < 0) {
                return false;
            }
        }
        var _style2 = window.getComputedStyle(element, null);
        if (isUserModifyWritable(_style2)) {
            return element.tabIndex >= 0;
        }
        if (!except.flexbox && hasCssDisplayFlex(_style2)) {
            if (_tabindex !== null) {
                return hasTabbableTabindex;
            }
            return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
        }
        if (isScrollableContainer(element, nodeName)) {
            return false;
        }
        var parent = element.parentElement;
        if (parent) {
            var parentNodeName = parent.nodeName.toLowerCase();
            var parentStyle = window.getComputedStyle(parent, null);
            if (isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
                return false;
            }
            if (hasCssDisplayFlex(parentStyle)) {
                return hasTabbableTabindex;
            }
        }
    }
    return element.tabIndex >= 0;
}
isTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isTabbable = function isTabbable(context) {
        return isTabbableRules({
            context: context,
            except: except
        });
    };
    isTabbable.rules = isTabbableRules;
    return isTabbable;
};
var isFocusRelevantWithoutFlexbox = isFocusRelevant.rules.except({
    flexbox: true
});
var isTabbableWithoutFlexbox = isTabbableRules.except({
    flexbox: true
});
var isTabbable = isTabbableRules.except({});
function queryTabbable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    var _isTabbable = isTabbable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    return queryFocusable({
        context: context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    }).filter(_isTabbable);
}
function compareDomPosition(a, b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
function sortDomOrder(elements) {
    return elements.sort(compareDomPosition);
}
function getFirstSuccessorOffset(list, target) {
    return findIndex(list, function(element) {
        return target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING;
    });
}
function findInsertionOffsets(list, elements, resolveElement) {
    var insertions = [];
    elements.forEach(function(element) {
        var replace = true;
        var offset = list.indexOf(element);
        if (offset === -1) {
            offset = getFirstSuccessorOffset(list, element);
            replace = false;
        }
        if (offset === -1) {
            offset = list.length;
        }
        var injections = nodeArray(resolveElement ? resolveElement(element) : element);
        if (!injections.length) {
            return;
        }
        insertions.push({
            offset: offset,
            replace: replace,
            elements: injections
        });
    });
    return insertions;
}
function insertElementsAtOffsets(list, insertions) {
    var inserted = 0;
    insertions.sort(function(a, b) {
        return a.offset - b.offset;
    });
    insertions.forEach(function(insertion) {
        var remove = insertion.replace ? 1 : 0;
        var args = [
            insertion.offset + inserted,
            remove
        ].concat(insertion.elements);
        list.splice.apply(list, args);
        inserted += insertion.elements.length - remove;
    });
}
function mergeInDomOrder() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, list = _ref.list, elements = _ref.elements, resolveElement = _ref.resolveElement;
    var _list = list.slice(0);
    var _elements = nodeArray(elements).slice(0);
    sortDomOrder(_elements);
    var insertions = findInsertionOffsets(_list, _elements, resolveElement);
    insertElementsAtOffsets(_list, insertions);
    return _list;
}
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Maps = function() {
    function Maps(context) {
        _classCallCheck(this, Maps);
        this._document = getDocument(context);
        this.maps = {};
    }
    _createClass(Maps, [
        {
            key: "getAreasFor",
            value: function getAreasFor(name) {
                if (!this.maps[name]) {
                    this.addMapByName(name);
                }
                return this.maps[name];
            }
        },
        {
            key: "addMapByName",
            value: function addMapByName(name) {
                var map = getMapByName(name, this._document);
                if (!map) {
                    return;
                }
                this.maps[map.name] = queryTabbable({
                    context: map
                });
            }
        },
        {
            key: "extractAreasFromList",
            value: function extractAreasFromList(elements) {
                return elements.filter(function(element) {
                    var nodeName = element.nodeName.toLowerCase();
                    if (nodeName !== "area") {
                        return true;
                    }
                    var map = element.parentNode;
                    if (!this.maps[map.name]) {
                        this.maps[map.name] = [];
                    }
                    this.maps[map.name].push(element);
                    return false;
                }, this);
            }
        }
    ]);
    return Maps;
}();
function sortArea(elements, context) {
    var usemaps = context.querySelectorAll("img[usemap]");
    var maps = new Maps(context);
    var _elements = maps.extractAreasFromList(elements);
    if (!usemaps.length) {
        return _elements;
    }
    return mergeInDomOrder({
        list: _elements,
        elements: usemaps,
        resolveElement: function resolveElement(image) {
            var name = image.getAttribute("usemap").slice(1);
            return maps.getAreasFor(name);
        }
    });
}
var _createClass$1 = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Shadows = function() {
    function Shadows(context, sortElements) {
        _classCallCheck$1(this, Shadows);
        this.context = context;
        this.sortElements = sortElements;
        this.hostCounter = 1;
        this.inHost = {};
        this.inDocument = [];
        this.hosts = {};
        this.elements = {};
    }
    _createClass$1(Shadows, [
        {
            key: "_registerHost",
            value: function _registerHost(host) {
                if (host._sortingId) {
                    return;
                }
                host._sortingId = "shadow-" + this.hostCounter++;
                this.hosts[host._sortingId] = host;
                var parentHost = getShadowHost({
                    context: host
                });
                if (parentHost) {
                    this._registerHost(parentHost);
                    this._registerHostParent(host, parentHost);
                } else {
                    this.inDocument.push(host);
                }
            }
        },
        {
            key: "_registerHostParent",
            value: function _registerHostParent(host, parent) {
                if (!this.inHost[parent._sortingId]) {
                    this.inHost[parent._sortingId] = [];
                }
                this.inHost[parent._sortingId].push(host);
            }
        },
        {
            key: "_registerElement",
            value: function _registerElement(element, host) {
                if (!this.elements[host._sortingId]) {
                    this.elements[host._sortingId] = [];
                }
                this.elements[host._sortingId].push(element);
            }
        },
        {
            key: "extractElements",
            value: function extractElements(elements) {
                return elements.filter(function(element) {
                    var host = getShadowHost({
                        context: element
                    });
                    if (!host) {
                        return true;
                    }
                    this._registerHost(host);
                    this._registerElement(element, host);
                    return false;
                }, this);
            }
        },
        {
            key: "sort",
            value: function sort(elements) {
                var _elements = this._injectHosts(elements);
                _elements = this._replaceHosts(_elements);
                this._cleanup();
                return _elements;
            }
        },
        {
            key: "_injectHosts",
            value: function _injectHosts(elements) {
                Object.keys(this.hosts).forEach(function(_sortingId) {
                    var _list = this.elements[_sortingId];
                    var _elements = this.inHost[_sortingId];
                    var _context = this.hosts[_sortingId].shadowRoot;
                    this.elements[_sortingId] = this._merge(_list, _elements, _context);
                }, this);
                return this._merge(elements, this.inDocument, this.context);
            }
        },
        {
            key: "_merge",
            value: function _merge(list, elements, context) {
                var merged = mergeInDomOrder({
                    list: list,
                    elements: elements
                });
                return this.sortElements(merged, context);
            }
        },
        {
            key: "_replaceHosts",
            value: function _replaceHosts(elements) {
                return mergeInDomOrder({
                    list: elements,
                    elements: this.inDocument,
                    resolveElement: this._resolveHostElement.bind(this)
                });
            }
        },
        {
            key: "_resolveHostElement",
            value: function _resolveHostElement(host) {
                var merged = mergeInDomOrder({
                    list: this.elements[host._sortingId],
                    elements: this.inHost[host._sortingId],
                    resolveElement: this._resolveHostElement.bind(this)
                });
                var _tabindex = tabindexValue(host);
                if (_tabindex !== null && _tabindex > -1) {
                    return [
                        host
                    ].concat(merged);
                }
                return merged;
            }
        },
        {
            key: "_cleanup",
            value: function _cleanup() {
                Object.keys(this.hosts).forEach(function(key) {
                    delete this.hosts[key]._sortingId;
                }, this);
            }
        }
    ]);
    return Shadows;
}();
function sortShadowed(elements, context, sortElements) {
    var shadows = new Shadows(context, sortElements);
    var _elements = shadows.extractElements(elements);
    if (_elements.length === elements.length) {
        return sortElements(elements);
    }
    return shadows.sort(_elements);
}
function sortTabindex(elements) {
    var map = {};
    var indexes = [];
    var normal = elements.filter(function(element) {
        var tabIndex = element.tabIndex;
        if (tabIndex === undefined) {
            tabIndex = tabindexValue(element);
        }
        if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
            return true;
        }
        if (!map[tabIndex]) {
            map[tabIndex] = [];
            indexes.push(tabIndex);
        }
        map[tabIndex].push(element);
        return false;
    });
    var _elements = indexes.sort().map(function(tabIndex) {
        return map[tabIndex];
    }).reduceRight(function(previous, current) {
        return current.concat(previous);
    }, normal);
    return _elements;
}
var supports$8 = void 0;
function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
        var tmp = elements.splice(pos, 1);
        return tmp.concat(elements);
    }
    return elements;
}
function sortElements(elements, _context) {
    if (supports$8.tabsequenceAreaAtImgPosition) {
        elements = sortArea(elements, _context);
    }
    elements = sortTabindex(elements);
    return elements;
}
function queryTabsequence() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!supports$8) {
        supports$8 = _supports();
    }
    var _context = nodeArray(context)[0] || document.documentElement;
    var elements = queryTabbable({
        context: _context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    });
    if (document.body.createShadowRoot && platform.is.BLINK) {
        elements = sortShadowed(elements, _context, sortElements);
    } else {
        elements = sortElements(elements, _context);
    }
    if (includeContext) {
        elements = moveContextToBeginning(elements, _context);
    }
    return elements;
}
var keycode = {
    tab: 9,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    "page-up": 33,
    pageDown: 34,
    "page-down": 34,
    end: 35,
    home: 36,
    enter: 13,
    escape: 27,
    space: 32,
    shift: 16,
    capsLock: 20,
    "caps-lock": 20,
    ctrl: 17,
    alt: 18,
    meta: 91,
    pause: 19,
    insert: 45,
    delete: 46,
    backspace: 8,
    _alias: {
        91: [
            92,
            93,
            224
        ]
    }
};
for(var n = 1; n < 26; n++){
    keycode["f" + n] = n + 111;
}
for(var _n = 0; _n < 10; _n++){
    var code = _n + 48;
    var numCode = _n + 96;
    keycode[_n] = code;
    keycode["num-" + _n] = numCode;
    keycode._alias[code] = [
        numCode
    ];
}
for(var _n2 = 0; _n2 < 26; _n2++){
    var _code = _n2 + 65;
    var name$1 = String.fromCharCode(_code).toLowerCase();
    keycode[name$1] = _code;
}
var modifier = {
    alt: "altKey",
    ctrl: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
};
var modifierSequence = Object.keys(modifier).map(function(name) {
    return modifier[name];
});
function createExpectedModifiers(ignoreModifiers) {
    var value = ignoreModifiers ? null : false;
    return {
        altKey: value,
        ctrlKey: value,
        metaKey: value,
        shiftKey: value
    };
}
function resolveModifiers(modifiers) {
    var ignoreModifiers = modifiers.indexOf("*") !== -1;
    var expected = createExpectedModifiers(ignoreModifiers);
    modifiers.forEach(function(token) {
        if (token === "*") {
            return;
        }
        var value = true;
        var operator = token.slice(0, 1);
        if (operator === "?") {
            value = null;
        } else if (operator === "!") {
            value = false;
        }
        if (value !== true) {
            token = token.slice(1);
        }
        var propertyName = modifier[token];
        if (!propertyName) {
            throw new TypeError('Unknown modifier "' + token + '"');
        }
        expected[propertyName] = value;
    });
    return expected;
}
function resolveKey(key) {
    var code = keycode[key] || parseInt(key, 10);
    if (!code || typeof code !== "number" || isNaN(code)) {
        throw new TypeError('Unknown key "' + key + '"');
    }
    return [
        code
    ].concat(keycode._alias[code] || []);
}
function matchModifiers(expected, event) {
    return !modifierSequence.some(function(prop) {
        return typeof expected[prop] === "boolean" && Boolean(event[prop]) !== expected[prop];
    });
}
function keyBinding(text) {
    return text.split(/\s+/).map(function(_text) {
        var tokens = _text.split("+");
        var _modifiers = resolveModifiers(tokens.slice(0, -1));
        var _keyCodes = resolveKey(tokens.slice(-1));
        return {
            keyCodes: _keyCodes,
            modifiers: _modifiers,
            matchModifiers: matchModifiers.bind(null, _modifiers)
        };
    });
}
function getParentComparator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, parent = _ref.parent, element = _ref.element, includeSelf = _ref.includeSelf;
    if (parent) {
        return function isChildOf(node) {
            return Boolean(includeSelf && node === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    } else if (element) {
        return function isParentOf(node) {
            return Boolean(includeSelf && element === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    }
    throw new TypeError("util/compare-position#getParentComparator required either options.parent or options.element");
}
function whenKey() {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var bindings = {};
    var context = nodeArray(map.context)[0] || document.documentElement;
    delete map.context;
    var filter = nodeArray(map.filter);
    delete map.filter;
    var mapKeys = Object.keys(map);
    if (!mapKeys.length) {
        throw new TypeError("when/key requires at least one option key");
    }
    var registerBinding = function registerBinding(event) {
        event.keyCodes.forEach(function(code) {
            if (!bindings[code]) {
                bindings[code] = [];
            }
            bindings[code].push(event);
        });
    };
    mapKeys.forEach(function(text) {
        if (typeof map[text] !== "function") {
            throw new TypeError('when/key requires option["' + text + '"] to be a function');
        }
        var addCallback = function addCallback(event) {
            event.callback = map[text];
            return event;
        };
        keyBinding(text).map(addCallback).forEach(registerBinding);
    });
    var handleKeyDown = function handleKeyDown(event) {
        if (event.defaultPrevented) {
            return;
        }
        if (filter.length) {
            var isParentOfElement = getParentComparator({
                element: event.target,
                includeSelf: true
            });
            if (filter.some(isParentOfElement)) {
                return;
            }
        }
        var key = event.keyCode || event.which;
        if (!bindings[key]) {
            return;
        }
        bindings[key].forEach(function(_event) {
            if (!_event.matchModifiers(event)) {
                return;
            }
            _event.callback.call(context, event, disengage);
        });
    };
    context.addEventListener("keydown", handleKeyDown, false);
    var disengage = function disengage() {
        context.removeEventListener("keydown", handleKeyDown, false);
    };
    return {
        disengage: disengage
    };
}
function _default(param) {
    let { context } = param === void 0 ? {} : param;
    if (!context) {
        context = document.documentElement;
    }
    queryTabsequence();
    return whenKey({
        "?alt+?shift+tab": function altShiftTab(event) {
            event.preventDefault();
            var sequence = queryTabsequence({
                context: context
            });
            var backward = event.shiftKey;
            var first = sequence[0];
            var last = sequence[sequence.length - 1];
            var source = backward ? first : last;
            var target = backward ? last : first;
            if (isActiveElement(source)) {
                target.focus();
                return;
            }
            var currentIndex = void 0;
            var found = sequence.some(function(element, index) {
                if (!isActiveElement(element)) {
                    return false;
                }
                currentIndex = index;
                return true;
            });
            if (!found) {
                first.focus();
                return;
            }
            var offset = backward ? -1 : 1;
            sequence[currentIndex + offset].focus();
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return Overlay;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _maintaintabfocus = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js (ecmascript, ssr)"));
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _bodylocker = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js (ecmascript, ssr)");
const Overlay = function Overlay(param) {
    let { className, children, fixed } = param;
    _react.useEffect(()=>{
        (0, _bodylocker.lock)();
        return ()=>{
            (0, _bodylocker.unlock)();
        };
    }, []);
    const [overlay, setOverlay] = _react.useState(null);
    const onOverlay = _react.useCallback((el)=>{
        setOverlay(el);
    }, []);
    _react.useEffect(()=>{
        if (overlay == null) {
            return;
        }
        const handle2 = (0, _maintaintabfocus.default)({
            context: overlay
        });
        return ()=>{
            handle2.disengage();
        };
    }, [
        overlay
    ]);
    return _react.createElement("div", {
        "data-nextjs-dialog-overlay": true,
        className: className,
        ref: onOverlay
    }, _react.createElement("div", {
        "data-nextjs-dialog-backdrop": true,
        "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined
    }), children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return _Overlay.Overlay;
    }
});
const _Overlay = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog-left-right] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-nextjs-dialog-left-right] > nav {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    margin-right: var(--size-gap);\n  }\n  [data-nextjs-dialog-left-right] > nav > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: calc(var(--size-gap-double) + var(--size-gap));\n    height: calc(var(--size-gap-double) + var(--size-gap));\n    font-size: 0;\n    border: none;\n    background-color: rgba(255, 85, 85, 0.1);\n    color: var(--color-ansi-red);\n    cursor: pointer;\n    transition: background-color 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > nav > button > svg {\n    width: auto;\n    height: calc(var(--size-gap) + var(--size-gap-half));\n  }\n  [data-nextjs-dialog-left-right] > nav > button:hover {\n    background-color: rgba(255, 85, 85, 0.2);\n  }\n  [data-nextjs-dialog-left-right] > nav > button:disabled {\n    background-color: rgba(255, 85, 85, 0.1);\n    color: rgba(255, 85, 85, 0.4);\n    cursor: not-allowed;\n  }\n\n  [data-nextjs-dialog-left-right] > nav > button:first-of-type {\n    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);\n    margin-right: 1px;\n  }\n  [data-nextjs-dialog-left-right] > nav > button:last-of-type {\n    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;\n  }\n\n  [data-nextjs-dialog-left-right] > button:last-of-type {\n    border: 0;\n    padding: 0;\n\n    background-color: transparent;\n    appearance: none;\n\n    opacity: 0.4;\n    transition: opacity 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > button:last-of-type:hover {\n    opacity: 0.7;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeftRightDialogHeader", {
    enumerable: true,
    get: function() {
        return LeftRightDialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _CloseIcon = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js (ecmascript, ssr)");
const LeftRightDialogHeader = function LeftRightDialogHeader(param) {
    let { children, className, previous, next, close } = param;
    const buttonLeft = _react.useRef(null);
    const buttonRight = _react.useRef(null);
    const buttonClose = _react.useRef(null);
    const [nav, setNav] = _react.useState(null);
    const onNav = _react.useCallback((el)=>{
        setNav(el);
    }, []);
    _react.useEffect(()=>{
        if (nav == null) {
            return;
        }
        const root = nav.getRootNode();
        const d = self.document;
        function handler(e) {
            if (e.key === "ArrowLeft") {
                e.stopPropagation();
                if (buttonLeft.current) {
                    buttonLeft.current.focus();
                }
                previous && previous();
            } else if (e.key === "ArrowRight") {
                e.stopPropagation();
                if (buttonRight.current) {
                    buttonRight.current.focus();
                }
                next && next();
            } else if (e.key === "Escape") {
                e.stopPropagation();
                if (root instanceof ShadowRoot) {
                    const a = root.activeElement;
                    if (a && a !== buttonClose.current && a instanceof HTMLElement) {
                        a.blur();
                        return;
                    }
                }
                if (close) {
                    close();
                }
            }
        }
        root.addEventListener("keydown", handler);
        if (root !== d) {
            d.addEventListener("keydown", handler);
        }
        return function() {
            root.removeEventListener("keydown", handler);
            if (root !== d) {
                d.removeEventListener("keydown", handler);
            }
        };
    }, [
        close,
        nav,
        next,
        previous
    ]);
    _react.useEffect(()=>{
        if (nav == null) {
            return;
        }
        const root = nav.getRootNode();
        if (root instanceof ShadowRoot) {
            const a = root.activeElement;
            if (previous == null) {
                if (buttonLeft.current && a === buttonLeft.current) {
                    buttonLeft.current.blur();
                }
            } else if (next == null) {
                if (buttonRight.current && a === buttonRight.current) {
                    buttonRight.current.blur();
                }
            }
        }
    }, [
        nav,
        next,
        previous
    ]);
    return _react.createElement("div", {
        "data-nextjs-dialog-left-right": true,
        className: className
    }, _react.createElement("nav", {
        ref: onNav
    }, _react.createElement("button", {
        ref: buttonLeft,
        type: "button",
        disabled: previous == null ? true : undefined,
        "aria-disabled": previous == null ? true : undefined,
        onClick: previous != null ? previous : undefined
    }, _react.createElement("svg", {
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, _react.createElement("title", null, "previous"), _react.createElement("path", {
        d: "M6.99996 1.16666L1.16663 6.99999L6.99996 12.8333M12.8333 6.99999H1.99996H12.8333Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), _react.createElement("button", {
        ref: buttonRight,
        type: "button",
        disabled: next == null ? true : undefined,
        "aria-disabled": next == null ? true : undefined,
        onClick: next != null ? next : undefined
    }, _react.createElement("svg", {
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, _react.createElement("title", null, "next"), _react.createElement("path", {
        d: "M6.99996 1.16666L12.8333 6.99999L6.99996 12.8333M1.16663 6.99999H12H1.16663Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), "\xa0", children), close ? _react.createElement("button", {
        "data-nextjs-errors-dialog-left-right-close-button": true,
        ref: buttonClose,
        type: "button",
        onClick: close,
        "aria-label": "Close"
    }, _react.createElement("span", {
        "aria-hidden": "true"
    }, _react.createElement(_CloseIcon.CloseIcon, null))) : null);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LeftRightDialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LeftRightDialogHeader: function() {
        return _LeftRightDialogHeader.LeftRightDialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _LeftRightDialogHeader = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js (ecmascript, ssr)");
const _styles = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    background: white;\n    border-radius: var(--size-gap);\n    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)\n      rgba(0, 0, 0, 0.25);\n    max-height: calc(100% - 56px);\n    overflow-y: hidden;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      max-height: calc(100% - 15px);\n    }\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog] {\n      max-width: 540px;\n      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog] {\n      max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog] {\n      max-width: 960px;\n    }\n  }\n\n  [data-nextjs-dialog-banner] {\n    position: relative;\n  }\n  [data-nextjs-dialog-banner].banner-warning {\n    border-color: var(--color-ansi-yellow);\n  }\n  [data-nextjs-dialog-banner].banner-error {\n    border-color: var(--color-ansi-red);\n  }\n\n  [data-nextjs-dialog-banner]::after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    /* banner width: */\n    border-top-width: var(--size-gap-half);\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: inherit;\n    border-bottom-color: transparent;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    /* calc(padding + banner width offset) */\n    padding: calc(var(--size-gap-double) + var(--size-gap-half))\n      var(--size-gap-double);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogHeader", {
    enumerable: true,
    get: function() {
        return DialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const DialogHeader = function DialogHeader(param) {
    let { children, className } = param;
    return _react.createElement("div", {
        "data-nextjs-dialog-header": true,
        className: className
    }, children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogContent", {
    enumerable: true,
    get: function() {
        return DialogContent;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const DialogContent = function DialogContent(param) {
    let { children, className } = param;
    return _react.createElement("div", {
        "data-nextjs-dialog-content": true,
        className: className
    }, children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogBody", {
    enumerable: true,
    get: function() {
        return DialogBody;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const DialogBody = function DialogBody(param) {
    let { children, className } = param;
    return _react.createElement("div", {
        "data-nextjs-dialog-body": true,
        className: className
    }, children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOnClickOutside", {
    enumerable: true,
    get: function() {
        return useOnClickOutside;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
function useOnClickOutside(el, handler) {
    _react.useEffect(()=>{
        if (el == null || handler == null) {
            return;
        }
        const listener = (e)=>{
            if (!el || el.contains(e.target)) {
                return;
            }
            handler(e);
        };
        const root = el.getRootNode();
        root.addEventListener("mousedown", listener);
        root.addEventListener("touchstart", listener);
        return function() {
            root.removeEventListener("mousedown", listener);
            root.removeEventListener("touchstart", listener);
        };
    }, [
        handler,
        el
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Dialog", {
    enumerable: true,
    get: function() {
        return Dialog;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _useonclickoutside = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js (ecmascript, ssr)");
const Dialog = function Dialog(param) {
    let { children, type, onClose, ...props } = param;
    const [dialog, setDialog] = _react.useState(null);
    const onDialog = _react.useCallback((node)=>{
        setDialog(node);
    }, []);
    (0, _useonclickoutside.useOnClickOutside)(dialog, onClose);
    _react.useEffect(()=>{
        if (dialog == null) {
            return;
        }
        const root = dialog.getRootNode();
        if (!(root instanceof ShadowRoot)) {
            return;
        }
        const shadowRoot = root;
        function handler(e) {
            const el = shadowRoot.activeElement;
            if (e.key === "Enter" && el instanceof HTMLElement && el.getAttribute("role") === "link") {
                e.preventDefault();
                e.stopPropagation();
                el.click();
            }
        }
        shadowRoot.addEventListener("keydown", handler);
        return ()=>shadowRoot.removeEventListener("keydown", handler);
    }, [
        dialog
    ]);
    return _react.createElement("div", {
        ref: onDialog,
        "data-nextjs-dialog": true,
        tabIndex: -1,
        role: "dialog",
        "aria-labelledby": props["aria-labelledby"],
        "aria-describedby": props["aria-describedby"],
        "aria-modal": "true"
    }, _react.createElement("div", {
        "data-nextjs-dialog-banner": true,
        className: "banner-" + type
    }), children);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Dialog: null,
    DialogBody: null,
    DialogContent: null,
    DialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Dialog: function() {
        return _Dialog.Dialog;
    },
    DialogBody: function() {
        return _DialogBody.DialogBody;
    },
    DialogContent: function() {
        return _DialogContent.DialogContent;
    },
    DialogHeader: function() {
        return _DialogHeader.DialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _Dialog = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js (ecmascript, ssr)");
const _DialogBody = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js (ecmascript, ssr)");
const _DialogContent = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js (ecmascript, ssr)");
const _DialogHeader = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js (ecmascript, ssr)");
const _styles = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Errors: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Errors: function() {
        return Errors;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _erroroverlayreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)");
const _Dialog = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)");
const _LeftRightDialogHeader = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js (ecmascript, ssr)");
const _Overlay = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js (ecmascript, ssr)");
const _Toast = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js (ecmascript, ssr)");
const _getErrorByType = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/getErrorByType.js (ecmascript, ssr)");
const _nodeStackFrames = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const _CloseIcon = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js (ecmascript, ssr)");
const _RuntimeError = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js (ecmascript, ssr)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js (ecmascript, ssr)");
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: 0;\n    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > p {\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    font-weight: bold;\n    margin: 0;\n    margin-top: var(--size-gap-half);\n    color: var(--color-ansi-red);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n  .nextjs-container-errors-header > p > a {\n    color: var(--color-ansi-red);\n  }\n\n  .nextjs-container-errors-body > h2:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h2 {\n    margin-bottom: var(--size-gap);\n    font-size: var(--size-font-big);\n  }\n\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n  .nextjs-toast-errors-hide-button {\n    margin-left: var(--size-gap-triple);\n    border: none;\n    background: none;\n    color: var(--color-ansi-bright-white);\n    padding: 0;\n    transition: opacity 0.25s ease;\n    opacity: 0.7;\n  }\n  .nextjs-toast-errors-hide-button:hover {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function getErrorSignature(ev) {
    const { event } = ev;
    switch(event.type){
        case _erroroverlayreducer.ACTION_UNHANDLED_ERROR:
        case _erroroverlayreducer.ACTION_UNHANDLED_REJECTION:
            {
                return event.reason.name + "::" + event.reason.message + "::" + event.reason.stack;
            }
        default:
            {}
    }
    const _ = event;
    return "";
}
const Errors = function Errors(param) {
    let { errors, initialDisplayState, versionInfo } = param;
    const [lookups, setLookups] = _react.useState({});
    const [readyErrors, nextError] = _react.useMemo(()=>{
        let ready = [];
        let next = null;
        for(let idx = 0; idx < errors.length; ++idx){
            const e = errors[idx];
            const { id } = e;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            if (idx > 0) {
                const prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [
            ready,
            next
        ];
    }, [
        errors,
        lookups
    ]);
    const isLoading = _react.useMemo(()=>{
        return readyErrors.length < 1 && Boolean(errors.length);
    }, [
        errors.length,
        readyErrors.length
    ]);
    _react.useEffect(()=>{
        if (nextError == null) {
            return;
        }
        let mounted = true;
        (0, _getErrorByType.getErrorByType)(nextError).then((resolved)=>{
            if (mounted) {
                setLookups((m)=>({
                        ...m,
                        [resolved.id]: resolved
                    }));
            }
        }, ()=>{});
        return ()=>{
            mounted = false;
        };
    }, [
        nextError
    ]);
    const [displayState, setDisplayState] = _react.useState(initialDisplayState);
    const [activeIdx, setActiveIndex] = _react.useState(0);
    const previous = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setActiveIndex((v)=>Math.max(0, v - 1));
    }, []);
    const next = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setActiveIndex((v)=>Math.max(0, Math.min(readyErrors.length - 1, v + 1)));
    }, [
        readyErrors.length
    ]);
    var _readyErrors_activeIdx;
    const activeError = _react.useMemo(()=>(_readyErrors_activeIdx = readyErrors[activeIdx]) != null ? _readyErrors_activeIdx : null, [
        activeIdx,
        readyErrors
    ]);
    _react.useEffect(()=>{
        if (errors.length < 1) {
            setLookups({});
            setDisplayState("hidden");
            setActiveIndex(0);
        }
    }, [
        errors.length
    ]);
    const minimize = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState("minimized");
    }, []);
    const hide = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState("hidden");
    }, []);
    const fullscreen = _react.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState("fullscreen");
    }, []);
    if (errors.length < 1 || activeError == null) {
        return null;
    }
    if (isLoading) {
        return _react.createElement(_Overlay.Overlay, null);
    }
    if (displayState === "hidden") {
        return null;
    }
    if (displayState === "minimized") {
        return _react.createElement(_Toast.Toast, {
            className: "nextjs-toast-errors-parent",
            onClick: fullscreen
        }, _react.createElement("div", {
            className: "nextjs-toast-errors"
        }, _react.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, _react.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }), _react.createElement("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
        }), _react.createElement("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
        })), _react.createElement("span", null, readyErrors.length, " error", readyErrors.length > 1 ? "s" : ""), _react.createElement("button", {
            "data-nextjs-toast-errors-hide-button": true,
            className: "nextjs-toast-errors-hide-button",
            type: "button",
            onClick: (e)=>{
                e.stopPropagation();
                hide();
            },
            "aria-label": "Hide Errors"
        }, _react.createElement(_CloseIcon.CloseIcon, null))));
    }
    const isServerError = [
        "server",
        "edge-server"
    ].includes((0, _nodeStackFrames.getErrorSource)(activeError.error) || "");
    return _react.createElement(_Overlay.Overlay, null, _react.createElement(_Dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_errors_label",
        "aria-describedby": "nextjs__container_errors_desc",
        onClose: isServerError ? undefined : minimize
    }, _react.createElement(_Dialog.DialogContent, null, _react.createElement(_Dialog.DialogHeader, {
        className: "nextjs-container-errors-header"
    }, _react.createElement(_LeftRightDialogHeader.LeftRightDialogHeader, {
        previous: activeIdx > 0 ? previous : null,
        next: activeIdx < readyErrors.length - 1 ? next : null,
        close: isServerError ? undefined : minimize
    }, _react.createElement("small", null, _react.createElement("span", null, activeIdx + 1), " of", " ", _react.createElement("span", null, readyErrors.length), " unhandled error", readyErrors.length < 2 ? "" : "s"), versionInfo ? _react.createElement(_VersionStalenessInfo.VersionStalenessInfo, versionInfo) : null), _react.createElement("h1", {
        id: "nextjs__container_errors_label"
    }, isServerError ? "Server Error" : "Unhandled Runtime Error"), _react.createElement("p", {
        id: "nextjs__container_errors_desc"
    }, activeError.error.name, ":", " ", _react.createElement(_hotlinkedtext.HotlinkedText, {
        text: activeError.error.message
    })), isServerError ? _react.createElement("div", null, _react.createElement("small", null, "This error happened while generating the page. Any console logs will be displayed in the terminal window.")) : undefined), _react.createElement(_Dialog.DialogBody, {
        className: "nextjs-container-errors-body"
    }, _react.createElement(_RuntimeError.RuntimeError, {
        key: activeError.id.toString(),
        error: activeError
    })))));
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EditorLink", {
    enumerable: true,
    get: function() {
        return EditorLink;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _useopenineditor = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js (ecmascript, ssr)");
function EditorLink(param) {
    let { file, isSourceFile, location } = param;
    var _location_line, _location_column;
    const open = (0, _useopenineditor.useOpenInEditor)({
        file,
        lineNumber: (_location_line = location == null ? void 0 : location.line) != null ? _location_line : 1,
        column: (_location_column = location == null ? void 0 : location.column) != null ? _location_column : 0
    });
    return _react.default.createElement("div", {
        "data-with-open-in-editor-link": true,
        "data-with-open-in-editor-link-source-file": isSourceFile ? true : undefined,
        "data-with-open-in-editor-link-import-trace": isSourceFile ? undefined : true,
        tabIndex: 10,
        role: "link",
        onClick: open,
        title: "Click to open in your editor"
    }, file, location ? " (" + location.line + ":" + location.column + ")" : null, _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, _react.default.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), _react.default.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), _react.default.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    })));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return Terminal;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _anser = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/anser/index.js (ecmascript, ssr)"));
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js (ecmascript, ssr)");
const _EditorLink = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink.js (ecmascript, ssr)");
function getFile(lines) {
    const contentFileName = lines.shift();
    if (!contentFileName) return null;
    const [fileName, line, column] = contentFileName.split(":");
    const parsedLine = Number(line);
    const parsedColumn = Number(column);
    const hasLocation = !Number.isNaN(parsedLine) && !Number.isNaN(parsedColumn);
    return {
        fileName: hasLocation ? fileName : contentFileName,
        location: hasLocation ? {
            line: parsedLine,
            column: parsedColumn
        } : undefined
    };
}
function getImportTraceFiles(lines) {
    if (lines.some((line)=>/ReactServerComponentsError:/.test(line)) || lines.some((line)=>/Import trace for requested module:/.test(line))) {
        const files = [];
        while(/.+\..+/.test(lines[lines.length - 1]) && !lines[lines.length - 1].includes(":")){
            const file = lines.pop().trim();
            files.unshift(file);
        }
        return files;
    }
    return [];
}
function getEditorLinks(content) {
    const lines = content.split("\n");
    const file = getFile(lines);
    const importTraceFiles = getImportTraceFiles(lines);
    return {
        file,
        source: lines.join("\n"),
        importTraceFiles
    };
}
const Terminal = function Terminal(param) {
    let { content } = param;
    const { file, source, importTraceFiles } = _react.useMemo(()=>getEditorLinks(content), [
        content
    ]);
    const decoded = _react.useMemo(()=>{
        return _anser.default.ansiToJson(source, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [
        source
    ]);
    return _react.createElement("div", {
        "data-nextjs-terminal": true
    }, file && _react.createElement(_EditorLink.EditorLink, {
        isSourceFile: true,
        key: file.fileName,
        file: file.fileName,
        location: file.location
    }), _react.createElement("pre", null, decoded.map((entry, index)=>_react.createElement("span", {
            key: "terminal-entry-" + index,
            style: {
                color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                ...entry.decoration === "bold" ? {
                    fontWeight: 800
                } : entry.decoration === "italic" ? {
                    fontStyle: "italic"
                } : undefined
            }
        }, _react.createElement(_hotlinkedtext.HotlinkedText, {
            text: entry.content
        }))), importTraceFiles.map((importTraceFile)=>_react.createElement(_EditorLink.EditorLink, {
            isSourceFile: false,
            key: importTraceFile,
            file: importTraceFile
        }))));
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return _Terminal.Terminal;
    }
});
const _Terminal = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RootLayoutError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RootLayoutError: function() {
        return RootLayoutError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _Dialog = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)");
const _Overlay = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js (ecmascript, ssr)");
const _Terminal = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-root-layout-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-root-layout-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-root-layout-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-root-layout-error-body small {\n    color: #757575;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const RootLayoutError = function BuildError(param) {
    let { missingTags } = param;
    const message = "Please make sure to include the following tags in your root layout: <html>, <body>.\n\n" + ("Missing required root layout tag" + (missingTags.length === 1 ? "" : "s") + ": ") + missingTags.join(", ");
    const noop = _react.default.useCallback(()=>{}, []);
    return _react.default.createElement(_Overlay.Overlay, {
        fixed: true
    }, _react.default.createElement(_Dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_root_layout_error_label",
        "aria-describedby": "nextjs__container_root_layout_error_desc",
        onClose: noop
    }, _react.default.createElement(_Dialog.DialogContent, null, _react.default.createElement(_Dialog.DialogHeader, {
        className: "nextjs-container-root-layout-error-header"
    }, _react.default.createElement("h4", {
        id: "nextjs__container_root_layout_error_label"
    }, "Missing required tags")), _react.default.createElement(_Dialog.DialogBody, {
        className: "nextjs-container-root-layout-error-body"
    }, _react.default.createElement(_Terminal.Terminal, {
        content: message
    }), _react.default.createElement("footer", null, _react.default.createElement("p", {
        id: "nextjs__container_root_layout_error_desc"
    }, _react.default.createElement("small", null, "This error and can only be dismissed by providing all required tags.")))))));
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BuildError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BuildError: function() {
        return BuildError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _Dialog = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)");
const _Overlay = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js (ecmascript, ssr)");
const _Terminal = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js (ecmascript, ssr)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-build-error-header {\n    display: flex;\n    align-items: center;\n  }\n  .nextjs-container-build-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-build-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-build-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-build-error-body small {\n    color: #757575;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const BuildError = function BuildError(param) {
    let { message, versionInfo } = param;
    const noop = _react.useCallback(()=>{}, []);
    return _react.createElement(_Overlay.Overlay, {
        fixed: true
    }, _react.createElement(_Dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_build_error_label",
        "aria-describedby": "nextjs__container_build_error_desc",
        onClose: noop
    }, _react.createElement(_Dialog.DialogContent, null, _react.createElement(_Dialog.DialogHeader, {
        className: "nextjs-container-build-error-header"
    }, _react.createElement("h4", {
        id: "nextjs__container_build_error_label"
    }, "Failed to compile"), versionInfo ? _react.createElement(_VersionStalenessInfo.VersionStalenessInfo, versionInfo) : null), _react.createElement(_Dialog.DialogBody, {
        className: "nextjs-container-build-error-body"
    }, _react.createElement(_Terminal.Terminal, {
        content: message
    }), _react.createElement("footer", null, _react.createElement("p", {
        id: "nextjs__container_build_error_desc"
    }, _react.createElement("small", null, "This error occurred during the build process and can only be dismissed by fixing the error.")))))));
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-terminal] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n  [data-nextjs-terminal] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n\n  [data-nextjs-terminal] pre {\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n\n  [data-with-open-in-editor-link] svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n  }\n  [data-with-open-in-editor-link] {\n    cursor: pointer;\n  }\n  [data-with-open-in-editor-link]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-with-open-in-editor-link-source-file] {\n    border-bottom: 1px solid var(--color-ansi-bright-black);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-with-open-in-editor-link-import-trace] {\n    margin-left: var(--size-gap-double);\n  }\n  [data-nextjs-terminal] a {\n    color: inherit;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      padding: 15px 15px 0;\n    }\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(17, 17, 17, 0.2);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-codeframe] {\n    overflow: auto;\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > div {\n    display: inline-block;\n    width: auto;\n    min-width: 100%;\n    border-bottom: 1px solid var(--color-ansi-bright-black);\n  }\n  [data-nextjs-codeframe] > div > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    margin: 0;\n  }\n  [data-nextjs-codeframe] > div > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] div > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 8px;\n  }\n  [data-nextjs-codeframe] div > pre {\n    overflow: hidden;\n    display: inline-block;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ComponentStyles", {
    enumerable: true,
    get: function() {
        return ComponentStyles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _styles = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js (ecmascript, ssr)");
const _Dialog = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)");
const _styles1 = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js (ecmascript, ssr)");
const _styles2 = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js (ecmascript, ssr)");
const _styles3 = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js (ecmascript, ssr)");
const _Toast = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js (ecmascript, ssr)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js (ecmascript, ssr)");
const _BuildError = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js (ecmascript, ssr)");
const _RootLayoutError = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js (ecmascript, ssr)");
const _Errors = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js (ecmascript, ssr)");
const _RuntimeError = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js (ecmascript, ssr)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        \n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function ComponentStyles() {
    return _react.createElement("style", null, (0, _nooptemplate.noop)(_templateObject(), _styles2.styles, _Toast.styles, _Dialog.styles, _styles1.styles, _styles.styles, _styles3.styles, _BuildError.styles, _RootLayoutError.styles, _Errors.styles, _RuntimeError.styles, _VersionStalenessInfo.styles));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Base", {
    enumerable: true,
    get: function() {
        return Base;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _nooptemplate = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          --size-gap-half: 4px;\n          --size-gap: 8px;\n          --size-gap-double: 16px;\n          --size-gap-triple: 24px;\n          --size-gap-quad: 32px;\n\n          --size-font-small: 14px;\n          --size-font: 16px;\n          --size-font-big: 20px;\n          --size-font-bigger: 24px;\n\n          --color-accents-1: #808080;\n          --color-accents-2: #222222;\n          --color-accents-3: #404040;\n\n          --font-stack-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono',\n            Menlo, Courier, monospace;\n\n          --color-ansi-selection: rgba(95, 126, 151, 0.48);\n          --color-ansi-bg: #111111;\n          --color-ansi-fg: #cccccc;\n\n          --color-ansi-white: #777777;\n          --color-ansi-black: #141414;\n          --color-ansi-blue: #00aaff;\n          --color-ansi-cyan: #88ddff;\n          --color-ansi-green: #98ec65;\n          --color-ansi-magenta: #aa88ff;\n          --color-ansi-red: #ff5555;\n          --color-ansi-yellow: #ffcc33;\n          --color-ansi-bright-white: #ffffff;\n          --color-ansi-bright-black: #777777;\n          --color-ansi-bright-blue: #33bbff;\n          --color-ansi-bright-cyan: #bbecff;\n          --color-ansi-bright-green: #b6f292;\n          --color-ansi-bright-magenta: #cebbff;\n          --color-ansi-bright-red: #ff8888;\n          --color-ansi-bright-yellow: #ffd966;\n        }\n\n        .mono {\n          font-family: var(--font-stack-monospace);\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-bottom: var(--size-gap);\n          font-weight: 500;\n          line-height: 1.5;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function Base() {
    return _react.createElement("style", null, (0, _nooptemplate.noop)(_templateObject()));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseStack", {
    enumerable: true,
    get: function() {
        return parseStack;
    }
});
const _stacktraceparser = __turbopack_require__("[project]/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js (ecmascript, ssr)");
const regexNextStatic = /\/_next(\/static\/.+)/g;
function parseStack(stack) {
    const frames = (0, _stacktraceparser.parse)(stack);
    return frames.map((frame)=>{
        try {
            const url = new URL(frame.file);
            const res = regexNextStatic.exec(url.pathname);
            if (res) {
                var _process_env___NEXT_DIST_DIR_replace, _process_env___NEXT_DIST_DIR;
                const distDir = (_process_env___NEXT_DIST_DIR_replace = (_process_env___NEXT_DIST_DIR = process.env.__NEXT_DIST_DIR) == null ? void 0 : _process_env___NEXT_DIST_DIR.replace(/\\/g, "/")) == null ? void 0 : _process_env___NEXT_DIST_DIR_replace.replace(/\/$/, "");
                if (distDir) {
                    frame.file = "file://" + distDir.concat(res.pop());
                }
            }
        } catch (e) {}
        return frame;
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ShadowPortal", {
    enumerable: true,
    get: function() {
        return ShadowPortal;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _reactdom = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)");
function ShadowPortal(param) {
    let { children } = param;
    let portalNode = _react.useRef(null);
    let shadowNode = _react.useRef(null);
    let [, forceUpdate] = _react.useState();
    _react.useLayoutEffect(()=>{
        const ownerDocument = document;
        portalNode.current = ownerDocument.createElement("nextjs-portal");
        shadowNode.current = portalNode.current.attachShadow({
            mode: "open"
        });
        ownerDocument.body.appendChild(portalNode.current);
        forceUpdate({});
        return ()=>{
            if (portalNode.current && portalNode.current.ownerDocument) {
                portalNode.current.ownerDocument.body.removeChild(portalNode.current);
            }
        };
    }, []);
    return shadowNode.current ? (0, _reactdom.createPortal)(children, shadowNode.current) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _erroroverlayreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)");
const _ShadowPortal = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js (ecmascript, ssr)");
const _BuildError = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js (ecmascript, ssr)");
const _Errors = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js (ecmascript, ssr)");
const _RootLayoutError = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js (ecmascript, ssr)");
const _parseStack = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js (ecmascript, ssr)");
const _Base = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js (ecmascript, ssr)");
const _ComponentStyles = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js (ecmascript, ssr)");
const _CssReset = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js (ecmascript, ssr)");
class ReactDevOverlay extends _react.PureComponent {
    static getDerivedStateFromError(error) {
        const e = error;
        const event = {
            type: _erroroverlayreducer.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parseStack.parseStack)(e.stack)
        };
        const errorEvent = {
            id: 0,
            event
        };
        return {
            reactError: errorEvent
        };
    }
    componentDidCatch(componentErr) {
        this.props.onReactError(componentErr);
    }
    render() {
        const { state, children } = this.props;
        const { reactError } = this.state;
        const hasBuildError = state.buildError != null;
        const hasRuntimeErrors = Boolean(state.errors.length);
        const rootLayoutMissingTagsError = state.rootLayoutMissingTagsError;
        const isMounted = hasBuildError || hasRuntimeErrors || reactError || rootLayoutMissingTagsError;
        return _react.createElement(_react.Fragment, null, reactError ? _react.createElement("html", null, _react.createElement("head", null), _react.createElement("body", null)) : children, isMounted ? _react.createElement(_ShadowPortal.ShadowPortal, null, _react.createElement(_CssReset.CssReset, null), _react.createElement(_Base.Base, null), _react.createElement(_ComponentStyles.ComponentStyles, null), rootLayoutMissingTagsError ? _react.createElement(_RootLayoutError.RootLayoutError, {
            missingTags: rootLayoutMissingTagsError.missingTags
        }) : hasBuildError ? _react.createElement(_BuildError.BuildError, {
            message: state.buildError,
            versionInfo: state.versionInfo
        }) : reactError ? _react.createElement(_Errors.Errors, {
            versionInfo: state.versionInfo,
            initialDisplayState: "fullscreen",
            errors: [
                reactError
            ]
        }) : hasRuntimeErrors ? _react.createElement(_Errors.Errors, {
            initialDisplayState: "minimized",
            errors: state.errors,
            versionInfo: state.versionInfo
        }) : undefined) : undefined);
    }
    constructor(...args){
        super(...args);
        this.state = {
            reactError: null
        };
    }
}
const _default = ReactDevOverlay;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/static-generation-async-storage.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "staticGenerationAsyncStorage", {
    enumerable: true,
    get: function() {
        return staticGenerationAsyncStorage;
    }
});
const _asynclocalstorage = __turbopack_require__("[project]/node_modules/next/dist/client/components/async-local-storage.js (ecmascript, ssr)");
const staticGenerationAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/bailout-to-client-rendering.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
});
const _dynamicnossr = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr.js (ecmascript, ssr)");
const _staticgenerationasyncstorage = __turbopack_require__("[project]/node_modules/next/dist/client/components/static-generation-async-storage.js (ecmascript, ssr)");
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentValue", {
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/client-hook-in-server-component-error.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "clientHookInServerComponentError", {
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
function clientHookInServerComponentError(hookName) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!_react.default.useState) {
            throw new Error("" + hookName + ' only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component');
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/navigation.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    useSearchParams: null,
    usePathname: null,
    ServerInsertedHTMLContext: null,
    useServerInsertedHTML: null,
    useRouter: null,
    useParams: null,
    useSelectedLayoutSegments: null,
    useSelectedLayoutSegment: null,
    redirect: null,
    notFound: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _hooksclientcontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/hooks-client-context.js (ecmascript, ssr)");
const _clienthookinservercomponenterror = __turbopack_require__("[project]/node_modules/next/dist/client/components/client-hook-in-server-component-error.js (ecmascript, ssr)");
const _getsegmentvalue = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js (ecmascript, ssr)");
const _serverinsertedhtml = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/server-inserted-html.js (ecmascript, ssr)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
const _notfound = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)");
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (typeof window === "undefined") {
        const { bailoutToClientRendering } = __turbopack_require__("[project]/node_modules/next/dist/client/components/bailout-to-client-rendering.js (ecmascript, ssr)");
        if (bailoutToClientRendering()) {
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        node = tree[1][parallelRouteKey];
    } else {
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HotReload;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _stripansi = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/strip-ansi/index.js (ecmascript, ssr)"));
const _formatwebpackmessages = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js (ecmascript, ssr)"));
const _navigation = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js (ecmascript, ssr)");
const _erroroverlayreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)");
const _parseStack = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js (ecmascript, ssr)");
const _ReactDevOverlay = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js (ecmascript, ssr)"));
const _useerrorhandler = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler.js (ecmascript, ssr)");
const _usewebsocket = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-websocket.js (ecmascript, ssr)");
const _parsecomponentstack = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js (ecmascript, ssr)");
let mostRecentCompilationHash = null;
let __nextDevClientId = Math.round(Math.random() * 100 + Date.now());
function onBeforeFastRefresh(dispatcher, hasUpdates) {
    if (hasUpdates) {
        dispatcher.onBeforeRefresh();
    }
}
function onFastRefresh(dispatcher, hasUpdates) {
    dispatcher.onBuildOk();
    if (hasUpdates) {
        dispatcher.onRefresh();
    }
}
function handleAvailableHash(hash) {
    mostRecentCompilationHash = hash;
}
function isUpdateAvailable() {
    return mostRecentCompilationHash !== __webpack_hash__;
}
function canApplyUpdates() {
    return module.hot.status() === "idle";
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === "idle") {
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        module.hot.addStatusHandler(handler);
    }
}
function performFullReload(err, sendMessage) {
    const stackTrace = err && (err.stack && err.stack.split("\n").slice(0, 5).join("\n") || err.message || err + "");
    sendMessage(JSON.stringify({
        event: "client-full-reload",
        stackTrace,
        hadRuntimeError: !!_useerrorhandler.RuntimeErrorHandler.hadRuntimeError
    }));
    window.location.reload();
}
function tryApplyUpdates(onBeforeUpdate, onHotUpdateSuccess, sendMessage, dispatcher) {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        dispatcher.onBuildOk();
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _useerrorhandler.RuntimeErrorHandler.hadRuntimeError || !updatedModules) {
            if (err) {
                console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
            } else if (_useerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn("[Fast Refresh] performing full reload because your application had an unrecoverable error");
            }
            performFullReload(err, sendMessage);
            return;
        }
        const hasUpdates = Boolean(updatedModules.length);
        if (typeof onHotUpdateSuccess === "function") {
            onHotUpdateSuccess(hasUpdates);
        }
        if (isUpdateAvailable()) {
            tryApplyUpdates(hasUpdates ? ()=>{} : onBeforeUpdate, hasUpdates ? ()=>dispatcher.onBuildOk() : onHotUpdateSuccess, sendMessage, dispatcher);
        } else {
            dispatcher.onBuildOk();
            if (process.env.__NEXT_TEST_MODE) {
                afterApplyUpdates(()=>{
                    if (self.__NEXT_HMR_CB) {
                        self.__NEXT_HMR_CB();
                        self.__NEXT_HMR_CB = null;
                    }
                });
            }
        }
    }
    module.hot.check(false).then((updatedModules)=>{
        if (!updatedModules) {
            return null;
        }
        if (typeof onBeforeUpdate === "function") {
            const hasUpdates = Boolean(updatedModules.length);
            onBeforeUpdate(hasUpdates);
        }
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
function processMessage(e, sendMessage, router, dispatcher) {
    let obj;
    try {
        obj = JSON.parse(e.data);
    } catch (e) {}
    if (!obj || !("action" in obj)) {
        return;
    }
    function handleErrors(errors) {
        const formatted = (0, _formatwebpackmessages.default)({
            errors: errors,
            warnings: []
        });
        dispatcher.onBuildError(formatted.errors[0]);
        for(let i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
        if (process.env.__NEXT_TEST_MODE) {
            if (self.__NEXT_HMR_CB) {
                self.__NEXT_HMR_CB(formatted.errors[0]);
                self.__NEXT_HMR_CB = null;
            }
        }
    }
    switch(obj.action){
        case "building":
            {
                console.log("[Fast Refresh] rebuilding");
                break;
            }
        case "built":
        case "sync":
            {
                if (obj.hash) {
                    handleAvailableHash(obj.hash);
                }
                const { errors, warnings, versionInfo } = obj;
                if (versionInfo) {
                    dispatcher.onVersionInfo(versionInfo);
                }
                const hasErrors = Boolean(errors && errors.length);
                if (hasErrors) {
                    sendMessage(JSON.stringify({
                        event: "client-error",
                        errorCount: errors.length,
                        clientId: __nextDevClientId
                    }));
                    handleErrors(errors);
                    return;
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    sendMessage(JSON.stringify({
                        event: "client-warning",
                        warningCount: warnings.length,
                        clientId: __nextDevClientId
                    }));
                    const isHotUpdate = obj.action !== "sync";
                    const formattedMessages = (0, _formatwebpackmessages.default)({
                        warnings: warnings,
                        errors: []
                    });
                    for(let i = 0; i < formattedMessages.warnings.length; i++){
                        if (i === 5) {
                            console.warn("There were more warnings in other files.\n" + "You can find a complete log in the terminal.");
                            break;
                        }
                        console.warn((0, _stripansi.default)(formattedMessages.warnings[i]));
                    }
                    if (isHotUpdate) {
                        tryApplyUpdates(function onBeforeHotUpdate(hasUpdates) {
                            onBeforeFastRefresh(dispatcher, hasUpdates);
                        }, function onSuccessfulHotUpdate(hasUpdates) {
                            onFastRefresh(dispatcher, hasUpdates);
                        }, sendMessage, dispatcher);
                    }
                    return;
                }
                sendMessage(JSON.stringify({
                    event: "client-success",
                    clientId: __nextDevClientId
                }));
                const isHotUpdate = obj.action !== "sync" && (!window.__NEXT_DATA__ || window.__NEXT_DATA__.page !== "/_error") && isUpdateAvailable();
                if (isHotUpdate) {
                    tryApplyUpdates(function onBeforeHotUpdate(hasUpdates) {
                        onBeforeFastRefresh(dispatcher, hasUpdates);
                    }, function onSuccessfulHotUpdate(hasUpdates) {
                        onFastRefresh(dispatcher, hasUpdates);
                    }, sendMessage, dispatcher);
                }
                return;
            }
        case "serverComponentChanges":
            {
                sendMessage(JSON.stringify({
                    event: "server-component-reload-page",
                    clientId: __nextDevClientId
                }));
                if (_useerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    return window.location.reload();
                }
                (0, _react.startTransition)(()=>{
                    router.fastRefresh();
                    dispatcher.onRefresh();
                });
                if (process.env.__NEXT_TEST_MODE) {
                    if (self.__NEXT_HMR_CB) {
                        self.__NEXT_HMR_CB();
                        self.__NEXT_HMR_CB = null;
                    }
                }
                return;
            }
        case "reloadPage":
            {
                sendMessage(JSON.stringify({
                    event: "client-reload-page",
                    clientId: __nextDevClientId
                }));
                return window.location.reload();
            }
        case "removedPage":
            {
                router.fastRefresh();
                return;
            }
        case "addedPage":
            {
                router.fastRefresh();
                return;
            }
        case "serverError":
            {
                const { errorJSON } = obj;
                if (errorJSON) {
                    const { message, stack } = JSON.parse(errorJSON);
                    const error = new Error(message);
                    error.stack = stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case "pong":
            {
                const { invalid } = obj;
                if (invalid) {
                    fetch(window.location.href, {
                        credentials: "same-origin"
                    }).then((pageRes)=>{
                        let shouldRefresh = pageRes.ok;
                        const isEdgeRuntime = pageRes.headers.get("x-edge-runtime") === "1";
                        if (pageRes.status === 404) {
                            var _document_head;
                            const devErrorMetaTag = (_document_head = document.head) == null ? void 0 : _document_head.querySelector('meta[name="next-error"]');
                            shouldRefresh = !devErrorMetaTag;
                        }
                        (0, _react.startTransition)(()=>{
                            if (shouldRefresh) {
                                if (isEdgeRuntime) {
                                    window.location.reload();
                                } else {
                                    router.fastRefresh();
                                    dispatcher.onRefresh();
                                }
                            }
                        });
                    });
                }
                return;
            }
        case "devPagesManifestUpdate":
            {
                return;
            }
        default:
            {
                throw new Error("Unexpected action " + obj.action);
            }
    }
}
function HotReload(param) {
    let { assetPrefix, children } = param;
    const [state, dispatch] = (0, _react.useReducer)(_erroroverlayreducer.errorOverlayReducer, _erroroverlayreducer.INITIAL_OVERLAY_STATE);
    const dispatcher = (0, _react.useMemo)(()=>{
        return {
            onBuildOk () {
                dispatch({
                    type: _erroroverlayreducer.ACTION_BUILD_OK
                });
            },
            onBuildError (message) {
                dispatch({
                    type: _erroroverlayreducer.ACTION_BUILD_ERROR,
                    message
                });
            },
            onBeforeRefresh () {
                dispatch({
                    type: _erroroverlayreducer.ACTION_BEFORE_REFRESH
                });
            },
            onRefresh () {
                dispatch({
                    type: _erroroverlayreducer.ACTION_REFRESH
                });
            },
            onVersionInfo (versionInfo) {
                dispatch({
                    type: _erroroverlayreducer.ACTION_VERSION_INFO,
                    versionInfo
                });
            }
        };
    }, [
        dispatch
    ]);
    const handleOnUnhandledError = (0, _react.useCallback)((error)=>{
        const componentStack = error._componentStack;
        dispatch({
            type: _erroroverlayreducer.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parseStack.parseStack)(error.stack),
            componentStackFrames: componentStack && (0, _parsecomponentstack.parseComponentStack)(componentStack)
        });
    }, []);
    const handleOnUnhandledRejection = (0, _react.useCallback)((reason)=>{
        dispatch({
            type: _erroroverlayreducer.ACTION_UNHANDLED_REJECTION,
            reason: reason,
            frames: (0, _parseStack.parseStack)(reason.stack)
        });
    }, []);
    const handleOnReactError = (0, _react.useCallback)(()=>{
        _useerrorhandler.RuntimeErrorHandler.hadRuntimeError = true;
    }, []);
    (0, _useerrorhandler.useErrorHandler)(handleOnUnhandledError, handleOnUnhandledRejection);
    const webSocketRef = (0, _usewebsocket.useWebsocket)(assetPrefix);
    (0, _usewebsocket.useWebsocketPing)(webSocketRef);
    const sendMessage = (0, _usewebsocket.useSendMessage)(webSocketRef);
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        const handler = (event)=>{
            try {
                processMessage(event, sendMessage, router, dispatcher);
            } catch (err) {
                var _err_stack;
                console.warn("[HMR] Invalid message: " + event.data + "\n" + ((_err_stack = err == null ? void 0 : err.stack) != null ? _err_stack : ""));
            }
        };
        const websocket = webSocketRef.current;
        if (websocket) {
            websocket.addEventListener("message", handler);
        }
        return ()=>websocket && websocket.removeEventListener("message", handler);
    }, [
        sendMessage,
        router,
        webSocketRef,
        dispatcher
    ]);
    return _react.default.createElement(_ReactDevOverlay.default, {
        onReactError: handleOnReactError,
        state: state
    }, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/not-found-boundary.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotFoundBoundary", {
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _navigation = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js (ecmascript, ssr)");
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), process.env.NODE_ENV === "development" && _react.default.createElement("meta", {
                name: "next-error",
                content: "not-found"
            }), this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    return notFound ? _react.default.createElement(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound
    }, children) : _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/dev-root-not-found-boundary.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    bailOnNotFound: null,
    DevRootNotFoundBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bailOnNotFound: function() {
        return bailOnNotFound;
    },
    DevRootNotFoundBoundary: function() {
        return DevRootNotFoundBoundary;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _notfoundboundary = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found-boundary.js (ecmascript, ssr)");
function bailOnNotFound() {
    throw new Error("notFound() is not allowed to use in root layout");
}
function NotAllowedRootNotFoundError() {
    bailOnNotFound();
    return null;
}
function DevRootNotFoundBoundary(param) {
    let { children } = param;
    return _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
        notFound: _react.default.createElement(NotAllowedRootNotFoundError, null)
    }, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RSC: null,
    ACTION: null,
    NEXT_ROUTER_STATE_TREE: null,
    NEXT_ROUTER_PREFETCH: null,
    NEXT_URL: null,
    FETCH_CACHE_HEADER: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_VARY_HEADER: null,
    FLIGHT_PARAMETERS: null,
    NEXT_RSC_UNION_QUERY: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RSC: function() {
        return RSC;
    },
    ACTION: function() {
        return ACTION;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_ROUTER_PREFETCH: function() {
        return NEXT_ROUTER_PREFETCH;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    FETCH_CACHE_HEADER: function() {
        return FETCH_CACHE_HEADER;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_VARY_HEADER: function() {
        return RSC_VARY_HEADER;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    }
});
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/infinite-promise.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInfinitePromise", {
    enumerable: true,
    get: function() {
        return createInfinitePromise;
    }
});
let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        infinitePromise = new Promise(()=>{});
    }
    return infinitePromise;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
});
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    return Array.isArray(segment) ? segment[0] + "|" + segment[1] + "|" + segment[2] : withoutSearchParameters && segment.startsWith("__PAGE__") ? "__PAGE__" : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findHeadInCache", {
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
});
const _createroutercachekey = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js (ecmascript, ssr)");
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/redirect-boundary.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectErrorBoundary: null,
    RedirectBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    },
    RedirectBoundary: function() {
        return RedirectBoundary;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _navigation = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js (ecmascript, ssr)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        throw error;
    }
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return _react.default.createElement(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/app-router-announcer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
});
const _react = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
const _reactdom = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)");
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.ariaLive = "assertive";
        announcer.id = ANNOUNCER_ID;
        announcer.role = "alert";
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        if (previousTitle.current !== undefined) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    extractPathFromFlightRouterState: null,
    computeChangedPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    computeChangedPath: function() {
        return computeChangedPath;
    }
});
const _interceptionroutes = __turbopack_require__("[project]/node_modules/next/dist/server/future/helpers/interception-routes.js (ecmascript, ssr)");
const _matchsegments = __turbopack_require__("[project]/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        return segment;
    }
    return segment[1];
};
function normalizePathname(pathname) {
    return pathname.split("/").reduce((acc, segment)=>{
        if (segment === "" || segment.startsWith("(") && segment.endsWith(")")) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === "__DEFAULT__" || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith("__PAGE__")) return "";
    const path = [
        segment
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        path.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                path.push(childPath);
            }
        }
    }
    return normalizePathname(path.join("/"));
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    return normalizePathname(changedPath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", {
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
});
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _createroutercachekey = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js (ecmascript, ssr)");
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head, wasPrefetched) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                const newCacheNode = wasPrefetched && existingCacheNode ? {
                    status: existingCacheNode.status,
                    data: existingCacheNode.data,
                    subTreeData: existingCacheNode.subTreeData,
                    parallelRoutes: new Map(existingCacheNode.parallelRoutes)
                } : {
                    status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, head, wasPrefetched);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _approutercontext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head, wasPrefetched);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInitialRouterState", {
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
});
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js (ecmascript, ssr)");
const _computechangedpath = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js (ecmascript, ssr)");
function createInitialRouterState(param) {
    let { buildId, initialTree, children, initialCanonicalUrl, initialParallelRoutes, isServer, location, initialHead } = param;
    const cache = {
        status: _approutercontext.CacheStates.READY,
        data: null,
        subTreeData: children,
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialHead);
    }
    var _ref;
    return {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl: location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/error-boundary.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorBoundaryHandler: null,
    GlobalError: null,
    ErrorBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    ErrorBoundary: function() {
        return ErrorBoundary;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _react = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _navigation = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js (ecmascript, ssr)");
const styles = {
    error: {
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.error) {
            return _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return _react.default.createElement("html", {
        id: "__next_error__"
    }, _react.default.createElement("head", null), _react.default.createElement("body", null, _react.default.createElement("div", {
        style: styles.error
    }, _react.default.createElement("div", null, _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a " + (digest ? "server" : "client") + "-side exception has occurred (see the " + (digest ? "server logs" : "browser console") + " for more information)."), digest ? _react.default.createElement("p", {
        style: styles.text
    }, "Digest: " + digest) : null))));
}
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return _react.default.createElement(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/use-reducer-with-devtools.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useReducerWithReduxDevtools", {
    enumerable: true,
    get: function() {
        return useReducerWithReduxDevtools;
    }
});
const _react = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react.useReducer)(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react.useReducer)(devToolReducer(fn, devtoolsConnectionRef), initialState);
    const sync = (0, _react.useCallback)(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools = typeof window !== "undefined" ? useReducerWithReduxDevtoolsImpl : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PrefetchKind: null,
    ACTION_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_PATCH: null,
    ACTION_PREFETCH: null,
    ACTION_FAST_REFRESH: null,
    ACTION_SERVER_ACTION: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/read-record-value.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "readRecordValue", {
    enumerable: true,
    get: function() {
        return readRecordValue;
    }
});
function readRecordValue(thenable) {
    if (thenable.status === "fulfilled") {
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/create-record-from-thenable.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRecordFromThenable", {
    enumerable: true,
    get: function() {
        return createRecordFromThenable;
    }
});
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverActionReducer", {
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
});
const _appcallserver = __turbopack_require__("[project]/node_modules/next/dist/client/app-call-server.js (ecmascript, ssr)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const _createrecordfromthenable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-record-from-thenable.js (ecmascript, ssr)");
const _readrecordvalue = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/read-record-value.js (ecmascript, ssr)");
const _client = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-server-dom-webpack/client.js (ecmascript, ssr)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js (ecmascript, ssr)");
const _addbasepath = __turbopack_require__("[project]/node_modules/next/dist/client/add-base-path.js (ecmascript, ssr)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
async function fetchServerAction(state, param) {
    let { actionId, actionArgs } = param;
    const body = await (0, _client.encodeReply)(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            "Next-Action": actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: JSON.stringify(state.tree),
            ...process.env.__NEXT_ACTIONS_DEPLOYMENT_ID && process.env.NEXT_DEPLOYMENT_ID ? {
                "x-deployment-id": process.env.NEXT_DEPLOYMENT_ID
            } : {},
            ...state.nextUrl ? {
                [_approuterheaders.NEXT_URL]: state.nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), window.location.origin) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (location) {
            const [, payload] = response;
            return {
                actionFlightData: payload == null ? void 0 : payload[1],
                redirectLocation,
                revalidatedParts
            };
        } else {
            const [actionResult, [, actionFlightData]] = response != null ? response : [];
            return {
                actionResult,
                actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    if (action.mutable.serverActionApplied) {
        return state;
    }
    if (!action.mutable.inFlightServerAction) {
        action.mutable.previousTree = state.tree;
        action.mutable.previousUrl = state.canonicalUrl;
        action.mutable.inFlightServerAction = (0, _createrecordfromthenable.createRecordFromThenable)(fetchServerAction(state, action));
    }
    try {
        const { actionResult, actionFlightData, redirectLocation, revalidatedParts } = (0, _readrecordvalue.readRecordValue)(action.mutable.inFlightServerAction);
        if (revalidatedParts.tag || revalidatedParts.cookie) {
            state.prefetchCache.clear();
        } else if (revalidatedParts.paths.length > 0) {
            state.prefetchCache.clear();
        }
        if (redirectLocation) {
            if (actionFlightData) {
                const href = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
                const previousCacheEntry = state.prefetchCache.get(href);
                var _previousCacheEntry_kind;
                state.prefetchCache.set(href, {
                    data: (0, _createrecordfromthenable.createRecordFromThenable)(Promise.resolve([
                        actionFlightData,
                        undefined
                    ])),
                    kind: (_previousCacheEntry_kind = previousCacheEntry == null ? void 0 : previousCacheEntry.kind) != null ? _previousCacheEntry_kind : _routerreducertypes.PrefetchKind.TEMPORARY,
                    prefetchTime: Date.now(),
                    treeAtTimeOfPrefetch: action.mutable.previousTree,
                    lastUsedTime: null
                });
            }
            action.reject((0, _redirect.getRedirectError)(redirectLocation.toString(), _redirect.RedirectType.push));
        } else {
            if (actionFlightData) {
                const href = (0, _createhreffromurl.createHrefFromUrl)(new URL(action.mutable.previousUrl, window.location.origin), false);
                const previousCacheEntry = state.prefetchCache.get(href);
                var _previousCacheEntry_kind1;
                state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(new URL(action.mutable.previousUrl, window.location.origin), false), {
                    data: (0, _createrecordfromthenable.createRecordFromThenable)(Promise.resolve([
                        actionFlightData,
                        undefined
                    ])),
                    kind: (_previousCacheEntry_kind1 = previousCacheEntry == null ? void 0 : previousCacheEntry.kind) != null ? _previousCacheEntry_kind1 : _routerreducertypes.PrefetchKind.TEMPORARY,
                    prefetchTime: Date.now(),
                    treeAtTimeOfPrefetch: action.mutable.previousTree,
                    lastUsedTime: null
                });
                setTimeout(()=>{
                    action.changeByServerResponse(action.mutable.previousTree, actionFlightData, undefined);
                });
            }
            action.resolve(actionResult);
        }
    } catch (e) {
        if (e.status === "rejected") {
            action.reject(e.value);
        } else {
            throw e;
        }
    }
    action.mutable.serverActionApplied = true;
    return state;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/invalidate-cache-by-router-state.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invalidateCacheByRouterState", {
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
});
const _createroutercachekey = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js (ecmascript, ssr)");
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", {
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
});
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _invalidatecachebyrouterstate = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/invalidate-cache-by-router-state.js (ecmascript, ssr)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js (ecmascript, ssr)");
const _createroutercachekey = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js (ecmascript, ssr)");
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, wasPrefetched) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4], wasPrefetched);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), wasPrefetched);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyFlightData", {
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
});
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js (ecmascript, ssr)");
const _fillcachewithnewsubtreedata = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js (ecmascript, ssr)");
function applyFlightData(existingCache, cache, flightDataPath, wasPrefetched) {
    if (wasPrefetched === void 0) wasPrefetched = false;
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, head, wasPrefetched);
    } else {
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = existingCache.subTreeData;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, wasPrefetched);
    }
    return true;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/handle-mutable.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleMutable", {
    enumerable: true,
    get: function() {
        return handleMutable;
    }
});
const _computechangedpath = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js (ecmascript, ssr)");
function handleMutable(state, mutable) {
    var _mutable_shouldScroll;
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    var _mutable_scrollableSegments, _computeChangedPath;
    return {
        buildId: state.buildId,
        canonicalUrl: mutable.canonicalUrl != null ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: mutable.pendingPush != null ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: mutable.mpaNavigation != null ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        focusAndScrollRef: {
            apply: shouldScroll ? (mutable == null ? void 0 : mutable.scrollableSegments) !== undefined ? true : state.focusAndScrollRef.apply : false,
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        tree: mutable.patchedTree !== undefined ? mutable.patchedTree : state.tree,
        nextUrl: mutable.patchedTree !== undefined ? (_computeChangedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree)) != null ? _computeChangedPath : state.canonicalUrl : state.nextUrl
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/promise-queue.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PromiseQueue", {
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
});
const _class_private_field_loose_base = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs (ecmascript, ssr)");
const _class_private_field_loose_key = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs (ecmascript, ssr)");
var _maxConcurrency = _class_private_field_loose_key._("_maxConcurrency"), _runningCount = _class_private_field_loose_key._("_runningCount"), _queue = _class_private_field_loose_key._("_queue"), _processNext = _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/get-prefetch-cache-entry-status.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PrefetchCacheEntryStatus: null,
    getPrefetchEntryCacheStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    getPrefetchEntryCacheStatus: function() {
        return getPrefetchEntryCacheStatus;
    }
});
const FIVE_MINUTES = 5 * 60 * 1000;
const THIRTY_SECONDS = 30 * 1000;
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + THIRTY_SECONDS) {
        return lastUsedTime ? "reusable" : "fresh";
    }
    if (kind === "auto") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "stale";
        }
    }
    if (kind === "full") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "reusable";
        }
    }
    return "expired";
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/prune-prefetch-cache.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "prunePrefetchCache", {
    enumerable: true,
    get: function() {
        return prunePrefetchCache;
    }
});
const _getprefetchcacheentrystatus = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/get-prefetch-cache-entry-status.js (ecmascript, ssr)");
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if ((0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchCacheEntry) === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fetchServerResponse", {
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
});
const _client = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-server-dom-webpack/client.js (ecmascript, ssr)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const _approuter = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router.js (ecmascript, ssr)");
const _appcallserver = __turbopack_require__("[project]/node_modules/next/dist/client/app-call-server.js (ecmascript, ssr)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js (ecmascript, ssr)");
const _hash = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/hash.js (ecmascript, ssr)");
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        [_approuterheaders.RSC]: "1",
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE]
    ].join(","));
    try {
        let fetchUrl = new URL(url);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if (!isFlightResponse || !res.ok) {
            return doMpaNavigation(responseUrl.toString());
        }
        const [buildId, flightData] = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload. Falling back to browser navigation.", err);
        return [
            url.toString(),
            undefined
        ];
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    prefetchQueue: null,
    prefetchReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js (ecmascript, ssr)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js (ecmascript, ssr)");
const _createrecordfromthenable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-record-from-thenable.js (ecmascript, ssr)");
const _pruneprefetchcache = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/prune-prefetch-cache.js (ecmascript, ssr)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const _promisequeue = __turbopack_require__("[project]/node_modules/next/dist/client/components/promise-queue.js (ecmascript, ssr)");
const prefetchQueue = new _promisequeue.PromiseQueue(5);
function prefetchReducer(state, action) {
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const href = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    const cacheEntry = state.prefetchCache.get(href);
    if (cacheEntry) {
        if (cacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            state.prefetchCache.set(href, {
                ...cacheEntry,
                kind: action.kind
            });
        }
        if (!(cacheEntry.kind === _routerreducertypes.PrefetchKind.AUTO && action.kind === _routerreducertypes.PrefetchKind.FULL)) {
            return state;
        }
    }
    const serverResponse = (0, _createrecordfromthenable.createRecordFromThenable)(prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, action.kind)));
    state.prefetchCache.set(href, {
        treeAtTimeOfPrefetch: state.tree,
        data: serverResponse,
        kind: action.kind,
        prefetchTime: Date.now(),
        lastUsedTime: null
    });
    return state;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
});
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    if (currentTree[4]) {
        return !nextTree[4];
    }
    if (nextTree[4]) {
        return true;
    }
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/should-hard-navigate.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "shouldHardNavigate", {
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
});
const _matchsegments = __turbopack_require__("[project]/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        if (Array.isArray(currentSegment)) {
            return true;
        }
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyRouterStatePatchToTree", {
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
});
const _matchsegments = __turbopack_require__("[project]/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    if (patchSegment === "__DEFAULT__" && initialSegment !== "__DEFAULT__") {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        }
    ];
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/create-optimistic-tree.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createOptimisticTree", {
    enumerable: true,
    get: function() {
        return createOptimisticTree;
    }
});
const _matchsegments = __turbopack_require__("[project]/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchsegments.matchSegment)(existingSegment, segment);
    const hasMultipleParallelRoutes = Object.keys(existingParallelRoutes).length > 1;
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches || hasMultipleParallelRoutes;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    if (!isLastSegment && !hasMultipleParallelRoutes) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        {
            ...parallelRoutes,
            ...childTree ? {
                children: childTree
            } : {}
        }
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/fill-cache-with-data-property.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillCacheWithDataProperty", {
    enumerable: true,
    get: function() {
        return fillCacheWithDataProperty;
    }
});
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _createroutercachekey = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js (ecmascript, ssr)");
function fillCacheWithDataProperty(newCache, existingCache, flightSegmentPath, fetchResponse, bailOnParallelRoutes) {
    if (bailOnParallelRoutes === void 0) bailOnParallelRoutes = false;
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap || bailOnParallelRoutes && existingCache.parallelRoutes.size > 1) {
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2), fetchResponse);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/invalidate-cache-below-flight-segmentpath.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", {
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
});
const _createroutercachekey = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js (ecmascript, ssr)");
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleExternalUrl: null,
    navigateReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js (ecmascript, ssr)");
const _createrecordfromthenable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-record-from-thenable.js (ecmascript, ssr)");
const _readrecordvalue = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/read-record-value.js (ecmascript, ssr)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
const _invalidatecachebelowflightsegmentpath = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/invalidate-cache-below-flight-segmentpath.js (ecmascript, ssr)");
const _fillcachewithdataproperty = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fill-cache-with-data-property.js (ecmascript, ssr)");
const _createoptimistictree = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-optimistic-tree.js (ecmascript, ssr)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js (ecmascript, ssr)");
const _shouldhardnavigate = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/should-hard-navigate.js (ecmascript, ssr)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js (ecmascript, ssr)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js (ecmascript, ssr)");
const _handlemutable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/handle-mutable.js (ecmascript, ssr)");
const _applyflightdata = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js (ecmascript, ssr)");
const _getprefetchcacheentrystatus = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/get-prefetch-cache-entry-status.js (ecmascript, ssr)");
const _pruneprefetchcache = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/prune-prefetch-cache.js (ecmascript, ssr)");
const _prefetchreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js (ecmascript, ssr)");
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function addRefetchToLeafSegments(newCache, currentCache, flightSegmentPath, treePatch, data) {
    let appliedPatch = false;
    newCache.status = _approutercontext.CacheStates.READY;
    newCache.subTreeData = currentCache.subTreeData;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(newCache, currentCache, segmentPaths, data);
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            appliedPatch = true;
        }
    }
    return appliedPatch;
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, cache, mutable, forceOptimisticNavigation, shouldScroll } = action;
    const { pathname, hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    let prefetchValues = state.prefetchCache.get((0, _createhreffromurl.createHrefFromUrl)(url, false));
    if (forceOptimisticNavigation && (prefetchValues == null ? void 0 : prefetchValues.kind) !== _routerreducertypes.PrefetchKind.TEMPORARY) {
        const segments = pathname.split("/");
        segments.push("__PAGE__");
        const optimisticTree = (0, _createoptimistictree.createOptimisticTree)(segments, state.tree, false);
        const temporaryCacheNode = {
            ...cache
        };
        temporaryCacheNode.status = _approutercontext.CacheStates.READY;
        temporaryCacheNode.subTreeData = state.cache.subTreeData;
        temporaryCacheNode.parallelRoutes = new Map(state.cache.parallelRoutes);
        let data;
        const fetchResponse = ()=>{
            if (!data) {
                data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, optimisticTree, state.nextUrl, state.buildId));
            }
            return data;
        };
        const optimisticFlightSegmentPath = segments.slice(1).map((segment)=>[
                "children",
                segment
            ]).flat();
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(temporaryCacheNode, state.cache, optimisticFlightSegmentPath, fetchResponse, true);
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.hashFragment = hash;
            mutable.shouldScroll = shouldScroll;
            mutable.scrollableSegments = [];
            mutable.cache = temporaryCacheNode;
            mutable.canonicalUrl = href;
            state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), {
                data: Promise.resolve(data),
                kind: _routerreducertypes.PrefetchKind.TEMPORARY,
                prefetchTime: Date.now(),
                treeAtTimeOfPrefetch: state.tree,
                lastUsedTime: Date.now()
            });
            return (0, _handlemutable.handleMutable)(state, mutable);
        }
    }
    if (!prefetchValues) {
        const data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, process.env.NODE_ENV === "development" ? _routerreducertypes.PrefetchKind.AUTO : undefined));
        const newPrefetchValue = {
            data: Promise.resolve(data),
            kind: process.env.NODE_ENV === "development" ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.TEMPORARY,
            prefetchTime: Date.now(),
            treeAtTimeOfPrefetch: state.tree,
            lastUsedTime: null
        };
        state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), newPrefetchValue);
        prefetchValues = newPrefetchValue;
    }
    const prefetchEntryCacheStatus = (0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchValues);
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(data);
    prefetchValues.lastUsedTime = Date.now();
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    let scrollableSegments = [];
    for (const flightDataPath of flightData){
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const treePatch = flightDataPath.slice(-3)[0];
        const flightSegmentPathWithLeadingEmpty = [
            "",
            ...flightSegmentPath
        ];
        let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch);
        if (newTree === null) {
            newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch);
        }
        if (newTree !== null) {
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            let applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues.kind === "auto" && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.reusable);
            if (!applied && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.stale) {
                applied = addRefetchToLeafSegments(cache, currentCache, flightSegmentPath, treePatch, ()=>(0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
            }
            const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
            if (hardNavigate) {
                cache.status = _approutercontext.CacheStates.READY;
                cache.subTreeData = currentCache.subTreeData;
                (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            currentCache = cache;
            currentTree = newTree;
            for (const subSegment of generateSegmentsFromPatch(treePatch)){
                const scrollableSegmentPath = [
                    ...flightSegmentPath,
                    ...subSegment
                ];
                if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== "__DEFAULT__") {
                    scrollableSegments.push(scrollableSegmentPath);
                }
            }
        }
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = currentTree;
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = scrollableSegments;
    mutable.hashFragment = hash;
    mutable.shouldScroll = shouldScroll;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/fast-refresh-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fastRefreshReducer", {
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
});
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js (ecmascript, ssr)");
const _createrecordfromthenable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-record-from-thenable.js (ecmascript, ssr)");
const _readrecordvalue = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/read-record-value.js (ecmascript, ssr)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js (ecmascript, ssr)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js (ecmascript, ssr)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js (ecmascript, ssr)");
const _handlemutable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/handle-mutable.js (ecmascript, ssr)");
const _applyflightdata = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js (ecmascript, ssr)");
function fastRefreshReducerImpl(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    cache.data = null;
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        if (flightDataPath.length !== 3) {
            console.log("REFRESH FAILED");
            return state;
        }
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        if (applied) {
            mutable.cache = cache;
            currentCache = cache;
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer = process.env.NODE_ENV === "production" ? fastRefreshReducerNoop : fastRefreshReducerImpl;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "refreshReducer", {
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
});
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js (ecmascript, ssr)");
const _createrecordfromthenable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-record-from-thenable.js (ecmascript, ssr)");
const _readrecordvalue = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/read-record-value.js (ecmascript, ssr)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js (ecmascript, ssr)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js (ecmascript, ssr)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js (ecmascript, ssr)");
const _handlemutable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/handle-mutable.js (ecmascript, ssr)");
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _filllazyitemstillleafwithhead = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js (ecmascript, ssr)");
function refreshReducer(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            currentTree[0],
            currentTree[1],
            currentTree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    cache.data = null;
    for (const flightDataPath of flightData){
        if (flightDataPath.length !== 3) {
            console.log("REFRESH FAILED");
            return state;
        }
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const [subTreeData, head] = flightDataPath.slice(-2);
        if (subTreeData !== null) {
            cache.status = _approutercontext.CacheStates.READY;
            cache.subTreeData = subTreeData;
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
            mutable.cache = cache;
            mutable.prefetchCache = new Map();
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "restoreReducer", {
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
});
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    return {
        buildId: state.buildId,
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        tree: tree,
        nextUrl: url.pathname
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverPatchReducer", {
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
});
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
const _applyrouterstatepatchtotree = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js (ecmascript, ssr)");
const _isnavigatingtonewrootlayout = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js (ecmascript, ssr)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js (ecmascript, ssr)");
const _applyflightdata = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js (ecmascript, ssr)");
const _handlemutable = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/handle-mutable.js (ecmascript, ssr)");
function serverPatchReducer(state, action) {
    const { flightData, previousTree, overrideCanonicalUrl, cache, mutable } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    if (!isForCurrentTree) {
        console.log("TREE MISMATCH");
        return state;
    }
    if (mutable.previousTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/router-reducer/router-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reducer", {
    enumerable: true,
    get: function() {
        return reducer;
    }
});
const _routerreducertypes = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js (ecmascript, ssr)");
const _navigatereducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js (ecmascript, ssr)");
const _serverpatchreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js (ecmascript, ssr)");
const _restorereducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js (ecmascript, ssr)");
const _refreshreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js (ecmascript, ssr)");
const _prefetchreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js (ecmascript, ssr)");
const _fastrefreshreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/fast-refresh-reducer.js (ecmascript, ssr)");
const _serveractionreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js (ecmascript, ssr)");
function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer = typeof window === "undefined" ? serverReducer : clientReducer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/app-router.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getServerActionDispatcher: null,
    urlToUrlWithoutFlightMarker: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    },
    default: function() {
        return AppRouter;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _routerreducer = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer.js (ecmascript, ssr)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js (ecmascript, ssr)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js (ecmascript, ssr)");
const _hooksclientcontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/hooks-client-context.js (ecmascript, ssr)");
const _usereducerwithdevtools = __turbopack_require__("[project]/node_modules/next/dist/client/components/use-reducer-with-devtools.js (ecmascript, ssr)");
const _errorboundary = __turbopack_require__("[project]/node_modules/next/dist/client/components/error-boundary.js (ecmascript, ssr)");
const _createinitialrouterstate = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js (ecmascript, ssr)");
const _isbot = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/is-bot.js (ecmascript, ssr)");
const _addbasepath = __turbopack_require__("[project]/node_modules/next/dist/client/add-base-path.js (ecmascript, ssr)");
const _approuterannouncer = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-announcer.js (ecmascript, ssr)");
const _redirectboundary = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect-boundary.js (ecmascript, ssr)");
const _findheadincache = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js (ecmascript, ssr)");
const _infinitepromise = __turbopack_require__("[project]/node_modules/next/dist/client/components/infinite-promise.js (ecmascript, ssr)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
const isServer = typeof window === "undefined";
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return urlWithoutFlightParameters;
}
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { tree, pushRef, canonicalUrl, sync } = param;
    (0, _react.useInsertionEffect)(()=>{
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    return null;
}
const createEmptyCacheNode = ()=>({
        status: _approutercontext.CacheStates.LAZY_INITIALIZED,
        data: null,
        subTreeData: null,
        parallelRoutes: new Map()
    });
function useServerActionDispatcher(changeByServerResponse, dispatch, navigate) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                mutable: {},
                navigate,
                changeByServerResponse
            });
        });
    }, [
        changeByServerResponse,
        dispatch,
        navigate
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((previousTree, flightData, overrideCanonicalUrl)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                flightData,
                previousTree,
                overrideCanonicalUrl,
                cache: createEmptyCacheNode(),
                mutable: {}
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, forceOptimisticNavigation, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            forceOptimisticNavigation,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType,
            cache: createEmptyCacheNode(),
            mutable: {}
        });
    }, [
        dispatch
    ]);
}
function Router(param) {
    let { buildId, initialHead, initialTree, initialCanonicalUrl, children, assetPrefix } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        buildId,
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree, cache, prefetchCache, pushRef, focusAndScrollRef, canonicalUrl, nextUrl }, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(_routerreducer.reducer, initialState);
    (0, _react.useEffect)(()=>{
        initialParallelRoutes = null;
    }, []);
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl, typeof window === "undefined" ? "http://n" : window.location.href);
        return {
            searchParams: url.searchParams,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    useServerActionDispatcher(changeByServerResponse, dispatch, navigate);
    const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                if ((0, _isbot.isBot)(window.navigator.userAgent)) {
                    return;
                }
                const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
                if (isExternalURL(url)) {
                    return;
                }
                (0, _react.startTransition)(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        cache: createEmptyCacheNode(),
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            },
            fastRefresh: ()=>{
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                } else {
                    (0, _react.startTransition)(()=>{
                        dispatch({
                            type: _routerreducertypes.ACTION_FAST_REFRESH,
                            cache: createEmptyCacheNode(),
                            mutable: {},
                            origin: window.location.origin
                        });
                    });
                }
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        (0, _react.useEffect)(()=>{
            window.nd = {
                router: appRouter,
                cache,
                prefetchCache,
                tree
            };
        }, [
            appRouter,
            cache,
            prefetchCache,
            tree
        ]);
    }
    if (pushRef.mpaNavigation) {
        const location1 = window.location;
        if (pushRef.pendingPush) {
            location1.assign(canonicalUrl);
        } else {
            location1.replace(canonicalUrl);
        }
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    const onPopState = (0, _react.useCallback)((param)=>{
        let { state } = param;
        if (!state) {
            return;
        }
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    (0, _react.useEffect)(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const head = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    let content = _react.default.createElement(_redirectboundary.RedirectBoundary, null, head, cache.subTreeData, _react.default.createElement(_approuterannouncer.AppRouterAnnouncer, {
        tree: tree
    }));
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== "undefined") {
            const DevRootNotFoundBoundary = __turbopack_require__("[project]/node_modules/next/dist/client/components/dev-root-not-found-boundary.js (ecmascript, ssr)").DevRootNotFoundBoundary;
            content = _react.default.createElement(DevRootNotFoundBoundary, null, content);
        }
        const HotReloader = __turbopack_require__("[project]/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js (ecmascript, ssr)").default;
        content = _react.default.createElement(HotReloader, {
            assetPrefix: assetPrefix
        }, content);
    }
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(HistoryUpdater, {
        tree: tree,
        pushRef: pushRef,
        canonicalUrl: canonicalUrl,
        sync: sync
    }), _react.default.createElement(_hooksclientcontext.PathnameContext.Provider, {
        value: pathname
    }, _react.default.createElement(_hooksclientcontext.SearchParamsContext.Provider, {
        value: searchParams
    }, _react.default.createElement(_approutercontext.GlobalLayoutRouterContext.Provider, {
        value: {
            buildId,
            changeByServerResponse,
            tree,
            focusAndScrollRef,
            nextUrl
        }
    }, _react.default.createElement(_approutercontext.AppRouterContext.Provider, {
        value: appRouter
    }, _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            url: canonicalUrl
        }
    }, content))))));
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return _react.default.createElement(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, _react.default.createElement(Router, rest));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/node_modules/next/dist/client/components/layout-router.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)");
const _react = _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const _reactdom = _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)"));
const _approutercontext = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js (ecmascript, ssr)");
const _infinitepromise = __turbopack_require__("[project]/node_modules/next/dist/client/components/infinite-promise.js (ecmascript, ssr)");
const _errorboundary = __turbopack_require__("[project]/node_modules/next/dist/client/components/error-boundary.js (ecmascript, ssr)");
const _matchsegments = __turbopack_require__("[project]/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
const _handlesmoothscroll = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/handle-smooth-scroll.js (ecmascript, ssr)");
const _redirectboundary = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect-boundary.js (ecmascript, ssr)");
const _notfoundboundary = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found-boundary.js (ecmascript, ssr)");
const _getsegmentvalue = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js (ecmascript, ssr)");
const _createroutercachekey = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js (ecmascript, ssr)");
function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
function findDOMNode(instance) {
    if (typeof window === "undefined") return null;
    if ("TURBOPACK compile-time truthy", 1) {
        const originalConsoleError = console.error;
        try {
            console.error = function() {
                for(var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++){
                    messages[_key] = arguments[_key];
                }
                if (!messages[0].includes("Warning: %s is deprecated in StrictMode.")) {
                    originalConsoleError(...messages);
                }
            };
            return _reactdom.default.findDOMNode(instance);
        } finally{
            console.error = originalConsoleError;
        }
    }
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
function elementCanScroll(element) {
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
function getHashFragmentDomNode(hashFragment) {
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll(true);
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = (isUpdate)=>{
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                if (!(domNode instanceof Element)) {
                    return;
                }
                while(!(domNode instanceof HTMLElement) || elementCanScroll(domNode)){
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    htmlElement.scrollTop = 0;
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    dontForceLayout: true,
                    onlyHashChange: !!isUpdate
                });
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return _react.default.createElement(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef
    }, children);
}
function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, childProp, segmentPath, tree, cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    let childNode = childNodes.get(cacheKey);
    if (childProp && childProp.current !== null) {
        if (!childNode) {
            childNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            };
            childNodes.set(cacheKey, childNode);
        } else {
            if (childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
                childNode.status = _approutercontext.CacheStates.READY;
                childNode.subTreeData = childProp.current;
            }
        }
    }
    if (!childNode || childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        childNode = {
            status: _approutercontext.CacheStates.DATA_FETCH,
            data: (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, context.nextUrl, buildId),
            subTreeData: null,
            head: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        };
        childNodes.set(cacheKey, childNode);
    }
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    if (childNode.data) {
        const [flightData, overrideCanonicalUrl] = (0, _react.use)(childNode.data);
        childNode.data = null;
        setTimeout(()=>{
            (0, _react.startTransition)(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    if (!childNode.subTreeData) {
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    const subtree = _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            url: url
        }
    }, childNode.subTreeData);
    return subtree;
}
function LoadingBoundary(param) {
    let { children, loading, loadingStyles, hasLoading } = param;
    if (hasLoading) {
        return _react.default.createElement(_react.Suspense, {
            fallback: _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return _react.default.createElement(_react.default.Fragment, null, children);
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, childProp, error, errorStyles, templateStyles, loading, loadingStyles, hasLoading, template, notFound, notFoundStyles, styles } = param;
    const context = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url } = context;
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    if (!childNodesForParallelRouter) {
        childNodesForParallelRouter = new Map();
        childNodes.set(parallelRouterKey, childNodesForParallelRouter);
    }
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = childProp.segment;
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    const preservedSegments = [
        treeSegment
    ];
    return _react.default.createElement(_react.default.Fragment, null, styles, preservedSegments.map((preservedSegment)=>{
        const isChildPropSegment = (0, _matchsegments.matchSegment)(preservedSegment, childPropSegment);
        const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
        return _react.default.createElement(_approutercontext.TemplateContext.Provider, {
            key: (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true),
            value: _react.default.createElement(ScrollAndFocusHandler, {
                segmentPath: segmentPath
            }, _react.default.createElement(_errorboundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, _react.default.createElement(_redirectboundary.RedirectBoundary, null, _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: isChildPropSegment ? childProp : null,
                segmentPath: segmentPath,
                cacheKey: cacheKey,
                isActive: currentChildSegmentValue === preservedSegmentValue
            }))))))
        }, templateStyles, template);
    }));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project]/components/TheFooter.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "TheFooter": ()=>TheFooter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logo3$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/logo3.png.mjs/(IMAGE)/[project]/public/logo3.png (static) (structured image object, ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const TheFooter = ()=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("footer", {
        className: "footer",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex  text-white flex-col",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "footer-top ",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "main__container flex justify-between items-center pb-3 pt-5",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "logo",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logo3$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "logo",
                                    width: 150,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "<[project]/components/TheFooter.tsx>",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/TheFooter.tsx>",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "solution-contacts flex",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "mb-1",
                                                children: t("Our Contacts:")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TheFooter.tsx>",
                                                lineNumber: 21,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                className: "underline flex items-center",
                                                href: "mailto:support@myawardwallet.com",
                                                children: "support@myawardwallet.com"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TheFooter.tsx>",
                                                lineNumber: 22,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/TheFooter.tsx>",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                className: "underline ml-5 flex items-end mb-1",
                                                href: "/responsible-gaming",
                                                children: t("Responsible Gaming")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TheFooter.tsx>",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                className: "underline ml-5 flex items-end mb-1",
                                                href: "/privacy-policy",
                                                children: t("Privacy Policy")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TheFooter.tsx>",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                className: "underline ml-5 flex items-end ",
                                                href: "/terms-and-conditions",
                                                children: t("Terms and Conditions")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TheFooter.tsx>",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/TheFooter.tsx>",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/TheFooter.tsx>",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/TheFooter.tsx>",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/TheFooter.tsx>",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "footer-end",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "main__container pt-3 pb-3 flex justify-center",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            children: "Copyright \xa9 2024, topbon.us All rights reserved."
                        }, void 0, false, {
                            fileName: "<[project]/components/TheFooter.tsx>",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/TheFooter.tsx>",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/TheFooter.tsx>",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/TheFooter.tsx>",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/TheFooter.tsx>",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
;

})()),
"[project]/components/Fetcher/ErrorComponent.module.scss.module.css (css module, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "button": "button__ErrorComponent__8d977c06",
  "container": "container__ErrorComponent__8d977c06",
  "subtitle": "subtitle__ErrorComponent__8d977c06",
  "title": "title__ErrorComponent__8d977c06",
});

})()),
"[project]/components/Fetcher/ErrorComponent.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Update$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/Update.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$ErrorComponent$2e$module$2e$scss$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/components/Fetcher/ErrorComponent.module.scss.module.css (css module, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const ErrorComponent = ({ onReload })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$ErrorComponent$2e$module$2e$scss$2e$module$2e$css__$28$css__module$29$__["default"].container,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$ErrorComponent$2e$module$2e$scss$2e$module$2e$css__$28$css__module$29$__["default"].title,
                children: "Failed to load data"
            }, void 0, false, {
                fileName: "<[project]/components/Fetcher/ErrorComponent.tsx>",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$ErrorComponent$2e$module$2e$scss$2e$module$2e$css__$28$css__module$29$__["default"].subtitle,
                children: "Error occurred while loading. Try again."
            }, void 0, false, {
                fileName: "<[project]/components/Fetcher/ErrorComponent.tsx>",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                variant: "outlined",
                color: "error",
                startIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Update$2e$js__$28$ecmascript$29$__["default"], {}, void 0, false, void 0, void 0),
                onClick: onReload,
                children: "Reload page"
            }, void 0, false, {
                fileName: "<[project]/components/Fetcher/ErrorComponent.tsx>",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/Fetcher/ErrorComponent.tsx>",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ErrorComponent;

})()),
"[project]/components/Fetcher/Fetcher.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$ErrorComponent$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Fetcher/ErrorComponent.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const isNonNullableArray = (array)=>{
    return array.every((item)=>item != null);
};
const Fetcher = ({ payload, loading, loader, error, onReload, render })=>{
    if (loading) return loader;
    if (error) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$ErrorComponent$2e$tsx__$28$ecmascript$29$__["default"], {
        onReload: onReload
    }, void 0, false, {
        fileName: "<[project]/components/Fetcher/Fetcher.tsx>",
        lineNumber: 34,
        columnNumber: 21
    }, this);
    if (!isNonNullableArray(payload)) throw new Error("Unexpected error");
    return render(payload);
};
const __TURBOPACK__default__export__ = Fetcher;

})()),
"[project]/components/Fetcher/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "Fetcher": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$Fetcher$2e$tsx__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Fetcher$2f$Fetcher$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Fetcher/Fetcher.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/getBrands/getBrands.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getBrands": ()=>getBrands
});
const getBrands = async (categoryBrands, lng)=>{
    const apiAll = "https://pickbonus.myawardwallet.com/api/brandsNew/read.php";
    const api1039 = "https://pickbonus.myawardwallet.com/api/brandsNew2/read.php";
    const api1043 = "https://pickbonus.myawardwallet.com/api/brandsNew3/read.php";
    const api1044 = "https://pickbonus.myawardwallet.com/api/brandsNew4/read.php";
    const availableLanguages = [
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
"[project]/components/getUser/pushPayment.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

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
        const response = await fetch("https://pickbonus.myawardwallet.com/api/addStatus/add_status.php", {
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
            const leadsOnlyBrands = brandsData.filter((brand)=>leadsIds.includes(brand.KeitaroGoBigID) && !salesIds.includes(brand.KeitaroGoBigID));
            setBrands(leadsOnlyBrands);
            setOtherBrands(brandsData.filter((brand)=>!leadsIds.includes(brand.KeitaroGoBigID)));
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
                lineNumber: 117,
                columnNumber: 21
            }, this),
            brands.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: t("Your Registration Completed, First Deposit Awaited")
            }, void 0, false, {
                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                lineNumber: 119,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-wrap px-0 py-6",
                children: brands.map((brand)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](BrandCard, {
                        brand: brand,
                        savedUrl: savedUrl,
                        t: t
                    }, brand.id_brand, false, {
                        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            otherBrands.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: t("Registration and First Deposit Not Completed")
            }, void 0, false, {
                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                lineNumber: 127,
                columnNumber: 9
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
                        lineNumber: 131,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
        lineNumber: 116,
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
                            lineNumber: 170,
                            columnNumber: 9
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "review-bonus",
                                children: brand.OurOfferContent
                            }, void 0, false, {
                                fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                            lineNumber: 176,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                    lineNumber: 166,
                    columnNumber: 7
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "buttons flex items-center justify-between",
                    children: [
                        register ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "btn btn-secondary btn-fz btn-fzl mr-2",
                            onClick: register,
                            children: t("I'm Registered")
                        }, void 0, false, {
                            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this) : "",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            className: "btn btn-primary btn-fz",
                            href: `${brand.GoBig}/${savedUrl}`,
                            children: t("Deposit Now")
                        }, void 0, false, {
                            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                            lineNumber: 191,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
                    lineNumber: 180,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
            lineNumber: 161,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/UserBrands/UserBrands.tsx>",
        lineNumber: 160,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = UserBrands;

})()),
"[project]/components/personal/FinallyStep/FinallyStep.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "FinallyStep": ()=>FinallyStep
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBrands$2f$UserBrands$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/UserBrands/UserBrands.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const FinallyStep = ({ brands })=>{
    const savedUrl = localStorage.getItem("savedUrl");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](StyledDiv, {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-wrap px-0 py-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBrands$2f$UserBrands$2e$tsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/personal/FinallyStep/FinallyStep.tsx>",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/personal/FinallyStep/FinallyStep.tsx>",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/personal/FinallyStep/FinallyStep.tsx>",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/personal/FinallyStep/FinallyStep.tsx>",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
const StyledDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["styled"]("div")(()=>`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `);

})()),
"[project]/components/personal/FinallyStep/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "FinallyStep": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$FinallyStep$2f$FinallyStep$2e$tsx__$28$ecmascript$29$__["FinallyStep"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$FinallyStep$2f$FinallyStep$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/FinallyStep/FinallyStep.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/personal/PaymentHistory/PaymentHistory.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PaymentHistory": ()=>PaymentHistory
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/utils/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dayjs/dayjs.min.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    return order === "desc" ? (a, b)=>descendingComparator(a, b, orderBy) : (a, b)=>-descendingComparator(a, b, orderBy);
}
const headCells = [
    {
        id: "paymentMethod",
        numeric: false,
        disablePadding: true,
        label: "Method"
    },
    {
        id: "paymentSumIn",
        numeric: false,
        disablePadding: false,
        label: "Amount"
    },
    {
        id: "paymentAddress",
        numeric: false,
        disablePadding: false,
        label: "Wallet address"
    },
    {
        id: "timestamp",
        numeric: false,
        disablePadding: false,
        label: "Time of request"
    },
    {
        id: "status",
        numeric: false,
        disablePadding: false,
        label: "Status"
    }
];
function EnhancedTableHead({ order, orderBy, onRequestSort }) {
    const createSortHandler = (property)=>(event)=>{
            onRequestSort(event, property);
        };
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableHead"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableRow"], {
            children: headCells.map((headCell)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableCell"], {
                    align: headCell.numeric ? "right" : "left",
                    sortDirection: orderBy === headCell.id ? order : false,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableSortLabel"], {
                        active: orderBy === headCell.id,
                        direction: orderBy === headCell.id ? order : "asc",
                        onClick: createSortHandler(headCell.id),
                        children: [
                            t(headCell.label),
                            orderBy === headCell.id ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
                                component: "span",
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$index$2e$js__$28$ecmascript$29$__["visuallyHidden"],
                                children: order === "desc" ? "sorted descending" : "sorted ascending"
                            }, void 0, false, {
                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                lineNumber: 130,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                        lineNumber: 123,
                        columnNumber: 13
                    }, this)
                }, headCell.id, false, {
                    fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                    lineNumber: 118,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
const PaymentHistory = ({ statusPayment })=>{
    const paymentHistory = JSON.parse(statusPayment ?? "[]");
    const [order, setOrder] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("desc");
    const [orderBy, setOrderBy] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("timestamp");
    const [page, setPage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [rowsPerPage, setRowsPerPage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](5);
    const handleRequestSort = (event, property)=>{
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };
    const onChangePage = (_e, nextPage)=>{
        setPage(nextPage);
    };
    const onChangeRowsPerPage = (e)=>{
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };
    const sortedRows = paymentHistory.sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](CustomPaper, {
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Toolbar"], {
                    sx: {
                        pl: {
                            sm: 2
                        },
                        pr: {
                            xs: 1,
                            sm: 1
                        }
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Typography"], {
                        variant: "h2",
                        id: "tableTitle",
                        component: "div",
                        children: t("Withdrawal History")
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableContainer"], {
                    className: "mobile-wrap",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Table"], {
                        className: "mobile-container",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](EnhancedTableHead, {
                                order: order,
                                orderBy: orderBy,
                                onRequestSort: handleRequestSort
                            }, void 0, false, {
                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableBody"], {
                                children: sortedRows.map((row, idx)=>{
                                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](CustomTableRow, {
                                        hover: true,
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableCell"], {
                                                children: row.paymentMethod
                                            }, void 0, false, {
                                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                                lineNumber: 200,
                                                columnNumber: 21
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableCell"], {
                                                children: [
                                                    row.USD,
                                                    "$"
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                                lineNumber: 201,
                                                columnNumber: 21
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableCell"], {
                                                children: row.paymentAddress
                                            }, void 0, false, {
                                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableCell"], {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$28$ecmascript$29$__["default"](row.timestamp).format("ddd, DD MMM YYYY hh:mm:ss a")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                                lineNumber: 203,
                                                columnNumber: 21
                                            }, this),
                                            row.status === "Waiting" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](WaitingStatusCell, {
                                                children: row.status
                                            }, void 0, false, {
                                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                                lineNumber: 209,
                                                columnNumber: 23
                                            }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](ActiveStatusCell, {
                                                children: row.status
                                            }, void 0, false, {
                                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                                lineNumber: 211,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                        lineNumber: 199,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TablePagination"], {
                    rowsPerPageOptions: [
                        5,
                        10,
                        25
                    ],
                    component: "div",
                    count: paymentHistory.length,
                    rowsPerPage: rowsPerPage,
                    page: page,
                    onPageChange: onChangePage,
                    onRowsPerPageChange: onChangeRowsPerPage
                }, void 0, false, {
                    fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
                    lineNumber: 219,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
            lineNumber: 178,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/personal/PaymentHistory/PaymentHistory.tsx>",
        lineNumber: 177,
        columnNumber: 5
    }, this);
};
const CustomTableRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableRow"])(({ theme })=>({
        "&:nth-of-type(odd)": {
            backgroundColor: "#F0F3F7"
        }
    }));
const WaitingStatusCell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableCell"])(({ theme })=>({
        color: "#BC7710"
    }));
const ActiveStatusCell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TableCell"])(({ theme })=>({
        color: "#07B963"
    }));
const CustomPaper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Paper"])(({ theme })=>({
        boxShadow: "none"
    }));

})()),
"[project]/components/personal/PaymentHistory/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PaymentHistory": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PaymentHistory$2f$PaymentHistory$2e$tsx__$28$ecmascript$29$__["PaymentHistory"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PaymentHistory$2f$PaymentHistory$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/PaymentHistory/PaymentHistory.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PaymentMethodStep": ()=>PaymentMethodStep
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const MIN_AMOUNT = 4;
const getHelperText = (amount, isLessThanFour, isMoreThanUserBalance, isError, t)=>{
    if (!!amount && isLessThanFour) return t("Withdrawal rejected: Minimum withdrawal amount is 4 USD.");
    if (!!amount && isMoreThanUserBalance) return t("Not enough funds in the account.");
    if (isError) return t("Something wrong, try again!");
    return undefined;
};
const PaymentMethodStep = ({ user, coins, step, coin, amount, onChangeStep, onChangeCoin, onChangeAmount, getFeeAndEstimatedAmount })=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [isError, setIsError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const isLessThanFour = Number(amount) < MIN_AMOUNT;
    const isMoreThanUserBalance = Number(amount) > Number(user.balance);
    const isButtonNextStepDisabled = !amount || isLessThanFour || isMoreThanUserBalance;
    const error = !!amount && (isLessThanFour || isMoreThanUserBalance) || isError;
    const helperText = getHelperText(amount, isLessThanFour, isMoreThanUserBalance, isError, t);
    const isPayPal = coin === "PayPal";
    const getFeeAndEstimatedAmountAndThanGoToWalletAddressStep = async ()=>{
        setIsLoading(true);
        setIsError(false);
        try {
            if (!isPayPal) {
                await getFeeAndEstimatedAmount();
            }
            onChangeStep(step + 1);
            setIsLoading(false);
        } catch (e) {
            setIsError(true);
            setIsLoading(false);
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](StyledDiv, {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Select"], {
                className: `select_coins ${coin}`,
                value: coin,
                onChange: onChangeCoin,
                children: [
                    coins.map((coin)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["MenuItem"], {
                            className: `${coin}`,
                            value: coin,
                            children: coin
                        }, coin, false, {
                            fileName: "<[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx>",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["MenuItem"], {
                        className: "PayPal",
                        value: "PayPal",
                        children: "PayPal"
                    }, "paypal", false, {
                        fileName: "<[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx>",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx>",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TextField"], {
                className: "input_number",
                placeholder: t("Sum"),
                value: amount,
                onChange: (e)=>{
                    setIsError(false);
                    onChangeAmount(e);
                },
                type: "number",
                error: error,
                helperText: helperText
            }, void 0, false, {
                fileName: "<[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx>",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                    className: "btn-primary w-48",
                    variant: "contained",
                    onClick: getFeeAndEstimatedAmountAndThanGoToWalletAddressStep,
                    disabled: isButtonNextStepDisabled,
                    children: t("Next step")
                }, void 0, false, {
                    fileName: "<[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx>",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx>",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx>",
                lineNumber: 134,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx>",
        lineNumber: 97,
        columnNumber: 5
    }, this);
};
const StyledDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["styled"]("div")(()=>`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `);

})()),
"[project]/components/personal/PaymentMethodStep/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PaymentMethodStep": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PaymentMethodStep$2f$PaymentMethodStep$2e$tsx__$28$ecmascript$29$__["PaymentMethodStep"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PaymentMethodStep$2f$PaymentMethodStep$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/PaymentMethodStep/PaymentMethodStep.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/personal/OTP/OTP.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "OTP": ()=>OTP
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$base$2f$Input$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/base/Input/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const OTP = ({ separator, length, value, onChange })=>{
    const inputRefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](new Array(length).fill(null));
    const focusInput = (targetIndex)=>{
        const targetInput = inputRefs.current[targetIndex];
        targetInput.focus();
    };
    const selectInput = (targetIndex)=>{
        const targetInput = inputRefs.current[targetIndex];
        targetInput.select();
    };
    const handleKeyDown = (event, currentIndex)=>{
        switch(event.key){
            case "ArrowUp":
            case "ArrowDown":
            case " ":
                event.preventDefault();
                break;
            case "ArrowLeft":
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                break;
            case "ArrowRight":
                event.preventDefault();
                if (currentIndex < length - 1) {
                    focusInput(currentIndex + 1);
                    selectInput(currentIndex + 1);
                }
                break;
            case "Delete":
                event.preventDefault();
                onChange((prevOtp)=>{
                    const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
                    return otp;
                });
                break;
            case "Backspace":
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                onChange((prevOtp)=>{
                    const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
                    return otp;
                });
                break;
            default:
                break;
        }
    };
    const handleChange = (event, currentIndex)=>{
        const currentValue = event.target.value;
        let indexToEnter = 0;
        while(indexToEnter <= currentIndex){
            if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
                indexToEnter += 1;
            } else {
                break;
            }
        }
        onChange((prev)=>{
            const otpArray = prev.split("");
            const lastValue = currentValue[currentValue.length - 1];
            otpArray[indexToEnter] = lastValue;
            return otpArray.join("");
        });
        if (currentValue !== "") {
            if (currentIndex < length - 1) {
                focusInput(currentIndex + 1);
            }
        }
    };
    const handleClick = (event, currentIndex)=>{
        selectInput(currentIndex);
    };
    const handlePaste = (event, currentIndex)=>{
        event.preventDefault();
        const clipboardData = event.clipboardData;
        if (clipboardData.types.includes("text/plain")) {
            let pastedText = clipboardData.getData("text/plain");
            pastedText = pastedText.substring(0, length).trim();
            let indexToEnter = 0;
            while(indexToEnter <= currentIndex){
                if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
                    indexToEnter += 1;
                } else {
                    break;
                }
            }
            const otpArray = value.split("");
            for(let i = indexToEnter; i < length; i += 1){
                const lastValue = pastedText[i - indexToEnter] ?? " ";
                otpArray[i] = lastValue;
            }
            onChange(otpArray.join(""));
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
        sx: {
            display: "flex",
            gap: 1,
            alignItems: "center"
        },
        children: new Array(length).fill(null).map((_, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["Fragment"], {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$base$2f$Input$2f$index$2e$js__$28$ecmascript$29$__["Input"], {
                        slots: {
                            input: InputElement
                        },
                        "aria-label": `Digit ${index + 1} of OTP`,
                        slotProps: {
                            input: {
                                ref: (ele)=>{
                                    inputRefs.current[index] = ele;
                                },
                                onKeyDown: (event)=>handleKeyDown(event, index),
                                onChange: (event)=>handleChange(event, index),
                                onClick: (event)=>handleClick(event, index),
                                onPaste: (event)=>handlePaste(event, index),
                                value: value[index] ?? ""
                            }
                        }
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/OTP/OTP.tsx>",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    index === length - 1 ? null : separator
                ]
            }, index, true, {
                fileName: "<[project]/components/personal/OTP/OTP.tsx>",
                lineNumber: 152,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "<[project]/components/personal/OTP/OTP.tsx>",
        lineNumber: 150,
        columnNumber: 5
    }, this);
};
const InputElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["styled"]("input")(({ theme })=>`
  width: 40px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 0px;
  border-radius: 8px;
  text-align: center;
  color: ${theme.palette.mode === "dark" ? "#C7D0DD" : "#1C2025"};
  background: ${theme.palette.mode === "dark" ? "#1C2025" : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? "#434D5B" : "#DAE2ED"};
  box-shadow: 0px 2px 4px ${theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"};

  &:hover {
    border-color: #3399FF;
  }

  &:focus {
    border-color: #3399FF;
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? "#0072E5" : "#80BFFF"};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`);

})()),
"[project]/components/personal/OTP/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "OTP": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$OTP$2f$OTP$2e$tsx__$28$ecmascript$29$__["OTP"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$OTP$2f$OTP$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/OTP/OTP.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PhoneNumberStep": ()=>PhoneNumberStep
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mui$2d$tel$2d$input$2f$dist$2f$mui$2d$tel$2d$input$2e$es$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mui-tel-input/dist/mui-tel-input.es.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$OTP$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/OTP/index.ts (ecmascript, ssr)");
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
const DEFAULT_OTP_LENGTH = 5;
const DEFAULT_PHONE_NUMBER_LENGTH = 6;
const hasConfirmOtpResponseStatus = (response)=>"status" in response;
const PhoneNumberStep = ({ user, step, phoneNumber, onChangeStep, onChangePhoneNumber })=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const defaultCountry = localStorage.getItem("country_phone") ?? undefined;
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [otp, setOtp] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [otpMessage, setOtpMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [isDialogOpen, setIsDialogOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [saveUserPhoneNumber, { loading: isSaveUserPhoneNumberLoading, error: isEaveUserPhoneNumberError }] = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useMutationSaveUserPhoneNumber"]();
    const [sendUserPhoneNumber, { data: sendUserPhoneNumberData, loading: isSendUserPhoneNumberLoading, error: isSendUserPhoneNumberError, message: sendUserPhoneNumberMessage }] = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useMutationSendUserPhoneNumber"]();
    const onSendUserPhoneNumber = async (phoneNumber)=>{
        setOtp("");
        setOtpMessage("");
        setIsDialogOpen(false);
        await sendUserPhoneNumber({
            phoneNumber
        });
        setIsDialogOpen(true);
    };
    const onConfirmOtp = async ()=>{
        if (!sendUserPhoneNumberData) return;
        setIsLoading(true);
        setOtpMessage("");
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
            if (hasConfirmOtpResponseStatus(data) && data.status === "APPROVED") {
                await saveUserPhoneNumber({
                    userId: user.id,
                    phoneNumber
                });
                onCloseDialog();
                setIsLoading(false);
                onChangeStep(step + 1);
                return;
            }
            if (hasConfirmOtpResponseStatus(data) && data.status === "EXPIRED") {
                setOtpMessage(t("Your OTP expired"));
                setIsLoading(false);
                return;
            }
            if (!hasConfirmOtpResponseStatus(data)) {
                setOtpMessage(data.message);
                setIsLoading(false);
                return;
            }
            setIsLoading(false);
        } catch (e) {
            setOtpMessage(t("Something wrong, try again!"));
            setIsLoading(false);
        }
    };
    const onCloseDialog = ()=>{
        setIsDialogOpen(false);
    };
    const isButtonContinueDisabled = otp.length < DEFAULT_OTP_LENGTH;
    const isLoaderShown = isSendUserPhoneNumberLoading || isLoading || isSaveUserPhoneNumberLoading;
    const isButtonSendCodeDisabled = phoneNumber.length < DEFAULT_PHONE_NUMBER_LENGTH;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](StyledDiv, {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](StyledBoxTel, {
                className: "relative",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mui$2d$tel$2d$input$2f$dist$2f$mui$2d$tel$2d$input$2e$es$2e$js__$28$ecmascript$29$__["MuiTelInput"], {
                        className: "input_phone",
                        value: phoneNumber,
                        onChange: onChangePhoneNumber,
                        defaultCountry: defaultCountry,
                        fullWidth: true,
                        helperText: sendUserPhoneNumberMessage,
                        error: isSendUserPhoneNumberError
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](StyledButton, {
                        disabled: isButtonSendCodeDisabled,
                        className: "btn-primary absolute right-2 btn-radius",
                        variant: "contained",
                        onClick: ()=>{
                            onSendUserPhoneNumber(phoneNumber);
                        },
                        children: t("Send code")
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen && !isSendUserPhoneNumberError,
                onClose: onCloseDialog,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](StyledBox, {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$OTP$2f$index$2e$ts__$28$ecmascript$29$__["OTP"], {
                            length: DEFAULT_OTP_LENGTH,
                            value: otp,
                            onChange: setOtp,
                            separator: ""
                        }, void 0, false, {
                            fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    otpMessage && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: otpMessage
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 182,
                        columnNumber: 24
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                        className: "btn-primary",
                        variant: "contained",
                        onClick: onConfirmOtp,
                        disabled: isButtonContinueDisabled,
                        children: t("Continue")
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                        className: "btn-primary w-48 !mr-2",
                        variant: "contained",
                        onClick: ()=>{
                            onChangeStep(step - 1);
                        },
                        children: t("Prev step")
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                        className: "btn-primary w-48",
                        variant: "contained",
                        onClick: ()=>{
                            onChangeStep(step + 1);
                        },
                        children: t("Skip")
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            isLoaderShown && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
                lineNumber: 212,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx>",
        lineNumber: 147,
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
    padding: 16px;
  `);

})()),
"[project]/components/personal/PhoneNumberStep/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "PhoneNumberStep": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PhoneNumberStep$2f$PhoneNumberStep$2e$tsx__$28$ecmascript$29$__["PhoneNumberStep"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$PhoneNumberStep$2f$PhoneNumberStep$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/PhoneNumberStep/PhoneNumberStep.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/personal/Tabs/Tabs.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "Tabs": ()=>Tabs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/index.esm.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const iconMap = {
    "Withdrawal Request": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Bank"],
    "Withdrawal History": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["ClockCounterClockwise"],
    "Cards Shop": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["ShoppingCart"],
    "Premium Casino": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Spade"]
};
const getLabel = (label)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
        component: "span",
        display: "flex",
        alignItems: "center",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Typography"], {
            component: "span",
            marginLeft: 1,
            children: label
        }, void 0, false, {
            fileName: "<[project]/components/personal/Tabs/Tabs.tsx>",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, label, false, {
        fileName: "<[project]/components/personal/Tabs/Tabs.tsx>",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
const Tabs = ({ value, onChange, tabs })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Tabs"], {
                className: "tabs_pagination",
                orientation: "vertical",
                variant: "scrollable",
                value: value,
                onChange: onChange,
                sx: {
                    borderRight: 1,
                    borderColor: "divider"
                },
                children: tabs.labels.map((label)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Tab"], {
                        className: "tab-label",
                        label: getLabel(label)
                    }, label, false, {
                        fileName: "<[project]/components/personal/Tabs/Tabs.tsx>",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/components/personal/Tabs/Tabs.tsx>",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            tabs.content.map((content, idx)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](TabPanel, {
                    index: idx,
                    value: value,
                    className: "tab_panel",
                    children: content
                }, idx, false, {
                    fileName: "<[project]/components/personal/Tabs/Tabs.tsx>",
                    lineNumber: 76,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true);
};
const TabPanel = ({ children, value, index, className })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        role: "tabpanel",
        hidden: value !== index,
        style: {
            width: "100%"
        },
        className: className,
        children: value === index && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
            sx: {
                p: 3
            },
            children: children
        }, void 0, false, {
            fileName: "<[project]/components/personal/Tabs/Tabs.tsx>",
            lineNumber: 99,
            columnNumber: 27
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/personal/Tabs/Tabs.tsx>",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};

})()),
"[project]/components/personal/Tabs/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "Tabs": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$Tabs$2f$Tabs$2e$tsx__$28$ecmascript$29$__["Tabs"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$Tabs$2f$Tabs$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/Tabs/Tabs.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
"[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "WalletAddressStep": ()=>WalletAddressStep
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/queries/index.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const WalletAddressStep = ({ user, step, coin, walletAddress, amount, estimatedAmount, onChangeStep, onChangeWalletAddress, fetchBrands, onFinish })=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const [walletAddressValidate, { data: isWalletAddressValid, loading: isWalletAddressValidateLoading, error: isWalletAddressValidateError, message: walletAddressValidateMessage }] = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useMutationWalletAddressValidate"](coin, walletAddress);
    const [updatePayment, { loading: isUpdatePaymentLoading, error: isUpdatePaymentError, message: updatePaymentMessage }] = __TURBOPACK__imported__module__$5b$project$5d2f$queries$2f$index$2e$ts__$28$ecmascript$29$__["useMutationUpdatePayment"](user.id, coin, estimatedAmount, walletAddress, amount);
    const updatePaymentWithValidate = async ()=>{
        const response = await walletAddressValidate();
        if (!response) return;
        const isUpdated = await updatePayment();
        if (!isUpdated) return;
        await onFinish();
        await fetchBrands();
        onChangeStep(step + 1);
    };
    const updatePaymentWithoutValidate = async ()=>{
        const isUpdated = await updatePayment();
        if (!isUpdated) return;
        await onFinish();
        await fetchBrands();
        onChangeStep(step + 1);
    };
    const isButtonNextStepDisabled = !walletAddress;
    const isError = isWalletAddressValid !== null && !isWalletAddressValid || isWalletAddressValidateError || isUpdatePaymentError;
    const isLoaderShown = isWalletAddressValidateLoading || isUpdatePaymentLoading;
    const isPayPal = coin === "PayPal";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](StyledDiv, {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["TextField"], {
                className: "input_address",
                value: walletAddress,
                onChange: onChangeWalletAddress,
                error: isError,
                helperText: walletAddressValidateMessage ?? updatePaymentMessage,
                fullWidth: true
            }, void 0, false, {
                fileName: "<[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx>",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            isPayPal && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "paypalnote",
                children: t("Please note: PayPal withdrawals are processed every day from 7 AM to 8 PM CET")
            }, void 0, false, {
                fileName: "<[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx>",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Box"], {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                        className: "btn-primary w-48 !mr-2",
                        variant: "contained",
                        onClick: ()=>{
                            onChangeStep(step - 1);
                        },
                        children: t("Prev step")
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx>",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$index$2e$js__$28$ecmascript$29$__["Button"], {
                        className: "btn-primary w-48",
                        variant: "contained",
                        onClick: isPayPal ? updatePaymentWithoutValidate : updatePaymentWithValidate,
                        disabled: isButtonNextStepDisabled,
                        children: t("Next step")
                    }, void 0, false, {
                        fileName: "<[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx>",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx>",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            isLoaderShown && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx>",
                lineNumber: 132,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx>",
        lineNumber: 94,
        columnNumber: 5
    }, this);
};
const StyledDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["styled"]("div")(()=>`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `);

})()),
"[project]/components/personal/WalletAddressStep/index.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "WalletAddressStep": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$WalletAddressStep$2f$WalletAddressStep$2e$tsx__$28$ecmascript$29$__["WalletAddressStep"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$personal$2f$WalletAddressStep$2f$WalletAddressStep$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/personal/WalletAddressStep/WalletAddressStep.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;

})()),
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
}]);

//# sourceMappingURL=_c7f72d._.js.map