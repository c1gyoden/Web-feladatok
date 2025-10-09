function getOtosLotteryNumbers() {
  let szamok = [];
  while (szamok.length < 5) {
    let szam = Math.floor(Math.random() * 100);
    if (!szamok.includes(szam) && 1 <= szam && szam <= 90) {
      szamok.push(szam);
    }
  }
  return szamok;
}

function getSortedLotteryNumbers(szamok) {
  return szamok.sort((a, b) => a - b);
}

function getNumberOfHits(nyeroszamok, tippek) {
  let megegyezett = 0;
  tippek.forEach((szam) => {
    if (nyeroszamok.includes(szam)) {
      megegyezett++;
    }
  });
  return megegyezett;
}

let sorsolt = getOtosLotteryNumbers();
console.log(`Sorsolt számok: ${sorsolt}`);
console.log(`Rendezett számok: ${getSortedLotteryNumbers(sorsolt)}`);

let tippek = getOtosLotteryNumbers();
console.log(`Tippek: ${getSortedLotteryNumbers(tippek)}`);
console.log(`Megegyezett számok: ${getNumberOfHits(sorsolt, tippek)} db`);
