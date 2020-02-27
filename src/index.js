function KaratsubaMultiplication(x, y) {
  const a = parseInt(x.toString().substring(0, 2), 0);
  const b = parseInt(x.toString().substring(2, 4), 0);
  const c = parseInt(y.toString().substring(0, 2), 0);
  const d = parseInt(y.toString().substring(2, 4), 0);

  const ac = a * c;
  const bd = b * d;
  const sumabpluscd = (a + b) * (c + d);
  const resulTemp = sumabpluscd - bd - ac;

  return ac * 10000 + bd + resulTemp * 100;
}

const result = KaratsubaMultiplication(5678, 1234);
console.log(`Resultado:${result}`);
