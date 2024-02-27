const buttonSave = document.getElementById("save");
const insert = document.querySelector("div");
const input = document.querySelector("input");
const nameKey = "nameKey";
const form = document.querySelector("form");
const erase = document.getElementById("eraseLast");
const h3 = document.querySelector("h3");

const save = (e) => {
  e.preventDefault();

  const nameInserito = input.value;
  console.log("Nome inserito: ", nameInserito);

  localStorage.setItem(nameKey, nameInserito);

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
