
// assigning question and options variables

var question = document.getElementById("question")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")

// div show - hide

var cont = document.getElementsByClassName("container")[0]
var user = document.getElementsByClassName("user-info")[0]
var board = document.getElementsByClassName("score-board")[0]
// var name = document.getElementById("name")

// global variables

var next = 0
var score = 0
var username = ''
var userOpts = []

// quiz Question & Options

var quiz = [
    {
        question: "What is the most common surname Wales?",
        answer: "Jones",
        option: ["Williams", "Jones", "Davies", "Evans"]
    },
    {

        question: "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
        answer: "Demolition",
        option: ["The Dream Team", "The Bushwhackers", "The British Bulldogs", "Demolition"]
    },
    {

        question: "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
        answer: "Cabbage Patch Kids",
        option: [
            "Transformers",
            "Cabbage Patch Kids",
            "Care Bears",
            "Rubik Cube"
        ]
    },
    {

        question: "What is the largest organ of the human body?",
        answer: "Skin",
        option: ["Skin", "Heart", "large Intestine", "Liver"]
    },
    {

        question: "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
        answer: "Tango",
        option: ["Target", "Taxi", "Tango", "Turkey"
        ]
    },
    {

        question: "What alcoholic drink is made from molasses?",
        answer: "Rum",
        option: [
            "Gin",
            "Vodka",
            "Rum",
            "Whisky"
        ]
    },
    {

        question: "Which one of these is not a typical European sword design?",
        answer: "Scimitar",
        option: [
            "Falchion",
            "Ulfberht",
            "Flamberge",
            "Scimitar"
        ]
    },
    {

        question: "What is the Zodiac symbol for Gemini?",
        answer: "Twins",
        option: [
            "Fish",
            "Scales",
            "Maiden",
            "Twins",
        ]
    },
    {

        question: "What is Cynophobia the fear of?",
        answer: "Dogs",
        option: [
            "Birds",
            "Dogs",
            "Flying",
            "Germs"
        ]
    },
    {

        question: "Who is the author of Jurrasic Park?",
        answer: "Michael Crichton",
        option: [
            "Peter Benchley",
            "Chuck Paluhniuk",
            "Michael Crichton",
            "Irvine Welsh"
        ]
    }
]


function start() {
    username = document.getElementById("name").value

    if (username.trim() !== "") {
        user.style.display = "none"
        cont.style.display = "block"
        showQuiz()
    }
    else alert("Kindly enter your name")
}

function userChoice(e) {

    userOpts.push(e.lastChild.innerHTML)

    if (next === quiz.length - 1) {

        for (let i = 0; i < userOpts.length; i++) {
            if (userOpts[i] === quiz[i].answer) {
                score = score + 1
            }
        }
        cont.style.display = "none"
        board.style.display = "inline-block"
        document.getElementById("username").innerHTML = username
        document.getElementById("score").innerHTML = score
        document.getElementById("name").value = ""

        next = 0
        score = 0
        username = ''
        userOpts = []
    }

    else {  //(next < quiz.length - 1)  
        next = next + 1
        showQuiz()
    }      
}

function startAgain() {
    board.style.display = "none"
    user.style.display = "inline-block"
}


function showQuiz() {

    question.innerHTML = `Q${next + 1}. ${quiz[next].question}`
    opt1.innerHTML = quiz[next].option[0]
    opt2.innerHTML = quiz[next].option[1]
    opt3.innerHTML = quiz[next].option[2]
    opt4.innerHTML = quiz[next].option[3]
}
