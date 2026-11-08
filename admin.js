let product = {
    name: "",
    price: "",
    description: "",
    image: "",
    promotion: false,
    discount: "",
    enddate: "",
    temperature: "",
    tailles: "",
    Origin: "",
    intensity: "",
    milk: "",
    supplements: []
};

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
let ThirdPage = document.querySelector("#step3");

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
    current_date.setHours(0, 0, 0, 0);
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

function NextValidation() {
    if (validatestep1() === true) {
        collectStep1Data();
        console.log(product);
        FirstPage.classList.add('hidden');
        SecPage.classList.remove('hidden');
    }
    else {
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

function collectStep1Data() {
    product.name = prod_name.value;
    product.price = prix_base.value;
    product.description = descrip.value
    product.image = prod_img.value;
    product.promotion = promo.checked;
    if (promo.checked === true) {
        product.discount = discount.value;
        product.enddate = enddate.value;
    }
    else {
        product.discount = "";
        product.enddate = "";
    }
}


// step2 

let Origin = document.querySelector("#Origin");
let intensity = document.querySelector('#intensity')
let intensity_value_display = document.querySelector('#intensityValue');
let hot = document.querySelector("#hot");
let iced = document.querySelector("#iced");
let small = document.querySelector('#small')
let medium = document.querySelector('#medium')
let large = document.querySelector('#large')
let cowmilk = document.querySelector('#cowmilk')
let oatmilk = document.querySelector('#oatmilk')
let soymilk = document.querySelector('#soymilk')
let almondmilk = document.querySelector('#almondmilk')
let vanilla = document.querySelector("#vanilla")
let caramel = document.querySelector("#caramel");
let noisette = document.querySelector("#noisette")
let nextBtn2 = document.querySelector("#next2");
let previousBtn1 = document.querySelector("#previous1");


Origin.addEventListener('change', validateorigin)
intensity.addEventListener('input', updateIntensityValue);
nextBtn2.addEventListener("click", NextValidation2);
previousBtn1.addEventListener("click", PreviousStep1);




function validateorigin() {
    let origin_input = Origin.value;
    if (origin_input === "") {
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

function updateIntensityValue() {
    intensity_value_display.textContent = intensity.value;
}

function validateTemperature() {
    if (hot.checked === false && iced.checked === false) {
        swal({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Please select one of the temperature!",
            showConfirmButton: false,
            timer: 2000
        });
        return false;
    }
    return true;
}

function validateTailles() {
    if (small.checked === true && medium.checked === false && large.checked === false) {
        return true;
    }
    else if (small.checked === false && medium.checked === true && large.checked === false) {
        return true;
    }
    else if (small.checked === false && medium.checked === false && large.checked === true) {
        return true;
    }
    else {
        swal({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Please select one taille!",
            showConfirmButton: false,
            timer: 2000
        });
    }
    return false;
}

function validateMilk() {
    let selectedMilk = [];

    if (cowmilk.checked === true) {
        selectedMilk.push(cowmilk.value);
    }

    if (oatmilk.checked === true) {
        selectedMilk.push(oatmilk.value);
    }

    if (soymilk.checked === true) {
        selectedMilk.push(soymilk.value);
    }

    if (almondmilk.checked === true) {
        selectedMilk.push(almondmilk.value);
    }

    if (selectedMilk.length !== 1) {
        swal({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Please select only one milk option!",
            showConfirmButton: false,
            timer: 2000
        });
        return false;
    }
    // console.log(selectedMilk)
    return true;
}
function collectSupplementsData() {
    product.supplements = [];

    if (vanilla.checked === true) {
        product.supplements.push(vanilla.value);
    }

    if (caramel.checked === true) {
        product.supplements.push(caramel.value);
    }
    if (noisette.checked === true) {
        product.supplements.push(noisette.value);
    }
}

function validatestep2() {
    if (validateorigin() === false) {
        return false;
    }

    if (validateTemperature() === false) {
        return false;
    }

    if (validateTailles() === false) {
        return false;
    }

    if (validateMilk() === false) {
        return false;
    }

    return true;
}
function collectStep2Data() {
    product.Origin = Origin.value;
    product.intensity = intensity.value;

    if (hot.checked === true) {
        product.temperature = hot.value;
    }
    else if (iced.checked === true) {
        product.temperature = iced.value;
    }
    if (small.checked === true) {
        product.tailles = small.value;
    }

    else if (medium.checked === true) {
        product.tailles = medium.value;
    }
    else if (large.checked === true) {
        product.tailles = large.value;
    }

    if (cowmilk.checked === true) {
        product.milk = cowmilk.value;
    }
    else if (oatmilk.checked === true) {
        product.milk = oatmilk.value;
    }
    else if (soymilk.checked === true) {
        product.milk = soymilk.value;
    }
    else if (almondmilk.checked === true) {
        product.milk = almondmilk.value;
    }

    collectSupplementsData();
}
function NextValidation2() {
    if (validatestep2() === true) {
        collectStep2Data();
        displayProductPreview();

        SecPage.classList.add("hidden");
        ThirdPage.classList.remove("hidden");
    }
    else {
        swal({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Please check your inputs again!",
            showConfirmButton: false,
            timer: 2000
        });
    }
}
function PreviousStep1() {
    SecPage.classList.add("hidden");
    FirstPage.classList.remove("hidden");
}

//step3

function displayProductPreview() {
    ThirdPage.innerHTML = "";

    let previewTitle = document.createElement("h2");
    previewTitle.textContent = "Product Preview";
    ThirdPage.appendChild(previewTitle)

    let previousBtn2 = document.createElement("button");
    previousBtn2.type = "button";
    previousBtn2.textContent = "Previous";
    ThirdPage.appendChild(previousBtn2);


    previousBtn2.addEventListener("click", function () {
        ThirdPage.classList.add("hidden")
        SecPage.classList.remove("hidden")
    });


    let submitBtn = document.createElement("button");
    submitBtn.type = "button";
    submitBtn.textContent = "SUBMIT";
    ThirdPage.appendChild(submitBtn);

    submitBtn.addEventListener("click", function () {
        swal({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Product created successfully!",
            showConfirmButton: false,
            timer: 2000
        });
    });


    let productPreview = document.createElement("div")
    ThirdPage.appendChild(productPreview)


    let productImage = document.createElement("img")
    productPreview.appendChild(productImage);

    let productName = document.createElement("h2")
    productPreview.appendChild(productName);

    let productDescription = document.createElement("p")
    productPreview.appendChild(productDescription)

    let productPrice = document.createElement("p")
    productPreview.appendChild(productPrice)


    productImage.src = product.image;
    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = product.price;


    let productSpecifications = document.createElement("div")

    let productPromotion = document.createElement("p");
    if (product.promotion === true) {
        productPromotion.textContent = product.discount + "%";
        productPreview.appendChild(productPromotion);
    }


    let specificationsTitle = document.createElement("h3")
    specificationsTitle.textContent = "Product specifications"
    productSpecifications.appendChild(specificationsTitle);


    let productOrigin = document.createElement("p");
    productOrigin.textContent = "Origin: " + product.Origin;

    let productIntensity = document.createElement("p");
    productIntensity.textContent = "Intensity: " + product.intensity;

    let productTemperature = document.createElement("p");
    productTemperature.textContent = "Temperature: " + product.temperature;

    let productSize = document.createElement("p");
    productSize.textContent = "Size: " + product.tailles;

    let productMilk = document.createElement("p");
    productMilk.textContent = "Milk: " + product.milk;

    let productSupplements = document.createElement("p")
    productSupplements.textContent = "Supplements:";
    for (let i = 0; i < product.supplements.length; i++) {

        productSupplements.textContent += product.supplements[i] + " ";
    }


    productSpecifications.appendChild(productOrigin)
    productSpecifications.appendChild(productIntensity)
    productSpecifications.appendChild(productTemperature)
    productSpecifications.appendChild(productSize)
    productSpecifications.appendChild(productMilk);
    productSpecifications.appendChild(productSupplements)
    productPreview.appendChild(productSpecifications)
}