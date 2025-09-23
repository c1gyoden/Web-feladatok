import input from "./input.js";

/* 0. hozz létre egy txt változót és add meg a változó értékét - legalább 20 karakterből álljon */

const txt = await input("Kérek egy szöveget: ");
console.log(txt);

/* 1. Írasd ki a konzolba az első 5 karaktert */
function elsoOtKarakter(txt) {
  return txt.substring(0, 5);
}
console.log("Az első 5 karakter: " + elsoOtKarakter(txt));

/* 2. Írasd ki a konzolba a 3. tól a 8-ik karakterig */
function haromtolNyolcadikKarakterig(txt) {
  return txt.substring(2, 8);
}
console.log("Az 3-8. karakter: " + haromtolNyolcadikKarakterig(txt));

/* 3. Írasd ki a konzolba az 5. karaktertől a végéig */
function ottolVegeig(txt) {
  return txt.substring(4, txt.length);
}
console.log("5. karaktertől a végéig: " + ottolVegeig(txt));

/* 4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan */
function ottolHatHosszan(txt) {
  return txt.substring(4, 4 + 6);
}
console.log(`5.-től 6 hosszan: ${ottolHatHosszan(txt)}`);

/* 5. Írasd ki a konzolba a txt-t nagybetűkkel */
function nagybetus(txt) {
  return txt.toUpperCase();
}
console.log(`Nagybetűkkel: ${nagybetus(txt)}`);

/* 6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen */
function mindenMasodikNagybetu(txt) {
  let mindenMasodikNagy = "";
  for (let i = 0; i < txt.length; i++) {
    if (i % 2 != 0) {
      mindenMasodikNagy += txt[i].toUpperCase();
    } else {
      mindenMasodikNagy += txt[i];
    }
  }
  return mindenMasodikNagy;
}
console.log(`Minden második nagybetű: ${mindenMasodikNagybetu(txt)}`);

/* 7. Írasd ki a konzolba a txt-t úgy, hogy minden "e" karakter "E" legyen */
function eHelyettE(txt) {
  return txt.replaceAll("e", "E");
}
console.log(`Minden e helyett E: ${eHelyettE(txt)}`);

/* 8. Készíts tömböt a txt-ből az "e" betűk szerint elválasztva. Ítasd ki a tömböt. */
function eNelkuliTomb(txt) {
  return txt.split("e");
}
console.log(`e nélküli tömb: ${eNelkuliTomb(txt)}`);
