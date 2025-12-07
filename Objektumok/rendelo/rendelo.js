const nev = document.getElementById("nev")
const email = document.getElementById("email")
const telefon = document.getElementById("telefon")
const szolgaltatas = document.getElementById("szolgaltatas")
const datum = document.getElementById("datum")
const ido = document.getElementById("ido")
const hozzaad = document.getElementById("hozzaad")
const tablazatbody = document.getElementById("tablazatbody")

let foglalasok = []
if (localStorage.getItem("foglalasok") != null){
    foglalasok = JSON.parse(localStorage.getItem("foglalasok"))
}
Frissites()

hozzaad.addEventListener("click", () => {
    const foglaltIdk = foglalasok.map(f => f.id)
    szabadId = -1
    szamlalo = 0
    do{
        if (!foglaltIdk.includes(szamlalo)){
            szabadId = szamlalo
        }
        szamlalo++
    } while (szabadId == -1)

        const foglalas = {
        id: szabadId,
        nev: nev.value,
        email: email.value,
        telefon: telefon.value,
        szolgaltatas: szolgaltatas.options[szolgaltatas.selectedIndex].innerHTML,
        datum: datum.value,
        ido: ido.value
    }

    foglalasok.push(foglalas)
    Frissites()
})

function Megjelenites(){
    tablazatbody.innerHTML = ""
    foglalasok.forEach(f => {
       const sor = tablazatbody.insertRow()
       const fogId = sor.insertCell() 
       const fogNev = sor.insertCell()
       const fogEmail = sor.insertCell()
       const fogTelefon = sor.insertCell()
       const fogSzolgaltatas = sor.insertCell()
       const fogDatum = sor.insertCell()
       const fogIdo = sor.insertCell()
       const fogTorles = sor.insertCell()
       const fogModositas = sor.insertCell()

       fogId.textContent = f.id
       fogNev.textContent = f.nev
       fogEmail.textContent = f.email
       fogTelefon.textContent = f.telefon
       fogSzolgaltatas.textContent = f.szolgaltatas
       fogDatum.textContent = f.datum
       fogIdo.textContent = f.ido
       fogTorles.innerHTML = `<button onclick="Torles(${f.id})">Törlés</button>`
       fogModositas.innerHTML = `<button onclick="Modositas(${f.id})">Módosítás</button>`
    })
}
function Torles(id){
    const index = foglalasok.indexOf(foglalasok.find(f => f.id == id))
    foglalasok.splice(index, 1)
    Frissites()
}

function Modositas(id){
    const foglalas = foglalasok.find(f => f.id == id)
        foglalas.nev = nev.value,
        foglalas.email = email.value,
        foglalas.telefon = telefon.value,
        foglalas.szolgaltatas = szolgaltatas.options[szolgaltatas.selectedIndex].innerHTML,
        foglalas.datum = datum.value,
        foglalas.ido = ido.value
        Frissites()
}

function Rendezes(){
    foglalasok.sort((a,b) => a.id - b.id)
}
function Frissites(){
    Rendezes()
    Megjelenites()
    localStorage.setItem("foglalasok", JSON.stringify(foglalasok))
}


