import { LitElement, css, html } from 'https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm';

export class Tshirt extends LitElement  {
    static properties = {
        image: {},
        company: {},
        type: {},
        rating: { type: Number },
        price: {},
    };

    static styles = css`
        :host {
            display: inline-block;
        }

        .tshirt {
            width: 160px;
            border: 5px solid #e0e0e0;
            border-radius: 12px;
            overflow: hidden;
            font-family: sans-serif;
            background: #fff;
        }

        .cover {
            width: 100%;
            height: 210px;
            object-fit: cover;
            display: block;
            background: #171616;
        }

        .info {
            padding: 12px;
        }

        .company {
            margin: 0 0 3px;
            font-size: 14px;
            font-weight: 600;
            color: #1a1a1a;
        }

        .type {
            margin: 0 0 8px;
            font-size: 12px;
            color: #888;
        }

        .stars {
            display: flex;
            align-items: center;
            gap: 2px;
            font-size: 14px;
        }

        .star-filled { color: #f5a623; }
        .star-empty  { color: #ddd; }

        .rating-label {
            font-size: 11px;
            color: #aaa;
            margin-left: 4px;
        }

        .price {
            font-size: 13px;
            font-weight: bold;
        }
    `;

    constructor() {
        super();
        this.company = "sample_tshirt_company";
        this.type = "sample_type";
        this.rating = 4; 
        this.price = "₹700 M.R.P";
        this.image = "app/assets/images/us_polo_webp.jpeg";
    }

    
    get stars() {
        return Array.from({ length: 5 }, (_, i) =>
            html`<span class="${i < this.rating ? 'star-filled' : 'star-empty'}">★</span>`
        );
    }

    render() {
        return html`
        <div class="tshirt">
            <img class="cover" src="${this.image}" alt="${this.company}">
            <div class="info">
                <p class="company">${this.company}</p>
                <p class="type">${this.type}</p>
                
                <div class="stars">
                    ${this.stars}
                    <span class="rating-label">${this.rating}/5</span>
                </div>

                <p class="price">${this.price}</p>
            </div>
        </div>
        `;
    }
}

customElements.define('tshirt-card', Tshirt);