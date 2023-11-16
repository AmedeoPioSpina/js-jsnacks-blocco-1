let sum = 0;
let inputNum = prompt("Inserire un valore di 10 cifre: ");
console.log(inputNum);
let numAry = Array.from(inputNum, Number);

for(let i = 0; i < 10; i++){
    sum += numAry[i];
}
console.log(sum);