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
function afficheroptions(cle,option){
    document.getElementById(cle+"-name").textContent = option.name;
    // document.getElementById(cle+"-name").textContent = option.price.toFixed(2) + "DH";
}
afficheroptions("filtre",config.base.filtre);