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

/* ===== MODALE INFO ===== */
const infoBtn = document.getElementById("infoBtn");
const infoModal = document.getElementById("infoModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const startBtn = document.getElementById("startBtn");

/* ===== PROFILS ===== */
const profiles = [
  { id: 1, title: "Profil 1", description: "Description du profil 1.", image: "assets/images/profil1.png" },
  { id: 2, title: "Profil 2", description: "Description du profil 2.", image: "assets/images/profil2.png" },
  { id: 3, title: "Profil 3", description: "Description du profil 3.", image: "assets/images/profil3.png" },
  { id: 4, title: "Profil 4", description: "Description du profil 4.", image: "assets/images/profil4.png" },
  { id: 5, title: "Profil 5", description: "Description du profil 5.", image: "assets/images/profil5.png" },
  { id: 6, title: "Profil 6", description: "Description du profil 6.", image: "assets/images/profil6.png" },
  { id: 7, title: "Profil 7", description: "Description du profil 7.", image: "assets/images/profil7.png" },
  { id: 8, title: "Profil 8", description: "Description du profil 8.", image: "assets/images/profil8.png" }
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
  const [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15] = Q;

  const H1 = Math.tanh(
    0.5 * (   
      -0.0284033440487657 * (-Q1) +
       0.0575182383144733 * (-Q2) +
      -0.00157519742606926 * (-Q3) +
       0.0138667664000348 * (-Q4) +
      -0.565460962254872 * (-Q5) +
	  -0.061150243240308 * (-Q6) +
	   0.574231542487011 * (-Q7) +
	   0.063435336343962 * (-Q8) +
	  -0.0494177161216218 * (-Q9) +
	  -0.0592768995682595 * (-Q10) +
	   0.566509431515927 * (-Q11) +
	  -0.00323034236832162 * (-Q12) +
	  -0.571622875946035 * (-Q13) +
	   0.0113983893310803 * (-Q14) +
	   0.56760041932613 * (-Q15) +
       0.223939830811037
    )
  );

  const H2 = Math.tanh(
    0.5 * (   
      -0.031467494613329 * (-Q1) +
      -0.70034438900614 * (-Q2) +
      -0.0378193192733617 * (-Q3) +
      -0.0450183556560299 * (-Q4) +
       0.0448463726886531 * (-Q5) +
	   0.703887455092212 * (-Q6) +
	  -0.0421949458447535 * (-Q7) +
	  -0.70078243401495 * (-Q8) +
	   0.705388424231244 * (-Q9) +
	   0.696755920025115 * (-Q10) +
	  -0.042384459050852 * (-Q11) +
	   0.0345691140561323 * (-Q12) +
	   0.0524414208201561 * (-Q13) +
	  -0.0431630795999424 * (-Q14) +
	  -0.0490434838092111 * (-Q15) +
       0.0621246312561492
    )
  );

  const H3 = Math.tanh(
    0.5 * (   
       0.72447296369011 * (-Q1) +
       0.0446136907692223 * (-Q2) +
       0.720845687248307 * (-Q3) +
       0.73768787043525 * (-Q4) +
      -0.0257182383033407 * (-Q5) +
	  -0.0439086743354153 * (-Q6) +
	   0.0382402255850954 * (-Q7) +
	   0.0416711943549029 * (-Q8) +
	  -0.0345642328542842 * (-Q9) +
	  -0.0256402743505134 * (-Q10) +
	   0.00726512667914982 * (-Q11) +
	  -0.735970775369472 * (-Q12) +
	  -0.0239626549668692 * (-Q13) +
	   0.731379371064047 * (-Q14) +
	   0.0226696546387216 * (-Q15) +
      -0.172807763815436
    )
  );

  const THETA1 = 79.7976367769669*H1 + 37.2665559182982*H2 + 65.9074293311161*H3 + -17.0585913654759;
  const THETA2 = -46.1305681861904*H1 + 21.2374140891904*H2 + 109.933306704559*H3 + -27.5748179809489;
  const THETA3 = -42.1584407239599*H1 + -61.3561397049172*H2 + 70.9507468646893*H3 + -2.11814527480452;
  const THETA4 = 46.9757595756111*H1 + -49.9164189877425*H2 + 54.9143985166925*H3 + -4.40576448774929;
  const THETA5 = 84.3819766699168*H1 + 18.970279489693*H2 + -23.4534320864964*H3 + -30.4229894948047;
  const THETA6 = 64.1493690815539*H1 + -68.7173953976911*H2 + -20.6934540753093*H3 + -22.8385168621216;
  const THETA7 = -23.7404011187313*H1 + -78.0609844022399*H2 + -38.1010828949833*H3 + -26.0098283242412;

  const Y1 = Math.exp(THETA1);
  const Y2 = Math.exp(THETA2);
  const Y3 = Math.exp(THETA3);
  const Y4 = Math.exp(THETA4); 
  const Y5 = Math.exp(THETA5);
  const Y6 = Math.exp(THETA6);
  const Y7 = Math.exp(THETA7);
  
  const sum = 1 + Y1 + Y2 + Y3 + Y4 + Y5 + Y6 + Y7;
  const Y8 = 1 - (Y1 + Y2 + Y3 + Y4 + Y5 + Y6 + Y7)/ sum;
  
  return [
    Y1 / sum,
    Y2 / sum,
    Y3 / sum,
    Y4 / sum,
	Y5 / sum,
	Y6 / sum,
	Y7 / sum,
	Y8
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


/* ===== MODALE INFO ===== */
infoBtn.addEventListener("click", () => {
  infoModal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  infoModal.classList.add("hidden");
});

startBtn.addEventListener("click", () => {
  infoModal.classList.add("hidden");
  homeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
});

/* ===== NAVIGATION RESULTAT ===== */
const authorBtn = document.getElementById("authorBtn");
const profilesBtn = document.getElementById("profilesBtn");

const authorPage = document.getElementById("authorPage");
const profilesPage = document.getElementById("profilesPage");
const profileDetailPage = document.getElementById("profileDetailPage");

const backFromAuthor = document.getElementById("backFromAuthor");
const backFromProfiles = document.getElementById("backFromProfiles");
const backToProfiles = document.getElementById("backToProfiles");

const profilesGrid = document.getElementById("profilesGrid");

const detailTitle = document.getElementById("detailTitle");
const detailImage = document.getElementById("detailImage");
const detailText = document.getElementById("detailText");

authorBtn.onclick = () => {
  quizScreen.classList.add("hidden");
  authorPage.classList.remove("hidden");
};

profilesBtn.onclick = () => {
  quizScreen.classList.add("hidden");
  profilesPage.classList.remove("hidden");
  renderProfiles();
};

backFromAuthor.onclick = () => {
  authorPage.classList.add("hidden");
  quizScreen.classList.remove("hidden");
};

backFromProfiles.onclick = () => {
  profilesPage.classList.add("hidden");
  quizScreen.classList.remove("hidden");
};

backToProfiles.onclick = () => {
  profileDetailPage.classList.add("hidden");
  profilesPage.classList.remove("hidden");
};

/* ===== GRILLE PROFILS ===== */
function renderProfiles() {
  profilesGrid.innerHTML = "";
  profiles.forEach(p => {
    const div = document.createElement("div");
    div.className = "profile-item";
    div.innerHTML = `
      <img src="${p.image}">
      <div class="profile-overlay">${p.title}</div>
    `;
    div.onclick = () => showProfileDetail(p);
    profilesGrid.appendChild(div);
  });
}

function showProfileDetail(profile) {
  profilesPage.classList.add("hidden");
  profileDetailPage.classList.remove("hidden");

  detailTitle.textContent = profile.title;
  detailImage.src = profile.image;
  detailText.textContent = profile.description;
}

/* ===== INIT ===== */
showQuestion();

});
