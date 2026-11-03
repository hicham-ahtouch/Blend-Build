let prod_name = document.querySelector('#product-name')
let prix_base = document.querySelector("#baseprice")
let descrip = document.querySelector("#description")
let prod_img = document.querySelector("#productimage")
let promo = document.querySelector("#promotion")

prod_name.addEventListener('focusout', () => {
    let prod_name_value = prod_name.value
    let name_ver_regex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/i;
    if (!name_ver_regex.test(prod_name_value)) {
        swal({
            title: "Oooops....",
            text: "Unvalid input!",
            icon: "error",
        });
    }
});
prix_base.addEventListener('focusout', () => {
    let prix_base_value = prix_base.value;
    let prix_ver_regex = /^(?:0|[1-9]\d{0,4})(?:\.\d{1,2})?$/;
    if (!prix_ver_regex.test(prix_base_value)) {
        swal({
            title: "Oooops...!",
            text: "Unvalid input!",
            icon: "error",
        });
    }
});

descrip.addEventListener('focusout', () => {
    let descrip_value = descrip.value ;
    let descrip_regex = /^([\s\S]*[a-zA-Z]+[\s\S]*)$/;
    if(!descrip_regex.test(descrip_value)) {
        swal({
            title : "Oooops...!",
            text : "Unvalid input !",
            icon : "error",
        });
    }
});

prod_img.addEventListener('focusout', () => {
    let prod_img_value = prod_img.value;
    let img_regex = /^(https?:\/\/[^\s]+(\.(jpg|jpeg|png|gif|bmp)))$/i;
    if(!img_regex.test(prod_img_value)){
        swal({
            title : "Oooops...!",
            text : "Unvalid input ! ", 
            icon : "error",
        });
    }
});

// promo.addEventListener('focusout', () => {
//     let prod_promo_value = promo.value;
//     let promo_regex = 
// })