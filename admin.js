let prod_name = document.querySelector('#product-name')
let prix_base = document.querySelector("#baseprice")
let descrip = document.querySelector("#description")
let prod_img = document.querySelector("#productimage")
let promo = document.querySelector("#promotion")
let discount = document.querySelector("#discount")
let enddate = document.querySelector("#enddate")
let promo_fields = document.querySelector("#promotionFields")
let nextBtn1 = document.querySelector('#next1')
let FirstPage = document.querySelector('#step1')
let SecPage = document.querySelector('#step2')

enddate.addEventListener('focusout', validateEnddate);
discount.addEventListener('focusout', validateDiscount);
promo.addEventListener('change', togglePromotionFields)
prod_name.addEventListener('focusout', validateProductName)
prix_base.addEventListener('focusout', validateBasePrice)
descrip.addEventListener('focusout', validateDescription)
prod_img.addEventListener('focusout', validateProductImage)
nextBtn1.addEventListener('click', NextValidation)


// step1

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
            text: "Unvalid inserted price!",
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
    if (prod_img_value === "") {
        return true;
    }
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
function validateDiscount() {
    let discount_value = discount.value;
    let discount_regex = /^(?:[1-9]|[1-9]\d|100)$/;
    if (!discount_regex.test(discount_value)) {
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
    let current_date = new Date();
    current_date.setHours(0,0,0,0);
    let selected_date = new Date(enddate.value);
    // console.log(new Date(enddate.value));
    if (enddate_value === "" || selected_date < current_date) {
        swal({
            toast: true,
            position: "top end",
            icon: "error",
            title: "expired promtion date!",
            showConfirmButton: false,
            timer: 2000
        });
        return false;
    }
    return true;
}
// let current_date = new Date();

// console.log(current_date);

function togglePromotionFields() {
    if (promo.checked === true) {
        promo_fields.classList.remove("hidden");
    }
    else {
        promo_fields.classList.add("hidden");
    }
    // console.log(promo.checked);
}

function validatestep1() {
    if (validateProductName() === false) {
        swal({
            toast: true,
            position: "top end",
            icon: "error",
            title: "Enter a valid name!",
            showConfirmButton: false,
            timer: 2000
        });
        return false;
    }
    if (validateBasePrice() === false) {
        return false;
    }
    if (validateDescription() === false) {
        return false;
    }
    if (validateProductImage() === false) {
        return false;
    }
    if (promo.checked === true) {
        if (validateDiscount() === false) {
            return false;
        }
        if (validateEnddate() === false) {
            return false;
        }
    }
    return true;
}

function NextValidation(){
    if(validatestep1() === true){
        FirstPage.classList.add('hidden');
        SecPage.classList.remove('hidden');
    }
    else{
        swal({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Please check again ur inputs!",
            showConfirmButton: false,
            timer: 2000
        });
    }
}

// step2 
let Origin = document.querySelector("#origin");
let intensity = document.querySelector('#intensity')
let intensity_value_display = document.querySelector('#intensityValue');

Origin.addEventListener('change', validateorigin)
intensity.addEventListener('input', updateIntensityValue);



function validateorigin(){
    let origin_input = Origin.value ;
    if(origin_input === ""){
        swal({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Please choose one given choices!",
            showConfirmButton: false,
            timer: 2000
        });
        return false;
    }
    return true;
}

function updateIntensityValue(){
    intensity_value_display.textContent = intensity.value;
}