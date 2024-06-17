import { headers } from "../components/env.js";

export const getAllProductName = async({search:text, id:idCategory})=>{
    console.log("Cargando dato.......");
    console.log(text, idCategory); 
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&sort_by=RELEVANCE&category_id=${idCategory}&product_condition=ALL`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}

export const getAllCategory = async()=>{
    console.log("Esperando .......");
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-category-list?country=US`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}

export const getAllProductRandom = async ()=>({
    query="blush",
    page="2",
    category_id="make up",
    min_price=100,
    max_price=300,
    brand=["rare beauty", "dior", "chanel"]})=>{
    console.log ("Cargando dato.........");
    page = Math.random()*(page/20);
    page = parseInt(Math.round(page));
    if(!page) page = 1;
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}blush&page${page}=2&country=US&sort_by=RELEVANCE&category_id=${category_id}make%20up&min_price=${min_price}100&max_price=${max_price}300&product_condition=NEW&brand=${brand.join("%2C")}rare%20beauty%2Cdior%2Cchanel`;
    const options = {
	method: 'GET',
	headers
	
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;

    }