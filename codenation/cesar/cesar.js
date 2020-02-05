const abc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const sha1 = require("js-sha1");

module.exports = {
  decode: (data, numero_casas) => {
    const resp = data
      .split("")
      .map(letter => {
        const index = abc.indexOf(letter) - numero_casas;
        if (letter === " " || letter === ".") {
          return letter;
        }
        if (index < 0) {
          return abc[26 + index];
        } else {
          return abc[index];
        }
      })
      .join("");
    return resp;
  },
  encrypt: data => {
    return sha1(data);
  }
};
