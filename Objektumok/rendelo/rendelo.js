const nev = document.getElementById("nev")
const email = document.getElementById("email")
const telefon = document.getElementById("telefon")
const szolgaltatas = document.getElementById("szolgaltatas")
const datum = document.getElementById("datum")
const ido = document.getElementById("ido")
const hozzaad = document.getElementById("hozzaad")
const megjelenites = document.getElementById("megjelenites")


foglalasok = []
hozzaad.addEventListener("click", () => {
        const foglalas = {
        id: length(foglalasok),
        nev: nev.value,
        email: email.value,
        telefon: telefon.value,
        szolgaltatas: szolgaltatas.value,
        datum: datum.value,
        ido: ido.value
    }

    foglalasok.push(foglalas)
})

function Megjelenites(foglalasok){
    foglalasok.foreach(f => {
        megjelenites
    })
}

