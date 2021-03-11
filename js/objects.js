let persona = {
    nome: "Nico",
    cognome: "Pezzotti",
    "cose varie": {
        main: "Malzahar",
        cs: 120,
        città: "Rieti"
    },
    giochi: [
        "lol",
        "fortnite",
        "roblox"
    ]
}

console.log("Nico:", persona);
console.log("Nico stringa", JSON.stringify(persona.giochi));

//accesso ai dati
console.log("nome:", persona.nome);
console.log("cose varie:", persona["cose varie"]);
console.log("main:", persona["cose varie"].main);
console.log("un gioco:", persona.giochi[1]);