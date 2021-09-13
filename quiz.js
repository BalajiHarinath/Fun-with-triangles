const quizForm = document.querySelector(".quiz-form");
const buttonQuiz = document.querySelector("#btn-ans");
const output = document.querySelector("#answer");

const ans = ["90⁰", "right angled"];

function clickHandlerQuiz(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);
    for(let entry of formResults.values()){
        if(entry === ans[index++]){
            score++;
        }
    }
    output.innerText = "Your score is " + score;
};

buttonQuiz.addEventListener("click", clickHandlerQuiz);