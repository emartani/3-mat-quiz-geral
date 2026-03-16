// =========================
// BANCO DE PERGUNTAS NOVO
// =========================
const questions = [
  // ---------- Fáceis (conceitos básicos e ordinais até 10) ----------
  {
    question: "O número 0 é natural?",
    answers: [
      { text: "Sim", correct: true },
      { text: "Não", correct: false },
      { text: "Só aos sábados", correct: false },
      { text: "Depende da lua", correct: false }
    ],
    calculation: "No currículo escolar, consideramos naturais: {0, 1, 2, 3, ...}.",
    level: "easy"
  },
  {
    question: "O número 0 é par ou ímpar?",
    answers: [
      { text: "Par", correct: true },
      { text: "Ímpar", correct: false },
      { text: "Nenhum dos dois", correct: false },
      { text: "Os dois", correct: false }
    ],
    calculation: "Zero é par, pois é múltiplo de 2 (0 = 2 × 0) e a divisão por 2 tem resto 0.",
    level: "easy"
  },
  {
    question: "O número 7 é par ou ímpar?",
    answers: [
      { text: "Ímpar", correct: true },
      { text: "Par", correct: false },
      { text: "Quadrado", correct: false },
      { text: "Redondo", correct: false }
    ],
    calculation: "Ímpar: ao dividir por 2, o resto não é 0.",
    level: "easy"
  },
  {
    question: "O número 18 é par ou ímpar?",
    answers: [
      { text: "Par", correct: true },
      { text: "Ímpar", correct: false },
      { text: "Azul", correct: false },
      { text: "Emocionado", correct: false }
    ],
    calculation: "Par: 18 ÷ 2 = 9 (resto 0).",
    level: "easy"
  },
  {
    question: "Qual é o número natural que vem antes de 1?",
    answers: [
      { text: "0", correct: true },
      { text: "2", correct: false },
      { text: "-1", correct: false },
      { text: "10", correct: false }
    ],
    calculation: "Antecessor natural de 1 é 0).",
    level: "easy"
  },
  {
    question: "Qual é o sucessor natural de 5?",
    answers: [
      { text: "6", correct: true },
      { text: "4", correct: false },
      { text: "10", correct: false },
      { text: "0", correct: false }
    ],
    calculation: "Sucessor: próximo número natural. Depois de 5 vem 6.",
    level: "easy"
  },
  {
    question: "Como se diz 1º no feminino?",
    answers: [
      { text: "Primeira", correct: true },
      { text: "Primeiro", correct: false },
      { text: "Primeirona", correct: false },
      { text: "Primeirada", correct: false }
    ],
    calculation: "1º (masc.) = Primeiro; 1ª (fem.) = Primeira.",
    level: "easy"
  },
  {
    question: "Como se diz 2º no masculino?",
    answers: [
      { text: "Segundo", correct: true },
      { text: "Segunda", correct: false },
      { text: "Segundona", correct: false },
      { text: "Doisenta", correct: false }
    ],
    calculation: "2º (masc.) = Segundo; 2ª (fem.) = Segunda.",
    level: "easy"
  },
  {
    question: "Como se diz 3º no feminino?",
    answers: [
      { text: "Terceira", correct: true },
      { text: "Terceiro", correct: false },
      { text: "Trêszera", correct: false },
      { text: "Trezeira", correct: false }
    ],
    calculation: "3º (masc.) = Terceiro; 3ª (fem.) = Terceira.",
    level: "easy"
  },
  {
    question: "Como se diz 4º no masculino?",
    answers: [
      { text: "Quarto", correct: true },
      { text: "Quarta", correct: false },
      { text: "Quatrão", correct: false },
      { text: "QuarTempo", correct: false }
    ],
    calculation: "4º (masc.) = Quarto; 4ª (fem.) = Quarta.",
    level: "easy"
  },
  {
    question: "Como se diz 5º no feminino?",
    answers: [
      { text: "Quinta", correct: true },
      { text: "Quinto", correct: false },
      { text: "Cinqueira", correct: false },
      { text: "Quintuda", correct: false }
    ],
    calculation: "5º (masc.) = Quinto; 5ª (fem.) = Quinta.",
    level: "easy"
  },
  {
    question: "Depois de “nono” (9º), vem…",
    answers: [
      { text: "Décimo (10º)", correct: true },
      { text: "Onzeiro (11º)", correct: false },
      { text: "Dezão (10º)", correct: false },
      { text: "Décima (10º fem.)", correct: false }
    ],
    calculation: "Sequência ordinal: oitavo → nono → décimo.",
    level: "easy"
  },

  // ---------- Difíceis (ordinais compostos e raciocínio) ----------
  {
    question: "Qual é o ordinal masculino de 10?",
    answers: [
      { text: "Décimo", correct: true },
      { text: "Décima", correct: false },
      { text: "Dezimão", correct: false },
      { text: "Dezito", correct: false }
    ],
    calculation: "10º (masc.) = Décimo; 10ª (fem.) = Décima.",
    level: "hard"
  },
  {
    question: "Qual é o ordinal feminino de 10?",
    answers: [
      { text: "Décima", correct: true },
      { text: "Décimo", correct: false },
      { text: "Dezimuda", correct: false },
      { text: "Dezimal", correct: false }
    ],
    calculation: "10ª (fem.) = Décima; 10º (masc.) = Décimo.",
    level: "hard"
  },
  {
    question: "Qual é o ordinal masculino de 21?",
    answers: [
      { text: "Vigésimo primeiro", correct: true },
      { text: "Vigésima primeira", correct: false },
      { text: "Vigésimo um", correct: false },
      { text: "Vinte‑umzão", correct: false }
    ],
    calculation: "21º (masc.) = vigésimo + primeiro → Vigésimo primeiro.",
    level: "hard"
  },
  {
    question: "Qual é o ordinal feminino de 23?",
    answers: [
      { text: "Vigésima terceira", correct: true },
      { text: "Vigésimo terceiro", correct: false },
      { text: "Vinte‑trêsinha", correct: false },
      { text: "Vigesimal terceira", correct: false }
    ],
    calculation: "23ª (fem.) = vigésima + terceira → Vigésima terceira.",
    level: "hard"
  },
  {
    question: "Qual é o ordinal masculino de 30?",
    answers: [
      { text: "Trigésimo", correct: true },
      { text: "Trigésima", correct: false },
      { text: "Trintaço", correct: false },
      { text: "Trigesimal", correct: false }
    ],
    calculation: "30º (masc.) = Trigésimo; 30ª (fem.) = Trigésima.",
    level: "hard"
  },
  {
    question: "Qual é o ordinal feminino de 30?",
    answers: [
      { text: "Trigésima", correct: true },
      { text: "Trigésimo", correct: false },
      { text: "Trintuda", correct: false },
      { text: "Trigésimar", correct: false }
    ],
    calculation: "30ª (fem.) = Trigésima; 30º (masc.) = Trigésimo.",
    level: "hard"
  },
  {
    question: "Qual opção contém apenas números ímpares?",
    answers: [
      { text: "3, 7 e 11", correct: true },
      { text: "2, 4 e 6", correct: false },
      { text: "8, 9 e 10", correct: false },
      { text: "0, 1 e 2", correct: false }
    ],
    calculation: "Ímpares: 1, 3, 5, 7, 9, 11, ... Apenas “3, 7 e 11” são todos ímpares.",
    level: "hard"
  },
  {
    question: "Qual opção contém apenas números pares?",
    answers: [
      { text: "2, 8 e 10", correct: true },
      { text: "3, 5 e 7", correct: false },
      { text: "1, 2 e 3", correct: false },
      { text: "9, 11 e 13", correct: false }
    ],
    calculation: "Pares: 0, 2, 4, 6, 8, 10, ... “2, 8 e 10” são todos pares.",
    level: "hard"
  },
  {
    question: "Qual NÃO é número natural?",
    answers: [
      { text: "-3", correct: true },
      { text: "0", correct: false },
      { text: "7", correct: false },
      { text: "100", correct: false }
    ],
    calculation: "Números naturais não são negativos; -3 não pertence aos naturais.",
    level: "hard"
  },
  {
    question: "Qual é o sucessor natural de 29?",
    answers: [
      { text: "30", correct: true },
      { text: "28", correct: false },
      { text: "290", correct: false },
      { text: "29 e meio", correct: false }
    ],
    calculation: "Sucessor: próximo número. Depois de 29 vem 30.",
    level: "hard"
  },
  {
    question: "Qual é o antecessor natural de 10?",
    answers: [
      { text: "9", correct: true },
      { text: "8", correct: false },
      { text: "0", correct: false },
      { text: "11", correct: false }
    ],
    calculation: "Antecessor: número imediatamente anterior. Antes de 10 vem 9.",
    level: "hard"
  },
  {
    question: "Entre 12, 15 e 18, quais são pares?",
    answers: [
      { text: "12 e 18", correct: true },
      { text: "15 e 18", correct: false },
      { text: "12 e 15", correct: false },
      { text: "Só 15", correct: false }
    ],
    calculation: "Pares têm resto 0 por 2: 12 e 18 são pares; 15 é ímpar.",
    level: "hard"
  },
  {
    question: "Qual é a forma feminina de 12º?",
    answers: [
      { text: "Décima segunda", correct: true },
      { text: "Décimo segundo", correct: false },
      { text: "Dozena", correct: false },
      { text: "Dozimal", correct: false }
    ],
    calculation: "12ª (fem.) = Décima segunda; 12º (masc.) = Décimo segundo.",
    level: "hard"
  },
  {
    question: "O número 25 é par ou ímpar?",
    answers: [
      { text: "Ímpar", correct: true },
      { text: "Par", correct: false },
      { text: "Perfeito", correct: false },
      { text: "Gigante", correct: false }
    ],
    calculation: "25 ÷ 2 não é inteiro → resto não é 0 → ímpar.",
    level: "hard"
  },
  {
    question: "Qual é o ordinal feminino de 7?",
    answers: [
      { text: "Sétima", correct: true },
      { text: "Sétimo", correct: false },
      { text: "Setezinha", correct: false },
      { text: "Setena", correct: false }
    ],
    calculation: "7º (masc.) = Sétimo; 7ª (fem.) = Sétima.",
    level: "hard"
  },
  {
    question: "Qual é o ordinal masculino de 22?",
    answers: [
      { text: "Vigésimo segundo", correct: true },
      { text: "Vigésima segunda", correct: false },
      { text: "Vigesimal dois", correct: false },
      { text: "Vinte‑dois", correct: false }
    ],
    calculation: "22º (masc.) = vigésimo + segundo → Vigésimo segundo.",
    level: "hard"
  }
];

