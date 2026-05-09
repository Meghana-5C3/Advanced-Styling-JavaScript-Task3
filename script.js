/* =========================
   IMAGE CAROUSEL
========================= */

const images = [

    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",

    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200",

    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",

    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"

];

let currentIndex = 0;

const carouselImage = document.getElementById("carouselImage");

document.getElementById("nextBtn").addEventListener("click", nextImage);

document.getElementById("prevBtn").addEventListener("click", prevImage);

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    carouselImage.src = images[currentIndex];
}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    carouselImage.src = images[currentIndex];
}

/* AUTO SLIDE */

setInterval(nextImage, 3000);

/* =========================
   QUIZ APPLICATION
========================= */

const quizData = [

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used for styling web pages?",
        answers: [
            "Python",
            "Java",
            "CSS",
            "C++"
        ],
        correct: 2
    },

    {
        question: "Which JavaScript method selects an element by ID?",
        answers: [
            "querySelector",
            "getElementById",
            "getClassName",
            "selectElement"
        ],
        correct: 1
    }

];

let questionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");

const answersEl = document.getElementById("answers");

const scoreEl = document.getElementById("score");

function loadQuestion(){

    const currentQuestion = quizData[questionIndex];

    questionEl.textContent = currentQuestion.question;

    answersEl.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("quiz-btn");

        button.addEventListener("click", () => {

            if(index === currentQuestion.correct){
                score++;
            }

            questionIndex++;

            if(questionIndex < quizData.length){

                loadQuestion();

            }else{

                showScore();
            }

        });

        answersEl.appendChild(button);

    });
}

function showScore(){

    questionEl.textContent = "Quiz Completed!";

    answersEl.innerHTML = "";

    scoreEl.textContent =
        `Your Score: ${score}/${quizData.length}`;
}

loadQuestion();

/* =========================
   FETCH API DATA
========================= */

const jokeBtn = document.getElementById("fetchJoke");

const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", fetchJoke);

async function fetchJoke(){

    jokeText.textContent = "Loading joke...";

    try{

        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        jokeText.textContent =
            `${data.setup} - ${data.punchline}`;

    }catch(error){

        jokeText.textContent =
            "Failed to fetch joke. Please try again.";
    }
}