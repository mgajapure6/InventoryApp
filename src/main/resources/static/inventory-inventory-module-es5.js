(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"], {
    /***/
    "N1Bz":
    /*!*********************************************************!*\
      !*** ./src/app/layout/inventory/inventory.component.ts ***!
      \*********************************************************/

    /*! exports provided: InventoryComponent */

    /***/
    function N1Bz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () {
        return InventoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inventory.component.html */
      "OXO9");
      /* harmony import */


      var _inventory_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventory.component.scss */
      "ZJMm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../router.animations */
      "ZZ88");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var InventoryComponent = /*#__PURE__*/function () {
        function InventoryComponent(apiService, pipe) {
          var _this = this;

          _classCallCheck(this, InventoryComponent);

          this.apiService = apiService;
          this.pipe = pipe;
          this.itemsList = new Array(); // Observable<Item[]>;

          this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
          this.apiService.itemList().subscribe(function (data) {
            _this.itemsList = data;
          });
          this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (text) {
            return search(_this.itemsList, text, pipe);
          }));
        }

        _createClass(InventoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InventoryComponent;
      }();

      InventoryComponent.ctorParameters = function () {
        return [{
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]
        }];
      };

      InventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventory',
        template: _raw_loader_inventory_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["routerTransition"])()],
        styles: [_inventory_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]])], InventoryComponent);

      function search(itemsList, text, pipe) {
        return itemsList.filter(function (item) {
          var term = text.toLowerCase();
          return item.itemName.toLowerCase().includes(term) || pipe.transform(item.itemPrice).includes(term);
        });
      }
      /***/

    },

    /***/
    "OXO9":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/inventory/inventory.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OXO9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Inventory Items'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n\r\n            <!-- <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n                <ngb-panel *ngFor=\"let post of listOfInventory; let i=index\" title=\"{{post.title}}\">\r\n                    <ng-template ngbPanelContent>\r\n                        {{post.body}}\r\n                    </ng-template>\r\n                </ngb-panel>\r\n            </ngb-accordion> -->\r\n\r\n            <!-- <div class=\"form-group form-inline\">\r\n                Full text search: <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\"/>\r\n                <span class=\"ml-3\" *ngIf=\"service.loading$ | async\">Loading...</span>\r\n            </div> -->\r\n            <form>\r\n                <div class=\"d-flex justify-content-between\">\r\n                    <div class=\"form-group form-inline\">\r\n                        Search: <input class=\"form-control ml-2\" type=\"text\" [formControl]=\"filter\" />\r\n                    </div>\r\n                    <div>\r\n                        <button class=\"btn btn-primary\" [routerLink]=\"['/itemForm/0/N']\">+ Add Item</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">#</th>\r\n                        <th scope=\"col\" sortable=\"name\">Name</th>\r\n                        <th scope=\"col\" sortable=\"description\">Description</th>\r\n                        <th scope=\"col\" sortable=\"price\" class=\"text-right\">Price</th>\r\n                        <th scope=\"col\" class=\"text-center\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of itemsList; let i=index\">\r\n                        <th scope=\"row\">{{ i+1 }}</th>\r\n                        <td>\r\n                            <img [src]=\"item.itemImageUri\" class=\"mr-2 img-thumbnail\"\r\n                                style=\"width: 50px;border-radius: 50%;\" />\r\n                            <ngb-highlight [result]=\"item.itemName\" [term]=\"filter.value\"></ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <ngb-highlight [result]=\"item.itemDescription\" [term]=\"filter.value\"></ngb-highlight>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            <ngb-highlight [result]=\"item.itemPrice | number\" [term]=\"filter.value\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                            <button class=\"btn btn-warning btn-sm\"\r\n                                [routerLink]=\"['/itemForm/'+item.id+'/M']\">Edit</button> &nbsp;\r\n                            <button class=\"btn btn-danger btn-sm\"\r\n                                [routerLink]=\"['/itemForm/'+item.id+'/D']\">Delete</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <!-- <div class=\"d-flex justify-content-between p-2\">\r\n                <ngb-pagination\r\n                  [collectionSize]=\"(total$ | async)!\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\">\r\n                </ngb-pagination>\r\n            \r\n                <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"service.pageSize\">\r\n                  <option [ngValue]=\"2\">2 items per page</option>\r\n                  <option [ngValue]=\"4\">4 items per page</option>\r\n                  <option [ngValue]=\"6\">6 items per page</option>\r\n                </select>\r\n              </div> -->\r\n\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "X1qe":
    /*!**************************************************************!*\
      !*** ./src/app/layout/inventory/inventory-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: InventoryRoutingModule */

    /***/
    function X1qe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function () {
        return InventoryRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventory.component */
      "N1Bz");

      var routes = [{
        path: '',
        component: _inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"]
      }];

      var InventoryRoutingModule = function InventoryRoutingModule() {
        _classCallCheck(this, InventoryRoutingModule);
      };

      InventoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventoryRoutingModule);
      /***/
    },

    /***/
    "ZJMm":
    /*!***********************************************************!*\
      !*** ./src/app/layout/inventory/inventory.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function ZJMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table th,\n.table td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksc0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "gdHZ":
    /*!******************************************************!*\
      !*** ./src/app/layout/inventory/inventory.module.ts ***!
      \******************************************************/

    /*! exports provided: InventoryModule */

    /***/
    function gdHZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryModule", function () {
        return InventoryModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../endpoints */
      "Mumn");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared */
      "M0ag");
      /* harmony import */


      var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./inventory-routing.module */
      "X1qe");
      /* harmony import */


      var _inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./inventory.component */
      "N1Bz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var InventoryModule = function InventoryModule() {
        _classCallCheck(this, InventoryModule);
      };

      InventoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_7__["InventoryRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
        declarations: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbHighlight"], _inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"]],
        providers: [_endpoints__WEBPACK_IMPORTED_MODULE_4__["EndPoint"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
      })], InventoryModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=inventory-inventory-module-es5.js.map