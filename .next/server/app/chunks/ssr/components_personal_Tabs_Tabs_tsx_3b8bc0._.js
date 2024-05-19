(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_personal_Tabs_Tabs_tsx_3b8bc0._.js", {

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
}]);

//# sourceMappingURL=components_personal_Tabs_Tabs_tsx_3b8bc0._.js.map