import { galleryCategory, galleryCheckout } from "./components/gallery.js";
import { titleProductDetail } from "./components/section.js";
import { getProductId } from "./module/detail.js";
import { descripDetails } from "./components/description.js";
import { priceDetails } from "./components/price.js";
let checkout__details__gallery = document.querySelector(".details__gallery")

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!sessionStorage.getItem(id)) sessionStorage.setItem(id, JSON.stringify(await getProductId({id})));


    galleryCheckout()

    let info = JSON.parse(sessionStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);
    main__section__description.innerHTML = await descripDetails(info);
    footer__ul.innerHTML = await priceDetails(info);

    //checkout__details__gallery.innerHTML = await galleryCheckout();
    
});





// let informationProduct = document.querySelector("#informationProduct")
// let LeerMasButton = document.querySelector("#leerMasOption");

// if(LeerMasButton){
//     LeerMasButton.addEventListener('click', async e => {
//         let button = info.data.product_description;
//         informationProduct.textContent = button;
//     });
// };

