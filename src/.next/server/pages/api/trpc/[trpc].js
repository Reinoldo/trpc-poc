"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./pages/api/trpc/[trpc].ts":
/*!**********************************!*\
  !*** ./pages/api/trpc/[trpc].ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var _server_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/context */ \"(api)/./server/context.ts\");\n/* harmony import */ var _server_routers_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server/routers/_app */ \"(api)/./server/routers/_app.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _server_routers_app__WEBPACK_IMPORTED_MODULE_2__]);\n([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _server_routers_app__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// export API handler\n// @see https://trpc.io/docs/api-handler\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler({\n    router: _server_routers_app__WEBPACK_IMPORTED_MODULE_2__.appRouter,\n    createContext: _server_context__WEBPACK_IMPORTED_MODULE_1__.createContext\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJwYy9bdHJwY10udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RDtBQUNDO0FBQ0M7QUFFekQscUJBQXFCO0FBQ3JCLHdDQUF3QztBQUN4QyxpRUFBZUEsNEVBQTZCLENBQUM7SUFDekNJLFFBQVFGLDBEQUFTQTtJQUNqQkQsYUFBYUEsNERBQUFBO0FBQ2pCLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RycGMtcG9jLy4vcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzPzJlNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHJwY05leHQgZnJvbSAnQHRycGMvc2VydmVyL2FkYXB0ZXJzL25leHQnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc2VydmVyL2NvbnRleHQnO1xyXG5pbXBvcnQgeyBhcHBSb3V0ZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvcm91dGVycy9fYXBwJztcclxuXHJcbi8vIGV4cG9ydCBBUEkgaGFuZGxlclxyXG4vLyBAc2VlIGh0dHBzOi8vdHJwYy5pby9kb2NzL2FwaS1oYW5kbGVyXHJcbmV4cG9ydCBkZWZhdWx0IHRycGNOZXh0LmNyZWF0ZU5leHRBcGlIYW5kbGVyKHtcclxuICAgIHJvdXRlcjogYXBwUm91dGVyLFxyXG4gICAgY3JlYXRlQ29udGV4dCxcclxufSk7Il0sIm5hbWVzIjpbInRycGNOZXh0IiwiY3JlYXRlQ29udGV4dCIsImFwcFJvdXRlciIsImNyZWF0ZU5leHRBcGlIYW5kbGVyIiwicm91dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/trpc/[trpc].ts\n");

/***/ }),

/***/ "(api)/./server/context.ts":
/*!***************************!*\
  !*** ./server/context.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* binding */ createContext)\n/* harmony export */ });\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/prisma */ \"(api)/./utils/prisma.ts\");\n\nasync function createContext() {\n    return {\n        prisma: _utils_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXIvY29udGV4dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUN5QztBQUVsQyxlQUFlQyxnQkFBZ0I7SUFDbEMsT0FBTztRQUNIRCxNQUFNQSxtREFBQUE7SUFDVjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnBjLXBvYy8uL3NlcnZlci9jb250ZXh0LnRzPzYzYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5mZXJBc3luY1JldHVyblR5cGUgfSBmcm9tIFwiQHRycGMvc2VydmVyXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi91dGlscy9wcmlzbWFcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcmlzbWFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ29udGV4dCA9IGluZmVyQXN5bmNSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVDb250ZXh0PiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./server/context.ts\n");

/***/ }),

