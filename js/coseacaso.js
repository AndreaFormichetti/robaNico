const contatti = [
    {
        nome: "andrea"
    },
    {
        nome: "nico"
    }
];

function trova(nome, lista){
    let found = false;
    let i = 0;
    let result;
    while (!found && i < lista.length)
    {
        if (lista[i].nome === nome)
        {
            found = true;
            result = lista[i];
        }
        i++;
    }
    return found ? result : "nessun contatto trovato";
}

console.log(trova("andrea", contatti))