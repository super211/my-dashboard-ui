import { DdbNewPage } from './app.po';

describe('ddb-new App', () => {
  let page: DdbNewPage;

  beforeEach(() => {
    page = new DdbNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
