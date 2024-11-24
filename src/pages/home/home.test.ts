import {expect, fixture, html} from '@open-wc/testing';

import {HomePage} from "./home.page";
import './home.page';
import { beforeEach, describe } from 'node:test';

describe('Home', async () => {
  let element: HomePage;
  beforeEach(async () => {
    element = await fixture(html`
      <home-page></home-page>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

});
