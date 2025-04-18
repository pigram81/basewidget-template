(function () {
    const template = document.createElement('template');
    template.innerHTML = `<style>:host{display:flex;align-items:center;
      justify-content:center;border:1px solid #ccc;border-radius:8px;cursor:pointer}
    </style><slot></slot>`;

    class BaseWidget extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
            this.addEventListener('click', () => this.dispatchEvent(new Event('onClick')));
        }

        onCustomWidgetBeforeUpdate(changes) { Object.assign(this, changes); }
        onCustomWidgetAfterUpdate() { this._render(); }
        onCustomWidgetResize(w, h) { /* gestione resize */ }

        set color(c) { this._color = c; this._render(); }
        set value(v) { this._value = v; this._render(); }

        _render() {
            this.style.background = this._color || '#2196f3';
            this.shadowRoot.querySelector('slot').textContent = this._value ?? '';
        }
    }
    customElements.define('com-test-demo-basewidget', BaseWidget);
})();