/**
 * Classe per gestire la creazione e l'aggiornamento della tabella
 */
class TableRenderer {
    /**
     * Costruttore della classe TableRenderer
     * @param {HTMLElement} container - L'elemento contenitore della tabella
     */
    constructor(container) {
        this.container = container;
    }

    /**
     * Crea e renderizza la tabella con i dati forniti
     * @param {Array} data - Dati da visualizzare nella tabella
     * @param {String} title - Titolo da mostrare sopra la tabella
     */
    render(data, title) {
        // Imposta il titolo se fornito
        const headerElement = this.container.parentNode.querySelector('.header');
        headerElement.textContent = title || '';

        // Pulisci il contenitore
        this.container.innerHTML = '';

        // Se non ci sono dati, mostra un messaggio
        if (!data || data.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'empty-message';
            emptyMessage.textContent = 'Nessun dato disponibile';
            this.container.appendChild(emptyMessage);
            return;
        }

        // Crea la tabella
        const table = document.createElement('table');

        // Crea intestazione della tabella
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        // Ottieni le chiavi per le intestazioni dalle proprietà del primo oggetto
        const firstItem = data[0];
        const headers = Object.keys(firstItem);

        // Aggiungi celle d'intestazione
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Crea corpo della tabella
        const tbody = document.createElement('tbody');

        // Aggiungi righe per ogni elemento nei dati
        data.forEach(item => {
            const row = document.createElement('tr');

            // Aggiungi celle per ogni proprietà
            headers.forEach(header => {
                const td = document.createElement('td');

                // Se il valore è un oggetto con proprietà "value" o "formatted", usa quello
                const value = item[header];
                if (value && typeof value === 'object') {
                    if (value.value && typeof value.value === 'object' && value.value.formatted) {
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
}

export default TableRenderer; 