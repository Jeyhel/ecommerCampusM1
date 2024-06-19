
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
    keys.forEach(key=>{
        let asdasd = JSON.parse(sessionStorage.getItem(key))
        console.log(asdasd)
        
    })
    return /*html*/`
    <article class="details__product">
    <div class="product__imagen">
       <img src="${"a"}">
    </div>
    <div class="product__description">
        <h3>${value.product_title}</h3>
        <small>${category}</small>
        <span>$212.99</span>
    </div>
    <div class="product__custom">
        <img src="../storage/img/option.svg">
        <div class="product__select">
        <img src="../storage/img/minus.svg" id= "decreaseQuantity">
        <span id ="quantity">1</span>
        <img src="../storage/img/plus.svg" id= "increaseQuantity">
    </div>
</div>
<div class="detail__score">
    ${new Array(parseInt(dataUpdate.product_star_rating)).fill(`<img src="../storage/img/star.svg">`).join('')}
    <span>${dataUpdate.product_star_rating}</span>
    <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
</div>
</article>`;
}