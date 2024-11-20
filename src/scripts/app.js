import QUESTION_LIST from "./QUESTIONS_LIST.js";
const questionText = document.querySelector(".jsQuestion");
const answerContainer = document.querySelector(".question__list");
const errorsNumber = document.querySelector(".jsErrors");
const keyboardList = document.querySelector(".keyboard__list");

class App {
  #answerText = [];
  constructor() {
    this._resetApp();
    this._setNewQuestion();
    keyboardList.addEventListener("click", this._keyboardClicked.bind(this));
  }

  _showLetter(newLetter) {
    const lettersList = answerContainer.querySelectorAll(".question__el");
    const innerElement = document.createElement("p");
    innerElement.classList.add("question__letter");
    innerElement.textContent = newLetter;
    const uppLettersIndex = this.#answerText.reduce((acc, el, index) => {
      if (el === newLetter) acc.push(index);
      return acc;
    }, []);
    const lowLettersIndex = this.#answerText.reduce((acc, el, index) => {
      if (el === newLetter.toLowerCase()) acc.push(index);
      return acc;
    }, []);
    console.log(uppLettersIndex);
    console.log(lowLettersIndex);
    uppLettersIndex.forEach((el) =>
      lettersList[el].append(innerElement.cloneNode(true))
    );
    lowLettersIndex.forEach((el) =>
      lettersList[el].append(innerElement.cloneNode(true))
    );
  }

  _checkCorrectLetter(newLetter) {
    console.log(this.#answerText);
    console.log(keyboardList);
    if (
      this.#answerText.includes(newLetter) ||
      this.#answerText.includes(newLetter.toLowerCase())
    )
      this._showLetter(newLetter);
  }

  _keyboardClicked(e) {
    if (!e.target.classList.contains("keyboard__btn")) return;
    const clickedLetter = e.target.textContent;
    this._checkCorrectLetter(clickedLetter);
  }

  _setNewQuestion() {
    const index = this.chooseRandomQuestion();
    this._setAnswerText(index);
    this._setQuestionText(index);
  }

  _setErrors() {}

  _setAnswerText(index) {
    const newAnswerText = QUESTION_LIST[index].answer;
    this.#answerText = newAnswerText.split("");
    this.#answerText.forEach((el) => {
      const newElement = document.createElement("li");
      newElement.classList.add("question__el");
      // const innerElement = document.createElement("p");
      // innerElement.classList.add("question__letter");
      // // innerElement.textContent = el;
      // newElement.append(innerElement);
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
    errorsNumber.textContent = "0/0";
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
