function fetching(id) {
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
      console.log(data[id - 1]);
      megjelenites(data[id - 1]);
    })

    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      (document.getElementById("response").textContent =
        "There was a problem with the fetch operation:"),
        error;
    });
}

function megjelenites(adatok) {
  document.getElementById("id").textContent = adatok.id;
  document.getElementById("model").textContent = adatok.model;
  document.getElementById("brand").textContent = adatok.brand;
  document.getElementById("year").textContent = adatok.year;
}

function reset() {
  document.getElementById("id").textContent = "";
  document.getElementById("model").textContent = "";
  document.getElementById("brand").textContent = "";
  document.getElementById("year").textContent = "";
  document.getElementById("response").textContent = "";
}

function kereses() {
  reset();
  id = document.getElementById("autoID").value;
  fetching(id);
}
