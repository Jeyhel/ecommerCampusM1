import { galleryCategory, galleryCheckout, gallerycheckPrice } from "./components/gallery.js";
import { titleProductDetail } from "./components/section.js";
import { getProductId } from "./module/detail.js";
import { descripDetails } from "./components/description.js";
import { priceDetails } from "./components/price.js";

let checkout__details__gallery = document.querySelector(".checkout__details");
let precioTotal = document.querySelector("#precioTotal");

document.addEventListener("DOMContentLoaded", async (e) => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if (!sessionStorage.getItem(id)) sessionStorage.setItem(id, JSON.stringify(await getProductId({ id })));

    let info = JSON.parse(sessionStorage.getItem(id));

    checkout__details__gallery.innerHTML = await galleryCheckout();
    section__shopping__checkout.innerHTML = await gallerycheckPrice(info);

    let decreaseButton = document.querySelector("#decreaseQuantity");
    let increaseButton = document.querySelector("#increaseQuantity");
    let quantitySpan = document.querySelector("#quantity");

    const updatePrice = (quantity) => {
        let precioEntero = parseFloat(info.data.product_price.replace('$', ''));
        let precioTotalContent = `<span id="precioTotal">$${(quantity * precioEntero).toFixed(2)}</span>`;
        if (info.data.product_original_price !== null) {
            let precioOriginal = parseFloat(info.data.product_original_price.replace('$', ''));
            precioTotalContent += ` <del><sub>$${(quantity * precioOriginal).toFixed(2)}</sub></del>`;
        }
        precioTotal.innerHTML = precioTotalContent;
    };

    decreaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
            quantity -= 1;
            quantitySpan.textContent = quantity;
            updatePrice(quantity);
        }
    });

    increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantitySpan.textContent);
        quantity += 1;
        quantitySpan.textContent = quantity;
        updatePrice(quantity);
    });

    updatePrice(1);  // Inicializa el precio con la cantidad inicial
});


                    
                    // let informationProduct = document.querySelector("#informationProduct")
                    // let LeerMasButton = document.querySelector("#leerMasOption");
                    
                    // if(LeerMasButton){
                    //     LeerMasButton.addEventListener('click', async e => {
                    //         let button = info.data.product_description;
                    //         informationProduct.textContent = button;
                    //     });
                    // };
                    
