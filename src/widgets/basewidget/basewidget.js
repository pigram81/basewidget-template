import DataSourceService from './services/dataSource.service.js';

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
            this._dataSource = null;
        }

        onCustomWidgetBeforeUpdate(changes) {
            Object.assign(this, changes);
        }

        /**
         * Metodo chiamato dopo l'aggiornamento del widget.
         * Questo metodo viene invocato automaticamente quando le proprietà del widget
         * vengono modificate. Gestisce il rendering dell'interfaccia utente
         * in base alle nuove proprietà.
         */
        onCustomWidgetAfterUpdate() {
            this._render();
        }

        onCustomWidgetResize(w, h) { /* gestione resize */ }

        set color(c) {
            this._color = c;
            this._render();
        }

        set value(v) {
            this._value = v;
            this._render();
        }

        // Per compatibilità con SAC
        get cwDataSource() {
            return this._dataSource;
        }

        set cwDataSource(dataSource) {
            // Pulisci l'istanza precedente del DataSourceService se esiste
            if (this._dataSource && typeof this._dataSource.dispose === 'function') {
                this._dataSource.dispose();
            }

            // Crea la nuova istanza
            this._dataSource = new DataSourceService(dataSource);
        }

        _render() {
            this.style.background = this._color || '#2196f3';
            this.shadowRoot.querySelector('slot').textContent = this._value ?? '';

            // Se ci sono dati disponibili, è possibile utilizzarli per il rendering
            if (this._dataSource) {
                console.log('DataSource disponibile:', this._dataSource);
                // Qui puoi aggiungere la logica per visualizzare i dati
            }
        }
    }
    customElements.define('com-test-demo-basewidget', BaseWidget);
})();