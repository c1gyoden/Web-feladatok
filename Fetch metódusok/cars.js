import input from "./input.js";

async function metodusValasztas() {
  const metodus = await input("Kérek egy metódust (GET / POST / DELETE): ");

  switch (metodus.toUpperCase()) {
    case "GET":
      fetchGet();
      break;
    case "POST":
      fetchPost();
      break;
    case "DELETE":
      fetchDelete();
      break;
    default:
      console.log("Helytelen metódus");
      metodusValasztas();
  }
}

function fetchGet() {
  fetch("https://surveys-5jvt.onrender.com/api/cars/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })

    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(`There was a problem with the fetch operation: `, error);
    });

  metodusValasztas();
}

async function fetchPost() {
  const model = await input("model: ");
  const brand = await input("brand: ");
  const year = await input("year: ");

  fetch("https://surveys-5jvt.onrender.com/api/cars/", {
    method: "POST",
    body: JSON.stringify({
      model: model,
      brand: brand,
      year: year,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  metodusValasztas();
}

async function fetchDelete() {
  const id = await input("id: ");

  fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok");
    })
    .then((json) => console.log(json))
    .catch((error) =>
      console.error(`There was a problem with the fetch operation:`, error),
    );

  metodusValasztas();
}

metodusValasztas();
