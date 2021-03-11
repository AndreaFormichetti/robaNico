function media(arr)
{
    let accumulatore = 0; //accumula la somma dei valori dell'array ad ogni iterazione
    for (let i = 0; i < arr.length; i++) //scorre l'array
    {
        accumulatore = arr[i] + accumulatore; //somma parziale + valore corrente
    }
    return accumulatore / arr.length; //restituisce la media
}

const arrayMedia = [0, 10, 1, 4, 6, 3, 6 ,3, 43,21 ,6 , -45 ,3];

const m = media(arrayMedia);

console.log("media: ", m);

for (let i = 0; i < arrayMedia.length; i++)
{
    if (arrayMedia[i] < m) //esegui solo se il valore corrente è minore della media
    {
        console.log(arrayMedia[i]);
    }
}