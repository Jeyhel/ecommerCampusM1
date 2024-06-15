export const descripDetails = async({data: dataUpdate} = res) => {
    let createDescripHTML = async() => {
        let description = await dataUpdate.product_description;
        let trunDescription = description;
    
        if (description.length > 150) {
            trunDescription = description.substring(0, 150) + '... <strong id = "leerMasOption"> Leer más.</strong>';
        }
        return `${trunDescription}`;
        
    }
    
    return /*html*/`
    <article class="product__information">
        <p id = "informationProduct">${await createDescripHTML()}</p>
    </article>
    `
};