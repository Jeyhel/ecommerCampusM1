
export const galleryIndex = (res, category)=>{
    let {products} = res.data
    let plantilla = "";
    products.forEach((value,index) => {
        plantilla += /*html*/`
            <section>
            <div class="section__front_page">
                <a href="views/detail.html?id=${value.asin}">
                    <img src="${value.product_photo}">
                </a>
                <img src="storage/img/heart.svg">
            </div>
            <h5>${value.product_title}</h5>
            <small>${category}</small>
            <div class="section__price">
                <span>${value.product_price}</span>
                <div  class="price__score">
                    <img src="storage/img/star.svg">
                    <p>${(value.product_star_rating!=null) ? value.product_star_rating : 0}</p>
                    </div>
                    </div>
                    </section>
                    
                    `;
                });
                return plantilla
}


export const galleryCategory = ({data: {product_photos}} = res)=>{
    return /*html*/`
        <article class="article__product">
            <div class="product__image">
            ${product_photos.map(value => `<div class="product__image__item"><img src="${value}"></div>`).join('')}
            </div>
            <div class="product__menu">
                <a href="../">
                    <img src="../storage/img/back.svg">
                </a>
                <img src="../storage/img/heartBlack.svg">
            </div>
        </article>`;
}


export const galleryCheckout = async()=>{
    let keys = Object.keys(sessionStorage)
    let plantilla = "";
    keys.forEach(key=>{
        let diccionarios = JSON.parse(sessionStorage.getItem(key));
        console.log(diccionarios)
        if(diccionarios.holi){
            let value = diccionarios.data;
            plantilla += /*html*/`
            <article class="details__product">
            <div class="product__imagen">
               <img src="${value.product_photo}">
            </div>
            <div class="product__description">
                <h3>${(value.product_title).substring(0, 15)}...</h3>
                <small>⭐ ${value.product_star_rating ? value.product_star_rating : "*No Ratings*"}</small>
                <span id ="precio">${value.product_price}</span>
            </div>
            <div class="product__custom">
                <img src="../storage/img/option.svg">
                <div id = "precio" class="product__select">
                <img src="../storage/img/minus.svg" id= "decreaseQuantity">
                <span id ="quantity">1</span>
                <img src="../storage/img/plus.svg" id= "increaseQuantity">
            </div>
        </div>
        </article>`;
        };
    })
return plantilla;
}


export const gallerycheckPrice = ({data: dataUpdate} = res) => {
    return /*html*/`
<article class="section__bill">
<div class="bill__total">
    <label id= "Totalitems">(9 items)</label>
    <span id ="spanPrecio"> $131.97</span>
</div>
<div class="bill__fee">
    <label> shoppping free</label>
    <span> $00.00</span>
</div>
<div class="bill__subtotal">
    <label> Sub Total</label>
    <span id= "subPrecio">$131.97</span>
</div>
</article>`;
}
