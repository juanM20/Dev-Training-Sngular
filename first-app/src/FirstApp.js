import { LitElement, html } from 'lit';
import './BreweryApp.js';

export class FirstApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <h1>Hola mundo</h1>
      <brewery-app></brewery-app>
    `;
  }
}