// =========================
// LÓGICA ORIGINAL DO SEU QUIZ (mantida)
// =========================
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const feedbackElement = document.getElementById('feedback');
const acertoSom = document.getElementById('acerto-som');
const erroSom = document.getElementById('erro-som');

// Placar / contador
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const counterTextElement = document.getElementById('counter-text');

// Explicação
const explanationBox = document.getElementById('explanation-box');
const calculationText = document.getElementById('calculation');

// Controles iniciais
const difficultySelector = document.getElementById('difficulty');
const startButton = document.getElementById('start-btn');
const quizBox = document.getElementById('quiz-box');

let availableQuestions = []; // questões filtradas pelo nível
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// Embaralhar array (Fisher–Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  shuffleArray(availableQuestions);
  currentQuestionIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  updateScoreAndCounter();
  nextButton.classList.add('hide');
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = availableQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  updateScoreAndCounter();

  const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);
  shuffledAnswers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  feedbackElement.innerText = '';
  explanationBox.classList.add('hide');
  calculationText.innerText = '';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const currentQuestion = availableQuestions[currentQuestionIndex];
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  if (correct) {
    selectedButton.classList.add('correct');
    feedbackElement.innerText = 'Correto! 🎉';
    correctAnswers++;
    acertoSom.play();
  } else {
    selectedButton.classList.add('wrong');
    feedbackElement.innerText = 'Ops! Tente novamente. 🤔';
    wrongAnswers++;
    erroSom.play();
  }

  calculationText.innerText = currentQuestion.calculation;
  explanationBox.classList.remove('hide');
  updateScoreAndCounter();

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.classList.remove('hide');
}

