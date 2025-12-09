const adatokMegjelenitese = document.getElementById("adatokMegjelenitese") 
const autok = []

function fetching() {
  fetch("https://surveys-5jvt.onrender.com/api/cars/")
    .then((response) => {
      if (!response.ok) {
        (document.getElementById("response").textContent =
          "There was a problem with the fetch operation:"),
          error;
        throw new Error("Network response was not ok");
      }

      return response.json();
    })

    .then((data) => {
      console.log(data);
      autok.push(data)
    })

    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      (document.getElementById("response").textContent =
        "There was a problem with the fetch operation:"),
        error;
    });
}

function megjeleniteso(autok) {
  for (let i = 0; i < autok.length; i++){
    const sor = adatokMegjelenitese.insertRow()
    const id = sor.insertRow()
    const model = sor.insertRow()
    const brand = sor.insertRow()
    const year = sor.insertRow()
  }
  document.getElementById("id").textContent = adatok.id;
  document.getElementById("model").textContent = adatok.model;
  document.getElementById("brand").textContent = adatok.brand;
  document.getElementById("year").textContent = adatok.year;
}

function kereses() {
  reset();
  id = document.getElementById("autoID").value;
  fetching(id);
}
