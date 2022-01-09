const sides = document.querySelectorAll(".side");
const btnArea = document.querySelector("#btn-area");
const outputArea = document.querySelector("#area-ans");

const calculateArea = (a,b) => {
    const areatri = 0.5*a*b;
    return areatri;
}
const clickHandlerArea = () => {
    const area = calculateArea(Number(sides[0].value), Number(sides[1].value))
    outputArea.innerText = `The area of the triangle is ${area} cm²`;
};
btnArea.addEventListener("click", clickHandlerArea);