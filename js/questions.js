/* =============
   COPYRIGHT
================
Copyright (C) 2026, Audrey Bourgeois. Tous droits réservés. 
Les informations contenues ici, code et concepts intellectuels, sont la propriété de Audrey Bourgeois 
et sont protégés par le droit d'auteur. 
Toute diffusion ou reproduction même partielle, quel qu’en soit le support, est interdite.*/

const questions = [
   {
    text: "Question 1:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
  {
    text: "Question 2:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
  {
    text: "Question 3:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 4:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 5:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 6:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 7:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 8:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 9:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 10:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },   
   {
    text: "Question 11:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 12:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 13:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 14:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 15:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 16:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
   {
    text: "Question 17:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
  {
    text: "Question 18:",
    answers: [
      { label: "Réponse A", value: "A" },
      { label: "Réponse B", value: "B" }
    ]
  },
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
