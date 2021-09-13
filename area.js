const sides = document.querySelectorAll(".side");
const btnArea = document.querySelector("#btn-area");
const outputArea = document.querySelector("#area-ans");

function calculateArea(a,b){
    const areatri = 0.5*a*b;
    return areatri;
}
function clickHandlerArea(){
    const area = calculateArea(Number(sides[0].value), Number(sides[1].value))
    outputArea.innerText = "The area of the triangle is " + area + " cm²";
};
btnArea.addEventListener("click", clickHandlerArea);