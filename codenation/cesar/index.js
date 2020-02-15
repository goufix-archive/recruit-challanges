const fs = require('fs');
const { decode, encrypt } = require('./cesar');

function getJSON() {
  return JSON.parse(fs.readFileSync('./answer.json', 'utf-8'));
}

const json = getJSON();
const { numeroCasas, cifrado: data } = json;

const decoded = decode(data, numeroCasas);
const crypted = encrypt(decoded);

const newJson = JSON.stringify({
  ...json,
  decifrado: decoded,
  resumo_criptografico: crypted
});

fs.writeFileSync('./answer.json', newJson);
