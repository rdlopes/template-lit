import {expect, fixture, html} from '@open-wc/testing';

import {FooterAtom} from './footer.atom';
import './footer.atom';

describe('Footer', async () => {
  let element: FooterAtom;
  beforeEach(async () => {
    element = await fixture(html`
      <footer-atom></footer-atom>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  it('has a divider', () => {
    const divider = element.shadowRoot!.querySelector('wl-divider')!;
    expect(divider).to.exist;
  });

  it('footer can be clicked', () => {
    const currentLocation = window.location.href;
    element.shadowRoot!.querySelector('wl-button')!.click();
    expect(window.location.href).to.equal(`${currentLocation}#`);
  });

});
