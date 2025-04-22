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
      },
      set: function set(dataSource) {
        // Pulisci l'istanza precedente del DataSourceService se esiste
        if (this._dataSource && typeof this._dataSource.dispose === 'function') {
          this._dataSource.dispose();
        }

        // Crea la nuova istanza
        this._dataSource = new _services_dataSource_service_js__WEBPACK_IMPORTED_MODULE_0__["default"](dataSource);
        console.log('DataSource disponibile:', this._dataSource);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMyRixjQUFjLENBQUN6QyxNQUFNLENBQUMsRUFBRSxFQUFFLHlCQUF5QixDQUFDO1FBQzdEO01BQ0o7SUFBQztFQUFBLGVBQUE0RCxnQkFBQSxDQTlEb0JDLFdBQVc7RUFnRXBDQyxjQUFjLENBQUNDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRWxDLFVBQVUsQ0FBQztBQUNqRSxDQUFDLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZXdpZGdldC8uL3NyYy93aWRnZXRzL2Jhc2V3aWRnZXQvZGF0YXNvdXJjZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly9iYXNld2lkZ2V0Ly4vc3JjL3dpZGdldHMvYmFzZXdpZGdldC9zZXJ2aWNlcy9kYXRhU291cmNlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC8uL3NyYy93aWRnZXRzL2Jhc2V3aWRnZXQvc2VydmljZXMvdGFibGVSZW5kZXJlci5zZXJ2aWNlLmpzIiwid2VicGFjazovL2Jhc2V3aWRnZXQvLi9zcmMvd2lkZ2V0cy9iYXNld2lkZ2V0L3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNld2lkZ2V0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2V3aWRnZXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2V3aWRnZXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNld2lkZ2V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzZXdpZGdldC8uL3NyYy93aWRnZXRzL2Jhc2V3aWRnZXQvYmFzZXdpZGdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYXRhc291cmNlID0ge1xyXG4gICAgXCJkYXRhXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJBUEFDXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQVBBQ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMjcsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjI3XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDY1OTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2NSw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDY2MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2NiwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiQXVzdHJhbGlhXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQXVzdHJhbGlhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAzNSxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMzVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogOTI5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjkyLDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogOTMwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjkzLDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJCcmFzaWwgJiBMQVRBTVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkJyYXNpbCAmIExBVEFNXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAxOCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMThcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogODc5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjg3LDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogODgwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjg4LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJFTUVBXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRU1FQVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMTIsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjEyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDg4OTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI4OCw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDg5MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI4OSwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiSW5kaWFcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJJbmRpYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMzAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjMwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDQ1OTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI0NSw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDQ2MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI0NiwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTWFkYWdhc2NhclwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1hZGFnYXNjYXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDIyLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIyMlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAyODk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMjgsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAyOTAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMjksMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1hbGRpdmVzXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFsZGl2ZXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDM5LFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIzOVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA1Mzk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNTMsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA1NDAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNTQsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1lc3NpY29cIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJNZXNzaWNvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInB1YmxpYy5BY3R1YWxcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJwdWJsaWMuQWN0dWFsIEFjdHVhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiAxNSxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiMTVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjQ5OTk0MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjY0LDk5OSw0MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI2MDAuMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogNjUwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjY1LDAwMCwwMDAuMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJOT1JUSCBBTUVSSUNBXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTk9SVEggQU1FUklDQVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMzAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjMwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDkwOTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI5MCw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDkxMDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI5MSwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTmV3IFplbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5ldyBaZWxhbmRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDEzLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIxM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA0Mzk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNDMsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA0NDAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNDQsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIlNvdXRoIEFmcmljYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlNvdXRoIEFmcmljYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwdWJsaWMuQWN0dWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwicHVibGljLkFjdHVhbCBBY3R1YWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJyYXdcIjogMjgsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjI4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18wXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDc1OTk5NDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI3NSw5OTksNDAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiNjAwLjAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDc2MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCI3NiwwMDAsMDAwLjAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiVHJhdmVsIFJldGFpbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRyYXZlbCBSZXRhaWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicHVibGljLkFjdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInB1YmxpYy5BY3R1YWwgQWN0dWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZWFzdXJlc18zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicmF3XCI6IDM2LFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXR0ZWRcIjogXCIzNlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA5NTk5OTQwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiOTUsOTk5LDQwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcImZvcm1hdHRlZFwiOiBcIjYwMC4wMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInJhd1wiOiA5NjAwMDAwMCxcclxuICAgICAgICAgICAgICAgIFwiZm9ybWF0dGVkXCI6IFwiOTYsMDAwLDAwMC4wMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJtZXRhZGF0YVwiOiB7XHJcbiAgICAgICAgXCJmZWVkc1wiOiB7XHJcbiAgICAgICAgICAgIFwibWVhc3VyZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibWVhc3VyZXNfMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVhc3VyZXNfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVhc3VyZXNfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVhc3VyZXNfM1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWFpblN0cnVjdHVyZU1lbWJlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpbWVuc2lvbnNfMVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGltZW5zaW9uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkaW1lbnNpb25zXCI6IHtcclxuICAgICAgICAgICAgXCJkaW1lbnNpb25zXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIkRpbWVuc2lvbmVfZGlfc3BhY2NhdHVyYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRpbWVuc2lvbmUgZGkgc3BhY2NhdHVyYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGltZW5zaW9uc18xXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJWZXJzaW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVmVyc2lvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWFpblN0cnVjdHVyZU1lbWJlcnNcIjoge1xyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjI1ODA2ODIzLTM0MjYtNDAxNi0zNTc0LTgyMTM5MzI5MDM5NlwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBZX0NBTENcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjIwOTkzNzI3LTUyMzMtNDU2NC0zMDY5LTkyNjk1MjczNDczM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRlbHRhX2NhbGNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjI3NDA4MTY0LTg2MTEtNDA2OS0zMzgyLTEzNTgzMjA2MDEyMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk9yZGVyX1F1YW50aXR5X0NZX0tcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1lYXN1cmVzXzNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk90aGVyX01lYXN1cmVcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJPdGhlciBNZWFzdXJlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInN0YXRlXCI6IFwic3VjY2Vzc1wiXHJcbn1cclxuIiwiaW1wb3J0IGRhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZS5tb2RlbC5qcyc7XHJcblxyXG5jbGFzcyBEYXRhU291cmNlU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhU291cmNlID0gZGF0YXNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIGwnaW50ZXJvIGRhdGFzb3VyY2VcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IElsIGRhdGFzb3VyY2UgY29tcGxldG9cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YVNvdXJjZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3R0aWVuZSB0dXR0aSBpIGRhdGkgZGFsIGRhdGFzb3VyY2VcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gSSBkYXRpIHByZXNlbnRpIG5lbCBkYXRhc291cmNlXHJcbiAgICAgKi9cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3R0aWVuZSBpIG1ldGFkYXRpIGRhbCBkYXRhc291cmNlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJIG1ldGFkYXRpIGRlbCBkYXRhc291cmNlXHJcbiAgICAgKi9cclxuICAgIGdldE1ldGFkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UubWV0YWRhdGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIGxlIGNoaWF2aSBkZWxsZSBkaW1lbnNpb25pXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5IGRpIGNoaWF2aSBkZWxsZSBkaW1lbnNpb25pIChlcy4gWydkaW1lbnNpb25zXzAnLCAnZGltZW5zaW9uc18xJ10pXHJcbiAgICAgKi9cclxuICAgIGdldERpbWVuc2lvbktleXMoKSB7XHJcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLmdldE1ldGFkYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhLmZlZWRzPy5kaW1lbnNpb25zPy52YWx1ZXMgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIGxlIGNoaWF2aSBkZWxsZSBtaXN1cmVcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgZGkgY2hpYXZpIGRlbGxlIG1pc3VyZSAoZXMuIFsnbWVhc3VyZXNfMCcsICdtZWFzdXJlc18xJ10pXHJcbiAgICAgKi9cclxuICAgIGdldE1lYXN1cmVLZXlzKCkge1xyXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5nZXRNZXRhZGF0YSgpO1xyXG4gICAgICAgIHJldHVybiBtZXRhZGF0YS5mZWVkcz8ubWVhc3VyZXM/LnZhbHVlcyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE90dGllbmUgbGEgbGlzdGEgZGVsbGUgZGltZW5zaW9uaSBjb24gaWQsIGxhYmVsIGUgY2hpYXZlXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IExpc3RhIGRlbGxlIGRpbWVuc2lvbmkgY29uIGluZm9ybWF6aW9uaVxyXG4gICAgICovXHJcbiAgICBnZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbktleXMgPSB0aGlzLmdldERpbWVuc2lvbktleXMoKTtcclxuICAgICAgICBjb25zdCBkaW1lbnNpb25zSW5mbyA9IHRoaXMuZ2V0TWV0YWRhdGEoKS5kaW1lbnNpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICByZXR1cm4gZGltZW5zaW9uS2V5cy5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRpbWVuc2lvbnNJbmZvW2tleV0gfHwge307XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICBpZDogaW5mby5pZCB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBpbmZvLmRlc2NyaXB0aW9uIHx8ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIGxhIGxpc3RhIGRlbGxlIG1pc3VyZSBjb24gaWQsIGxhYmVsIGUgY2hpYXZlXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IExpc3RhIGRlbGxlIG1pc3VyZSBjb24gaW5mb3JtYXppb25pXHJcbiAgICAgKi9cclxuICAgIGdldE1lYXN1cmVzKCkge1xyXG4gICAgICAgIGNvbnN0IG1lYXN1cmVLZXlzID0gdGhpcy5nZXRNZWFzdXJlS2V5cygpO1xyXG4gICAgICAgIGNvbnN0IG1lYXN1cmVzSW5mbyA9IHRoaXMuZ2V0TWV0YWRhdGEoKS5tYWluU3RydWN0dXJlTWVtYmVycyB8fCB7fTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lYXN1cmVLZXlzLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmZvID0gbWVhc3VyZXNJbmZvW2tleV0gfHwge307XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICBpZDogaW5mby5pZCB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBpbmZvLmxhYmVsIHx8ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIGkgdmFsb3JpIHVuaWNpIGRpIHVuYSBkaW1lbnNpb25lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGltZW5zaW9uS2V5IC0gTGEgY2hpYXZlIGRlbGxhIGRpbWVuc2lvbmUgKGVzLiAnZGltZW5zaW9uc18wJylcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gVmFsb3JpIHVuaWNpIGRlbGxhIGRpbWVuc2lvbmUgc3BlY2lmaWNhdGFcclxuICAgICAqL1xyXG4gICAgZ2V0VW5pcXVlRGltZW5zaW9uVmFsdWVzKGRpbWVuc2lvbktleSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1bZGltZW5zaW9uS2V5XSAmJiBpdGVtW2RpbWVuc2lvbktleV0uaWQpIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZVZhbHVlcy5hZGQoaXRlbVtkaW1lbnNpb25LZXldLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWVWYWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlsdHJhIGkgZGF0aSBpbiBiYXNlIGEgdW4gdmFsb3JlIGRpIGRpbWVuc2lvbmVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkaW1lbnNpb25LZXkgLSBMYSBjaGlhdmUgZGVsbGEgZGltZW5zaW9uZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gSWwgdmFsb3JlIGRlbGxhIGRpbWVuc2lvbmVcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gRGF0aSBmaWx0cmF0aVxyXG4gICAgICovXHJcbiAgICBmaWx0ZXJCeURpbWVuc2lvbihkaW1lbnNpb25LZXksIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIHJldHVybiBkYXRhLmZpbHRlcihpdGVtID0+XHJcbiAgICAgICAgICAgIGl0ZW1bZGltZW5zaW9uS2V5XSAmJiBpdGVtW2RpbWVuc2lvbktleV0uaWQgPT09IHZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1bGlzY2UgbGUgcmlzb3JzZSB1dGlsaXp6YXRlIGRhbCBzZXJ2aXppb1xyXG4gICAgICogQ2hpYW1hcmUgcXVlc3RvIG1ldG9kbyBxdWFuZG8gaWwgc2Vydml6aW8gbm9uIMOoIHBpw7kgbmVjZXNzYXJpb1xyXG4gICAgICogcGVyIGV2aXRhcmUgbWVtb3J5IGxlYWtcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAvLyBSaW11b3ZpIHJpZmVyaW1lbnRpIGFpIGRhdGlcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc3RpdHVpc2NlIGkgZGF0aSBpbiBmb3JtYXRvIHNlbXBsaWZpY2F0byB1c2FuZG8gbGUgbGFiZWwgY29tZSBjaGlhdmlcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gRGF0aSBjb24gc3RydXR0dXJhIHBpw7kgY29tcGxldGFcclxuICAgICAqL1xyXG4gICAgZ2V0U2ltcGxpZmllZERhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLmdldERpbWVuc2lvbnMoKTtcclxuICAgICAgICBjb25zdCBtZWFzdXJlcyA9IHRoaXMuZ2V0TWVhc3VyZXMoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlaWFtbyBkaXppb25hcmkgcGVyIGFjY2Vzc28gdmVsb2NlXHJcbiAgICAgICAgY29uc3Qga2V5VG9JbmZvTWFwID0ge307XHJcbiAgICAgICAgZGltZW5zaW9ucy5mb3JFYWNoKGRpbSA9PiB7XHJcbiAgICAgICAgICAgIGtleVRvSW5mb01hcFtkaW0ua2V5XSA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkaW0ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBpZDogZGltLmlkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWVhc3VyZXMuZm9yRWFjaChtZWFzdXJlID0+IHtcclxuICAgICAgICAgICAga2V5VG9JbmZvTWFwW21lYXN1cmUua2V5XSA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBtZWFzdXJlLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG1lYXN1cmUuaWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaW1wbGlmaWVkSXRlbSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2Vzc2EgZGltZW5zaW9uaVxyXG4gICAgICAgICAgICBkaW1lbnNpb25zLmZvckVhY2goZGltID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtW2RpbS5rZXldICYmIGl0ZW1bZGltLmtleV0ubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGlmaWVkSXRlbVtrZXlUb0luZm9NYXBbZGltLmtleV0ubGFiZWxdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGRpbS5rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBrZXlUb0luZm9NYXBbZGltLmtleV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtW2RpbS5rZXldLmxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9jZXNzYSBtaXN1cmVcclxuICAgICAgICAgICAgbWVhc3VyZXMuZm9yRWFjaChtZWFzdXJlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtW21lYXN1cmUua2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lYXN1cmVEYXRhID0gaXRlbVttZWFzdXJlLmtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxpZmllZEl0ZW1ba2V5VG9JbmZvTWFwW21lYXN1cmUua2V5XS5sYWJlbF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbWVhc3VyZS5rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBrZXlUb0luZm9NYXBbbWVhc3VyZS5rZXldLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3OiBtZWFzdXJlRGF0YS5yYXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IG1lYXN1cmVEYXRhLmZvcm1hdHRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2ltcGxpZmllZEl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdHRpZW5lIGxhIGxpc3RhIGNvbXBsZXRhIGRpIHR1dHRpIGkgY2FtcGkgKGRpbWVuc2lvbmkgZSBtaXN1cmUpIGNvbiByZWxhdGl2aSBpZCBlIGxhYmVsXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IExpc3RhIGNvbWJpbmF0YSBkaSBkaW1lbnNpb25pIGUgbWlzdXJlXHJcbiAgICAgKi9cclxuICAgIGdldEFsbEZpZWxkcygpIHtcclxuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5nZXREaW1lbnNpb25zKCkubWFwKGRpbSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kaW0sXHJcbiAgICAgICAgICAgIHR5cGU6ICdkaW1lbnNpb24nXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBtZWFzdXJlcyA9IHRoaXMuZ2V0TWVhc3VyZXMoKS5tYXAobWVhc3VyZSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5tZWFzdXJlLFxyXG4gICAgICAgICAgICB0eXBlOiAnbWVhc3VyZSdcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBbLi4uZGltZW5zaW9ucywgLi4ubWVhc3VyZXNdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlU2VydmljZTtcclxuIiwiLyoqXHJcbiAqIENsYXNzZSBwZXIgZ2VzdGlyZSBsYSBjcmVhemlvbmUgZSBsJ2FnZ2lvcm5hbWVudG8gZGVsbGEgdGFiZWxsYVxyXG4gKi9cclxuY2xhc3MgVGFibGVSZW5kZXJlciB7XHJcbiAgICAvKipcclxuICAgICAqIENvc3RydXR0b3JlIGRlbGxhIGNsYXNzZSBUYWJsZVJlbmRlcmVyXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBMJ2VsZW1lbnRvIGNvbnRlbml0b3JlIGRlbGxhIHRhYmVsbGFcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhIGUgcmVuZGVyaXp6YSBsYSB0YWJlbGxhIGNvbiBpIGRhdGkgZm9ybml0aVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIERhdGkgZGEgdmlzdWFsaXp6YXJlIG5lbGxhIHRhYmVsbGFcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRpdG9sbyBkYSBtb3N0cmFyZSBzb3ByYSBsYSB0YWJlbGxhXHJcbiAgICAgKi9cclxuICAgIHJlbmRlcihkYXRhLCB0aXRsZSkge1xyXG4gICAgICAgIC8vIEltcG9zdGEgaWwgdGl0b2xvIHNlIGZvcm5pdG9cclxuICAgICAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbiAgICAgICAgaGVhZGVyRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlIHx8ICcnO1xyXG5cclxuICAgICAgICAvLyBQdWxpc2NpIGlsIGNvbnRlbml0b3JlXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIC8vIFNlIG5vbiBjaSBzb25vIGRhdGksIG1vc3RyYSB1biBtZXNzYWdnaW9cclxuICAgICAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5jbGFzc05hbWUgPSAnZW1wdHktbWVzc2FnZSc7XHJcbiAgICAgICAgICAgIGVtcHR5TWVzc2FnZS50ZXh0Q29udGVudCA9ICdOZXNzdW4gZGF0byBkaXNwb25pYmlsZSc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWEgbGEgdGFiZWxsYVxyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYSBpbnRlc3RhemlvbmUgZGVsbGEgdGFiZWxsYVxyXG4gICAgICAgIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgICAgICAvLyBPdHRpZW5pIGxlIGNoaWF2aSBwZXIgbGUgaW50ZXN0YXppb25pIGRhbGxlIHByb3ByaWV0w6AgZGVsIHByaW1vIG9nZ2V0dG9cclxuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBkYXRhWzBdO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBPYmplY3Qua2V5cyhmaXJzdEl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBBZ2dpdW5naSBjZWxsZSBkJ2ludGVzdGF6aW9uZVxyXG4gICAgICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gaGVhZGVyO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGVhZC5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYSBjb3JwbyBkZWxsYSB0YWJlbGxhXHJcbiAgICAgICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG5cclxuICAgICAgICAvLyBBZ2dpdW5naSByaWdoZSBwZXIgb2duaSBlbGVtZW50byBuZWkgZGF0aVxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFnZ2l1bmdpIGNlbGxlIHBlciBvZ25pIHByb3ByaWV0w6BcclxuICAgICAgICAgICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2UgaWwgdmFsb3JlIMOoIHVuIG9nZ2V0dG8gY29uIHByb3ByaWV0w6AgXCJ2YWx1ZVwiIG8gXCJmb3JtYXR0ZWRcIiwgdXNhIHF1ZWxsb1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtW2hlYWRlcl07XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS52YWx1ZSAmJiB0eXBlb2YgdmFsdWUudmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLnZhbHVlLmZvcm1hdHRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9IHZhbHVlLnZhbHVlLmZvcm1hdHRlZDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gdmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9IHZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVSZW5kZXJlcjsgIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHN0eWxlPlxcclxcbiAgICA6aG9zdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YWJsZS1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0YWJsZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0aCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xcclxcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0ZCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRyOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdHI6bGFzdC1jaGlsZCB0ZCB7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lbXB0eS1tZXNzYWdlIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICBjb2xvcjogIzc3NztcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ0YWJsZS1jb250YWluZXJcXFwiPjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERhdGFTb3VyY2VTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvZGF0YVNvdXJjZS5zZXJ2aWNlLmpzJztcbmltcG9ydCBUYWJsZVJlbmRlcmVyIGZyb20gJy4vc2VydmljZXMvdGFibGVSZW5kZXJlci5zZXJ2aWNlLmpzJztcbmltcG9ydCB0ZW1wbGF0ZUh0bWwgZnJvbSAnLi90ZW1wbGF0ZS5odG1sJztcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGVtcGxhdGVIdG1sO1xuXG4gICAgY2xhc3MgQmFzZVdpZGdldCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSkuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ29uQ2xpY2snKSkpO1xuICAgICAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl90YWJsZVJlbmRlcmVyID0gbmV3IFRhYmxlUmVuZGVyZXIodGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1jb250YWluZXInKSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkN1c3RvbVdpZGdldEJlZm9yZVVwZGF0ZShjaGFuZ2VzKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNoYW5nZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1ldG9kbyBjaGlhbWF0byBkb3BvIGwnYWdnaW9ybmFtZW50byBkZWwgd2lkZ2V0LlxuICAgICAgICAgKiBRdWVzdG8gbWV0b2RvIHZpZW5lIGludm9jYXRvIGF1dG9tYXRpY2FtZW50ZSBxdWFuZG8gbGUgcHJvcHJpZXTDoCBkZWwgd2lkZ2V0XG4gICAgICAgICAqIHZlbmdvbm8gbW9kaWZpY2F0ZS4gR2VzdGlzY2UgaWwgcmVuZGVyaW5nIGRlbGwnaW50ZXJmYWNjaWEgdXRlbnRlXG4gICAgICAgICAqIGluIGJhc2UgYWxsZSBudW92ZSBwcm9wcmlldMOgLlxuICAgICAgICAgKi9cbiAgICAgICAgb25DdXN0b21XaWRnZXRBZnRlclVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25DdXN0b21XaWRnZXRSZXNpemUodywgaCkgeyAvKiBnZXN0aW9uZSByZXNpemUgKi8gfVxuXG4gICAgICAgIHNldCBjb2xvcihjKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xvciA9IGM7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBlciBjb21wYXRpYmlsaXTDoCBjb24gU0FDXG4gICAgICAgIGdldCBjd0RhdGFTb3VyY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldCBjd0RhdGFTb3VyY2UoZGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgLy8gUHVsaXNjaSBsJ2lzdGFuemEgcHJlY2VkZW50ZSBkZWwgRGF0YVNvdXJjZVNlcnZpY2Ugc2UgZXNpc3RlXG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSAmJiB0eXBlb2YgdGhpcy5fZGF0YVNvdXJjZS5kaXNwb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVNvdXJjZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWEgbGEgbnVvdmEgaXN0YW56YVxuICAgICAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IG5ldyBEYXRhU291cmNlU2VydmljZShkYXRhU291cmNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhU291cmNlIGRpc3BvbmliaWxlOicsIHRoaXMuX2RhdGFTb3VyY2UpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfcmVuZGVyKCkge1xuICAgICAgICAgICAgLy90aGlzLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLl9jb2xvciB8fCAnI2ZmZic7XG5cbiAgICAgICAgICAgIC8vIFNlIGNpIHNvbm8gZGF0aSBkaXNwb25pYmlsaSwgdXRpbGl6emEgVGFibGVSZW5kZXJlciBwZXIgdmlzdWFsaXp6YXJsaVxuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVNvdXJjZS5nZXRTaW1wbGlmaWVkRGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhYmxlUmVuZGVyZXIucmVuZGVyKGRhdGEsICdEYXRpIGRlbCBXaWRnZXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFibGVSZW5kZXJlci5yZW5kZXIoW10sICdOZXNzdW4gZGF0byBkaXNwb25pYmlsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29tLXRlc3QtZGVtby1iYXNld2lkZ2V0JywgQmFzZVdpZGdldCk7XG59KSgpOyJdLCJuYW1lcyI6WyJkYXRhc291cmNlIiwiRGF0YVNvdXJjZVNlcnZpY2UiLCJkYXRhU291cmNlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXREYXRhU291cmNlIiwiZ2V0RGF0YSIsImRhdGEiLCJnZXRNZXRhZGF0YSIsIm1ldGFkYXRhIiwiZ2V0RGltZW5zaW9uS2V5cyIsIl9tZXRhZGF0YSRmZWVkcyIsImZlZWRzIiwiZGltZW5zaW9ucyIsInZhbHVlcyIsImdldE1lYXN1cmVLZXlzIiwiX21ldGFkYXRhJGZlZWRzMiIsIm1lYXN1cmVzIiwiZ2V0RGltZW5zaW9ucyIsImRpbWVuc2lvbktleXMiLCJkaW1lbnNpb25zSW5mbyIsIm1hcCIsImluZm8iLCJpZCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJnZXRNZWFzdXJlcyIsIm1lYXN1cmVLZXlzIiwibWVhc3VyZXNJbmZvIiwibWFpblN0cnVjdHVyZU1lbWJlcnMiLCJnZXRVbmlxdWVEaW1lbnNpb25WYWx1ZXMiLCJkaW1lbnNpb25LZXkiLCJ1bmlxdWVWYWx1ZXMiLCJTZXQiLCJmb3JFYWNoIiwiaXRlbSIsImFkZCIsIkFycmF5IiwiZnJvbSIsImZpbHRlckJ5RGltZW5zaW9uIiwiZmlsdGVyIiwiZGlzcG9zZSIsImdldFNpbXBsaWZpZWREYXRhIiwia2V5VG9JbmZvTWFwIiwiZGltIiwibWVhc3VyZSIsInNpbXBsaWZpZWRJdGVtIiwibWVhc3VyZURhdGEiLCJyYXciLCJmb3JtYXR0ZWQiLCJnZXRBbGxGaWVsZHMiLCJfb2JqZWN0U3ByZWFkIiwidHlwZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIlRhYmxlUmVuZGVyZXIiLCJjb250YWluZXIiLCJyZW5kZXIiLCJ0aXRsZSIsImhlYWRlckVsZW1lbnQiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiZW1wdHlNZXNzYWdlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJ0YWJsZSIsInRoZWFkIiwiaGVhZGVyUm93IiwiZmlyc3RJdGVtIiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJoZWFkZXIiLCJ0aCIsInRib2R5Iiwicm93IiwidGQiLCJfdHlwZW9mIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXBsYXRlSHRtbCIsInRlbXBsYXRlIiwiQmFzZVdpZGdldCIsIl9IVE1MRWxlbWVudCIsIl90aGlzIiwiX2NhbGxTdXBlciIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIl9kYXRhU291cmNlIiwiX3RhYmxlUmVuZGVyZXIiLCJzaGFkb3dSb290IiwiX2luaGVyaXRzIiwib25DdXN0b21XaWRnZXRCZWZvcmVVcGRhdGUiLCJjaGFuZ2VzIiwiYXNzaWduIiwib25DdXN0b21XaWRnZXRBZnRlclVwZGF0ZSIsIl9yZW5kZXIiLCJvbkN1c3RvbVdpZGdldFJlc2l6ZSIsInciLCJoIiwic2V0IiwiYyIsIl9jb2xvciIsInYiLCJfdmFsdWUiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwic291cmNlUm9vdCI6IiJ9