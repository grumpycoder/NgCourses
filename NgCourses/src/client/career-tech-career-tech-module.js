(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["career-tech-career-tech-module"],{

/***/ "./src/app/career-tech/career-tech.module.ts":
/*!***************************************************!*\
  !*** ./src/app/career-tech/career-tech.module.ts ***!
  \***************************************************/
/*! exports provided: CareerTechModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerTechModule", function() { return CareerTechModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _program_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./program-list.component */ "./src/app/career-tech/program-list.component.ts");





var routes = [{ path: "", component: _program_list_component__WEBPACK_IMPORTED_MODULE_4__["ProgramListComponent"] }];
var CareerTechModule = /** @class */ (function () {
    function CareerTechModule() {
    }
    CareerTechModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_program_list_component__WEBPACK_IMPORTED_MODULE_4__["ProgramListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
        })
    ], CareerTechModule);
    return CareerTechModule;
}());



/***/ }),

/***/ "./src/app/career-tech/program-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/career-tech/program-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  program-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/career-tech/program-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/career-tech/program-list.component.ts ***!
  \*******************************************************/
/*! exports provided: ProgramListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramListComponent", function() { return ProgramListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgramListComponent = /** @class */ (function () {
    function ProgramListComponent() {
    }
    ProgramListComponent.prototype.ngOnInit = function () {
    };
    ProgramListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-program-list',
            template: __webpack_require__(/*! ./program-list.component.html */ "./src/app/career-tech/program-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgramListComponent);
    return ProgramListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=career-tech-career-tech-module.js.map