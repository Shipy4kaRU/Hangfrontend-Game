import QUESTION_LIST from "./QUESTIONS_LIST.js";
const questionText = document.querySelector(".jsQuestion");
const answerText = document.querySelectorAll(".question__letter");
const errorsNumber = document.querySelector(".jsErrors");

class App {
  constructor() {
    this._resetApp();
    this._setNewQuestion();
  }

  _setNewQuestion() {
    const index = this.chooseRandomQuestion();
    this._setAnswerText(index);
    this._setQuestionText(index);
  }

  _setAnswerText(index) {
    const newAnswerText = QUESTION_LIST[index].answer;
    answerText.innerHTML = newAnswerText;
  }

  _setQuestionText(index) {
    const newQuestionText = QUESTION_LIST[index].text;
    questionText.innerHTML = newQuestionText;
  }

  chooseRandomQuestion() {
    const questionLength = QUESTION_LIST.length - 1;
    const randomIndex = Math.round(Math.random() * questionLength);
    return randomIndex;
  }

  _resetApp() {
    this._clearAnswerText();
    this._clearQuestionText();
    this._clearErrors();
  }

  _clearErrors() {
    errorsNumber.innerHTML = "";
  }

  _clearQuestionText() {
    questionText.innerHTML = "";
  }

  _clearAnswerText() {
    answerText.forEach((el) => {
      el.innerHTML = "";
    });
  }
}

export default App;
