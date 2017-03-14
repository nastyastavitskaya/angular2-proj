import { Angular2ProjPage } from './app.po';

describe('angular2-proj App', function() {
  let page: Angular2ProjPage;

  beforeEach(() => {
    page = new Angular2ProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
