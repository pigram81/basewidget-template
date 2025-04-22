/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/widgets/basewidget/datasource.model.js":
/*!****************************************************!*\
  !*** ./src/widgets/basewidget/datasource.model.js ***!
  \****************************************************/
/***/ (() => {

var datasource = {
  "data": [{
    "dimensions_0": {
      "id": "APAC",
      "label": "APAC"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 27,
      "formatted": "27"
    },
    "measures_0": {
      "raw": 65999400,
      "formatted": "65,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 66000000,
      "formatted": "66,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "Australia",
      "label": "Australia"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 35,
      "formatted": "35"
    },
    "measures_0": {
      "raw": 92999400,
      "formatted": "92,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 93000000,
      "formatted": "93,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "Brasil & LATAM",
      "label": "Brasil & LATAM"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 18,
      "formatted": "18"
    },
    "measures_0": {
      "raw": 87999400,
      "formatted": "87,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 88000000,
      "formatted": "88,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "EMEA",
      "label": "EMEA"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 12,
      "formatted": "12"
    },
    "measures_0": {
      "raw": 88999400,
      "formatted": "88,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 89000000,
      "formatted": "89,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "India",
      "label": "India"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 30,
      "formatted": "30"
    },
    "measures_0": {
      "raw": 45999400,
      "formatted": "45,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 46000000,
      "formatted": "46,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "Madagascar",
      "label": "Madagascar"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 22,
      "formatted": "22"
    },
    "measures_0": {
      "raw": 28999400,
      "formatted": "28,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 29000000,
      "formatted": "29,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "Maldives",
      "label": "Maldives"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 39,
      "formatted": "39"
    },
    "measures_0": {
      "raw": 53999400,
      "formatted": "53,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 54000000,
      "formatted": "54,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "Messico",
      "label": "Messico"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 15,
      "formatted": "15"
    },
    "measures_0": {
      "raw": 64999400,
      "formatted": "64,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 65000000,
      "formatted": "65,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "NORTH AMERICA",
      "label": "NORTH AMERICA"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 30,
      "formatted": "30"
    },
    "measures_0": {
      "raw": 90999400,
      "formatted": "90,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 91000000,
      "formatted": "91,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "New Zeland",
      "label": "New Zeland"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 13,
      "formatted": "13"
    },
    "measures_0": {
      "raw": 43999400,
      "formatted": "43,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 44000000,
      "formatted": "44,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "South Africa",
      "label": "South Africa"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 28,
      "formatted": "28"
    },
    "measures_0": {
      "raw": 75999400,
      "formatted": "75,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 76000000,
      "formatted": "76,000,000.00"
    }
  }, {
    "dimensions_0": {
      "id": "Travel Retail",
      "label": "Travel Retail"
    },
    "dimensions_1": {
      "id": "public.Actual",
      "label": "public.Actual Actual"
    },
    "measures_3": {
      "raw": 36,
      "formatted": "36"
    },
    "measures_0": {
      "raw": 95999400,
      "formatted": "95,999,400.00"
    },
    "measures_1": {
      "raw": 600,
      "formatted": "600.00"
    },
    "measures_2": {
      "raw": 96000000,
      "formatted": "96,000,000.00"
    }
  }],
  "metadata": {
    "feeds": {
      "measures": {
        "values": ["measures_0", "measures_1", "measures_2", "measures_3"],
        "type": "mainStructureMember"
      },
      "dimensions": {
        "values": ["dimensions_0", "dimensions_1"],
        "type": "dimension"
      }
    },
    "dimensions": {
      "dimensions_0": {
        "id": "Dimensione_di_spaccatura",
        "description": "Dimensione di spaccatura"
      },
      "dimensions_1": {
        "id": "Version",
        "description": "Version"
      }
    },
    "mainStructureMembers": {
      "measures_0": {
        "id": "25806823-3426-4016-3574-821393290396",
        "label": "PY_CALC"
      },
      "measures_1": {
        "id": "20993727-5233-4564-3069-926952734733",
        "label": "Delta_calc"
      },
      "measures_2": {
        "id": "27408164-8611-4069-3382-135832060122",
        "label": "Order_Quantity_CY_K"
      },
      "measures_3": {
        "id": "Other_Measure",
        "label": "Other Measure"
      }
    }
  },
  "state": "success"
};

/***/ }),

