(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/[next]_internal_nodejs-proxy-handler_ts_22c092._.js", {

"[next]/internal/next-request-helpers.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "attachRequestMeta": ()=>attachRequestMeta
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/request-meta.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$body$2d$streams$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/body-streams.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function attachRequestMeta(req, parsedUrl, host) {
    const protocol = (req.originalRequest?.socket)?.encrypted ? 'https' : 'http';
    const initUrl = `${protocol}://${host}${req.url}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__["addRequestMeta"](req, '__NEXT_INIT_URL', initUrl);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__["addRequestMeta"](req, '__NEXT_INIT_QUERY', {
        ...parsedUrl.query
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__["addRequestMeta"](req, '_protocol', protocol);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__["addRequestMeta"](req, '__NEXT_CLONABLE_BODY', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$body$2d$streams$2e$js__$28$ecmascript$29$__["getCloneableBody"](req.body));
}

})()),
"[next]/internal/headers.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "headersFromEntries": ()=>headersFromEntries,
    "initProxiedHeaders": ()=>initProxiedHeaders,
    "toPairs": ()=>toPairs
});
function headersFromEntries(entries) {
    const headers = Object.create(null);
    for (const [key, value] of entries){
        if (key in headers) {
            const prevValue = headers[key];
            if (typeof prevValue === 'string') {
                headers[key] = [
                    prevValue,
                    value
                ];
            } else {
                prevValue.push(value);
            }
        } else {
            headers[key] = value;
        }
    }
    return headers;
}
function toPairs(arr) {
    if (arr.length % 2 !== 0) {
        throw new Error('toPairs: expected an even number of elements');
    }
    const pairs = [];
    for(let i = 0; i < arr.length; i += 2){
        pairs.push([
            arr[i],
            arr[i + 1]
        ]);
    }
    return pairs;
}
function initProxiedHeaders(headers, proxiedFor) {
    const hostname = proxiedFor?.hostname || 'localhost';
    const port = String(proxiedFor?.port || 3000);
    headers['x-forwarded-for'] = proxiedFor?.ip || '::1';
    headers['x-forwarded-host'] = `${hostname}:${port}`;
    headers['x-forwarded-port'] = port;
    headers['x-forwarded-proto'] = proxiedFor?.protocol || 'http';
    return headers;
}

})()),
"[next]/internal/server.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "createServer": ()=>createServer,
    "makeRequest": ()=>makeRequest
});
var __TURBOPACK__external__node$3a$http__ = __turbopack_external_require__("node:http", true);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/headers.ts (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function createServer() {
    return new Promise((resolve)=>{
        const server = __TURBOPACK__external__node$3a$http__["default"].createServer();
        server.listen(0, ()=>{
            resolve(server);
        });
    });
}
function makeRequest(server, method, path, rawQuery, rawHeaders, proxiedFor) {
    return new Promise((resolve, reject)=>{
        let clientResponseResolve;
        let clientResponseReject;
        const clientResponsePromise = new Promise((resolve, reject)=>{
            clientResponseResolve = resolve;
            clientResponseReject = reject;
        });
        const errorListener = (err)=>{
            server.removeListener('request', requestListener);
            reject(err);
        };
        const requestListener = (req, res)=>{
            server.removeListener('error', errorListener);
            resolve({
                clientRequest,
                clientResponsePromise,
                serverRequest: req,
                serverResponse: res
            });
        };
        server.once('request', requestListener);
        server.once('error', errorListener);
        const address = server.address();
        const headers = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__["headersFromEntries"](rawHeaders ?? []);
        __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__["initProxiedHeaders"](headers, proxiedFor);
        const clientRequest = __TURBOPACK__external__node$3a$http__["default"].request({
            host: 'localhost',
            port: address.port,
            method,
            path: rawQuery?.length ? `${path}?${rawQuery}` : path,
            headers
        });
        clientRequest.flushHeaders();
        const clientResponseErrorListener = (err)=>{
            clientRequest.removeListener('response', responseListener);
            clientResponseReject(err);
        };
        const responseListener = (res)=>{
            clientRequest.removeListener('error', clientResponseErrorListener);
            clientResponseResolve(res);
        };
        clientRequest.once('response', responseListener);
        clientRequest.once('error', clientResponseErrorListener);
    });
}

})()),
"[next]/internal/operation-stream.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>startHandler
});
var __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$ipc$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[turbopack-node]/ipc/index.ts (ecmascript, ssr)");
var __TURBOPACK__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function startHandler(createOperation) {
    const ipc = __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$ipc$2f$index$2e$ts__$28$ecmascript$29$__["IPC"];
    (async ()=>{
        while(true){
            let operation;
            {
                const msg = await ipc.recv();
                switch(msg.type){
                    case 'headers':
                        {
                            operation = await createOperation(msg.data, (data)=>{
                                ipc.send({
                                    type: 'headers',
                                    data
                                });
                                return {
                                    chunk: (buf)=>{
                                        return ipc.send({
                                            type: 'bodyChunk',
                                            data: buf.toJSON().data
                                        });
                                    },
                                    end: ()=>{
                                        return ipc.send({
                                            type: 'bodyEnd'
                                        });
                                    }
                                };
                            }, (error)=>{
                                return ipc.sendError(error instanceof Error ? error : new Error(`an unknown error occurred: ${error}`));
                            });
                            break;
                        }
                    default:
                        {
                            console.error('unexpected message type', msg.type);
                            process.exit(1);
                        }
                }
            }
            if (operation) {
                if (operation.streamRequest) {
                    loop: while(true){
                        const msg = await ipc.recv();
                        switch(msg.type){
                            case 'bodyChunk':
                            case 'bodyText':
                                {
                                    await operation.onChunk?.(__TURBOPACK__external__node$3a$buffer__["Buffer"].from(msg.data));
                                    break;
                                }
                            case 'bodyEnd':
                                {
                                    await operation.onEnd?.();
                                    break loop;
                                }
                            default:
                                {
                                    console.error('unexpected message type', msg.type);
                                    process.exit(1);
                                }
                        }
                    }
                } else {
                    let body = __TURBOPACK__external__node$3a$buffer__["Buffer"].alloc(0);
                    loop: while(true){
                        const msg = await ipc.recv();
                        switch(msg.type){
                            case 'bodyChunk':
                            case 'bodyText':
                                {
                                    body = __TURBOPACK__external__node$3a$buffer__["Buffer"].concat([
                                        body,
                                        __TURBOPACK__external__node$3a$buffer__["Buffer"].from(msg.data)
                                    ]);
                                    break;
                                }
                            case 'bodyEnd':
                                {
                                    await operation.onBody?.(body);
                                    break loop;
                                }
                            default:
                                {
                                    console.error('unexpected message type', msg.type);
                                    process.exit(1);
                                }
                        }
                    }
                }
            }
        }
    })().catch((err)=>{
        ipc.sendError(err);
    });
}

})()),
"[next]/internal/api-server-handler.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>startHandler
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$operation$2d$stream$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/operation-stream.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$server$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/server.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/headers.ts (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function startHandler(handler) {
    __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$operation$2d$stream$2e$ts__$28$ecmascript$29$__["default"](async (renderData, respond, reportError)=>{
        const operationPromise = async function createOperation() {
            const server = await __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$server$2e$ts__$28$ecmascript$29$__["createServer"]();
            const { clientRequest, clientResponsePromise, serverRequest, serverResponse } = await __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$server$2e$ts__$28$ecmascript$29$__["makeRequest"](server, renderData.method, renderData.path, renderData.rawQuery, renderData.rawHeaders, renderData.data?.serverInfo);
            return {
                clientRequest,
                server,
                clientResponsePromise,
                apiOperation: handler({
                    request: serverRequest,
                    response: serverResponse,
                    query: renderData.rawQuery,
                    params: renderData.params,
                    path: renderData.path
                })
            };
        }();
        function handleClientResponse(server, clientResponse) {
            const responseHeaders = {
                status: clientResponse.statusCode,
                headers: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__["toPairs"](clientResponse.rawHeaders)
            };
            const channel = respond(responseHeaders);
            clientResponse.on('data', (chunk)=>{
                channel.chunk(chunk);
            });
            clientResponse.once('end', ()=>{
                channel.end();
                server.close();
            });
            clientResponse.once('error', (err)=>{
                reportError(err);
            });
        }
        async function endOperation(operation, body) {
            operation.clientRequest.end(body);
            try {
                await operation.apiOperation;
            } catch (error) {
                await reportError(error);
                return;
            }
        }
        return {
            streamRequest: false,
            onBody: async (body)=>{
                const operation = await operationPromise;
                await Promise.all([
                    endOperation(operation, body),
                    operation.clientResponsePromise.then((clientResponse)=>handleClientResponse(operation.server, clientResponse))
                ]);
            }
        };
    });
}

})()),
"[next]/internal/nodejs-proxy-handler.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$api$2d$server$2d$handler$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/api-server-handler.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$next$5d2f$polyfill$2f$app$2d$polyfills$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/polyfill/app-polyfills.ts (ecmascript, ssr)");
var __TURBOPACK__external__node$3a$url__ = __turbopack_external_require__("node:url", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$base$2d$http$2f$node$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/base-http/node.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$send$2d$response$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/send-response.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/next-request.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$next$2d$request$2d$helpers$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/next-request-helpers.ts (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (routeModule)=>{
    __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$api$2d$server$2d$handler$2e$ts__$28$ecmascript$29$__["default"](async ({ request, response, params })=>{
        const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$base$2d$http$2f$node$2e$js__$28$ecmascript$29$__["NodeNextRequest"](request);
        const res = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$base$2d$http$2f$node$2e$js__$28$ecmascript$29$__["NodeNextResponse"](response);
        const parsedUrl = __TURBOPACK__external__node$3a$url__["parse"](req.url, true);
        __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$next$2d$request$2d$helpers$2e$ts__$28$ecmascript$29$__["attachRequestMeta"](req, parsedUrl, request.headers.host);
        const context = {
            params,
            prerenderManifest: {
                version: -1,
                routes: {},
                dynamicRoutes: {},
                notFoundRoutes: [],
                preview: {
                    previewModeId: 'development-id'
                }
            },
            staticGenerationContext: {
                supportsDynamicHTML: true
            }
        };
        const routeResponse = await routeModule.handle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$28$ecmascript$29$__["NextRequestAdapter"].fromNodeNextRequest(req), context);
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$send$2d$response$2e$js__$28$ecmascript$29$__["sendResponse"](req, res, routeResponse);
    });
};

})()),
}]);

//# sourceMappingURL=[next]_internal_nodejs-proxy-handler_ts_22c092._.js.map