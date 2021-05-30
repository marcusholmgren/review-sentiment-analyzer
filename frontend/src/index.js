import "./styles.css";

console.log("hello sagemaker world!");

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

    hideSentimentAlerts();
    fetch('https://ci7r26lg24.execute-api.us-east-1.amazonaws.com/review', {
        headers: {
            'Content-Type': "application/json"
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({"review": review})
    }).then(res => res.json())
        .then(x => showSentimentAlert(x.prediction))
        .catch(err => {
            console.error(err);
            hideSentimentAlerts();
        })
}

function hideSentimentAlerts() {
    positiveEl.style.display = "none";
    negativeEl.style.display = "none";
}

function showSentimentAlert(prediction) {
    console.log(prediction)
    if (prediction === 0) {
        negativeEl.style.display = "block";
    } else {
        positiveEl.style.display = "block";
    }
}
