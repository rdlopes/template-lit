import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';


export interface HomePageProperties {
}

@customElement('home-page')
export class HomePage extends LitElement implements HomePageProperties {

  static styles = css`
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    main {
      flex: 1;
      margin: 1rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #main-content {
      max-width: 800px;
    }
  `

  render() {
    return html`
      <header role="banner">
        <navbar-atom></navbar-atom>
      </header>
      <main role="main">
        <main-molecule id="main-content"></main-molecule>
      </main>
      <footer role="contentinfo">
        <footer-atom></footer-atom>
      </footer>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage
  }
}
