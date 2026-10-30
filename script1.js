// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpeg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flat_white.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.png" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "Cold Brew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.webp" },
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

for (const key1 of coffeeCart) {
  const x = coffeeCart.indexOf(key1);
  // console.log(key1);
  const productHTML = document.querySelectorAll(".cart-item")[x];
  connectButtons(key1, productHTML);
  // console.log(key1,productHTML)
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
function connectButtons(product, productHTML) {

  const plus = productHTML.querySelector(".quantity-plus");
  const minus = productHTML.querySelector(".quantity-minus");
  const quantity = productHTML.querySelector(".quantity-value");
  const total = productHTML.querySelector(".cart-total");

  plus.addEventListener("click", function () {
    product.quantity = product.quantity + 1;
    quantity.textContent = product.quantity;
    total.textContent = "total : " + (product.price * product.quantity).toFixed(2) + " DH";
    displaytotal();
  });
  minus.addEventListener("click", function () {
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
      quantity.textContent = product.quantity;
      total.textContent = "total : " + (product.price * product.quantity).toFixed(2) + " DH";
      displaytotal();
    }
  });
}

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
const structureHTML = `
    <div class="cart-item">
        <div class="div-de-img">
            <img class="cart-product-image" src="" alt="">
        </div>
        <div class="cart-product-info">
            <p class="cart-product-name"></p>
            <p class="cart-unit-price"></p>
            <div class="cart-quantity">
                <button type="button" class="quantity-minus">-</button>
                <span class="quantity-value"></span>
                <button type="button" class="quantity-plus">+</button>
            </div>
            <p class="cart-total"></p>
        </div>
    </div>
`;

const container = document.querySelector(".quick-menu")
const searchinput = document.querySelector('#searchInpt')
const cartTable = document.querySelector(".cart-table")
searchinput.addEventListener("input", function () {
  // console.log(container);
  container.innerHTML = ""
  coffeeProducts.forEach(coffeprod => {
    // console.log(searchinput.value);
    // console.log(coffeprod.name);
    if (coffeprod.name.toLocaleLowerCase().includes(searchinput.value.toLocaleLowerCase())) {
      const butn = document.createElement("button");
      butn.type = "button";
      butn.textContent = coffeprod.name + coffeprod.price;
      butn.addEventListener("click", function () {
        let prodexiste = false;
        for (const prod of coffeeCart) {
          if (prod.id === coffeprod.id) {
            prodexiste = true;
            // console.log(prod);

          }
        }
        if (prodexiste === true) {
          alert("this choice is already in your cart!");
        }
        else {
          coffeeCart.push ({
            id: coffeprod.id,
            name: coffeprod.name,
            price: coffeprod.price,
            quantity: 1,
            image: coffeprod.image
          });
          // console.log(newCartProduct);
          const newCartProduct = coffeeCart[coffeeCart.length - 1];
          const temp = document.createElement("div");
          temp.innerHTML = structureHTML;
          const newProduct = temp.querySelector(".cart-item");
          newProduct.querySelector(".cart-total").textContent = "total : " + (newCartProduct.price * newCartProduct.quantity).toFixed(2) + " DH";
          newProduct.querySelector(".cart-product-name").textContent = newCartProduct.name; 
          newProduct.querySelector(".cart-unit-price").textContent = "prix unitaire : " + newCartProduct.price.toFixed(2) + " DH";
          newProduct.querySelector(".cart-product-image").src = "/assets/" + newCartProduct.image;
          newProduct.querySelector(".cart-product-image").alt = newCartProduct.name
          newProduct.querySelector(".quantity-value").textContent = newCartProduct.quantity;
          // console.log(coffeeCart);
          // cartTable.appendChild(temp);
          connectButtons(newCartProduct, newProduct);
          cartTable.appendChild(newProduct);
          // console.log(newCartProduct);
          displaytotal();
        }
      });
      container.appendChild(butn);
    }
  });
});
const hidequick = document.querySelector("#terminer")
const afficherQuick = document.querySelector("#Ajouter");
const quickmenu = document.querySelector(".cart-header");
afficherQuick.addEventListener("click", function () {
  quickmenu.classList.toggle('hid');
})
hidequick.addEventListener("click", function () {
  quickmenu.classList.toggle('hid');
})


// traitement de paiement

let input_empty = /^\s*$/

let the_fullname_input = document.querySelector('.card-name')
the_fullname_input.addEventListener('focusout', ()=>{
  let input_value = the_fullname_input.value
  let name_regex = /^([a-z\d]{3 ,24})$/i ;
  if (!name_regex.test(input_value) && !input_empty.test(input_value)) {
    alert("veuillez entre une nom valid!!!")
    the_fullname_input.value = null
  }
})

let the_carte_Num = document.querySelector('.card-number')
the_carte_Num.addEventListener('focusout', () =>{
  let input_value = the_carte_Num.value
  let mastercard_cart_regex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
  let visa_cart_regex = /^4[0-9]{12}(?:[0-9]{3})?$/ ;
  if (!mastercard_cart_regex.test(input_value) && !visa_cart_regex.test(input_value) && !nothing.test(input_value)) {
    alert("entrer-vous une Carte de credit nombre valid!!!")
    the_carte_Num.value = null
  }
})