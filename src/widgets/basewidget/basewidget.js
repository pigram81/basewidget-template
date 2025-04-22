import DataSourceService from './services/dataSource.service.js';
import TableRenderer from './services/tableRenderer.service.js';

(function () {
    const template = document.createElement('template');
    template.innerHTML = `<style>
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .header {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 12px;
            color: #333;
        }
        
        .table-container {
            width: 100%;
            overflow-x: auto;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }
        
        th {
            background-color: #f0f0f0;
            color: #333;
            font-weight: 600;
            text-align: left;
            padding: 10px 12px;
            border-bottom: 2px solid #ddd;
            position: sticky;
            top: 0;
        }
        
        td {
            padding: 8px 12px;
            border-bottom: 1px solid #eee;
        }
        
        tr:hover {
            background-color: #f9f9f9;
        }
        
        tr:last-child td {
            border-bottom: none;
        }
        
        .empty-message {
            text-align: center;
            padding: 20px;
            color: #777;
            font-style: italic;
        }
    </style>
    <div class="header"></div>
    <div class="table-container"></div>`;

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