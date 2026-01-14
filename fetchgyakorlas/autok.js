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
  let kartya = '<div class="card col-sm-12 col-md-6 col-lg-3 h-auto">';
  kartya += `<img class="card-img-top mt-2" src="images/${elem.brand}.jpg">`;
  kartya += `<div class="text-center mt-1 h-auto">`
  kartya += `<h5 class="card-title"><b>${elem.brand} ${elem.model}</b></h5>`;
  kartya += `<p><i>(${elem.year})</i></p>`;
  kartya += `</div>`;
  kartya += `<p class="text-end ">${elem.id}</p>`;
  
  kartya += `</div>`;

  adatokMegjelenitese.innerHTML += kartya;
}
