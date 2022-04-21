import { LitElement, html } from 'lit';

class BreweryDetail extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      type: { type: String },
      city: { type: String },
      visited: { type: Boolean },
    };
  }

  _changeVisited() {
    if (!this.visited) {
      this.visited = true;
    }
  }

  render() {
    return html`
      <h3>${this.name}</h3>
      <p>brewery type: ${this.type}</p>
      <p>city: ${this.city}</p>
      <p>(${this.visited ? 'visited' : 'not-visited'})</p>
      <input type="checkbox" @click="${this._changeVisited}" />
    `;
  }
}

customElements.define('brewery-detail', BreweryDetail);
