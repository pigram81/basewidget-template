import DataSourceService from './services/dataSource.service.js';
import TableRenderer from './services/tableRenderer.service.js';
import templateHtml from './template.html';

(function () {
    const template = document.createElement('template');
    template.innerHTML = templateHtml;

    class BaseWidget extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
            this.addEventListener('click', () => this.dispatchEvent(new Event('onClick')));
            this._dataSource = null;
            this._tableRenderer = new TableRenderer(this.shadowRoot.querySelector('.table-container'));
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
            console.log('DataSource disponibile:', this._dataSource);

        }

        _render() {
            //this.style.background = this._color || '#fff';

            // Se ci sono dati disponibili, utilizza TableRenderer per visualizzarli
            if (this._dataSource) {
                const data = this._dataSource.getSimplifiedData();
                this._tableRenderer.render(data, 'Dati del Widget');
            } else {
                this._tableRenderer.render([], 'Nessun dato disponibile');
            }
        }
    }
    customElements.define('com-test-demo-basewidget', BaseWidget);
})();