// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
  { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
  { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "cappucino.webp" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "Latte Caramel.webp" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "Mug.jpg" }
];

const coffemenu = document.getElementsByClassName("cart-product-info");
const coffepics = document.getElementsByClassName("div-de-img");
let i = 0;

for (const key in coffeeCart) {
  coffemenu[i].querySelector(".cart-product-name").textContent = coffeeCart[key].name;
  coffemenu[i].querySelector(".cart-unit-price").textContent = "prix unitaire : " + coffeeCart[key].price.toFixed(2) + " DH";
  coffemenu[i].querySelector(".cart-total").textContent = "total : " + (coffeeCart[key].price * coffeeCart[key].quantity).toFixed(2) + " DH";
  coffepics[i].querySelector(".cart-product-image").src = "/assets/" + coffeeCart[key].image;
  coffemenu[i].querySelector(".quantity-value").textContent = coffeeCart[key].quantity;
  i++;
}

const minusbtn = document.querySelectorAll(".quantity-minus");
const quantities = document.getElementsByClassName("quantity-value");
const plusbtn = document.querySelectorAll(".quantity-plus");

for (const key1 of coffeeCart) {
  const x = coffeeCart.indexOf(key1);
  // console.log(key1);

  plusbtn[x].addEventListener("click", function () {
    key1.quantity = key1.quantity + 1;
    quantities[x].textContent = key1.quantity;
    coffemenu[x].querySelector(".cart-total").textContent = "total : " + (key1.price * key1.quantity).toFixed(2) + "DH";
    // console.log(coffeeCart);
    displaytotal();
  });
  minusbtn[x].addEventListener("click", function () {
    if (key1.quantity > 1) {
      key1.quantity = key1.quantity - 1;
      quantities[x].textContent = key1.quantity;
      coffemenu[x].querySelector(".cart-total").textContent = "total : " + (key1.price * key1.quantity).toFixed(2) + "DH";
      displaytotal();
      // console.log(coffeeCart);
    }
  });
}

function calculeHT() {
  let totalHT = 0;
  for (const coffe of coffeeCart) {
    totalHT = totalHT + (coffe.price * coffe.quantity);
  }
  return totalHT;
}

function calculTVA() {
  let totalTVA = calculeHT() * 0.055;
  return totalTVA;
}
function calculeTTC() {
  let totalTTC = calculeHT() + calculTVA();
  return totalTTC;
}

function displaytotal() {
  document.querySelector(".prix-HT").textContent = calculeHT().toFixed(2) + " DH";
  document.querySelector(".prix-TVA").textContent = calculTVA().toFixed(2) + " DH";
  document.querySelector(".prix-TTC").textContent = calculeTTC().toFixed(2) + " DH";
}
displaytotal();

const showsection = document.querySelector(".paiement-section");
const btnpaiement = document.querySelector("#vers-paiement");
const hidesection = document.querySelector(".checkout-cart");
const btnmodif = document.querySelector("#modifier");

btnpaiement.addEventListener("click", function () {
  showsection.classList.toggle('hid')
  hidesection.classList.toggle('hid')
  btnmodif.classList.toggle('hid')
});
btnmodif.addEventListener("click", function () {
  hidesection.classList.toggle('hid');
  showsection.classList.toggle('hid');
  btnmodif.classList.toggle('hid');
});
const container = document.querySelector(".quick-menu")
const searchinput = document.querySelector('#searchInpt')
searchinput.addEventListener("input",function(){
  // console.log(container);
  // container.innerHTML = ""
  
  coffeeProducts.forEach(coffeprod => {
    // console.log(searchinput.value);
    // console.log(coffeprod.name);

    
    
    if(coffeprod.name.toLocaleLowerCase().includes(searchinput.value.toLocaleLowerCase())){
      container.innerHTML += `<span>${coffeprod.name}</span><br>`;
    }
    // console.log(container);
    
    if(searchinput.value.toLocaleLowerCase() === ""){
      container.innerHTML = ""
    }
  });
});
const hidequick = document.querySelector("#terminer")
const afficherQuick = document.querySelector("#Ajouter");
const quickmenu = document.querySelector(".cart-header");
// afficherQuick.addEventListener("click", function(){
//   quickmenu.classList.toggle('hid');
// })
// hidequick.addEventListener("click", function(){
//   quickmenu.classList.toggle('hid')
// })