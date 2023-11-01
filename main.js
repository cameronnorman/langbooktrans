const text =
  "Xavier war nicht nur ein begeisterter Student; er wurde von einer Kindheit voller Abenteuergeschichten und einer unerbittlichen Neugier auf das Unbekannte geprägt. Aufgewachsen in einer Familie von Gelehrten und Entdeckern wurde Xavier in einer Umgebung erzogen, in der Lernen und Erforschen gefördert wurden.Schon in jungen Jahren war Xavier von ungelösten Rätseln und Legenden fasziniert. Als Kind verbrachte er Stunden damit, Bücher zu studieren, begeistert von Geschichten über mythische Kreaturen und antike Zivilisationen. Diese frühe Faszination entfachte eine tief verwurzelte Leidenschaft für die Untersuchung und das Lösen von Rätseln, die sie bis in ihr Studium begleitete.";

document.addEventListener("DOMContentLoaded", (_) => {
  let html = text
    .split(".")
    .map(
      (sentence) =>
        `<span class="sentence" onclick="toggleTranslationInput('${sentence}')">${sentence}. </span>`
    )
    .join("");
  document.getElementById("text").innerHTML = html;
});

document.addEventListener("click", (event) => {
  let tagName = event.target.tagName;
  console.log(tagName);
  if (["BODY", "HTML", "DIV"].includes(tagName)) {
    document.getElementById("translationInput").style.visibility = "hidden";
  }
});

const toggleTranslationInput = (sentence) => {
  document.getElementById("selectedSentence").innerHTML = sentence;
  document.getElementById("translationInput").style.visibility = "visible";
};
