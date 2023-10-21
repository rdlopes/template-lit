import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import 'weightless/nav'
import 'weightless/title'

export interface NavbarAtomProperties {
  brand: string;
}

@customElement('navbar-atom')
export class NavbarAtom extends LitElement implements NavbarAtomProperties {

  static styles = css`
    :host {
      display: block;
    }
  `

  @property()
  declare brand: string;

  constructor() {
    super();
    this.brand = 'App template';
  }

  render() {
    return html`
      <wl-nav>
        <div slot="left">
          <wl-button slot="left" fab flat inverted>
            <wl-icon alt="menu">menu</wl-icon>
          </wl-button>
        </div>
        <h1 slot="title">${this.brand}</h1>
        <div slot="right">
          <wl-button fab flat inverted>
            <wl-icon id="heart">help</wl-icon>
          </wl-button>
        </div>
      </wl-nav>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'navbar-atom': NavbarAtom
  }
}
