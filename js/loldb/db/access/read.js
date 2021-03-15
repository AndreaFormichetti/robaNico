const fs = require("fs");
require('dotenv').config();

const readHero = (nome) => {
    return JSON.parse(fs.readFileSync(process.env.HERO_DB_PATH + "\\" + nome + ".json", "utf-8"));
};

module.exports = readHero;