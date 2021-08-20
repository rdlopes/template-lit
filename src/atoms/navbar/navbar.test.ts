import {expect, fixture, html} from '@open-wc/testing';

import {NavbarAtom} from "./navbar.atom";
import './footer.atom';

describe('Navbar', async () => {
  let element: NavbarAtom;
  beforeEach(async () => {
    element = await fixture(html`
      <navbar-atom></navbar-atom>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

});
