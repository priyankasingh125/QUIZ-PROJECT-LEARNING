import questions from "./questions.js";

const startButton = document.getElementById("start-btn");
const questionElt = document.getElementById("question");
const answerbuttons = document.getElementById("radiocontainer");
const nextButton = document.getElementById("next-btn");
const quizcontainer = document.getElementById("quiz");
const backButton = document.getElementById("back-btn");
let CurrentQuestionIndex = 0;
let correctans = "false";
let figure = 0;
let shuffledQuestions;
let selected;
let PreviousQuestionIndex = 0;
let ans = [];

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("next-btn").style.visibility = true;
  startButton.addEventListener("click", StartQuiz);
  backButton.addEventListener("click", () => {
    if (CurrentQuestionIndex > 0) {
      CurrentQuestionIndex--;
      showQuestion();
    }
  });
  nextButton.addEventListener("click", () => {
    document.getElementById("score").innerText = "SCORE:" + figure;
    if (ans[CurrentQuestionIndex] == undefined) {
      document.getElementById("next-btn").style.disabled = true;
    } else {
      CurrentQuestionIndex++;
      document.getElementById("next-btn").style.disabled = false;
      if (CurrentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        ShowScore();
      }
    }
  });
});

function ResetQuestion() {
  //Clear The Answer Grid
  while (answerbuttons.firstChild) {
    answerbuttons.removeChild(answerbuttons.firstChild);
  }
}
let snapshotQuestion;
let currentquestion;

function StartQuiz() {
  document.getElementById("radiocontainer").style.display = "block";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("next-btn").style.display = "inline-block";
  questions.sort(() => Math.random() - 0.5);
  //ResetQuestion(CurrentQuestionIndex);
  CurrentQuestionIndex = 0;
  ans = [];
  figure = 0;
  selected = false;
  nextButton.innerHTML = "Next";
  document.getElementById("score").innerText = "SCORE:" + figure;
  showQuestion();
}
function showQuestion() {
  ResetQuestion();
  //Get The Question from the Array And Append to the answer grid
  currentquestion = questions[CurrentQuestionIndex];
  questionElt.innerHTML = currentquestion.question;
  currentquestion.answers.forEach((answer, index) => {
    const breakDiv = document.createElement("div");
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = index;
    const span = document.createElement("span");
    span.textContent = answer.text;
    label.appendChild(radio);
    label.appendChild(span);
    answerbuttons.appendChild(label);
    breakDiv.className = "flex-break";
    answerbuttons.appendChild(breakDiv);
    radio.addEventListener("click", () => selectAnswer(radio, answer));
  });
  document.querySelectorAll('input[name="answer"]')[
    ans[CurrentQuestionIndex]
  ].checked = true;
  selected = document.querySelectorAll('input[name="answer"]')[
    ans[CurrentQuestionIndex]
  ].checked;
}

function selectAnswer(radio, answer) {
  selected = document.querySelector('input[name="answer"]:checked');
  const correct = answer.correct;
  if (correct && ans[CurrentQuestionIndex] == undefined) {
    radio.classList.add("ansbtn");
    radio.style.backgroundColor = "#003A8F";
    questions[selected.value].selectval = true;
    ans[CurrentQuestionIndex] = selected.value;
    correctans = "true";
    figure++;
  } else if (!correct && ans[CurrentQuestionIndex] == undefined) {
    questions[selected.value].selectval = true;
    ans[CurrentQuestionIndex] = selected.value;
    radio.classList.add("ansbtn");
    radio.style.backgroundColor = "#dc3545";
    correctans = "false";
  }
  Array.from(answerbuttons.children).forEach((btn) => {
    radio.classList.add("ansbtn");
    btn.se;
    if (
      btn.innerText ===
      questions[CurrentQuestionIndex].answers.find((a) => a.correct).text
    ) {
      btn.style.backgroundColor = "#003A8F";
    } else {
      btn.style.backgroundColor = "#FF0000";
    }
  });
  const radios = document.querySelectorAll('input[name="answer"]');
  radios.forEach((r) => (r.disabled = true));
}

function ShowScore() {
  ResetQuestion();
  let TEXT = "YOU SCORED   " + figure;
  document.getElementById("question").innerHTML =
    TEXT +
    " OUT OF " +
    CurrentQuestionIndex +
    " CLICK " +
    "START " +
    " AGAIN !!";
  //document.getElementById('answer-buttons').innerText = " CLICK "+"START TO"+" PLAY AGAIN " ;
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("back-btn").style.display = "none";
  document.getElementById("radiocontainer").style.display = "none";
  //document.getElementById('question').innerHTML = "  ";
  //("You Scored " + score + "in the Quiz Today out of 10");
}
