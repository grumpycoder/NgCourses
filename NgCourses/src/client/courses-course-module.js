(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-course-module"],{

/***/ "./src/app/courses/course-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/courses/course-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/courses/course-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/courses/course-list.component.ts ***!
  \**************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseListComponent = /** @class */ (function () {
    function CourseListComponent() {
    }
    CourseListComponent.prototype.ngOnInit = function () {
    };
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/courses/course-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/courses/course.module.ts":
/*!******************************************!*\
  !*** ./src/app/courses/course.module.ts ***!
  \******************************************/
/*! exports provided: CourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModule", function() { return CourseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _course_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-list.component */ "./src/app/courses/course-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    { path: '', component: _course_list_component__WEBPACK_IMPORTED_MODULE_3__["CourseListComponent"] }
];
var CourseModule = /** @class */ (function () {
    function CourseModule() {
    }
    CourseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_course_list_component__WEBPACK_IMPORTED_MODULE_3__["CourseListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], CourseModule);
    return CourseModule;
}());



/***/ })

}]);
//# sourceMappingURL=courses-course-module.js.map