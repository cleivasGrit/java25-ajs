import { getAllCats, postCat } from "./api";
import { renderCats } from "./render";
import type { NewCat } from "./types";
const form = document.querySelector('form');

getAllCats().then(renderCats);

form?.addEventListener('submit', async event =>{
  event.preventDefault();
  let name = form.querySelector('input')?.value;

  if(!name) name = 'Anonym';
  const newCat:NewCat = {
    name,
    is_lost: true
  }
  const data = await postCat(newCat);
  console.log(data)
  const cats = await getAllCats();
  renderCats(cats);
})