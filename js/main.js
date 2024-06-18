import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName, getAllCategory } from "./module/app.js";
import { getAllInicio } from "./module/app.js";

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");
let nav__ul = document.querySelector(".nav__ul");

addEventListener("DOMContentLoaded", async e=>{
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    nav__ul.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));  
    let res = await getAllInicio()
    main__article.innerHTML = galleryIndex (res,"fashion")
    
})


input__search.addEventListener("change", async e => {
    let params = new URLSearchParams(location.search);
    let data = { search : e.target.value, id: params.get('id')}
    input__search.value = null;
    let res = await getAllProductName(data)
    main__article.innerHTML = galleryIndex(res, params.get('id'));

});
    
    // addEventListener("DOMContentLoaded", async e =>{
        //     let data = await getAllCategory();
        //     nav__ul.innerHTML = await menuListCategoryIndex(data);  
        

        
        // let searchProducts = async e => {
        
        //     let params = new URLSearchParams(location.search);
        //     let dataSearch = { search : e.target.value, id: params.get('id')}
        //     input__search.value = null;
        //     let res = ""
        //     if(input__search.dataset.opc == "random"){
        //         res = await getAllProductRandom({})
        //         delete input__search.dataset.opc
        //         history.pushState(null, "", "?id=aps");
        //         console.log(dataSearch);
        //     }
        //     else {
        //         res = await getAllProductName(dataSearch)
        //         console.log(dataSearch);
        //     }
        //     console.log(res);
        //     main__article.innerHTML = galleryIndex(res, params.get('id'));
        
        //     let {data: {products}} = res;
        //     let asin = products.map(value => {return {id: value.asin}});
        
        //     let proceso = new Promise(async(resolve, reject)=>{
        //         for (let i = 0; i < asin.length; i++) {
        //             if(localStorage.getItem(asin[i].id)) continue;
        //             let data = await getProductId(asin[i])
        //             localStorage.setItem(asin[i].id, JSON.stringify(data))
        //         }
        //         resolve({message: "Datos buscados correctamente" });
        //     })
        //     Promise.all([proceso]).then(res => {console.log(res);})
        
        // }
// })