/***/ "./src/widgets/basewidget/services/dataSource.service.js":
/*!***************************************************************!*\
  !*** ./src/widgets/basewidget/services/dataSource.service.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _datasource_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datasource.model.js */ "./src/widgets/basewidget/datasource.model.js");
/* harmony import */ var _datasource_model_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_datasource_model_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var DataSourceService = /*#__PURE__*/function () {
  function DataSourceService() {
    var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (_datasource_model_js__WEBPACK_IMPORTED_MODULE_0___default());
    _classCallCheck(this, DataSourceService);
    this.dataSource = dataSource;
  }

  /**
   * Ottiene l'intero datasource
   * @returns {Object} Il datasource completo
   */
  return _createClass(DataSourceService, [{
    key: "getDataSource",
    value: function getDataSource() {
      return this.dataSource;
    }

    /**
     * Ottiene tutti i dati dal datasource
     * @returns {Array} I dati presenti nel datasource
     */
  }, {
    key: "getData",
    value: function getData() {
      return this.dataSource.data || [];
    }

    /**
     * Ottiene i metadati dal datasource
     * @returns {Object} I metadati del datasource
     */
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this.dataSource.metadata || {};
    }

    /**
     * Ottiene le chiavi delle dimensioni
     * @returns {Array} Array di chiavi delle dimensioni (es. ['dimensions_0', 'dimensions_1'])
     */
  }, {
    key: "getDimensionKeys",
    value: function getDimensionKeys() {
      var _metadata$feeds;
      var metadata = this.getMetadata();
      return ((_metadata$feeds = metadata.feeds) === null || _metadata$feeds === void 0 || (_metadata$feeds = _metadata$feeds.dimensions) === null || _metadata$feeds === void 0 ? void 0 : _metadata$feeds.values) || [];
    }

    /**
     * Ottiene le chiavi delle misure
     * @returns {Array} Array di chiavi delle misure (es. ['measures_0', 'measures_1'])
     */
  }, {
    key: "getMeasureKeys",
    value: function getMeasureKeys() {
      var _metadata$feeds2;
      var metadata = this.getMetadata();
      return ((_metadata$feeds2 = metadata.feeds) === null || _metadata$feeds2 === void 0 || (_metadata$feeds2 = _metadata$feeds2.measures) === null || _metadata$feeds2 === void 0 ? void 0 : _metadata$feeds2.values) || [];
    }

    /**
     * Ottiene la lista delle dimensioni con id, label e chiave
     * @returns {Array} Lista delle dimensioni con informazioni
     */
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      var dimensionKeys = this.getDimensionKeys();
      var dimensionsInfo = this.getMetadata().dimensions || {};
      return dimensionKeys.map(function (key) {
        var info = dimensionsInfo[key] || {};
        return {
          key: key,
          id: info.id || '',
          label: info.description || ''
        };
      });
    }

    /**
     * Ottiene la lista delle misure con id, label e chiave
     * @returns {Array} Lista delle misure con informazioni
     */
  }, {
    key: "getMeasures",
    value: function getMeasures() {
      var measureKeys = this.getMeasureKeys();
      var measuresInfo = this.getMetadata().mainStructureMembers || {};
      return measureKeys.map(function (key) {
        var info = measuresInfo[key] || {};
        return {
          key: key,
          id: info.id || '',
          label: info.label || ''
        };
      });
    }

    /**
     * Ottiene i valori unici di una dimensione
     * @param {string} dimensionKey - La chiave della dimensione (es. 'dimensions_0')
     * @returns {Array} Valori unici della dimensione specificata
     */
  }, {
    key: "getUniqueDimensionValues",
    value: function getUniqueDimensionValues(dimensionKey) {
      var data = this.getData();
      var uniqueValues = new Set();
      data.forEach(function (item) {
        if (item[dimensionKey] && item[dimensionKey].id) {
          uniqueValues.add(item[dimensionKey].id);
        }
      });
      return Array.from(uniqueValues);
    }

    /**
     * Filtra i dati in base a un valore di dimensione
     * @param {string} dimensionKey - La chiave della dimensione
     * @param {string} value - Il valore della dimensione
     * @returns {Array} Dati filtrati
     */
  }, {
    key: "filterByDimension",
    value: function filterByDimension(dimensionKey, value) {
      var data = this.getData();
      return data.filter(function (item) {
        return item[dimensionKey] && item[dimensionKey].id === value;
      });
    }

    /**
     * Pulisce le risorse utilizzate dal servizio
     * Chiamare questo metodo quando il servizio non è più necessario
     * per evitare memory leak
     */
  }, {
    key: "dispose",
    value: function dispose() {
      // Rimuovi riferimenti ai dati
      this.dataSource = null;
    }

    /**
     * Restituisce i dati in formato semplificato usando le label come chiavi
     * @returns {Array} Dati con struttura più completa
     */
  }, {
    key: "getSimplifiedData",
    value: function getSimplifiedData() {
      var data = this.getData();
      var dimensions = this.getDimensions();
      var measures = this.getMeasures();

      // Creiamo dizionari per accesso veloce
      var keyToInfoMap = {};
      dimensions.forEach(function (dim) {
        keyToInfoMap[dim.key] = {
          label: dim.label,
          id: dim.id
        };
      });
      measures.forEach(function (measure) {
        keyToInfoMap[measure.key] = {
          label: measure.label,
          id: measure.id
        };
      });
      return data.map(function (item) {
        var simplifiedItem = {};

        // Processa dimensioni
        dimensions.forEach(function (dim) {
          if (item[dim.key] && item[dim.key].label) {
            simplifiedItem[keyToInfoMap[dim.key].label] = {
              key: dim.key,
              id: keyToInfoMap[dim.key].id,
              value: item[dim.key].label
            };
          }
        });

        // Processa misure
        measures.forEach(function (measure) {
          if (item[measure.key]) {
            var measureData = item[measure.key];
            simplifiedItem[keyToInfoMap[measure.key].label] = {
              key: measure.key,
              id: keyToInfoMap[measure.key].id,
              value: {
                raw: measureData.raw,
                formatted: measureData.formatted
              }
            };
          }
        });
        return simplifiedItem;
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSourceService);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************************!*\
  !*** ./src/widgets/basewidget/basewidget.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dataSource_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/dataSource.service.js */ "./src/widgets/basewidget/services/dataSource.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

(function () {
  var template = document.createElement('template');
  template.innerHTML = "<style>:host{display:flex;align-items:center;\n      justify-content:center;border:1px solid #ccc;border-radius:8px;cursor:pointer}\n    </style><slot></slot>";
  var BaseWidget = /*#__PURE__*/function (_HTMLElement) {
    function BaseWidget() {
      var _this;
      _classCallCheck(this, BaseWidget);
      _this = _callSuper(this, BaseWidget);
      _this.attachShadow({
        mode: 'open'
      }).appendChild(template.content.cloneNode(true));
      _this.addEventListener('click', function () {
        return _this.dispatchEvent(new Event('onClick'));
      });
      _this._dataSource = null;
      return _this;
    }
    _inherits(BaseWidget, _HTMLElement);
    return _createClass(BaseWidget, [{
      key: "onCustomWidgetBeforeUpdate",
      value: function onCustomWidgetBeforeUpdate(changes) {
        Object.assign(this, changes);
      }

      /**
       * Metodo chiamato dopo l'aggiornamento del widget.
       * Questo metodo viene invocato automaticamente quando le proprietà del widget
       * vengono modificate. Gestisce il rendering dell'interfaccia utente
       * in base alle nuove proprietà.
       */
    }, {
      key: "onCustomWidgetAfterUpdate",
      value: function onCustomWidgetAfterUpdate() {
        this._render();
      }
    }, {
      key: "onCustomWidgetResize",
      value: function onCustomWidgetResize(w, h) {/* gestione resize */}
    }, {
      key: "color",
      set: function set(c) {
        this._color = c;
        this._render();
      }
    }, {
      key: "value",
      set: function set(v) {
        this._value = v;
        this._render();
      }

      // Per compatibilità con SAC
    }, {
      key: "cwDataSource",
      get: function get() {
        return this._dataSource;
      },
      set: function set(dataSource) {
        // Pulisci l'istanza precedente del DataSourceService se esiste
        if (this._dataSource && typeof this._dataSource.dispose === 'function') {
          this._dataSource.dispose();
        }

        // Crea la nuova istanza
        this._dataSource = new _services_dataSource_service_js__WEBPACK_IMPORTED_MODULE_0__["default"](dataSource).getSimplifiedData();
        console.log('DataSource disponibile:', this._dataSource);
      }
    }, {
      key: "_render",
      value: function _render() {
        var _this$_value;
        this.style.background = this._color || '#2196f3';
        this.shadowRoot.querySelector('slot').textContent = (_this$_value = this._value) !== null && _this$_value !== void 0 ? _this$_value : '';

        // Se ci sono dati disponibili, è possibile utilizzarli per il rendering
        if (this._dataSource) {
          // Qui puoi aggiungere la logica per visualizzare i dati
        }
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
  customElements.define('com-test-demo-basewidget', BaseWidget);
})();
})();

var __webpack_export_target__ = window;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQzZDLGlCQUFpQixDQUFDLENBQUM7UUFDeEV5QyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUNsQixXQUFXLENBQUM7TUFFNUQ7SUFBQztNQUFBL0QsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXFFLE9BQU9BLENBQUEsRUFBRztRQUFBLElBQUFZLFlBQUE7UUFDTixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ1IsTUFBTSxJQUFJLFNBQVM7UUFDaEQsSUFBSSxDQUFDUyxVQUFVLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsV0FBVyxJQUFBTCxZQUFBLEdBQUcsSUFBSSxDQUFDSixNQUFNLGNBQUFJLFlBQUEsY0FBQUEsWUFBQSxHQUFJLEVBQUU7O1FBRXJFO1FBQ0EsSUFBSSxJQUFJLENBQUNuQixXQUFXLEVBQUU7VUFDbEI7UUFBQTtNQUVSO0lBQUM7RUFBQSxlQUFBeUIsZ0JBQUEsQ0EzRG9CQyxXQUFXO0VBNkRwQ0MsY0FBYyxDQUFDQyxNQUFNLENBQUMsMEJBQTBCLEVBQUV4QyxVQUFVLENBQUM7QUFDakUsQ0FBQyxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2V3aWRnZXQvLi9zcmMvd2lkZ2V0cy9iYXNld2lkZ2V0L2RhdGFzb3VyY2UubW9kZWwuanMiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC8uL3NyYy93aWRnZXRzL2Jhc2V3aWRnZXQvc2VydmljZXMvZGF0YVNvdXJjZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL2Jhc2V3aWRnZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXNld2lkZ2V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNld2lkZ2V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jhc2V3aWRnZXQvLi9zcmMvd2lkZ2V0cy9iYXNld2lkZ2V0L2Jhc2V3aWRnZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YXNvdXJjZSA9IHtcclxuICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiQVBBQ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFQQUNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDI3LFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIyN1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2NTk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjUsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2NjAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjYsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIkF1c3RyYWxpYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkF1c3RyYWxpYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMzUsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjM1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDkyOTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI5Miw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDkzMDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI5MywwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiQnJhc2lsICYgTEFUQU1cIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJCcmFzaWwgJiBMQVRBTVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMTgsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjE4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDg3OTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI4Nyw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDg4MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI4OCwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiRU1FQVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkVNRUFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDEyLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIxMlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA4ODk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiODgsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA4OTAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiODksMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIkluZGlhXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiSW5kaWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDMwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIzMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA0NTk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNDUsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA0NjAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNDYsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1hZGFnYXNjYXJcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJNYWRhZ2FzY2FyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAyMixcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMjJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMjg5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjI4LDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMjkwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjI5LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNYWxkaXZlc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1hbGRpdmVzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAzOSxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMzlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNTM5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjUzLDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNTQwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjU0LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNZXNzaWNvXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTWVzc2ljb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMTUsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjE1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDY0OTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2NCw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDY1MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2NSwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTk9SVEggQU1FUklDQVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5PUlRIIEFNRVJJQ0FcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDMwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIzMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA5MDk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiOTAsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA5MTAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiOTEsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk5ldyBaZWxhbmRcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJOZXcgWmVsYW5kXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAxMyxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMTNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNDM5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjQzLDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNDQwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjQ0LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJTb3V0aCBBZnJpY2FcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJTb3V0aCBBZnJpY2FcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDI4LFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIyOFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA3NTk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNzUsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA3NjAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNzYsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIlRyYXZlbCBSZXRhaWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJUcmF2ZWwgUmV0YWlsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAzNixcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMzZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogOTU5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjk1LDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogOTYwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjk2LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwibWV0YWRhdGFcIjoge1xyXG4gICAgICAgIFwiZmVlZHNcIjoge1xyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIm1lYXN1cmVzXzBcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lYXN1cmVzXzFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lYXN1cmVzXzJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lYXN1cmVzXzNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm1haW5TdHJ1Y3R1cmVNZW1iZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpbWVuc2lvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGltZW5zaW9uc1wiOiB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJEaW1lbnNpb25lX2RpX3NwYWNjYXR1cmFcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEaW1lbnNpb25lIGRpIHNwYWNjYXR1cmFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlZlcnNpb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1haW5TdHJ1Y3R1cmVNZW1iZXJzXCI6IHtcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIyNTgwNjgyMy0zNDI2LTQwMTYtMzU3NC04MjEzOTMyOTAzOTZcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJQWV9DQUxDXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIyMDk5MzcyNy01MjMzLTQ1NjQtMzA2OS05MjY5NTI3MzQ3MzNcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJEZWx0YV9jYWxjXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIyNzQwODE2NC04NjExLTQwNjktMzM4Mi0xMzU4MzIwNjAxMjJcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJPcmRlcl9RdWFudGl0eV9DWV9LXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJPdGhlcl9NZWFzdXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiT3RoZXIgTWVhc3VyZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJzdGF0ZVwiOiBcInN1Y2Nlc3NcIlxyXG59XHJcbiIsImltcG9ydCBkYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UubW9kZWwuanMnO1xyXG5cclxuY2xhc3MgRGF0YVNvdXJjZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YVNvdXJjZSA9IGRhdGFzb3VyY2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3R0aWVuZSBsJ2ludGVybyBkYXRhc291cmNlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJbCBkYXRhc291cmNlIGNvbXBsZXRvXHJcbiAgICAgKi9cclxuICAgIGdldERhdGFTb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgdHV0dGkgaSBkYXRpIGRhbCBkYXRhc291cmNlXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEkgZGF0aSBwcmVzZW50aSBuZWwgZGF0YXNvdXJjZVxyXG4gICAgICovXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgaSBtZXRhZGF0aSBkYWwgZGF0YXNvdXJjZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gSSBtZXRhZGF0aSBkZWwgZGF0YXNvdXJjZVxyXG4gICAgICovXHJcbiAgICBnZXRNZXRhZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm1ldGFkYXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3R0aWVuZSBsZSBjaGlhdmkgZGVsbGUgZGltZW5zaW9uaVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBBcnJheSBkaSBjaGlhdmkgZGVsbGUgZGltZW5zaW9uaSAoZXMuIFsnZGltZW5zaW9uc18wJywgJ2RpbWVuc2lvbnNfMSddKVxyXG4gICAgICovXHJcbiAgICBnZXREaW1lbnNpb25LZXlzKCkge1xyXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5nZXRNZXRhZGF0YSgpO1xyXG4gICAgICAgIHJldHVybiBtZXRhZGF0YS5mZWVkcz8uZGltZW5zaW9ucz8udmFsdWVzIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3R0aWVuZSBsZSBjaGlhdmkgZGVsbGUgbWlzdXJlXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5IGRpIGNoaWF2aSBkZWxsZSBtaXN1cmUgKGVzLiBbJ21lYXN1cmVzXzAnLCAnbWVhc3VyZXNfMSddKVxyXG4gICAgICovXHJcbiAgICBnZXRNZWFzdXJlS2V5cygpIHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuZ2V0TWV0YWRhdGEoKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGEuZmVlZHM/Lm1lYXN1cmVzPy52YWx1ZXMgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIGxhIGxpc3RhIGRlbGxlIGRpbWVuc2lvbmkgY29uIGlkLCBsYWJlbCBlIGNoaWF2ZVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBMaXN0YSBkZWxsZSBkaW1lbnNpb25pIGNvbiBpbmZvcm1hemlvbmlcclxuICAgICAqL1xyXG4gICAgZ2V0RGltZW5zaW9ucygpIHtcclxuICAgICAgICBjb25zdCBkaW1lbnNpb25LZXlzID0gdGhpcy5nZXREaW1lbnNpb25LZXlzKCk7XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9uc0luZm8gPSB0aGlzLmdldE1ldGFkYXRhKCkuZGltZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpbWVuc2lvbktleXMubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkaW1lbnNpb25zSW5mb1trZXldIHx8IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgaWQ6IGluZm8uaWQgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogaW5mby5kZXNjcmlwdGlvbiB8fCAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3R0aWVuZSBsYSBsaXN0YSBkZWxsZSBtaXN1cmUgY29uIGlkLCBsYWJlbCBlIGNoaWF2ZVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBMaXN0YSBkZWxsZSBtaXN1cmUgY29uIGluZm9ybWF6aW9uaVxyXG4gICAgICovXHJcbiAgICBnZXRNZWFzdXJlcygpIHtcclxuICAgICAgICBjb25zdCBtZWFzdXJlS2V5cyA9IHRoaXMuZ2V0TWVhc3VyZUtleXMoKTtcclxuICAgICAgICBjb25zdCBtZWFzdXJlc0luZm8gPSB0aGlzLmdldE1ldGFkYXRhKCkubWFpblN0cnVjdHVyZU1lbWJlcnMgfHwge307XHJcblxyXG4gICAgICAgIHJldHVybiBtZWFzdXJlS2V5cy5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IG1lYXN1cmVzSW5mb1trZXldIHx8IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgaWQ6IGluZm8uaWQgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogaW5mby5sYWJlbCB8fCAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3R0aWVuZSBpIHZhbG9yaSB1bmljaSBkaSB1bmEgZGltZW5zaW9uZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRpbWVuc2lvbktleSAtIExhIGNoaWF2ZSBkZWxsYSBkaW1lbnNpb25lIChlcy4gJ2RpbWVuc2lvbnNfMCcpXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFZhbG9yaSB1bmljaSBkZWxsYSBkaW1lbnNpb25lIHNwZWNpZmljYXRhXHJcbiAgICAgKi9cclxuICAgIGdldFVuaXF1ZURpbWVuc2lvblZhbHVlcyhkaW1lbnNpb25LZXkpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgY29uc3QgdW5pcXVlVmFsdWVzID0gbmV3IFNldCgpO1xyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtW2RpbWVuc2lvbktleV0gJiYgaXRlbVtkaW1lbnNpb25LZXldLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVWYWx1ZXMuYWRkKGl0ZW1bZGltZW5zaW9uS2V5XS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odW5pcXVlVmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbHRyYSBpIGRhdGkgaW4gYmFzZSBhIHVuIHZhbG9yZSBkaSBkaW1lbnNpb25lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGltZW5zaW9uS2V5IC0gTGEgY2hpYXZlIGRlbGxhIGRpbWVuc2lvbmVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIElsIHZhbG9yZSBkZWxsYSBkaW1lbnNpb25lXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IERhdGkgZmlsdHJhdGlcclxuICAgICAqL1xyXG4gICAgZmlsdGVyQnlEaW1lbnNpb24oZGltZW5zaW9uS2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoaXRlbSA9PlxyXG4gICAgICAgICAgICBpdGVtW2RpbWVuc2lvbktleV0gJiYgaXRlbVtkaW1lbnNpb25LZXldLmlkID09PSB2YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQdWxpc2NlIGxlIHJpc29yc2UgdXRpbGl6emF0ZSBkYWwgc2Vydml6aW9cclxuICAgICAqIENoaWFtYXJlIHF1ZXN0byBtZXRvZG8gcXVhbmRvIGlsIHNlcnZpemlvIG5vbiDDqCBwacO5IG5lY2Vzc2FyaW9cclxuICAgICAqIHBlciBldml0YXJlIG1lbW9yeSBsZWFrXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgLy8gUmltdW92aSByaWZlcmltZW50aSBhaSBkYXRpXHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0aXR1aXNjZSBpIGRhdGkgaW4gZm9ybWF0byBzZW1wbGlmaWNhdG8gdXNhbmRvIGxlIGxhYmVsIGNvbWUgY2hpYXZpXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IERhdGkgY29uIHN0cnV0dHVyYSBwacO5IGNvbXBsZXRhXHJcbiAgICAgKi9cclxuICAgIGdldFNpbXBsaWZpZWREYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5nZXREaW1lbnNpb25zKCk7XHJcbiAgICAgICAgY29uc3QgbWVhc3VyZXMgPSB0aGlzLmdldE1lYXN1cmVzKCk7XHJcblxyXG4gICAgICAgIC8vIENyZWlhbW8gZGl6aW9uYXJpIHBlciBhY2Nlc3NvIHZlbG9jZVxyXG4gICAgICAgIGNvbnN0IGtleVRvSW5mb01hcCA9IHt9O1xyXG4gICAgICAgIGRpbWVuc2lvbnMuZm9yRWFjaChkaW0gPT4ge1xyXG4gICAgICAgICAgICBrZXlUb0luZm9NYXBbZGltLmtleV0gPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGltLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGRpbS5pZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lYXN1cmVzLmZvckVhY2gobWVhc3VyZSA9PiB7XHJcbiAgICAgICAgICAgIGtleVRvSW5mb01hcFttZWFzdXJlLmtleV0gPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogbWVhc3VyZS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGlkOiBtZWFzdXJlLmlkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2ltcGxpZmllZEl0ZW0gPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2Nlc3NhIGRpbWVuc2lvbmlcclxuICAgICAgICAgICAgZGltZW5zaW9ucy5mb3JFYWNoKGRpbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVtkaW0ua2V5XSAmJiBpdGVtW2RpbS5rZXldLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxpZmllZEl0ZW1ba2V5VG9JbmZvTWFwW2RpbS5rZXldLmxhYmVsXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBkaW0ua2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDoga2V5VG9JbmZvTWFwW2RpbS5rZXldLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVtkaW0ua2V5XS5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2Vzc2EgbWlzdXJlXHJcbiAgICAgICAgICAgIG1lYXN1cmVzLmZvckVhY2gobWVhc3VyZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVttZWFzdXJlLmtleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWFzdXJlRGF0YSA9IGl0ZW1bbWVhc3VyZS5rZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsaWZpZWRJdGVtW2tleVRvSW5mb01hcFttZWFzdXJlLmtleV0ubGFiZWxdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG1lYXN1cmUua2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDoga2V5VG9JbmZvTWFwW21lYXN1cmUua2V5XS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdzogbWVhc3VyZURhdGEucmF3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiBtZWFzdXJlRGF0YS5mb3JtYXR0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNpbXBsaWZpZWRJdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlU2VydmljZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEYXRhU291cmNlU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2RhdGFTb3VyY2Uuc2VydmljZS5qcyc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT46aG9zdHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjhweDtjdXJzb3I6cG9pbnRlcn1cclxuICAgIDwvc3R5bGU+PHNsb3Q+PC9zbG90PmA7XHJcblxyXG4gICAgY2xhc3MgQmFzZVdpZGdldCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSkuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnb25DbGljaycpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25DdXN0b21XaWRnZXRCZWZvcmVVcGRhdGUoY2hhbmdlcykge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWV0b2RvIGNoaWFtYXRvIGRvcG8gbCdhZ2dpb3JuYW1lbnRvIGRlbCB3aWRnZXQuXHJcbiAgICAgICAgICogUXVlc3RvIG1ldG9kbyB2aWVuZSBpbnZvY2F0byBhdXRvbWF0aWNhbWVudGUgcXVhbmRvIGxlIHByb3ByaWV0w6AgZGVsIHdpZGdldFxyXG4gICAgICAgICAqIHZlbmdvbm8gbW9kaWZpY2F0ZS4gR2VzdGlzY2UgaWwgcmVuZGVyaW5nIGRlbGwnaW50ZXJmYWNjaWEgdXRlbnRlXHJcbiAgICAgICAgICogaW4gYmFzZSBhbGxlIG51b3ZlIHByb3ByaWV0w6AuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb25DdXN0b21XaWRnZXRBZnRlclVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkN1c3RvbVdpZGdldFJlc2l6ZSh3LCBoKSB7IC8qIGdlc3Rpb25lIHJlc2l6ZSAqLyB9XHJcblxyXG4gICAgICAgIHNldCBjb2xvcihjKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gYztcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodikge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGVyIGNvbXBhdGliaWxpdMOgIGNvbiBTQUNcclxuICAgICAgICBnZXQgY3dEYXRhU291cmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBjd0RhdGFTb3VyY2UoZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAvLyBQdWxpc2NpIGwnaXN0YW56YSBwcmVjZWRlbnRlIGRlbCBEYXRhU291cmNlU2VydmljZSBzZSBlc2lzdGVcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UgJiYgdHlwZW9mIHRoaXMuX2RhdGFTb3VyY2UuZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVNvdXJjZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWEgbGEgbnVvdmEgaXN0YW56YVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhU291cmNlID0gbmV3IERhdGFTb3VyY2VTZXJ2aWNlKGRhdGFTb3VyY2UpLmdldFNpbXBsaWZpZWREYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhU291cmNlIGRpc3BvbmliaWxlOicsIHRoaXMuX2RhdGFTb3VyY2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuX2NvbG9yIHx8ICcjMjE5NmYzJztcclxuICAgICAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3QnKS50ZXh0Q29udGVudCA9IHRoaXMuX3ZhbHVlID8/ICcnO1xyXG5cclxuICAgICAgICAgICAgLy8gU2UgY2kgc29ubyBkYXRpIGRpc3BvbmliaWxpLCDDqCBwb3NzaWJpbGUgdXRpbGl6emFybGkgcGVyIGlsIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gUXVpIHB1b2kgYWdnaXVuZ2VyZSBsYSBsb2dpY2EgcGVyIHZpc3VhbGl6emFyZSBpIGRhdGlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29tLXRlc3QtZGVtby1iYXNld2lkZ2V0JywgQmFzZVdpZGdldCk7XHJcbn0pKCk7Il0sIm5hbWVzIjpbImRhdGFzb3VyY2UiLCJEYXRhU291cmNlU2VydmljZSIsImRhdGFTb3VyY2UiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldERhdGFTb3VyY2UiLCJnZXREYXRhIiwiZGF0YSIsImdldE1ldGFkYXRhIiwibWV0YWRhdGEiLCJnZXREaW1lbnNpb25LZXlzIiwiX21ldGFkYXRhJGZlZWRzIiwiZmVlZHMiLCJkaW1lbnNpb25zIiwidmFsdWVzIiwiZ2V0TWVhc3VyZUtleXMiLCJfbWV0YWRhdGEkZmVlZHMyIiwibWVhc3VyZXMiLCJnZXREaW1lbnNpb25zIiwiZGltZW5zaW9uS2V5cyIsImRpbWVuc2lvbnNJbmZvIiwibWFwIiwiaW5mbyIsImlkIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsImdldE1lYXN1cmVzIiwibWVhc3VyZUtleXMiLCJtZWFzdXJlc0luZm8iLCJtYWluU3RydWN0dXJlTWVtYmVycyIsImdldFVuaXF1ZURpbWVuc2lvblZhbHVlcyIsImRpbWVuc2lvbktleSIsInVuaXF1ZVZhbHVlcyIsIlNldCIsImZvckVhY2giLCJpdGVtIiwiYWRkIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyQnlEaW1lbnNpb24iLCJmaWx0ZXIiLCJkaXNwb3NlIiwiZ2V0U2ltcGxpZmllZERhdGEiLCJrZXlUb0luZm9NYXAiLCJkaW0iLCJtZWFzdXJlIiwic2ltcGxpZmllZEl0ZW0iLCJtZWFzdXJlRGF0YSIsInJhdyIsImZvcm1hdHRlZCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiQmFzZVdpZGdldCIsIl9IVE1MRWxlbWVudCIsIl90aGlzIiwiX2NhbGxTdXBlciIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiX2RhdGFTb3VyY2UiLCJfaW5oZXJpdHMiLCJvbkN1c3RvbVdpZGdldEJlZm9yZVVwZGF0ZSIsImNoYW5nZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJvbkN1c3RvbVdpZGdldEFmdGVyVXBkYXRlIiwiX3JlbmRlciIsIm9uQ3VzdG9tV2lkZ2V0UmVzaXplIiwidyIsImgiLCJzZXQiLCJjIiwiX2NvbG9yIiwidiIsIl92YWx1ZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJfdGhpcyRfdmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmQiLCJzaGFkb3dSb290IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwic291cmNlUm9vdCI6IiJ9