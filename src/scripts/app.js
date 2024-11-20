import QUESTION_LIST from "./QUESTIONS_LIST.js";
const questionText = document.querySelector(".jsQuestion");
const answerContainer = document.querySelector(".question__list");
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

  _setErrors() {}

  _setAnswerText(index) {
    const newAnswerText = QUESTION_LIST[index].answer;
    const arrayAnswerText = newAnswerText.split("");
    arrayAnswerText.forEach((el) => {
      const newElement = document.createElement("li");
      newElement.classList.add("question__el");
      const innerElement = document.createElement("p");
      innerElement.classList.add("question__letter");
      innerElement.textContent = el;
      newElement.append(innerElement);
      answerContainer.insertAdjacentElement("beforeend", newElement);
    });
  }

  _setQuestionText(index) {
    const newQuestionText = QUESTION_LIST[index].text;
    questionText.textContent = newQuestionText;
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
    errorsNumber.textContent = "";
  }

  _clearQuestionText() {
    questionText.textContent = "";
  }

  _clearAnswerText() {
    while (answerContainer.firstChild) {
      answerContainer.removeChild(answerContainer.firstChild);
    }
  }
}

export default App;
