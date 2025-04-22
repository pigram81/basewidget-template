/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************************!*\
  !*** ./src/widgets/basewidget/basewidget_styling.js ***!
  \******************************************************/
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
  template.innerHTML = "\n    <style>\n      :host{display:block;padding:8px 12px;font-family:sans-serif}\n      label{display:block;margin:8px 0 4px;font-size:12px;color:#555}\n      input[type=\"color\"],input[type=\"number\"]{width:100%;padding:4px;border:1px solid #ccc;border-radius:4px}\n    </style>\n    <label>Background color</label>\n    <input id=\"color\" type=\"color\">\n    <label>Value</label>\n    <input id=\"value\" type=\"number\" step=\"1\">\n  ";
  var BaseWidgetStyling = /*#__PURE__*/function (_HTMLElement) {
    function BaseWidgetStyling() {
      var _this;
      _classCallCheck(this, BaseWidgetStyling);
      _this = _callSuper(this, BaseWidgetStyling);
      _this.attachShadow({
        mode: 'open'
      }).appendChild(template.content.cloneNode(true));
      return _this;
    }
    _inherits(BaseWidgetStyling, _HTMLElement);
    return _createClass(BaseWidgetStyling, [{
      key: "onCustomWidgetBeforeUpdate",
      value: function onCustomWidgetBeforeUpdate(props) {
        if (props.color !== undefined) {
          this.shadowRoot.getElementById('color').value = props.color;
        }
        if (props.value !== undefined) {
          this.shadowRoot.getElementById('value').value = props.value;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;
        this.shadowRoot.getElementById('color').addEventListener('change', function (e) {
          _this2.dispatchEvent(new CustomEvent('propertiesChanged', {
            detail: {
              properties: {
                color: e.target.value
              }
            }
          }));
        });
        this.shadowRoot.getElementById('value').addEventListener('change', function (e) {
          _this2.dispatchEvent(new CustomEvent('propertiesChanged', {
            detail: {
              properties: {
                value: Number(e.target.value)
              }
            }
          }));
        });
      }
    }, {
      key: "color",
      get: function get() {
        return this.shadowRoot.getElementById('color').value;
      },
      set: function set(newColor) {
        this.shadowRoot.getElementById('color').value = newColor;
      }
    }, {
      key: "value",
      get: function get() {
        return Number(this.shadowRoot.getElementById('value').value);
      },
      set: function set(newValue) {
        this.shadowRoot.getElementById('value').value = newValue;
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
  customElements.define('com-test-demo-basewidget-styling', BaseWidgetStyling);
})();
var __webpack_export_target__ = window;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMsQ0FBQ04sS0FBSyxDQUFDO01BQzlELENBQUM7TUFBQWtCLEdBQUEsRUFORCxTQUFBQSxJQUFVRSxRQUFRLEVBQUU7UUFDbEIsSUFBSSxDQUFDZixVQUFVLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ04sS0FBSyxHQUFHb0IsUUFBUTtNQUMxRDtJQUFDO0VBQUEsZUFBQUMsZ0JBQUEsQ0FoRDZCQyxXQUFXO0VBc0QzQ0MsY0FBYyxDQUFDQyxNQUFNLENBQUMsa0NBQWtDLEVBQUVyQyxpQkFBaUIsQ0FBQztBQUM5RSxDQUFDLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZXdpZGdldC8uL3NyYy93aWRnZXRzL2Jhc2V3aWRnZXQvYmFzZXdpZGdldF9zdHlsaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuICAgIDxzdHlsZT5cclxuICAgICAgOmhvc3R7ZGlzcGxheTpibG9jaztwYWRkaW5nOjhweCAxMnB4O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWZ9XHJcbiAgICAgIGxhYmVse2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjhweCAwIDRweDtmb250LXNpemU6MTJweDtjb2xvcjojNTU1fVxyXG4gICAgICBpbnB1dFt0eXBlPVwiY29sb3JcIl0saW5wdXRbdHlwZT1cIm51bWJlclwiXXt3aWR0aDoxMDAlO3BhZGRpbmc6NHB4O2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjRweH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8bGFiZWw+QmFja2dyb3VuZCBjb2xvcjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgaWQ9XCJjb2xvclwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgPGxhYmVsPlZhbHVlPC9sYWJlbD5cclxuICAgIDxpbnB1dCBpZD1cInZhbHVlXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCIxXCI+XHJcbiAgYDtcclxuXHJcbiAgY2xhc3MgQmFzZVdpZGdldFN0eWxpbmcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSkuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ3VzdG9tV2lkZ2V0QmVmb3JlVXBkYXRlKHByb3BzKSB7XHJcbiAgICAgIGlmIChwcm9wcy5jb2xvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdjb2xvcicpLnZhbHVlID0gcHJvcHMuY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlJykudmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cclxuICAgICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdjb2xvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Byb3BlcnRpZXNDaGFuZ2VkJywge1xyXG4gICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncHJvcGVydGllc0NoYW5nZWQnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb2xvcihuZXdDb2xvcikge1xyXG4gICAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yJykudmFsdWUgPSBuZXdDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sb3IoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yJykudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZhbHVlKG5ld1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgndmFsdWUnKS52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlJykudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbS10ZXN0LWRlbW8tYmFzZXdpZGdldC1zdHlsaW5nJywgQmFzZVdpZGdldFN0eWxpbmcpO1xyXG59KSgpOyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIkJhc2VXaWRnZXRTdHlsaW5nIiwiX0hUTUxFbGVtZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImFwcGVuZENoaWxkIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwib25DdXN0b21XaWRnZXRCZWZvcmVVcGRhdGUiLCJwcm9wcyIsImNvbG9yIiwidW5kZWZpbmVkIiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRCeUlkIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInByb3BlcnRpZXMiLCJ0YXJnZXQiLCJOdW1iZXIiLCJnZXQiLCJzZXQiLCJuZXdDb2xvciIsIm5ld1ZhbHVlIiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwic291cmNlUm9vdCI6IiJ9