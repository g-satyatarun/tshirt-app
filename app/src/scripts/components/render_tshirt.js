import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.3.2/+esm';

async function loadTshirt() {
    const response = await fetch("app/assets/tshirt.json");

    console.log(response);

    const data = await response.json();
    console.log(data);

    return data.tshirts; 
}


const tshirts = await loadTshirt();


function render_tshirt(tshirts) {
    return html`
        <tshirt-card 
            company="${tshirts.company}" 
            type="${tshirts.type}"
            rating="${tshirts.rating}" 
            price="${tshirts.price}"
            image="${tshirts.image}">
        </tshirt-card>
    `;
}


function render_all_tshirts(tshirts) {
    return html`${tshirts.map(item => render_tshirt(item))}`;
}


render(render_all_tshirts(tshirts), document.getElementById('tshirt'));