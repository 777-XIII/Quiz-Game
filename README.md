# Classes-project-Quiz-game

# Erklärung des Quiz-Spiels

Das Quiz-Spiel ist in zwei Hauptdateien unterteilt: `index.html` und `quiz.js`. Hier folgt eine kurze Erklärung jeder Datei.

## 1. HTML-Datei (`index.html`)

Diese Datei enthält die Struktur der Quiz-Webseite.

### Struktur von `index.html`

1. **Grundgerüst**: Die Datei startet mit `<html>`, `<head>`, und `<body>`-Tags. Hier werden grundlegende Einstellungen festgelegt.
2. **CSS und JavaScript**:
   - Das **Stylesheet** (`style.css`) wird eingebunden, um das Layout und das Dark Theme festzulegen.
   - Das **JavaScript** (`quiz.js`) wird am Ende des `<body>`-Tags eingefügt, um die Spiellogik zu ermöglichen.
3. **Quiz-Container**:
   - **`<div class="quiz-container">`**: Enthält alle Inhalte des Quiz.
   - **Frage und Antworten**: `<div id="frage-container">` zeigt die Frage, `<div id="antworten-container">` zeigt die Antwortmöglichkeiten.
   - **Button "Nächste Frage"**: Der Button `<button id="naechste-frage">` ermöglicht es, zur nächsten Frage zu springen.
   - **Ergebnis-Anzeige**: `<div id="ergebnis">` zeigt das Endergebnis nach Beendigung des Quiz an.

---

## 2. JavaScript-Datei (`quiz.js`)

`quiz.js` enthält die Logik des Quiz-Spiels, von der Darstellung der Fragen bis zur Überprüfung der Antworten.

### Hauptteile von `quiz.js`

1. **Klasse `Frage`**:
   - **Eigenschaften**: Jede Frage hat einen Text, **vier Antwortmöglichkeiten** und eine **richtige Antwort**.
   - **Methode `pruefen`**: Diese Methode prüft, ob die gewählte Antwort korrekt ist.

2. **Quiz-Fragen und Punkte**:
   - Ein **Array `fragen`** enthält alle Quiz-Fragen.
   - Jede Frage hat eine **Punktezahl**, die zur Gesamtpunktzahl des Spielers beiträgt.

3. **Funktionen zur Steuerung**:
   - **`zeigeFrage()`**: Zeigt die aktuelle Frage und die Antwortmöglichkeiten.
   - **`zeigeNächsteFrage()`**: Prüft die Antwort, zählt Punkte und springt zur nächsten Frage.
   - **`quizBeenden()`**: Zeigt das Endergebnis an, wenn das Quiz fertig ist.

4. **Timer**:
   - **`startTimer()`**: Startet einen **30-Sekunden-Timer** für das gesamte Quiz. Bei Ablauf wird das Quiz automatisch beendet.

---

### Zusätzliche Hinweise

- **Quiz starten**: Die `DOMContentLoaded`-Funktion stellt sicher, dass das Quiz beim Laden der Seite gestartet wird.
- **Ende des Spiels**: Nach Ablauf des Timers oder Beantwortung aller Fragen wird das Quiz beendet und die **Gesamtpunktzahl** angezeigt.

--- 

> **Hinweis**: Der Code wurde so gestaltet, dass er leicht anpassbar ist – es können einfach neue Fragen hinzugefügt oder die Punktevergabe angepasst werden.