/***/ "(api)/./server/routers/_app.ts":
/*!********************************!*\
  !*** ./server/routers/_app.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRouter\": () => (/* binding */ appRouter)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trpc */ \"(api)/./server/trpc.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _trpc__WEBPACK_IMPORTED_MODULE_1__]);\n([zod__WEBPACK_IMPORTED_MODULE_0__, _trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst appRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_1__.router)({\n    checkStatus: _trpc__WEBPACK_IMPORTED_MODULE_1__.procedure.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        idContract: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()\n    })).query(({ input , ctx  })=>{\n        return {\n            status: `Status do contrato: ${input.idContract}`\n        };\n    })\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXIvcm91dGVycy9fYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QjtBQUNvQjtBQUVyQyxNQUFNRyxZQUFZRCw2Q0FBTUEsQ0FBQztJQUM1QkUsYUFBYUgsa0RBQ0gsQ0FDRkQseUNBQVEsQ0FBQztRQUNMTyxZQUFZUCx5Q0FBUTtJQUN4QixJQUVIUyxLQUFLLENBQUMsQ0FBQyxFQUFFSixNQUFLLEVBQUVLLElBQUcsRUFBRSxHQUFLO1FBRXZCLE9BQU87WUFDSEMsUUFBUSxDQUFDLG9CQUFvQixFQUFFTixNQUFNRSxVQUFVLENBQUMsQ0FBQztRQUNyRDtJQUNKO0FBRVIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RycGMtcG9jLy4vc2VydmVyL3JvdXRlcnMvX2FwcC50cz9kZGI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5pbXBvcnQgeyBwcm9jZWR1cmUsIHJvdXRlciB9IGZyb20gJy4uL3RycGMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlciA9IHJvdXRlcih7XHJcbiAgICBjaGVja1N0YXR1czogcHJvY2VkdXJlXHJcbiAgICAgICAgLmlucHV0KFxyXG4gICAgICAgICAgICB6Lm9iamVjdCh7XHJcbiAgICAgICAgICAgICAgICBpZENvbnRyYWN0OiB6Lm51bWJlcigpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnF1ZXJ5KCh7IGlucHV0LCBjdHggfSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogYFN0YXR1cyBkbyBjb250cmF0bzogJHtpbnB1dC5pZENvbnRyYWN0fWAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcblxyXG59KTtcclxuXHJcbi8vIGV4cG9ydCB0eXBlIGRlZmluaXRpb24gb2YgQVBJXHJcbmV4cG9ydCB0eXBlIEFwcFJvdXRlciA9IHR5cGVvZiBhcHBSb3V0ZXI7Il0sIm5hbWVzIjpbInoiLCJwcm9jZWR1cmUiLCJyb3V0ZXIiLCJhcHBSb3V0ZXIiLCJjaGVja1N0YXR1cyIsImlucHV0Iiwib2JqZWN0IiwiaWRDb250cmFjdCIsIm51bWJlciIsInF1ZXJ5IiwiY3R4Iiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./server/routers/_app.ts\n");

/***/ }),

/***/ "(api)/./server/trpc.ts":
/*!************************!*\
  !*** ./server/trpc.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"procedure\": () => (/* binding */ procedure),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__]);\n_trpc_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// Avoid exporting the entire t-object\n// since it's not very descriptive.\n// For instance, the use of a t variable\n// is common in i18n libraries.\nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.context().create();\n// Base router and procedure helpers\nconst router = t.router;\nconst procedure = t.procedure;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXIvdHJwYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFHbkQsc0NBQXNDO0FBQ3RDLG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CLE1BQU1DLElBQUlELDBEQUFnQixHQUFZRyxNQUFNO0FBRTVDLG9DQUFvQztBQUM3QixNQUFNQyxTQUFTSCxFQUFFRyxNQUFNLENBQUM7QUFDeEIsTUFBTUMsWUFBWUosRUFBRUksU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJwYy1wb2MvLi9zZXJ2ZXIvdHJwYy50cz9jNjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRSUENFcnJvciwgaW5pdFRSUEMgfSBmcm9tICdAdHJwYy9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcclxuXHJcbi8vIEF2b2lkIGV4cG9ydGluZyB0aGUgZW50aXJlIHQtb2JqZWN0XHJcbi8vIHNpbmNlIGl0J3Mgbm90IHZlcnkgZGVzY3JpcHRpdmUuXHJcbi8vIEZvciBpbnN0YW5jZSwgdGhlIHVzZSBvZiBhIHQgdmFyaWFibGVcclxuLy8gaXMgY29tbW9uIGluIGkxOG4gbGlicmFyaWVzLlxyXG5jb25zdCB0ID0gaW5pdFRSUEMuY29udGV4dDxDb250ZXh0PigpLmNyZWF0ZSgpO1xyXG5cclxuLy8gQmFzZSByb3V0ZXIgYW5kIHByb2NlZHVyZSBoZWxwZXJzXHJcbmV4cG9ydCBjb25zdCByb3V0ZXIgPSB0LnJvdXRlcjtcclxuZXhwb3J0IGNvbnN0IHByb2NlZHVyZSA9IHQucHJvY2VkdXJlOyJdLCJuYW1lcyI6WyJpbml0VFJQQyIsInQiLCJjb250ZXh0IiwiY3JlYXRlIiwicm91dGVyIiwicHJvY2VkdXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./server/trpc.ts\n");

/***/ }),

/***/ "(api)/./utils/prisma.ts":
/*!*************************!*\
  !*** ./utils/prisma.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9wcmlzbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBLENBQUM7SUFDbkNFLEtBQUs7UUFBQztLQUFRO0FBQ2xCLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnBjLXBvYy8uL3V0aWxzL3ByaXNtYS50cz84YWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoe1xyXG4gICAgbG9nOiBbJ3F1ZXJ5J11cclxufSkiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();