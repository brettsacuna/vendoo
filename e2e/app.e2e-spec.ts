import { VendooPage } from './app.po';

describe('vendoo App', function() {
  let page: VendooPage;

  beforeEach(() => {
    page = new VendooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
