
let displayPrice = document.getElementById("total-price");


const config = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};
// document.getElementById("espresso-name").textContent = config.base.espresso.name;
// document.getElementById("espresso-price").innerHTML = config.base.espresso.price.toFixed(2) + "DH";
// function afficheroptions(cle,option){
// document.getElementById(cle+"-name").textContent = option.name;
// document.getElementById(cle+"-name").textContent = option.price.toFixed(2) + "DH";
// }
const options = document.getElementsByClassName('form-options')
let i = 0;
for (const key in config) {
  for (const key1 in config[key]) {
    options[i].querySelector('label').innerHTML = config[key][key1].name;
    options[i].querySelector('p').innerHTML = config[key][key1].price.toFixed(2) + "DH";
    i++;
  }
}
function annoncerOption(option) {
  // alert("Choix : " + option.name)
}
for (const key in config) {
  for (const key2 in config[key]) {
    const input = document.getElementById(key2);
    input.addEventListener("click", function () {
      annoncerOption(config[key][key2]);

    })
  }
}
const selectedConfig = {
  base: null,
  taille: null,
  lait: null,
  caramel: null,
  vanille: null
};

// function calculertotal() {
//   let total = 0;
//   for (const key3 in selectedConfig) {
//     if (selectedConfig[key3] !== null) {
//       total = total + selectedConfig[key3];
//       total= 0;
//     }
//   }
//   console.log(total);
//   document.getElementById("total-price").innerHTML = total.toFixed(2) + " DH";
// }

// calculertotal();

document.addEventListener("DOMContentLoaded", optionSubscribe)

function optionSubscribe() {

  const inputs = document.querySelectorAll("input");
  inputs.forEach(inp => {
    inp.addEventListener("change", ticket);
  })
}
let totalPrice = 0;
let ticketOptions = [];
function ticket(event) {

  let targetInput = event.target;
  let isChecked = targetInput.checked;

  if (targetInput.type == "radio") {
    let group = document.querySelectorAll(` input[name="${targetInput.name}"]`);

    group.forEach(radio => {

      if (!radio.checked && ticketOptions.includes(radio)) {
        ticketOptions.splice(ticketOptions.indexOf(radio), 1);
        totalPrice -= Number(radio.dataset.price);
      }

    });
  }


  if (isChecked && !ticketOptions.includes(targetInput)) {
    ticketOptions.push(targetInput);
    totalPrice += Number(targetInput.dataset.price);
  }

  if (!isChecked && ticketOptions.includes(targetInput)) {
    ticketOptions.splice(ticketOptions.indexOf(targetInput), 1);
    totalPrice -= Number(targetInput.dataset.price);
  }
  displayPrice.innerText = `${totalPrice}DH`;
}