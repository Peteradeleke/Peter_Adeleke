
const options = document.querySelector(".options").children;
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswerSpan = document.querySelector(".correct-answers");
const totalQuestionSpan2 = document.querySelector(".total-question2");
const percentage = document.querySelector(".percentage");
const question = document.querySelector(".question");
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;

// questions, options and answers

const questions = [
    {
      q: "What does the eagle in the Nigerian coat of arm represent?",
      options:["Strength", "Dignity", "Peace", "Nigeria's fertile soil"],
      answer: 0
    },
    {
      q:"What is the name of the Nigerian senior national team in football (men team)",
      options: ["Green Eagles", "Golden Eagles", "Super Eagles", "Flying Eagles"], 
      answer: 2
    },
    {
      q: "Nigeria is divided into how many geo-political zones?",
      options:["3", "4", "5", "6"],
      answer: 3
    },
    {
      q: "Who designed the Nigerian flag?",
      options:["Chief Olusegun Obasanjo", "Dora Akuyili", "Michael Taiwo Akinkunmi", "Funmilayo Ransome Kuti"],
      answer: 2
    },
    {
      q:"When did Nigeria become a republic?",
      options:["1st October, 1960", "1st October, 1963", "1st October, 1964", "1st October, 1966"],
      answer: 1
    }
  ];

//   set questions and options and question numbers

totalQuestionSpan.innerHTML = questions.length;
function load() {
    questionNumberSpan.innerHTML = index+1;
    question.innerHTML = questions[questionIndex].q;
    op1.innerHTML = questions[questionIndex].options[0];
    op2.innerHTML = questions[questionIndex].options[1];
    op3.innerHTML = questions[questionIndex].options[2];
    op4.innerHTML = questions[questionIndex].options[3];
    index++;
};

function check(element) {
    if (element.id == questions[questionIndex].answer) {
        element.classList.add("correct");
        score++;
        console.log("score " + score)
        correctAnswerSpan.innerHTML = score;

    }
    else {
        element.classList.add("wrong");
    }
    disabledOptions()
};

function disabledOptions() {
    for (let i=0; i < options.length; i++) {
        options[i].classList.add("disabled");
        if (options[i].id == questions[questionIndex].answer) {
            options[i].classList.add("correct")
        }
    }
};

function enableOptions() {
    for (let i=0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
    }
    
};

function validate() {
    if (!options[0].classList.contains("disabled")) {
        alert("Please select an option");
    }
    else {
        enableOptions();
        randomQuestion();
    }
};

function next() {
    validate();
};

function randomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = 0;
    if (index == questions.length) {
        quizOver();
    }
    else {
        if (myArray.length > 0) {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i] == randomNumber) {
                    hitDuplicate = 1;
                    break;
                }
            }
            if (hitDuplicate == 1) {
                randomQuestion();
            }
            else {
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex);
            }
        }
        if (myArray.length == 0) {
            questionIndex = randomNumber;
            load();
            myArr.push(questionIndex);
        }
        myArray.push(randomNumber);
    }  
    
};

function quizOver() {
    // // document.querySelector(".quiz-over").classList.add("show");
    // correctAnswerSpan.innerHTML = score;
    // totalQuestionSpan2.innerHTML = questions.length;
    // percentage.innerHTML = (score / questions.length) * 100 + "%";
    // console.log("asdfg")
    startOver();
}

function startOver() {
    if (index === questions.length) {
        console.log("hidfghgfds")
        localStorage.setItem("mostRecentScore", score);
        localStorage.setItem("NumOfQuestions", questions.length);
        //go to the end page
        return window.location.assign("end.html");
    }
}

// function tryAgain() {
//     window.location.reload();
// }

window.onload = function() {
    randomQuestion();
};

