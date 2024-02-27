const buttonSave = document.getElementById("save");
const insert = document.querySelector("div");
const input = document.querySelector("input");
const nameKey = "nameKey";
const form = document.querySelector("form");
const erase = document.getElementById("eraseLast");

const arraySavedName = [];

const save = (e) => {
  e.preventDefault();

  console.log("Array dove si salveranno i nomi: ", arraySavedName);

  const nameInserito = input.value;
  console.log("Nome inserito: ", nameInserito);

  arraySavedName.push(nameInserito);
  console.log("Array dopo che si è salvato un nome: ", arraySavedName);

  localStorage.setItem(nameKey, arraySavedName);

  //   alert("contenuto salvato");
  //   localStorage.getItem(nameKey, JSON.parse(arraySavedName));
  //   JSON.parse

  // prendere da local storage e vederli

  if (arraySavedName) {
    const datiSalvati = localStorage.getItem(nameKey);
    console.log("dati salvati local storage: ", datiSalvati);
    // trasformare local storage in array
    const newArray = datiSalvati.split(",");
    console.log("dati salvati trasformati in array, forseeee: ", newArray);
  }

  //   localStorage.removeItem("nameKey");

  // JSON.parse(savedEvents);

  if (arraySavedName) {
    const nameSaved = document.createElement("p");
    nameSaved.innerText = nameInserito;
    insert.appendChild(nameSaved);
  } else {
    console.log("ancora non esistente");
  }
};

const eraseLocal = (form) => {
  console.log("form", form);
  console.log("funziona");
  console.log(arraySavedName);
  const elimina = arraySavedName.pop();
  console.log("const elimina", elimina);
  console.log("arraySavedName", arraySavedName);

  localStorage.setItem(nameKey, arraySavedName);

  //   nameSaved.innerText = "eliminato";
};

form.addEventListener("submit", save);

erase.addEventListener("click", eraseLocal(form));
