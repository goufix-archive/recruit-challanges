const { decode, encrypt } = require("./cesar");
const fs = require("fs");

function getJSON() {
  return JSON.parse(fs.readFileSync("./answer.json", "utf-8"));
}

const json = getJSON();
const { numero_casas, cifrado: data } = json

const decoded = decode(data, numero_casas);
const crypted = encrypt(decoded);

const newJson = JSON.stringify({
  ...json,
  decifrado: decoded,
  resumo_criptografico: crypted
});

fs.writeFileSync("./answer.json", newJson);
