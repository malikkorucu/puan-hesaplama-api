const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
app.options("*", cors());
const PORT = process.env.PORT || 5000

const marksTable = [];

let beginOfMark = 42.5;
let beginOfLetterMark = 36;

for (let i = 0; i < 8; i++) {
  let bas = beginOfMark + i * 5 - 5;
  let son = bas + 5;
  let harfnotubaslangıc = beginOfLetterMark - i * 2;

  if (i === 0) {
    bas = 0;
    son = 42.5;
  } else {
    bas = beginOfMark + i * 5 - 5;
    son = bas + 5;
  }
  if (bas == 62.5) son += 2.5;
  if (bas == 67.5) bas += 2.5;
  if (bas === 70) son = bas + 10;
  if (bas === 72.5) bas = 80;
  if (bas === 80) son = 100;

  const harfNotları = ["FF", "FD", "DD", "DC", "CC", "CB", "BB", "BA", "AA"];
  const harfNotuTablosu = [];
  let aralık;

  for (let a = 0; a < 9; a++) {
    let ilk = harfnotubaslangıc + a * 5 - 5;
    let sonx = ilk + 5;

    if (a === 0) {
      aralık = `${0} - ${harfnotubaslangıc}`;
    } else {
      aralık = `${ilk} - ${sonx}`;
    }

    harfNotuTablosu.push({ not: harfNotları[a], aralık });
  }

  let item = { aralık: `${bas} - ${son}`, harfNotu: { harfNotuTablosu } };

  marksTable.push(item);
}

app.get('/api/getTable', (req, res, next) => { 
    res.status(200).json({
        success: true,
        data:marksTable
    })
})

app.listen(PORT, () => { 
    console.log("app started on" +" " +  PORT)
})