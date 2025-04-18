(function () {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host{display:block;padding:8px 12px;font-family:sans-serif}
      label{display:block;margin:8px 0 4px;font-size:12px;color:#555}
      input[type="color"],input[type="number"]{width:100%;padding:4px;border:1px solid #ccc;border-radius:4px}
    </style>
    <label>Background color</label>
    <input id="color" type="color">
    <label>Value</label>
    <input id="value" type="number" step="1">
  `;

  class BaseWidgetStyling extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }

    onCustomWidgetBeforeUpdate(props) {
      if (props.color !== undefined) {
        this.shadowRoot.getElementById('color').value = props.color;
      }
      if (props.value !== undefined) {
        this.shadowRoot.getElementById('value').value = props.value;
      }
    }

    connectedCallback() {

      this.shadowRoot.getElementById('color').addEventListener('change', e => {
        this.dispatchEvent(new CustomEvent('propertiesChanged', {
          detail: {
            properties: {
              color: e.target.value
            }
          }
        }));
      });

      this.shadowRoot.getElementById('value').addEventListener('change', e => {
        this.dispatchEvent(new CustomEvent('propertiesChanged', {
          detail: {
            properties: {
              value: Number(e.target.value)
            }
          }
        }));
      });
    }

    set color(newColor) {
      this.shadowRoot.getElementById('color').value = newColor;
    }

    get color() {
      return this.shadowRoot.getElementById('color').value;
    }

    set value(newValue) {
      this.shadowRoot.getElementById('value').value = newValue;
    }

    get value() {
      return Number(this.shadowRoot.getElementById('value').value);
    }
  }
  customElements.define('com-test-demo-basewidget-styling', BaseWidgetStyling);
})();