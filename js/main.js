
import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductsName } from "./module/app.js";


let input__search = document.querySelector('#input__search');
let main__article = document.querySelector(".main__article");
let nav__url = document.querySelector(".nav__url");

addEventListener ("DOMContentLoaded", async (e) =>{
    let data = await getAllProductsName (); 
})

input__search.addEventListener ("change",async e => {
    let data = {search : e.target.value}
    input__search.value = null;

    let res = await getAllProductsName (data)
    main_article.innerHTML += galleryIndex();
    
        // let data = {search : e.target.value};
        // let  res = await getAllProductsName (data);

}); 