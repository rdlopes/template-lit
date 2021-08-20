import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import 'weightless/text';

export interface MainMoleculeProperties {
}

@customElement('main-molecule')
export class MainMolecule extends LitElement implements MainMoleculeProperties {

  static styles = css`
      :host {
        display: block;
      }
    `

  render() {
    return html`
            <wl-text size="large">Pig cow kielbasa pastrami. Drumstick pastrami prosciutto beef ribs cow shank, capicola
                ham turkey. Ham hock alcatra drumstick rump pork belly.
            </wl-text>
            <wl-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo iusto molestiae! Ab
                dolores eos fuga, laudantium omnis sed sit temporibus voluptatibus.
            </wl-text>
            <wl-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dolorem doloremque eos
                excepturi explicabo ipsum laboriosam maiores nam nesciunt odit optio quae quibusdam rerum soluta sunt
                tempore vitae voluptate voluptatem.
            </wl-text>
        `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'main-molecule': MainMolecule
  }
}
