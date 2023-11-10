let firstUserAge = parseInt( prompt("Inserici la prima età: ") );
let secondUserAge = parseInt( prompt("Inserisci la seconda età: ") );

if ( firstUserAge > secondUserAge) {
    console.log(firstUserAge, "è più grande")
}
else if (firstUserAge < secondUserAge) {
    console.log(secondUserAge, "è più grande")
}
else {
    console.log("sono uguali")
}