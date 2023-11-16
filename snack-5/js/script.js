let inputList = document.querySelectorAll("input");
let btn = document.querySelector("button");
let newElement = document.createElement("p");

btn.addEventListener("click", (e) => {
    e.preventDefault;

    if(inputList[0].value.length > inputList[1].value.length){
        newElement.textContent = inputList[0].value + " è la parola più lunga";
    }
    else if(inputList[0].value.length < inputList[1].value.length){
        newElement.textContent = inputList[1].value + " è la parola più lunga";
    }
    else{
        newElement.textContent = "Sono della stessa lunghezza";
    }
    let body = document.querySelector("body");
    body.appendChild(newElement);
});