class Frage {
  constructor(text, antworten, richtigeAntwortIndex, punkte = 1) {
    this.text = text;
    this.antworten = antworten;
    this.richtigeAntwortIndex = richtigeAntwortIndex;
    this.punkte = punkte;
  }

  pruefen(antwortIndex) {
    return antwortIndex === this.richtigeAntwortIndex;
  }
}

const fragen = [
  new Frage(
    "Was ist die Hauptstadt von Frankreich?",
    ["Berlin", "Paris", "Madrid", "Rom"],
    1,
    2
  ),
  new Frage(
    "Wie viele Kontinente gibt es auf der Erde?",
    ["5", "6", "7", "8"],
    2,
    3
  ),
  new Frage(
    "Was ist die größte Wüste der Erde?",
    ["Sahara", "Antarktis", "Gobi", "Kalahari"],
    1,
    5
  ),
  new Frage(
    "Wie viele Länder gibt es in der Welt?",
    ["180", "195", "205", "210"],
    1,
    2
  ),
  new Frage(
    "Wie viele Menschen leben derzeit auf der Erde?",
    ["6,5 Milliarden", "7,8 Milliarden", "8,5 Milliarden", "9 Milliarden"],
    1,
    3
  ),
  new Frage(
    "In welcher Ära leben wir zurzeit?",
    ["Mesozoikum", "Känozoikum", "Paläozoikum", "Archaikum"],
    1,
    4
  ),
  new Frage(
    "Wie viele Sprachen gibt es in der Welt?",
    ["Ca. 2500", "Ca. 7100", "Ca. 5000", "Ca. 8200"],
    1,
    3
  ),
  new Frage(
    "Wie viele Menschen leben in extremer Armut?",
    ["1,2 Milliarden", "700 Millionen", "500 Millionen", "1 Milliarde"],
    1,
    4
  ),
];

let punkte = 0;
let richtigBeantwortet = 0;
let aktuelleFrageIndex = 0;
let quizTimeout;

function zeigeFrage() {
  const frageContainer = document.getElementById("frage-container");
  const antwortenContainer = document.getElementById("antworten-container");

  const frage = fragen[aktuelleFrageIndex];
  frageContainer.innerHTML = `<h2>${frage.text}</h2>`;

  antwortenContainer.innerHTML = "";
  frage.antworten.forEach((antwort, index) => {
    const antwortElement = document.createElement("div");
    antwortElement.innerHTML = `
            <input type="radio" name="antwort" value="${index}" id="antwort-${index}">
            <label for="antwort-${index}">${antwort}</label>
        `;
    antwortenContainer.appendChild(antwortElement);
  });
}

function zeigeNächsteFrage() {
  const ausgewaehlteAntwort = document.querySelector(
    'input[name="antwort"]:checked'
  );

  if (!ausgewaehlteAntwort) {
    alert("Bitte wähle eine Antwort!");
    return;
  }

  const antwortIndex = parseInt(ausgewaehlteAntwort.value);
  const frage = fragen[aktuelleFrageIndex];

  if (frage.pruefen(antwortIndex)) {
    punkte += frage.punkte;
    richtigBeantwortet++;
  }

  aktuelleFrageIndex++;
  if (aktuelleFrageIndex < fragen.length) {
    zeigeFrage();
  } else {
    quizBeenden();
  }
}

function quizBeenden() {
  clearTimeout(quizTimeout); // Timer stoppen
  document.getElementById("quiz").style.display = "none";
  document.getElementById("naechste-frage").style.display = "none";

  const ergebnisContainer = document.getElementById("ergebnis");
  ergebnisContainer.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Richtige Antworten: ${richtigBeantwortet} von ${fragen.length}</p>
        <p>Gesamtpunktzahl: ${punkte}</p>
    `;
}

// Timer für das Quiz (30 Sekunden)
function startTimer() {
  quizTimeout = setTimeout(() => {
    alert("Zeit ist abgelaufen!");
    quizBeenden();
  }, 30000);
}

// Quiz starten
document.addEventListener("DOMContentLoaded", () => {
  zeigeFrage();
  startTimer();
});