function updateScoreAndCounter() {
  correctCountElement.innerText = `Acertos: ${correctAnswers}`;
  wrongCountElement.innerText = `Erros: ${wrongAnswers}`;
  counterTextElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${availableQuestions.length}`;
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < availableQuestions.length) {
    showQuestion();
  } else {
    questionElement.innerHTML =
      `Quiz finalizado! Você acertou <span style="color:#28a745;">${correctAnswers}</span> de ${availableQuestions.length} perguntas. Parabéns!`;
    resetState();
    nextButton.classList.add('hide');
    restartButton.classList.remove('hide-initial');
  }
});

function filterQuestions() {
  const selectedLevel = difficultySelector.value;
  if (selectedLevel === 'all') {
    availableQuestions = [...questions];
  } else {
    availableQuestions = questions.filter(q => q.level === selectedLevel);
  }
}

startButton.addEventListener('click', () => {
  filterQuestions();
  document.getElementById('difficulty-selector').classList.add('hide-initial');
  quizBox.classList.remove('hide-initial');
  nextButton.classList.remove('hide-initial');
  restartButton.classList.add('hide-initial');
  startQuiz();
});

// Reiniciar
restartButton.addEventListener('click', () => {
  correctAnswers = 0;
  wrongAnswers = 0;
  currentQuestionIndex = 0;
  correctCountElement.innerText = "Acertos: 0";
  wrongCountElement.innerText = "Erros: 0";
  counterTextElement.innerText = "";
  quizBox.classList.add('hide-initial');
  restartButton.classList.add('hide-initial');
  document.getElementById('difficulty-selector').classList.remove('hide-initial');
  feedbackElement.innerText = "";
  calculationText.innerText = "";
});