(()=>{var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(i())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(t.bind.apply(t,r));return n&&u(o,n.prototype),o}(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,t)},o(t)}function i(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(i=function(){return!!t})()}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}!function(){var t=document.createElement("template");t.innerHTML="<style>:host{display:flex;align-items:center;\n      justify-content:center;border:1px solid #ccc;border-radius:8px;cursor:pointer}\n    </style><slot></slot>";var r=function(r){function o(){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=function(t,n,r){return n=c(n),function(t,n){if(n&&("object"==e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,i()?Reflect.construct(n,r||[],c(t).constructor):n.apply(t,r))}(this,o)).attachShadow({mode:"open"}).appendChild(t.content.cloneNode(!0)),n.addEventListener("click",(function(){return n.dispatchEvent(new Event("onClick"))})),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(o,r),f=o,(l=[{key:"onCustomWidgetBeforeUpdate",value:function(t){Object.assign(this,t)}},{key:"onCustomWidgetAfterUpdate",value:function(){this._render()}},{key:"onCustomWidgetResize",value:function(t,e){}},{key:"color",set:function(t){this._color=t,this._render()}},{key:"value",set:function(t){this._value=t,this._render()}},{key:"_render",value:function(){var t;this.style.background=this._color||"#2196f3",this.shadowRoot.querySelector("slot").textContent=null!==(t=this._value)&&void 0!==t?t:""}}])&&n(f.prototype,l),Object.defineProperty(f,"prototype",{writable:!1}),f;var f,l}(o(HTMLElement));customElements.define("com-test-demo-basewidget",r)}();var f=window;for(var l in t)f[l]=t[l];t.__esModule&&Object.defineProperty(f,"__esModule",{value:!0})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXdpZGdldC5qcyIsIm1hcHBpbmdzIjoiNHdEQUFBLFdBQ0ksSUFBTUEsRUFBV0MsU0FBU0MsY0FBYyxZQUN4Q0YsRUFBU0csVUFBWSxpS0FFRSxJQUVqQkMsRUFBVSxTQUFBQyxHQUNaLFNBQUFELElBQWMsSUFBQUUsRUFHcUUsTyw0RkFIckVDLENBQUEsS0FBQUgsSUFDVkUsRSxxWUFBQUUsQ0FBQSxLQUFBSixJQUNLSyxhQUFhLENBQUVDLEtBQU0sU0FBVUMsWUFBWVgsRUFBU1ksUUFBUUMsV0FBVSxJQUMzRVAsRUFBS1EsaUJBQWlCLFNBQVMsa0JBQU1SLEVBQUtTLGNBQWMsSUFBSUMsTUFBTSxXQUFXLElBQUVWLENBQ25GLENBQUMsTyxxUkFBQVcsQ0FBQWIsRUFBQUMsRyxFQUFBRCxHLEVBQUEsRUFBQWMsSUFBQSw2QkFBQUMsTUFFRCxTQUEyQkMsR0FBV0MsT0FBT0MsT0FBT0MsS0FBTUgsRUFBVSxHQUFDLENBQUFGLElBQUEsNEJBQUFDLE1BQ3JFLFdBQThCSSxLQUFLQyxTQUFXLEdBQUMsQ0FBQU4sSUFBQSx1QkFBQUMsTUFDL0MsU0FBcUJNLEVBQUdDLEdBQTBCLEdBQUUsQ0FBQVIsSUFBQSxRQUFBUyxJQUVwRCxTQUFVQyxHQUFLTCxLQUFLTSxPQUFTRCxFQUFHTCxLQUFLQyxTQUFXLEdBQUMsQ0FBQU4sSUFBQSxRQUFBUyxJQUNqRCxTQUFVRyxHQUFLUCxLQUFLUSxPQUFTRCxFQUFHUCxLQUFLQyxTQUFXLEdBQUMsQ0FBQU4sSUFBQSxVQUFBQyxNQUVqRCxXQUFVLElBQUFhLEVBQ05ULEtBQUtVLE1BQU1DLFdBQWFYLEtBQUtNLFFBQVUsVUFDdkNOLEtBQUtZLFdBQVdDLGNBQWMsUUFBUUMsWUFBeUIsUUFBZEwsRUFBR1QsS0FBS1EsY0FBTSxJQUFBQyxFQUFBQSxFQUFJLEVBQ3ZFLE0sNkVBQUMsQ0FqQlcsQ0FpQlhNLEVBakJvQkMsY0FtQnpCQyxlQUFlQyxPQUFPLDJCQUE0QnJDLEVBQ3JELENBMUJELEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNld2lkZ2V0Ly4vc3JjL3dpZGdldHMvYmFzZXdpZGdldC9iYXNld2lkZ2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBgPHN0eWxlPjpob3N0e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yYWRpdXM6OHB4O2N1cnNvcjpwb2ludGVyfVxyXG4gICAgPC9zdHlsZT48c2xvdD48L3Nsb3Q+YDtcclxuXHJcbiAgICBjbGFzcyBCYXNlV2lkZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdvbkNsaWNrJykpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uQ3VzdG9tV2lkZ2V0QmVmb3JlVXBkYXRlKGNoYW5nZXMpIHsgT2JqZWN0LmFzc2lnbih0aGlzLCBjaGFuZ2VzKTsgfVxyXG4gICAgICAgIG9uQ3VzdG9tV2lkZ2V0QWZ0ZXJVcGRhdGUoKSB7IHRoaXMuX3JlbmRlcigpOyB9XHJcbiAgICAgICAgb25DdXN0b21XaWRnZXRSZXNpemUodywgaCkgeyAvKiBnZXN0aW9uZSByZXNpemUgKi8gfVxyXG5cclxuICAgICAgICBzZXQgY29sb3IoYykgeyB0aGlzLl9jb2xvciA9IGM7IHRoaXMuX3JlbmRlcigpOyB9XHJcbiAgICAgICAgc2V0IHZhbHVlKHYpIHsgdGhpcy5fdmFsdWUgPSB2OyB0aGlzLl9yZW5kZXIoKTsgfVxyXG5cclxuICAgICAgICBfcmVuZGVyKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLl9jb2xvciB8fCAnIzIxOTZmMyc7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90JykudGV4dENvbnRlbnQgPSB0aGlzLl92YWx1ZSA/PyAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbS10ZXN0LWRlbW8tYmFzZXdpZGdldCcsIEJhc2VXaWRnZXQpO1xyXG59KSgpOyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIkJhc2VXaWRnZXQiLCJfSFRNTEVsZW1lbnQiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIl9pbmhlcml0cyIsImtleSIsInZhbHVlIiwiY2hhbmdlcyIsIk9iamVjdCIsImFzc2lnbiIsInRoaXMiLCJfcmVuZGVyIiwidyIsImgiLCJzZXQiLCJjIiwiX2NvbG9yIiwidiIsIl92YWx1ZSIsIl90aGlzJF92YWx1ZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsInNoYWRvd1Jvb3QiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJzb3VyY2VSb290IjoiIn0=