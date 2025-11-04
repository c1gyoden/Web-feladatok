import input from "./input.js";

const tanulokSzama = await input("Hány adatot szeretnél megadni?");
const tanulok = [];

for (let i = 0; i < tanulokSzama; i++) {
  const name = await input("Név: ");
  const email = await input("Email: ");
  tanulok.push({ name: name, email }); //ha ugyanaz a változónév és a kulcs akkor lehet így rövidíteni
}

//console.table(tanulok)
//console.log(tanulok)

for (let i = 0; tanulok.length; i++) {
  console.log(`Név: ${tanulok[i].name}, email: ${tanulok[i].email}`);
}

tanulok.forEach((tanulo) => {
  console.log(`Név: ${tanulo.name}, email: ${tanulo.email}`);
});

for (let tanulo of tanulok) {
  console.log(`Név: ${tanulo.name}, email: ${tanulo.email}`);
}
