import type { Cat } from "./types";
import { deleteCat, patchLost } from "./api";

const container = document.querySelector('#catsContainer') as HTMLDivElement;

export const renderCats = (cats: Cat[]) => {
    container.innerHTML = '';

    cats.forEach(({ id, name, is_lost }) => {
        const card = document.createElement('div');
        const delBtn = document.createElement('button');

        card.classList.add('cat-card');
        // console.log(is_lost)
        card.innerHTML = `
            <h1>${name} - ${is_lost ? 'bortsprungen :(' : 'Hittad! :D'}</h1>
        `;

        delBtn.innerText = 'X';
        card.append(delBtn);
        container.append(card);

        // Patcha is_lost
        card.addEventListener('click', async () => {
            is_lost = !is_lost;
            const data = await patchLost(id, is_lost);

            console.log(data);
            if (data.message == 'success') {
                card.innerHTML = `
            <h1>${name} - ${is_lost ? 'bortsprungen :(' : 'Hittad! :D'}</h1>
        `;
            }
        })

        // Ta bort katt
        delBtn.addEventListener('click', async ()=>{
            const {message} = await deleteCat(id);
            if(message === 'success') card.remove();
            // console.log(message);
        })
    })


}