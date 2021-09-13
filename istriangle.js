const angles = document.querySelectorAll(".angles");
const button = document.querySelector("#btn-angle");
const output = document.querySelector("#message");

function calculateSum(a,b,c){
    const sumA = a+b+c;
    return sumA;
};
function clickHandlerAngles(){
    const sumAngles = calculateSum(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    if(sumAngles === 180){
        output.innerText = "Yay!! it is a triangle."
    }else{
        output.innerText = "Oops!! it is not a triangle."
    }
};
button.addEventListener("click",clickHandlerAngles);