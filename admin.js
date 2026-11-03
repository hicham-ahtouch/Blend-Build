let prod_name = document.querySelector('#product-name')
let prix_base = document.querySelector("#baseprice")
let descrip = document.querySelector("#description")
let prod_img = document.querySelector("#productimage")
let promo = document.querySelector("#promotion")
let discount = document.querySelector("#discount")
let enddate = document.querySelector("#enddate")

function validateProductName() {
    let prod_name_value = prod_name.value
    let name_ver_regex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/i;

    if (!name_ver_regex.test(prod_name_value)) {
        swal({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Invalid product name!",
            showConfirmButton: false,
            timer: 2000
        });
        return false;
    }
    return true;
}
function validateBasePrice() {
    let prix_base_value = prix_base.value;
    let prix_ver_regex = /^(?:0|[1-9]\d{0,4})(?:\.\d{1,2})?$/;

    if (!prix_ver_regex.test(prix_base_value)) {
        swal({
            title: "Oooops...!",
            text: "Unvalid input!",
            icon: "error",
        });
        return false;
    }
    return true;
}

function validateDescription() {
    let descrip_value = descrip.value;
    let descrip_regex = /^([\s\S]*[a-zA-Z]+[\s\S]*)$/;

    if (!descrip_regex.test(descrip_value)) {
        swal({
            title: "Oooops...!",
            text: "Unvalid input !",
            icon: "error",
        });
        return false;
    }
    return true;
}

function validateProductImage() {
    let prod_img_value = prod_img.value;
    let img_regex = /^(https?:\/\/[^\s]+(\.(jpg|jpeg|png|gif|bmp)))$/i;

    if (!img_regex.test(prod_img_value)) {
        swal({
            title: "Oooops...!",
            text: "Unvalid input ! ",
            icon: "error",
        });
        return false;
    }
    return true;
}
function validateDiscount () {
    let discount_value = discount.value;
    let discount_regex = /^(?:[1-9]|[1-9]\d|100)$/;
    if (!discount_regex.test(discount_value)){
        swal({
           toast: true,
            position: "top-end",
            icon: "error",
            title: "Invalid discount percentage!",
            showConfirmButton: false,
            timer: 2000 
        });
        return false;
    }
    return true;
}
function validateEnddate() {
    let enddate_value = enddate.value;
    let current_date = new Date;
    if(enddate_value === "" || )
}

prod_name.addEventListener('focusout', validateProductName)
prix_base.addEventListener('focusout', validateBasePrice)
descrip.addEventListener('focusout', validateDescription)
prod_img.addEventListener('focusout', validateProductImage)