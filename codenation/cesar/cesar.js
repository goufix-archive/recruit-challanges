const abc = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const sha1 = require('js-sha1');

module.exports = {
  decode: (data, numeroCasas) => {
    const resp = data
      .split('')
      .map((letra) => {
        const index = abc.indexOf(letra) - numeroCasas;
        if (letra === ' ' || letra === '.') {
          return letra;
        }
        if (index < 0) {
          return abc[26 + index];
        } else {
          return abc[index];
        }
      })
      .join('');
    return resp;
  },
  encrypt: (data) => sha1(data)
};
