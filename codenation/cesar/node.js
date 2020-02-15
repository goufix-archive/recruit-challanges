const { decode } = require('./cesar');

const [, , num, ...frases] = process.argv;

const newFrases = frases.map((original) => ({
  original,
  codificado: decode(original, parseInt(num, 10))
}));

console.log(newFrases);
