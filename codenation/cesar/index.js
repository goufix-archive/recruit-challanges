const { decode, encrypt } = require("./cesar");
const fs = require("fs");
const path = require("path");

function getJson() {
  const response = JSON.parse(fs.readFileSync("./answer.json", "utf-8"));
  return response;
}
const { numero_casas, cifrado: data } = getJson();

const decoded = decode(data, numero_casas);
const crypted = encrypt(decoded);

const newJson = JSON.stringify({
  ...getJson(),
  decifrado: decoded,
  resumo_criptografico: crypted
});

fs.writeFileSync("./answer.json", newJson);
