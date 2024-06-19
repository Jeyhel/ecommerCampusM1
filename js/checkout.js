import { galleryCheckout, gallerycheckPrice } from "./components/gallery.js";
import { getProductId } from "./module/detail.js";

let checkout__details__gallery = document.querySelector(".checkout__details");


document.addEventListener("DOMContentLoaded", async (e) => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if (!sessionStorage.getItem(id)) sessionStorage.setItem(id, JSON.stringify(await getProductId({ id })));

    let info = JSON.parse(sessionStorage.getItem(id));
    checkout__details__gallery.innerHTML = await galleryCheckout();
    section__shopping__checkout.innerHTML = await gallerycheckPrice(info);

   
    let cantidadItems = 0;
    let totalPrecio = 0;

    let details__product = document.querySelectorAll (".details__product")
    details__product.forEach(value =>{

        
            let decreaseButton = value.querySelector("#decreaseQuantity");
            let increaseButton = value.querySelector("#increaseQuantity");
            let quantitySpan = value.querySelector("#quantity");
            let Totalitems = document.querySelector("#Totalitems")
            let precio = value.querySelector("#precio")
        
        
            totalPrecio += Number((precio.textContent).replace("$",""))
            cantidadItems += Number(quantitySpan.textContent);
            console.log(totalPrecio)
        
        
        
            
            decreaseButton.addEventListener('click', () => {
                let quantity = parseInt(quantitySpan.textContent);
                if (quantity > 1) {
                    quantity -= 1;
                    quantitySpan.textContent = quantity;
                
            
            cantidadItems -= 1
            totalPrecio -= Number((precio.textContent).replace("$",""))
        
            let Totalitems = document.querySelector("#Totalitems")
            Totalitems.textContent = `Total(${cantidadItems} items)`;
            let spanPrecio = document.querySelector("#spanPrecio")
            spanPrecio.textContent = totalPrecio
            let subPrecio = document.querySelector("#subPrecio")
            subPrecio.textContent = totalPrecio
            }
        });
            increaseButton.addEventListener('click', () => {
                let quantity = parseInt(quantitySpan.textContent);
                quantity += 1;
                quantitySpan.textContent = quantity;
            
            
            
                cantidadItems += 1
                totalPrecio += Number((precio.textContent).replace("$",""))
        
                let Totalitems = document.querySelector("#Totalitems")
                Totalitems.textContent = `Total(${cantidadItems} items)`;
                let spanPrecio = document.querySelector("#spanPrecio")
                spanPrecio.textContent = totalPrecio
                let subPrecio = document.querySelector("#subPrecio")
                subPrecio.textContent = totalPrecio
            });
        })
            let Totalitems = document.querySelector("#Totalitems")
            Totalitems.textContent = `Total(${cantidadItems} items)`;
            let spanPrecio = document.querySelector("#spanPrecio")
            spanPrecio.textContent = totalPrecio
            let subPrecio = document.querySelector("#subPrecio")
            subPrecio.textContent = totalPrecio
        
            updatePrice(1);
                  
        });
    

    const updatePrice = (quantity) => {
        let precioEntero = parseFloat(info.data.product_price.replace('$', ''));
        let precioTotalContent = `<span id="precioTotal">$${(quantity * precioEntero).toFixed(2)}</span>`;
        if (info.data.product_original_price !== null) {
            let precioOriginal = parseFloat(info.data.product_original_price.replace('$', ''));
            precioTotalContent += ` <del><sub>$${(quantity * precioOriginal).toFixed(2)}</sub></del>`;
        }
        precioTotal.innerHTML = precioTotalContent;
    };





                    
                    // let informationProduct = document.querySelector("#informationProduct")
                    // let LeerMasButton = document.querySelector("#leerMasOption");
                    
                    // if(LeerMasButton){
                    //     LeerMasButton.addEventListener('click', async e => {
                    //         let button = info.data.product_description;
                    //         informationProduct.textContent = button;
                    //     });
                    // };
                    
