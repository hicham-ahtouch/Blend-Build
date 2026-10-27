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
for (const key in coffeeCart ) {
      coffemenu[i].querySelector(".cart-product-name").textContent = coffeeCart[key].name;
      coffemenu[i].querySelector(".cart-unit-price").textContent = "prix unitaire : " + coffeeCart[key].price.toFixed(2) + " DH";
      coffemenu[i].querySelector(".cart-total").textContent = "total : " + (coffeeCart[key].price * coffeeCart[key].quantity).toFixed(2) + " DH";
      coffepics[i].querySelector(".cart-product-image").src = "/assets/" + coffeeCart[key].image;
      i++;
}
const minusbtn = document.getElementsByClassName("quantity-minus");
const quantities = document.getElementsByClassName("quantity-value");
const plusbtn = document.getElementsByClassName("quantity-plus");
for (const key in coffeeCart){
  const i = coffeeCart.indexOf(key);
  plusbtn[i].addEventListener("click", function(){
    key.quantity = key.quantity + 1 ;
    quantities[i].textContent = key.quantity;
    coffemenu[i].querySelector(".cart-total").textContent = "total : " + (key.price * key.quantity).toFixed(2) + "DH";
  });
  minusbtn[i].addEventListener("click" , function(){
    key[i].quantity = key[i].quantity - 1;
    quantities[i].textContent = key.quantity;
    coffemenu[i].querySelector(".cart-total").textContent = "total : " + (key.price * key.quantity).toFixed(2) + "DH";
  })
}