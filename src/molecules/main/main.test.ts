import { expect, fixture, html } from '@open-wc/testing';

import { MainMolecule } from './main.molecule';
import { beforeEach, describe } from 'node:test';

describe('Main', async () => {
  let element: MainMolecule;
  beforeEach(async () => {
    element = await fixture(html`
      <main-molecule></navbar-atom>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element)
      .shadowDom
      .to
      .be
      .accessible();
  });
});
