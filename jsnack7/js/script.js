let ary = [];

for(let i = 0; i < 6; i++){
    let num = parseFloat(prompt(`nserire il ${i+1}° numbero: `));
    if(num % 2 === 0){
        ary.push(num);
    }
}

console.log(ary);