import {getproductId} from ".detail.js";

export const openRequest = indexedDB.open("storage", 1);
openRequest.onupgradeneeded = function (){
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('books')){
        db.createObjectStore('books', {keyPath: 'id'}); 
    }
}