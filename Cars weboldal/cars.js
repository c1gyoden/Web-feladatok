const autokListaja = document.getElementById("autokListaja")
const autoAdatok = document.getElementById("autoAdatok")
const ujAutoModel = document.getElementById("ujAutoModel")
const ujAutoBrand = document.getElementById("ujAutoBrand")
const ujAutoYear = document.getElementById("ujAutoYear")
const ujAutoHozzaadasaBtn = document.getElementById("ujAutoHozzaadasaBtn")

function fetchGet() {
    fetch("https://surveys-5jvt.onrender.com/api/cars/")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network connection was not ok.")
            }
            return response.json()
        })
        .then(cars => {
            cars.forEach(car => {
                displayCarModel(car)
            });

        })
        .catch(error => {
            console.error(`There was an error with the fetch get operation.`, error)
        })
}


function displayCarModel(car) {
    const kartya = `<div class="card" onclick="showCarDetails(${car.id})">${car.model}</div>`
    autokListaja.innerHTML += kartya
}

function showCarDetails(id) {
        fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network connection was not ok.")
            }
            return response.json()
        })
        .then(car => {
            const reszletek = `<p>Id: ${car.id}</p><p>Model: ${car.model}</p><p>Brand: ${car.brand}</p><p>Year: ${car.year}</p>`
            autoAdatok.innerHTML = reszletek
        })
        .catch(error => {
            console.error(`There was an error with the fetch get operation.`, error)
        })
}

ujAutoHozzaadasaBtn.click("click", () => {
    fetch("https://surveys-5jvt.onrender.com/api/cars/", {
        method: "POST",
        body: JSON.stringify({
            model: ujAutoModel.value,
            brand: ujAutoBrand.value,
            year: ujAutoYear.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))

        autokListaja.innerHTML = "";
        fetchGet()
})
    
fetchGet()