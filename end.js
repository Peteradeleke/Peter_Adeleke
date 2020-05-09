const finalScore = document.getElementById("correct-answers");
const totalQuestions = document.getElementById("total-question2");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const NumOfQuestions = localStorage.getItem("NumOfQuestions");
finalScore.innerText = mostRecentScore;
totalQuestions.innerText = NumOfQuestions;