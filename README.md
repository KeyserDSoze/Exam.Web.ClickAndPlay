## **Obiettivo del Compito**
L'obiettivo di questo compito è quello di:
- Farvi familiarizzare con i concetti base di **HTML** per la creazione di elementi interattivi.
- Utilizzare **CSS** per migliorare l'aspetto del vostro gioco e capire come posizionare gli elementi.
- Imparare a usare **JavaScript** per creare logica interattiva in una pagina web.

---

## **Testo del Compito**

### **Titolo: Clickone**
Il vostro compito è creare un **gioco interattivo** utilizzando HTML, CSS e JavaScript. L'obiettivo del gioco è far sì che il giocatore clicchi su un bottone che si sposta casualmente sullo schermo. Ogni volta che il bottone viene cliccato, il punteggio aumenta di 1, e il bottone si sposta in una nuova posizione casuale. Il gioco termina quando deciderete di aggiungere funzionalità extra, come un limite di tempo o un massimo punteggio.

### **Istruzioni:**
1. **Struttura HTML:**
   - Create un documento HTML con un titolo del gioco, un elemento per visualizzare il punteggio e un bottone da cliccare.
   - Assicuratevi di dare gli `id` corretti agli elementi HTML (es. `id="click-button"` per il bottone, `id="score"` per il punteggio).
   
2. **Stile CSS:**
   - Il gioco deve avere un aspetto chiaro e semplice:
     - Il bottone deve essere stilizzato con un colore di sfondo a scelta e testo bianco.
     - Posizionate il bottone al centro della finestra inizialmente, ma permettete al JavaScript di spostarlo.
   - Utilizzate la proprietà `position: absolute;` per permettere al bottone di muoversi liberamente all'interno della finestra.

3. **Logica JavaScript:**
   - Quando il bottone viene cliccato:
     - Incrementare il punteggio e aggiornare il testo nella pagina per riflettere il punteggio attuale.
     - Spostare il bottone in una **nuova posizione casuale** all'interno della finestra, ma assicuratevi che il bottone non esca dai bordi della finestra.
   
4. **Funzionalità Extra:**
   - Per ottenere punti bonus, potete aggiungere una delle seguenti funzionalità:
     - Un **timer** che limita il tempo del gioco.
     - Un **punteggio massimo** e una funzione di reset.
     - Un effetto visivo (come un'animazione CSS) che cambia l'aspetto del bottone quando il giocatore ci passa sopra con il mouse.

### **Valutazione:**
- Il progetto vale un massimo di **20 punti**, distribuiti come segue:
  - **5 punti** per una corretta struttura HTML.
  - **5 punti** per uno stile CSS semplice ma chiaro.
  - **7 punti** per una logica JavaScript corretta, che include l'incremento del punteggio e il movimento casuale del bottone.
  - Punti **bonus** per funzionalità extra.

### **Consegna:**
- Salvate il vostro progetto in una cartella chiamata `Clickone_NomeCognome`.
- La cartella dovrà contenere:
  - Un file **HTML** (`index.html`).
  - Un file **CSS** (`styles.css`).
  - Un file **JavaScript** (`script.js`).

---

## **Griglia di valutazione (20 punti)**

### **1. Struttura HTML (5 punti)**
- **(2 punti)**: Creare correttamente la struttura HTML con elementi di base:
  - Presenza del tag `<h1>` per il titolo del gioco.
  - Presenza di un paragrafo `<p>` per mostrare il punteggio.
  - Presenza del bottone `<button>` per cliccare.
- **(2 punti)**: Inserire correttamente gli **id** necessari (`id="click-button"`, `id="score"`) per selezionare gli elementi nel codice JavaScript.
- **(1 punto)**: Codice HTML ben indentato e organizzato.

### **2. Stile CSS (5 punti)**
- **(2 punti)**: Utilizzare correttamente il **CSS di base**:
  - Impostare una struttura centrale usando Flexbox o un altro metodo semplice.
  - Creare uno stile base per il bottone (dimensioni, colore e font leggibili).
- **(2 punti)**: Utilizzare il **posizionamento assoluto** per il bottone (`position: absolute;`), permettendo il suo spostamento nella finestra.
- **(1 punto)**: Utilizzare stili base per la pagina e il testo (titolo e punteggio ben visibili).

### **3. Logica JavaScript (7 punti)**
- **(2 punti)**: Selezionare correttamente gli **elementi HTML** con `document.getElementById()`:
  - Bottone cliccabile.
  - Spazio dove visualizzare il punteggio.
- **(2 punti)**: Implementare l'**evento click** per incrementare il punteggio e aggiornarlo visivamente.
- **(2 punti)**: Implementare la **funzione per spostare il bottone** in una posizione casuale ogni volta che viene cliccato.
- **(1 punto)**: Posizionare il bottone casualmente **senza farlo uscire** dai bordi della finestra.

### **4. Espansioni facoltative (per bonus fino a 3 punti)**
Gli studenti possono ottenere punti bonus per aggiungere funzionalità extra, come:
- **(1 punto)**: Aggiungere un **timer** che limita il tempo del gioco (ad esempio, il gioco finisce dopo 30 secondi).
- **(1 punto)**: Aggiungere **animazioni CSS** per rendere il bottone più interattivo (ad esempio, cambia colore quando il mouse è sopra di esso).
- **(1 punto)**: Implementare un **punteggio massimo** e una funzione di reset che azzera il gioco.

