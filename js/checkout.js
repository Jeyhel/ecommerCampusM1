import { galleryCategory, galleryCheckout } from "./components/gallery.js";
import { titleProductDetail } from "./components/section.js";
import { getProductId } from "./module/detail.js";
import { descripDetails } from "./components/description.js";
import { priceDetails } from "./components/price.js";

let checkout__details__gallery = document.querySelector(".checkout__details")

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!sessionStorage.getItem(id)) sessionStorage.setItem(id, JSON.stringify(await getProductId({id})));
    
    let info = JSON.parse(sessionStorage.getItem(id));
    // main__section_gallery.innerHTML = await galleryCategory(info);
    // main__section__title.innerHTML = await titleProductDetail(info);
    // main__section__description.innerHTML = await descripDetails(info);


    checkout__details__gallery.innerHTML = await galleryCheckout();
    
});



let decreaseButton = document.querySelector("#decreaseQuantity");
let increaseButton = document.querySelector("#increaseQuantity");
let quantitySpan = document.querySelector("#quantity");
let precioTotal = document.querySelector("#precioTotal")

decreaseButton.addEventListener('click', async e => {
    let quantity = parseInt(quantitySpan.textContent);
if (info.data.product_price !==  null) {
    let precioentero = parseFloat(info.data.product_price.replace('$',''))
    if (info.data.product_original_price !== null){
        let precioOriginal = parseFloat(info.data.product_original_price.replace('$',''));
        if(quantity > 1){
            quantitySpan.textContent = quantity - 1;
        quantity = parseInt(quantitySpan.textContent);
        precioTotal.innerHTML =/*html*/`
            <span id= "precioTotal" >Add to Cart $${quantity * precioentero}<del><sub>$${quantity * precioOriginal}</sub></del></span>
            `}
        }else{
            if(quantity > 1){
                quantitySpan.textContent = quantity - 1;
                quantity = parseInt(quantitySpan.textContent);
                precioTotal.innerHTML = /*html*/`
                <span id= "precioTotal">Add to Cart $${quantity * precioentero}</span>
                `}
            }
        }else {
            if(quantity > 1){
                quantitySpan.textContent = quantity - 1;
            };}
        });
        
        
        
        increaseButton.addEventListener('click', async e => {
            let quantity = parseInt(quantitySpan.textContent);
            if (info.data.product_price !==  null) {
                let precioentero = parseFloat(info.data.product_price.replace('$',''))
                if (info.data.product_original_price !== null){
                    let precioOriginal = parseFloat(info.data.product_original_price.replace('$',''));
                    quantitySpan.textContent = quantity + 1;
                    quantity = parseInt(quantitySpan.textContent);
                    precioTotal.innerHTML =/*html*/`
                    <span id= "precioTotal" >Add to Cart $${quantity * precioentero}<del><sub>$${quantity * precioOriginal}</sub></del></span>
                    `}else{
                        quantitySpan.textContent = quantity + 1;
                        quantity = parseInt(quantitySpan.textContent);
                        precioTotal.innerHTML = /*html*/`
                        <span id= "precioTotal">Add to Cart $${quantity * precioentero}</span>
                        `}
                    }else return quantitySpan.textContent = quantity + 1;
});

                    
                    // let informationProduct = document.querySelector("#informationProduct")
                    // let LeerMasButton = document.querySelector("#leerMasOption");
                    
                    // if(LeerMasButton){
                    //     LeerMasButton.addEventListener('click', async e => {
                    //         let button = info.data.product_description;
                    //         informationProduct.textContent = button;
                    //     });
                    // };
                    
