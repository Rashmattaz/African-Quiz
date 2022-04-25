// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1 id='list'>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Where is Nigeria located in Africa?", [  "West Africa", "South Africa","East Africa ", "North Africa"], " West Africa"),
    new Question(" Which African leader spent 27 years in jail?", [ "Nelson Mandela ", " Jerry Rawlings", " Paul Biya", "Muhammad Buhari"], "Nelson Mandela "),
    new Question("Which country is also called the Gold Coast?", ["Angola", "Guinea","Togo", "Ghana"], "Ghana"),
    new Question("George Weah is from where in Africa?", ["Rwanda", "Mali", "Liberia", "Algeria"], "Tanzania"),
    new Question("Where is Kalahari Games reserve located?", ["Lesotho", "Namibia", "Egypt", "Gabon"], "Namibia"),
    new Question("Nairobi is a part of what country in Africa? ",  [ "Comoros", "Zimbabwe ","Cape Verde ", "Kenya"], "Kenya"),
    new Question("Ngondo Festival is celebrated where in Africa?", [ "Uganda", "mauritius", "Cameroon", "Senegal"], "Cameroon"),
    new Question("What is the capital of Morocco?  ", ["Rabat", "Cairo","Abuja", "Douala"], "Rabat"),
    new Question("The Zulu Tribe is from what region in Africa?", ["Djibouti", "Mali", "South Africa", "Algeria"], "South Africa"),
    new Question("Ghadafi is from what country in Africa?", ["Chad", "Mauritania", "Mozambique", "Libya"], "Libya")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();