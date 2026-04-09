import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.3.2/+esm';


let allTshirts = [];

// 🔹 Load data
async function loadTshirt() {
    const response = await fetch("app/assets/tshirt.json");
    const data = await response.json();
    return data.tshirts;
}

// 🔹 Render single
function render_tshirt(t) {
    return html`
        <tshirt-card 
            .company=${t.company}
            .type=${t.type}
            .rating=${t.rating}
            .price=${t.price}
            .image=${t.image}>
        </tshirt-card>
    `;
}

// 🔹 Render list
function render_all_tshirts(tshirts) {
    if (tshirts.length === 0) {
        return html`<p>No product found ❌</p>`;
    }
    return html`${tshirts.map(t => render_tshirt(t))}`;
}

// 🔹 Search function
function searchTshirts() {
    const value = document.getElementById("searchBox").value.toLowerCase();

    const filtered = allTshirts.filter(t =>
        t.company.toLowerCase().includes(value)
    );

    render(render_all_tshirts(filtered), document.getElementById('tshirt'));
}

// 🔹 Load + initial render
allTshirts = await loadTshirt();
render(render_all_tshirts(allTshirts), document.getElementById('tshirt'));

// 🔹 Button click
document.getElementById("searchBtn").addEventListener("click", searchTshirts);

// 🔹 Enter key support
document.getElementById("searchBox").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchTshirts();
    }
});