# SAP Analytics Cloud Custom Widget - Base Widget

Questo progetto contiene un custom widget dimostrativo per SAP Analytics Cloud chiamato "Base Widget".

## Struttura del Progetto

```
.
├── src/                        # Codice sorgente
│   └── widgets/                # Directory widget
│       └── basewidget/         # Widget base
│           ├── basewidget.json      # Configurazione widget
│           ├── basewidget.js        # Componente principale 
│           └── basewidget_styling.js # Componente styling panel
├── node_modules/               # Dipendenze
├── package.json                # Configurazione del progetto
├── package-lock.json           # Lock file delle dipendenze
└── README.md                   # Questo file
```

## Caratteristiche del Widget

- Widget base di esempio per SAP Analytics Cloud
- Pannello styling configurabile
- Struttura predisposta per l'estensione

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

Per avviare un server di sviluppo locale:

```bash
npm start
```

Questo avvierà un server HTTP sulla porta 8080 che servirà i file nella cartella del progetto.

### Test Local

Durante lo sviluppo, usando `npm start`, puoi accedere alla pagina di test del widget. Questa tipicamente include:

- Il widget principale
- Il pannello styling per personalizzare l'aspetto
- Controlli per simulare il ciclo di vita del widget

## Lint del codice

Per verificare la qualità del codice:

```bash
npm run lint
```

## Documentazione

Per ulteriori informazioni sullo sviluppo di custom widget per SAP Analytics Cloud, consulta:

- [SAP Analytics Cloud Custom Widget Developer Guide](https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/00f68c2e08b941f081002fd3691d86a7/44896a7f17a849cb8235fd30c3d0a39a.html)
- Il file CustomWidgetDevGuide_en.txt incluso nel progetto

## Licenza

ISC 