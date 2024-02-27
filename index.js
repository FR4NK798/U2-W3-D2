const buttonSave = document.getElementById("save");
const insert = document.querySelector("div");
const input = document.querySelector("input");
const nameKey = "nameKey";
const form = document.querySelector("form");
const erase = document.getElementById("eraseLast");
const h3 = document.querySelector("h3");

// const arraySavedName = [];

const save = (e) => {
  e.preventDefault();

  //   console.log("Array dove si salveranno i nomi: ", arraySavedName);

  const nameInserito = input.value;
  console.log("Nome inserito: ", nameInserito);

  //   arraySavedName.push(nameInserito);
  //   console.log("Array dopo che si è salvato un nome: ", arraySavedName);

  localStorage.setItem(nameKey, nameInserito);

  //   alert("contenuto salvato");
  //   localStorage.getItem(nameKey, JSON.parse(arraySavedName));
  //   JSON.parse

  // prendere da local storage e vederli

  //   if (nameInserito) {
  //     const datiSalvati = localStorage.getItem(nameKey);
  //     console.log("dati salvati local storage: ", datiSalvati);
  // trasformare local storage in array
  //     const newArray = datiSalvati.split(",");
  //     console.log("dati salvati trasformati in array, forseeee: ", newArray);
  //   }

  //   localStorage.removeItem("nameKey");

  // JSON.parse(savedEvents);

  //   if (arraySavedName) {
  //     const nameSaved = document.createElement("p");
  //     nameSaved.innerText = nameInserito;
  //     insert.appendChild(nameSaved);
  //   } else {
  //     console.log("ancora non esistente");
  //   }

  rivela();
};

window.onload = () => {
  rivela();
};

const rivela = () => {
  const datoSalvato = localStorage.getItem(nameKey);
  console.log(datoSalvato);
  if (datoSalvato) {
    h3.innerText = datoSalvato;
  } else {
    h3.innerText = "";
  }
};

const eraseLocal = () => {
  localStorage.removeItem(nameKey);
  rivela();
};

form.addEventListener("submit", save);

erase.addEventListener("click", eraseLocal);
