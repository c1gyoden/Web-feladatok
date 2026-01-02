const tableFejlec = document.getElementById("tableFejlec") 
const tableAdatok = document.getElementById("tableAdatok") 

function fetching(API) {
  fetch(API)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })

    .then((data) => {
      megjelenites(data);
    })

    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      document.getElementById("response").textContent = `There was a problem with the fetch operation: ${error}`
    });
}

function megjelenites(adatok) {
  tableFejlec.innerHTML = "";
  tableAdatok.innerHTML = "";

  let keys = Object.keys(adatok[0])

  let fejlecSor = tableFejlec.insertRow();
  for (let i = 0; i < keys.length; i++){
    let fejlecOszlop = fejlecSor.insertCell();
    fejlecOszlop.textContent = keys[i];
  }

  for (let i = 0; i < adatok.length; i++){
    console.log(adatok[i])
    let adatSor = tableAdatok.insertRow();

    for (let j = 0; j < keys.length; j++){
      let adatOszlop = adatSor.insertCell()
      adatOszlop.textContent = adatok[i][keys[j]]
    }
  }
}

function kivalaszt(){
  const valasztas = document.getElementById("APIvalasztas").value;
  switch (valasztas){
    case "cars": fetching("https://surveys-5jvt.onrender.com/api/cars/"); break;
    case "books": fetching("https://surveys-5jvt.onrender.com/api/books/"); break;
    case "phones": fetching("https://surveys-5jvt.onrender.com/api/phones/"); break;
    case "users": fetching("https://surveys-5jvt.onrender.com/api/users/"); break;
  }
}
