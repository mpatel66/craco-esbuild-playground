"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// GENERATED FILE, DO NOT EDIT ME. instead, run `yarn generate:react`;
const React = __importStar(require("react"));
const SvgImproveCashflow = (_a) => {
    var { title, titleId } = _a, props = __rest(_a, ["title", "titleId"]);
    return props.blockRender ? null : (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0v20h20V0z" }),
            React.createElement("path", { fill: "currentColor", d: "M15.486 2.108a.476.476 0 01.336.334c.143.664.172 1.353.177 1.947v.56c0 2.796-1.564 4.677-3.544 5.944v2.54c0 .443-.324.963-.722 1.16l-2.688 1.339a.652.652 0 01-.945-.582v-2.3l-.68.4c-.105.057-.546.18-1.025-.308L4.93 11.687c-.142-.14-.503-.413-.503-.611 0-.111.04-.282.09-.381l.413-.763H2.654A.652.652 0 012 9.282c0-.084.03-.214.069-.29l1.346-2.676c.2-.396.722-.717 1.167-.718h2.516c1.273-1.974 2.994-3.126 5.795-3.49.694-.09 1.704-.19 2.593 0zm-4.189 9.446l-2.079 1.037v1.571c0 .167.12.245.36.235.818-.368 1.312-.617 1.485-.746.148-.11.226-.275.235-.494v-1.603zm1.846-8.123c-1.993 0-3.399.854-4.69 2.854l-.246.491-.375.75c-.54 1.083-1.208 2.429-1.631 3.28l1.02 1.015c1.245-.612 3.538-1.74 4.544-2.241 2.011-1.291 2.871-2.688 2.87-4.66.003-.47.004-.918-.06-1.425-.498-.064-.942-.064-1.432-.064zM4.399 7.015c-.13.172-.379.664-.749 1.476-.01.24.068.359.235.359h1.58l1.043-2.068H5.011c-.278-.016-.482.062-.612.233zm7.402-1.949a1 1 0 110 2 1 1 0 010-2z" }))));
};
exports.default = SvgImproveCashflow;
