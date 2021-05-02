import "./styles.css";

console.log("hello world!");

const formEl = document.querySelector("form");
const positiveEl = document.querySelector("div.rounded-md.bg-green-50.p-4");
const negativeEl = document.querySelector("div.rounded-md.bg-red-50.p-4");

formEl.addEventListener("submit", analyseMovieReview);
formEl.addEventListener("reset", hideSentimentAlerts)

hideSentimentAlerts();

function analyseMovieReview(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const review = data.get("review")

    console.log(`Submit review ${review}, to URL: ${e.target.action}`);
}

function hideSentimentAlerts() {
    positiveEl.style.display = "none";
    negativeEl.style.display = "none";
}
