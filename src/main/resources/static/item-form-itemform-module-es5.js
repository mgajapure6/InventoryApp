(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-form-itemform-module"], {
    /***/
    "0Wvb":
    /*!**********************************************************!*\
      !*** ./src/app/layout/item-form/itemForm.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Wvb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.avatar-upload {\n  position: relative;\n  max-width: 205px;\n  /* margin: 50px auto; */\n}\n.avatar-upload .avatar-edit {\n  position: absolute;\n  right: 12px;\n  z-index: 1;\n  top: 10px;\n}\n.avatar-upload .avatar-edit input {\n  display: none;\n}\n.avatar-upload .avatar-edit input + label {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-bottom: 0;\n  border-radius: 100%;\n  background: #347ce0;\n  border: 1px solid transparent;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  font-weight: normal;\n  transition: all 0.2s ease-in-out;\n}\n.avatar-upload .avatar-edit input + label:hover {\n  background: #f1f1f1;\n  border-color: #d6d6d6;\n}\n.avatar-upload .avatar-edit input + label:after {\n  font-family: \"FontAwesome\";\n  font-weight: 900;\n  color: #fff;\n  position: absolute;\n  top: 8px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  margin: auto;\n  content: \"\";\n}\n.avatar-upload .avatar-preview {\n  width: 192px;\n  height: 192px;\n  position: relative;\n  border-radius: 100%;\n  border: 6px solid #9cc0f3;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.avatar-upload .avatar-preview > div {\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2l0ZW0tZm9ybS9pdGVtRm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFHSjtBQURBO0VBQ0ksYUFBQTtBQUlKO0FBRkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBS0o7QUFIQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFNSjtBQUpBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFPSjtBQUxBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtBQVFKO0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBU0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaXRlbS1mb3JtL2l0ZW1Gb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmF2YXRhci11cGxvYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMjA1cHg7XG4gIC8qIG1hcmdpbjogNTBweCBhdXRvOyAqL1xufVxuXG4uYXZhdGFyLXVwbG9hZCAuYXZhdGFyLWVkaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDEwcHg7XG59XG5cbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItZWRpdCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItZWRpdCBpbnB1dCArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzQ3Y2UwO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItZWRpdCBpbnB1dCArIGxhYmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyLWNvbG9yOiAjZDZkNmQ2O1xufVxuXG4uYXZhdGFyLXVwbG9hZCAuYXZhdGFyLWVkaXQgaW5wdXQgKyBsYWJlbDphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGNvbnRlbnQ6IFwi74GnXCI7XG59XG5cbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItcHJldmlldyB7XG4gIHdpZHRoOiAxOTJweDtcbiAgaGVpZ2h0OiAxOTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDZweCBzb2xpZCAjOWNjMGYzO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYXZhdGFyLXVwbG9hZCAuYXZhdGFyLXByZXZpZXcgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59Il19 */";
      /***/
    },

    /***/
    "3KRe":
    /*!*****************************************************!*\
      !*** ./src/app/layout/item-form/itemform.module.ts ***!
      \*****************************************************/

    /*! exports provided: ItemFormModule */

    /***/
    function KRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemFormModule", function () {
        return ItemFormModule;
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


      var _endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../endpoints */
      "Mumn");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared */
      "M0ag");
      /* harmony import */


      var _itemform_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./itemform-routing.module */
      "ndDi");
      /* harmony import */


      var _itemform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./itemform.component */
      "LyKH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_directives_decimal_only_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/directives/decimal-only-directive */
      "cgC3");

      var ItemFormModule = function ItemFormModule() {
        _classCallCheck(this, ItemFormModule);
      };

      ItemFormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _itemform_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemFormRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
        declarations: [_itemform_component__WEBPACK_IMPORTED_MODULE_7__["ItemFormComponent"], _shared_directives_decimal_only_directive__WEBPACK_IMPORTED_MODULE_9__["DecimalOnlyDirective"]],
        providers: [_endpoints__WEBPACK_IMPORTED_MODULE_3__["EndPoint"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
      })], ItemFormModule);
      /***/
    },

    /***/
    "LyKH":
    /*!********************************************************!*\
      !*** ./src/app/layout/item-form/itemform.component.ts ***!
      \********************************************************/

    /*! exports provided: ItemFormComponent, Item */

    /***/
    function LyKH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemFormComponent", function () {
        return ItemFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Item", function () {
        return Item;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_itemForm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./itemForm.component.html */
      "prCO");
      /* harmony import */


      var _itemForm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./itemForm.component.scss */
      "0Wvb");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ItemFormComponent = /*#__PURE__*/function () {
        function ItemFormComponent(apiService, formBuilder, route, toastr) {
          _classCallCheck(this, ItemFormComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.route = route;
          this.toastr = toastr;
          this.selectedItem = new Item();
          this.submitBtnName = 'Save Item';
          this.formTitle = 'Add Item';
          this.formIcon = 'fa-plus';
          this.imageUri = '../../../assets/images/album_cover.png';
          this.itemForm = formBuilder.group({
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            itemPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            file: ''
          });
        }

        _createClass(ItemFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              var id = params['id'];
              var flag = params['flag'];
              _this.submitBtnName = flag === 'D' ? 'Delete Item' : flag === 'M' ? 'Update Item' : 'Save Item';
              _this.formTitle = flag === 'D' ? 'Delete Item' : flag === 'M' ? 'Update Item' : 'Add Item';
              _this.formIcon = flag === 'D' ? 'fa-trash' : flag === 'M' ? 'fa-edit' : 'fa-plus';
              _this.selectedItem.op_flag = flag;
              console.log('idid::', id);

              if (id !== '0') {
                var itmResp = null;

                _this.apiService.getItemById(id).subscribe(function (data) {
                  console.log('itmResp:', data);

                  if (data) {
                    _this.selectedItem.id = data.id;
                    _this.selectedItem.itemName = data.itemName;
                    _this.selectedItem.itemDescription = data.itemDescription;
                    _this.selectedItem.itemPrice = data.itemPrice;
                    _this.selectedItem.itemImageUri = data.itemImageUri;
                    _this.imageUri = data.itemImageUri;
                  } else {
                    _this.selectedItem.id = 0;
                    _this.selectedItem.itemName = null;
                    _this.selectedItem.itemDescription = null;
                    _this.selectedItem.itemPrice = null;
                    _this.selectedItem.itemImageUri = null;
                    _this.imageUri = '../../../assets/images/album_cover.png';
                  }
                });

                console.log('itmResp::', itmResp);
              } else {
                _this.selectedItem.id = 0;
                _this.selectedItem.itemName = null;
                _this.selectedItem.itemDescription = null;
                _this.selectedItem.itemPrice = null;
                _this.selectedItem.itemImageUri = null;
                _this.imageUri = '../../../assets/images/album_cover.png';
              }
            });
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(event) {
            var _this2 = this;

            console.log('onFileChange::');

            if (event.target.files && event.target.files[0]) {
              console.log('onFileChange::');
              var reader = new FileReader();

              reader.onload = function (ev) {
                _this2.selectedItem.itemImageUri = ev.target.result;
                console.log('imageUri::', _this2.imageUri);
                _this2.imageUri = ev.target.result;
              };

              reader.readAsDataURL(event.target.files[0]);
            }
          }
        }, {
          key: "saveDeleteItem",
          value: function saveDeleteItem() {
            var _this3 = this;

            if (this.selectedItem.op_flag === 'D') {
              this.apiService.deleteItem(this.selectedItem.id).subscribe(function (res) {
                console.log('res', res);

                if (JSON.parse(JSON.stringify(res))) {
                  _this3.toastr.success('Success', 'Item Deleted Successfully !', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                  });

                  _this3.resetForm();
                } else {
                  _this3.toastr.error('Failed', 'Unable to deleted item !', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                  });
                }
              });
            } else if (this.selectedItem.op_flag === 'N') {
              this.apiService.saveItem(this.selectedItem).subscribe(function (res) {
                if (JSON.parse(JSON.stringify(res)).status === 'success') {
                  _this3.toastr.success('Success', 'Item Save Successfully !', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                  });

                  _this3.resetForm();
                } else {
                  _this3.toastr.error('Failed', 'Unable to save item !', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                  });
                }
              });
            } else {
              this.apiService.updateItem(this.selectedItem).subscribe(function (res) {
                if (JSON.parse(JSON.stringify(res)).status === 'success') {
                  _this3.toastr.success('Success', 'Item Updated Successfully !', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                  });

                  _this3.resetForm();
                } else {
                  _this3.toastr.error('Failed', 'Unable to update item !', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                  });
                }
              });
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.selectedItem = {
              id: null,
              itemName: null,
              itemDescription: null,
              itemPrice: null,
              op_flag: 'N',
              itemImageUri: null
            };
            this.imageUri = '../../../assets/images/album_cover.png';
            this.submitBtnName = this.selectedItem.op_flag === 'D' ? 'Delete Item' : this.selectedItem.op_flag === 'M' ? 'Update Item' : 'Save Item';
            this.formTitle = this.selectedItem.op_flag === 'D' ? 'Delete Item' : this.selectedItem.op_flag === 'M' ? 'Update Item' : 'Add Item';
            this.formIcon = this.selectedItem.op_flag === 'D' ? 'fa-trash' : this.selectedItem.op_flag === 'M' ? 'fa-edit' : 'fa-plus';
            this.itemForm.markAsUntouched();
          }
        }]);

        return ItemFormComponent;
      }();

      ItemFormComponent.ctorParameters = function () {
        return [{
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }];
      };

      ItemFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'app-itemForm',
        template: _raw_loader_itemForm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["routerTransition"])()],
        styles: [_itemForm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])], ItemFormComponent);

      var Item = function Item() {
        _classCallCheck(this, Item);
      };
      /***/

    },

    /***/
    "cgC3":
    /*!*************************************************************!*\
      !*** ./src/app/shared/directives/decimal-only-directive.ts ***!
      \*************************************************************/

    /*! exports provided: DecimalOnlyDirective */

    /***/
    function cgC3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DecimalOnlyDirective", function () {
        return DecimalOnlyDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DecimalOnlyDirective = /*#__PURE__*/function () {
        function DecimalOnlyDirective(ngControl) {
          _classCallCheck(this, DecimalOnlyDirective);

          this.ngControl = ngControl;
          this.el = ngControl;
        } // Listen for the input event to also handle copy and paste.


        _createClass(DecimalOnlyDirective, [{
          key: "onInput",
          value: function onInput(value) {
            // Use NgControl patchValue to prevent the issue on validation
            this.el.control.patchValue(value.replace(/[^0-9.]|\.(?=.*\.)/g, '')); //  /[^0-9.]/g  /[^0-9.]|\.(?=.*\.)/g
          }
        }, {
          key: "onBlur",
          value: function onBlur(value) {
            if (value !== '') {
              this.el.control.patchValue(parseFloat(value).toFixed(2));
            }
          }
        }]);

        return DecimalOnlyDirective;
      }();

      DecimalOnlyDirective.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]
        }];
      };

      DecimalOnlyDirective.propDecorators = {
        onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['input', ['$event.target.value']]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['blur', ['$event.target.value']]
        }]
      };
      DecimalOnlyDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        // tslint:disable-next-line:directive-selector
        selector: '[OnlyDecimal]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]])], DecimalOnlyDirective);
      /***/
    },

    /***/
    "ndDi":
    /*!*************************************************************!*\
      !*** ./src/app/layout/item-form/itemform-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ItemFormRoutingModule */

    /***/
    function ndDi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemFormRoutingModule", function () {
        return ItemFormRoutingModule;
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


      var _itemform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./itemform.component */
      "LyKH");

      var routes = [{
        path: '',
        component: _itemform_component__WEBPACK_IMPORTED_MODULE_3__["ItemFormComponent"]
      }];

      var ItemFormRoutingModule = function ItemFormRoutingModule() {
        _classCallCheck(this, ItemFormRoutingModule);
      };

      ItemFormRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ItemFormRoutingModule);
      /***/
    },

    /***/
    "prCO":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/item-form/itemForm.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function prCO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"formTitle\" [icon]=\"formIcon\"></app-page-header>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <form id=\"itemForm\" [formGroup]=\"itemForm\" (ngSubmit)=\"saveDeleteItem()\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"userName\" class=\"col-sm-2 col-form-label\">Item Name </label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input [(ngModel)]=\"selectedItem.itemName\" type=\"text\" id=\"itemName\" class=\"form-control\"\r\n                            placeholder=\"Enter Item Name\" formControlName=\"itemName\" name=\"itemName\">\r\n                        <small\r\n                            [ngStyle]=\"{'color':itemForm.controls['itemName'].invalid && !itemForm.controls['itemName'].untouched ? 'red' : '#212529'}\">Please\r\n                            enter item name.</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"userNameOl\" class=\"col-sm-2 col-form-label\">Item Description </label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input [(ngModel)]=\"selectedItem.itemDescription\" type=\"text\" id=\"itemDescription\"\r\n                            class=\"form-control\" placeholder=\"Enter Item Description\" formControlName=\"itemDescription\"\r\n                            name=\"itemDescription\">\r\n                        <small\r\n                            [ngStyle]=\"{'color':itemForm.controls['itemDescription'].invalid && !itemForm.controls['itemDescription'].untouched ? 'red' : '#212529'}\">Please\r\n                            enter item description.</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"userNameOl\" class=\"col-sm-2 col-form-label\">Item Price </label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input [(ngModel)]=\"selectedItem.itemPrice\" type=\"text\" id=\"itemPrice\" class=\"form-control\"\r\n                            placeholder=\"Enter Item Price\" formControlName=\"itemPrice\" name=\"itemPrice\" OnlyDecimal>\r\n                        <small\r\n                            [ngStyle]=\"{'color':itemForm.controls['itemPrice'].invalid && !itemForm.controls['itemPrice'].untouched ? 'red' : '#212529'}\">Please\r\n                            enter item price.</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-form-label col-sm-2\">Image</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <!-- <input formControlName=\"file\" id=\"file\" type=\"file\" class=\"form-control\" multiple=\"\"\r\n                            (change)=\"onFileChange($event)\">\r\n                        <img *ngFor='let url of images' [src]=\"url\" height=\"150\" width=\"200px\" style=\"margin: 3px;\"> -->\r\n                        <div class=\"avatar-upload\">\r\n                            <div class=\"avatar-edit\">\r\n                                <input formControlName=\"file\" type='file' id=\"file\" accept=\".png, .jpg, .jpeg\"\r\n                                    (change)=\"onFileChange($event)\" />\r\n                                <label for=\"file\"></label>\r\n                            </div>\r\n                            <div class=\"avatar-preview\">\r\n                                <div id=\"avatarImagePreview\" style=\"background-image: url({{imageUri}});\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row mg-b-0\">\r\n                    <label class=\"col-form-label col-sm-2 pt-0\"></label>\r\n                    <div class=\"col-sm-10\">\r\n                        <button [disabled]=\"!itemForm.valid\" type=\"submit\" class=\"btn btn-primary userSaveBtn\"\r\n                            disabled>{{submitBtnName}}</button> &nbsp;\r\n                        <button type=\"button\" class=\"btn btn-warning\" (click)=\"resetForm()\">Reset</button>\r\n                        &nbsp;\r\n                        <button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['/inventory']\">Cancel</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row mg-b-0\">\r\n                    <label class=\"col-form-label col-sm-2 pt-0\"></label>\r\n                    <div class=\"col-sm-10 alertDiv\">\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=item-form-itemform-module-es5.js.map