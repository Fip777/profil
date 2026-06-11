/* =============
   COPYRIGHT
================
Copyright (C) 2026, Audrey Bourgeois. Tous droits réservés. 
Les informations contenues ici, code et concepts intellectuels, sont la propriété de Audrey Bourgeois 
et sont protégés par le droit d'auteur. 
Toute diffusion ou reproduction même partielle, quel qu’en soit le support, est interdite.*/

document.addEventListener("DOMContentLoaded", () => {

let currentQuestion = 0;
let answers = [];

/* ===== DOM ===== */
const quizScreen = document.getElementById("quizScreen");
const homeScreen = document.getElementById("homeScreen");

const questionText = document.getElementById("questionText");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const progressBar = document.getElementById("progressBar");

const resultContainer = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const resultImage = document.getElementById("resultImage");
const restartBtn = document.getElementById("restartBtn");
const startBtn = document.getElementById("startBtn");


/* ===== MODALE INFO ===== */

// Démarrer le quiz directement
startBtn.addEventListener("click", () => {
  homeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
});


/* ===== PROFILS ===== */
const profiles = [
  { id: 1, title: "PROFIL 1", description: "Description du profil.", images: "assets/images/profil1.jpg" },
  { id: 2, title: "PROFIL 2", description: "Description du profil.", images: "assets/images/profil2.jpg" },
  { id: 3, title: "PROFIL 3", description: "Description du profil.", images: "assets/images/profil3.jpg" },
  { id: 4, title: "PROFIL 4", description: "Description du profil.", images: "assets/images/profil4.jpg" },
  { id: 5, title: "PROFIL 5", description: "Description du profil.", images: "assets/images/profil5.jpg" },
  { id: 6, title: "PROFIL 6", description: "Description du profil.", images: "assets/images/profil6.jpg" },
  { id: 7, title: "PROFIL 7", description: "Description du profil.", images: "assets/images/profil7.jpg" }
];

/* ===== QUESTION ===== */
function showQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent = q.text;
  answerA.textContent = q.answers[0].label;
  answerB.textContent = q.answers[1].label;

  progressBar.style.width = (currentQuestion / questions.length) * 100 + "%";
}

/* ===== RÉPONSES ===== */
answerA.addEventListener("click", () => handleAnswer(-1));
answerB.addEventListener("click", () => handleAnswer(1));

function handleAnswer(value) {
  answers.push(value);
  currentQuestion++;
  showQuestion();
}

/* ===== ALGORITHME RÉSEAU DE NEURONES ===== */
function computeProfile(Q) {
  const [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18] = Q;

    const H1 = Math.tanh(
    0.5 * (   
     	-0.75460962254872 * (-Q1) +
		-0.704231542487011 * (-Q3) +
		-0.606509431515927 * (-Q7) +
		0.71622875946035 * (-Q10) +
		0.80760041932613 * (-Q13) +
		0.50230041932613 * (-Q18) +
       	0.223939830811037
    )
  );

  const H2 = Math.tanh(
    0.5 * (   
      	0.70034438900614 * (-Q4) +
   		-0.703887455092212 * (-Q5) +
 		-0.70078243401495 * (-Q9) +
	   	0.705388424231244 * (-Q12) +
	   	-0.706755920025115 * (-Q14) +
		0.704775021023201 * (-Q17) +
      	0.0621246312561492
    )
  );

  const H3 = Math.tanh(
    0.5 * (   
       	-0.72447296369011 * (-Q2) +
      	0.720845687248307 * (-Q6) +
       	0.73768787043525 * (-Q8) +
  		-0.735970775369472 * (-Q11) +
	   	-0.731379371064047 * (-Q15) +
		0.721950351044040 * (-Q16) +
      	-0.172807763815436
    )
  );


  const THETA1 = 82.7976367769669*H1 + 37.2665559182982*H2 + 65.9074293311161*H3 + -17.0585913654759;
  const THETA2 = -46.1305681861904*H1 + 21.2374140891904*H2 + 112.933306704559*H3 + -27.5748179809489;
  const THETA3 = -42.1584407239599*H1 + -61.3561397049172*H2 + 70.9507468646893*H3 + -2.11814527480452;
  const THETA4 = 47.9757595756111*H1 + -49.9164189877425*H2 + 34.9143985166925*H3 + -4.40576448774929;
  const THETA5 = 84.3819766699168*H1 + 18.970279489693*H2 + -23.4534320864964*H3 + -30.4229894948047;
  const THETA6 = 64.1493690815539*H1 + -74.7173953976911*H2 + -20.6934540753093*H3 + -22.8385168621216;
  const THETA7 = -30.7404011187313*H1 + -78.0609844022399*H2 + -38.1010828949833*H3 + -26.0098283242412;

  const Y1 = Math.exp(THETA1);
  const Y2 = Math.exp(THETA2);
  const Y3 = Math.exp(THETA3)+ Math.exp(THETA4);
  const Y4 = Math.exp(THETA5);
  const Y5 = Math.exp(THETA6);
  const Y6 = Math.exp(THETA7);
  
  const sum = 1 + Y1 + Y2 + Y3 + Y4 + Y5 + Y6;
  const Y7 = 1 - (Y1 + Y2 + Y3 + Y4 + Y5 + Y6)/ sum;
  
  return [
    Y1 / sum,
    Y2 / sum,
    Y3 / sum,
   	Y4 / sum,
	Y5 / sum,
	Y6 / sum,
	Y7
  ];
}

/* ===== RÉSULTAT ===== */
function showResult() {
  // Masquer question et réponses
  document.querySelector(".question").classList.add("hidden");
  document.querySelector(".answers").classList.add("hidden");
  // Masquer la barre de progression
  document.querySelector(".progress").classList.add("hidden");

  const probabilities = computeProfile(answers);
  const maxIndex = probabilities.indexOf(Math.max(...probabilities));
  const selectedProfile = profiles[maxIndex];

  resultTitle.textContent = selectedProfile.title;
  resultText.textContent = selectedProfile.description;
  resultImage.src = selectedProfile.image;

  resultContainer.classList.remove("hidden");
}

/* ===== RESTART ===== */
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  answers = [];
  resultContainer.classList.add("hidden");
  document.querySelector(".question").classList.remove("hidden");
  document.querySelector(".answers").classList.remove("hidden");
  document.querySelector(".progress").classList.remove("hidden");
  progressBar.style.width = "0%";
  showQuestion();
});


/* ===== INIT ===== */
showQuestion();

});
