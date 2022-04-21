import { LitElement, html } from 'lit';
import './BreweryDetail.js';

class BreweryApp extends LitElement {
  static get properties() {
    return {
      breweries: {},
      loading: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.breweries = null;
    this.loading = true;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.breweries) {
      this.fetchBreweries();
    }
  }

  async fetchBreweries() {
    this.loading = true;
    const response = await fetch('https://api.openbrewerydb.org/breweries');
    const jsonResponse = await response.json();
    this.breweries = jsonResponse;
    this.loading = false;
  }

  render() {
    if (this.loading) {
      return html` <p>loading...</p> `;
    }

    return html`
      <h2>Brewery App</h2>
      <ul>
        ${this.breweries.map(
          brewery => html`
            <li>
              <brewery-detail
                .name=${brewery.name}
                .type=${brewery.brewery_type}
                .city=${brewery.city}
              >
              </brewery-detail>
            </li>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('brewery-app', BreweryApp);
