tablazatAdatok = document.getElementById("tablazatAdatok");
adatokMegjelenitese = document.getElementById("adatokMegjelenitese");

fetch("https://surveys-5jvt.onrender.com/api/cars/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      adatHozzaadasa(data[i]);
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function adatHozzaadasa(elem) {
  let kartya = '<div class="card">';
  kartya += `<p>id: ${elem.id}<p>`;
  kartya += `<p>model: ${elem.model}<p>`;
  kartya += `<p>brand: ${elem.brand}<p>`;
  kartya += `<p>year: ${elem.year}<p>`;

  adatokMegjelenitese.innerHTML += kartya;
}
