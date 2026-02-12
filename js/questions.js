const questions = [
  {
    text: "Question 1 ?",
    answers: [
      { label: "Réponse 1-1", value: "A" },
      { label: "Réponse 1-2", value: "B" }
    ]
  },
  {
    text: "Question 2 ?",
    answers: [
      { label: "Réponse 2-1", value: "A" },
      { label: "Réponse 2-2", value: "B" }
    ]
  },
  {
    text: "Question 3 ?",
    answers: [
      { label: "Réponse 3-1", value: "A" },
      { label: "Réponse 3-2", value: "B" }
    ]
  },
   {
    text: "Question 4 ?",
    answers: [
      { label: "Réponse 4-1", value: "A" },
      { label: "Réponse 4-2", value: "B" }
    ]
  },
   {
    text: "Question 5 ?",
    answers: [
      { label: "Réponse 5-1", value: "A" },
      { label: "Réponse 5-2", value: "B" }
    ]
  },
   {
    text: "Question 6 ?",
    answers: [
      { label: "Réponse 6-1", value: "A" },
      { label: "Réponse 6-2", value: "B" }
    ]
  },
   {
    text: "Question 7 ?",
    answers: [
      { label: "Réponse 7-1", value: "A" },
      { label: "Réponse 7-2", value: "B" }
    ]
  },
   {
    text: "Question 8 ?",
    answers: [
      { label: "Réponse 8-1", value: "A" },
      { label: "Réponse 8-2", value: "B" }
    ]
  },
   {
    text: "Question 9 ?",
    answers: [
      { label: "Réponse 9-1", value: "A" },
      { label: "Réponse 9-2", value: "B" }
    ]
  },
   {
    text: "Question 10 ?",
    answers: [
      { label: "Réponse 10-1", value: "A" },
      { label: "Réponse 10-2", value: "B" }
    ]
  },
   {
    text: "Question 11 ?",
    answers: [
      { label: "Réponse 11-1", value: "A" },
      { label: "Réponse 11-2", value: "B" }
    ]
  },
   {
    text: "Question 12 ?",
    answers: [
      { label: "Réponse 12-1", value: "A" },
      { label: "Réponse 12-2", value: "B" }
    ]
  },
   {
    text: "Question 13 ?",
    answers: [
      { label: "Réponse 13-1", value: "A" },
      { label: "Réponse 13-2", value: "B" }
    ]
  },
   {
    text: "Question 14 ?",
    answers: [
      { label: "Réponse 14-1", value: "A" },
      { label: "Réponse 14-2", value: "B" }
    ]
  },
   {
    text: "Question 15 ?",
    answers: [
      { label: "Réponse 15-1", value: "A" },
      { label: "Réponse 15-2", value: "B" }
    ]
  }
]
/* ================================
   GESTION PAGE D’ACCUEIL & MODALE
================================ */

// Éléments page d'accueil
const homeScreen = document.getElementById("homeScreen");
const startBtn = document.getElementById("startBtn");
const infoBtn = document.getElementById("infoBtn");

// Modale
const infoModal = document.getElementById("infoModal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Écran quiz
const quizScreen = document.getElementById("quizScreen");

/* ===== OUVRIR LA MODALE ===== */
infoBtn.addEventListener("click", () => {
  infoModal.classList.remove("hidden");
});

/* ===== FERMER LA MODALE ===== */
closeModalBtn.addEventListener("click", () => {
  infoModal.classList.add("hidden");
});

/* ===== DÉMARRER LE TEST ===== */
startBtn.addEventListener("click", () => {
  homeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  // Réinitialisation sécurité
  currentQuestion = 0;
  answers = [];
  progressBar.style.width = "0%";
  resultContainer.classList.add("hidden");

  showQuestion();
});
