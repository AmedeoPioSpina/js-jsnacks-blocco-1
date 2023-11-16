let body = document.querySelector("body");
let newH1 = document.createElement("h1");
let newBtn = document.createElement("button");
newBtn.textContent = "+3"
let randomNum = Math.floor(Math.random() * 10);
newH1.textContent = randomNum;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.appendChild(newH1);    
body.appendChild(newBtn);    

newBtn.addEventListener("click", () => {
    randomNum += 3;
    newH1.textContent = randomNum;
})