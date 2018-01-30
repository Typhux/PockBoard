import { PockboardPage } from './app.po';

describe('pockboard App', function() {
  let page: PockboardPage;

  beforeEach(() => {
    page = new PockboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
