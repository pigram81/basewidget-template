# SAP Analytics Cloud Custom Widget - Colored Box

Questo progetto contiene un custom widget dimostrativo per SAP Analytics Cloud chiamato "Colored Box".

## Struttura del Progetto

```
.
├── widgets/                    # Directory principale widget
│   ├── coloredbox.json         # Configurazione widget
│   ├── coloredbox.js           # Componente principale 
│   ├── coloredbox_styling.js   # Componente styling panel
│   ├── coloredbox_builder.js   # Componente builder panel
│   └── test.html               # Pagina di test locale
├── src/                        # Codice sorgente
│   └── index.js                # Punto di ingresso webpack
├── dist/                       # Output dei pacchetti generati
├── webpack.config.js           # Configurazione webpack
├── package.json                # Configurazione del progetto
└── README.md                   # Questo file
```

## Caratteristiche del Widget

- Visualizzazione di un box colorato con bordi arrotondati
- Controllo del colore di sfondo 
- Controllo dell'opacità
- Supporto per dispositivi mobili
- Handler per eventi click

## Requisiti

- Node.js 14+
- npm o yarn

## Installazione

```bash
# Clona il repository
git clone <repository-url>
cd <repository-directory>

# Installa le dipendenze
npm install
```

## Utilizzo

### Sviluppo locale

Per avviare un server di sviluppo locale con hot-reload:

```bash
npm start
```

Questo avvierà webpack-dev-server sulla porta 8080 che servirà i file nella cartella `widgets` e aprirà automaticamente il browser.

### Creazione pacchetto per SAP Analytics Cloud

Per creare un pacchetto ZIP pronto per essere caricato in SAP Analytics Cloud:

```bash
npm run build
```

Il pacchetto ZIP verrà generato nella cartella `dist` con il nome formattato come `<widget-id>-<version>.zip`.

### Caricamento in SAP Analytics Cloud

1. Accedi al tuo tenant SAP Analytics Cloud
2. Vai a **Main Menu → Browse → Custom Widgets**
3. Clicca sull'icona "+" per aggiungere un nuovo widget
4. Seleziona il file ZIP generato
5. Il widget sarà ora disponibile nell'elenco dei widget personalizzati

## Test Local

Durante lo sviluppo, utilizzando `npm start`, verrai reindirizzato automaticamente alla pagina di test del widget. Questa pagina include:

- Il widget principale
- Il pannello styling per cambiare il colore
- Il pannello builder per cambiare l'opacità
- Un interruttore per simulare la modalità mobile
- Controlli per simulare il ciclo di vita del widget

## Configurazione Webpack

Il progetto utilizza webpack per:
- Servire i file durante lo sviluppo con hot-reload
- Copiare i file necessari nella cartella dist
- Generare il pacchetto ZIP per il deployment

La configurazione è definita in `webpack.config.js` e utilizza i dati in `package.json` nella sezione `sac.widgets` per determinare quali file includere nel pacchetto.

## Documentazione

Per ulteriori informazioni sullo sviluppo di custom widget per SAP Analytics Cloud, consulta:

- [SAP Analytics Cloud Custom Widget Developer Guide](https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/00f68c2e08b941f081002fd3691d86a7/44896a7f17a849cb8235fd30c3d0a39a.html)

## Licenza

ISC 