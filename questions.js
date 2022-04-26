

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
    
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        
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


var questions = [
    new Question("jollof rice is common to which country?", [ "Benin", "Tunisia","congo", "Nigeria"], "Nigeria"),
    new Question("Which leader spent 27 years in jail?", [ "Nelson Mandela ", " Jerry Rawlings", " Paul Biya", "Samuel Doe"], "Nelson Mandela "),
    new Question("Which country is also called the Gold Coast?", ["Angola", "Guinea","Togo", "Ghana"], "Ghana"),
    new Question("George Weah is from where in Africa?", ["Rwanda", "Mali", "Liberia", "Algeria"], "Liberia"),
    new Question("Addis Ababa is the capial of where?", ["Lesotho", "Ethiopia", "Mauritania", "Gabon"], "Ethiopia"),
    new Question("Nairobi is a part of what country? ",  [ "Comoros", "Zimbabwe ","Cape Verde ", "Kenya"], "Kenya"),
    new Question("Samuel Eto is from where ?", [ "Uganda", "mauritius", "Cameroon", "Senegal"], "Cameroon"),
    new Question("What is the capital of Morocco?  ", ["Rabat", "Cairo","Abuja", "Douala"], "Rabat"),
    new Question("The Zulu Tribe is from where?", ["Djibouti", "Mali", "South Africa", "Algeria"], "South Africa"),
    new Question("which country has the most pyramids?", ["Chad", "Egypt", "Mozambique", "Sudan"], "Sudan")
];


var quiz = new Quiz(questions);


populate();
