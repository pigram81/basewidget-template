import datasource from '../datasource.model.js';

class DataSourceService {
    constructor(dataSource = datasource) {
        this.dataSource = dataSource;
    }

    /**
     * Ottiene l'intero datasource
     * @returns {Object} Il datasource completo
     */
    getDataSource() {
        return this.dataSource;
    }

    /**
     * Ottiene tutti i dati dal datasource
     * @returns {Array} I dati presenti nel datasource
     */
    getData() {
        return this.dataSource.data || [];
    }

    /**
     * Ottiene i metadati dal datasource
     * @returns {Object} I metadati del datasource
     */
    getMetadata() {
        return this.dataSource.metadata || {};
    }

    /**
     * Ottiene le chiavi delle dimensioni
     * @returns {Array} Array di chiavi delle dimensioni (es. ['dimensions_0', 'dimensions_1'])
     */
    getDimensionKeys() {
        const metadata = this.getMetadata();
        return metadata.feeds?.dimensions?.values || [];
    }

    /**
     * Ottiene le chiavi delle misure
     * @returns {Array} Array di chiavi delle misure (es. ['measures_0', 'measures_1'])
     */
    getMeasureKeys() {
        const metadata = this.getMetadata();
        return metadata.feeds?.measures?.values || [];
    }

    /**
     * Ottiene la lista delle dimensioni con id, label e chiave
     * @returns {Array} Lista delle dimensioni con informazioni
     */
    getDimensions() {
        const dimensionKeys = this.getDimensionKeys();
        const dimensionsInfo = this.getMetadata().dimensions || {};

        return dimensionKeys.map(key => {
            const info = dimensionsInfo[key] || {};
            return {
                key,
                id: info.id || '',
                label: info.description || ''
            };
        });
    }

    /**
     * Ottiene la lista delle misure con id, label e chiave
     * @returns {Array} Lista delle misure con informazioni
     */
    getMeasures() {
        const measureKeys = this.getMeasureKeys();
        const measuresInfo = this.getMetadata().mainStructureMembers || {};

        return measureKeys.map(key => {
            const info = measuresInfo[key] || {};
            return {
                key,
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
    getUniqueDimensionValues(dimensionKey) {
        const data = this.getData();
        const uniqueValues = new Set();

        data.forEach(item => {
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
    filterByDimension(dimensionKey, value) {
        const data = this.getData();
        return data.filter(item =>
            item[dimensionKey] && item[dimensionKey].id === value
        );
    }
}

export default DataSourceService;
