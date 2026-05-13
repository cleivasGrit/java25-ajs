import type { Cat, NewCat } from "./types";
const BASE_URL = 'http://localhost:3000/cats';

export const getAllCats = async ():Promise<Cat[]> => {
    const res = await fetch(BASE_URL);
    const cats:Cat[] = await res.json();
    console.log(cats)
    return cats;
}

export const patchLost = async (id:number, is_lost:boolean) => {
    const options = {
        method: 'PATCH',
        body: JSON.stringify({is_lost}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const res = await fetch(BASE_URL + '/' + id, options);
    const data = await res.json();
    // console.log(cats)
    return data;
}

export const deleteCat = async (id:number) => {
    const options = {
        method: 'DELETE'
    }
    const res = await fetch(BASE_URL + '/' + id, options);
    const data = await res.json();
    // console.log(cats)
    return data;
}

export const postCat = async (newCat:NewCat) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(newCat),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const res = await fetch(BASE_URL, options);
    const data = await res.json();
    // console.log(cats)
    return data;
}