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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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

    /**
     * Ottiene la lista completa di tutti i campi (dimensioni e misure) con relativi id e label
     * @returns {Array} Lista combinata di dimensioni e misure
     */
  }, {
    key: "getAllFields",
    value: function getAllFields() {
      var dimensions = this.getDimensions().map(function (dim) {
        return _objectSpread(_objectSpread({}, dim), {}, {
          type: 'dimension'
        });
      });
      var measures = this.getMeasures().map(function (measure) {
        return _objectSpread(_objectSpread({}, measure), {}, {
          type: 'measure'
        });
      });
      return [].concat(_toConsumableArray(dimensions), _toConsumableArray(measures));
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSourceService);

/***/ }),

/***/ "./src/widgets/basewidget/services/tableRenderer.service.js":
/*!******************************************************************!*\
  !*** ./src/widgets/basewidget/services/tableRenderer.service.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Classe per gestire la creazione e l'aggiornamento della tabella
 */
var TableRenderer = /*#__PURE__*/function () {
  /**
   * Costruttore della classe TableRenderer
   * @param {HTMLElement} container - L'elemento contenitore della tabella
   */
  function TableRenderer(container) {
    _classCallCheck(this, TableRenderer);
    this.container = container;
  }

  /**
   * Crea e renderizza la tabella con i dati forniti
   * @param {Array} data - Dati da visualizzare nella tabella
   * @param {String} title - Titolo da mostrare sopra la tabella
   */
  return _createClass(TableRenderer, [{
    key: "render",
    value: function render(data, title) {
      // Imposta il titolo se fornito
      var headerElement = this.container.parentNode.querySelector('.header');
      headerElement.textContent = title || '';

      // Pulisci il contenitore
      this.container.innerHTML = '';

      // Se non ci sono dati, mostra un messaggio
      if (!data || data.length === 0) {
        var emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-message';
        emptyMessage.textContent = 'Nessun dato disponibile';
        this.container.appendChild(emptyMessage);
        return;
      }

      // Crea la tabella
      var table = document.createElement('table');

      // Crea intestazione della tabella
      var thead = document.createElement('thead');
      var headerRow = document.createElement('tr');

      // Ottieni le chiavi per le intestazioni dalle proprietà del primo oggetto
      var firstItem = data[0];
      var headers = Object.keys(firstItem);

      // Aggiungi celle d'intestazione
      headers.forEach(function (header) {
        var th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Crea corpo della tabella
      var tbody = document.createElement('tbody');

      // Aggiungi righe per ogni elemento nei dati
      data.forEach(function (item) {
        var row = document.createElement('tr');

        // Aggiungi celle per ogni proprietà
        headers.forEach(function (header) {
          var td = document.createElement('td');

          // Se il valore è un oggetto con proprietà "value" o "formatted", usa quello
          var value = item[header];
          if (value && _typeof(value) === 'object') {
            if (value.value && _typeof(value.value) === 'object' && value.value.formatted) {
              td.textContent = value.value.formatted;
            } else if (value.value) {
              td.textContent = value.value;
            } else {
              td.textContent = JSON.stringify(value);
            }
          } else {
            td.textContent = value || '';
          }
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      this.container.appendChild(table);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRenderer);

/***/ }),

/***/ "./src/widgets/basewidget/template.html":
/*!**********************************************!*\
  !*** ./src/widgets/basewidget/template.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<style>\r\n    :host {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        border: 1px solid #ccc;\r\n        border-radius: 8px;\r\n        padding: 16px;\r\n        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    }\r\n\r\n    .header {\r\n        font-size: 1.2rem;\r\n        font-weight: 600;\r\n        margin-bottom: 12px;\r\n        color: #333;\r\n    }\r\n\r\n    .table-container {\r\n        width: 100%;\r\n        overflow-x: auto;\r\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n        border-radius: 4px;\r\n    }\r\n\r\n    table {\r\n        width: 100%;\r\n        border-collapse: collapse;\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    th {\r\n        background-color: #f0f0f0;\r\n        color: #333;\r\n        font-weight: 600;\r\n        text-align: left;\r\n        padding: 10px 12px;\r\n        border-bottom: 2px solid #ddd;\r\n        position: sticky;\r\n        top: 0;\r\n    }\r\n\r\n    td {\r\n        padding: 8px 12px;\r\n        border-bottom: 1px solid #eee;\r\n    }\r\n\r\n    tr:hover {\r\n        background-color: #f9f9f9;\r\n    }\r\n\r\n    tr:last-child td {\r\n        border-bottom: none;\r\n    }\r\n\r\n    .empty-message {\r\n        text-align: center;\r\n        padding: 20px;\r\n        color: #777;\r\n        font-style: italic;\r\n    }\r\n</style>\r\n<div class=\"header\"></div>\r\n<div class=\"table-container\"></div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

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
/* harmony import */ var _services_tableRenderer_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tableRenderer.service.js */ "./src/widgets/basewidget/services/tableRenderer.service.js");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.html */ "./src/widgets/basewidget/template.html");
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
  template.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_2__["default"];
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
      _this._tableRenderer = new _services_tableRenderer_service_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this.shadowRoot.querySelector('.table-container'));
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
      }

      /**
       * Setter per il DataSourceService.
       * Pulisce l'istanza precedente del DataSourceService se esiste e crea una nuova istanza.
       * @param {DataSourceService} dataSource - L'istanza del DataSourceService da impostare.
       */,
      set: function set(dataSource) {
        // Pulisci l'istanza precedente del DataSourceService se esiste
        if (this._dataSource && typeof this._dataSource.dispose === 'function') {
          this._dataSource.dispose();
        }

        // Crea la nuova istanza
        this._dataSource = new _services_dataSource_service_js__WEBPACK_IMPORTED_MODULE_0__["default"](dataSource);
        console.log('DataSource disponibile:', this._dataSource.getSimplifiedData());
      }
    }, {
      key: "_render",
      value: function _render() {
        //this.style.background = this._color || '#fff';

        // Se ci sono dati disponibili, utilizza TableRenderer per visualizzarli
        if (this._dataSource) {
          var data = this._dataSource.getSimplifiedData();
          this._tableRenderer.render(data, 'Dati del Widget');
        } else {
          this._tableRenderer.render([], 'Nessun dato disponibile');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbEQsSUFBSSxFQUFFLGlCQUFpQixDQUFDO1FBQ3ZELENBQUMsTUFBTTtVQUNILElBQUksQ0FBQzJGLGNBQWMsQ0FBQ3pDLE1BQU0sQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7UUFDN0Q7TUFDSjtJQUFDO0VBQUEsZUFBQTRELGdCQUFBLENBbkVvQkMsV0FBVztFQXFFcENDLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDLDBCQUEwQixFQUFFbEMsVUFBVSxDQUFDO0FBQ2pFLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNld2lkZ2V0Ly4vc3JjL3dpZGdldHMvYmFzZXdpZGdldC9kYXRhc291cmNlLm1vZGVsLmpzIiwid2VicGFjazovL2Jhc2V3aWRnZXQvLi9zcmMvd2lkZ2V0cy9iYXNld2lkZ2V0L3NlcnZpY2VzL2RhdGFTb3VyY2Uuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9iYXNld2lkZ2V0Ly4vc3JjL3dpZGdldHMvYmFzZXdpZGdldC9zZXJ2aWNlcy90YWJsZVJlbmRlcmVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC8uL3NyYy93aWRnZXRzL2Jhc2V3aWRnZXQvdGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly9iYXNld2lkZ2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2V3aWRnZXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jhc2V3aWRnZXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXNld2lkZ2V0Ly4vc3JjL3dpZGdldHMvYmFzZXdpZGdldC9iYXNld2lkZ2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGFzb3VyY2UgPSB7XHJcbiAgICBcImRhdGFcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIkFQQUNcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJBUEFDXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAyNyxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMjdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjU5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjY1LDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjYwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjY2LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJBdXN0cmFsaWFcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJBdXN0cmFsaWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDM1LFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIzNVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA5Mjk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiOTIsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA5MzAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiOTMsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIkJyYXNpbCAmIExBVEFNXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQnJhc2lsICYgTEFUQU1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDE4LFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIxOFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA4Nzk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiODcsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA4ODAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiODgsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIkVNRUFcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJFTUVBXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAxMixcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMTJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogODg5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjg4LDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogODkwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjg5LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJJbmRpYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkluZGlhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAzMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMzBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNDU5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjQ1LDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNDYwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjQ2LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNYWRhZ2FzY2FyXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFkYWdhc2NhclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMjIsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjIyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDI4OTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIyOCw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDI5MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIyOSwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTWFsZGl2ZXNcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJNYWxkaXZlc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMzksXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjM5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDUzOTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI1Myw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDU0MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI1NCwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTWVzc2ljb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1lc3NpY29cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDE1LFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIxNVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2NDk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjQsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2NTAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjUsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk5PUlRIIEFNRVJJQ0FcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJOT1JUSCBBTUVSSUNBXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAzMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMzBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogOTA5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjkwLDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogOTEwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjkxLDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJOZXcgWmVsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTmV3IFplbGFuZFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMTMsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjEzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDQzOTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI0Myw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDQ0MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI0NCwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiU291dGggQWZyaWNhXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiU291dGggQWZyaWNhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAyOCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMjhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNzU5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjc1LDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNzYwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjc2LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJUcmF2ZWwgUmV0YWlsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVHJhdmVsIFJldGFpbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMzYsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjM2XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDk1OTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI5NSw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDk2MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI5NiwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIm1ldGFkYXRhXCI6IHtcclxuICAgICAgICBcImZlZWRzXCI6IHtcclxuICAgICAgICAgICAgXCJtZWFzdXJlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWFzdXJlc18wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWFzdXJlc18xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWFzdXJlc18yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWFzdXJlc18zXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJtYWluU3RydWN0dXJlTWVtYmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaW1lbnNpb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRpbWVuc2lvbnNcIjoge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiRGltZW5zaW9uZV9kaV9zcGFjY2F0dXJhXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGltZW5zaW9uZSBkaSBzcGFjY2F0dXJhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIlZlcnNpb25cIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJWZXJzaW9uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYWluU3RydWN0dXJlTWVtYmVyc1wiOiB7XHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMjU4MDY4MjMtMzQyNi00MDE2LTM1NzQtODIxMzkzMjkwMzk2XCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiUFlfQ0FMQ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMjA5OTM3MjctNTIzMy00NTY0LTMwNjktOTI2OTUyNzM0NzMzXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRGVsdGFfY2FsY1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMjc0MDgxNjQtODYxMS00MDY5LTMzODItMTM1ODMyMDYwMTIyXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiT3JkZXJfUXVhbnRpdHlfQ1lfS1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiT3RoZXJfTWVhc3VyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk90aGVyIE1lYXN1cmVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwic3RhdGVcIjogXCJzdWNjZXNzXCJcclxufVxyXG4iLCJpbXBvcnQgZGF0YXNvdXJjZSBmcm9tICcuLi9kYXRhc291cmNlLm1vZGVsLmpzJztcclxuXHJcbmNsYXNzIERhdGFTb3VyY2VTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGFTb3VyY2UgPSBkYXRhc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgbCdpbnRlcm8gZGF0YXNvdXJjZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gSWwgZGF0YXNvdXJjZSBjb21wbGV0b1xyXG4gICAgICovXHJcbiAgICBnZXREYXRhU291cmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIHR1dHRpIGkgZGF0aSBkYWwgZGF0YXNvdXJjZVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBJIGRhdGkgcHJlc2VudGkgbmVsIGRhdGFzb3VyY2VcclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIGkgbWV0YWRhdGkgZGFsIGRhdGFzb3VyY2VcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEkgbWV0YWRhdGkgZGVsIGRhdGFzb3VyY2VcclxuICAgICAqL1xyXG4gICAgZ2V0TWV0YWRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5tZXRhZGF0YSB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgbGUgY2hpYXZpIGRlbGxlIGRpbWVuc2lvbmlcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgZGkgY2hpYXZpIGRlbGxlIGRpbWVuc2lvbmkgKGVzLiBbJ2RpbWVuc2lvbnNfMCcsICdkaW1lbnNpb25zXzEnXSlcclxuICAgICAqL1xyXG4gICAgZ2V0RGltZW5zaW9uS2V5cygpIHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuZ2V0TWV0YWRhdGEoKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGEuZmVlZHM/LmRpbWVuc2lvbnM/LnZhbHVlcyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgbGUgY2hpYXZpIGRlbGxlIG1pc3VyZVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBBcnJheSBkaSBjaGlhdmkgZGVsbGUgbWlzdXJlIChlcy4gWydtZWFzdXJlc18wJywgJ21lYXN1cmVzXzEnXSlcclxuICAgICAqL1xyXG4gICAgZ2V0TWVhc3VyZUtleXMoKSB7XHJcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLmdldE1ldGFkYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhLmZlZWRzPy5tZWFzdXJlcz8udmFsdWVzIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3R0aWVuZSBsYSBsaXN0YSBkZWxsZSBkaW1lbnNpb25pIGNvbiBpZCwgbGFiZWwgZSBjaGlhdmVcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gTGlzdGEgZGVsbGUgZGltZW5zaW9uaSBjb24gaW5mb3JtYXppb25pXHJcbiAgICAgKi9cclxuICAgIGdldERpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9uS2V5cyA9IHRoaXMuZ2V0RGltZW5zaW9uS2V5cygpO1xyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnNJbmZvID0gdGhpcy5nZXRNZXRhZGF0YSgpLmRpbWVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgIHJldHVybiBkaW1lbnNpb25LZXlzLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmZvID0gZGltZW5zaW9uc0luZm9ba2V5XSB8fCB7fTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGlkOiBpbmZvLmlkIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGluZm8uZGVzY3JpcHRpb24gfHwgJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgbGEgbGlzdGEgZGVsbGUgbWlzdXJlIGNvbiBpZCwgbGFiZWwgZSBjaGlhdmVcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gTGlzdGEgZGVsbGUgbWlzdXJlIGNvbiBpbmZvcm1hemlvbmlcclxuICAgICAqL1xyXG4gICAgZ2V0TWVhc3VyZXMoKSB7XHJcbiAgICAgICAgY29uc3QgbWVhc3VyZUtleXMgPSB0aGlzLmdldE1lYXN1cmVLZXlzKCk7XHJcbiAgICAgICAgY29uc3QgbWVhc3VyZXNJbmZvID0gdGhpcy5nZXRNZXRhZGF0YSgpLm1haW5TdHJ1Y3R1cmVNZW1iZXJzIHx8IHt9O1xyXG5cclxuICAgICAgICByZXR1cm4gbWVhc3VyZUtleXMubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBtZWFzdXJlc0luZm9ba2V5XSB8fCB7fTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIGlkOiBpbmZvLmlkIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGluZm8ubGFiZWwgfHwgJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgaSB2YWxvcmkgdW5pY2kgZGkgdW5hIGRpbWVuc2lvbmVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkaW1lbnNpb25LZXkgLSBMYSBjaGlhdmUgZGVsbGEgZGltZW5zaW9uZSAoZXMuICdkaW1lbnNpb25zXzAnKVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBWYWxvcmkgdW5pY2kgZGVsbGEgZGltZW5zaW9uZSBzcGVjaWZpY2F0YVxyXG4gICAgICovXHJcbiAgICBnZXRVbmlxdWVEaW1lbnNpb25WYWx1ZXMoZGltZW5zaW9uS2V5KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbVtkaW1lbnNpb25LZXldICYmIGl0ZW1bZGltZW5zaW9uS2V5XS5pZCkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlVmFsdWVzLmFkZChpdGVtW2RpbWVuc2lvbktleV0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHVuaXF1ZVZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0cmEgaSBkYXRpIGluIGJhc2UgYSB1biB2YWxvcmUgZGkgZGltZW5zaW9uZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRpbWVuc2lvbktleSAtIExhIGNoaWF2ZSBkZWxsYSBkaW1lbnNpb25lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBJbCB2YWxvcmUgZGVsbGEgZGltZW5zaW9uZVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBEYXRpIGZpbHRyYXRpXHJcbiAgICAgKi9cclxuICAgIGZpbHRlckJ5RGltZW5zaW9uKGRpbWVuc2lvbktleSwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKGl0ZW0gPT5cclxuICAgICAgICAgICAgaXRlbVtkaW1lbnNpb25LZXldICYmIGl0ZW1bZGltZW5zaW9uS2V5XS5pZCA9PT0gdmFsdWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVsaXNjZSBsZSByaXNvcnNlIHV0aWxpenphdGUgZGFsIHNlcnZpemlvXHJcbiAgICAgKiBDaGlhbWFyZSBxdWVzdG8gbWV0b2RvIHF1YW5kbyBpbCBzZXJ2aXppbyBub24gw6ggcGnDuSBuZWNlc3NhcmlvXHJcbiAgICAgKiBwZXIgZXZpdGFyZSBtZW1vcnkgbGVha1xyXG4gICAgICovXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIC8vIFJpbXVvdmkgcmlmZXJpbWVudGkgYWkgZGF0aVxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzdGl0dWlzY2UgaSBkYXRpIGluIGZvcm1hdG8gc2VtcGxpZmljYXRvIHVzYW5kbyBsZSBsYWJlbCBjb21lIGNoaWF2aVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBEYXRpIGNvbiBzdHJ1dHR1cmEgcGnDuSBjb21wbGV0YVxyXG4gICAgICovXHJcbiAgICBnZXRTaW1wbGlmaWVkRGF0YSgpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuZ2V0RGltZW5zaW9ucygpO1xyXG4gICAgICAgIGNvbnN0IG1lYXN1cmVzID0gdGhpcy5nZXRNZWFzdXJlcygpO1xyXG5cclxuICAgICAgICAvLyBDcmVpYW1vIGRpemlvbmFyaSBwZXIgYWNjZXNzbyB2ZWxvY2VcclxuICAgICAgICBjb25zdCBrZXlUb0luZm9NYXAgPSB7fTtcclxuICAgICAgICBkaW1lbnNpb25zLmZvckVhY2goZGltID0+IHtcclxuICAgICAgICAgICAga2V5VG9JbmZvTWFwW2RpbS5rZXldID0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRpbS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGlkOiBkaW0uaWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtZWFzdXJlcy5mb3JFYWNoKG1lYXN1cmUgPT4ge1xyXG4gICAgICAgICAgICBrZXlUb0luZm9NYXBbbWVhc3VyZS5rZXldID0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IG1lYXN1cmUubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBpZDogbWVhc3VyZS5pZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbXBsaWZpZWRJdGVtID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9jZXNzYSBkaW1lbnNpb25pXHJcbiAgICAgICAgICAgIGRpbWVuc2lvbnMuZm9yRWFjaChkaW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bZGltLmtleV0gJiYgaXRlbVtkaW0ua2V5XS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsaWZpZWRJdGVtW2tleVRvSW5mb01hcFtkaW0ua2V5XS5sYWJlbF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZGltLmtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGtleVRvSW5mb01hcFtkaW0ua2V5XS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1bZGltLmtleV0ubGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2Nlc3NhIG1pc3VyZVxyXG4gICAgICAgICAgICBtZWFzdXJlcy5mb3JFYWNoKG1lYXN1cmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bbWVhc3VyZS5rZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZURhdGEgPSBpdGVtW21lYXN1cmUua2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGlmaWVkSXRlbVtrZXlUb0luZm9NYXBbbWVhc3VyZS5rZXldLmxhYmVsXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBtZWFzdXJlLmtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGtleVRvSW5mb01hcFttZWFzdXJlLmtleV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXc6IG1lYXN1cmVEYXRhLnJhdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogbWVhc3VyZURhdGEuZm9ybWF0dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzaW1wbGlmaWVkSXRlbTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgbGEgbGlzdGEgY29tcGxldGEgZGkgdHV0dGkgaSBjYW1waSAoZGltZW5zaW9uaSBlIG1pc3VyZSkgY29uIHJlbGF0aXZpIGlkIGUgbGFiZWxcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gTGlzdGEgY29tYmluYXRhIGRpIGRpbWVuc2lvbmkgZSBtaXN1cmVcclxuICAgICAqL1xyXG4gICAgZ2V0QWxsRmllbGRzKCkge1xyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLmdldERpbWVuc2lvbnMoKS5tYXAoZGltID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRpbSxcclxuICAgICAgICAgICAgdHlwZTogJ2RpbWVuc2lvbidcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lYXN1cmVzID0gdGhpcy5nZXRNZWFzdXJlcygpLm1hcChtZWFzdXJlID0+ICh7XHJcbiAgICAgICAgICAgIC4uLm1lYXN1cmUsXHJcbiAgICAgICAgICAgIHR5cGU6ICdtZWFzdXJlJ1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFsuLi5kaW1lbnNpb25zLCAuLi5tZWFzdXJlc107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTb3VyY2VTZXJ2aWNlO1xyXG4iLCIvKipcclxuICogQ2xhc3NlIHBlciBnZXN0aXJlIGxhIGNyZWF6aW9uZSBlIGwnYWdnaW9ybmFtZW50byBkZWxsYSB0YWJlbGxhXHJcbiAqL1xyXG5jbGFzcyBUYWJsZVJlbmRlcmVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29zdHJ1dHRvcmUgZGVsbGEgY2xhc3NlIFRhYmxlUmVuZGVyZXJcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIEwnZWxlbWVudG8gY29udGVuaXRvcmUgZGVsbGEgdGFiZWxsYVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWEgZSByZW5kZXJpenphIGxhIHRhYmVsbGEgY29uIGkgZGF0aSBmb3JuaXRpXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIC0gRGF0aSBkYSB2aXN1YWxpenphcmUgbmVsbGEgdGFiZWxsYVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIC0gVGl0b2xvIGRhIG1vc3RyYXJlIHNvcHJhIGxhIHRhYmVsbGFcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKGRhdGEsIHRpdGxlKSB7XHJcbiAgICAgICAgLy8gSW1wb3N0YSBpbCB0aXRvbG8gc2UgZm9ybml0b1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgICAgICBoZWFkZXJFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGUgfHwgJyc7XHJcblxyXG4gICAgICAgIC8vIFB1bGlzY2kgaWwgY29udGVuaXRvcmVcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgLy8gU2Ugbm9uIGNpIHNvbm8gZGF0aSwgbW9zdHJhIHVuIG1lc3NhZ2dpb1xyXG4gICAgICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbXB0eU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZW1wdHlNZXNzYWdlLmNsYXNzTmFtZSA9ICdlbXB0eS1tZXNzYWdlJztcclxuICAgICAgICAgICAgZW1wdHlNZXNzYWdlLnRleHRDb250ZW50ID0gJ05lc3N1biBkYXRvIGRpc3BvbmliaWxlJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYSBsYSB0YWJlbGxhXHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG5cclxuICAgICAgICAvLyBDcmVhIGludGVzdGF6aW9uZSBkZWxsYSB0YWJlbGxhXHJcbiAgICAgICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgICAgIC8vIE90dGllbmkgbGUgY2hpYXZpIHBlciBsZSBpbnRlc3RhemlvbmkgZGFsbGUgcHJvcHJpZXTDoCBkZWwgcHJpbW8gb2dnZXR0b1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGRhdGFbMF07XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IE9iamVjdC5rZXlzKGZpcnN0SXRlbSk7XHJcblxyXG4gICAgICAgIC8vIEFnZ2l1bmdpIGNlbGxlIGQnaW50ZXN0YXppb25lXHJcbiAgICAgICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBoZWFkZXI7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoZWFkLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xyXG5cclxuICAgICAgICAvLyBDcmVhIGNvcnBvIGRlbGxhIHRhYmVsbGFcclxuICAgICAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcblxyXG4gICAgICAgIC8vIEFnZ2l1bmdpIHJpZ2hlIHBlciBvZ25pIGVsZW1lbnRvIG5laSBkYXRpXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWdnaXVuZ2kgY2VsbGUgcGVyIG9nbmkgcHJvcHJpZXTDoFxyXG4gICAgICAgICAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZSBpbCB2YWxvcmUgw6ggdW4gb2dnZXR0byBjb24gcHJvcHJpZXTDoCBcInZhbHVlXCIgbyBcImZvcm1hdHRlZFwiLCB1c2EgcXVlbGxvXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1baGVhZGVyXTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUudmFsdWUuZm9ybWF0dGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gdmFsdWUudmFsdWUuZm9ybWF0dGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSB2YWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gdmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVJlbmRlcmVyOyAiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8c3R5bGU+XFxyXFxuICAgIDpob3N0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRhYmxlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRoIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICAgICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRkIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdHI6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0cjpsYXN0LWNoaWxkIHRkIHtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVtcHR5LW1lc3NhZ2Uge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjNzc3O1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInRhYmxlLWNvbnRhaW5lclxcXCI+PC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRGF0YVNvdXJjZVNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9kYXRhU291cmNlLnNlcnZpY2UuanMnO1xuaW1wb3J0IFRhYmxlUmVuZGVyZXIgZnJvbSAnLi9zZXJ2aWNlcy90YWJsZVJlbmRlcmVyLnNlcnZpY2UuanMnO1xuaW1wb3J0IHRlbXBsYXRlSHRtbCBmcm9tICcuL3RlbXBsYXRlLmh0bWwnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZUh0bWw7XG5cbiAgICBjbGFzcyBCYXNlV2lkZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnb25DbGljaycpKSk7XG4gICAgICAgICAgICB0aGlzLl9kYXRhU291cmNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3RhYmxlUmVuZGVyZXIgPSBuZXcgVGFibGVSZW5kZXJlcih0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRhYmxlLWNvbnRhaW5lcicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uQ3VzdG9tV2lkZ2V0QmVmb3JlVXBkYXRlKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY2hhbmdlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWV0b2RvIGNoaWFtYXRvIGRvcG8gbCdhZ2dpb3JuYW1lbnRvIGRlbCB3aWRnZXQuXG4gICAgICAgICAqIFF1ZXN0byBtZXRvZG8gdmllbmUgaW52b2NhdG8gYXV0b21hdGljYW1lbnRlIHF1YW5kbyBsZSBwcm9wcmlldMOgIGRlbCB3aWRnZXRcbiAgICAgICAgICogdmVuZ29ubyBtb2RpZmljYXRlLiBHZXN0aXNjZSBpbCByZW5kZXJpbmcgZGVsbCdpbnRlcmZhY2NpYSB1dGVudGVcbiAgICAgICAgICogaW4gYmFzZSBhbGxlIG51b3ZlIHByb3ByaWV0w6AuXG4gICAgICAgICAqL1xuICAgICAgICBvbkN1c3RvbVdpZGdldEFmdGVyVXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkN1c3RvbVdpZGdldFJlc2l6ZSh3LCBoKSB7IC8qIGdlc3Rpb25lIHJlc2l6ZSAqLyB9XG5cbiAgICAgICAgc2V0IGNvbG9yKGMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gYztcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0IHZhbHVlKHYpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGVyIGNvbXBhdGliaWxpdMOgIGNvbiBTQUNcbiAgICAgICAgZ2V0IGN3RGF0YVNvdXJjZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRlciBwZXIgaWwgRGF0YVNvdXJjZVNlcnZpY2UuXG4gICAgICAgICAqIFB1bGlzY2UgbCdpc3RhbnphIHByZWNlZGVudGUgZGVsIERhdGFTb3VyY2VTZXJ2aWNlIHNlIGVzaXN0ZSBlIGNyZWEgdW5hIG51b3ZhIGlzdGFuemEuXG4gICAgICAgICAqIEBwYXJhbSB7RGF0YVNvdXJjZVNlcnZpY2V9IGRhdGFTb3VyY2UgLSBMJ2lzdGFuemEgZGVsIERhdGFTb3VyY2VTZXJ2aWNlIGRhIGltcG9zdGFyZS5cbiAgICAgICAgICovXG4gICAgICAgIHNldCBjd0RhdGFTb3VyY2UoZGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgLy8gUHVsaXNjaSBsJ2lzdGFuemEgcHJlY2VkZW50ZSBkZWwgRGF0YVNvdXJjZVNlcnZpY2Ugc2UgZXNpc3RlXG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSAmJiB0eXBlb2YgdGhpcy5fZGF0YVNvdXJjZS5kaXNwb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVNvdXJjZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWEgbGEgbnVvdmEgaXN0YW56YVxuICAgICAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IG5ldyBEYXRhU291cmNlU2VydmljZShkYXRhU291cmNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhU291cmNlIGRpc3BvbmliaWxlOicsIHRoaXMuX2RhdGFTb3VyY2UuZ2V0U2ltcGxpZmllZERhdGEoKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF9yZW5kZXIoKSB7XG4gICAgICAgICAgICAvL3RoaXMuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuX2NvbG9yIHx8ICcjZmZmJztcblxuICAgICAgICAgICAgLy8gU2UgY2kgc29ubyBkYXRpIGRpc3BvbmliaWxpLCB1dGlsaXp6YSBUYWJsZVJlbmRlcmVyIHBlciB2aXN1YWxpenphcmxpXG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhU291cmNlLmdldFNpbXBsaWZpZWREYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFibGVSZW5kZXJlci5yZW5kZXIoZGF0YSwgJ0RhdGkgZGVsIFdpZGdldCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJsZVJlbmRlcmVyLnJlbmRlcihbXSwgJ05lc3N1biBkYXRvIGRpc3BvbmliaWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb20tdGVzdC1kZW1vLWJhc2V3aWRnZXQnLCBCYXNlV2lkZ2V0KTtcbn0pKCk7Il0sIm5hbWVzIjpbImRhdGFzb3VyY2UiLCJEYXRhU291cmNlU2VydmljZSIsImRhdGFTb3VyY2UiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldERhdGFTb3VyY2UiLCJnZXREYXRhIiwiZGF0YSIsImdldE1ldGFkYXRhIiwibWV0YWRhdGEiLCJnZXREaW1lbnNpb25LZXlzIiwiX21ldGFkYXRhJGZlZWRzIiwiZmVlZHMiLCJkaW1lbnNpb25zIiwidmFsdWVzIiwiZ2V0TWVhc3VyZUtleXMiLCJfbWV0YWRhdGEkZmVlZHMyIiwibWVhc3VyZXMiLCJnZXREaW1lbnNpb25zIiwiZGltZW5zaW9uS2V5cyIsImRpbWVuc2lvbnNJbmZvIiwibWFwIiwiaW5mbyIsImlkIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsImdldE1lYXN1cmVzIiwibWVhc3VyZUtleXMiLCJtZWFzdXJlc0luZm8iLCJtYWluU3RydWN0dXJlTWVtYmVycyIsImdldFVuaXF1ZURpbWVuc2lvblZhbHVlcyIsImRpbWVuc2lvbktleSIsInVuaXF1ZVZhbHVlcyIsIlNldCIsImZvckVhY2giLCJpdGVtIiwiYWRkIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyQnlEaW1lbnNpb24iLCJmaWx0ZXIiLCJkaXNwb3NlIiwiZ2V0U2ltcGxpZmllZERhdGEiLCJrZXlUb0luZm9NYXAiLCJkaW0iLCJtZWFzdXJlIiwic2ltcGxpZmllZEl0ZW0iLCJtZWFzdXJlRGF0YSIsInJhdyIsImZvcm1hdHRlZCIsImdldEFsbEZpZWxkcyIsIl9vYmplY3RTcHJlYWQiLCJ0eXBlIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiVGFibGVSZW5kZXJlciIsImNvbnRhaW5lciIsInJlbmRlciIsInRpdGxlIiwiaGVhZGVyRWxlbWVudCIsInBhcmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJlbXB0eU1lc3NhZ2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsInRhYmxlIiwidGhlYWQiLCJoZWFkZXJSb3ciLCJmaXJzdEl0ZW0iLCJoZWFkZXJzIiwiT2JqZWN0Iiwia2V5cyIsImhlYWRlciIsInRoIiwidGJvZHkiLCJyb3ciLCJ0ZCIsIl90eXBlb2YiLCJKU09OIiwic3RyaW5naWZ5IiwidGVtcGxhdGVIdG1sIiwidGVtcGxhdGUiLCJCYXNlV2lkZ2V0IiwiX0hUTUxFbGVtZW50IiwiX3RoaXMiLCJfY2FsbFN1cGVyIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiX2RhdGFTb3VyY2UiLCJfdGFibGVSZW5kZXJlciIsInNoYWRvd1Jvb3QiLCJfaW5oZXJpdHMiLCJvbkN1c3RvbVdpZGdldEJlZm9yZVVwZGF0ZSIsImNoYW5nZXMiLCJhc3NpZ24iLCJvbkN1c3RvbVdpZGdldEFmdGVyVXBkYXRlIiwiX3JlbmRlciIsIm9uQ3VzdG9tV2lkZ2V0UmVzaXplIiwidyIsImgiLCJzZXQiLCJjIiwiX2NvbG9yIiwidiIsIl92YWx1ZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJzb3VyY2VSb290IjoiIn0=