import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "weightless/banner"
import "weightless/button"
import "weightless/icon"

export interface FooterAtomProperties {
  author: string;
  link: string;
}

@customElement('footer-atom')
export class FooterAtom extends LitElement implements FooterAtomProperties {

  static styles = css`
    :host {
      display: block;
      --icon-size: 12px;
      --button-font-size: 12px;
    }

    #banner {
      display: flex;
      width: 100%;
      align-items: center;
      gap: 1rem;
    }

    #heart {
      color: #B30000;
    }
  `

  @property({type: String})
  author: string = 'your dev'

  @property({type: String})
  link: string = '#'

  render() {
    return html`
      <wl-divider></wl-divider>
      <wl-banner>
        <wl-button id="banner"
                   @click="${this.onClick}"
                   flat inverted
        >
          <code>/* crafted with </code>
          <wl-icon id="heart">favorite</wl-icon>
          <code>by ${this.author} */</code>
        </wl-button>
      </wl-banner>
    `
  }

  private onClick() {
    if (this.link) {
      window.location.href = this.link;
    }
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'footer-atom': FooterAtom
  }
}
