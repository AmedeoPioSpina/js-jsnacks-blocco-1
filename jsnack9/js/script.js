let num1 = parseInt(prompt("Inserire numero: "));
let num2 = parseInt(prompt("Inserire numero magiore o minore del precedente: "));
let result;
let numMax;
let numMin;

if(num1 > num2){
    numMax = num1;
    numMin = num2;
}
else {
    numMax = num2;
    numMin = num1;
}

console.log(numMax, numMin)

for( result = numMin; result <= numMax; result = result * 2){
}

console.log(result);