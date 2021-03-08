// let arrLiteral = ["zero", "uno", "due", "tre", "quattro"];

// console.log("lunghezza array", arrLiteral.length);

//scorrimento array tramite for loop
// for (let i = 0; i < arrLiteral.length; i++)
// {
//     console.log("indice:", i);
//     console.log("valore:", arrLiteral[i]);
// }

//scorrimento array tramite foreach
// arrLiteral.forEach(function(e, index) {
//     console.log("indice:", index);
//     console.log("valore:", e);
// })

// let arr = [];

// for (let i = 0; i < 10; i++)
// {
//     arr.push((Math.random() * (100 - 1) + 1).toFixed(0));
// }

// console.log(arr);

// let variabile;

// if (variabile == null) console.log("ciao");

// console.log(variabile);

let tabella = [
    [1, 2, 3, 4],
    ["ciao", "salve", "eccetera", "ancora"]
];

for (let i = 0; i < tabella.length; i++)
{
    for (let j = 0; j < tabella[i].length; j++)
    {
        console.log(tabella[i][j]);
    }
}
