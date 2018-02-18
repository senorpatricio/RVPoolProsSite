import { RVPoolPage } from './app.po';

describe('rvpool App', () => {
  let page: RVPoolPage;

  beforeEach(() => {
    page = new RVPoolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
