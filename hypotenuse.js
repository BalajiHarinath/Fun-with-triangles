const inputs = document.querySelectorAll(".input-val");
const buttonhyp = document.querySelector("#btn-hyp");
const output = document.querySelector("#hans");

function calculateHyp(a,b){
    const answer =Math.sqrt(a*a + b*b);
    return answer;
};

function clickHandlerHyp(){
    const hyp = calculateHyp(Number(inputs[0].value), Number(inputs[1].value));
    output.innerText = "The length of the hypotenuse is " + hyp;
};

buttonhyp.addEventListener("click", clickHandlerHyp);