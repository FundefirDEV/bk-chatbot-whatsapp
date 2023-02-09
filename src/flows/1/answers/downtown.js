// Municipio: string
const ANSWERS_10 = [
  "*_Municipio._*",
  "\n_Escribe el municipio donde estás ubicado:_\n",
];

const REGEX_10 = new RegExp(/^\w{4,40}$/, "g");

module.exports = { ANSWERS_10, REGEX_10 };
