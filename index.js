const questions = [
    {question: "Which of the following is a famous nickname for New Orleans?", answers: ["The Big Apple", "The Crescent City", "The City That Never Sleeps", "The City of Lights"], correct: "The Crescent City"},
    {question: "When was the French Quarter founded?", answers: ["1718", "1766", "1801", "1690"], correct: "1718"},
    {question: "Which of the following is NOT a suburb of New Orleans?", answers: ["Metairie", "Kenner", "Gretna", "Lafayette"], correct: "Lafayette"},
    {question: "What holiday is also known as Fat Tuesday?", answers: ["The Ash Wednesday Party", "Jazz Fest", "Mardi Gras", "French Quarter Fest"], correct: "Mardi Gras"},
    {question: "What year was the City of New Orleans devastated by Hurricane Katrina?", answers: ["2001", "1994", "2008", "2005"], correct: "2005"}
];

let questionNum = 0
let questionText = questions[questionNum].question;
let answerText1 = questions[questionNum].answers[0];
let answerText2 = questions[questionNum].answers[1];
let answerText3 = questions[questionNum].answers[2];
let answerText4 = questions[questionNum].answers[3];
let correctAnswer = questions[questionNum].correct;

let numCorrect=0

function currentQuestion() {
    $("#question").html("<span>Question #"+(questionNum+1)+" of 5:  </span><span>"+questionText+"</span>")
}

function currentAnswers() {
    $("#ans1").html("<button>"+answerText1+"</button>")
    $("#ans2").html("<button>"+answerText2+"</button>")
    $("#ans3").html("<button>"+answerText3+"</button>")
    $("#ans4").html("<button>"+answerText4+"</button>")
}

function checkAnswer() {
    $("li").on('click', (event) => {
        event.preventDefault();
        let selectedAnswer = $(event.currentTarget).text()
        $("#answer").removeClass("hide");
        if (selectedAnswer == correctAnswer) {
            $("#answer").html("<span>CORRECT!</span>")
            numCorrect=numCorrect+1
        }
        else {
            $("#answer").html("<span>Sorry, the correct answer is "+correctAnswer+".</span>")
        }
        questionNum=questionNum+1
        if (questionNum <= 4) {
            $("#score").html("<span>You've answered "+numCorrect+" out of "+(questionNum)+" questions correctly!</span>")
            $("#next").removeClass("hide")
            $("li").addClass("disabled");
        }
        else {
            $("#score").html("<span>Quiz Complete!  You answered "+numCorrect+" out of 5 questions correctly!</span>")
            $("#newQuiz").removeClass("hide")
        }
    })
}

function quizStart() {
    $("#startQuiz").on('click', (event) => {
        $("main").removeClass("hide")
        $("header").addClass("hide")
    }
    )
}

function nextQuestion() {
    $("#next").on('click', (event) => {
        $("#answer").addClass("hide")
        $("li").removeClass("disabled");
        questionText = questions[questionNum].question;
        answerText1 = questions[questionNum].answers[0];
        answerText2 = questions[questionNum].answers[1];
        answerText3 = questions[questionNum].answers[2];
        answerText4 = questions[questionNum].answers[3];
        correctAnswer = questions[questionNum].correct;
        $("#next").addClass("hide")
        $(currentQuestion)
        $(currentAnswers)
        })
}

function restartQuiz() {
    $("#newQuiz").on('click', (event) => {
        location.reload()
    })
}

function runQuiz() {
    quizStart();
    currentQuestion();
    currentAnswers();
    checkAnswer();
    nextQuestion();
    restartQuiz();
}

$(runQuiz);