let taget = document.querySelector("body");

for(let i = 0; i<10; i++){
    let newElement = document.createElement("p");
    newElement.textContent = i + 1;
    if( (i+1)%2 === 0){
        newElement.style.backgroundColor = "green";
    }
    else{
        newElement.style.backgroundColor = "yellow";
    }
    taget.appendChild(newElement);
}