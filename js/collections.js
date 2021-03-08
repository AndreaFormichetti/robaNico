let arrLiteral = ["zero", "uno", "due", "tre", "quattro"];

console.log("lunghezza array", arrLiteral.length);

//scorrimento array tramite for loop
for (let i = 0; i < arrLiteral.length; i++)
{
    console.log("indice:", i);
    console.log("valore:", arr[i]);
}

//scorrimento array tramite foreach
// arrLiteral.forEach(function(e, index) {
//     console.log("indice:", i);
//     console.log("valore:", e);
// })

// let arr = [];

// for (let i = 0; i < 10; i++)
// {
//     arr.push(Math.random() * (100 - 0));
// }