let guestList = [
    "Andrea",
    "Mario",
    "Luigi",
    "Silvio",
    "Antonio"
];
let inputTarget = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.createElement("p");
let checkStatus = false;

btn.addEventListener("click", (e) => {
    e.preventDefault;
    for(let i = 0; i < guestList.length; i++){
        if(guestList[i] === inputTarget.value){
            checkStatus = true;
            break;
        }
    }
    if(checkStatus === true){
        p.textContent = "E' invitato";
    }
    else{
        p.textContent = "Non è invitato";
    }
    let body = document.querySelector("body");
    body.appendChild(p);
})